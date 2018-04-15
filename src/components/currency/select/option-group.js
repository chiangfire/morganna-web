import ElOptionGroup from './src/option-group';

/* istanbul ignore next */
ElOptionGroup.install = function(Vue) {
  Vue.component(ElOptionGroup.name, ElOptionGroup);
};

export default ElOptionGroup;