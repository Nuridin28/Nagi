document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.btn');
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close');
    const yesButton = document.getElementById('yes');
    const thinkButton = document.getElementById('think');
    const result = document.getElementById('result');

    // Показать модальное окно при нажатии на кнопку
    btn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    // Закрытие модального окна при нажатии на крестик
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Закрытие модального окна при нажатии вне области модального контента
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Обработка нажатия на кнопку "ДА"
    yesButton.addEventListener('click', () => {
        result.textContent = 'УРАА!';
        modal.style.display = 'none';
    });

    // Обработка нажатия на кнопку "Подумаю"
    thinkButton.addEventListener('click', () => {
        result.textContent = '';
        modal.style.display = 'none';
    });
});
