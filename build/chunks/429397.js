/** Chunk was on web.js **/
/** chunk id: 429397, original params: e (module,exports,re quire) **/
var t = Function.prototype.toString;
module.exports = function(e) {
  if (null != e) {
    try {
      return t.call(e)
    } catch (e) {}
    try {
      return e + ""
    } catch (e) {}
  }
  return ""
}