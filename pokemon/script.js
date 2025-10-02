
async function getPokemon(){
    const infos = JSON.parse(localStorage.getItem("pokemon"))
    console.log(infos, "pokemon")
    const div = document.querySelector("div")
    const p = document.createElement("p")
    p.innerText = infos.name
    const sprite = document.createElement("img")
    sprite.src = infos.sprites.front_default
    
    const repo = await fetch(infos.species.url)
    const info = await repo.json()
    console.log(info,"species")

    const k = document.createElement("p")
    k.innerText = info.base_happiness

    
    div.append(p,sprite,k)
}
getPokemon()