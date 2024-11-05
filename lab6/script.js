const movies = [ 
    { title: "Гаррі Поттер", cinema: "Мультиплекс", hall: "Зал 1", startDate: "2024-10-20" },
    { title: "Аватар", cinema: "Оскар", hall: "", startDate: "2024-11-03" },
    { title: "Інтерстеллар", cinema: "Жовтень", hall: "Зал 2", startDate: "2024-11-05" },
    { title: "Бійцівський клуб", cinema: "Планета кіно", hall: "Зал 1, Зал 2", startDate: "2024-11-04" },
    { title: "Пірати Карибського моря", cinema: "Сінема сіті", hall: "Зал 2", startDate: "2024-11-07" },
];

const SHOW_DURATION_DAYS = 10;

function calculateDaysUntilEnd(startDate) {
    const today = new Date();
    today.setHours(0, 0, 0, 0); 

    const start = new Date(startDate);
    start.setHours(0, 0, 0, 0); 

    const end = new Date(start);
    end.setDate(start.getDate() + SHOW_DURATION_DAYS);

    if (today < start) {
        return null; 
    }
    if (end < today) {
        return -1; 
    }

    const diffTime = end - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays;
}

function displayMoviesInfo() {
    let html = ""; 

    movies.forEach(movie => {
        const daysUntilEnd = calculateDaysUntilEnd(movie.startDate);
        const today = new Date().toISOString().split("T")[0];
        
        if (daysUntilEnd === null) {
            html += `<p style='background:#ccedff'>Показ фільму <strong>${movie.title}</strong> ще не почався.</p>`;
        } else if (daysUntilEnd === -1) {
            html += `<p style='background:#bbaaaa'>Показ фільму <strong>${movie.title}</strong> завершено.</p>`;
        } else {
            if (movie.startDate === today) {
                html += `<p style='background:#c1f3b3'>Сьогодні у кінотеатрі <strong>${movie.cinema} ${movie.hall}</strong> йде фільм <strong>${movie.title}</strong>.</p>`;
            }
            html += `<p>Фільм <strong>${movie.title}</strong> у кінотеатрі <strong>${movie.cinema}</strong> йде ще ${daysUntilEnd} дні(в).</p>`;
            if (!movie.hall) {
                html += `<p style='color: #cc0000'>Увага! У кінотеатрі <strong>${movie.cinema}</strong> лише один зал.</p>`;
            }
        }
    });

    document.getElementById("result").innerHTML = html; 
}

document.querySelector(".b-button").addEventListener("click", displayMoviesInfo);
