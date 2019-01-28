
var canvas = document.getElementById('soda-chart')
console.log(canvas)
var ctx = canvas.getContext('2d')

chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Coke", "Pepsi", "Either", "Neither"],
        datasets: [{
            label: 'Number of votes',
            data: [18, 14, 7, 10],
            backgroundColor: ['red', 'blue', 'yellow', 'green']
        }]
    }, options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})