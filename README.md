# GetHub

This is a technical test involving front-end and back-end development. This test requires you to consume the GitHub APIs, specifically the users and repositories endpoints, and create an application that allows users to view and interact with data from GitHub.

## Technologies Used

- [React](https://react.dev/): Front-end library for building user interfaces.
- [Node.js](https://nodejs.org/en): JavaScript runtime environment for server-side development.
- [Express.js](https://expressjs.com/): Web application framework for 
- [Docker](https://www.docker.com/): Containerization platform for packaging applications into containers.

## Getting Started

This project is developed  to run the front-end and back-end with Docker, with easy-to-follow configuration steps, anyone should be able to run it locally. Follow the steps below to get the project up and running on your local machine:

Prerequisites


- [Docker](https://www.docker.com/) installed on your machine.
- [Yarn](https://yarnpkg.com/) (Node Package Manager) installed on your machine.

To use the GitHub API, you will need to create a personal access token. To create a personal access token (classic), follow these steps:
- [Creating a personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-personal-access-token-classic)

After creating the access token, save it to be used in the next steps on the project environments.

### Installation

1 - Clone the repository to your local machine:

```clipboard
git@github.com:kennedybm/test-shaw-and-partners.git
```
2 - To install the project dependencies, open a terminal for both the server and client, and run this command in each:
```clipboard
yarn install
```
3 - Navigate to the **`server`** folder and create a new **`.env`** file in the **`server`** root. You should see an **`.env.example`** file in the same directory. Copy and paste the contents of **`.env.example`** into **`.env`**, and replace the value of the ACCESS_TOKEN variable with the personal access token you recently created in the previous steps.
Your **`.env`** should look like this:

![shaw-and-partners-env](https://user-images.githubusercontent.com/91641613/235084525-590e4995-e202-4187-ae62-bd8b534bd907.png)



4 - Open the project terminal and run:

```clipboard
docker compose up
```

5 - After completing all the necessary setup, you should now be able to access the API at:
```clipboard
http://localhost:5500/api/users
```

and the APP at:

```clipboard
http://localhost:3000/
```
When the 'Running on port 5500' message appears in the terminal, simply refresh the APP page.


## License

[MIT](https://github.com/kennedybm/test-shaw-and-partners/blob/main/LICENSE)
