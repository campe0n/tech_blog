const posthandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('input[type="text"]').value.trim();
  const body = document.querySelector("input[type='submit']").value.trim();

  if (title && body) {
    const response = await fetch("/api/post", {
      method: "POST",
      body: JSON.strinfigify({ title, body }),
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

document.querySelector("form").addEventListener("submit", posthandler);
