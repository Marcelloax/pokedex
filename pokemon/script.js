
async function getPokemon(){
    const infos = JSON.parse(localStorage.getItem("pokemon"))
    console.log(infos, "pokemon")
    const div = document.querySelector("div")
    const p = document.createElement("p")
    p.innerText = infos.name
    const sprite = document.createElement("img")
    sprite.src = infos.sprites.versions["generation-v"]["black-white"].animated.front_default
    
    const repo = await fetch(infos.species.url)
    const info = await repo.json()
    console.log(info,"species")

    const entry = info.flavor_text_entries.find(e =>
    e.language.name === "pt" || e.language.name === "en");
    const historia = document.createElement("p");
    historia.classList.add("historia");
    historia.innerText = entry ?
    entry.flavor_text.replace(/\f/g, " ") : "historia não encontrada.";

    const tipo = infos.types[0].type.name;
  const backgrounds = document.createElement("div");
  backgrounds.classList.add("pokemon-background", tipo);

  backgrounds.append(p, sprite,historia);
  div.append(backgrounds);
}
getPokemon()