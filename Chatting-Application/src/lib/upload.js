const upload = async (file) => {
  const apiKey = "2ba2c000eb664f7f885f1653aad35ed8";
  const url = "https://api.imgbb.com/1/upload";

  const formData = new FormData();
  formData.append("image", file);
  formData.append("key", apiKey);

  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      console.log("Upload successful:", result.data.url);
      return result.data.url;
    } else {
      console.error("Upload failed:", result.error.message);
      return null;
    }
  } catch (error) {
    console.error("Error uploading file:", error);
    return null;
  }
};

export { upload };
