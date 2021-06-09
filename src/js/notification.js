import PNotify from 'pnotify/dist/es/PNotify.js';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons.js';
// import '../../node_modules/pnotify/dist/PNotifyBrightTheme.css';
import PNotifyStyleMaterial from 'pnotify/dist/es/PNotifyStyleMaterial.js';
import '../../node_modules/material-design-icons/iconfont/material-icons.css';
PNotify.defaults.styling = 'material';
PNotify.defaults.icons = 'material';

// PNotify.notice('Too many matches found. Please enter a more specific query!');

function info(text) {
  PNotify.info({
    text,
    delay: 1500,
    animateSpeed: 'slow',
  });
}

function error(error) {
  PNotify.error({
    text: error,
    delay: 1500,
    animateSpeed: 'slow',
  });
}

export default { info, error };
