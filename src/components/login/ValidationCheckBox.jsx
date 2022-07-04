import {
  AiOutlineCheckCircle,
  AiOutlineExclamationCircle,
} from 'react-icons/ai';

import styled, { css } from 'styled-components';

export default function ValidationCheckBox({ validation }) {
  if (validation === undefined || validation === true) {
    return <OutlineCheckCircle validation={String(validation)} />;
  }

  return <OutlineExclamationCircle />;
}

const commonCss = css`
  height: 100%;
  width: 24px;
  margin-left: 5px;
`;

const OutlineCheckCircle = styled(AiOutlineCheckCircle)`
  ${commonCss}
  color: ${({ validation }) =>
    validation === 'undefined' ? 'lightgray' : 'green'};
`;

const OutlineExclamationCircle = styled(AiOutlineExclamationCircle)`
  ${commonCss};
  color: #ea6666;
`;
