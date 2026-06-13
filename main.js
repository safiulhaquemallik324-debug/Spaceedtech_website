const counters = document.querySelectorAll('.count');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = +counter.dataset.target;
            let current = 0;
            const speed = 10;

            const interval = setInterval(() => {
                current++;
                counter.innerText = current;
                if (current >= target) {
                    clearInterval(interval);
                }
            }, speed);

            observer.unobserve(counter);
        }
    });
});

counters.forEach(c => observer.observe(c));