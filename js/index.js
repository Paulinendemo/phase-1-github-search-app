document.addEventListener('DOMContentLoaded', () => {
    user();

})

function user() {
    const form = document.querySelector('#github-form');
    const container = document.querySelector('#github-container');


    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const ul = document.querySelector('#user-list');
        ul.innerHTML = ''
        const input = document.querySelector('#search');
        let value = input.value;

        return fetch(`https://api.github.com/search/users?q=${value}`, {
                headers: {
                    'accept': 'application/vnd.github.v3+json'
                }
            })
            .then(res => res.json())
            .then(info => info.items.forEach(infos => {
                const ul = document.querySelector('#user-list');
                li.addEventListener('click', (e) => {
                    fetch(`https://api.github.com/users/${value}/repos`, {
                            headers: {
                                'accept': 'application/vnd.github.v3+json'
                            }
                        })
                        .then(response => response.json())
                        .then(reponse => {
                            repos.forEach(repo => {
                                const ulRepo = document.querySelector('#repos-list');
                                const li = document.createElement('li');
                                li.textContent = `${repo.name}`
                                ul.appendChild(li)

                            })
                        })
                        .catch(error => {
                            ulRepo.innerHTML = `<li>
                        <h5>${error.message}</h5>
                        </li>`
                        })
                })

                e.target.reset();
            }));

    })

}