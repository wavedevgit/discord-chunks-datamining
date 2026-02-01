/** Chunk was on 71447 **/
/** chunk id: 578093, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  j: () => y
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk996439 = require("./996439.js"),
  Chunk914853 = require("./914853.js"),
  Chunk406595 = require("./406595.js"),
  Chunk74395 = require("./74395.js"),
  Chunk652215 = require("./652215.js"),
  Chunk895867 = require("./895867.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk168389 = require("./168389.js");

function y(e) {
  let {
    tab: t,
    targetId: n,
    widgetType: r = p.uss.FRIENDS,
    showTooltip: y = true,
    shouldStopPropagation: A = true,
    className: v
  } = e, [b] = (0, a.bG)([d.A], () => d.A.isFavorite(t, n), [t, n], u.D), E = (0, h.t)({
    tab: t,
    targetId: n,
    shouldStopPropagation: A,
    widgetType: r
  }), O = b ? o.Gg5 : o.yA2, x = (0, o.rdh)(o.LU0.colors.ICON_FEEDBACK_WARNING), _ = (0, o.rdh)(o.LU0.colors.ICON_DEFAULT), S = t === c.x.FRIENDS ? b ? g.intl.string(f.default.Xr8XHk) : g.intl.string(f.default.w1MU8Y) : b ? g.intl.string(f.default.dvUElD) : g.intl.string(f.default.iK1QsY);
  return y ? (0, i.jsx)(s.m_, {
    text: S,
    "aria-label": S,
    children: (0, i.jsx)(o.DUT, {
      className: l()(m.$r, v),
      "aria-label": S,
      onClick: E,
      role: "button",
      children: (0, i.jsx)(O, {
        size: "sm",
        color: b ? x.hex() : _.hex()
      })
    })
  }) : (0, i.jsx)(o.DUT, {
    className: l()(m.$r, v),
    "aria-label": S,
    onClick: E,
    role: "button",
    children: (0, i.jsx)(O, {
      size: "sm",
      color: b ? x.hex() : _.hex()
    })
  })
}