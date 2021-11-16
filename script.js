function random(min, max) {
               return Math.round(Math.random() * (max - min) + min)
}

function color() {
               let r = random(0, 255)
               let g = random(0, 255)
               let b = random(0, 255)
               return "rgb(" + r + "," + g + "," + b + ")"
}
let body = document.querySelector("body")
setInterval(() => {
               body.style.backgroundColor = color()
               body.style.transition = "1s"
}, 1000);

let firstname = prompt("Assalomalaykum, iltimos ismingizni yozing chunki ismingiz sizga murojat qilishimiz uchun kerak bo'ladi !")
while (!isNaN(firstname)) {
               firstname = prompt("Iltimos ismingizni yozayaotganingizda harflardan foydalaning !")
}
console.log(firstname + ", siz bu dasturda kvadrat chiza olasiz va kvadratni console oynasida tekshirishingiz mumkin !")
alert(firstname + ", siz bu dasturda kvadrat chiza olasiz va kvadratni console oynasida tekshirishingiz mumkin !")

let number = +prompt(firstname + ", iltimos raqam kiriting !")
while (isNaN(number)) {
               number = +prompt(firstname + ", eslatib o'tamiz siz raqam kiritishingiz kerak !")
}
console.log(firstname+" sizning kvadratingiz tayyor !");
alert(firstname+" sizning kvadratingiz tayyor !");

let sign = ""

for (let i = 0; i < number; i++) {
               for (let j = 0; j < number; j++) {
                              if (i == j || i == 0 || j == 0 || j==(number-1) || i==(number-1)) {
                                             sign = sign + "[*]"
                              }
                              else{
                                             sign = sign + "   "
                              }
               }
               console.log(sign);
               sign = ""
}
