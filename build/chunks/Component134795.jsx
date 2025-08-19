/** Chunk was on 66181 **/
/** chunk id: 134795, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk654904 = require("./654904.jsx"),
  Chunk993413 = require("./993413.jsx"),
  Chunk486324 = require("./486324.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk808639 = require("./808639.js");

function g(e) {
  let {
    showRemoveBannerButton: t,
    errors: n,
    onBannerChange: r,
    guildId: g,
    className: h,
    disabled: f = false,
    showPremiumIcon: b = true,
    isTryItOutFlow: x = false,
    forcedDivider: _,
    withHighlight: j = false
  } = e, {
    newestAnalyticsLocation: E
  } = (0, o.ZP)(), C = j ? l.gtL : a.zx;
  return (0, i.jsx)(d.Z, {
    className: h,
    title: m.intl.string(m.t.Vgdusr),
    showPremiumIcon: b,
    errors: n,
    disabled: f,
    forcedDivider: _,
    children: (0, i.jsxs)("div", {
      className: p.buttonsContainer,
      children: [(0, i.jsx)(C, {
        className: s()({
          [p.buttonHighlighted]: j
        }),
        size: a.zx.Sizes.SMALL,
        onClick: () => (0, c.$r)({
          uploadType: u.pC.BANNER,
          analyticsSource: E,
          guildId: g,
          isTryItOutFlow: x
        }),
        children: m.intl.string(m.t.N0bC3N)
      }), t && (0, i.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: p.removeButton,
        children: (0, i.jsx)(l.zxk, {
          variant: "secondary",
          size: "sm",
          text: null != g ? m.intl.string(m.t.jHlJNT) : m.intl.string(m.t.tT9n7O),
          onClick: () => r(null)
        })
      })]
    })
  })
}