/** Chunk was on 27069 **/
/** chunk id: 750312, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => p
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

function p(e) {
  let {
    userId: t,
    widget: r,
    children: i,
    disableInteraction: p,
    className: O
  } = e, [m, j] = l.useState(false), y = (0, s.Dt)(), v = (0, c.e7)([u.default], () => u.default.getId() === t), x = (0, d.kQ)(r), h = l.useCallback(() => {
    j(true)
  }, []);
  return (0, n.jsxs)("section", {
    className: a()(g.container, O),
    "aria-labelledby": y,
    children: [(0, n.jsx)(f.Z, {
      userId: t,
      headingId: y,
      widget: r,
      disableInteraction: p
    }), (0, n.jsxs)(o.y5, {
      children: [i, v && !x && !p && !m && (0, n.jsx)(b.Z, {
        userId: t,
        widgetType: r.type,
        onDismiss: h
      })]
    })]
  })
}