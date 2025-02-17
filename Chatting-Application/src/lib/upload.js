import { createClient } from "@supabase/supabase-js";

// Initialize Supabase
const supabaseUrl = "https://vynwflwkgnbkzmtfqcfa.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5bndmbHdrZ25ia3ptdGZxY2ZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk1NzQwNTIsImV4cCI6MjA1NTE1MDA1Mn0.xflINtjvYY0koZdWlc1KaJNasFW-iCN5v4aaXtXzeZM";
const supabase = createClient(supabaseUrl, supabaseKey);

const upload = async (file) => {
  const fileName = "profile_pics/${file.name}";

  const { data, error } = await supabase.storage
    .from("ACM-Upload") // Replace with your bucket name
    .upload(fileName, file, {
      cacheControl: "3600",
      upsert: false,
    });

  if (error) {
    console.error("Upload failed:", error.message);
    return null;
  }

  console.log("Upload successful:", data);

  // Get the public URL of the uploaded file
  const { data: publicUrlData } = supabase.storage
    .from("ACM-Upload") // Replace with your bucket name
    .getPublicUrl(fileName);

  return publicUrlData.publicUrl;
};
export { upload };
