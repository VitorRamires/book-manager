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

   h2{
    font-family: "Itim";
  }
`;


export const DialogTrigger = styled(Dialog.Trigger)`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 5px;
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
  margin: 40px 0;

  input {
    width: 90%;
    padding: 15px 9px;
    border: 1px solid transparent;
    outline: none;
    border-radius: 5px;
    margin-top: 5px;
    background-color: #34798a;
    font-family: "Inter";
    color: #e8e8e8;

    &:focus {
      border-color: #59d6f8;
      background-color: #47afca;
      box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
      color: #282828;
    }
  }
`;
export const ModalActions = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: start;

  button {
    width: 100px;
    padding: 10px 5px;
    cursor: pointer;
    background-color: #47afca;
    outline: none;
    border: none;
    border-radius: 5px;
    color: #ffffff;
    font-weight: regular;
    transition: 0.2s;
    font-size: 1.05rem;

    &:hover {
      background-color: #0abdec;
    }
  }

  button:last-child {
    background-color: #34798a;
    transition: 0.1s;
    border: 1px solid #2c6d7d;

    &:hover {
      background-color: #2c6d7d;
    }
  }
`;


export const SelectAuthors = styled.select`
  width: 90%;
  padding: 15px 9px;
  outline: none;
  border-radius: 5px;
  margin-top: 5px;
  background-color: #34798a;
  font-family: "Inter", sans-serif;
  border: 1px solid #0000001c;
  color: #e8e8e8;

  &:focus {
    border-color: #59d6f8;
    background-color: #47afca;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    color: #282828;
  }

`;