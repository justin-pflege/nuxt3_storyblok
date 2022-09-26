// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        ['@storyblok/nuxt']
    ],
    storyblok: {
        accessToken: 'cJ1tTO76vctd60FYSuNQoQtt',
        bridge: process.env.NODE_ENV !== 'production',
        apiOptions: { // --> see: https://github.com/storyblok/storyblok-js-client#class-storyblok
            cache: {
                type: "none"
            }
        },
    },
    ssr: false,
})
