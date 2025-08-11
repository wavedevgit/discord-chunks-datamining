/** Chunk was on web.js **/
/** chunk id: 207635, original params: e (module,exports,re quire) **/
var t = Object.prototype.hasOwnProperty;
module.exports = function(e) {
  var n = e.length,
    r = new e.constructor(n);
  return n && "string" == typeof e[0] && t.call(e, "index") && (r.index = e.index, r.input = e.input), r
}