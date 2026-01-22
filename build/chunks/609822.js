/** Chunk was on 92777 **/
/** chunk id: 609822, original params: e,t,r (module,exports,require) **/
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
  return "".concat(e.length, " ").concat(1 !== e.length ? "items" : "item")
}
var b = function(e) {
  var t = e.data,
    r = (0, n.A)(e, l);
  return s.createElement(c.A, (0, a.A)({}, r, {
    data: t,
    nodeType: "Array",
    nodeTypeIndicator: "[]",
    createItemString: u,
    expandable: t.length > 0
  }))
};
b.propTypes = {
  data: i().array
};
let f = b