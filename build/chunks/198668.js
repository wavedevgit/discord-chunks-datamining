/** Chunk was on web.js **/
/** chunk id: 198668, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var Chunk679443 = require("./679443.js"),
  Chunk181038 = require("./181038.js"),
  Chunk797686 = require("./797686.js");
module.exports = function() {
  function e(e) {
    r(this, "_defaultDir", true), r(this, "_lastDir", true), e ? a.isStrong(e) || s(false) : e = a.getGlobalDir(), this._defaultDir = e, this.reset()
  }
  var t = e.prototype;
  return t.reset = function() {
    this._lastDir = this._defaultDir
  }, t.getDirection = function(e) {
    return this._lastDir = i.getDirection(e, this._lastDir), this._lastDir
  }, e
}()