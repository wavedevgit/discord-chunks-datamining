/** Chunk was on web.js **/
/** chunk id: 166898, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var Chunk746117 = require("./746117.js"),
  Chunk856084 = require("./856084.js"),
  Chunk581079 = require("./581079.js");
module.exports = function() {
  function e(e) {
    r(this, "_defaultDir", true), r(this, "_lastDir", true), e ? a.isStrong(e) || o(false) : e = a.getGlobalDir(), this._defaultDir = e, this.reset()
  }
  var t = module.prototype;
  return exports.reset = function() {
    this._lastDir = this._defaultDir
  }, exports.getDirection = function(e) {
    return this._lastDir = i.getDirection(e, this._lastDir), this._lastDir
  }, module
}()