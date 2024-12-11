/* eslint-disable react/prop-types */
import * as Dialog from "@radix-ui/react-dialog";
import {
  DialogOverlay,
  ModalBox,
  ItemModal,
  ModalActions,
  DialogTrigger,
  DialogTitle,
  ViewInfo,
} from "../../components-styles/preview";
import previewLogo from "../../../img/preview.svg";
import { useState, useContext } from "react";
import { CreateGlobalAuthors } from "../../../context/globalContextAuthors";

export function Preview({ bookIdPreview }) {
  const [getIdPreview, setGetIdPreview] = useState(bookIdPreview);
  const captureOnLocalStorage = JSON.parse(localStorage.getItem("books"));
  let filterIdPreview = captureOnLocalStorage.filter(
    (item) => item.id === getIdPreview
  )[0];
  const { authors } = useContext(CreateGlobalAuthors);

  function getIdPreviewHandle() {
    setGetIdPreview(bookIdPreview);
  }

  return (
    <Dialog.Root>
      <DialogTrigger>
        <img
          src={previewLogo}
          alt=""
          title="Preview"
          onClick={getIdPreviewHandle}
        />
      </DialogTrigger>

      <Dialog.Portal>
        <DialogOverlay>
          <ModalBox>
            <DialogTitle>Visualizando</DialogTitle>
            <Dialog.Description></Dialog.Description>

            <ViewInfo>
              <ItemModal>
                <h3>Nome do livro:</h3>
                <p>{filterIdPreview.name}</p>
              </ItemModal>
              <ItemModal>
                <h3>Autor do livro:</h3>
                <p>
                  {
                    authors.find(
                      (item) => item.authorId == filterIdPreview.authorId
                    )?.author
                  }
                </p>
              </ItemModal>
              <ItemModal>
                <h3>Páginas:</h3>
                <p>{filterIdPreview.pages}</p>
              </ItemModal>
              <ItemModal>
                  <h3>Criado em:</h3>
                  <p>{filterIdPreview.date}</p>
              </ItemModal>
            </ViewInfo>
            
            <ModalActions>
              <Dialog.Close asChild>
                <button>Fechar</button>
              </Dialog.Close>
            </ModalActions>
          </ModalBox>
        </DialogOverlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
