const commentHandler = async (event) => {
  event.preventDefault();

  const title = document.getElementById("title-input").value.trim();
  const body = document.getElementById("body-input").value.trim();

  if (title && body) {
    const response = await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({ title, body }),
      headers: { "Content-Type": "application/json" },
    });

    console.log(title, body);

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to add comment");
    }
  }
};

document
  .getElementById("comment-form")
  .addEventListener("submit", commentHandler);
