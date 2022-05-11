import  recipe  from './works_imgs/recipe.png'
import  ecommerce  from './works_imgs/ecommerce.png'
import  blog  from './works_imgs/blog.png'
import  booking  from './works_imgs/booking.png'

export const works = [
    {
        id: 1,
        appName: 'Recipe Searcher',
        description: 'Recipe Snips is a recipe searcher app using Next.js, tailwindcss, and free API from TheMealDB.',
        imgURL: recipe,
        code: 'https://github.com/shanchae/recipe-searcher',
        vercel: 'https://recipe-searcher-three.vercel.app/'
    },
    {
        id: 2,
        appName: 'Ecommerce Site',
        description: 'Fashionista is an online store built using Next.js and tailwindcss. It uses Firebase operations like firestore and authentication.',
        imgURL: ecommerce,
        code: 'https://github.com/shanchae/ecommerce-next',
        vercel: 'https://ecommerce-next-iota.vercel.app/'
    },
    {
        id: 3,
        appName: 'Catering Booking System',
        description: 'Using PHP and MySQL, the system of this project is modeled after an online catering booking system. Customers are able to customize their booking request and admins control the available services and bookings made.',
        imgURL: booking,
        code: 'https://github.com/shanchae/IM_PROJECT',
        vercel: ''
    },
    {
        id: 4,
        appName: 'Blog',
        description: 'Hello is a sharing platform where logged in users can share images like the apps Pinterest and Instagram, which both inspired the build. Created with Vue.js 3, the Vite CLI and Sass.',
        imgURL: blog,
        code: 'https://github.com/shanchae/blog-app-vue',
        vercel: 'https://blog-app-vue.vercel.app/'
    },
    
]