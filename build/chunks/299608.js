/** Chunk was on 8381 **/
/** chunk id: 299608, original params: t,e,r (module,exports,require) **/
var Chunk954955 = require("./954955.js"),
  Chunk661233 = require("./661233.js");
module.exports = function(t, e, r) {
  var o = true,
    a = true;
  if ("function" != typeof t) throw TypeError("Expected a function");
  return i(r) && (o = "leading" in r ? !!r.leading : o, a = "trailing" in r ? !!r.trailing : a), n(t, e, {
    leading: o,
    maxWait: e,
    trailing: a
  })
}