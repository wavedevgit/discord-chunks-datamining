/** Chunk was on 92777 **/
/** chunk id: 531228, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk1139 = require("./1139.js"),
  Chunk106526 = require("./106526.js"),
  Chunk64700 = require("./64700.js"),
  Chunk223108 = require("./223108.js"),
  i = require.n(Chunk223108),
  Chunk431384 = require("./431384.js"),
  l = ["data"];

function u(e) {
  var t = Object.getOwnPropertyNames(e).length;
  return "".concat(t, " ").concat(1 !== t ? "keys" : "key")
}
var b = function(e) {
  var t = e.data,
    r = (0, n.A)(e, l);
  return s.createElement(c.A, (0, a.A)({}, r, {
    data: t,
    nodeType: "Object",
    nodeTypeIndicator: "Error" === r.nodeType ? "Error()" : "{}",
    createItemString: u,
    expandable: Object.getOwnPropertyNames(t).length > 0
  }))
};
b.propTypes = {
  data: i().object,
  nodeType: i().string.isRequired
};
let f = b