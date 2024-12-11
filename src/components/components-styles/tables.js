import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";

export const DialogOverlay = styled(Dialog.Overlay)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.479);
  position: fixed;
  inset: 0;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 99;
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
    margin-bottom:35px;
  }
`;

export const DialogTrigger = styled(Dialog.Trigger)`
  width: 170px;
  font-size: 1.5rem;
  height: 60px;
  background-color: #47afca;
  color: #ffff;
  outline: none;
  border: none;
  border-radius: 5px;
  margin: 20px 0 50px 0;
  cursor: pointer;
  transition: 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family: "Itim";

  &:hover {
    background-color: #2e6b7b;
  }
  span {
    font-size: 2rem;
    transition: 0.2s;
    margin-bottom: 5px;
  }
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
  margin-top: 35px;

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

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export const TableBox = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family:'inter';

  table,
  th,
  td {
    text-align: start;
    padding: 5px;
  }

  thead tr {
    background-color: #343434;
    font-size: 1.2rem;
    color: #ffffff;
  }

  tr {
    width: 100%;
  }

  tbody {
    border-top: 15px solid #0d2025;
  }

  tbody tr {
    border-top: 10px solid #0d2025;
    color: #ffffff;
  }

  tbody tr:nth-child(odd) {
    background-color: #286373;
  }

  tbody tr:nth-child(even) {
    background-color: #1d4651;
  }

  td {
    padding: 15px;
    position: relative;
  }
`;

export const Actions = styled.td`
  display: flex;
  align-items: stretch;
  justify-content: start;
  gap: 20px;

  img {
    width: 30px;
    height: 30px;
    transition: 0.1s;

    &:hover {
      transform: scale(1.1);
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

export const AlreadyCreated = styled.p`
  margin-top: 20px;
  font-size: 0.95rem;
  color: #ff5858;
`;
