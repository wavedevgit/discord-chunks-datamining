/** Chunk was on 72651 **/
/** chunk id: 436846, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk706454 = require("./706454.js"),
  Chunk86419 = require("./86419.js"),
  Chunk881410 = require("./881410.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk959183 = require("./959183.js");

function g(e) {
  let {
    widget: t
  } = e, n = (0, s.Gv)(t.type), i = 1 === n, g = (0, l.e7)([c.default], () => ["en-US", "en-GB"].includes(c.default.locale)) && i ? d.intl.string(d.t["3FdPBT"]) : d.intl.format(d.t.W8K2GH, {
    maxGames: n
  });
  return (0, r.jsxs)("div", {
    className: a()(f.container, i && f.singleGameWidget),
    children: [i && (0, r.jsx)(u.wl, {
      widget: t,
      widgetType: t.type
    }), (0, r.jsx)(o.Text, {
      variant: "text-xs/normal",
      color: "text-secondary",
      children: g
    })]
  })
}