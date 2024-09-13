const addBookButton = document.querySelector('#addBook');
const formContainer = document.querySelector('#formContainer');
const booksHome = document.querySelector('#booksHome');
/*------------------показываем книгу------------------------------------*/

let blockCount = 3;
let infoNew = 'info'+blockCount;

/*------------------------добавляем книгу------------------------------*/
const add = document.getElementById("add");

add.addEventListener(("click"), function () {
    blockCount++
    const name = document.querySelector('#title').value;
    const text = document.querySelector('#text').value;
    const options = document.querySelector('#options').value;
    const addPhoto = document.querySelector('#addPhoto').files[0];
    const photoURL = URL.createObjectURL(addPhoto);
    
    if (name && text && options && addPhoto) {
        document.querySelector('#book4').innerHTML += `
        <div class="book">
                <img src='${photoURL}' alt="book">
                <div class="textBox">
                    <h2>${name}</h2>
                    <p>${text}</p>
                    <p>${options}</p>
                    <input id="block-${blockCount}" class="openNewBook" type="button" value="Открыть."> 
                </div>
            </div>
      `
      document.getElementById("infoBox4").innerHTML += `
          <div class="infoBox" id="info${blockCount}">
               <img src="${photoURL}" alt="book">
               <div class="textBooksHome">
                 <h2>${name}</h2>
                <p>${text}</p>
                 <p>${options}</p>
             </div>
          </div>
       `;

        booksHome.style.display = 'flex'; 
        formContainer.style.display = 'none';

       
       document.querySelector('#title').value = '';
        document.querySelector('#text').value = '';
        document.querySelector('#options').value = '';
        document.querySelector('#addPhoto').value = ''; 
        
   
    } else {
        alert("Заполните все поля.");
    }
});
/*--------------------------показываем форму----------------------------*/

addBookButton.onclick = function() {
    booksHome.style.display = 'none'; 
    formContainer.style.display = 'flex'; 
};
/*--------------------------показываем инфо 4----------------------------*/



//-------------------------------------------------------

document.getElementById('booksHome').addEventListener('click', (e) => {
        if(e.target.className === 'openNewBook'){
            const buttonId = e.target.id; 
        const blockCountLast = buttonId.split('-')[1]; 
        const infoElement = document.getElementById(`info${blockCountLast}`); 

        if (infoElement) {
            infoElement.style.display = infoElement.style.display === 'flex' ? 'none' : 'flex';
        }
    }}
    
   )
;




