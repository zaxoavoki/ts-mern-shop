import mongoose from "mongoose";

export async function connect(uri?: string, name?: string): Promise<void> {
    await mongoose.connect(`${uri}/${name}`, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("🚀 Connected successfully to Database");
}
