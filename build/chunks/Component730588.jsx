/** Chunk was on 9207 **/
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
    disabled: A = false,
    showPremiumIcon: f = true,
    isTryItOut: b = false,
    forcedDivider: h,
    withHighlight: E = false
  } = e, {
    newestAnalyticsLocation: O
  } = (0, o.Ay)(), x = E ? a.wLn : s.$n;
  return (0, r.jsx)(d.A, {
    className: g,
    title: _.intl.string(_.t.Vgdusv),
    showPremiumIcon: f,
    errors: n,
    disabled: A,
    forcedDivider: h,
    children: (0, r.jsxs)("div", {
      className: p.NC,
      children: [(0, r.jsx)(x, {
        className: l()({
          [p.yj]: E
        }),
        size: s.$n.Sizes.SMALL,
        onClick: () => (0, c.XD)({
          uploadType: u.HL.BANNER,
          analyticsSource: O,
          guildId: m,
          isTryItOut: b
        }),
        children: _.intl.string(_.t.N0bC3P)
      }), t && (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: p.DT,
        children: (0, r.jsx)(a.Button, {
          variant: "secondary",
          size: "sm",
          text: null != m ? _.intl.string(_.t.jHlJNS) : _.intl.string(_.t.tT9n7D),
          onClick: () => i(null)
        })
      })]
    })
  })
}