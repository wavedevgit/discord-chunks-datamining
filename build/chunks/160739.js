/** Chunk was on 70363 **/
/** chunk id: 160739, original params: e (module,exports,require) **/
var t = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
module.exports = function(e) {
  return e.match(t) || []
}