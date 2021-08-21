import { keyframes } from 'styled-components';

export const drop = keyframes`
  from {
    transform: translate(0, -150%);
  }

  to {
    transform: translate(0, 0);
  }
`;

export const slideUp = keyframes`
  from {
    transform: translate(0, 200%);
  }

  to {
    transform: translate(0, 0);
  }
`;

export const rotate = keyframes`
from {
  transform: rotate(0);
}
to {
  transform: rotate(360deg);
}
`;
