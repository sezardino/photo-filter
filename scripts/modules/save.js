class Save {
  constructor() {
    this.trigger = document.querySelector('.js-save');
    this.filters = Array.from(document.querySelectorAll('.js-filters label'));

    this.init();
  }

  getFilters(arr) {
    let filtersString = '';
    arr.map((item) => {
      const input = item.querySelector('input');
      filtersString +=
        input.value !== '0'
          ? `${input.name === 'hue' ? 'hue-rotate' : input.name}(${
              input.value
            }${input.dataset.sizing}) `
          : ' ';
    });

    return filtersString;
  }

  saveImage() {
    const link = document.createElement('a');
    link.download = 'download.png';
    link.href = this.canvas.toDataURL();
    link.click();
    link.delete;
  }

  addListeners() {
    this.trigger.addEventListener('click', () => {
      const img = new Image();
      img.setAttribute('crossOrigin', 'anonymous');
      img.src = document.querySelector('img').src;
      const filters = this.getFilters(this.filters);
      img.addEventListener('load', () => {
        this.canvas.width = img.width;
        this.canvas.height = img.height;
        this.ctx = this.canvas.getContext('2d');
        this.ctx.filter = filters;
        this.ctx.drawImage(img, 0, 0);
        this.saveImage();
      });
    });
  }

  init() {
    this.canvas = document.createElement('canvas');
    this.addListeners();
  }
}

export default Save;
