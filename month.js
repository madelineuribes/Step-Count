const monthSvg = d3.select("svg.month")

const radiusScale = d3.scaleSqrt()
  .domain([0, 30000])
  .range([0, 50])

monthSvg
  .selectAll("circle")
  .data(monthData)
  .enter()
  .append("circle")
  .attr("cx", (d, i) => { return (i % 7) * 120 + 60 })
  .attr("cy", (d, i) => { return Math.floor(i / 7) * 100 + 60 })
  .attr("r", 10)
  .transition()
  .duration(250)
  .delay((d, i) => { return i * 20 + 500 })
  .ease(d3.easeCubicIn)
  .attr("r", (d, i) => { return radiusScale(d) })
