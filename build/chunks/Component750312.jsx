/** Chunk was on 27069 **/
/** chunk id: 750312, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk313201 = require("./313201.js"),
  Chunk314897 = require("./314897.js"),
  Chunk556045 = require("./556045.js"),
  Chunk840367 = require("./840367.jsx"),
  Chunk272289 = require("./272289.jsx"),
  Chunk415734 = require("./415734.js");

function b(e) {
  let {
    userId: t,
    widget: r,
    children: i,
    disableInteraction: b,
    className: p
  } = e, O = (0, c.Dt)(), m = (0, o.e7)([s.default], () => s.default.getId() === t), {
    shouldShowSuggestions: j,
    handleDismissSuggestions: y
  } = (0, u.h)(r);
  return (0, n.jsxs)("section", {
    className: l()(g.container, p),
    "aria-labelledby": O,
    children: [(0, n.jsx)(d.Z, {
      userId: t,
      headingId: O,
      widget: r,
      disableInteraction: b
    }), (0, n.jsxs)(a.y5, {
      children: [i, m && !b && j && (0, n.jsx)(f.Z, {
        userId: t,
        widgetType: r.type,
        onDismiss: y
      })]
    })]
  })
}