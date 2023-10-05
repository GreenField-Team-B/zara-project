import { Categories } from "../model/index";

// The list categories.
export const getAll = async (req, res) => {
  try {
    const response = await Categories.findAll();
    res.send(response)
  } catch (err) {
    res.status(500).send(err)
  }
}

// get one category by its id.
export const getOne = async (req, res) => {
    try {
        const response = await Categories.findOne({where: {id: req.params.categoryId}})
        res.send(response)
    } catch (err) {
        res.status(500).send(err)
    }
}

// add category.
export const addCategory = async (req, res) => {
    try {
        const response = await Categories.create(req.body)
        res.send(response)
    } catch (err) {
        res.status(500).send(err)
    }
}

// update category by id.
export const updateCategory = async (req, res) => {
    try {
        const response = await Categories.update(req.body, {where: {id: req.params.categoryId}})
        res.send(response)
    } catch (err) {
        res.status(500).send(err)
    }
}

// delete category by id.
export const deleteCategory = async (req, res) => {
    try {
        await Categories.destroy({where: {id: req.params.categoryId}})
        res.send(`category n°${req.params.categoryId} has been deleted successfully`)
    } catch (err) {
        res.status(500).send(err)
    }
}


