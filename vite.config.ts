import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {VitePluginFonts} from 'vite-plugin-fonts'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePluginFonts({
            google: {
                families: ['Source Sans Pro'],
            },
            custom: {
                families: [
                    {
                        name: 'PowetoCustom',
                        local: 'PowetoCustom',
                        src: './src/assets/fonts/Poweto.otf',
                    },
                    {
                        name: 'Undertale',
                        local: 'Undertale',
                        src: './src/assets/fonts/Undertale-Battle-Font.ttf',
                    },
                    {
                        name: 'KTFJermilovSolid',
                        local: 'KTFJermilovSolid',
                        src: './src/assets/fonts/KTFJermilov-Solid.ttf',
                    },
                    {
                        name: 'KTFJermilovStencil',
                        local: 'KTFJermilovStencil',
                        src: './src/assets/fonts/KTFJermilovTrial-Stencil.otf',
                    },
                ],
                display: "auto",
                preload: true,
                injectTo: 'head-prepend'
            }
        })
    ]
})
