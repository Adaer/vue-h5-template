/**
 * @name AutoImportDeps
 * @description vue组件中自动导入 composition api
 */
import AutoImport from 'unplugin-auto-import/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

export const AutoImportDeps = () => {
  return AutoImport({
    dts: 'types/auto-imports.d.ts',
    imports: [
      'vue',
      'pinia',
      'vue-router',
      {
        '@vueuse/core': [],
      },
    ],
    resolvers: [ElementPlusResolver()],
  });
};
