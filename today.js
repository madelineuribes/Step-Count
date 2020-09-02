const todaySvg = d3.select("svg.today")

const barScale = d3.scaleLinear()
  .domain([0, 2000])
  .range([1, 112])

const todayGroups = todaySvg
  .selectAll("g")
  .data(todayData)
  .enter()
  .append("g")
  .attr("transform", (d, i) => { return "translate(" + (i * 30) + ", 0)" })

todayGroups
  .append("rect")
  .attr("x", 0)
  .attr("y", (d, i) => { return 112 })
  .attr("width", 24)
  .attr("height", 0)
  .transition()
  .delay((d, i) => { return i * 20 })
  .attr("y", (d, i) => { return 112 - barScale(d) })
  .attr("height", (d, i) => { return barScale(d) })

todayGroups
  .append("text")
  .attr("x", 12)
  .attr("y", 130)
  .text((d, i) => { return i })
