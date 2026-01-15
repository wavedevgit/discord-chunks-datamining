/** Chunk was on web.js **/
/** chunk id: 134795, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk654904 = require("./654904.jsx"),
  Chunk993413 = require("./993413.jsx"),
  Chunk486324 = require("./486324.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk154626 = require("./154626.js");

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
    forcedDivider: b,
    withHighlight: y = false
  } = e, {
    newestAnalyticsLocation: O
  } = (0, l.ZP)(), v = y ? s.gtL : o.zx;
  return (0, r.jsx)(u.Z, {
    className: h,
    title: f.intl.string(f.t.Vgdusv),
    showPremiumIcon: g,
    errors: n,
    disabled: m,
    forcedDivider: b,
    children: (0, r.jsxs)("div", {
      className: p.buttonsContainer,
      children: [(0, r.jsx)(v, {
        className: a()({
          [p.buttonHighlighted]: y
        }),
        size: o.zx.Sizes.SMALL,
        onClick: () => (0, c.$r)({
          uploadType: d.pC.BANNER,
          analyticsSource: O,
          guildId: _,
          isTryItOut: E
        }),
        children: f.intl.string(f.t.N0bC3P)
      }), t && (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: p.removeButton,
        children: (0, r.jsx)(s.Button, {
          variant: "secondary",
          size: "sm",
          text: null != _ ? f.intl.string(f.t.jHlJNS) : f.intl.string(f.t.tT9n7D),
          onClick: () => i(null)
        })
      })]
    })
  })
}