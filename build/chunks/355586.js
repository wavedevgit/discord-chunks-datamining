/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
var r = n(270572);

function i(e, t) {
  for (var n = 0; n < t.length; n++) {
    var i = t[n];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, r(i.key), i)
  }
}

function o(e, t, n) {
  return t && i(e.prototype, t), n && i(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e
}
e.exports = o, e.exports.__esModule = !0, e.exports.default = e.exports