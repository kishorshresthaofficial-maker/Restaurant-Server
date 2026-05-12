import Category from "../model/category.js";

export const createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    const checkName = await Category.findOne({ name });

    if (checkName) {
      return res.status(409).json({
        message: "Category name already exists",
      });
    }

    const createdCategory = await Category.create({ name });
    res.status(201).json(createdCategory);

  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Error creating category" });
  }
};

export const getAllCategory = async(req,res) => {
  try {
    const category = await Category.find()
    res.json(category)
  }
  catch(error)
  {
    console.log(error)
  }
}

export const getCategoryById = async(req, res) => {
  try{
    const categoryItems = await Category.findById(req.params.id)
    res.json(categoryItems)
  }
  catch(error)
  {
    console.log(error)
  }   
}


export const deleteCategory = async (req, res) => {
  try {
    const delCategory = await Category.findByIdAndDelete(req.params.id);

    if (!delCategory) {
      return res.status(404).json({ message: "Category item not found" });
    }

    res.json({ message: "Deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete." });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    res.status(200).json(updatedCategory);
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update category." });
  }
}