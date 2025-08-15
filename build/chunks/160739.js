/** Chunk was on 74278 **/
/** chunk id: 160739, original params: t (module,exports,require) **/
var r = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
module.exports = function(t) {
  return t.match(r) || []
}