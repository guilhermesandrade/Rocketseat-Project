function toggleMode() {
  const html = document.documentElement

  /* --Forma bruta/lógica abaixo--

  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
  
    --Forma simplificada abaixo--     */

  html.classList.toggle('light')
}
