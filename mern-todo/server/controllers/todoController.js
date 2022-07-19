const Todo = require("../models/todoModel");
const path = require("path");
const fs = require("fs");

const addTodo = async (req, res) => {
  const { title, description } = req.body;
  const { image } = req.files;
  try {
    await image.mv(
      path.resolve(__dirname, "../public/images", title + "-" + image.name),
      async (error) => {
        if (!error) {
          const newTodo = await Todo.create({
            title,
            description,
            image: title + "-" + image.name,
          });
          if (newTodo) {
            const todos = await Todo.find();
            const todosData= await loadDataWithImages(todos)
            res.status(200).send({ msg: "Fetched successfully", success: true, data: todosData });
            return;
          }
          res.status(200).send({ msg: "Could not create", success: false });
        }
      }
    );
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteTodo = async (req, res) => {
  const { _id } = req.body;
  try {
    console.log('DELETE',_id);

    Todo.findById(_id, (error, doc) => {
      if (!error) {
        const oldImage = path.resolve(__dirname, "../public/images", doc.image);
        fs.unlinkSync(oldImage);

        Todo.findByIdAndDelete(_id,async (error, doc) => {
            if (!error) {

                const todos=await Todo.find()
                const todosData=await loadDataWithImages(todos)
            
                res.status(200).send({ msg: "Deleted", success: true, data: todosData });
            } else {
              res.status(400).send({ msg: "Failed", success: false });
            }
          })
      } 
      else {
        res.status(400).send({ msg: "Failed to delete", success: false });
      }
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};


const updateTodo = async (req, res) => {
  const { title, _id } = req.body;
  const { image } = req.files;
  try {
    console.log(title, _id);
    image.mv(
      path.resolve(__dirname, "../public/images", title + "-" + image.name),
      (error) => {
        if (!error) {
          Todo.findById(_id, (error, doc) => {
            if (!error) {
              const oldImage = path.resolve(
                __dirname,
                "../public/images",
                doc.image
              );
              fs.unlinkSync(oldImage);

              Todo.findByIdAndUpdate(
                _id,
                { ...req.body, image: title + "-" + image.name },
                async (error, doc) => {
                  if (!error) {
                    const todos = await Todo.find();
                    res
                      .status(200)
                      .send({ msg: "Updated", success: true, data: todos });
                  } else {
                    res.status(400).send({ msg: "Failed", success: false });
                  }
                }
              );
            }
          });
        } else {
          res.status(400).send({ msg: "Failed", success: false });
        }
      }
    );
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const base_url = "http://localhost:5000/images/";

const getTodos = async (req, res) => {
  console.log("GET TODODS");
  try {
    const todos = await Todo.find();
    const todosData=await loadDataWithImages(todos)

    res.status(200).send({ data: todosData });
  } catch (error) {
    res.status(400).send(error.message);
  }
};


async function loadDataWithImages(todos){

    const todosData = [];
    const directoryPath = "public/images";
    const files = fs.readdirSync(directoryPath);

    await todos.map(async (p) => {
      await files.map((file) => {
        if (file == p.image) {
          todosData.push({
            title: p.title,
            image: base_url + file,
            _id: p._id,
            description: p.description,
          });
        }
      });
    });

    return todosData;
}

module.exports = {
  addTodo,
  deleteTodo,
  updateTodo,
  getTodos,
};
