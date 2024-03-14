// const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

// function generateString(length) {
//     let result = '';
//     const charactersLength = characters.length;

//     for (let i = 0; i < length; i++) {
//         result = result + characters.charAt(Math.floor(Math.random() * charactersLength));
//     }
//     return result;
// }

// function handleLogin() {
//     let username = document.getElementById('username').value;
//     let password = document.getElementById('password').value;
//     let savePasswordIsChecked = document.getElementById('savePassword').checked; // true ? false

//     let usersData = localStorage.getItem('usersData');

//     usersData = JSON.parse(usersData);

//     let userExists = false;

//     let loginForm = document.querySelector('form');

//     loginForm.addEventListener('submit', function (event) {
//         event.preventDefault();
//     });

//     let timeNow = new Date();
//     let days = 5;
//     timeNow.setTime(timeNow.getTime() + (1 * 24 * 60 * 60 * 1000)); // expires in 5 days

//     let expires = "expires=" + timeNow.toUTCString();
//     let sessionToken = generateString(36);

//     for (let user = 0; user < usersData.length; user++) {
//         if (usersData[user].username === username && usersData[user].password === password) {
//             if (savePasswordIsChecked === true) {
//                 document.cookie = `sessionToken=${sessionToken}; ${expires}; path=/`;
//             } else {
//                 sessionStorage.setItem('sessionToken', sessionToken);
//             }

//             usersData[user].sessionToken = sessionToken;
//             userExists = true;
//         }
//     }



//     if (userExists === false) {
//         window.location.href = 'loginFailed.html';
//     } else {
//         window.location.href = 'index.html';
//     }

//     localStorage.setItem('usersData', JSON.stringify(usersData));
// }