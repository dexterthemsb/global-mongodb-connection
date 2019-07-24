# 🍕 Global MongoDB Connection

A single MongoDB object which can be used in controllers' or routes' files to access collections and manage the database instead of importing every single collection separately.

## 🚀 Installation & Dependencies

Use the NPM to install the dependencies for the API before running the server.

```bash
npm i
```

## 💻 Setup

Please set the environment variables before running the server. Include a ```.env``` file in the ROOT directory and include the following variables in the file:

1. ```DB_HOST``` to provide a link for the hosted database.
2. ```DB_NAME``` to provide the database name in your Atlas cluster or your database host.
3. ```SECRET_SESSION``` to provide a secret key for your sessions.

## 📣 Usage

After setting up the whole project, check the ```GET @ Home``` route. Here you can create a variable for the collection you want to work on as follows:

```bash
router.get('/', async (req, res) => {
  // const Collection = await GlobalConnection.db.collection('collections')
})
```

In the above code we are importing a collection named ```collections``` and assigning it to the variable Collection. Now you can use your Mongo queries with this varibale. For eg. for a user collection:

```bash
router.get('/', async (req, res) => {
  const User = await GlobalConnection.db.collection('users')
})

User.findOne()
```

## ✌️ Contributions

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. Always looking ahead for suggestions to improve. Cheers!

## 📜 License

[MIT](https://choosealicense.com/licenses/mit/)

## 🔨 Project Status

Up and running. Always adding new features.