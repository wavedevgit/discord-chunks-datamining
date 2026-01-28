/** Chunk was on 5606 **/
/** chunk id: 730588, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk385612 = require("./385612.jsx"),
  Chunk128450 = require("./128450.jsx"),
  Chunk339984 = require("./339984.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk52506 = require("./52506.js");

function m(e) {
  let {
    showRemoveBannerButton: t,
    errors: n,
    onBannerChange: i,
    guildId: m,
    className: g,
    disabled: f = false,
    showPremiumIcon: b = true,
    isTryItOut: h = false,
    forcedDivider: A,
    withHighlight: E = false
  } = e, {
    newestAnalyticsLocation: x
  } = (0, o.Ay)(), O = E ? a.wLn : s.$n;
  return (0, r.jsx)(d.A, {
    className: g,
    title: p.intl.string(p.t.Vgdusv),
    showPremiumIcon: b,
    errors: n,
    disabled: f,
    forcedDivider: A,
    children: (0, r.jsxs)("div", {
      className: _.NC,
      children: [(0, r.jsx)(O, {
        className: l()({
          [_.yj]: E
        }),
        size: s.$n.Sizes.SMALL,
        onClick: () => (0, c.XD)({
          uploadType: u.HL.BANNER,
          analyticsSource: x,
          guildId: m,
          isTryItOut: h
        }),
        children: p.intl.string(p.t.N0bC3P)
      }), t && (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: _.DT,
        children: (0, r.jsx)(a.Button, {
          variant: "secondary",
          size: "sm",
          text: null != m ? p.intl.string(p.t.jHlJNS) : p.intl.string(p.t.tT9n7D),
          onClick: () => i(null)
        })
      })]
    })
  })
}