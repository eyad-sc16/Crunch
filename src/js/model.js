import * as jpeg from "@jsquash/jpeg";
import * as png from "@jsquash/png";
import * as webp from "@jsquash/webp";
import * as avif from "@jsquash/avif";
import * as jxl from "@jsquash/jxl";
import * as qoi from "@jsquash/qoi";
import { optimise } from "@jsquash/oxipng";
import * as helpers from './helpers'

// Available image format processors
const processors = {
  jpeg,
  png,
  webp,
  avif,
  jxl,
  qoi,
};



// Application state
export const state = {
  imagesArray: [],
  convertedImagesArray: [],
};

// Load the selected image files into the application state
export const loadImageData = async function (e) {
  const files = e.target?.files || e.srcElement?.files;
  if (!files || files.length === 0) return;

  // Store the selected images in the images array
  Array.from(files).forEach((img) => {
    if (!img.type.startsWith("image")) helpers.errorThrowing("Only Images Accepted!, Please Try Anothor Image")

    const image = {
      size: img.size,
      name: img.name,
      type: img.type ? img.type.split("/")[1] : "png",
      file: img,

    };

    state.imagesArray.push(image);
  });
};


// Remove an image from the conversion interface and application state
export const removeImage = function (e) {
  const target = e.target.closest(".close-btn");
  if (!target) return;

  // Get the image order and remove its conversion box
  const targetOrder = target.closest(".convert-box").dataset.order;

  document.querySelector(`[data-order="${targetOrder}"]`).remove();

  // Remove the corresponding image object from the images array
  state.imagesArray.splice(targetOrder, 1);
};


// Optimise PNG images using OxiPNG
export const optimiseFormateHandling = async function (img) {
  if (img.type !== "png") helpers.errorThrowing("oxipng work only winth png image, chose another formate or image please")

  const optimiseArraybuffer = await optimise(img.buffer, { level: 3 });
  if (!optimiseArraybuffer || optimiseArraybuffer.byteLength === 0) helpers.errorThrowing('Failed to optimize PNG image. Please try again')
  img.buffer = optimiseArraybuffer;

  const blob = new Blob([img.buffer], { type: "image/png" });
  const url = URL.createObjectURL(blob);

  const convertedObj = {
    imgUrl: url,
    newType: blob.type.split("/")[1],
    name: img.name,
  };

  state.convertedImagesArray.push(convertedObj);
  return convertedObj;
};


// Convert the selected image into the requested format
export const convertImages = async function (img) {
  // Convert the selected file into an ArrayBuffer
  img.buffer = await img.file.arrayBuffer();

  if (!img.buffer || img.buffer.byteLength === 0) helpers.errorThrowing('Converting Failed . Please try again!!')
  let convertedObj;

  // Handle OxiPNG optimisation
  if (img.imgFormate === "oxipng") {
    convertedObj = await optimiseFormateHandling(img);
  }

  // Handle regular image format conversion
  if (img.imgFormate !== "oxipng") {
    // Get the decoder and encoder dynamically
    const decoder = processors[img.type]?.decode;
    const encoder = processors[img.imgFormate]?.encode;

    const imageData = await decoder(img.buffer);

    const result = await encoder(imageData);
    if ((!imageData || imageData.data.byteLength === 0) || (!result || result.byteLength === 0)) helpers.errorThrowing('Converting Failed . Please try again!!')

    // Convert the encoded image data into a Blob
    const blob = new Blob([result], {
      type: `image/${img.imgFormate}`,
    });

    // Create a temporary URL for the converted image
    const url = URL.createObjectURL(blob);
    convertedObj = {
      imgUrl: url,
      newType: blob.type.split("/")[1],
      name: img.name,
    };

    state.convertedImagesArray.push(convertedObj);
  }
  state.imagesArray.splice(state.imagesArray.indexOf(img), 1)

  return convertedObj;
};


// Handle the selected output format
export const selectingFormateHandling = function (e) {
  const target = e.target;
  const selectedValue = target.value;

  // Get the conversion box order from its data attribute
  const order = target.closest(".convert-box").dataset.order;
  state.imagesArray[order].imgFormate = selectedValue;
};