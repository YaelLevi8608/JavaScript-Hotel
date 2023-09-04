let room = document.querySelector('#room');
// let flag = 0;
// const consmypro = JSON.parse(localStorage.getItem('mypro1')) || [];
const users = JSON.parse(localStorage.getItem('users')) || [];
const nowUser = JSON.parse(localStorage.getItem('nowUser')) || [];
const data = {
    rooms: [],      
}


///////////////////////////
const search1 = (str, a) => {
    typeroom.innerHTML = "";
    for (let i = 0; i < a.length; i++) {
        if (a[i].type === str) {

            const div = document.createElement('div');
            if (a[i].type === "סוג החדר:סוויטה")

                div.classList.add('style');

            if (a[i].type === "סוג החדר: חדר זוגי")
                div.classList.add('style2');

            if (a[i].type ==="סוג החדר:חדר משפחתי")
                div.classList.add('style3');


            const id1 = document.createElement('h5');
            id1.innerHTML = a[i].id;


            const descraiption1 = document.createElement('p');
            descraiption1.innerHTML = a[i].descraiption;

            const status1 = document.createElement('h5');
            status1.innerHTML = a[i].status;


            const type1 = document.createElement('h6');
            type1.innerHTML = a[i].type;

            const insert1 = document.createElement("button");
            insert1.innerText = " הזמן כעת"

            insert1.onclick = () => {
                for (let j = 0; j < users.length; j++) {
                   
                    if (users[j].password === nowUser){
                        alert('החדר הוזמן בהצלחה')
                       users[j].pUser.push(a[i]);}
                       localStorage.setItem('users', JSON.stringify(users));
                    }
                }

                div.append(id1, descraiption1, status1, type1, insert1);
                typeroom.append(div);

            }
        }

    }

    const searchmain = (str) => {
        let p = $.ajax({
            method: 'GET',
            url: './orderooms.json',
            success: (data) => {
                // פונקציה זו תיקרא אחרי שיגיעו הנתונים מהשרת, והיא מקבלת כפרמטר את הנתונים שחזרו
                debugger

                search1(str, data);
            }
        });
    }



    let f = 0;
    const s1 = document.querySelector('#s');
    s1.onclick = () => {

        searchmain("סוג החדר:סוויטה");



    }
    const z1 = document.querySelector('#z');
    z1.onclick = () => {

        searchmain("סוג החדר: חדר זוגי");

    }
    const m3 = document.querySelector('#m5');
    m3.onclick = () => {

        searchmain("סוג החדר:חדר משפחתי");

    }
    /************************** */
    "use strict";
    $(document).ready(() => {
        /*------- button with class register -------*/
        let reg_btn = $('.container .register');
        /*------- button with class sign in --------*/
        let sig_btn = $('.container .signin');
        /*------- back button ----------------------*/
        let back_btn = $('.container .back');
        reg_btn.click(function (e) {
            e.preventDefault();
            $(this).siblings('.reg').css({
                'transform': 'translateY(40%) scale(5)',
                'border-radius': '0',
                'width': '100%',
                'height': '100%'
            }).end();
            reg_btn.siblings('.container h3:nth-of-type(1)').css({
                'top': '40%',
                'z-index': '8',
            }).end().end();
        });
        sig_btn.on('click', function (e) {
            e.preventDefault();
            $(this).siblings('.sig').css({
                'transform': 'translateY(40%) scale(5)',
                'border-radius': '0',
                'width': '100%',
                'height': '100%'
            }).end();
            sig_btn.siblings('.container h3:nth-of-type(2)').css({
                'top': '40%',
                'z-index': '8',
            }).end().end();
        });
    });
    const l = document.querySelector('button');
/********************* */
