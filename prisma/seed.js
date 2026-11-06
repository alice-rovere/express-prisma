//npx prisma db seed //per eseguirlo
//setup del client
import 'dotenv/config'
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../generated/prisma/index.js";
import { categories } from "./data/categories.js";


const adapter = new PrismaMariaDb(process.env.DATABASE_URL)
const prisma = new PrismaClient({adapter})

async function main(){
    //  console.log('Seeding started');
    await prisma.category.createMany({
        data : categories.map((cat)=>({
            name: cat,
        })),
    }) ;
}



//chiamiamo la funzione con il catch dell'errore pasasto da Prisma
main()
  .catch(e => {
    console.log(e);
    process.exit(1); // termina il processo nel terminale
  })
  .finally(() => prisma.$disconnect()); // chiude connessione al DB