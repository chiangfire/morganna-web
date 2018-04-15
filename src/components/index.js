/**
 * container
 */
import Container from './currency/container/index.js';
import Header from './currency/container/header/index.js';
import Aside from './currency/container/aside/index.js';
import Main from './currency/container/main/index.js';
import Footer from './currency/container/footer/index.js';

/**
 * layout
 */

import Col from "./currency/layout/col/index.js";
import Row from "./currency/layout/row/index.js";

import Collapse from './currency/collapse/index.js';
import CollapseItem from './currency/collapse-item/index.js';

/**
 * core
 */
import locale from './core/locale/index.js';
import CollapseTransition from './core/transitions/collapse-transition';

import Popover from './currency/popover/index.js';
import Button from './currency/button/button.js';
import ButtonGroup from './currency/button/button-group.js';

import Carousel from './currency/carousel/index.js';
import CarouselItem from './currency/carousel-item/index.js';

import Switch from "./currency/switch/index.js";
/**
 * form
 */
import Input from "./currency/form/input/input.js";
import InputNumber from "./currency/form/input/input-number.js";
//checkbox
import Checkbox from "./currency/form/checkbox/checkbox.js";
import CheckboxButton from "./currency/form/checkbox/checkbox-button.js";
import CheckboxGroup from "./currency/form/checkbox/checkbox-group.js";
//radio
import Radio from "./currency/form/radio/radio.js";
import RadioButton from "./currency/form/radio/radio-button.js";
import RadioGroup from "./currency/form/radio/radio-group.js";

import Form from "./currency/form/form.js";
import FormItem from "./currency/form/form-item.js";

import Option from './currency/select/option.js';
import OptionGroup from './currency/select/option-group.js';
import Tag from './currency/tag/index.js';
import Scrollbar from './currency/scrollbar/index.js';
import Select from './currency/select/index.js';
/**
 * date
 */
import DatePicker from './date/date-picker.js';
import TimePicker from './date/time-picker.js';
import TimeSelect from './date/time-select.js';



const components = [
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Col,
  Row,
  Collapse,
  CollapseItem,
  CollapseTransition,
  Popover,
  ButtonGroup,
  Button,
  Carousel,
  CarouselItem,
  Switch,
  Input,
  InputNumber,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Radio,
  RadioGroup,
  RadioButton,
  Form,
  FormItem,
  Tag,
  Scrollbar,
  Option,
  OptionGroup,
  Select,
  TimePicker,
  TimeSelect,
  DatePicker
];

const install = function(Vue, opts = {}) {
  locale.use(opts.locale);
  locale.i18n(opts.i18n);

  components.map(component => {
    Vue.component(component.name, component);
  });

  //Vue.use(Loading.directive);

  const ELEMENT = {};
  ELEMENT.size = opts.size || '';

  /*Vue.prototype.$loading = Loading.service;
  Vue.prototype.$msgbox = MessageBox;
  Vue.prototype.$alert = MessageBox.alert;
  Vue.prototype.$confirm = MessageBox.confirm;
  Vue.prototype.$prompt = MessageBox.prompt;
  Vue.prototype.$notify = Notification;
  Vue.prototype.$message = Message;*/

  Vue.prototype.$ELEMENT = ELEMENT;
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '0.0.1',
  locale: locale.use,
  i18n: locale.i18n,
  install,
  CollapseTransition,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Col,
  Row,
  Collapse,
  CollapseItem,
  Popover,
  ButtonGroup,
  Button,
  Carousel,
  CarouselItem,
  Switch,
  Input,
  InputNumber,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Radio,
  RadioGroup,
  RadioButton,
  Form,
  FormItem,
  Option,
  OptionGroup,
  Tag,
  Scrollbar,
  Select,
  TimePicker,
  TimeSelect,
  DatePicker
};
