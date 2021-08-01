class Reset {
  constructor() {
    this.filters = Array.from(document.querySelectorAll('.js-filters label'));
    this.trigger = document.querySelector('.js-reset');

    this.init();
  }

  addDefaultValues() {
    this.default = this.filters.map((item) => {
      const input = item.querySelector('input');
      return {name: input.name, value: input.value};
    });
  }

  addListeners() {
    this.trigger.addEventListener('click', () => {
      this.filters.map((wrapper) => {
        const input = wrapper.querySelector('input');
        const output = wrapper.querySelector('output');
        const defaultValue = this.default.find((item) => item.name === input.name);
        input.value = defaultValue.value;
        output.textContent = defaultValue.value;
      })
      document.documentElement.style = '';
    })
  }

  init() {
    this.addDefaultValues();
    this.addListeners();
  }
}

export default Reset;
