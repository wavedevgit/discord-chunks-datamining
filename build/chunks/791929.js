/** Chunk was on web.js **/
/** chunk id: 791929, original params: e (module,exports,re quire) **/
var t = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
module.exports = function(e) {
  return e.match(t) || []
}