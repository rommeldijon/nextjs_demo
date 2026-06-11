import books from "@/app/api/db";

//returns JSON data
export async function GET() {
    return Response.json(books);
}