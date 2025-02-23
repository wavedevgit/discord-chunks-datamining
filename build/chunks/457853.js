/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
var r = n(900624),
  i = n(117973),
  o = n(302767),
  a = 200;

function s(e, t) {
  var n = this.__data__;
  if (n instanceof r) {
    var s = n.__data__;
    if (!i || s.length < a - 1) return s.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new o(s)
  }
  return n.set(e, t), this.size = n.size, this
}
e.exports = s