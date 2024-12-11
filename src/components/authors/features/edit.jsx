/* eslint-disable react/prop-types */
import * as Dialog from "@radix-ui/react-dialog";
import {
  DialogOverlay,
  ModalBox,
  ItemModal,
  ModalActions,
  DialogTrigger,
} from "../../components-styles/edit";
import editLogo from "../../../img/edit.svg";
import { useState, useContext, useEffect } from "react";
import { CreateGlobalAuthors } from "../../../context/globalContextAuthors";

export function Edit({ authorIdEdit }) {
  const [getId, setGetId] = useState(authorIdEdit);
  const [formValue, setFormValues] = useState({});

  const { setAuthors, authors } = useContext(CreateGlobalAuthors);
  const captureOnLocalStorage = JSON.parse(localStorage.getItem("authors"));
  let selectedAuthor = captureOnLocalStorage.filter(
    (item) => item.authorId === getId
  )[0];

  function getIdHandle() {
    setGetId(authorIdEdit);
  }

  useEffect(() => {
    if (selectedAuthor) {
      setFormValues(selectedAuthor);
    }
  }, []);

  function handleInputChange({ target }) {
    const { id, value } = target;
    setFormValues({ ...formValue, [id]: value });
  }

  function handleSubmitEdit(event) {
    event.preventDefault();

    const saveEditAuthors = authors.map((item) => {
      if (item.authorId === selectedAuthor.authorId) {
        return { ...item, ...formValue };
      }
      return item;
    });

    setAuthors(saveEditAuthors);
    localStorage.setItem("authors", JSON.stringify(saveEditAuthors));
  }

  return (
    <Dialog.Root>
      <DialogTrigger>
        <img src={editLogo} alt="" title="Editar" onClick={getIdHandle} />
      </DialogTrigger>

      <Dialog.Portal>
        <DialogOverlay>
          <ModalBox>
            <Dialog.Title>Edite o autor</Dialog.Title>
            <Dialog.Description></Dialog.Description>
            <form onSubmit={handleSubmitEdit}>
              <ItemModal>
                <label htmlFor="author">Nome do autor</label>
                <input
                  id="author"
                  onChange={handleInputChange}
                  value={formValue.author || ""}
                />
              </ItemModal>
              <ItemModal>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  onChange={handleInputChange}
                  value={formValue.email || ""}
                />
              </ItemModal>
              <ModalActions>
                <button>Editar</button>
                <Dialog.Close asChild>
                  <button>Cancelar</button>
                </Dialog.Close>
              </ModalActions>
            </form>
          </ModalBox>
        </DialogOverlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
