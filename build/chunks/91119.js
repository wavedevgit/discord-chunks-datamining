/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
var r = n(772949),
  i = n(587816),
  o = n(756237),
  a = n(407411);

function s(t) {
  var n = "function" == typeof Map ? new Map : void 0;
  return e.exports = s = function(e) {
    if (null === e || !o(e)) return e;
    if ("function" != typeof e) throw TypeError("Super expression must either be null or a function");
    if (void 0 !== n) {
      if (n.has(e)) return n.get(e);
      n.set(e, t)
    }

    function t() {
      return a(e, arguments, r(this).constructor)
    }
    return t.prototype = Object.create(e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), i(t, e)
  }, e.exports.__esModule = !0, e.exports.default = e.exports, s(t)
}
e.exports = s, e.exports.__esModule = !0, e.exports.default = e.exports