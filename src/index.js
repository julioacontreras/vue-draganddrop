
import Vue from 'vue';

import DragAndDrop from './DragAndDrop.vue';

// Install the components
export function install(Vue) {
	Vue.component('draganddrop', DragAndDrop);
}

// Expose the components
export { DragAndDrop };

