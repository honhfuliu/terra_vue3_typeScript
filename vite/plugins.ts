import vue from '@vitejs/plugin-vue'
import AutoImportPlugin from 'unplugin-auto-import/vite'
import type { PluginOption } from 'vite'
import ComponentsPlugin from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import IconResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
/**
 * 创建Vite插件
 * @param viteEnv 环境变量
 * @param isBuild 是否构建
 * @returns Vite插件数组
 */
export default function createVitePlugins(_viteEnv: Record<string, string>, _isBuild = false){
    const vitePlugins: PluginOption[] = [vue()]
    vitePlugins.push(createAutoImportPlugin());
    vitePlugins.push(createComponentsPlugin());
    vitePlugins.push(Icons({
        autoInstall: true,
    }));
    vitePlugins.push(createSvgIconsPluginConfig());
    vitePlugins.push(tailwindcss()); // 配置Tailwind CSS插件

    return vitePlugins;
}

// 创建自动导入组件插件
function createComponentsPlugin(){
    return ComponentsPlugin({
        dirs: ['src/components'],
        extensions: ['vue'],
        deep: true,
        dts: './src/components.d.ts',
        resolvers: [
            ElementPlusResolver(), 
            IconResolver({
                prefix: 'i',
            })
        ],
    })
}

// 创建自动导入插件
function createAutoImportPlugin(){
    return AutoImportPlugin({
        imports: ['vue', 'vue-router'],
        dts: './src/auto-imports.d.ts',
        resolvers: [
            ElementPlusResolver({
                importStyle: 'sass'
            })
        ],
    })
}


// 创建vite-plugin-svg-icons插件
function createSvgIconsPluginConfig(){
    return createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]',
        inject: 'body-last',
        customDomId: '__svg__icons__dom__'
    })
}

// 创建压缩插件


