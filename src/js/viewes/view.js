import * as  config from '../config.js'
import * as helpers from '../helpers.js'
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
    const fileForm = this._fileInput.closest('.file-form');
    if (fileForm) fileForm.remove();
  }


  eventHandler(handler) {
    const filePickerButton = this._fileInput
      .closest('.file-form')
      .querySelector('.file-picker-button');

    this._fileInput.addEventListener('change', (e) => {
      const selectedFile = this._fileInput.files[0];
      filePickerButton.textContent = selectedFile ? selectedFile.name : 'Choose image';
      handler(e)
    })
  }

  _clear(targetElement = this._parentElement) {
    targetElement.innerHTML = ''
  }

  _error(erroMessage = this._erroMessage, targetElement = undefined) {
    const markup = `
      <blockquote class="body-error-message" role="alert">
        <h2>${helpers.escapeHTML(erroMessage)}</h2>
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

    const factors = [
      { fx: 0.08, fy: 0.07 },
      { fx: -0.09, fy: 0.09 },
      { fx: 0.05, fy: -0.08 },
      { fx: -0.08, fy: -0.07 },
      { fx: 0.09, fy: 0.09 }
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
