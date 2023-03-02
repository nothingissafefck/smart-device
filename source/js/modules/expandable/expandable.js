export function initExpandable() {
  const buttons = document.querySelectorAll('[data-expandable-button]');

  buttons.forEach((button) => {
    button.addEventListener('click', ({target}) => {
      const container = target.closest('[data-expandable]');

      if (container) {
        container.classList.toggle('is-expanded');
      }
    });
  });
}
