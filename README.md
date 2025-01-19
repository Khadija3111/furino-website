This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
#   f u r n i t u r e - e c o m - w e b 
 

how i integrated the api into the project 
first i created a sanity project and then passed on the given command in my terminal to install sanity into the existing project 
then i craeted a token in sanity and added the obtained token url in .env file
 ![Screenshot (1)](https://github.com/user-attachments/assets/3999f557-6351-4283-bef1-6d28769f95ca)

i created scripts/importData.js file in root directory 
and added the provided code into it 
![Screenshot (2)](https://github.com/user-attachments/assets/7ea99ff1-75da-460b-93bd-d10ce6fb25cf)

i created a products.ts  file inside and added the provided schemas 
added the products in index.js file

i also added   "import-data": "node scripts/importData.js" 
in project.json scripts 

run the code npm install @sanity/client axios dotenv
npm run import-data
![Screenshot 2025-01-19 205928](https://github.com/user-attachments/assets/cb71640c-ae75-40a2-945f-7b5a48a62e59)


