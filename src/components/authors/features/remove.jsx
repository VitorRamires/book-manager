/* eslint-disable react/prop-types */
import * as Dialog from "@radix-ui/react-dialog";
import {
  DialogOverlay,
  ModalBox,
  ModalActions,
  DialogTrigger,
  Span,
} from "../../components-styles/remove";
import removeLogo from "../../../img/trash.svg";
import { CreateGlobalAuthors } from "../../../context/globalContextAuthors";
import { useContext, useEffect, useState } from "react";

export function Remove({ authorIdRemove }) {
  const [getAuthorIdRemove] = useState(authorIdRemove);

  const { setAuthors, setExistedAuthor, existedAuthor } =
    useContext(CreateGlobalAuthors);

  const getBooks = JSON.parse(localStorage.getItem("books"));
  const arraySavedOnLocal = JSON.parse(localStorage.getItem("authors"));

  let actualItem = arraySavedOnLocal.filter(
    (author) => author.authorId === getAuthorIdRemove
  )[0];

  let removeArray = arraySavedOnLocal.filter(
    (author) => author.authorId != actualItem.authorId
  );

  useEffect(() => {
    getBooks.find((book) => book.authorId == actualItem.authorId)
      ? setExistedAuthor(true)
      : setExistedAuthor(false);
  }, [actualItem.authorId, existedAuthor, getBooks, setExistedAuthor]);

  function filterArray() {
    if (!existedAuthor) {
      setAuthors(removeArray);
      localStorage.setItem("authors", JSON.stringify(removeArray));
    }
  }

  return (
    <>
      <Dialog.Root>
        <DialogTrigger>
          <img src={removeLogo} alt="" title="Remover" />
        </DialogTrigger>
        <Dialog.Portal>
          <DialogOverlay>
            <ModalBox>
              <Dialog.Title>
                {existedAuthor ? (
                  <Span>Delete o livro referente ao autor</Span>
                ) : (
                  <Span>Deseja remover o autor?</Span>
                )}
              </Dialog.Title>
              <Dialog.Description></Dialog.Description>
              <ModalActions>
                <Dialog.Close asChild>
                  {existedAuthor ? (
                    <button>Fechar</button>
                  ) : (
                    <button>Não</button>
                  )}
                </Dialog.Close>
                <Dialog.Close asChild>
                  {existedAuthor ? (
                    ""
                  ) : (
                    <button onClick={filterArray}>Sim</button>
                  )}
                </Dialog.Close>
              </ModalActions>
            </ModalBox>
          </DialogOverlay>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
