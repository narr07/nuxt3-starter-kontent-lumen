import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    buildModules: [
        ['@pinia/nuxt']
    ],
    publicRuntimeConfig: {
        kontent: {
            projectId: process.env.KONTENT_PROJECT_ID,
            previewApiKey: process.env.KONTENT_PREVIEW_KEY,
        }
    },
    routes: {
        '/': { prerender: true }
    },
    css: [
        '~/assets/scss/init.scss',
    ],
    meta: {
        link: [{
            'rel': 'stylesheet',
            'href': '/fonts/fontello-771c82e0/css/fontello.css'
        }]
    },
})