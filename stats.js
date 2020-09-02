const statFormat = d3.format(",.0f")

d3.select("p.worst-day").text(statFormat(d3.min(monthData)) + " steps")
d3.select("p.avg-day").text(statFormat(d3.mean(monthData)) + " steps")
d3.select("p.best-day").text(statFormat(d3.max(monthData)) + " steps")
d3.select("p.total-month").text(statFormat(d3.sum(monthData)) + " steps")
d3.select("p.total-day").text(statFormat(d3.sum(todayData)) + " steps")


