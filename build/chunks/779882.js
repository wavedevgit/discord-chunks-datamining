/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
var r = n(911081),
  i = n(44091),
  o = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
  a = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g");

function s(e) {
  return (e = i(e)) && e.replace(o, r).replace(a, "")
}
e.exports = s