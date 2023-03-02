export function initAccordions() {
  const buttons = document.querySelectorAll('[data-accordion-button]');

  function toggleItemState({target}) {
    const container = target.closest('[data-accordion]');
    const items = container.querySelectorAll('[data-accordion-item]');
    const currentItem = target.closest('[data-accordion-item]');

    items.forEach((item) => {
      if (item === currentItem) {
        item.classList.toggle('is-open');

        return;
      }

      item.classList.remove('is-open');
    });
  }

  buttons.forEach((button) => {
    button.addEventListener('click', toggleItemState);
  });
}
