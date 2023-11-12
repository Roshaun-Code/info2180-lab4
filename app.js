document.addEventListener("DOMContentLoaded", () => {
    let submit = document.querySelector("button")

    submit.addEventListener("click", () => {
        fetch("http://localhost:8080/superheroes.php", { mode: 'no-cors' })
            .then(response => response.text())
            .then(data => {
                alert(data)
            })
            .catch (error => alert(error))
    })
})