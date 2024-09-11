const addBookButton = document.getElementById('addBook');
const formContainer = document.querySelector('#formContainer');
const booksHome = document.querySelector('#booksHome');
/*------------------показываем книгу------------------------------------*/
const btnOpen1 = document.getElementById("openBook1");
const info1 = document.getElementById("infoBox1");
const btnOpen2 = document.getElementById("openBook2");
const info2 = document.getElementById("infoBox2");
const btnOpen3 = document.getElementById("openBook3");
const info3 = document.getElementById("infoBox3"); 

btnOpen1.addEventListener('click', () => {
    info1.style.display = info1.style.display === 'flex' ? 'none' : 'flex';
    info2.style.display = 'none'; 
    info3.style.display = 'none'; 
});

btnOpen2.addEventListener('click', () => {
    info2.style.display = info2.style.display === 'flex' ? 'none' : 'flex';
    info1.style.display = 'none'; 
    info3.style.display = 'none'; 
});

btnOpen3.addEventListener('click', () => {
    info3.style.display = info3.style.display === 'flex' ? 'none' : 'flex';
    info1.style.display = 'none'; 
    info2.style.display = 'none'; 
});

/*------------------------добавляем книгу------------------------------*/
const add = document.getElementById("add");

add.addEventListener(("click"), function () {
    const name = document.querySelector('#title').value;
    const text = document.querySelector('#text').value;
    const options = document.querySelector('#options').value;
    const addPhoto = document.querySelector('#addPhoto').files[0];
    const photoURL = URL.createObjectURL(addPhoto);
    const newBookId = `book${new Date().getTime()}`;
    if (name && text && options && addPhoto) {
        document.querySelector('#book4').innerHTML = `
        <div class="book">
                <img src='${photoURL}' alt="book">
                <div class="textBox">
                    <h2>${name}</h2>
                    <p>${text}</p>
                    <p>${options}</p>
                    <input id="${newBookId}" class="openBook" type="button" value="Открыть."> 
                </div>
            </div>
      `
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



const btnOpen4 = document.getElementById("newBookId");


btnOpen4.addEventListener('click', () => {
 const info4 = document.getElementById("infoBox4"); 

const name = document.querySelector('#title').value;
  const text = document.querySelector('#text').value;
 const options = document.querySelector('#options').value;
  const addPhoto = document.querySelector('#addPhoto').files[0];
  const photoURL = URL.createObjectURL(addPhoto);

 info4.innerHTML = `
      <div class="infoBox">
           <img src="${photoURL}" alt="book">
           <div class="textBooksHome">
             <h2>${name}</h2>
            <p>${text}</p>
             <p>${options}</p>
         </div>
      </div>
   `;

   info4.style.display = info4.style.display === 'flex' ? 'none' : 'flex';
});
console.log('hh');