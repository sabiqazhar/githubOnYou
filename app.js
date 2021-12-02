function appName(keyword) {
    return fetch (`https://api.github.com/users/${keyword}`) 
    .then(respone => respone.json())
    .then(respone => console.log(respone));
}

document.querySelector('button').addEventListener('click',()=>{
    nama = prompt('masukan nama anda:');
    appName(nama);
});