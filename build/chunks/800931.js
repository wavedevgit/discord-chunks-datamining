/** Chunk was on 54628 **/
/** chunk id: 800931, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk44837 = require("./44837.js"),
  Chunk381537 = require("./381537.js"),
  Chunk647438 = require("./647438.js"),
  Chunk639519 = require("./639519.js"),
  i = require.n(Chunk639519),
  Chunk208844 = require("./208844.js"),
  u = ["data"];

function l(e) {
  var t = Object.getOwnPropertyNames(e).length;
  return "".concat(t, " ").concat(1 !== t ? "keys" : "key")
}
var f = function(e) {
  var t = e.data,
    r = (0, n.Z)(e, u);
  return o.createElement(c.Z, (0, a.Z)({}, r, {
    data: t,
    nodeType: "Object",
    nodeTypeIndicator: "Error" === r.nodeType ? "Error()" : "{}",
    createItemString: l,
    expandable: Object.getOwnPropertyNames(t).length > 0
  }))
};
f.propTypes = {
  data: i().object,
  nodeType: i().string.isRequired
};
let b = f