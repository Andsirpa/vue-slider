const { createApp } = Vue
createApp({
    data() {
        return {
            // immagine visualizzata 
            firstImage: 0,
            autoScroll: null,
            // images array
            slides: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ]

        }
    },
    created() {
        this.activeInterval()
    },
    methods: {
        // passo all'immagine successiva
        nextImage() {
            this.firstImage++
            // se arrivo all'ultima immagine torno alla prima
            if (this.firstImage > this.slides.length - 1) {
                this.firstImage = 0
            }
        },
        // passo all'immagine precedenti
        prevImage() {
            this.firstImage--
            // se arrivo alla prima immagine passo all'ultima
            if (this.firstImage < 0) {
                this.firstImage = this.slides.length - 1
            }

        },
        // cambio immagine a seconda della miniatura cliccata
        changeImage(index) {
            this.firstImage = index
        },
        // avvio l'autoplay
        activeInterval() {
            // chiamo nextImage ogni 3 secondi
            this.autoScroll = setInterval(() => {
                this.nextImage()
            }, 3000)
        },
        // blocco l'autoplay
        stopInterval() {
            clearInterval(this.autoScroll)
        },

    }
}).mount('#app')