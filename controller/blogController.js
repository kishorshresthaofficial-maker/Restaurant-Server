import Blog from '../model/blogs.js'

export const createBlog = async (req, res) => {
    try {

        console.log(req.file,"file")
        const createBlog = await Blog.create({
            ...req.body,
            // image:req.file.path,
            image: req.file ? req.file.path : null,
            status: "Active"
        })
    res.status(201).json(createBlog);
    }
    catch(error)
    {
        console.log(error)
        res.status(500).json({ message: "Error creating Blog"})
    }
}


export const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs)
    }
    catch(error) {
        console.log(error)
        // res.status(500)({message: "Error Fetching Blogs"})
        res.status(500).json({ message: "Error Fetching Blogs" });
    }
}

export const getBlogsById = async (req, res) => {
    try {
        const blogItems = await Blog.findById(req.params.id)
        res.json(blogItems)
    }
    catch(error)
    {
        console.log(error)
    }
}

export const deleteBlogs = async (req, res) => {
    try{
        const delBlogs = await Blog.findByIdAndDelete(req.params.id);
       
        if(!delBlogs)
        {
            return res.json({ message: "Blog not found"});
        }
            res.json({ message: "Blog deleted successfully."})
    }
    catch (error)
    {
        console.error(error);
        res.json({ message: "Failed to delete blogs"});
    }
}

export const updateBlogs = async (req, res) => {
  try {
    const existingBlog = await Blog.findById(req.params.id);

    if (!existingBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    const updatedData = {
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      image: req.file ? req.file.path : existingBlog.image
    };

    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true, runValidators: true }
    );

    res.json({
      message: "Blog updated successfully",
      data: updatedBlog
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update blog" });
  }
};