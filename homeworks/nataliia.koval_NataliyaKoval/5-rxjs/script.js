const { fromEvent } = window.rxjs;
const {
    map, throttleTime, pairwise, distinctUntilChanged, filter,
} = window.rxjs.operators;

const scroll = fromEvent(document, 'scroll');
const header = document.querySelector('[data-header]');

scroll.pipe(
    throttleTime(500),
    map(() => window.pageYOffset),
    pairwise(),
    filter(([a, b]) => (a - b) > 50 || (b - a) > 50),
    map(([a, b]) => (a < b ? 'down' : 'up')),
    distinctUntilChanged(),
)
    .subscribe((event) => {
        if (event === 'up') header.style.display = 'block';
        else header.style.display = 'none';
    });
