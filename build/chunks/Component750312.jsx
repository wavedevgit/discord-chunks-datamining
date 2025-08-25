/** Chunk was on 21585 **/
/** chunk id: 750312, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
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
    children: l,
    disableInteraction: b,
    className: p
  } = e, m = (0, c.Dt)(), O = (0, o.e7)([s.default], () => s.default.getId() === t), {
    shouldShowSuggestions: j,
    handleDismissSuggestions: y
  } = (0, u.h)(r);
  return (0, n.jsxs)("section", {
    className: i()(g.container, p),
    "aria-labelledby": m,
    children: [(0, n.jsx)(d.Z, {
      userId: t,
      headingId: m,
      widget: r,
      disableInteraction: b
    }), (0, n.jsxs)(a.y5, {
      children: [l, O && !b && j && (0, n.jsx)(f.Z, {
        userId: t,
        widgetType: r.type,
        onDismiss: y,
        className: g.suggestedGames
      })]
    })]
  })
}