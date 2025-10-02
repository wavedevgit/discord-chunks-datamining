/** Chunk was on 88614 **/
/** chunk id: 269982, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk979554 = require("./979554.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk436774 = require("./436774.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk106867 = require("./106867.js");

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function p(e) {
  let {
    product: t,
    onClose: p
  } = e, {
    newestAnalyticsLocation: _
  } = (0, l.ZP)(), m = t.type === i.Z.AVATAR_DECORATION ? s.cd.AVATAR_DECORATION_MODAL_UPSELL : t.type === i.Z.PROFILE_EFFECT ? s.cd.PROFILE_EFFECT_MODAL_UPSELL : t.type === i.Z.NAMEPLATE ? s.cd.NAMEPLATE_MODAL_UPSELL : null;
  return null == m ? null : (0, n.jsxs)("div", {
    className: d.nitroUpsellContainer,
    children: [(0, n.jsx)(a.SrA, {
      className: d.nitroWheel,
      size: "md",
      color: o.JX.PREMIUM_TIER_2
    }), (0, n.jsx)(a.Text, {
      className: d.nitroText,
      variant: "text-md/medium",
      children: m === s.cd.AVATAR_DECORATION_MODAL_UPSELL ? c.intl.format(c.t["aFR/EB"], {
        onClick: () => {
          (0, a.ZDy)(async () => {
            let {
              default: e
            } = await r.e("43360").then(r.bind(r, 73415));
            return t => (0, n.jsx)(e, u({
              premiumUpsellType: m,
              title: c.intl.string(c.t.JI7uhY),
              body: c.intl.string(c.t["5XvsdX"]),
              glowUp: c.intl.string(c.t["5XvsdX"]),
              analyticsSource: _,
              onSecondaryClick: p
            }, t))
          })
        }
      }) : m === s.cd.PROFILE_EFFECT_MODAL_UPSELL ? c.intl.format(c.t.eWNOND, {
        onClick: () => {
          (0, a.ZDy)(async () => {
            let {
              default: e
            } = await r.e("43360").then(r.bind(r, 73415));
            return t => (0, n.jsx)(e, u({
              premiumUpsellType: m,
              title: c.intl.string(c.t.sYm15e),
              body: c.intl.string(c.t["Hza+Bg"]),
              glowUp: c.intl.string(c.t["Hza+Bg"]),
              analyticsSource: _,
              onSecondaryClick: p
            }, t))
          })
        }
      }) : m === s.cd.NAMEPLATE_MODAL_UPSELL ? c.intl.format(c.t.G6b8TE, {
        onClick: () => {
          (0, a.ZDy)(async () => {
            let {
              default: e
            } = await r.e("43360").then(r.bind(r, 73415));
            return t => (0, n.jsx)(e, u({
              premiumUpsellType: m,
              title: c.intl.string(c.t.k7UN4u),
              body: c.intl.string(c.t["0/QPxM"]),
              glowUp: c.intl.string(c.t["0/QPxM"]),
              analyticsSource: _,
              onSecondaryClick: p
            }, t))
          })
        }
      }) : true
    })]
  })
}