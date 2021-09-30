

let cardArray = [ 
    { name: "bird", img: "images/bird.JPG", }, 
    { name: "bird", img: "images/bird.JPG", }, 
    { name: "fish", img: "images/fish.JPG", }, 
    { name: "fish", img: "images/fish.JPG", }, 
    { name: "giraffe", img: "images/giraffe.JPG", },
    { name: "giraffe", img: "images/giraffe.JPG", },
    { name: "fox", img: "images/fox.JPG", },
    { name: "fox", img: "images/fox.JPG", },
    { name: "zebra", img: "images/zebra.JPG", },
    { name: "zebra", img: "images/zebra.JPG", },
    { name: "leopard", img: "images/leopard.JPG", },
    { name: "leopard", img: "images/leopard.JPG", },
    ]; 
    
    //define variables and get DOM element

    let grid = document.querySelector(".grid"); 
    let scoreBoard = document.querySelector(".scoreBoard"); 
    let playAgain = document.querySelector(".playAgain"); 
    let imgs; 
    let cardsId = []; 
    let cardsSelected = []; 
    let cardsWon = 0; 
    let clicks = 0;
    
  
    document.addEventListener("DOMContentLoaded", function () {
        let clickBoard = document.querySelector(".clickBoard"); 
        let scoreBoard = document.querySelector(".scoreBoard"); 
    

    //define functions 
        
        createBoard(grid, cardArray); 
        arrangeCard();
        
    //add a click function for images 
        
        imgs = document.querySelectorAll("img");
        Array.from(imgs).forEach(img => 
        img.addEventListener("click", flipCard)
        );
    });

    //createBoard function

    function createBoard(grid, array) { 
        array.forEach((arr, index) => { 
        let img = document.createElement("img"); 
        img.setAttribute("src", "images/background.JPG");
        img.setAttribute("data-id", index); 
        document.querySelector(".grid").appendChild(img); 
        });
    }
    
    // arrangeCard function
    
    function arrangeCard() { 
        cardArray.sort(() => 0.5 - Math.random());
    }
    
    // flip Card function
    
    function flipCard() { 
        let selected = this.dataset.id;
        cardsSelected.push(cardArray[selected].name); 
        cardsId.push(selected); 
        this.classList.add("flip"); 
        this.setAttribute("src", cardArray[selected].img); 
        if (cardsId.length === 2) { 
        setTimeout(checkForMatch, 500);
        } 
    }

    // checkForMatch function
    
    function checkForMatch() { 
        let imgs = document.querySelectorAll("img"); 
        let firstCard = cardsId[0];
        let secondCard = cardsId[1];
        if (cardsSelected[0] === cardsSelected[1]) { 
        cardsWon += 2; 
        scoreBoard.innerHTML = cardsWon; 
        checkWon();
        } else { 
        imgs[firstCard].setAttribute("src", "images/background.JPG");
        imgs[secondCard].setAttribute("src", "images/background.JPG"); 
        imgs[firstCard].classList.remove("flip"); 
        imgs[secondCard].classList.remove("flip"); 
    } 
    
    cardsSelected = []; 
    cardsId = []; 
    clicks += 2; 
    document.querySelector(".clickBoard").innerHTML = clicks; 
    }
    
    function checkWon() {
        if (cardsWon == cardArray.length) {
        alert("Congratulations!You won");
      }
    }
