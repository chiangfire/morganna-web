import ElCheckboxButton from './src/checkbox-button.vue';

/* istanbul ignore next */
ElCheckboxButton.install = function(Vue) {
  Vue.component(ElCheckboxButton.name, ElCheckboxButton);
};

export default ElCheckboxButton;
