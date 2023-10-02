import repl from "repl";
import query from "./query.js";
import chalk from "chalk";
import { addLine, getLines, removeLine } from "./todos.js";

const messages = [];

function addMessage(content) {
  messages.push({
    role: "user",
    content,
  });
}

const functions = {
  add_todo: (parameters) => {
    console.log(chalk.dim(`  add_todo("${parameters.description}")`))
    addLine(parameters.description);
    return `"${parameters.description}" added to the list`;
  },
  remove_todo:  (parameters) => {
    console.log(chalk.dim(`  remove_todo(${parameters.index})`))    
    removeLine(parameters.index);
    return `item removed from the list`;
  }
};

function evaluate(input, _, __, callback) {
  const systemMessage = {
    role: "system",
    content: `You are an AI assistant that helps people maintain a todo list. You can add and remove items on the list with the functions.
These are the current todo items
---
${getLines()}
`,
  };

  addMessage(input);
  const runQuest = () =>
    query([systemMessage, ...messages]).then(async (response) => {
      if (response.choices[0].message.function_call) {
        const functionMessage = response.choices[0].message;
        const parameters = JSON.parse(functionMessage.function_call.arguments);
        const weatherResponse = await functions[
          functionMessage.function_call.name
        ](parameters);
        functionMessage.content = JSON.stringify(weatherResponse) || "";
        messages.push(functionMessage);
        runQuest();
        return;
      }

      console.log(chalk.green(response.choices[0].message.content));
      messages.push(response.choices[0].message);
      callback();
    });
  runQuest();
}

repl.start({ prompt: " => ", eval: evaluate });
