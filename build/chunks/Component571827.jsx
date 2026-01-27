/** Chunk was on 92818 **/
/** chunk id: 571827, original params: e,t,r (module,exports,require) **/
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
    itemType: t,
    onClose: p
  } = e, {
    newestAnalyticsLocation: f
  } = (0, s.Ay)(), m = t === l.R.AVATAR_DECORATION ? c.e.AVATAR_DECORATION_MODAL_UPSELL : t === l.R.PROFILE_EFFECT ? c.e.PROFILE_EFFECT_MODAL_UPSELL : t === l.R.NAMEPLATE ? c.e.NAMEPLATE_MODAL_UPSELL : null;
  return null == m ? null : (0, n.jsxs)("div", {
    className: u.hc,
    children: [(0, n.jsx)(i.tvc, {
      className: u.ax,
      size: "md",
      color: o.k0.PREMIUM_TIER_2
    }), (0, n.jsx)(i.Text, {
      className: u.cf,
      variant: "text-md/medium",
      children: m === c.e.AVATAR_DECORATION_MODAL_UPSELL ? a.intl.format(a.t["aFR/EI"], {
        onClick: () => {
          (0, i.mMO)(async () => {
            let {
              default: e
            } = await r.e("64864").then(r.bind(r, 948265));
            return t => (0, n.jsx)(e, d({
              premiumUpsellType: m,
              title: a.intl.string(a.t.JI7uhc),
              body: a.intl.string(a.t["5XvsdZ"]),
              glowUp: a.intl.string(a.t["5XvsdZ"]),
              analyticsSource: f,
              onSecondaryClick: p
            }, t))
          })
        }
      }) : m === c.e.PROFILE_EFFECT_MODAL_UPSELL ? a.intl.format(a.t.eWNONM, {
        onClick: () => {
          (0, i.mMO)(async () => {
            let {
              default: e
            } = await r.e("64864").then(r.bind(r, 948265));
            return t => (0, n.jsx)(e, d({
              premiumUpsellType: m,
              title: a.intl.string(a.t.sYm15X),
              body: a.intl.string(a.t["Hza+Bu"]),
              glowUp: a.intl.string(a.t["Hza+Bu"]),
              analyticsSource: f,
              onSecondaryClick: p
            }, t))
          })
        }
      }) : m === c.e.NAMEPLATE_MODAL_UPSELL ? a.intl.format(a.t.G6b8TF, {
        onClick: () => {
          (0, i.mMO)(async () => {
            let {
              default: e
            } = await r.e("64864").then(r.bind(r, 948265));
            return t => (0, n.jsx)(e, d({
              premiumUpsellType: m,
              title: a.intl.string(a.t.k7UN4k),
              body: a.intl.string(a.t["0/QPxO"]),
              glowUp: a.intl.string(a.t["0/QPxO"]),
              analyticsSource: f,
              onSecondaryClick: p
            }, t))
          })
        }
      }) : true
    })]
  })
}