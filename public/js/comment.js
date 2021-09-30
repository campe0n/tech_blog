const commentHandler = async (event) => {
  event.preventDefault();
  const comment = document.getElementById("comment-input").value.trim();

  if (comment) {
    const response = await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log(comment);
    }
    document.location.reload("/");
  } else {
    alert("Failed to add comment");
  }
};
document
  .getElementById("comment-form")
  .addEventListener("submit", commentHandler);
