
            const myImages = document.images;
            let text = "";
            for (let i = 0; i < myImages.length; i++) {
              text +=  myImages[i].src + "<br>";
            }
            document.getElementById("demo").innerHTML = text;
     