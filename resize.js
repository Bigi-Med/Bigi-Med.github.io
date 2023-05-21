function moveSuffixLine() {
    const prefixLine = document.querySelector('.prefix-line');
    const suffixLine = document.querySelector('.suffix-line');
    const resizableBox = document.querySelector('.resizable-box');

    const suffixLinePosition = resizableBox.clientWidth - resizableBox.scrollWidth;
    suffixLine.style.right = suffixLinePosition + 'px';
  }
  
  window.addEventListener('resize', moveSuffixLine);
  