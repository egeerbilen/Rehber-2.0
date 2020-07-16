function control() {
    var mail = document.getElementById("email").value
    var pw = document.getElementById("pwd").value
    var chck = document.getElementById("check").checked
    /*
    if(mail == ""){
        document.getElementById("art_mail").innerHTML = "E-posta alanı boş"
    }
    if(pw == ""){
        document.getElementById("art_pw").innerHTML = "Şifre alanı boş"
    }
    if(chck == false){
        document.getElementById("art_chck").innerHTML = "Tüm alanları doldurunuz"
    }*/
}
var arr = []
say = 1
function Yaz() {
    var name = document.getElementById("name").value
    var surname = document.getElementById("surname").value
    var posta = document.getElementById("posta").value
    var face = document.getElementById("face").value
    var insta = document.getElementById("insta").value
    var linked = document.getElementById("linked").value
    var twit = document.getElementById("twit").value
    var wp = document.getElementById("wp").value

    posta = "https://login.live.com/" + posta
    face = "https://www.facebook.com/" + face
    insta = "https://www.instagram.com/" + insta
    linked = "https://www.linkedin.com/" + linked
    twit = "https://twitter.com/" + twit
    wp = "https://web.whatsapp.com/" + wp

    arr.push(say + "-" + name + " " + surname + " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "<a href=" + posta + ">" + "<img src='/images/mail.png'>" + "</a>" + "&nbsp&nbsp " +
        "<a href=" + face + ">" + "<img src='/public/img/facebook.png'>" + "</a>" + "&nbsp&nbsp " +
        "<a href=" + insta + ">" + "<img src='/images/instagram.png'>" + "</a>" + "&nbsp&nbsp " +
        "<a href=" + linked + ">" + "<img src='/images/linkedin.png'>" + "</a>" + "&nbsp&nbsp " +
        "<a href=" + twit + ">" + "<img src='/images/twitter.png'>" + "</a>" + "&nbsp&nbsp " +
        "<a href=" + wp + ">" + "<img src='/images/whatsapp.png'>" + "</a>" + "&nbsp&nbsp " + "<br><br>"
    )
    document.getElementById("write").innerHTML = arr

    /*
    for(i = 0; i < arr.length; i++){
        document.getElementById("write").innerHTML = String(arr[i]) + "<br>"
    }*/
    arr = [arr]
    say++
}