
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
    { name: "gibbon", img: "images/gibbon.JPG", },
    { name: "gibbon", img: "images/gibbon.JPG", },
    { name: "reptile", img: "images/reptile.JPG", },
    { name: "reptile", img: "images/reptile.JPG", },
    ]; 
    
    //define variables and get DOM element

    let grid = document.querySelector(".grid"); 
    let scoreBoard = document.querySelector(".scoreBoard"); 
    let popup = document.querySelector(".popup"); 
    let playAgain = document.querySelector(".playAgain"); 
    let clickBoard = document.querySelector(".clickBoard"); 
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
        document.querySelector(".playAgain").addEventListener("click", replay); 
        
        //add a click function for images 
        
        imgs = document.querySelectorAll("img");
        Array.from(imgs).forEach(img => 
        img.addEventListener("click", flipCard)
        ) 
    });

    //createBoard function

    function createBoard(grid, array) { 
        console.log(array);
        document.querySelector(".popup").style.display = 'none'; 
        array.forEach((arr, index) => { 
        let img = document.createElement("img"); 
        img.setAttribute("src", "images/background.JPG");
        img.setAttribute("data-id", index); 
        document.querySelector(".grid").appendChild(img); 
        })
    }
    
    // arrangeCard function
    
    function arrangeCard() { 
        cardArray.sort(() => 0.5 - Math.random())
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
        if (cardsSelected[0] === cardsSelected[1] && firstCard !== secondCard) { 
            alert("you have found a match"); 
        cardsWon += 1; 
        scoreBoard.innerHTML = cardsWon; 
        setTimeout(checkWon,500) 
        } else { 
        imgs[firstCard].setAttribute("src", "images/background.JPG");
        imgs[secondCard].setAttribute("src", "images/background.JPG"); 
        alert("wrong, try again"); imgs[firstCard].classList.remove("flip"); 
        imgs[secondCard].classList.remove("flip"); 
    } 
    cardsSelected = []; 
    cardsId = []; 
    clicks += 1; 
    document.querySelector(".clickBoard").innerHTML = clicks; 
    }
    
    function checkWon() {
        if (cardsWon == cardArray.length / 2) {
        alert("You won") 
        setTimeout(()=> popup.style.display = "flex" ,300); 
        }
    }


    // The replay function

    function replay() { 
        arrangeCard(); 
        grid.innerHTML = "";
        createBoard(grid, cardArray);
        cardsWon = 0;
        clicks = 0; 
        clickBoard.innerHTML = 0; 
        scoreBoard.innerHTML = 0; 
        popup.style.display = "none"; 
    }