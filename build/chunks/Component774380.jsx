/** Chunk was on 384 **/
/** chunk id: 774380, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk98278 = require("./98278.js"),
  Chunk823188 = require("./823188.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk430666 = require("./430666.js");
let m = e => {
    let {
      onOpenPremiumClick: t
    } = e, n = (0, r.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: g.tier0Button,
      children: (0, r.jsx)(l.Button, {
        variant: "overlay-primary",
        size: "md",
        fullWidth: true,
        text: d.intl.string(d.t.hvVgAZ),
        onClick: () => {
          (0, a.z)(), null != t && t()
        }
      })
    });
    return (0, r.jsxs)("div", {
      className: g.tier0Container,
      children: [(0, r.jsx)(l.Heading, {
        className: g.tier0Heading,
        variant: "heading-xxl/extrabold",
        children: d.intl.string(d.t["qUl+K4"])
      }), (0, r.jsx)(s.wp, {
        className: g.tier0Card,
        ctaButton: n,
        featureSet: s.uZ.BOOSTING,
        showWumpus: true,
        showYearlyPrice: true
      })]
    })
  },
  p = e => {
    let {
      onOpenPremiumClick: t
    } = e, n = (0, i.e7)([o.default], () => o.default.getCurrentUser());
    return c.ZP.isPremium(n, u.PremiumTypes.TIER_2) ? null : (0, r.jsx)(m, {
      onOpenPremiumClick: t
    })
  }