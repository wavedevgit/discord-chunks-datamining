/** Chunk was on web.js **/
/** chunk id: 656229, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk222062 = require("./222062.js"),
  Chunk867176 = require("./867176.jsx"),
  Chunk654904 = require("./654904.jsx"),
  Chunk486324 = require("./486324.js"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk579534 = require("./579534.js");

function p(e) {
  let {
    user: t,
    displayProfile: n,
    guildId: p,
    canUsePremiumCustomization: _,
    pendingBanner: m,
    pendingAccentColor: h,
    isTryItOut: g,
    disabledInputs: E,
    onUpsellClick: b
  } = e, {
    newestAnalyticsLocation: y
  } = (0, a.ZP)(), O = _ || (null == n ? true : n.canUsePremiumProfileCustomization) || false, v = O ? i.vdY : i.SrA, S = (0, o.M)(O), I = () => {
    if (!O && !S) {
      null == b || b();
      return
    }(0, l.$r)({
      uploadType: c.pC.BANNER,
      analyticsSource: y,
      guildId: p,
      isTryItOut: g
    })
  };
  return (0, r.jsx)(s.Z, {
    user: t,
    displayProfile: n,
    guildId: p,
    themeType: u.l.POPOUT,
    pendingBanner: m,
    pendingAccentColor: h,
    canUsePremiumProfileCustomization: _,
    children: !E && (0, r.jsxs)(i.P3F, {
      onClick: I,
      className: f.clickable,
      children: [(0, r.jsx)(v, {
        size: "xs",
        color: "white"
      }), (0, r.jsx)(i.Heading, {
        variant: "text-sm/medium",
        color: "always-white",
        children: O || S ? d.intl.string(d.t.N0bC3P) : d.intl.string(d.t.O1sT5v)
      })]
    })
  })
}