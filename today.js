
const todaySvg = d3.select("svg")

todaySvg
  .selectAll("rect")
  .data(todayData)
  .enter()
  .append("rect")
  .attr("x", (d, i) => { return i * 36 })
  .attr("y", (d, i) => { return 112 - d })
  .attr("width", 24)
  .attr("height", (d, i) => { return d })

