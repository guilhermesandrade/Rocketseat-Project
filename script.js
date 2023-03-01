function toggleMode() {
  const html = document.documentElement

  /* --Forma bruta/lógica abaixo--

  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
  
    --Forma simplificada abaixo--     */

  html.classList.toggle("light")

  /* Agora para trocar a imagem */

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatarlight.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
