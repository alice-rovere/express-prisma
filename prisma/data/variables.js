// export const categories = [
//   { name: "Narrativa" },
//   { name: "Fantasy" },
//   { name: "Fantascienza" },
//   { name: "Gialli" },
//   { name: "Thriller" },
//   { name: "Romance" },
//   { name: "Storici" },
//   { name: "Biografie" },
//   { name: "Saggi" },
//   { name: "Bambini" },
// ];
// nel seed.js poi lo faccio creare con:
// await prisma.category.createMany({ data: categories });

export const categories = [
  "Narrativa",
  "Fantasy",
  "Fantascienza",
  "Gialli",
  "Thriller",
  "Romance",
  "Storici",
  "Biografie",
  "Saggi",
  "Bambini",
];

export const authors = [
    { name: "Maria", surname: "Rossi" },
    { name: "Luca", surname: "Bianchi" },
    { name: "Giulia", surname: "Verdi" },
    { name: "Marco", surname: "Neri" },
    { name: "Anna", surname: "Gialli" },
    { name: "Paolo", surname: "Rossi" },
    { name: "Elena", surname: "Bianchi" },
    { name: "Davide", surname: "Verdi" },
    { name: "Francesca", surname: "Neri" },
    { name: "Simone", surname: "Gialli" },
]
