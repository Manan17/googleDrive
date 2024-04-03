## Getting Started
First, run the development server:
```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Files and Folder structure
For the folder -> files, the id is passed on to the query field of the url. 
Once we click on folder, it goes to /Files/:id and gets id from the searchParams and the files from the dummydata. 
In real life this happens using apis, we pass the id to suppose api/v1/folder/:id and get all the files and display

## Search Bar
A search bar component is made on the main page and the folder page. filter function is used for filtering the files/folders according to titles.

## Sort
Sorting is done for size, date, files, folder.
Simple filter for files and folder is used.
For size and date sorting, the sort function of Array is overridden, the difference of size and date respectively is returned and result is obtained.

Note: If we only use the initialData for sorting, react will assume that it is the same state and would not re-render so I have used ...initialData which makes a copy of initialData which solved the problem.
