// export * from './lib/slcore';

export * from '@shoelace-style/shoelace/dist/components/button/button.js';
export * from '@shoelace-style/shoelace/dist/components/color-picker/color-picker.js';
export * from '@shoelace-style/shoelace/dist/components/dialog/dialog.js';
export * from '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';
export * from '@shoelace-style/shoelace/dist/components/input/input.js';
export * from '@shoelace-style/shoelace/dist/components/rating/rating.js';
export * from '@shoelace-style/shoelace/dist/themes/light.css';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';

// Set the base path to the folder you copied Shoelace's assets to
setBasePath('../../node_modules/@shoelace-style/shoelace/dist')
