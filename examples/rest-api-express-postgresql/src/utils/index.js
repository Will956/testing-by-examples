const buildResponse = (status, data) => ({ status, data });

const buildError = (status, message) => ({ status, message });

export {
  buildResponse,
  buildError
};
