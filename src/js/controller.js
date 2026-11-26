import 'regenerator-runtime/runtime.js'
import 'core-js/stable'
import * as model from './model';
import displayWindowView from './viewes/displayWindowView.js';
import convertBoxView from './viewes/convertBoxView.js';
import addMoreView from './viewes/addMoreView.js';

// function of the init markup rendering
const render = function (image, convertedImage = undefined) {
  convertBoxView._render(image, convertedImage);
  addMoreView._render(image, model.state.convertedImagesArray);
  displayWindowView._render(image);
};


const controleRenderAll = async function (e) {
  try {
    await model.loadImageData(e);
    displayWindowView._deleteAllDom();
    render(model.state.imagesArray, model.state.convertedImagesArray);
    displayWindowView._randomRender();
    displayWindowView._renderMarkup();
    convertBoxView._renderMarkup();
    addMoreView._renderMarkup();

  } catch (error) {
    convertBoxView._error(error.message)
  };
};

// add new image async control function;
const controleAddNewImage = async function (e) {
  try {
    await model.loadImageData(e);
    render(model.state.imagesArray, model.state.convertedImagesArray);
    displayWindowView._randomRender();
    convertBoxView._renderMarkup();
    addMoreView._renderMarkupUpdate();

  } catch (error) {
    convertBoxView._error(error.message)
  };
};

// convet functionality;
const convert = function () {
  model.state.imagesArray.forEach(async function (img, i) {
    try {

      if (!img.imgFormate) throw new Error('Please seclect formate to contanue!');

      convertBoxView._renderLoadeingBar(i);

      const convertedObj = await model.convertImages(img);

      convertBoxView._renderDownloadMarkup(convertedObj, i);
      addMoreView._renderSuccessMarkup()
    } catch (error) {
      convertBoxView._renderError(error.message, i)
    };

  });
};

// remove markup functonality
const controleRemoveImage = function (e) {
  model.removeImage(e);
  addMoreView._render(model.state.imagesArray);
  convertBoxView._render(model.state.imagesArray);
  addMoreView._renderMarkupUpdate();
};

// selectin formate function
const conteroleSelectingFormate = function (e) {
  model.selectingFormateHandling(e);
};

// the init function
(function () {
  convertBoxView.eventHandler(controleRenderAll);
  addMoreView.eventHandler(controleAddNewImage);
  addMoreView._addConvertHandler(convert);
  convertBoxView._addClickHandler(controleRemoveImage);
  convertBoxView._HandlingGetSelectInputValue(conteroleSelectingFormate);
})()

