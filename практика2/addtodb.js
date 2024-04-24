


    let info = [];
// Заполнение в виде -> {id:1592304983049, title: 'Deadpool', year: 2015}
const AddData = (ev)=>{
    ev.preventDefault();  //остановка отправки формы
    
    let DATA = {
        numberfond : document.getElementById('number-fondR').value,      // обяз                          // берём информацию из поля по его личному id
        numberopis : document.getElementById('number-opisR').value,      // обяз
        numberdela : document.getElementById('number-delaR').value,      // обяз
        numberdelaS : document.getElementById('number-delaSR').value,
        lastname : document.getElementById('last-nameR').value,          // обяз
        firstname : document.getElementById('first-nameR').value,        // обяз
        midlename : document.getElementById('midle-nameR').value,        // обяз
        dateofbirthday : document.getElementById('date-of-birthdayR').value,        
        monthofbirthday : document.getElementById('month-of-birthdayR').value,      
        yearofbirthday : document.getElementById('year-of-birthdayR').value,        
        placeofbirthday : document.getElementById('place-of-birthdayR').value,      // обяз
        numberofsheets : document.getElementById('number-of-sheetsR').value,        // обяз
        employeecategory : document.getElementById('employee-categoryR').value,     // обяз
        note : document.getElementById('noteR').value
    }
    

    info.push(DATA); //отправка значений из инпутов в массив
    document.forms[1].reset(); //сброс всех инпутов до изначальных значений
    console.warn('added' , {info} ); //предупреждение в консоли что отправка данных была выполнена

    let index = JSON.parse(localStorage.getItem('DataStorage')) || 1;
    localStorage.setItem(`DataStorage${index}`, JSON.stringify(info)); //сохранение данных в локальное хранилище вашего компьютера          (localStorage.getItem('DataStorage') || '') + '', 

    console.log(note);
}

    document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('submit-add').addEventListener('click', AddData); // обработка события нажите на кнопку
});














const search = (ev) =>{
    ev.preventDefault();
    let DBS = JSON.parse(localStorage.getItem('DataStorage1'))

    numberfonds = document.getElementById('number-fond').value;     
    numberopiss = document.getElementById('number-opis').value;      
    numberdelas = document.getElementById('number-dela').value;      
    numberdelaSs = document.getElementById('number-delaS').value;
    lastnames = document.getElementById('last-name').value;    
    firstnames = document.getElementById('first-name').value;        
    midlenames = document.getElementById('midle-name').value;        
    dateofbirthdays = document.getElementById('date-of-birthday').value;        
    monthofbirthdays = document.getElementById('month-of-birthday').value;      
    yearofbirthdays = document.getElementById('year-of-birthday').value;        
    placeofbirthdays = document.getElementById('place-of-birthday').value;      
    numberofsheetss = document.getElementById('number-of-sheets').value;        
    employeecategorys = document.getElementById('employee-category').value;     
    notes = document.getElementById('note').value;

    DBS.forEach(function(item) {
        ev.preventDefault();
        numberfond = document.getElementById('number-fond').value;     
        numberopis = document.getElementById('number-opis').value;      
        numberdela = document.getElementById('number-dela').value;      
        numberdelaS = document.getElementById('number-delaS').value;
        lastname = document.getElementById('last-name').value;    
        firstname = document.getElementById('first-name').value;        
        midlename = document.getElementById('midle-name').value;        
        dateofbirthday = document.getElementById('date-of-birthday').value;        
        monthofbirthday = document.getElementById('month-of-birthday').value;      
        yearofbirthday = document.getElementById('year-of-birthday').value;        
        placeofbirthday = document.getElementById('place-of-birthday').value;      
        numberofsheets = document.getElementById('number-of-sheets').value;        
        employeecategory = document.getElementById('employee-category').value;     
        note = document.getElementById('note').value;


        if(numberfond == numberfonds)
        {
            // let peroductdel = e.target.closest('.product')
            // peroductdel.remove()
            console.log("+++++++++++++++")
        }
        else if(numberfond != numberfonds)
        {
            console.log("------------")
        }

    });
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('search-btn').addEventListener('click', search);
});
