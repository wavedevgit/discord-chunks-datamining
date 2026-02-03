/** Chunk was on 71447 **/
/** chunk id: 578093, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  j: () => f
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk996439 = require("./996439.js"),
  Chunk914853 = require("./914853.js"),
  Chunk676923 = require("./676923.jsx"),
  Chunk406595 = require("./406595.js"),
  Chunk74395 = require("./74395.js"),
  Chunk652215 = require("./652215.js"),
  Chunk895867 = require("./895867.js"),
  Chunk985018 = require("./985018.jsx");

function f(e) {
  let {
    tab: t,
    targetId: n,
    widgetType: f = d.uss.FRIENDS,
    showTooltip: g = true,
    shouldStopPropagation: m = true,
    className: y
  } = e, [A] = (0, r.bG)([u.A], () => u.A.isFavorite(t, n), [t, n], a.D), v = (0, c.t)({
    tab: t,
    targetId: n,
    shouldStopPropagation: m,
    widgetType: f
  }), b = A ? l.Gg5 : l.yA2, E = (0, l.rdh)(l.LU0.colors.ICON_FEEDBACK_WARNING), O = (0, l.rdh)(l.LU0.colors.ICON_DEFAULT), x = t === s.x.FRIENDS ? A ? p.intl.string(h.default.Xr8XHk) : p.intl.string(h.default.w1MU8Y) : A ? p.intl.string(h.default.dvUElD) : p.intl.string(h.default.iK1QsY);
  return (0, i.jsx)(o.S, {
    tooltipText: x,
    showTooltip: g,
    className: y,
    onClick: v,
    children: (0, i.jsx)(b, {
      size: "sm",
      color: A ? E.hex() : O.hex()
    })
  })
}