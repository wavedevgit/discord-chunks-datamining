/** Chunk was on web.js **/
/** chunk id: 123763, original params: e,t,n (module,exports,re quire) **/
var Chunk889678 = require("./889678.js"),
  Chunk706627 = require("./706627.js"),
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