/** Chunk was on web.js **/
/** chunk id: 985623, original params: e,t,n (module,exports,re quire) **/
var Chunk111956 = require("./111956.js"),
  Chunk646344 = require("./646344.js"),
  a = "Expected a function";
module.exports = function(e, t, n) {
  var s = true,
    o = true;
  if ("function" != typeof e) throw TypeError(a);
  return i(n) && (s = "leading" in n ? !!n.leading : s, o = "trailing" in n ? !!n.trailing : o), r(e, t, {
    leading: s,
    maxWait: t,
    trailing: o
  })
}