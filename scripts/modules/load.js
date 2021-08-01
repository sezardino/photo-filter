class Load {
  constructor() {
    this.fileInput = document.querySelector('.js-load');
    this.image = document.querySelector('img');

    this.init();
  }

  addListeners() {
    this.fileInput.addEventListener('change', () => {
      const file = this.fileInput.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.image.src = reader.result;
      }
      reader.readAsDataURL(file);
    });
  }

  init() {
    this.addListeners();
  }
}

export default Load;
