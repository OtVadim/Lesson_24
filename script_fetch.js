fetch('https://api.github.com/users/OtVadim')
            .then((response) => response.json())
            .then((data) => {

                console.log(data)

                const userId = document.createElement('div')
                userId.textContent = `ID: ${data.id}`
                document.body.append(userId)

                const userName = document.createElement('div')
                userName.textContent = `Name: ${data.login}`
                document.body.append(userName)

                const image = document.createElement('img')
                image.src = data.avatar_url
                document.body.append(image)
            })