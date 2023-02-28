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

  const img = document.queryselector("#profile img")

  if (html.classList.contains("light")) {
    img.setattribute("src", "./assets/avatar-light.png")
  } else {
    img.setattribute("src", "./assets/avatar.png")
  }
}
