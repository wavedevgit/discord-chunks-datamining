/** Chunk was on 91584 **/
/** chunk id: 166898, original params: t,e,r (module,exports,require) **/
"use strict";

function n(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = r, t
}
var Chunk746117 = require("./746117.js"),
  Chunk856084 = require("./856084.js"),
  Chunk581079 = require("./581079.js");
module.exports = function() {
  function t(t) {
    n(this, "_defaultDir", true), n(this, "_lastDir", true), t ? o.isStrong(t) || a(false) : t = o.getGlobalDir(), this._defaultDir = t, this.reset()
  }
  var e = module.prototype;
  return exports.reset = function() {
    this._lastDir = this._defaultDir
  }, exports.getDirection = function(t) {
    return this._lastDir = i.getDirection(t, this._lastDir), this._lastDir
  }, module
}()