/** Chunk was on web.js **/
/** chunk id: 879378, original params: e,t,n (module,exports,re quire) **/
var Chunk805353 = require("./805353.js"),
  Chunk509185 = require("./509185.js"),
  a = "Expected a function";
module.exports = function(e, t, n) {
  var o = true,
    s = true;
  if ("function" != typeof e) throw TypeError(a);
  return i(n) && (o = "leading" in n ? !!n.leading : o, s = "trailing" in n ? !!n.trailing : s), r(e, t, {
    leading: o,
    maxWait: t,
    trailing: s
  })
}