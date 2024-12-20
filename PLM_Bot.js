class PLM_Bot {
  constructor() {
    this.items = [
      { selector: '#activity_name', eventTypes: ['input'], delay: 100, value: '' },
      { selector: '#TALEP_SAHIBI', eventTypes: ['change'], delay: 100, value: '' },
      { selector: '#ACTIVITY_TYPE', eventTypes: ['change'], delay: 100, value: '' },
      { selector: '#SORUMLU_DEPARTMAN', eventTypes: ['change'], delay: 100, value: '' },
      { selector: '#constraintType_0', eventTypes: ['change'], delay: 100, value: '' },
      { selector: '#constraintDate_0', eventTypes: ['input'], delay: 100, value: '' },
      { selector: '#activity_effort', eventTypes: ['input'], delay: 100, value: '' },
      { selector: '#quick_search', eventTypes: ['click', 'focus', 'keydown', 'input', 'keyup'], delay: 2000, value: '' },
      { selector: '.x-combo-list-item.x-combo-selected', eventTypes: ['click'], delay: 100, value: '' },
      { selector: '#PJL_wizard_apply button', eventTypes: ['click'], delay: 100, value: '' },
    ];
    this.loaded = [];
  }
  set(arr) {
    this.items.forEach((item, i) => {
      item.value = arr[i];
    });
    return this;
  }
  load(arr) {
    this.loaded.push(arr);
  }
  dispatch(el, eventTypes) {
    eventTypes.forEach(eventType => {
      el.dispatchEvent(new Event(eventType, { bubbles: true }));
    });
  }
  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  checkLoader() {
    return new Promise((resolve) => {
      const interval = setInterval(() => {
        const element = document.querySelector('.x-mask-loading');
        if (!element) {
          clearInterval(interval);
          console.log('Loader resolved.');
          resolve();
        } else {
          console.log('Loader persists.');
        }
      }, 500);
    });
  }
  async run() {
    for (const item of this.items) {
      const el = document.querySelector(item.selector);
      el.value = item.value;
      this.dispatch(el, item.eventTypes);
      await this.delay(item.delay);
    }
  }
  async runLoaded() {
    let counter = 0;
    for (const loaded of this.loaded) {
      await this.delay(100);
      this.set(loaded);
      await this.run();
      counter++;
      console.log(`Completed: ${counter} of ${this.loaded.length}`);
      await this.checkLoader();
    }
  }
}
