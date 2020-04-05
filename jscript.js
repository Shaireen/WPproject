fetch("http://designhavn.dk/RecreateWebsite/wp-json/wp/v2/property?_embed")
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        showData(data)
    })

function showData(showProperties) {
    console.log(showProperties);


    showProperties.forEach(showOneProperty);

    function showOneProperty(oneProperty) {
        const template = document.querySelector("template").content;
        const clone = template.cloneNode(true);

     clone.querySelector(".flat .address").textContent = oneProperty.address;
        clone.querySelector(".bath2").textContent = oneProperty.bathrooms;
        clone.querySelector(".bed2").textContent = oneProperty.bedrooms;
        clone.querySelector(".sqm2").textContent = oneProperty.space;
        clone.querySelector("img").src= oneProperty._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;
        document.querySelector("main").appendChild(clone);
    }
}


 function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
