import { Router } from 'express'
import { getAll, getOne, addCategory, updateCategory, deleteCategory } from '../controller/categories.controller'
const router = Router()

router.get('/getAll', getAll)
router.post('/add', addCategory)
router.get('/:categoryId', getOne)
router.put('/:categoryId', updateCategory)
router.delete('/:categoryId', deleteCategory)

export default router