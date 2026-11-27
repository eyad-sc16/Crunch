import View from "./view";
class ConvertBoxView extends View {
  _parentElement = document.querySelector('.convert-space');
  _erroMessage = 'Please seclect formate to contanue!'

  _renderMarkup() {
    this._clear()
    this._imageArray.forEach((img, i) => {
      const markup = `
        <div class="convert-box" data-order="${i}">
          <div class="convert-content">
            <div class="image-info-side">
              <div class="image">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#423A32" width="40px" height="40px" viewBox="0 0 24 24">
                  <g id="Image_Off">
                    <path
                      d="M19.937,14.218l0,-8.654c0,-0.829 -0.672,-1.5 -1.5,-1.5l-10.628,-0c-0.276,-0 -0.5,-0.225 -0.5,-0.5c0,-0.276 0.224,-0.5 0.5,-0.5l10.628,-0c1.38,-0 2.5,1.118 2.5,2.5l0,10.624c0,0.276 -0.224,0.5 -0.5,0.501c-0.276,-0 -0.5,-0.225 -0.5,-0.5l0,-0.556l-4.583,-4.584c-0.456,-0.456 0.251,-1.163 0.707,-0.707c0.162,0.162 2.37,2.37 3.876,3.876Zm-0.121,6.304c-0.395,0.262 -0.869,0.415 -1.379,0.415l-12.874,-0c-1.381,-0 -2.5,-1.119 -2.5,-2.5l0,-12.873c0,-0.51 0.153,-0.984 0.414,-1.38l-0.263,-0.263c-0.456,-0.456 0.251,-1.163 0.707,-0.707c0.088,0.088 0.176,0.176 0.263,0.263c0.245,0.245 16.095,16.094 16.339,16.338l0.263,0.263c0.455,0.456 -0.252,1.163 -0.707,0.707c-0.088,-0.087 -0.175,-0.175 -0.263,-0.263Zm-11.104,-11.103l-2.001,-2.001c-0.094,0.196 -0.146,0.415 -0.146,0.647c-0,0.829 0.672,1.5 1.5,1.5c0.232,-0 0.451,-0.052 0.647,-0.146Zm-2.733,-2.733l-1.77,-1.77c-0.093,0.196 -0.146,0.416 -0.146,0.648l0,10.717l1.926,-1.926c0.587,-0.586 1.536,-0.586 2.122,-0l0.555,0.554c0.195,0.196 0.511,0.196 0.706,0l2.415,-2.415l-2.343,-2.343c-0.395,0.262 -0.869,0.414 -1.379,0.414c-1.38,-0 -2.5,-1.119 -2.5,-2.5c-0,-0.509 0.152,-0.983 0.414,-1.379Zm-1.916,11.009l0,0.741c0,0.829 0.671,1.5 1.5,1.5l12.874,0c0.232,0 0.451,-0.052 0.647,-0.145c-0.165,-0.165 -3.264,-3.263 -6.59,-6.59l-2.414,2.415c-0.585,0.586 -1.537,0.586 -2.122,0l-0.554,-0.554c-0.195,-0.196 -0.512,-0.196 -0.708,0l-2.633,2.633Z" />
                  </g>
                </svg>
              </div>
              <div class="image-text-info">
                <div class="image-name">
                  <h3>${img.name}</h3>
                </div>
                <div class="image-inner-info">
                  <p>${(img.size / (1024 * 1024)).toFixed(1)} MP . ${img.type.toUpperCase()} Image</p>
                </div>
              </div>
            </div>
            <div class="image-options-side">
              <div class="crunch-text-box">
                <div class="convert-sighn"><svg xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Uploaded to svgrepo.com" width="30px"
                    height="30px" viewBox="0 0 32 32" xml:space="preserve">

                    <path class="puchipuchi_een"
                      d="M31,10c0,2.209-1.791,4-4,4c-1.105,0-2.105-0.448-2.828-1.172L19,18l-1-1v-3h-3l-1-1l5.172-5.172  C18.448,7.105,18,6.105,18,5c0-2.209,1.791-4,4-4s4,1.791,4,4c0,0.423-0.083,0.823-0.205,1.205C26.177,6.083,26.577,6,27,6  C29.209,6,31,7.791,31,10z M17,18v-3h-3l-1-1l-5.172,5.172C7.105,18.448,6.105,18,5,18c-2.209,0-4,1.791-4,4c0,2.209,1.791,4,4,4  c0.423,0,0.823-0.083,1.205-0.205C6.083,26.177,6,26.577,6,27c0,2.209,1.791,4,4,4s4-1.791,4-4c0-1.105-0.448-2.105-1.172-2.828  L18,19L17,18z" />
                  </svg></div>
                <span>Crunch</span>
              </div>
              <div class="image-name-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" id="image"
                  data-name="multi color" class="icon multi-color">
                  <polygon id="tertiary-fill" points="3.29 19.71 9 14 11 16 14 13 20.71 19.71 3.29 19.71"
                    style="fill: #B19A82; stroke-width: 2;" />
                  <path id="primary-stroke"
                    d="M20,20H4a1,1,0,0,1-1-1V5A1,1,0,0,1,4,4H20a1,1,0,0,1,1,1V19A1,1,0,0,1,20,20Zm.71-.29L14,13l-3,3L9,14,3.29,19.71Z"
                    style="fill: none; stroke: #423A32; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;" />
                  <circle id="secondary-fill" cx="11" cy="9" r="1"
                    style="fill: #735235; stroke: #8A684C; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;" />
                </svg>
                <p>${img.type.toUpperCase()}</p>
                <svg class="right-arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="30px" height="30px" viewBox="0 0 24 24">
                  <defs>
                    <path id="right-a"
                      d="M2.29289322,0.292893219 C2.68341751,-0.0976310729 3.31658249,-0.0976310729 3.70710678,0.292893219 C4.09763107,0.683417511 4.09763107,1.31658249 3.70710678,1.70710678 L1.70710678,3.70710678 C1.31658249,4.09763107 0.683417511,4.09763107 0.292893219,3.70710678 C-0.0976310729,3.31658249 -0.0976310729,2.68341751 0.292893219,2.29289322 L2.29289322,0.292893219 Z" />
                    <path id="right-c"
                      d="M3.41421356,4 L13.0014708,4 C13.5529433,4 14,4.44771525 14,5 C14,5.55228475 13.5529433,6 13.0014708,6 L3.41421356,6 L5.70710678,8.29289322 C6.09763107,8.68341751 6.09763107,9.31658249 5.70710678,9.70710678 C5.31658249,10.0976311 4.68341751,10.0976311 4.29289322,9.70710678 L0.292893219,5.70710678 C-0.0976310729,5.31658249 -0.0976310729,4.68341751 0.292893219,4.29289322 L4.29289322,0.292893219 C4.68341751,-0.0976310729 5.31658249,-0.0976310729 5.70710678,0.292893219 C6.09763107,0.683417511 6.09763107,1.31658249 5.70710678,1.70710678 L3.41421356,4 Z" />
                  </defs>
                  <g fill="none" fill-rule="evenodd" transform="matrix(-1 0 0 1 19 7)">
                    <g transform="translate(3 1)">
                      <mask id="right-b" fill="#D2B89D">
                        <use xlink:href="#right-a" />
                      </mask>
                      <use fill="#B19A82" fill-rule="nonzero" xlink:href="#right-a" />
                      <g fill="#886E58" mask="url(#right-b)">
                        <rect width="24" height="24" transform="translate(-8 -8)" />
                      </g>
                    </g>
                    <mask id="right-d" fill="#D2B89D">
                      <use xlink:href="#right-c" />
                    </mask>
                    <use fill="#423A32" fill-rule="nonzero" xlink:href="#right-c" />
                    <g fill="#6F4926" mask="url(#right-d)">
                      <rect width="24" height="24" transform="translate(-5 -7)" />
                    </g>
                  </g>
                </svg>
              </div>
              <select class="format-btn" aria-label="Output image format">
                <option value="" disabled ${!img.imgFormate ? 'selected' : ''} hidden>Select Formate</option>
                <option value="jpeg" ${img.imgFormate === 'jpeg' ? 'selected' : ''}>jpeg</option>
                <option value="png" ${img.imgFormate === 'png' ? 'selected' : ''}>png</option>
                <option value="avif" ${img.imgFormate === 'avif' ? 'selected' : ''}>avif</option>
                <option value="jxl" ${img.imgFormate === 'jxl' ? 'selected' : ''}>jxl</option>
                <option value="qoi" ${img.imgFormate === 'qoi' ? 'selected' : ''}>qoi</option>
                <option value="webp" ${img.imgFormate === 'webp' ? 'selected' : ''}>webp</option>
                <option value="oxipng" ${img.imgFormate === 'oxipng' ? 'selected' : ''}>oxipng</option>
              </select>
              <button class="close-btn" aria-label="Remove image">X</button>
            </div>
          </div>
          <div class="render-space">
          </div>
        </div>
    `
      this._parentElement.insertAdjacentHTML('beforeend', markup)
    })
  }

  _addClickHandler(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const target = e.target;
      if (!target.classList.contains('close-btn')) return
      handler(e)
    })
  }

  _renderLoadeingBar = (i) => {
    if (!this._parentElement) return
    const markup = `
      <div class="loading-box">
        <p role="status">Crunching...</p>
        <div class="loading-bar"></div>
      </div>
    `
    const box = this._parentElement.querySelector(`[data-order="${i}"]`);
    if (box) {

      const renderSpace = box.querySelector('.render-space')
      this._clear(renderSpace)
      renderSpace.insertAdjacentHTML('afterbegin', markup);
    }
  }

  _renderDownloadMarkup = (img, i) => {
    if (!this._parentElement) return
    const markup = `
      <div class="download-box">
        <p role="status" aria-live="polite">✅ Your Image Ready To Download</p>
        <a class="download-link" href="${img.imgUrl}" download="${(img.name.split('.')[0]) + '.' + (img.name.split('.')[1] = img.newType)}">Download Image</a>
      </div>
    `
    const box = this._parentElement.querySelector(`[data-order="${i}"]`);
    if (box) {
      const renderSpace = box.querySelector('.render-space')
      this._clear(renderSpace)
      renderSpace.insertAdjacentHTML('afterbegin', markup);
    }
  }

  _HandlingGetSelectInputValue(handler) {
    if (!this._parentElement) return
    this._parentElement.addEventListener('change', function (e) {
      const target = e.target.closest('.format-btn');
      if (!target) return
      handler(e)

    })
  }

  _renderError(erroMessage = this._erroMessage, i) {
    if (!this._parentElement) return
    const markup = `
      <div class="convert-box-messages">
        <p> 🚫 ${erroMessage}</p>
      </div>
    `
    const box = this._parentElement.querySelector(`[data-order="${i}"]`);
    if (box) {
      const renderSpace = box.querySelector('.render-space')

      if (renderSpace) {
        this._clear(renderSpace)
        renderSpace.insertAdjacentHTML('afterbegin', markup);
      }
    }
  }

}

export default new ConvertBoxView()