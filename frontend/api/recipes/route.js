import connectMongoDB from "../../libs/mongodb";


export async function POST(request){
    const {title, description } = await request.json();
    console.debug("hjhj");

    await connectMongoDB();
    await Recipe.create({title, description})
    return NextResponse.json({message: "Recipe created"}, {status: 201})
}