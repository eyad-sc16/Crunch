import * as  config from '../config.js'
export default class View {
  _imageArray;
  _convertedImageArray;
  _fileInput = document.querySelector('.file-input');
  _erroMessage = 'Some Thing Wrong!, Please Try again!'
  _body = document.body;

  constructor() {
    this._movingImages()
  }

  _render(data, convertImages = undefined) {
    this._imageArray = data
    this._convertedImageArray = convertImages


  }


  _deleteAllDom() {
    const header = this._body.querySelector('header')
    const footer = this._body.querySelector('footer')

    header.remove()
    footer.remove()
    this._fileInput.remove()
  }


  eventHandler(handler) {
    this._fileInput.addEventListener('change', function (e) {
      e.preventDefault()
      handler(e)
    })
  }

  _clear(targetElement = this._parentElement) {
    targetElement.innerHTML = ''
  }

  _error(erroMessage = this._erroMessage, targetElement = undefined) {
    const markup = `
      <blockquote class="body-error-message">
        <h1>${erroMessage}</h1>
      </blockquote>
    `
    const targetEle = targetElement ? this._body.querySelector(`.${targetElement}`) : this._body;
    targetEle.insertAdjacentHTML('beforeend', markup)

    setTimeout(() => {
      targetEle.querySelector('.body-error-message').remove()
    }, config.TIMER_TIME * 1000)
  }

  _movingImages() {
    const images = document.querySelectorAll('.icon');
    if (!images.length) return;

    // نقرأ المكان الأساسي لكل صورة من الـ CSS مباشرة
    const baseTransforms = Array.from(images).map(img => {
      const matrix = new DOMMatrix(window.getComputedStyle(img).transform);
      return { x: matrix.m41, y: matrix.m42 };
    });

    // معاملات السرعة والحركة (Parallax factors) لكل صورة لتعطي حركة سلسة واحترافية
    const factors = [
      { fx: 0.05, fy: 0.04 },
      { fx: -0.08, fy: 0.07 },
      { fx: 0.03, fy: -0.06 },
      { fx: -0.06, fy: -0.05 },
      { fx: 0.07, fy: 0.08 }
    ];

    window.addEventListener('mousemove', (e) => {
      const { innerWidth, innerHeight } = window;
      const mouseX = (e.clientX / innerWidth) - 0.5;
      const mouseY = (e.clientY / innerHeight) - 0.5;

      images.forEach((img, index) => {
        if (!baseTransforms[index]) return;
        const factor = factors[index % factors.length];
        const x = baseTransforms[index].x + (mouseX * 120 * factor.fx);
        const y = baseTransforms[index].y + (mouseY * 120 * factor.fy);
        img.style.transform = `translate(${x}px, ${y}px)`;
      });
    });
  }
}
