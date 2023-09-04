const users = JSON.parse(localStorage.getItem('users')) || [];
const nowUser = JSON.parse(localStorage.getItem('nowUser')) || [];
for (let i = 0; i < users.length; i++) {
   
    if (users[i].password === nowUser) {
        for (j = 0; j < users[i].pUser.length; j++) {
            const div = document.createElement('div');
            div.classList.add('style4');
            const id1 = document.createElement('h5');
            id1.innerHTML = users[i].pUser[j].id;

            const descraiption1 = document.createElement('p');
            descraiption1.innerHTML = users[i].pUser[j].descraiption;

            const status1 = document.createElement('h5');
            status1.innerHTML = users[i].pUser[j].status;


            const type1 = document.createElement('h6');
            type1.innerHTML = users[i].pUser[j].type;

            let movit = document.createElement('button');
            movit.innerText = "הסר מהסל";

            div.append(id1, descraiption1, status1, movit);
            my1.append(div);


            movit.onclick = () => {
                alert('הפריט הוסר בהצלחה');
                users.splice(i, 1);
                div.remove(id1, movit, descraiption1, status1);
                localStorage.setItem('users', JSON.stringify(users));
        }
      
    }
   
    }
    }




// div.append(id1, descraiption1, status1, type1, insert1);
// room.append(div);
