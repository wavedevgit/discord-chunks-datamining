/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
var r = n(710170),
  i = n(481062),
  o = n(660326),
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