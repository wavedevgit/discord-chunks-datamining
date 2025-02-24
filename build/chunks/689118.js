/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"function" == typeof Object.create ? e.exports = function(e, t) {
  t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
    constructor: {
      value: e,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }))
} : e.exports = function(e, t) {
  if (t) {
    e.super_ = t;
    var n = function() {};
    n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
  }
}