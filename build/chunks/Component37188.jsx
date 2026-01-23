/** Chunk was on web.js **/
/** chunk id: 37188, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk702211 = require("./702211.js"),
  Chunk915614 = require("./915614.jsx"),
  Chunk385612 = require("./385612.jsx"),
  Chunk339984 = require("./339984.js"),
  Chunk996988 = require("./996988.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk560754 = require("./560754.js");

function p(e) {
  let {
    user: t,
    displayProfile: n,
    guildId: p,
    canUsePremiumCustomization: _,
    pendingBanner: h,
    pendingAccentColor: m,
    isTryItOut: g,
    disabledInputs: E,
    onUpsellClick: y
  } = e, {
    newestAnalyticsLocation: b
  } = (0, a.Ay)(), O = _ || (null == n ? true : n.canUsePremiumProfileCustomization) || false, v = O ? i.R2l : i.tvc, A = (0, s.b)(O), I = () => {
    if (!O && !A) {
      null == y || y();
      return
    }(0, l.XD)({
      uploadType: c.HL.BANNER,
      analyticsSource: b,
      guildId: p,
      isTryItOut: g
    })
  };
  return (0, r.jsx)(o.A, {
    user: t,
    displayProfile: n,
    guildId: p,
    themeType: u.d.POPOUT,
    pendingBanner: h,
    pendingAccentColor: m,
    canUsePremiumProfileCustomization: _,
    children: !E && (0, r.jsxs)(i.DUT, {
      onClick: I,
      className: f.v,
      children: [(0, r.jsx)(v, {
        size: "xs",
        color: "white"
      }), (0, r.jsx)(i.Heading, {
        variant: "text-sm/medium",
        color: "always-white",
        children: O || A ? d.intl.string(d.t.N0bC3P) : d.intl.string(d.t.O1sT5v)
      })]
    })
  })
}