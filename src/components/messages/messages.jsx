/* eslint-disable react/prop-types */

import { MessageStyle } from "../components-styles/message";

export function Message({ image, section}) {
  return (
    <MessageStyle>
      <img src={image} alt=""/>
      <p>
        <span>Não há nenhum {section} por aqui...</span>
      </p>
      <p>
        Crie um {section} clicando no botão “Criar {section}
      </p>
    </MessageStyle>
  );
}
