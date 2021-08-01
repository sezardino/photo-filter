const DAY_TIME = {
  DAY: 'day',
  EVENING: 'evening',
  MORNING: 'morning',
  NIGHT: 'night',
};

const MAX_INDEX = 20;

const DEFAULT_IMAGES_URL = (dayTime, count) =>
  `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/day/${count <= 9 ? '0' + count : count}.jpg`;
class DefaultImages {
  constructor() {
    this.trigger = document.querySelector('.js-next');
    this.image = document.querySelector('img');
    this.count = 1;
    this.init();
  }

  checkTime() {
    const now = new Date();
    const hours = now.getHours();
    const dayTime =
      hours >= 6 && hours < 12
        ? DAY_TIME.MORNING
        : hours >= 12 && hours < 18
        ? DAY_TIME.DAY
        : hours >= 18 && hours <= 23
        ? DAY_TIME.EVENING
        : DAY_TIME.NIGHT;

    return dayTime;
  }

  changeIndex() {
    this.count = this.count++ < MAX_INDEX ? this.count++ : 1;
  }

  addListeners() {
    this.trigger.addEventListener('click', () => {
      this.changeIndex();
      this.image.src = DEFAULT_IMAGES_URL(this.checkTime(), this.count);
    });
  }

  init() {
    this.addListeners();
  }
}

export default DefaultImages;
