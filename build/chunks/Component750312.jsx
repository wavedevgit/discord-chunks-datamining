/** Chunk was on 12756 **/
/** chunk id: 750312, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk313201 = require("./313201.js"),
  Chunk314897 = require("./314897.js"),
  Chunk86419 = require("./86419.js"),
  Chunk840367 = require("./840367.jsx"),
  Chunk272289 = require("./272289.jsx"),
  Chunk415734 = require("./415734.js");

function g(e) {
  let {
    userId: t,
    widget: n,
    children: l,
    disableInteraction: g,
    className: b
  } = e, [j, y] = i.useState(false), O = (0, s.Dt)(), h = (0, c.e7)([d.default], () => d.default.getId() === t), x = (0, u.kQ)(n);
  return (0, r.jsxs)("section", {
    className: o()(m.container, b),
    "aria-labelledby": O,
    children: [(0, r.jsx)(f.Z, {
      userId: t,
      headingId: O,
      widget: n,
      disableInteraction: g
    }), (0, r.jsxs)(a.y5, {
      children: [l, h && !x && !g && !j && (0, r.jsx)(p.Z, {
        userId: t,
        widgetType: n.type,
        widgetGames: n.games,
        onDismiss: () => y(true)
      })]
    })]
  })
}