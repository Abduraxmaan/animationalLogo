const product = {
    plainBurger: {
        name: 'Гамбургер простой',
        price: 10000,
        kcall: 200,
        amount: 0,
        get Sum() {
            return this.price * this.amount
        },
        get Kcall() {
            return this.kcall * this.amount
        }
    },
    freshBurger: {
        name: 'Гамбургер FRESH',
        price: 20500,
        kcall: 300,
        amount: 0,
        get Sum() {
            return this.price * this.amount
        },
        get Kcall() {
            return this.kcall * this.amount
        }
    },
    freshCombo: {
        name: 'FRESH COMBO',
        price: 31900,
        kcall: 350,
        amount: 0,
        get Sum() {
            return this.price * this.amount
        },
        get Kcall() {
            return this.kcall * this.amount
        }
    }
}

const extraProduct = {
    doubleMayonnaise: {
        name: 'Двойной майонез',
        price: 1000,
        kcall: 50
    },
    lettuce: {
        name: 'Салатный лист',
        price: 500,
        kcall: 10
    },
    cheese: {
        name: 'Сыр',
        price: 1500,
        kcall: 30
    }
}

const btnPlusOrMinus = document.querySelectorAll('.main__product-btn');

btnPlusOrMinus.forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        plusOrMinus(this);
    })
})


function plusOrMinus(element) {
    /* 
        closest() - метод объекта. Который подключается и получает родителя элемента у которого мы вызвали
        getAttribute() - получает значение аттрибута у элемента с HTML
    */

        const parent = element.closest('.main__product'),
            parentId = parent.getAttribute('id'),
            productAmount = parent.querySelector('.main__product-num'),
            price = parent.querySelector('.main__product-price span'),
            kcall = parent.querySelector('.main__product-kcall span'),
            symbol = element.getAttribute('data-symbol');

            if(symbol == '+') {
                product[parentId].amount++
            }else if(symbol == '-' && product[parentId].amount > 0) {
                product[parentId].amount--
            }
        
            productAmount.innerHTML = product[parentId].amount
            price.innerHTML = product[parentId].Sum;
            kcall.innerHTML = product[parentId].Kcall;
}

const timer = document.querySelector('.header__timer-extra');
const time = 1;

function timer(){
  const i = 1,
      num = $(this).data('num'),
      step = 1000 * time / num,
      that = $(this),
      interval = setInterval(function() {
        if(i <= num) {
         that.html(i);
        }else {
        clearInterval(interval);
        }
      i++;
      }, step)
}

