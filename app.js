document.addEventListener("DOMContentLoaded", () => {
    let submit = document.querySelector("button")
    let result = document.getElementById("result")
    let input = document.querySelector("input")

    submit.addEventListener("click", () => {
        fetch(`http://localhost:8080/superheroes.php?input=${input.value}`, { mode: 'no-cors' })
            .then(response => response.text())
            .then(data => {
                result.innerHTML = data
                console.log(data)
            })
            .catch (error => alert(error))
    })
})