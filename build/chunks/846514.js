/** Chunk was on 38939 **/
/** chunk id: 846514, original params: t,e,r (module,exports,require) **/
"use strict";
var n = require("./116740.js").List;
module.exports = function() {
  function t(t) {
    var e, r;
    r = true, (e = "_decorators") in this ? Object.defineProperty(this, e, {
      value: r,
      enumerable: true,
      configurable: true,
      writable: true
    }) : this[e] = r, this._decorators = t.slice()
  }
  var e = t.prototype;
  return e.getDecorations = function(t, e) {
    var r = Array(t.getText().length).fill(null);
    return this._decorators.forEach(function(n, i) {
      var o = 0;
      (0, n.strategy)(t, function(t, e) {
        (function(t, e, r) {
          for (var n = e; n < r; n++)
            if (null != t[n]) returnfalse;
          returntrue
        })(r, t, e) && (function(t, e, r, n) {
          for (var i = e; i < r; i++) t[i] = n
        }(r, t, e, i + "." + o), o++)
      }, e)
    }), n(r)
  }, e.getComponentForKey = function(t) {
    var e = parseInt(t.split(".")[0], 10);
    return this._decorators[e].component
  }, e.getPropsForKey = function(t) {
    var e = parseInt(t.split(".")[0], 10);
    return this._decorators[e].props
  }, t
}()