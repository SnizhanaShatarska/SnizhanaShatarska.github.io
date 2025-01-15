const url = 'https://semegenkep.github.io/itca/superheroes.json'

function populate() {
 axios.get(url)
  .then(responce => {
   populateHeader(responce.data);
   populateHeroes(responce.data.members);
  })
}

function populateHeader(heroData) {
 const header = document.querySelector('header')
 console.log(header)

 const h1 = document.createElement('h1')
 const p = document.createElement('p')

 h1.textContent = heroData.squadName
 p.textContent = `Hometown: ${heroData.homeTown} // Formed: ${heroData.formed}`

 header.append(h1)
 header.append(p)
}

function populateHeroes(members) {
 const section = document.querySelector('section')

 for (var i = 0; i < members.length; i++) {
  const article = document.createElement('article')

  const h2 = document.createElement('h2')
  h2.textContent = members[i].name
  const p1 = document.createElement('p')
  p1.textContent = 'Secret identity: ' + members[i].secretIdentity
  const p2 = document.createElement('p')
  p2.textContent = `Age: ${members[i].age}`
  const p3 = document.createElement('p')
  p3.textContent = 'Superpowers:'
  const ul = document.createElement('ul')

  for (var j = 0; j < members[i].powers.length; j++) {
   const li = document.createElement('li')
   li.textContent = members[i].powers[j]
   if (j % 2 === 0) {
    li.classList.add('color-red')
   }
   ul.append(li)
  }

  article.append(h2)
  article.append(p1)
  article.append(p2)
  article.append(p3)
  article.append(ul)
  section.append(article)
 }

}

populate();
