import ElOption from './src/option';

/* istanbul ignore next */
ElOption.install = function(Vue) {
  Vue.component(ElOption.name, ElOption);
};

export default ElOption;