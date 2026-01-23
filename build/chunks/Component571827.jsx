/** Chunk was on 92818 **/
/** chunk id: 571827, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk575593 = require("./575593.js"),
  Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk404374 = require("./404374.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk682655 = require("./682655.js");

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function p(e) {
  let {
    itemType: t,
    onClose: p
  } = e, {
    newestAnalyticsLocation: m
  } = (0, s.Ay)(), f = t === l.R.AVATAR_DECORATION ? c.e.AVATAR_DECORATION_MODAL_UPSELL : t === l.R.PROFILE_EFFECT ? c.e.PROFILE_EFFECT_MODAL_UPSELL : t === l.R.NAMEPLATE ? c.e.NAMEPLATE_MODAL_UPSELL : null;
  return null == f ? null : (0, r.jsxs)("div", {
    className: u.hc,
    children: [(0, r.jsx)(i.tvc, {
      className: u.ax,
      size: "md",
      color: o.k0.PREMIUM_TIER_2
    }), (0, r.jsx)(i.Text, {
      className: u.cf,
      variant: "text-md/medium",
      children: f === c.e.AVATAR_DECORATION_MODAL_UPSELL ? a.intl.format(a.t["aFR/EI"], {
        onClick: () => {
          (0, i.mMO)(async () => {
            let {
              default: e
            } = await n.e("64864").then(n.bind(n, 948265));
            return t => (0, r.jsx)(e, d({
              premiumUpsellType: f,
              title: a.intl.string(a.t.JI7uhc),
              body: a.intl.string(a.t["5XvsdZ"]),
              glowUp: a.intl.string(a.t["5XvsdZ"]),
              analyticsSource: m,
              onSecondaryClick: p
            }, t))
          })
        }
      }) : f === c.e.PROFILE_EFFECT_MODAL_UPSELL ? a.intl.format(a.t.eWNONM, {
        onClick: () => {
          (0, i.mMO)(async () => {
            let {
              default: e
            } = await n.e("64864").then(n.bind(n, 948265));
            return t => (0, r.jsx)(e, d({
              premiumUpsellType: f,
              title: a.intl.string(a.t.sYm15X),
              body: a.intl.string(a.t["Hza+Bu"]),
              glowUp: a.intl.string(a.t["Hza+Bu"]),
              analyticsSource: m,
              onSecondaryClick: p
            }, t))
          })
        }
      }) : f === c.e.NAMEPLATE_MODAL_UPSELL ? a.intl.format(a.t.G6b8TF, {
        onClick: () => {
          (0, i.mMO)(async () => {
            let {
              default: e
            } = await n.e("64864").then(n.bind(n, 948265));
            return t => (0, r.jsx)(e, d({
              premiumUpsellType: f,
              title: a.intl.string(a.t.k7UN4k),
              body: a.intl.string(a.t["0/QPxO"]),
              glowUp: a.intl.string(a.t["0/QPxO"]),
              analyticsSource: m,
              onSecondaryClick: p
            }, t))
          })
        }
      }) : true
    })]
  })
}