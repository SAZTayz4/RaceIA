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

const ctxm1 = document.getElementById('modalChart1');
        
            new Chart(ctxm1, {
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
            labels: ['0s', '1s', '2s', '3s', '4s', '5s', '6s', '7s', '8s', '9s', '10s', '11s', '12s', '13s', '14s', '15s', '16s', '17s', '18s', '19s', '20s', '21s', '22s', '23s', '24s', '25s', '26s', '27s', '28s', '29s', '30s', '31s', '32s', '33s', '34s', '35s', '36s', '37s', '38s', '39s', '40s', '41s', '42s', '43s', '44s', '45s', '46s', '47s', '48s', '49s', '50s', '51s', '52s', '53s', '54s', '55s', '56s', '57s', '58s', '59s', '60s', '61s', '62s', '63s', '64s', '65s', '66s', '67s', '68s', '69s', '70s', '71s', '72s', '73s', '74s', '75s', '76s', '77s', '78s', '79s', '80s', '81s', '82s', '83s', '84s', '85s', '86s', '87s', '88s', '89s', '90s', '91s', '92s', '93s', '94s', '95s', '96s', '97s', '98s', '99s', '100s'],
            datasets: [{
            label: 'km/h',
            data: [12, 15, 3, 5, 2, 3, 12, 15, 3, 5,12, 15, 3, 5, 2, 3, 12, 15, 3, 5,12, 15, 3, 5, 2, 3, 12, 15, 3, 5,12, 15, 3, 5, 2, 3, 12, 15, 3, 5,12, 15, 3, 5, 2, 3, 12, 15, 3, 5,12, 15, 3, 5, 2, 3, 12, 15, 3, 5,12, 15, 3, 5, 2, 3, 12, 15, 3, 5,12, 15, 3, 5, 2, 3, 12, 15, 3, 5,12, 15, 3, 5, 2, 3, 12, 15, 3, 5,12, 15, 3, 5, 2, 3, 12, 15, 3, 5],
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

const ctxm2 = document.getElementById('modalChart2');
        new Chart(ctxm2, {
        type: 'line',
        data: {
            labels : ['0s', '1s', '2s', '3s', '4s', '5s', '6s', '7s', '8s', '9s', '10s', '11s', '12s', '13s', '14s', '15s', '16s', '17s', '18s', '19s', '20s', '21s', '22s', '23s', '24s', '25s', '26s', '27s', '28s', '29s', '30s', '31s', '32s', '33s', '34s', '35s', '36s', '37s', '38s', '39s', '40s', '41s', '42s', '43s', '44s', '45s', '46s', '47s', '48s', '49s', '50s', '51s', '52s', '53s', '54s', '55s', '56s', '57s', '58s', '59s', '60s', '61s', '62s', '63s', '64s', '65s', '66s', '67s', '68s', '69s', '70s', '71s', '72s', '73s', '74s', '75s', '76s', '77s', '78s', '79s', '80s', '81s', '82s', '83s', '84s', '85s', '86s', '87s', '88s', '89s', '90s', '91s', '92s', '93s', '94s', '95s', '96s', '97s', '98s', '99s', '100s'],
            datasets: [{
            label: 'km/h',
            data: [12, 15, 3, 5, 2, 3, 12, 15, 3, 5,12, 15, 3, 5, 2, 3, 12, 15, 3, 5,12, 15, 3, 5, 2, 3, 12, 15, 3, 5,12, 15, 3, 5, 2, 3, 12, 15, 3, 5,12, 15, 3, 5, 2, 3, 12, 15, 3, 5,12, 15, 3, 5, 2, 3, 12, 15, 3, 5,12, 15, 3, 5, 2, 3, 12, 15, 3, 5,12, 15, 3, 5, 2, 3, 12, 15, 3, 5,12, 15, 3, 5, 2, 3, 12, 15, 3, 5,12, 15, 3, 5, 2, 3, 12, 15, 3, 5],
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
                data: [12, 19],
                borderWidth: 1
                }]
            },
            });

const ctxm3 = document.getElementById('modalChart3');
        new Chart(ctxm3, {
            type: 'pie',
            data: {
                labels: ['IA', 'Humain'],
                datasets: [{
                label: '# of Votes',
                data: [12, 19],
                borderWidth: 1
                }]
            },
            });


const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const gmodal = document.querySelector(button.dataset.modalTarget)
        openModal(gmodal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const gmodal = button.closest('.gmodal')
        closeModal(gmodal)
    })
})

overlay.addEventListener('click', () => {
    const gmodals = document.querySelectorAll('.gmodal.active')
    gmodals.forEach(gmodal => {
        closeModal(gmodal)
    })
})

function openModal(gmodal) {
    if (gmodal == null) return
    gmodal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(gmodal) {
    if (gmodal == null) return
    gmodal.classList.remove('active')
    overlay.classList.remove('active')
}
