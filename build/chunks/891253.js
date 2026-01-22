/** Chunk was on 47950 **/
/** chunk id: 891253, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk84162 = require("./84162.js"),
  Chunk842922 = require("./842922.js");
let a = function(e, t, r) {
  var a = true,
    i = true;
  if ("function" != typeof e) throw TypeError("Expected a function");
  return (0, o.A)(r) && (a = "leading" in r ? !!r.leading : a, i = "trailing" in r ? !!r.trailing : i), (0, n.A)(e, t, {
    leading: a,
    maxWait: t,
    trailing: i
  })
}