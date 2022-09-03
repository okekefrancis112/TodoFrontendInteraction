import getContract from "./utils/getContract.js";

async function getTodoList() {
  const contract = getContract();
  try {
    const response = await contract.getTodos();
    const formatted = response.map((item) => {
      return {
        name: item[0],
        description: item[1],
        status: item[2],
      };
    });
    return formatted;
  } catch (error) {
    console.log("error", error);
  }
}


const updateTodoUI = async () => {
  const data = await getTodoList();
  console.log(data, "data");
  data.forEach((item) => {
    todos.innerHTML += `   
    <li class='my-2'>${item.description}</li>`;
  });
};

updateTodoUI();

// add new list

const createNewTodo = async (title, description) => {
  
  const contract = getContract(true);

  console.log(contract);

  try{

    console.log(title,  description);

    const tnx = await contract.createTodo(title, description);

    const res = await tnx.wait();

    console.log("created...", res);

    todos.innerHTML = "";
    
    await updateTodoUI();

  } catch(error) {
    console.log("error", error);
  }
  finally {
    console.log("done");
  }
}

todoBtn.addEventListener('click', async (e) => {
  e.preventDefault();

  const todoTitle = title.value;
  const todoDescription = description.value;

  // console.log(todoTitle,  todoDescription); 

  await createNewTodo(todoTitle, todoDescription);
});

