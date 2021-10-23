const linksRedesSocial = {
  github: 'Eziquielsilva',
  youtube: 'UCdZXAVlnyA32zr8XknC6Y2g',
  facebook: 'eziquiel.els',
  instagram: 'zick_silva',
  twitter: 'zick300'
}

function changeSocialMedialinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksRedesSocial[social]}`
  }
}

function getGithubProfile() {
  const url = `https://api.github.com/users/${linksRedesSocial.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImg.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGithubProfile()
