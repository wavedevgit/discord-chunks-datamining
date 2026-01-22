/** Chunk was on web.js **/
/** chunk id: 618628, original params: e (module,exports,re quire) **/
"function" == typeof Object.create ? module.exports = function(e, t) {
  t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
    constructor: {
      value: e,
      enumerable: false,
      writable: true,
      configurable: true
    }
  }))
} : module.exports = function(e, t) {
  if (t) {
    e.super_ = t;
    var n = function() {};
    n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
  }
}