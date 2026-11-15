(() => {
  const tools = document.querySelector('[data-paper-tools]');
  if (!tools) return;
  const papers = [...document.querySelectorAll('[data-paper]')];
  const buttons = [...tools.querySelectorAll('[data-filter]')];
  const search = tools.querySelector('[data-paper-search]');
  const status = document.querySelector('[data-paper-status]');
  let topic = 'all';
  function update() {
    const query = search.value.trim().toLocaleLowerCase();
    let count = 0;
    papers.forEach(paper => {
      const matches = (topic === 'all' || paper.dataset.topic === topic) && paper.textContent.toLocaleLowerCase().includes(query);
      paper.hidden = !matches;
      if (matches) count++;
    });
    status.textContent = count ? `${count} publication${count === 1 ? '' : 's'}` : 'No publications match. Try another keyword or topic.';
    status.hidden = false;
  }
  buttons.forEach(button => button.addEventListener('click', () => {
    topic = button.dataset.filter;
    buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    update();
  }));
  search.addEventListener('input', update);
  tools.hidden = false;
})();
