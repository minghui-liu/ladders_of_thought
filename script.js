const copyButton = document.querySelector('[data-copy="bibtex"]');
const toast = document.querySelector('.toast');

copyButton?.addEventListener('click', async () => {
  const citation = document.querySelector('#bibtex code')?.textContent ?? '';
  try {
    await navigator.clipboard.writeText(citation);
    copyButton.innerHTML = '<span aria-hidden="true">✓</span> Copied';
    toast?.classList.add('show');
    window.setTimeout(() => {
      copyButton.innerHTML = '<span aria-hidden="true">⧉</span> Copy BibTeX';
      toast?.classList.remove('show');
    }, 1800);
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    const code = document.querySelector('#bibtex code');
    if (code && selection) {
      range.selectNodeContents(code);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }
});
