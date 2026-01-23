/** Chunk was on web.js **/
/** chunk id: 730588, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk385612 = require("./385612.jsx"),
  Chunk128450 = require("./128450.jsx"),
  Chunk339984 = require("./339984.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk52506 = require("./52506.js");

function _(e) {
  let {
    showRemoveBannerButton: t,
    errors: n,
    onBannerChange: i,
    guildId: _,
    className: h,
    disabled: m = false,
    showPremiumIcon: g = true,
    isTryItOut: E = false,
    forcedDivider: y,
    withHighlight: b = false
  } = e, {
    newestAnalyticsLocation: O
  } = (0, l.Ay)(), v = b ? o.wLn : s.$n;
  return (0, r.jsx)(u.A, {
    className: h,
    title: f.intl.string(f.t.Vgdusv),
    showPremiumIcon: g,
    errors: n,
    disabled: m,
    forcedDivider: y,
    children: (0, r.jsxs)("div", {
      className: p.NC,
      children: [(0, r.jsx)(v, {
        className: a()({
          [p.yj]: b
        }),
        size: s.$n.Sizes.SMALL,
        onClick: () => (0, c.XD)({
          uploadType: d.HL.BANNER,
          analyticsSource: O,
          guildId: _,
          isTryItOut: E
        }),
        children: f.intl.string(f.t.N0bC3P)
      }), t && (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: p.DT,
        children: (0, r.jsx)(o.Button, {
          variant: "secondary",
          size: "sm",
          text: null != _ ? f.intl.string(f.t.jHlJNS) : f.intl.string(f.t.tT9n7D),
          onClick: () => i(null)
        })
      })]
    })
  })
}