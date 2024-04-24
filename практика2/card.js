let raw = localStorage.getItem('DataStorage1')
const DB = JSON.parse(raw)
DB.forEach(function(item){

        let LFM = `${item["lastname"]} ${item["firstname"]} ${item["midlename"]}`
        let numberfond = `${item["numberfond"]}`
        let numberopis = `${item["numberopis"]}`
        let numberdela = `${item["numberdela"]}`
        let Date = `${item["dateofbirthday"]}.${item["monthofbirthday"]}.${item["yearofbirthday"]}`


    let product = document.createElement('div')
    product.classList.add('product')
    product.innerHTML = `
        <button class="deleate">X</button>
        <button class="redact">/</button>
                <a href="#persona" class="product__title">${LFM}</a>
                <p>Дата рождения: ${Date}</p>
                <p>Номер фонда: ${numberfond}</p>
                <p>Номер описи: ${numberopis}</p>
                <p>Номер дела: ${numberdela}</p>
    `
    document.querySelector('.ogrmaxw').append(product)

    })


























    
    // console.log(localStorage.getItem('DataStorage'))


    // let Perss = localStorage.getItem('DataStorage')
    // const DBperss = JSON.parse(Perss) 
    // DBperss.forEach(function(item){
    //         let LFM = `${item["lastname"]} ${item["firstname"]} ${item["midlename"]}`
    //         let numberfond = `${item["numberfond"]}`
    //         let numberopis = `${item["numberopis"]}`
    //         let numberdela = `${item["numberdela"]}`
    //         let numberdelaS = `${item["numberdelaS"]}`
    //         let Date = `${item["dateofbirthday"]}.${item["monthofbirthday"]}.${item["yearofbirthday"]}`
    //         let placeofbirthday = `${item["placeofbirthday"]}`
    //         let numberofsheets = `${item["numberofsheets"]}`
    //         let employeecategory = `${item["employeecategory"]}`
    //         let note = `${item["note"]}`

    //     for(let i=0; i<DB.length; i++){
    //         let item = document.createElement('div')
    //         item.classList.add('item')
    //         item.innerHTML = `
    // <div class="box22" id="box22">
    //                 <a href="index.html" class="close"></a>
    //                 <h1 class="FIOH">${LFM}</h1>
    //                 <p class="b22P">Номер фонда: ${numberfond}</p>
    //                 <p class="b22P">Номер описи: ${numberopis}</p>
    //                 <p class="b22P">Номер дела: ${numberdela}</p>
    //                 <p class="b22P">Номер дела(старый): ${numberdelaS}</p>
    //                 <p class="b22P">Дата рождения: ${Date}</p>
    //                 <p class="b22P">Место рождения: ${placeofbirthday} </p>
    //                 <p class="b22P">Количество листов: ${numberofsheets}</p>
    //                 <p class="b22P">Категория сотрудника: ${employeecategory}</p>
    //                 <p class="b22P">Примечание: ${note}</p>
    //             </div>
    // `
    //     }
    // })
