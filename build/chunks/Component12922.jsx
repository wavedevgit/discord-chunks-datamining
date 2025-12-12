/** Chunk was on 98314 **/
/** chunk id: 12922, original params: o,r,l (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk981631 = require("./981631.js"),
  Chunk23095 = require("./23095.js");

function a(o) {
  var r, l;
  let {
    role: a
  } = o, d = (0, n.e7)([s.Z], () => s.Z.roleStyle);
  return (0, e.jsxs)("div", {
    className: c.roleRow,
    children: ["dot" === d ? (0, e.jsx)(t.FhE, {
      className: c.roleDot,
      color: null != (r = a.colorString) ? r : i.Pbq,
      colors: a.colorStrings,
      background: false,
      tooltip: false
    }) : (0, e.jsx)(t.xko, {
      className: c.roleDot,
      color: null != (l = a.colorString) ? l : i.Pbq,
      colors: a.colorStrings
    }), (0, e.jsx)("div", {
      children: a.name
    })]
  })
}