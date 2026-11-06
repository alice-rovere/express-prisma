//npx prisma db seed //per eseguirlo
//setup del client
import 'dotenv/config'
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../generated/prisma/index.js";
import { categories, authors } from "./data/categories.js";
import { randomYear, randomPrice, randIndex } from "./data/functions.js";


const adapter = new PrismaMariaDb(process.env.DATABASE_URL)
const prisma = new PrismaClient({adapter})

async function main(){
console.log('Seeding started');
//eliminazione cateogire precedenti
// await prisma.category.deleteMany();

//creazione categorie prese dal file data/categories
    await prisma.category.createMany({
        data : categories.map((cat)=>({
            name: cat,
        })),
    }) ;
// lettura degli id delle categorie appena create
const actualCategories = await prisma.category.findMany();
console.log(actualCategories);
//creazione randomica books

const books = [];
for(let i=0; i <actualCategories.length; i++){
    books.push({
        title : `Book ${i+1}`,
        publishedYear : randomYear(),
        price : randomPrice(),
        categoryId : actualCategories[randIndex(actualCategories.length)].id,
    })
}

// await prisma.book.createMany({
//     data: books
// });

//creazione randomica authors
const actualAuthors = [];
for(let i=0; i < authors.length; i++){
    actualAuthors.push(authors[i]);
}
await prisma.author.createMany({
    data: authors
});

}
//chiamiamo la funzione con il catch dell'errore pasasto da Prisma
main()
  .catch(e => {
    console.log(e);
    process.exit(1); // termina il processo nel terminale
  })
  .finally(() => prisma.$disconnect()); // chiude connessione al DB