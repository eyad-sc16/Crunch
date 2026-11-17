import * as  config from '../config.js'
export default class View {
  _imageArray;
  _convertedImageArray;
  _fileInput = document.querySelector('.file-input');
  _erroMessage = 'Some Thing Wrong!, Please Try again!'
  _body = document.body;


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
}