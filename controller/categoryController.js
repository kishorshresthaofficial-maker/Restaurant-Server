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
