import prisma from "../lib/prisma.js";

export async function index(req, res) {
  const limit = Number(req.query.limit) || 10;
  const books = await prisma.book.findMany({
    take: limit,
    include: { category: { select: { id: true, name: true } } },
    omit: { categoryId: true },
  });
  res.json(books);
}
export async function show(req, res) {
  const id = Number(req.params.id);
  if (!Number.isInteger(id))
    return res.status(400).json({ status: 400, error: "Invalid ID" });
  const book = await prisma.book.findUnique({
    where: { id },
    include: {
      category: {
        select: { id: true, name: true },
      },
    },
    omit: { categoryId: true },
  });
  if (!book)
    return res.status(404).json({ status: 404, error: "Book Not Found" });
  res.json(book);
}
export async function store(req, res) {
  const { title, publishedYear, price, categoryId } = req.body;

  if (!Number.isInteger(categoryId))
    return res.status(400).json({ status: 400, error: "Invalid Category ID" });
  const category = await prisma.category.findUnique({
    where: { id: categoryId },
  });
  if (!category)
    return res.status(404).json({ status: 404, error: "Category Not Found" });
  const newBook = await prisma.book.create({
    data: { title, publishedYear, price, categoryId },
    select: {
      id: true,
      title: true,
      publishedYear: true,
      price: true,
      categoryId: true,
    },
  });
  res.status(201).json(newBook);
}
export async function update(req, res) {
  const { title, publishedYear, price, categoryId } = req.body;

  if (categoryId !== undefined) {
    if (!Number.isInteger(categoryId))
      return res
        .status(400)
        .json({ status: 400, error: "Invalid Category ID" });
    const category = await prisma.category.findUnique({
      where: { id: categoryId },
    });
    if (!category)
      return res.status(404).json({ status: 404, error: "Category Not Found" });
  }

  const id = Number(req.params.id);
  if (!Number.isInteger(id))
    return res.status(400).json({ status: 400, error: "Invalid ID" });
  const book = await prisma.book.findUnique({ where: { id } });
  if (!book)
    return res.status(404).json({ status: 404, error: "Book Not Found" });

  const updatedBook = await prisma.book.update({
    where: { id },
    data: { title, publishedYear, price, categoryId },
  });
  res.json(updatedBook);
}
export async function destroy(req, res) {
  const id = Number(req.params.id);
  if (!Number.isInteger(id))
    return res.status(400).json({ status: 400, error: "Invalid ID" });
  const book = await prisma.book.findUnique({ where: { id } });
  if (!book)
    return res.status(404).json({ status: 404, error: "Book Not Found" });
  const deletedBook = await prisma.book.delete({
    where: { id },
  });
  res.status(204).json(deletedBook);
}
