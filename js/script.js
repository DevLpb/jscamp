const botones = document.querySelectorAll(".button-apply-job");

botones.forEach(boton => {
boton.addEventListener('click', () => {

})
})

const jobsListingSection = document.querySelector(".jobs-listings");

jobsListingSection.addEventListener('click', function(event) {
    const element = event.target

    if (element.classList.contains('button-apply-job')) {  
    element.textContent = "Aplicado";
    element.classList.add('is-applied');
    element.disabled = true;
    }
})