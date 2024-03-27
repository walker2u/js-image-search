// Assuming jsonData is an array of objects with title and description properties
const jsonData = [
    { title: "Card Title 1", description: "Card description for item 1" },
    { title: "Card Title 2", description: "Card description for item 2" },
    { title: "Card Title 3", description: "Card description for item 3" },
    { title: "Card Title 4", description: "Card description for item 4" },
    // ... more objects
  ];
const onj = document.getElementsByClassName('row');
console.log(onj);
jsonData.forEach((val)=>{
    console.log(val);
});