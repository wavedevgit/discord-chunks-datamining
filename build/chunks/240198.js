/** Chunk was on 84018 **/
/** chunk id: 240198, original params: e (module,exports,require) **/
var t = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
module.exports = function(e) {
  return e.match(t) || []
}