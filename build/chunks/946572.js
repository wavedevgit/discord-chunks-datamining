/** Chunk was on 68880 **/
"use strict";
var e = function() {
  function t(t) {
    var e, r;
    r = void 0, (e = "_uri") in this ? Object.defineProperty(this, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : this[e] = r, this._uri = t
  }
  return t.prototype.toString = function() {
    return this._uri
  }, t
}();
t.exports = e