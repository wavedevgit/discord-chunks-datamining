/** Chunk was on 38058 **/
/** chunk id: 436846, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk86419 = require("./86419.js"),
  Chunk881410 = require("./881410.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk959183 = require("./959183.js");

function d(e) {
  let {
    widget: t
  } = e, n = (0, o.Gv)(t.type), i = 1 === n, d = i ? s.intl.string(s.t["3FdPBT"]) : s.intl.format(s.t.W8K2GH, {
    maxGames: n
  });
  return (0, r.jsxs)("div", {
    className: a()(u.container, i && u.singleGameWidget),
    children: [i && (0, r.jsx)(c.wl, {
      widget: t,
      widgetType: t.type
    }), (0, r.jsx)(l.Text, {
      variant: "text-xs/normal",
      color: "text-secondary",
      children: d
    })]
  })
}