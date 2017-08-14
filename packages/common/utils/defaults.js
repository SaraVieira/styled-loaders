const getSize = (size, defaultSize) => (size || defaultSize);

const getColor = (color, defaultColor) => (color || defaultColor);

const getDuration = (duration, defaultDuration) =>
  (duration || defaultDuration);

const getCubeSize = (cubeSize, defaultSize) =>
  (cubeSize || defaultSize);

export const size = (props, defaultSize = '40px') =>
  getSize(props.size, defaultSize);

export const color = (props, defaultColor = '#333') =>
  getColor(props.color, defaultColor);

export const duration = (props, defaultDuration) =>
  getDuration(props.duration, defaultDuration);

export const cubeSize = (props, defaultSize) =>
  getCubeSize(props.cubeSize, defaultSize);
