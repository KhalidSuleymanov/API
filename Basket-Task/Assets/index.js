if (localStorage.getItem("phones") === null) {
    localStorage.setItem("phones", JSON.stringify([]));
}

let buttons = document.querySelectorAll('.btn');


for (let btn of buttons) {
    btn.onclick = function (e) {
        e.preventDefault();
        let id = this.parentElement.parentElement.id;
        let src = this.parentElement.parentElement.children[0].src;
        let pr_name = this.previousElementSibling.previousElementSibling.innerHTML;
        let pr_price = this.previousElementSibling.innerHTML;


        let phones_list = JSON.parse(localStorage.getItem('phones'));

        let existPhone = phones_list.find(item => item.Id === id);

        if(existPhone === undefined){
            phones_list.push({
                Id: id,
                Image: src,
                Name: pr_name,
                Price: pr_price,
                Count: 1
            })

            document.querySelector('.alertbox').innerHTML = 'Məhsul əlavə edildi..'
            document.querySelector('.alertbox').style.right = '5%'
        }
        else{
            existPhone.Count += 1;
            document.querySelector('.alertbox').innerHTML = 'Məhsulun sayı artdı..'
            document.querySelector('.alertbox').style.right = '5%'

        }
        localStorage.setItem('phones', JSON.stringify(phones_list));

        setTimeout(() => {
            document.querySelector('.alertbox').style.right = '-15%'
        }, 2000);
        ShowCount();
    }
}

function ShowCount(){
    let phones_list = JSON.parse(localStorage.getItem('phones'));
    document.querySelector('#count').innerHTML = phones_list.length;
}

ShowCount(); 