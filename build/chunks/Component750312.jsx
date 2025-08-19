/** Chunk was on 27069 **/
/** chunk id: 750312, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk313201 = require("./313201.js"),
  Chunk314897 = require("./314897.js"),
  Chunk86419 = require("./86419.js"),
  Chunk840367 = require("./840367.jsx"),
  Chunk272289 = require("./272289.jsx"),
  Chunk415734 = require("./415734.js");

function b(e) {
  let {
    userId: t,
    widget: r,
    children: i,
    disableInteraction: b,
    className: O
  } = e, [m, y] = l.useState(false), j = (0, s.Dt)(), v = (0, c.e7)([u.default], () => u.default.getId() === t), x = (0, d.kQ)(r), h = l.useCallback(() => {
    y(true)
  }, []);
  return (0, n.jsxs)("section", {
    className: a()(p.container, O),
    "aria-labelledby": j,
    children: [(0, n.jsx)(f.Z, {
      userId: t,
      headingId: j,
      widget: r,
      disableInteraction: b
    }), (0, n.jsxs)(o.y5, {
      children: [i, v && !x && !b && !m && (0, n.jsx)(g.Z, {
        userId: t,
        widgetType: r.type,
        onDismiss: h
      })]
    })]
  })
}