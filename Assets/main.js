const container = document.querySelector(".container")

fetch("https://dummyjson.com/products")
    .then((x) => x.json())
    .then((data) => renderProducts(data.products))

function renderProducts(dataArray) {
   dataArray.forEach((x) => {
       const card = document.createElement("div")
       card.className = "card"
       const titleSpan = document.createElement("span")
       titleSpan.className="title"
       const descriptionSpan=document.createElement("span")
       descriptionSpan.className="description"
       const priceSpan = document.createElement("span")
       priceSpan.className="price"
       const imgSection=document.createElement("img")
       imgSection.className="card_img"
       const callSpan=document.createElement("span")
       callSpan.className="myCall"
       
      
   
       const title = x.title
       const description=x.description
       const price = x.price
       const img=x.images[0]
       callSpan.innerText="Zeng edin"
       imgSection.src=img
       titleSpan.innerText = title
       descriptionSpan.innerText=description
       priceSpan.innerText = price +" "+"AZN"

       card.appendChild(imgSection)
       card.appendChild(titleSpan)
       card.appendChild(descriptionSpan)
       card.appendChild(priceSpan)
       card.appendChild(callSpan)
       container.appendChild(card)

   });

}