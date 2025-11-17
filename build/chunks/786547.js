/** Chunk was on 66382 **/
/** chunk id: 786547, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk924102 = require("./924102.js"),
  Chunk675717 = require("./675717.js");
let a = function(e, t, r) {
  var a = true,
    i = true;
  if ("function" != typeof e) throw TypeError("Expected a function");
  return (0, o.Z)(r) && (a = "leading" in r ? !!r.leading : a, i = "trailing" in r ? !!r.trailing : i), (0, n.Z)(e, t, {
    leading: a,
    maxWait: t,
    trailing: i
  })
}