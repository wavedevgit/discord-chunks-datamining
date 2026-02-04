/** Chunk was on 7685 **/
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
    showTooltip: p = true,
    shouldStopPropagation: I = true,
    className: m
  } = e, [E] = (0, r.bG)([u.A], () => u.A.isFavorite(t, n), [t, n], s.D), A = (0, c.t)({
    tab: t,
    targetId: n,
    shouldStopPropagation: I,
    widgetType: f
  }), y = E ? i.Gg5 : i.yA2, S = (0, i.rdh)(i.LU0.colors.ICON_FEEDBACK_WARNING), v = (0, i.rdh)(i.LU0.colors.ICON_DEFAULT), O = t === a.x.FRIENDS ? E ? g.intl.string(h.default.Xr8XHk) : g.intl.string(h.default.w1MU8Y) : E ? g.intl.string(h.default.dvUElD) : g.intl.string(h.default.iK1QsY);
  return (0, l.jsx)(o.S, {
    tooltipText: O,
    showTooltip: p,
    className: m,
    onClick: A,
    children: (0, l.jsx)(y, {
      size: "sm",
      color: E ? S.hex() : v.hex()
    })
  })
}