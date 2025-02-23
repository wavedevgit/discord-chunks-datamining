/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";

function t() {
  this._cache = []
}
t.prototype.add = function(e) {
  -1 === this._cache.indexOf(e) && this._cache.push(e)
}, t.prototype.forEach = function(e) {
  this._cache.forEach(e)
}, e.exports = t