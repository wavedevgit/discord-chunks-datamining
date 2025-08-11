/** Chunk was on web.js **/
/** chunk id: 123763, original params: e,t,n (module,exports,re quire) **/
var Chunk889678 = require("./889678.js"),
  Chunk706627 = require("./706627.js"),
  o = "Expected a function";
module.exports = function(e, t, n) {
  var a = true,
    s = true;
  if ("function" != typeof e) throw TypeError(o);
  return i(n) && (a = "leading" in n ? !!n.leading : a, s = "trailing" in n ? !!n.trailing : s), r(e, t, {
    leading: a,
    maxWait: t,
    trailing: s
  })
}