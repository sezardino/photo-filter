const FILTERS = {
  BLUR: 'blur',
  INVERT: 'invert',
  SEPIA: 'sepia',
  SATURATE: 'saturate',
  HUE: 'hue',
};

class Filters {
  constructor() {
    this.filters = document.querySelectorAll('.js-filters label');

    this.filterInputHandler = this.filterInputHandler.bind(this);

    this.init();
  }

  filterInputHandler(wrapper) {
    const input = wrapper.querySelector('input');
    const output = wrapper.querySelector('output');

    input.addEventListener('input', () => {
      output.textContent = input.value;
      document.documentElement.style.setProperty(
        `--${input.name}`,
        input.value + input.dataset.sizing
      );
    });
  }

  init() {
    this.filters.forEach(this.filterInputHandler);
  }
}

export default Filters;
