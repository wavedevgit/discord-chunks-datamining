/** Chunk was on web.js **/
/** chunk id: 576655, original params: e (module,exports,re quire) **/
"use strict";

function t() {
  this._cache = []
}
t.prototype.add = function(e) {
  false === this._cache.indexOf(e) && this._cache.push(e)
}, t.prototype.forEach = function(e) {
  this._cache.forEach(e)
}, module.exports = t