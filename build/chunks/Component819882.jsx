/** Chunk was on 45620 **/
/** chunk id: 819882, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => C
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk994587 = require("./994587.jsx"),
  Chunk680942 = require("./680942.jsx"),
  Chunk786040 = require("./786040.jsx"),
  Chunk58201 = require("./58201.js"),
  Chunk694364 = require("./694364.js"),
  Chunk215023 = require("./215023.js"),
  Chunk388032 = require("./388032.jsx");
let p = e => {
    let {
      product: t,
      selectedVariantIndex: n,
      cardRef: u,
      onClick: p,
      icon: C,
      prioritizedCurrency: h,
      onClickAnalytics: _
    } = e, m = (0, s.Nd)(), b = null == m ? true : m.tab, v = (0, o.sp)(), E = (0, d.J)(t, h), O = (0, c.J7)(t, i.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, _);
    return null != p || null != C ? (0, r.jsx)(l.hU, {
      variant: "primary",
      "aria-label": f.intl.string(f.t.SKNnqq),
      icon: null != C ? C : l.tEF,
      onClick: e => {
        e.stopPropagation(), null != p ? p(t.skuId) : O(e)
      }
    }) : E ? (0, r.jsx)(o.k0, {
      newValue: {
        pageCategory: b === g.AW.HOME || null == v ? true : v.pageCategory
      },
      children: (0, r.jsx)(a.Z, {
        primary: true,
        product: t,
        selectedVariantIndex: n,
        returnRef: u,
        tooltipDelay: 250
      })
    }) : null
  },
  C = e => {
    let {
      skuId: t,
      cardRef: n,
      selectedVariantIndex: l,
      onClick: i,
      icon: o,
      prioritizedCurrency: s,
      onClickAnalytics: a
    } = e, d = (0, c.LJ)(t);
    if (null == d) return null;
    let g = (0, u.W)(d, l);
    return (0, r.jsx)(p, {
      product: g,
      cardRef: n,
      selectedVariantIndex: l,
      onClick: i,
      icon: o,
      prioritizedCurrency: s,
      onClickAnalytics: a
    })
  }