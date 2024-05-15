<script setup>
import { ref } from 'vue'
import Button from './Button.vue'

function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
    } else {
        menu.classList.add("hidden");
    }
}

// Fungsi untuk menyembunyikan menu ketika mengklik atau fokus di luar menu
document.addEventListener("click", function (event) {
    var nav = document.getElementById("nav");
    var targetElement = event.target;

    // Periksa apakah targetElement berada di dalam menu atau tidak
    var isClickInsideMenu = nav.contains(targetElement);

    // Jika tidak, maka sembunyikan menu
    if (!isClickInsideMenu) {
        menu.classList.add("hidden");
    }
});

function switchActiveMenu(currentMenu) {
    var menu = document.getElementsByClassName("menu");
    for (var i = 0; i < menu.length; i++) {
        menu[i].classList.remove("active");
    }
    currentMenu.classList.add("active");

    var nav = document.getElementById("menu");
    nav.classList.add("hidden");
}
// Scroll
function changeActiveWhenScroll() {
    var scrollPosition = window.scrollY;
    var menu = document.getElementsByClassName("menu");
    var section = document.getElementsByTagName("section");
    for (var i = 0; i < section.length; i++) {
        var sectionTop = section[i].offsetTop;
        var sectionBottom = sectionTop +
            section[i].offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            for (var j = 0; j < menu.length; j++) {
                menu[j].classList.remove("active");
            }
            menu[i].classList.add("active");
        }
    }
}
document.addEventListener("scroll", changeActiveWhenScroll);
</script>

<template>
    <nav class="fixed top-0 z-20 w-screen bg-white sh-4" id="nav">
        <div class="px-4 py-4  md:px-[24px] lg:px-[120px] flex justify-between items-center">
            <div class="flex gap-3">
                <button type="button" class="md:hidden text-gray-600 focus:outline-none" data-target="#menu"
                    onclick="toggleMenu()">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M21.375 12C21.375 12.2984 21.2565 12.5845 21.0455 12.7955C20.8345 13.0065 20.5484 13.125 20.25 13.125H3.75C3.45163 13.125 3.16548 13.0065 2.9545 12.7955C2.74353 12.5845 2.625 12.2984 2.625 12C2.625 11.7016 2.74353 11.4155 2.9545 11.2045C3.16548 10.9935 3.45163 10.875 3.75 10.875H20.25C20.5484 10.875 20.8345 10.9935 21.0455 11.2045C21.2565 11.4155 21.375 11.7016 21.375 12ZM3.75 7.125H20.25C20.5484 7.125 20.8345 7.00647 21.0455 6.7955C21.2565 6.58452 21.375 6.29837 21.375 6C21.375 5.70163 21.2565 5.41548 21.0455 5.2045C20.8345 4.99353 20.5484 4.875 20.25 4.875H3.75C3.45163 4.875 3.16548 4.99353 2.9545 5.2045C2.74353 5.41548 2.625 5.70163 2.625 6C2.625 6.29837 2.74353 6.58452 2.9545 6.7955C3.16548 7.00647 3.45163 7.125 3.75 7.125ZM20.25 16.875H3.75C3.45163 16.875 3.16548 16.9935 2.9545 17.2045C2.74353 17.4155 2.625 17.7016 2.625 18C2.625 18.2984 2.74353 18.5845 2.9545 18.7955C3.16548 19.0065 3.45163 19.125 3.75 19.125H20.25C20.5484 19.125 20.8345 19.0065 21.0455 18.7955C21.2565 18.5845 21.375 18.2984 21.375 18C21.375 17.7016 21.2565 17.4155 21.0455 17.2045C20.8345 16.9935 20.5484 16.875 20.25 16.875Z"
                            fill="#2B2B6F" />
                    </svg>
                    <span class="hidden">toggle</span>
                </button>
                <!-- Brand (Logo) -->
                <a class="items-center" href="/index.html">
                    <div class="flex items-center gap-2">
                        <img src="./img/logo.png" alt="" srcset="">
                        <span class="text-sm font-semibold text-primary-800">FASLALIN</span>
                    </div>
                </a>
            </div>
            <!-- Toggler untuk menu responsif -->
            <div class="md:hidden flex gap-3">
                <!-- <button onclick="openModal()" type="button" class="btn-primary">
                    Login
                </button> -->
            </div>

            <div class="hidden md:flex md:items-center md:space-x-4">
                <a href="#hero" class="btn-text menu active" onclick="switchActiveMenu(this)">Beranda</a>
                <a href="#about" class="btn-text menu">Tentang</a>
                <a href="#report" class="btn-text menu">Pelaporan</a>
                <a href="#feature" class="btn-text menu">Fitur</a>
            </div>
            <div class="hidden md:flex md:items-center md:ml-3">
                <Button text="LOGIN GAN">
                    <p>He</p>
                    <template v-slot:header>
                        <p>ini slot 2</p>
                    </template>
                </Button>
            </div>
        </div>
        <div class="hidden px-4 py-4 border-t-2 flex border-gray-200 space-y-2  items-center flex-col md:hidden md:items-center"
            id="menu">
            <a href="#hero" class="btn-text menu active" onclick="switchActiveMenu(this)">Beranda</a>
            <a href="#about" class="btn-text menu">Tentang</a>
            <a href="#report" class="btn-text menu">Pelaporan</a>
            <a href="#feature" class="btn-text menu">Fitur</a>
        </div>
    </nav>
</template>
