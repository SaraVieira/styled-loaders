const getSize = (size, defaultSize) => (size ? size : defaultSize);

const getColor = (color, defaultColor) => (color ? color : defaultColor);

const getDuration = (duration, defaultDuration) =>
  duration ? duration : defaultDuration;

export const size = (props, defaultSize = '40px') =>
  getSize(props.size, defaultSize);

export const color = (props, defaultColor = '#333') => getColor(props.color, defaultColor);

export const duration = (props, defaultDuration) =>
  getDuration(props.duration, defaultDuration);
