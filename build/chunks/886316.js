/** Chunk was on 38939 **/
/** chunk id: 886316, original params: t (module,exports,require) **/
"use strict";
module.exports = function() {
  function t(t) {
    var e, r;
    r = true, (e = "_uri") in this ? Object.defineProperty(this, e, {
      value: r,
      enumerable: true,
      configurable: true,
      writable: true
    }) : this[e] = r, this._uri = t
  }
  return t.prototype.toString = function() {
    return this._uri
  }, t
}()