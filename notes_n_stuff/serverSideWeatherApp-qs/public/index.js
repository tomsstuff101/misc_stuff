const button = document.getElementById("subButton")

//event listener fires on click, sets textContent before fetch, then displays data once fetch has completed.
button.addEventListener("click", async () => {
  const input = document.getElementById("place")

  await fetch(`/?location=${input.value}`)
  window.location = `/?location=${input.value}`
})
