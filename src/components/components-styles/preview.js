import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";

export const DialogOverlay = styled(Dialog.Overlay)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.479);
  position: fixed;
  inset: 0;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;

export const ModalBox = styled(Dialog.Content)`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  max-width: 100%;
  background: linear-gradient(180deg, #226374, #226374, #388a9f);
  padding: 30px;
  border-radius: 5px;
  max-height: 90%;
  overflow-y: auto;
  color: #ffffff;
  font-family: "Inter";

  h2 {
    font-family: "Itim";
  }
`;

export const DialogTrigger = styled(Dialog.Trigger)`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  background-color: transparent;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: 0.2s;
`;

export const ItemModal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 5px;
  width: 100%;
  margin: 25px 0;
  padding: 10px 15px;
  border-radius: 5px;

  h3 {
    font-family: "Itim";
    font-size: 1.2rem;
    font-weight: normal;
  }

  p {
    font-size: 0.95rem;
  }
`;

export const DialogTitle = styled(Dialog.Title)`
  margin-bottom: 25px;
`;

export const ViewInfo = styled.div`
  margin: 10px 0;

  div:nth-child(odd) {
    background-color: #489fb6;
  }

  div:nth-child(even) {
    background-color: #1d4651;
  }
`;

export const ViewInfoDinamic = styled(ViewInfo).withConfig({
  shouldForwardProp: (prop) => prop !== "autoPermission",
})`
  div:last-child {
    background-color: ${(props) =>
      props.autoPermission ? "#9A3030" : "#009405"};
  }
`;

export const ModalActions = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: start;
  width: 100%;
  margin-top: 35px;

  button {
    width: 100px;
    padding: 10px 5px;
    cursor: pointer;
    background-color: #ff4848;
    transition: 0.2s;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-weight: regular;
    font-size: 1.05rem;

    &:hover {
      background-color: #fd0000;
    }
  }
`;
