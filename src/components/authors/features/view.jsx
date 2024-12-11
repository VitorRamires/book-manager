/* eslint-disable react/prop-types */
import * as Dialog from "@radix-ui/react-dialog";
import {
  DialogOverlay,
  ModalBox,
  ItemModal,
  ModalActions,
  DialogTrigger,
  DialogTitle,
  ViewInfoDinamic,
} from "../../components-styles/preview";
import previewLogo from "../../../img/preview.svg";
import { useState, useContext } from "react";
import { CreateGlobalAuthors } from "../../../context/globalContextAuthors";

export function Preview({ authorIdPreview }) {
  const [getIdPreview, setGetIdPreview] = useState(authorIdPreview);
  const { existedAuthor } = useContext(CreateGlobalAuthors);

  const captureOnLocalStorage = JSON.parse(localStorage.getItem("authors"));
  let filterIdAuthorPreview = captureOnLocalStorage.filter(
    (item) => item.authorId === getIdPreview
  )[0];

  function getIdAuthorPreviewHandle() {
    setGetIdPreview(authorIdPreview);
  }

  return (
    <Dialog.Root>
      <DialogTrigger>
        <img
          src={previewLogo}
          alt=""
          title="Preview"
          onClick={getIdAuthorPreviewHandle}
        />
      </DialogTrigger>

      <Dialog.Portal>
        <DialogOverlay>
          <ModalBox>
            <DialogTitle>Visualizando</DialogTitle>
            <Dialog.Description></Dialog.Description>

            <ViewInfoDinamic autoPermission={existedAuthor}>
              <ItemModal>
                <h3>Nome do autor:</h3>
                <p>{filterIdAuthorPreview.author}</p>
              </ItemModal>
              <ItemModal>
                <h3>Email:</h3>
                <p>{filterIdAuthorPreview.email}</p>
              </ItemModal>
              <ItemModal>
                <h3>Criado em:</h3>
                <p>{filterIdAuthorPreview.date}</p>
              </ItemModal>
              <ItemModal>
                <h3>Status de exclusão</h3>
                <p>{existedAuthor ? "Não permitido" : "Permitido"}</p>
              </ItemModal>
            </ViewInfoDinamic>

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
