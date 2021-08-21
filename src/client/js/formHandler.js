function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let number = document.getElementById('name').value
    if (Client.checkForNumber(number)) {

        fetch("http://localhost:8081/test", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ number })
        }).then(res => res.json()).then(post => {
            console.log(post)
            document.getElementById("title").innerHTML = post.title
            document.getElementById("body").innerHTML = post.body
            document.getElementById("resultsSection").className = ""
        })
    }
    else {
        console.log("hello")
        alert("please enter a valid number between 1,100")
        document.getElementById("resultsSection").className = "hidden"

    }
}

export { handleSubmit }
