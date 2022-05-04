/**
 * Adapted from https://github.com/marcoaugustoandrade/jekyll-clipboardjs
 */

document.addEventListener('DOMContentLoaded', () => {
  if (!ClipboardJS.isSupported()) {
    return;
  }

  const codes = document.querySelectorAll('code');
  let countID = 0;

  codes.forEach((code) => {
    const minTextLengthToAddCopyButton = 3;
    if (code.innerText.length < minTextLengthToAddCopyButton) {
      return;
    }

    const id = `code-${countID}`;
    code.setAttribute('id', id);

    const icon = document.createElement('i');
    icon.className = 'fas fa-copy';

    const container = document.createElement('span');
    container.className = 'btn-copy';
    container.setAttribute('data-clipboard-action', 'copy');
    container.setAttribute('data-clipboard-target', `#${id}`);
    container.setAttribute('title', 'Copy to Clipboard');
    container.appendChild(icon);

    const isFencedCodeBlock = code.parentElement.classList.contains('highlight');

    if (isFencedCodeBlock) {
      const text = document.createElement('span');
      text.innerText = 'Copy';
      container.appendChild(text);

      code.before(container);
    } else {
      code.after(container);
    }

    countID++;
  });

  new ClipboardJS('.btn-copy');
});
