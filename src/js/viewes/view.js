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

    // نقرأ المكان الأساسي لكل صورة من الـ CSS بتاعها مباشرة
    const baseTransforms = Array.from(images).map(img => {
      const matrix = new DOMMatrix(window.getComputedStyle(img).transform);
      return { x: matrix.m41, y: matrix.m42 };
    });

    let lastX = null;
    let lasty = null;

    window.addEventListener('mousemove', function (e) {
      const currentX = e.clientX;
      const currenty = e.clientY;

      if (lastX === null || lasty === null) {
        lastX = currentX;
        lasty = currenty;
        return;
      }

      let offsetX = 0;
      let offsetY = 0;

      if (currentX > lastX) {
        offsetX = 4;
      } else if (currentX < lastX) {
        offsetX = -4;
      }

      if (currenty < lasty) {
        offsetY = -4;
      } else if (currenty > lasty) {
        offsetY = 4;
      }

      // تطبيق حيز مختلف (موجب وسالب) لكل صورة حول مكانها الأصلي بوضوح

      images[0].style.transform = `translate(${baseTransforms[0].x + offsetX}px, ${baseTransforms[0].y + offsetY}px)`;
      images[1].style.transform = `translate(${baseTransforms[1].x - offsetX}px, ${baseTransforms[1].y + (offsetY * 1.7)}px)`;
      images[2].style.transform = `translate(${baseTransforms[2].x + offsetX}px, ${baseTransforms[2].y - offsetY}px)`;
      images[3].style.transform = `translate(${baseTransforms[3].x - offsetX}px, ${baseTransforms[3].y - (offsetY * 1.5)}px)`;
      images[4].style.transform = `translate(${baseTransforms[4].x + offsetX}px, ${baseTransforms[4].y + (offsetY * 1.9)}px)`;


      lastX = currentX;
      lasty = currenty;
    });

  }
}
