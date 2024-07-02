document.addEventListener('DOMContentLoaded', () => {
    const pageTitle = document.querySelector('.content__title');
    const selects = document.querySelectorAll('.select');

    selects.forEach(select => {
        const trigger = select.querySelector('.select__trigger');
        const options = select.querySelector('.select__options');
        const optionItems = options.querySelectorAll('.select__option');

        // Получаем placeholder из data-атрибута
        const placeholder = trigger.getAttribute('data-placeholder');

        if (placeholder) {
            trigger.classList.add('select__trigger--placeholder');
        } 

        trigger.textContent = placeholder || optionItems[0].textContent;

        trigger.addEventListener('click', () => {
            select.classList.toggle('select--open');
        });

        optionItems.forEach(option => {
            option.addEventListener('click', () => {
                const selectedValue = option.getAttribute('data-value');
                const selectedText = option.textContent;

                options.querySelector('.select__option--selected').classList.remove('select__option--selected');
                option.classList.add('select__option--selected');
                trigger.textContent = selectedText;
                select.classList.remove('select--open');

                if (select.classList.contains('select--dropdown1')) {
                    pageTitle.textContent = `Заголовок: ${selectedValue}`;
                    trigger.classList.remove('select__trigger--placeholder');
                } else if (select.classList.contains('select--dropdown2')) {
                    alert(selectedText);
                }
            });
        });
    });

    window.addEventListener('click', e => {
        selects.forEach(select => {
            if (!select.contains(e.target)) {
                select.classList.remove('select--open');
                const options = select.querySelector('.select__options');
            }
        });
    });
});
