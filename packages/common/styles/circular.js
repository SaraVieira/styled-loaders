import { css } from 'styled-components';
import { circular } from '../utils/animations';
import { size, color } from '../utils/defaults';

export const SpinnerStyles = css`
  position: relative;
  margin: 100px auto;
  width: ${p => size(p)};
  height: ${p => size(p)};
`;

export const CircleStyles = css`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;

  &:before {
    content: '';
    display: block;
    margin: 0 auto;
    width: 15%;
    height: 15%;
    background-color: ${p => color(p)};
    border-radius: 100%;
    animation: ${circular} 1.2s infinite ease-in-out both;
  }
`;

export const Circle2Styles = css`
  ${CircleStyles}
  transform: rotate(30deg);
  &:before {
    animation-delay: -1.1s;
  }
`;
export const Circle3Styles = css`
  ${CircleStyles}
  transform: rotate(60deg);
  &:before {
    animation-delay: -1s;
  }
`;
export const Circle4Styles = css`
  ${CircleStyles}
  transform: rotate(90deg);
  &:before {
    animation-delay: -0.9s;
  }
`;
export const Circle5Styles = css`
  ${CircleStyles}
  transform: rotate(120deg);
  &:before {
    animation-delay: -0.8s;
  }
`;
export const Circle6Styles = css`
  ${CircleStyles}
  transform: rotate(150deg);
  &:before {
    animation-delay: -0.7s;
  }
`;
export const Circle7Styles = css`
  ${CircleStyles}
  transform: rotate(180deg);
  &:before {
    animation-delay: -0.6s;
  }
`;
export const Circle8Styles = css`
  ${CircleStyles}
  transform: rotate(210deg);
  &:before {
    animation-delay: -0.5s;
  }
`;
export const Circle9Styles = css`
  ${CircleStyles}
  transform: rotate(240deg);
  &:before {
    animation-delay: -0.4s;
  }
`;
export const Circle10Styles = css`
  ${CircleStyles}
  transform: rotate(270deg);
  &:before {
    animation-delay: -0.3s;
  }
`;
export const Circle11Styles = css`
  ${CircleStyles}
  transform: rotate(300deg);
  &:before {
    animation-delay: -0.2s;
  }
`;
export const Circle12Styles = css`
  ${CircleStyles}
  transform: rotate(330deg);
  &:before {
    animation-delay: -0.1s;
  }
`;
