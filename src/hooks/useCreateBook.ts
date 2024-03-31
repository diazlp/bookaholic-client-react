import { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../store'
import { CreateBookArgs, createBook } from '../store/slices/booksSlice'

const initialCreateBookPayload: CreateBookArgs = {
  title: '',
  description: '',
  image_url: '',
  release_year: '',
  price: '',
  total_page: '',
  category_id: 1
}

interface useCreateCategoryResult {
  addBookVisible: boolean
  isValidYear: boolean
  createBookPayload: CreateBookArgs
  setAddBookVisible: React.Dispatch<React.SetStateAction<boolean>>
  handleCancelAddBook: () => void
  handleConfirmAddBook: () => void
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void
}

const useCreateBook = (): useCreateCategoryResult => {
  const dispatch: AppDispatch = useDispatch()
  const [addBookVisible, setAddBookVisible] = useState<boolean>(false)
  const [isValidYear, setIsValidYear] = useState<boolean>(true)
  const [createBookPayload, setCreateBookPayload] = useState<CreateBookArgs>(
    initialCreateBookPayload
  )

  const handleCancelAddBook = () => {
    setAddBookVisible(false)
    setCreateBookPayload(initialCreateBookPayload)
    setIsValidYear(true)
  }

  const handleConfirmAddBook = () => {
    if (Object.values(createBookPayload).some((value) => !value)) {
      return
    }

    if (
      Number(createBookPayload.release_year) < 1980 ||
      Number(createBookPayload.release_year) > 2021
    ) {
      setIsValidYear(false)
      return
    }

    dispatch(
      createBook({
        ...createBookPayload,
        price: 'IDR ' + createBookPayload.price
      })
    )
    setAddBookVisible(false)
    setCreateBookPayload(initialCreateBookPayload)
    setIsValidYear(true)
  }

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setCreateBookPayload((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }))
  }

  return {
    addBookVisible,
    isValidYear,
    createBookPayload,
    setAddBookVisible,
    handleCancelAddBook,
    handleConfirmAddBook,
    handleInputChange
  }
}

export default useCreateBook
