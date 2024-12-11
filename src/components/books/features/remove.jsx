/* eslint-disable react/prop-types */
import * as Dialog from "@radix-ui/react-dialog";
import {
  DialogOverlay,
  ModalBox,
  ModalActions,
  DialogTrigger,
  DialogDescription
} from "../../components-styles/remove";
import removeLogo from "../../../img/trash.svg";
import { useState, useContext } from "react";
import { CreateGlobalContext } from "../../../context/globalContext";

export function Remove({ bookIdRemove }) {
  const { setBooks } = useContext(CreateGlobalContext);

  const [getIdAuthorRemove] = useState(bookIdRemove);
  const authorsSavedOnLocal = JSON.parse(localStorage.getItem("books"));

  let actualItem = authorsSavedOnLocal.filter(
    (item) => item.id === getIdAuthorRemove
  )[0];
  let removedsArray = authorsSavedOnLocal.filter(
    (item) => item.id !== actualItem.id
  );

  function filterArray() {
    localStorage.setItem("books", JSON.stringify(removedsArray));
    setBooks(removedsArray);
  }

  return (
    <Dialog.Root>
      <DialogTrigger>
        <img src={removeLogo} alt="" title="Remover" />
      </DialogTrigger>
      <Dialog.Portal>
        <DialogOverlay>
          <ModalBox>
            <Dialog.Title>Deseja remover o livro?</Dialog.Title>
            <DialogDescription>Está Operação não poderá ser desfeita</DialogDescription>
            <ModalActions>
              <Dialog.Close asChild>
                <button>Não</button>
              </Dialog.Close>
              <Dialog.Close asChild>
                <button onClick={filterArray}>Sim</button>
              </Dialog.Close>
            </ModalActions>
          </ModalBox>
        </DialogOverlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
