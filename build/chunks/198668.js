/** Chunk was on 38939 **/
/** chunk id: 198668, original params: t,e,r (module,exports,require) **/
"use strict";

function n(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = r, t
}
var Chunk679443 = require("./679443.js"),
  Chunk181038 = require("./181038.js"),
  Chunk797686 = require("./797686.js");
module.exports = function() {
  function t(t) {
    n(this, "_defaultDir", true), n(this, "_lastDir", true), t ? o.isStrong(t) || a(false) : t = o.getGlobalDir(), this._defaultDir = t, this.reset()
  }
  var e = t.prototype;
  return e.reset = function() {
    this._lastDir = this._defaultDir
  }, e.getDirection = function(t) {
    return this._lastDir = i.getDirection(t, this._lastDir), this._lastDir
  }, t
}()