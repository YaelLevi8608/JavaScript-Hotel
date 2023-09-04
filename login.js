/**************login*************** */
const users = JSON.parse(localStorage.getItem('users')) || [];
const nowUser = JSON.parse(localStorage.getItem('nowUser')) || [];
let url = new URL(location.href);
const loginBtn = document.querySelector('#login');
const signinBtn = document.querySelector('#signin');
const uEmail = document.querySelector('#email');
const uPwd = document.querySelector('#pwd');
// const uEmail = document.querySelector('#email2');
// const uPwd2 = document.querySelector('#pwd2');

signinBtn.onclick = () => {

    let x = 0;
    for (let i = 0; i < users.length; i++) {

        if (uEmail.value === users[i].mail && uPwd.value === users[i].password) {
            const nowUser = uPwd.value;

            localStorage.setItem('nowUser', JSON.stringify(nowUser));
            location.href='index.html';
            break;
        }


        x = i;
    }
   
    if (x === users.length-1) {
        alert("זוהי כניסתך הראשונה למערכת, עליך להירשם תחילה!")
    }
    uEmail.value = '';
    uPwd.value = '';

}
loginBtn.onclick = () => {
 
    const a = uEmail.value;
    const b = uPwd.value;
    for (let i = 0; i < users.length; i++) {
      
        if (uEmail.value === users[i].mail && uPwd.value === users[i].password) {
            alert('אין צורך להירשם מחדש... אנחנו כבר מכרים וותיקים')
            location.href='index.html';
            break;
        }
        if (!(uEmail.value === users[i].mail && uPwd.value === users[i].password) )
        alert('נרשמת בהצלחה');
    }
     location.href='index.html';
   
    const newUser = {
        mail: a,
        password: b,
        pUser: [],
    };
    const nowUser = uPwd.value;
    localStorage.setItem('nowUser', JSON.stringify(nowUser));
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    uEmail.value = "";
    uPwd.value = "";
}




