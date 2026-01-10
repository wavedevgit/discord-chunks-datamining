/** Chunk was on web.js **/
/** chunk id: 370055, original params: e,t,n (module,exports,re quire) **/
var Chunk263604 = require("./263604.js"),
  i = /[\\^$.*+?()[\]{}|]/g,
  a = RegExp(i.source);
module.exports = function(e) {
  return (e = r(e)) && a.test(e) ? e.replace(i, "\\$&") : e
}