<script setup>
import { ref } from 'vue'

</script>

<template>
    <section id="hero" class="flex fluid bg-white py-20">
        <div class="flex flex-col-reverse xl:flex-row items-center xl:justify-between w-full">
            <div class="flex flex-col gap-2 items-start md:items-center xl:items-start w-full pt-12 xl:pt-0">
                <div class="label">
                    Laporkan! Fasilitas
                </div>
                <h2 class="text-4xl xl:text-5xl font-bold text-primary-500">Lalu Lintas Pake
                    Aplikasi FASLALIN</h2>
                <p class="text-base xl:text-lg font-medium text-primary-900 text-left md:text-center xl:text-left">
                    Cepat dan mudah laporkan fasilitas
                    lalu
                    lintas, di
                    Kabupaten Sumedang</p>
                <div class="flex mt-8 flex-row gap-4">
                    <a href="#cta" class="btn-primary"> Download Faslalin</a>
                    <a href="#report" class="btn-text rounded-lg">Cara Melapor</a>
                </div>
            </div>
            <img src="/img/hero-img.png" class="w-full xl:max-w-lg" alt="" srcset="">
        </div>
    </section>
    <section id="about" class="fluid bg-primary-50 py-20 rounded-t-3xl xl:rounded-t-[64px]">
        <div class="flex flex-col xl:flex-row items-center gap-8 xl:justify-between pb-6">
            <div class="flex flex-col gap-2 items-start md:items-center xl:items-start w-full xl:w-3/5 xl:pt-0">
                <h1 class="text-2xl xl:text-3xl font-bold text-primary-500">Apa Itu FASLALIN?</h1>
                <p class="text-sm xl:text-md font-medium text-primary-900 mt-3 text-left md:text-center xl:text-left">
                    Merupakan sebuah aplikasi Android
                    untuk melaporkan masalah terkait fasilitas lalu lintas yang ada di Kabupaten Sumedang,
                    dikelola oleh Dishub Sumedang.</p>
            </div>
            <div class="w-full xl:w-2/5 flex gap-4 px-6 py-4 bg-secondary-50 rounded-2xl justify-between">
                <div class="flex flex-col justify-between">
                    <div class="flex gap-2"><svg width="64" height="64" viewBox="0 0 64 64" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <circle cx="32" cy="32" r="32" fill="#F9AF2A" />
                            <path
                                d="M44.5788 27.4568C43.4647 27.4568 42.5402 28.3812 42.5402 29.519V37.8153C42.5402 38.9531 43.4647 39.9012 44.5788 39.9012C45.6928 39.9012 46.6173 38.9768 46.6173 37.8153V29.519C46.6173 28.3812 45.6928 27.4568 44.5788 27.4568ZM20.1876 27.4568C19.0736 27.4568 18.1491 28.3812 18.1491 29.519V37.8153C18.1491 38.9531 19.0736 39.9012 20.1876 39.9012C21.3017 39.9012 22.2262 38.9768 22.2262 37.8153V29.519C22.2262 28.3812 21.3017 27.4568 20.1876 27.4568ZM23.2454 38.8583C23.2454 39.6879 23.5773 40.4701 24.1462 41.0627C24.715 41.6553 25.4973 41.9634 26.3032 41.9634V46.1116C26.3032 47.2494 27.2276 48.1975 28.3417 48.1975C29.4558 48.1975 30.3802 47.2731 30.3802 46.1116V41.9634H34.4336V46.1116C34.4336 47.2494 35.358 48.1975 36.4721 48.1975C37.5862 48.1975 38.5106 47.2731 38.5106 46.1116V41.9634C39.3165 41.9634 40.0988 41.6316 40.6676 41.0627C41.2365 40.4701 41.5684 39.6879 41.5684 38.8583V27.4568H23.2454V38.8583ZM41.4736 25.3709C41.3313 23.996 40.881 22.6686 40.1699 21.5071C39.4588 20.322 38.5106 19.3264 37.3728 18.5916L38.3921 16.5057C38.5106 16.2686 38.5343 15.9842 38.4395 15.7234C38.3978 15.5942 38.33 15.4749 38.2403 15.373C38.1506 15.271 38.0409 15.1886 37.918 15.1309C37.7976 15.0704 37.6662 15.0351 37.5318 15.0269C37.3973 15.0188 37.2626 15.038 37.1358 15.0834C36.875 15.1783 36.6617 15.3679 36.5432 15.6049L35.5239 17.6909L35.2632 17.5723C33.3906 16.9323 31.3758 16.9323 29.5032 17.5723L29.2425 17.6909L28.2232 15.6049C28.0992 15.362 27.8873 15.1755 27.6306 15.0834C27.5038 15.038 27.3691 15.0188 27.2346 15.0269C27.1002 15.0351 26.9688 15.0704 26.8484 15.1309C26.6113 15.2494 26.4217 15.4627 26.3269 15.7234C26.2815 15.8503 26.2623 15.985 26.2704 16.1194C26.2786 16.2539 26.3139 16.3853 26.3743 16.5057L27.3936 18.5916C26.2558 19.3501 25.3076 20.3457 24.5965 21.5071C23.8854 22.6923 23.435 23.996 23.2928 25.3709V26.4138H41.521V25.3709H41.4736ZM29.3373 23.3086C29.0765 23.3086 28.8158 23.1901 28.6262 23.0005C28.529 22.9043 28.4518 22.7898 28.399 22.6637C28.3461 22.5377 28.3186 22.4024 28.318 22.2657C28.318 21.9812 28.4128 21.7205 28.6262 21.5309C28.8158 21.3412 29.0765 21.2227 29.3373 21.2227C29.598 21.2227 29.8588 21.3412 30.0484 21.5309C30.238 21.7205 30.3565 21.9812 30.3565 22.2657C30.3565 22.5501 30.238 22.8109 30.0484 23.0005C29.8588 23.1901 29.598 23.3086 29.3373 23.3086ZM35.4291 23.3086C35.1684 23.3086 34.9076 23.1901 34.718 23.0005C34.6209 22.9043 34.5437 22.7898 34.4908 22.6637C34.4379 22.5377 34.4104 22.4024 34.4099 22.2657C34.4099 21.9812 34.5047 21.7205 34.718 21.5309C34.9076 21.3412 35.1684 21.2227 35.4291 21.2227C35.6899 21.2227 35.9506 21.3412 36.1402 21.5309C36.3299 21.7205 36.4484 21.9812 36.4484 22.2657C36.4484 22.5501 36.3299 22.8109 36.1402 23.0005C35.9506 23.1901 35.6899 23.3086 35.4291 23.3086Z"
                                fill="white" />
                        </svg>
                        <div class="flex flex-col">
                            <h2 class="text-xl font-semibold text-primary-500">Android</h2>
                            <span class="text-sm md:text-lg text-primary-900">Support Android 5.1 +</span>
                        </div>
                    </div>
                    <a href="#cta" class="btn-primary"> Download Faslalin</a>
                </div>
                <img src="./img/qr.png" alt="" srcset="">
            </div>
        </div>
    </section>
    <section id="report" class="fluid py-20 xl:py-24 bg-primary-500 rounded-3xl xl:rounded-[64px] -mt-16">
        <div class="flex flex-col content-center gap-6">
            <h1 class="text-4xl xl:text-5xl  font-bold text-white text-center">Langkah Mudah Pelaporan</h1>
            <p class="text-base xl:text-lg font-medium text-white text-center pt-1 pb-12">3 Langka Mudah Buat
                Laporan Kamu Bermanfaat Untuk Semua</p>
            <div class="flex flex-col xl:flex-row items-stretch gap-12 xl:justify-between h-fit">
                <div class="flex flex-col justify-between gap-12 group items-center w-full xl:w-2/5 bg-secondary-50 rounded-3xl px-12
                        pt-12">
                    <div class="flex flex-col gap-2">
                        <h2 class="card-title">#1 Buka Aplikasi FASLALIN</h2>
                        <ul class="list-disc text-lg font-medium ml-8">
                            <li>Cek Pengaduan untuk mengetahui progres aduan yang kamu buat sebelumnya.</li>
                            <li>Pilih Buat Aduan untuk melaporkan fasilitas lalu lintas.</li>
                        </ul>
                    </div>
                    <img src="./img/step-1.png" alt="" srcset="" class="h-auto">
                </div>
                <div
                    class="flex flex-col gap-12 group items-center w-full xl:w-3/5 bg-primary rounded-3xl px-12 pb-12 bg-primary-50">
                    <img src="./img/step-2.png" alt="" srcset="" class="h-auto">
                    <div class="flex flex-col gap-2">
                        <h2 class="card-title">#2 Pilih Koordinat</h2>
                        <p class="card-body">Pilih koordinat dengan ketuk icon rambu lalu lintas untuk memunculkan
                            detail
                            terkait rambu lalu lintas yang tersedia, lalu pilih tombol “Buat Aduan”.</p>
                    </div>
                </div>
            </div>
            <!-- col -->
            <div class="flex flex-col xl:flex-row items-stretch gap-12 xl:justify-between h-fit">
                <div
                    class="flex flex-col xl:flex-row gap-12 group items-center w-full bg-primary rounded-3xl px-12 pb-12 lg:pb-0 bg-primary-50">
                    <img src="./img/step-3.png" alt="" srcset="" class="h-auto">
                    <div class="flex flex-col gap-2">
                        <h2 class="card-title">#3 Isi Form Aduan</h2>
                        <p class="card-body">Silahkan isi informasi tambahan terkait fasilitas lalu lintas yang kamu
                            laporkan, tambahkan juga foto pendukung yang sesuai.</p>
                    </div>
                </div>
                <div
                    class="flex flex-col shrink items-center justify-center text-center w-full xl:w-1/3 bg-secondary-50 rounded-3xl p-8">
                    <h2 class="card-title">Bantu Petugas</h2>
                    <p class="card-body mb-2">Agar nyaman berlalu lintas</p>
                    <a href="#" class="btn-primary"> Download Sekarang</a>
                </div>
            </div>

        </div>
    </section>
    <section id="feature" class="fluid py-20 xl:py-24">
        <div class="flex flex-col gap-6 items-start md:items-center xl:items-start">
            <h2 class="text-4xl xl:text-5xl  font-bold text-primary-500 ">Fitur FASLALIN</h2>
            <p class="text-base xl:text-lg font-medium text-primary-900 pt-1 pb-12">3 Fitur Andalan Bikin Mudah
                Pelaporan
                Fasilitas Lalu Lintas</p>
            <div class="flex flex-col xl:flex-row items-start gap-14 xl:justify-between">
                <div class="flex gap-4 group items-center w-full">
                    <svg width="64" height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.2"
                            d="M46 8.5H18C17.4696 8.5 16.9609 8.71071 16.5858 9.08579C16.2107 9.46086 16 9.96957 16 10.5V54.5C16 55.0304 16.2107 55.5391 16.5858 55.9142C16.9609 56.2893 17.4696 56.5 18 56.5H46C46.5304 56.5 47.0391 56.2893 47.4142 55.9142C47.7893 55.5391 48 55.0304 48 54.5V10.5C48 9.96957 47.7893 9.46086 47.4142 9.08579C47.0391 8.71071 46.5304 8.5 46 8.5ZM32 48.5C30.8133 48.5 29.6533 48.1481 28.6666 47.4888C27.6799 46.8295 26.9108 45.8925 26.4567 44.7961C26.0026 43.6997 25.8838 42.4933 26.1153 41.3295C26.3468 40.1656 26.9182 39.0965 27.7574 38.2574C28.5965 37.4182 29.6656 36.8468 30.8295 36.6153C31.9933 36.3838 33.1997 36.5026 34.2961 36.9567C35.3925 37.4108 36.3295 38.1799 36.9888 39.1666C37.6481 40.1533 38 41.3133 38 42.5C38 44.0913 37.3679 45.6174 36.2426 46.7426C35.1174 47.8679 33.5913 48.5 32 48.5ZM32 28.5C30.8133 28.5 29.6533 28.1481 28.6666 27.4888C27.6799 26.8295 26.9108 25.8925 26.4567 24.7961C26.0026 23.6997 25.8838 22.4933 26.1153 21.3295C26.3468 20.1656 26.9182 19.0965 27.7574 18.2574C28.5965 17.4182 29.6656 16.8468 30.8295 16.6153C31.9933 16.3838 33.1997 16.5026 34.2961 16.9567C35.3925 17.4108 36.3295 18.1799 36.9888 19.1666C37.6481 20.1533 38 21.3133 38 22.5C38 24.0913 37.3679 25.6174 36.2426 26.7426C35.1174 27.8679 33.5913 28.5 32 28.5Z"
                            fill="#896017" />
                        <path
                            d="M32 14.5C30.4177 14.5 28.871 14.9692 27.5554 15.8482C26.2398 16.7273 25.2145 17.9767 24.609 19.4385C24.0035 20.9003 23.845 22.5089 24.1537 24.0607C24.4624 25.6126 25.2243 27.038 26.3431 28.1569C27.462 29.2757 28.8874 30.0376 30.4393 30.3463C31.9911 30.655 33.5997 30.4965 35.0615 29.891C36.5233 29.2855 37.7727 28.2602 38.6518 26.9446C39.5308 25.629 40 24.0823 40 22.5C40 20.3783 39.1571 18.3434 37.6569 16.8431C36.1566 15.3429 34.1217 14.5 32 14.5ZM32 26.5C31.2089 26.5 30.4355 26.2654 29.7777 25.8259C29.1199 25.3864 28.6072 24.7616 28.3045 24.0307C28.0017 23.2998 27.9225 22.4956 28.0769 21.7196C28.2312 20.9437 28.6122 20.231 29.1716 19.6716C29.731 19.1122 30.4437 18.7312 31.2196 18.5769C31.9956 18.4225 32.7998 18.5017 33.5307 18.8045C34.2616 19.1072 34.8864 19.6199 35.3259 20.2777C35.7654 20.9355 36 21.7089 36 22.5C36 23.5609 35.5786 24.5783 34.8284 25.3284C34.0783 26.0786 33.0609 26.5 32 26.5ZM32 34.5C30.4177 34.5 28.871 34.9692 27.5554 35.8482C26.2398 36.7273 25.2145 37.9767 24.609 39.4385C24.0035 40.9003 23.845 42.5089 24.1537 44.0607C24.4624 45.6126 25.2243 47.038 26.3431 48.1569C27.462 49.2757 28.8874 50.0376 30.4393 50.3463C31.9911 50.655 33.5997 50.4965 35.0615 49.891C36.5233 49.2855 37.7727 48.2602 38.6518 46.9446C39.5308 45.629 40 44.0822 40 42.5C40 40.3783 39.1571 38.3434 37.6569 36.8431C36.1566 35.3429 34.1217 34.5 32 34.5ZM32 46.5C31.2089 46.5 30.4355 46.2654 29.7777 45.8259C29.1199 45.3864 28.6072 44.7616 28.3045 44.0307C28.0017 43.2998 27.9225 42.4956 28.0769 41.7196C28.2312 40.9437 28.6122 40.231 29.1716 39.6716C29.731 39.1122 30.4437 38.7312 31.2196 38.5769C31.9956 38.4225 32.7998 38.5017 33.5307 38.8045C34.2616 39.1072 34.8864 39.6199 35.3259 40.2777C35.7654 40.9355 36 41.7089 36 42.5C36 43.5609 35.5786 44.5783 34.8284 45.3284C34.0783 46.0786 33.0609 46.5 32 46.5ZM54 36.5H50V20.5H54C54.5304 20.5 55.0391 20.2893 55.4142 19.9142C55.7893 19.5391 56 19.0304 56 18.5C56 17.9696 55.7893 17.4609 55.4142 17.0858C55.0391 16.7107 54.5304 16.5 54 16.5H50V10.5C50 9.43913 49.5786 8.42172 48.8284 7.67157C48.0783 6.92143 47.0609 6.5 46 6.5H18C16.9391 6.5 15.9217 6.92143 15.1716 7.67157C14.4214 8.42172 14 9.43913 14 10.5V16.5H10C9.46957 16.5 8.96086 16.7107 8.58579 17.0858C8.21071 17.4609 8 17.9696 8 18.5C8 19.0304 8.21071 19.5391 8.58579 19.9142C8.96086 20.2893 9.46957 20.5 10 20.5H14V36.5H10C9.46957 36.5 8.96086 36.7107 8.58579 37.0858C8.21071 37.4609 8 37.9696 8 38.5C8 39.0304 8.21071 39.5391 8.58579 39.9142C8.96086 40.2893 9.46957 40.5 10 40.5H14V54.5C14 55.5609 14.4214 56.5783 15.1716 57.3284C15.9217 58.0786 16.9391 58.5 18 58.5H46C47.0609 58.5 48.0783 58.0786 48.8284 57.3284C49.5786 56.5783 50 55.5609 50 54.5V40.5H54C54.5304 40.5 55.0391 40.2893 55.4142 39.9142C55.7893 39.5391 56 39.0304 56 38.5C56 37.9696 55.7893 37.4609 55.4142 37.0858C55.0391 36.7107 54.5304 36.5 54 36.5ZM46 54.5H18V10.5H46V54.5Z"
                            fill="#896017" />
                    </svg>
                    <div class="flex flex-col">
                        <h2 class="card-title">Buat Aduan</h2>
                        <p class="card-body">Buat aduan terkait fasilitas lalu lintas.</p>
                    </div>

                </div>
                <div class="flex gap-4 group items-center w-full">
                    <svg width="64" height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.2" d="M47.13 40.5H16.88L22.435 24.5H41.565L47.13 40.5Z" fill="#896017" />
                        <path
                            d="M58 52.5H53.4225L38.355 9.1875C38.0824 8.40273 37.5722 7.7223 36.8953 7.2407C36.2184 6.7591 35.4083 6.50022 34.5775 6.5H29.4225C28.592 6.50003 27.7822 6.75855 27.1053 7.23968C26.4284 7.72081 25.918 8.40069 25.645 9.185L10.5775 52.5H6C5.46957 52.5 4.96086 52.7107 4.58579 53.0858C4.21071 53.4609 4 53.9696 4 54.5C4 55.0304 4.21071 55.5391 4.58579 55.9142C4.96086 56.2893 5.46957 56.5 6 56.5H58C58.5304 56.5 59.0391 56.2893 59.4142 55.9142C59.7893 55.5391 60 55.0304 60 54.5C60 53.9696 59.7893 53.4609 59.4142 53.0858C59.0391 52.7107 58.5304 52.5 58 52.5ZM29.4225 10.5H34.5775L38.75 22.5H25.25L29.4225 10.5ZM23.8575 26.5H40.1425L44.3175 38.5H19.6825L23.8575 26.5ZM14.8125 52.5L18.2925 42.5H45.7075L49.1875 52.5H14.8125Z"
                            fill="#896017" />
                    </svg>

                    <div class="flex flex-col">
                        <h2 class="card-title">Cek Aduan</h2>
                        <p class="card-body">Lihat progres perbaikan dari laporan kamu.</p>
                    </div>
                </div>
                <div class="flex gap-4 group items-center w-full">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.2" d="M40 18V54L24 46V10L40 18Z" fill="#896017" />
                        <path
                            d="M57.23 12.4225C56.9904 12.2359 56.7115 12.1062 56.4143 12.0434C56.1172 11.9806 55.8096 11.9863 55.515 12.06L40.2325 15.88L24.895 8.21003C24.4677 7.99688 23.9782 7.94368 23.515 8.06004L7.515 12.06C7.08232 12.1682 6.69821 12.4179 6.42371 12.7694C6.1492 13.1209 6.00007 13.554 6 14V50C6.00005 50.3039 6.06935 50.6038 6.20264 50.8769C6.33594 51.1501 6.52972 51.3892 6.76927 51.5762C7.00882 51.7632 7.28783 51.8932 7.58512 51.9562C7.88242 52.0193 8.19017 52.0137 8.485 51.94L23.7675 48.12L39.105 55.79C39.3834 55.9273 39.6896 55.9991 40 56C40.1635 55.9999 40.3264 55.9798 40.485 55.94L56.485 51.94C56.9177 51.8319 57.3018 51.5822 57.5763 51.2307C57.8508 50.8792 57.9999 50.446 58 50V14C58.0001 13.6958 57.9307 13.3957 57.7973 13.1223C57.6639 12.8489 57.4699 12.6096 57.23 12.4225ZM26 13.235L38 19.235V50.765L26 44.765V13.235ZM10 15.5625L22 12.5625V44.4375L10 47.4375V15.5625ZM54 48.4375L42 51.4375V19.5625L54 16.5625V48.4375Z"
                            fill="#896017" />
                    </svg>
                    <div class="flex flex-col">
                        <h2 class="card-title">Realtime Map</h2>
                        <p class="card-body">Lihat titik fasilitas yang bisa kamu laporkan</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="cta" class="fluid py-6 relative">
        <div class="flex flex-col gap-3 bg-primary-50 items-center text-center p-6 rounded-2xl">
            <div class="flex flex-col pt-1 pb-4 xl:pb-6 gap-2">
                <span class="text-md text-primary-500 font-medium">Buat Laporan Dalam Genggaman</span>
                <h2 class="text-2xl font-bold text-primary-500 ">Download Aplikasi FASLALIN</h2>
                <p class="text-base font-medium text-primary-900 ">Bantu kami memberikan pelayanan
                    fasilitas
                    lalu lintas yang baik untuk kita bersama</p>
            </div>

            <div class="flex flex-row gap-4 h-fit items-center">
                <img src="./img/g-play.png" class="w-auto h-full" alt="" srcset="">
                <img src="./img/qr.png" class="h-auto" alt="" srcset="">
            </div>
        </div>
    </section>

</template>
