import { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../store'
import {
  CreateBookArgs,
  deleteBook,
  editBook
} from '../store/slices/booksSlice'

const initialEditBookPayload: CreateBookArgs = {
  title: '',
  description: '',
  image_url: '',
  release_year: '',
  price: '',
  total_page: '',
  category_id: 1
}

interface useBookActionResult {
  deleteConfirmationVisible: boolean
  editBookMode: boolean
  editBookPayload: CreateBookArgs
  isValidYear: boolean
  toggleDeleteConfirmation: () => void
  handleEditBookMode: (bookArgs: CreateBookArgs) => void
  handleConfirmDeleteBook: (id: number) => void
  handleCancelEditBook: () => void
  handleConfirmEditBook: (id: number) => void
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void
}

const useBookAction = (): useBookActionResult => {
  const dispatch: AppDispatch = useDispatch()
  const [deleteConfirmationVisible, setDeleteConfirmationVisible] =
    useState<boolean>(false)
  const [editBookMode, setEditBookMode] = useState<boolean>(false)
  const [editBookPayload, setEditBookPayload] = useState<CreateBookArgs>(
    initialEditBookPayload
  )
  const [isValidYear, setIsValidYear] = useState<boolean>(true)

  const toggleDeleteConfirmation = () => {
    setDeleteConfirmationVisible(!deleteConfirmationVisible)
  }

  const handleEditBookMode = (bookArgs: CreateBookArgs) => {
    setEditBookMode(true)
    setDeleteConfirmationVisible(false)
    setEditBookPayload({
      ...bookArgs,
      price: bookArgs.price.split(' ')[1]
    })
  }

  const handleConfirmDeleteBook = (id: number) => {
    dispatch(deleteBook(id))
    setDeleteConfirmationVisible(false)
  }

  const handleCancelEditBook = () => {
    setEditBookMode(false)
    setEditBookPayload(initialEditBookPayload)
    setIsValidYear(true)
  }

  const handleConfirmEditBook = (id: number) => {
    if (Object.values(editBookPayload).some((value) => !value)) {
      return
    }

    if (
      Number(editBookPayload.release_year) < 1980 ||
      Number(editBookPayload.release_year) > 2021
    ) {
      setIsValidYear(false)
      return
    }

    dispatch(
      editBook({
        bookId: id,
        payload: {
          ...editBookPayload,
          price: 'IDR ' + editBookPayload.price
        }
      })
    )
    setEditBookMode(false)
    setEditBookPayload(initialEditBookPayload)
    setIsValidYear(true)
  }

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setEditBookPayload((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }))
  }

  return {
    deleteConfirmationVisible,
    editBookMode,
    editBookPayload,
    isValidYear,
    toggleDeleteConfirmation,
    handleEditBookMode,
    handleConfirmDeleteBook,
    handleCancelEditBook,
    handleConfirmEditBook,
    handleInputChange
  }
}

export default useBookAction
