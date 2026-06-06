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
  "body": " Atmosphere  An atmosphere is a fluctuating, mobile envelope of mainly gases, with some small liquid and solid particles distributed throughout the empty space between gas particles, that is loosely held around a celestial body like a planet by the body's gravitational force ( ). A celestial body's atmosphere extends from its surface to some indefinite height above the surface.   Photograph taken from the International Space Station of the edge of Earth's atmosphere, called Earth's limb, illuminated from below by sunlight, with Earth's Moon in the background. The black shading at the bottom of the photograph is Earth's surface, and the black shading at the top of the photograph is outer space. Progressing upward from Earth's surface, the horizontally-oriented orange, brown, yellow, and blue shaded regions within the atmosphere visualize its layers. Figure sources    Horizontally-oriented layers stacked vertically in Earth's limb with Earth's moon in the background.    With the exception of precipitation particles like rain drops, snow flakes, sleet pellets, and hail stones, most of the particles that comprise an atmosphere are too small to be seen individually by the naked eye. And yet, the bulk effect of these tiny particles is made visible through, for example, the scattering of sunlight by gases and water droplets that human eyes interpret as blue daytime skies, red sunrises and sunsets, and white clouds. The colors captured in the photograph of Earth's limb in are due to such scattering of sunlight by microscopic particles in our planet's atmosphere.  While some gas particles near the upper boundary of an atmosphere can break free of the celestial body's gravitational pull and escape to outer space, and other particles may deposit onto the body's surface, the majority of gases and other particles remain within the atmospheric envelope. Furthermore, particles that are lost to outer space or the celestial body's surface are replaced by new particles supplied by the body's surface, which promotes the persistence and continuation of the atmosphere.  Rather than staying fixed at some location relative to the celestial body, gases and other particles flow through the atmosphere at variable speeds and in variable directions. These motions cause particles to sometimes cluster together and at other times spread far apart from each other. With regularity, some of the particles interact with each other and subsequently transition to different states and forms.  Although not perfectly so, the motions, interactions, and transitions of atmospheric particles are somewhat predictable. Accurate predictions require observations of the atmosphere's state combined with understanding and mathematical representation of the principles of physics and chemistry that govern atmospheric processes. The fulfillment of these requirements is encompassed in the scientific study of atmospheres, called atmospheric science.  "
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
  "body": " Photograph taken from the International Space Station of the edge of Earth's atmosphere, called Earth's limb, illuminated from below by sunlight, with Earth's Moon in the background. The black shading at the bottom of the photograph is Earth's surface, and the black shading at the top of the photograph is outer space. Progressing upward from Earth's surface, the horizontally-oriented orange, brown, yellow, and blue shaded regions within the atmosphere visualize its layers. Figure sources    Horizontally-oriented layers stacked vertically in Earth's limb with Earth's moon in the background.   "
},
{
  "id": "ch1-section-atmosphere-4",
  "level": "2",
  "url": "ch1-section-atmosphere.html#ch1-section-atmosphere-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "precipitation limb "
},
{
  "id": "ch1-section-figure-sources",
  "level": "1",
  "url": "ch1-section-figure-sources.html",
  "type": "Section",
  "number": "1.2",
  "title": "Figure sources",
  "body": " Figure sources     Earth's limb  Astronaut photograph ISS028-E-020072 was acquired on July 31, 2011, with a Nikon D3S digital camera using a 400 mm lens, and is provided by the ISS Crew Earth Observations experiment and Image Science & Analysis Laboratory, Johnson Space Center. The image was taken by the Expedition 28 crew . The image has been cropped and enhanced to improve contrast. Lens artifacts have been removed. The International Space Station Program supports the laboratory as part of the ISS National Laboratory to help astronauts take pictures of Earth that will be of the greatest value to scientists and the public, and to make those images freely available on the Internet. Additional images taken by astronauts and cosmonauts can be viewed at the NASA\/JSC Gateway to Astronaut Photography of Earth . Caption by Mike Carlowicz. Licensed under NASA Images and Media Usage Guidelines . Accessed via NASA Earth Observatory .     "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Glossary",
  "number": "",
  "title": "Glossary",
  "body": " Glossary   atmosphere  A mixture of gases and other particles surrounding a celestial body that are approximately held in place around the body by the body's gravitational force.    celestial body  A coherent collection of matter located in outer space.    gravitational force  The attractive force due to a physical body's mass that pulls other physical bodies toward its center.    limb  The edge of an atmosphere as viewed from outer space at an angle roughly perpendicular to the surface of the celestial body the atmosphere surrounds.    precipitation  A collection of water-based particles that are heavy enough to fall through Earth's atmosphere towards the planet's surface.   "
},
{
  "id": "backmatter-3",
  "level": "1",
  "url": "backmatter-3.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
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
