/** Chunk was on web.js **/
function t(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= +!!t, t
}
e.exports = t