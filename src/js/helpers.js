export const errorThrowing = function (errorMessage) {
  throw new Error(errorMessage)
};

const HTML_ESCAPE_MAP = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

export const escapeHTML = function (value) {
  return String(value).replace(/[&<>"']/g, character => HTML_ESCAPE_MAP[character]);
};
