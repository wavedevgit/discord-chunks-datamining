/** Chunk was on web.js **/
/** chunk id: 946572, original params: e (module,exports,re quire) **/
"use strict";

function t(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
module.exports = function() {
  function e(e) {
    t(this, "_uri", true), this._uri = e
  }
  return e.prototype.toString = function() {
    return this._uri
  }, e
}()