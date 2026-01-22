/** Chunk was on web.js **/
/** chunk id: 42344, original params: e (module,exports,re quire) **/
var t = /\w*$/;
module.exports = function(e) {
  var n = new e.constructor(e.source, t.exec(e));
  return n.lastIndex = e.lastIndex, n
}