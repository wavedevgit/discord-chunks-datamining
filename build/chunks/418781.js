/** Chunk was on web.js **/
/** chunk id: 418781, original params: e,t,n (module,exports,re quire) **/
var Chunk659671 = require("./659671.js"),
  i = /[\\^$.*+?()[\]{}|]/g,
  a = RegExp(i.source);
module.exports = function(e) {
  return (e = r(e)) && a.test(e) ? e.replace(i, "\\$&") : e
}