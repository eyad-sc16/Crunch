import View from "./view"
import * as config from '../config'
class DisplayWindow extends View {
  _parentElement = document.querySelector('.display-window')

  _renderMarkup() {
    const markup =
      `
     <div class="inner-display-window">
          <div class="window-texts-side">
            <h1 class="window-title">Crunch Your Images !</h1>
            <div class="window-text">
              <p>Click on any image to find the perfect option for your needs, and enjoy </p>
              <p>a fully customized experience
                tailored to your
                next project</p>
            </div>
          </div>
          <div class="animation-side">
            <div class="first-box animation-boxs">
              <div><svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="50px" height="50px" viewBox="0 0 22 22"
                  id="memory-image">
                  <path
                    d="M1 4H2V3H20V4H21V18H20V19H2V18H1V4M3 14H4V13H5V12H6V11H7V10H8V9H10V10H11V11H12V12H13V13H14V14H15V15H16V16H17V17H19V5H3V14M14 17V16H13V15H12V14H11V13H10V12H8V13H7V14H6V15H5V16H4V17H14M13 8H14V7H16V8H17V10H16V11H14V10H13V8Z" />
                </svg></div>
              <div class="target-image-name">
                <span>ANY</span>
              </div>

            </div>
            <span class="arrow-up window-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 24 24" fill="none">
                <path d="M4 12H20M20 12L16 8M20 12L16 16" stroke="#000000" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </span>
            <span class="arrow-down window-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 24 24" fill="none">
                <path d="M4 12H20M4 12L8 8M4 12L8 16" stroke="#000000" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </span>
            <div class="second-box animation-boxs">
              <div><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"
                  height="50px" width="50px" version="1.1" id="Layer_1" viewBox="0 0 24 24" xml:space="preserve">
                  <g>
                    <path d="M11,6H7v1H6v4h1v1h4v-1h1V7h-1V6z M10,10H8V8h2V10z" />
                    <path
                      d="M21,3V2H3v1H2v18h1v1h18v-1h1V3H21z M20,14h-1v-1h-1v-1h-1v-1h-3v1h-1v1h-1v1h-1v1h-1v1H9v1H8v1H7v1H6v1H5v-1H4V5h1V4h14v1   h1V14z M20,19h-1v1H9v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v1h1v1h1v1h1v1h1V19z" />
                  </g>
                </svg></div>
              <div class="target-image-name2">
                <span>ANY</span>
              </div>
            </div>
          </div>
        </div>
        `
    this._parentElement.insertAdjacentHTML('afterbegin', markup)
  }

  _randomRender() {
    const typeText = document.querySelector('.target-image-name2');
    if (typeText) {
      const spanEle = typeText.querySelector('span');

      let currentTimer
      if (currentTimer) {
        clearInterval(currentTimer);
      }

      let currentIndex = 0;

      currentTimer = setInterval(() => {
        if (config.TYPES_ARRAY.length === 0) return;
        spanEle.textContent = (config.TYPES_ARRAY[currentIndex]).toUpperCase();
        currentIndex = (currentIndex + 1) % config.TYPES_ARRAY.length;
      }, config.TIMER_TIME * 1000);
    }
  }
}

export default new DisplayWindow()