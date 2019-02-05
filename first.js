const article_head = document.querySelector(".article__header")
article_head.textContent =  "Welcome to the Prafullata's blog"

const article_head_all = document.querySelectorAll(".article__header")
console.log(article_head_all)
for(let i=0; i<article_head_all.length;i++){
    article_head_all[i].classList ="article__header important"
}
//article_head_all[0].classList ="article__header important"
console.log(article_head_all[0].classList)
//article_head_all[1].classList="article__header important"
console.log(article_head_all[0].classList)

const dashed_class = document.querySelector(".dashed")
dashed_class.classList.remove("dashed")

const footer_class = document.querySelector(".article__footer")
footer_class.classList.add("goldenrod")
console.log(footer_class.classList)
