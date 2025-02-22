//IntersectionOberser observe multiple elements or entries at the same time
//This function will run everytime the visibility of an element changes
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');

//Now we tell observer to observe every element
hiddenElements.forEach((el) => observer.observe(el));