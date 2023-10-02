# TODO GPT

A todo list powered by ChatGPT

```
 => what are the current todos?
The current todo items are:

1. Do the shopping
2. Feed the dog
3. Pick up the books from the library
 => please remove the reminder to feed the dog
I have removed "feed the dog" from your todo list. Now your list is:

1. Do the shopping
2. Pick up the books from the library
 => remove all of them
I have removed all items from your todo list. Now you have no tasks pending.
 => what todos do I have?
You currently have no todos on your list.
 => add a reminder to eat a sandwich
I have added "eat a sandwich" to your todo list. Now your list is:

1. Eat a sandwich
 => add a todo item to pick up the children, and another one to feed the dog
I have added "pick up the children" and "feed the dog" to your todo list. Now your list is:

1. Eat a sandwich
2. Pick up the children
3. Feed the dog
 => please remove the first todo
I have removed the first item from your todo list. Now your list is:

1. Pick up the children
2. Feed the dog
```

## Usage

create a `.env` file with your Azure OpenAI API key and endpoint

```
OPEN_AI_ENDPOINT=https://XXX.openai.azure.com/openai/deployments/XXX/chat/completions?api-version=2023-07-01-preview
OPEN_AI_KEY=XXX
```

Install the packages:

```bash
npm install
```

Run:

```bash
npm start
```

## License

MIT