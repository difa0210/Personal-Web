// Undefined merupakan tipe data dimana variable yang dideklarasikan belum ada nilai sama sekali atau variable tersebut bernilai undefined (tanpa tanda kutip).
// Null merupakan tipe data dimana nilainya hanya null yang dalam artian "tidak ada".
// Boolean merupakan tipe data dimana nilainya hanya berupa true atau false. Tipe ini sangat berguna ketika kita ingin melakukan seleksi kondisi.
// true merupakan nilai spesial (bukan string maupun number) yang berguna untuk kasus seperti pengecekan tombol fitur aktif atau tidak. 
// String merupakan tipe data primitif yang digunakan untuk menyimpan barisan karakter yang bisa terdiri dari angka, huruf, dan simbol.
// Data primitif merupakan tipe data sederhana yang tidak mempunyai method atau properti dan nilainya tidak dapat diubah setelah dibuat.
// JavaScript merupakan bahasa pemrograman yang dinamis. Artinya, variable dalam JavaScript tidak secara langsung dikaitkan dengan tipe data tertentu, dan variabel apa pun dapat ditetapkan (dan ditetapkan kembali) dengan tipe yang berbeda.
// Keyword `const` dapat digunakan untuk mendeklarasikan sebuah variable yang bersifat konstan, sehingga nilainya yang sudah disimpan tidak bisa diperbarui.
// Karena anonymous function kita perlukan nanti, maka kita perlu menyimpan fungsi tersebut ke dalam sebuah variable. Ini dapat kita disebut sebagai function expression.
// Arrow function merupakan alternatif ringkas (shorthand) dari function expression sebelumnya. Ia tidak memerlukan memerlukan keyword function, melainkan menggunakan simbol => setelah tanda kurung, seperti () =>.


// Array pada Javascript adalah variabel yang berisi banyak nilai (item).
let blogs = []

//function di javascript adalah sebuah blok kode yang digunakan untuk membungkus suatu proses dengan tujuan agar penulisan kode atau proses yang sama tidak ditulis secara berulang kali.
function addBlog(event) {

    //event.preventDefault() adalah sebuah method yang berfungsi untuk mencegah terjadinya event bawaan dari sebuah DOM, misalnya tag "a href" jika kita klik, maka halaman browser akan melakukan reload, atau sebuah form jika kita klik tombol submit maka akan melakukan reload pula.
    event.preventDefault()

    let title = document.getElementById("input-blog-title").value
    let content = document.getElementById("input-blog-content").value
    let image = document.getElementById("input-blog-image").files

        // Kita dapat membuat URL objek dan mengaturnya sebagai atribut src dari berbagai elemen untuk ditampilkan atau dimainkan. Ia bekerja dengan gambar, audio, dan video di sebagian besar browser.
        image = URL.createObjectURL(image[0])

    // Objek merupakan tipe data yang terdiri dari sekumpulan properti, dan properti adalah hubungan antara nama dan nilai, yang dipisahkan dengan simbol : (titik dua).
    let blog = {
        title: title,
        content: content,
        image: image,
        author: "Hafidzuddin Difa",
        postAt: new Date()
    }

// method push() menambah satu atau lebih elemen ke akhir sebuah array.
    blogs.push(blog)

    console.log(blogs)

// Looping pada javascript digunakan untuk melakukan tugas berulang berdasarkan suatu kondisi
for (let i = 0; i < blogs.length; i++) {
    console.log(blogs[i]);

    renderBlog()
    }
}

// Manipulation HTML
function renderBlog() {
    let contentContainer = document.getElementById("contents")

    contentContainer.innerHTML = ""

    for (let i = 0; i < blogs.length; i++) {

    contentContainer.innerHTML += `<div class="blog-list-item">
        <div class="blog-image">
            <img src=${blogs[i].image} alt="" />
        </div>
        <div class="blog-content">
            <div class="btn-group">
            <button class="btn-edit">Edit Post</button>
            <button class="btn-post">Post Blog</button>
            </div>
            <h1>
            <a href=""blog-detail.html" target="_blank"
                >${blogs[i].title}</a
            >
            </h1>
            <div class="detail-blog-content">
            ${getFullTime(blogs[i].postAt)} | ${blogs[i].author}
            </div>
            <p>
            "${blogs[i].content}"
            </p>
            <div style="text-align: right;">
              <span >${getDistanceTime(blogs[i].postAt)}</span>
            </div>
        </div>
        </div>`
    }
}

let month = ["January","February","March","April","May","June","July","August","September","October","November","Desember"]

function getFullTime(time) {
    console.log(time);

function addZero(i) {
    if (i < 10) {i = "0" + i}

    // Untuk mengembalikan sesuatu dari sebuah fungsi, kita menambahkan return keyword diikuti oleh nilai yang ingin dikembalikan.
    return i;
    }

    let date = time.getDate()
    console.log(date);

    let monthIndex = time.getMonth()
    console.log(month[monthIndex]);

    let year = time.getFullYear()
    console.log(year);

    let hours = addZero(time.getHours())
    console.log(hours);

    let minutes = addZero(time.getMinutes())
    console.log(minutes);

    let fullTime = `${date} ${month[monthIndex]} ${year} ${hours}:${minutes} WIB`
    return fullTime
}
getFullTime(new Date())

function getDistanceTime(time) {

    let timePost = time
    let timeNow = new Date()

    let distance = timeNow - timePost

    let miliSecond = 1000
    let secondInHours = 3600
    let hoursInDay = 23
    let minutes = 60
    let second = 60

    let distanceDay = Math.floor (distance / (miliSecond * secondInHours * hoursInDay)) // menampilkan hari
    let distanceHours = Math.floor (distance / (miliSecond * minutes * second)) // menampilkan jam
    let distanceMinutes = Math.floor (distance / (miliSecond * minutes)) // menampilkan menit
    let distanceSeconds = Math.floor (distance / miliSecond) // menampilkan detik

    if (distanceDay >= 1) {
    return `${distanceDay} day ago`;

    } else if (distanceHours >= 1) { 
    return `${distanceHours} hours ago`;

    } else if (distanceMinutes >= 1) {
    return `${distanceMinutes} minutes ago`;

    } else {
    return `${distanceSeconds} seconds ago`;
    }
}

setInterval(() => {
    renderBlog()
}, 3000)