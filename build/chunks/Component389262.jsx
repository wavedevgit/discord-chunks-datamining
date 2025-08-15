/** Chunk was on 18879 **/
/** chunk id: 389262, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  default: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk758590 = require("./758590.js"),
  Chunk365627 = require("./365627.js");

function d(t) {
  let {
    transitionState: e,
    onClose: i,
    storeListing: d,
    subscription: u
  } = t, m = (0, s.Dt)();
  return (0, n.jsxs)(a.Y0X, {
    transitionState: e,
    "aria-labelledby": m,
    parentComponent: "SubscriptionRestartedModal",
    children: [(0, n.jsxs)(a.hzk, {
      className: o.contentContainer,
      children: [(0, n.jsx)("img", {
        src: c,
        alt: ""
      }), (0, n.jsx)(a.X6q, {
        className: o.title,
        variant: "heading-xl/bold",
        color: "header-primary",
        id: m,
        children: l.intl.format(l.t["wLFT6+"], {
          tier: d.summary
        })
      }), (0, n.jsx)(a.Text, {
        className: o.subtitle,
        variant: "text-md/medium",
        color: "header-secondary",
        children: l.intl.format(l.t.OsAK9v, {
          timestamp: null == u ? true : u.currentPeriodEnd
        })
      })]
    }), (0, n.jsx)(a.mzw, {
      children: (0, n.jsx)(r.zx, {
        size: r.zx.Sizes.MEDIUM,
        grow: false,
        onClick: i,
        children: l.intl.string(l.t["JtWl+f"])
      })
    })]
  })
}