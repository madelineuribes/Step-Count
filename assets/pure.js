// Change the text that says hello, into hello [someone]
// Pick the h1 tag
// const headerTag = document.querySelector("h1")

// Then change the html content
// headerTag.innerHTML = "Hello someone"

// Change the html tag to a background of red
// headerTag.style.backgroundColor = "var(--primary-orange)"

// Font size is big
// headerTag.style.fontSize = "64px"


// lets pick all h1 tags
// change background color for each tag
// const headerTags = document.querySelectorAll("h1")

// loop through list of tags using foreach
// headerTags.forEach(h1 => {
//   const hue = 360 * Math.random()
//   h1.style.backgroundColor = "hsl(" + hue + ", 100%, 50%)"
// })


// pick each tag and label it with each tag's number, the index
// headerTags.forEach((h1, index) => {
//   h1.innerHTML = "tag " + (index + 1)
// })

// Select rectangles

//const rectTags = document.querySelectorAll("rect")

// rectTags.forEach((tag, i) => {
//   const width = data[i]
//   tag.setAttribute("width", width + "px")
// })

const data = [
  2, 3, 5, 6, 4, 2,
  5, 20, 24, 32, 40,
  59, 68, 89, 100, 112, 109,
  101, 78, 56, 32, 31, 12, 1
]

const todaySVG = document.querySelector("svg")

// width bar = 24
// gap between bars = 12
// max-height = 112

data.forEach((d, i) => {
  // add a rect tag to todaySVG
  const rectTag = document.createElementNS("http://www.w3.org/2000/svg", "rect")
  rectTag.setAttribute("x", i * 36)
  rectTag.setAttribute("y", 112 - d)
  rectTag.setAttribute("width", 24)
  rectTag.setAttribute("height", d)

  todaySVG.append(rectTag)
})
