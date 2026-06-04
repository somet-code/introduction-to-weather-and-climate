var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "ch1-section-atmosphere",
  "level": "1",
  "url": "ch1-section-atmosphere.html",
  "type": "Section",
  "number": "1.1",
  "title": "Atmosphere",
  "body": " Atmosphere  An atmosphere is a fluctuating, mobile envelope of mainly gases, with some small liquid and solid particles distributed throughout the empty space between gas particles, that is loosely held around a celestial body like a planet by the body's gravitational force ( ). A celestial body's atmosphere extends from its surface to some indefinite height above the surface.   Photograph taken from the International Space Station of the edge of Earth's atmosphere, called Earth's limb, illuminated from below by sunlight, with Earth's Moon in the background. The black shading at the bottom of the photograph is Earth's surface, and the black shading at the top of the photograph is outer space. Progressing upward from Earth's surface, the horizontally-oriented orange, brown, yellow, and blue shaded regions within the atmosphere visualize its layers. [1]    "
},
{
  "id": "ch1-section-atmosphere-2",
  "level": "2",
  "url": "ch1-section-atmosphere.html#ch1-section-atmosphere-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "atmosphere celestial body gravitational force "
},
{
  "id": "ch1-atmosphere-figure",
  "level": "2",
  "url": "ch1-section-atmosphere.html#ch1-atmosphere-figure",
  "type": "Figure",
  "number": "1.1.1",
  "title": "",
  "body": " Photograph taken from the International Space Station of the edge of Earth's atmosphere, called Earth's limb, illuminated from below by sunlight, with Earth's Moon in the background. The black shading at the bottom of the photograph is Earth's surface, and the black shading at the top of the photograph is outer space. Progressing upward from Earth's surface, the horizontally-oriented orange, brown, yellow, and blue shaded regions within the atmosphere visualize its layers. [1]   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
},
{
  "id": "backmatter-3",
  "level": "1",
  "url": "backmatter-3.html",
  "type": "Glossary",
  "number": "",
  "title": "Glossary",
  "body": " Glossary   atmosphere  A mixture of gases and other particles surrounding a celestial body that are approximately held in place around the body by the body's gravitational force.    celestial body  A coherent collection of matter located in outer space.    gravitational force  The attractive force due to a physical body's mass that pulls other physical bodies toward its center.   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
