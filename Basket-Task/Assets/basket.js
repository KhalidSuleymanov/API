let phones_list = JSON.parse(localStorage.getItem('phones'));

if (phones_list.length > 0) {
    document.querySelector('.alert').classList.add('d-none');
    document.getElementById('cnt').classList.remove('d-none');
}
else {
    document.querySelector('.alert').classList.remove('d-none');
    document.getElementById('cnt').classList.add('d-none');
}

function GetPhones() {
    let phones_list = JSON.parse(localStorage.getItem('phones'));

    let x = '';
    phones_list.forEach(item => {
        x += `
        <div class="col-lg-4">
            <div id=${item.Id} class="card">
                <img src= ${item.Image}  class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${item.Name}</h5>
                        <p>Price: ${item.Price}</p>
                        <p>Total Price: ${item.Price.split(' ')[0] * item.Count} AZN</p>
                        <p>Count: ${item.Count}</p>
                    <a href="#" id = "button" class="btn btn-primary">Delete</a>
                </div>
            </div>
        </div>
        `
    });

    document.querySelector('.rowlist').innerHTML = x;

    document.getElementById('cnt').innerHTML = phones_list.length;
    DeleteItem();
}

GetPhones();

document.querySelector('.btn_clear').addEventListener('click', function () {
    localStorage.removeItem('phones');
    location.reload();
})

function DeleteItem() {
    let phones_list = JSON.parse(localStorage.getItem('phones'))
    let removedPhone = document.querySelectorAll('#button')
    for (let rmvphone of removedPhone) {
        rmvphone.addEventListener('click', function () {
            location.reload();
            let removeId = this.parentElement.parentElement.getAttribute('item.Id');
            let existPhone = phones_list.find(item => item.Id === removeId);
            let index = phones_list.indexOf(existPhone);
            phones_list.splice(index, 1)
            localStorage.setItem('phones', JSON.stringify(phones_list));
        })
    }
    ShowCount();
}

function ShowCount() {
    let phones_list = JSON.parse(localStorage.getItem('phones'));
    document.querySelector('#count').innerHTML = phones_list.length;
}