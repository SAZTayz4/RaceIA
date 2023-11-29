const ctx = document.getElementById('myChart1');
    
        new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
            }]
        },
        options: {
            scales: {
            y: {
                beginAtZero: true
            }
            }
        }
        });

const ctx2 = document.getElementById('myChart2');
    
        new Chart(ctx2, {
        type: 'line',
        data: {
            labels: ['0s','5s', '10s', '15s', '20s', '25s', '30s'],
            datasets: [{
            label: 'km/h',
            data: [12, 15, 3, 5, 2, 3],
            borderWidth: 1
            }]
        },
        options: {
            scales: {
            y: {
                beginAtZero: true
            }
            }
        }
        });

const ctx3 = document.getElementById('myChart3');
        new Chart(ctx3, {
            type: 'pie',
            data: {
                labels: ['IA', 'Humain'],
                datasets: [{
                label: '# of Votes',
                data: [124, 19],
                borderWidth: 1
                }]
            },
            });
