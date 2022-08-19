let timeId = -1;
let lastIndex = 0;
let lastElement = undefined;

document.querySelector('#items').addEventListener('mouseover', ev => {
    const index = ev.target.dataset['index'];
    if (!index || lastIndex === index >> 0) {
        return;0
    }

    // const children = [...document.querySelector('#wrapper').children];
    const children = [...document.querySelector('#wrapper').children];
    console.log(children);
    // const children1 = [document.querySelector('#wrapper').children];
    // console.log(children1);
    if (lastElement) {
        clearTimeout(timeId);
        if (children[index] !== lastElement) {
            lastElement.style.display = 'none';
            lastElement = undefined;
        }
    }
    children.forEach((element, idx) => {
        const classList = element.classList;
        if (idx === index << 0) {
            element.style.display = 'flex';
            classList.remove('invisible');
            classList.add('visible');
        } else if (classList.contains('visible')) {
            classList.replace('visible', 'invisible');
            lastElement = element;
            timeId = setTimeout(() => {
                element.style.display = 'none';
                lastElement = undefined;
            }, 3000);
        }
    });

    lastIndex = index >> 0;
});