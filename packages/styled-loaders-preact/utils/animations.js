import { keyframes } from 'styled-components';

export const rotateplane = keyframes`
	0% {
		transform: perspective(120px) rotateX(0deg) rotateY(0deg);
	}
	50% {
		transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
	}
	100% {
		transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
	}
`;

export const pulsate = keyframes`
  0%, 100% { 
    transform: scale(0.0);
  } 50% { 
    transform: scale(1.0);
  }
`;

export const stretch = keyframes`
  0%, 40%, 100% { 
    transform: scaleY(0.4);
  }  20% { 
    transform: scaleY(1.0);
	}
`;

export const cube = keyframes`
  25% { 
    transform: translateX(42px) rotate(-90deg) scale(0.5);
  } 50% { 
    transform: translateX(42px) translateY(42px) rotate(-179deg);
  } 50.1% { 
    transform: translateX(42px) translateY(42px) rotate(-180deg);
  } 75% { 
    transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
  } 100% { 
    transform: rotate(-360deg);
  }
`;

export const scale = keyframes`
  0% { 
    transform: scale(0);
  } 100% {
    transform: scale(1.0);
    opacity: 0;
  }
`;
