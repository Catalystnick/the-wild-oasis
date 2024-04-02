import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("Cabins").select("*");

  if (error) {
    console.error("error");
    throw new Error("cabins could not be loaded");
  }

  return data;
}

export async function deleteCabin(id) {
  const { error } = await supabase.from("Cabins").delete().eq("id", id);

  if (error) {
    console.error("error");
    throw new Error("cabins could not be loaded");
  }
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/Cabin-Images/${imageName}`;
  //https://nrodaxnjsyhfmvpxkxxd.supabase.co/storage/v1/object/public/Cabin-Images/cabin-001.jpg

  //1.Create Cabin
  let query = supabase.from("Cabins");

  //Create
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  //Edit
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error("error");
    throw new Error("cabins could not be created");
  }

  //upload image
  if (hasImagePath) return data;
  const { error: storageError } = await supabase.storage
    .from("Cabin-Images")
    .upload(imageName, newCabin.image);

  if (storageError) {
    await supabase.from("Cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created"
    );
  }
  return data;
}

export default getCabins;
