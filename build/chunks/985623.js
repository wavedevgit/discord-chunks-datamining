/** Chunk was on web.js **/
/** chunk id: 985623, original params: e,t,n (module,exports,re quire) **/
var Chunk111956 = require("./111956.js"),
  Chunk646344 = require("./646344.js"),
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