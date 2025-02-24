/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
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