/** Chunk was on 67244 **/
/** chunk id: 349036, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk44837 = require("./44837.js"),
  Chunk381537 = require("./381537.js"),
  Chunk73800 = require("./73800.js"),
  Chunk639519 = require("./639519.js"),
  i = require.n(Chunk639519),
  Chunk357308 = require("./357308.js"),
  l = ["data"];

function u(e) {
  var t = Object.getOwnPropertyNames(e).length;
  return "".concat(t, " ").concat(1 !== t ? "keys" : "key")
}
var f = function(e) {
  var t = e.data,
    r = (0, n.Z)(e, l);
  return s.createElement(c.Z, (0, a.Z)({}, r, {
    data: t,
    nodeType: "Object",
    nodeTypeIndicator: "Error" === r.nodeType ? "Error()" : "{}",
    createItemString: u,
    expandable: Object.getOwnPropertyNames(t).length > 0
  }))
};
f.propTypes = {
  data: i().object,
  nodeType: i().string.isRequired
};
let b = f