/** Chunk was on 93210 **/
/** chunk id: 269982, original params: e,t,n (module,exports,require) **/
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
  Chunk178368 = require("./178368.js");

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
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
  } = (0, a.ZP)(), h = t.type === r.Z.AVATAR_DECORATION ? o.cd.AVATAR_DECORATION_MODAL_UPSELL : t.type === r.Z.PROFILE_EFFECT ? o.cd.PROFILE_EFFECT_MODAL_UPSELL : t.type === r.Z.NAMEPLATE ? o.cd.NAMEPLATE_MODAL_UPSELL : null;
  return null == h ? null : (0, i.jsxs)("div", {
    className: d.nitroUpsellContainer,
    children: [(0, i.jsx)(l.SrA, {
      className: d.nitroWheel,
      size: "md",
      color: s.JX.PREMIUM_TIER_2
    }), (0, i.jsx)(l.Text, {
      className: d.nitroText,
      variant: "text-md/medium",
      children: h === o.cd.AVATAR_DECORATION_MODAL_UPSELL ? c.intl.format(c.t["aFR/EI"], {
        onClick: () => {
          (0, l.ZDy)(async () => {
            let {
              default: e
            } = await n.e("43360").then(n.bind(n, 73415));
            return t => (0, i.jsx)(e, u({
              premiumUpsellType: h,
              title: c.intl.string(c.t.JI7uhc),
              body: c.intl.string(c.t["5XvsdZ"]),
              glowUp: c.intl.string(c.t["5XvsdZ"]),
              analyticsSource: _,
              onSecondaryClick: p
            }, t))
          })
        }
      }) : h === o.cd.PROFILE_EFFECT_MODAL_UPSELL ? c.intl.format(c.t.eWNONM, {
        onClick: () => {
          (0, l.ZDy)(async () => {
            let {
              default: e
            } = await n.e("43360").then(n.bind(n, 73415));
            return t => (0, i.jsx)(e, u({
              premiumUpsellType: h,
              title: c.intl.string(c.t.sYm15X),
              body: c.intl.string(c.t["Hza+Bu"]),
              glowUp: c.intl.string(c.t["Hza+Bu"]),
              analyticsSource: _,
              onSecondaryClick: p
            }, t))
          })
        }
      }) : h === o.cd.NAMEPLATE_MODAL_UPSELL ? c.intl.format(c.t.G6b8TF, {
        onClick: () => {
          (0, l.ZDy)(async () => {
            let {
              default: e
            } = await n.e("43360").then(n.bind(n, 73415));
            return t => (0, i.jsx)(e, u({
              premiumUpsellType: h,
              title: c.intl.string(c.t.k7UN4k),
              body: c.intl.string(c.t["0/QPxO"]),
              glowUp: c.intl.string(c.t["0/QPxO"]),
              analyticsSource: _,
              onSecondaryClick: p
            }, t))
          })
        }
      }) : true
    })]
  })
}