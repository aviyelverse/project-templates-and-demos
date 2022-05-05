# Chatwoot with NextJS

## Overview
This is a very simple blog written with [Next.js](https://nextjs.org/), to demonstrate how to use [Chatwoot](https://chatwoot.com) with Next.js.

Chatwoot is an open source customer engagement platform that allows you to create a chatbot for your business.

![Here's how the app looks](https://us-east-1.tixte.net/uploads/img.dhravya.dev/l2tch3f9s0a.png)

## Run

Clone the repository and navigate to the director:
```bash
git clone https://github.com/aviyelverse/project-templates-and-demos.git
cd .\Chatwoot\chatwoot-with-nextjs\
```

Now, run the following command to install all the dependencies:

```bash
npm install
# or
yarn install
```

You also need to set up a Chatwoot instance. It's really easy

- Create an account at [Chatwoot](https://chatwoot.com) and login
- Click on the "New inbox" button
- Select the "website" channel
- Configure the website and domain name for your app, along with any other information. After that, add your agents to the inbox.
- Copy the code (everything inside the `<script>` tag) and paste it in [/components/ChatwootWidget.jsx]

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. Chatwoot will be up and running with your beautiful app!

Visit this link for a complete, step by step tutorial of this project: [Written by Pramit Marattha on Aviyel](https://aviyel.com/post/2697/integrate-chatwoot-inside-the-nextjs-project)  
