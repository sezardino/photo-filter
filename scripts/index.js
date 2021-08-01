import FullScreen from './modules/fullscreen.js';
import {Filters, Load, DefaultImages, Save, Reset} from './modules/index.js';

document.addEventListener('DOMContentLoaded', () => {
  new Filters();
  new Load();
  new DefaultImages();
  new FullScreen();
  new Save();
  new Reset();
});
