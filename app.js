document.addEventListener("DOMContentLoaded", () => {
    let submit = document.querySelector("button")
    const httprequest =  XMLHttpRequest()
    let url = "http://localhost:8080/superheroes.php"

    submit.addEventListener("click", () => {
        fetch(url)
            .then(response => {
                if (!response.ok){
                    throw new Error("Error")
                }
                return response.text()
            })
            .then (data => console.log(data))
            .then (error => console.error("Error: ", error))
    })
})