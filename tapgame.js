window.addEventListener('DOMContentLoaded', () => {
    const text = document.querySelector('.screen')
    const btn = document.querySelector('.not')
    const bost = document.querySelector('.x2')
    const exp = document.querySelector('.exp')
    let a = 1
    bost.addEventListener('click', () => {
      a = a + 10
      bost.style = 'display:none'
    })
    let i = 0
    btn.addEventListener('click', () => {
      exp.textContent = i
      i = i + 10 + a
      if (i === 100) {
        alert("yavvvaş amına goduğum'")
      } else if (i === 1000) {
        alert("sakin ula")
      } else if (i === 10000) {
        prompt('Kartan`di jaz:')
      } else if (i === 500) {
        bost.style = 'display:block;'
      } else if (i > 99999) {
        i = i * 0
      }
      text.textContent = i
    })
  })