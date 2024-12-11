/* eslint-disable react/prop-types */
import * as Dialog from "@radix-ui/react-dialog";
import {
  DialogOverlay,
  ModalBox,
  ItemModal,
  ModalActions,
  DialogTrigger,
  SelectAuthors,
} from "../../components-styles/edit";
import editLogo from "../../../img/edit.svg";
import { useState, useContext, useEffect } from "react";
import { CreateGlobalContext } from "../../../context/globalContext";
import { CreateGlobalAuthors } from "../../../context/globalContextAuthors";

export function Editar({ bookId }) {
  const [getId, setGetId] = useState(bookId);
  const [formValue, setFormValues] = useState({});
  const { authors } = useContext(CreateGlobalAuthors);

  const { setBooks, books } = useContext(CreateGlobalContext);
  const captureOnLocalStorage = JSON.parse(localStorage.getItem("books"));
  let selectedBook = captureOnLocalStorage.filter(
    (item) => item.id === getId
  )[0];

  function getIdHandle() {
    setGetId(bookId);
  }

  useEffect(() => {
    if (selectedBook) {
      setFormValues(selectedBook);
    }
  }, []);

  function handleInputChange({ target }) {
    const { id, value } = target;
    setFormValues({ ...formValue, [id]: value });
  }

  function handleSubmitEdit(event) {
    event.preventDefault();
    const saveEditBooks = books.map((item) => {
      if (item.id === selectedBook.id) {
        return { ...item, ...formValue };
      }
      return item;
    });
    setBooks(saveEditBooks);
    localStorage.setItem("books", JSON.stringify(saveEditBooks));
  }

  return (
    <>
      <Dialog.Root>
        <DialogTrigger>
          <img src={editLogo} alt="" title="Editar" onClick={getIdHandle} />
        </DialogTrigger>
        <Dialog.Portal>
          <DialogOverlay>
            <ModalBox>
              <Dialog.Title>Edite seu livro</Dialog.Title>
              <Dialog.Description></Dialog.Description>
              <form onSubmit={handleSubmitEdit}>
                <ItemModal>
                  <label htmlFor="name">Nome do livro</label>
                  <input
                    id="name"
                    onChange={handleInputChange}
                    value={formValue.name || ""}
                  />
                </ItemModal>
                <ItemModal>
                  <label htmlFor="pages">Páginas</label>
                  <input
                    id="pages"
                    type="number"
                    onChange={handleInputChange}
                    value={formValue.pages || ""}
                  />
                </ItemModal>
                <ItemModal>
                  <label htmlFor="authorId">Autor</label>
                  <SelectAuthors
                    name="author"
                    id="authorId"
                    onChange={handleInputChange}
                    defaultValue={"selecione o autor"}
                  >
                    {authors.map((author) => {
                      return (
                        <option key={author.author} value={author.authorId}>
                          {author.author}
                        </option>
                      );
                    })}
                  </SelectAuthors>
                </ItemModal>
                <ModalActions>
                  <button onClick={handleSubmitEdit}>Editar</button>
                  <Dialog.Close asChild>
                    <button>Cancelar</button>
                  </Dialog.Close>
                </ModalActions>
              </form>
            </ModalBox>
          </DialogOverlay>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
