const posthandler = async (event) => {
  event.preventDefault();

  const title = document.getElementById("title-input").value.trim();
  const body = document.getElementById("post-body").value.trim();

  if (title && body) {
    const response = await fetch("/api/post/newPost", {
      method: "POST",
      body: JSON.stringify({ title, body }),
      headers: { "Content-Type": "application/json" },
    });

    console.log(title, body);

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in.");
    }
  }
};

document.getElementById("post-form").addEventListener("submit", posthandler);
