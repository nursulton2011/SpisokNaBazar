const addButton = document.querySelector('.add-product');
const clearButton = document.querySelector('.clear-list');
const productList = document.querySelector('.products-list');

addButton.addEventListener('click', function() {
  const type = document.getElementById('type-select').value;
  const name = document.getElementById('product-name').value;
  const count = document.getElementById('product-count').value;

  let valid = true;

  if (!type) {
    alert('Ошибка: Нужно выбрать тип продукта');
    valid = false;
  }

  if (!name) {
    alert('Ошибка: Нужно ввести название продукта');
    valid = false;
  }

  if (!count) {
    alert('Ошибка: Нужно ввести количество продукта');
    valid = false;
  }

  if (valid) {
    const item = document.createElement('div');
    item.className = 'product-item';
    item.textContent = type + ' - ' + name + ' (' + count + ' шт.)';
    
    productList.appendChild(item);

    document.getElementById('type-select').value = "";
    document.getElementById('product-name').value = "";
    document.getElementById('product-count').value = "";
  }
});

clearButton.addEventListener('click', function() {
  productList.innerHTML = '';
});
