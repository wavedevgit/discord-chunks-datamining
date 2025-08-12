/** Chunk was on 55183 **/
/** chunk id: 934261, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => Z
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk597688 = require("./597688.js"),
  Chunk884697 = require("./884697.js"),
  Chunk905357 = require("./905357.js"),
  Chunk95422 = require("./95422.js"),
  Chunk778825 = require("./778825.js"),
  Chunk957730 = require("./957730.js"),
  Chunk222062 = require("./222062.js"),
  Chunk678135 = require("./678135.jsx"),
  Chunk643879 = require("./643879.js"),
  Chunk350327 = require("./350327.js"),
  Chunk687158 = require("./687158.js"),
  Chunk706454 = require("./706454.js"),
  Chunk695346 = require("./695346.js"),
  Chunk265159 = require("./265159.jsx"),
  Chunk25990 = require("./25990.js"),
  Chunk594174 = require("./594174.js"),
  Chunk55935 = require("./55935.js"),
  Chunk74538 = require("./74538.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk145003 = require("./145003.js");

function C(e) {
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
let I = e => {
    let {
      effectIsOwned: t,
      pendingProfileEffectRecord: r,
      product: d,
      purchase: f
    } = e, m = (0, l.e7)([v.default], () => v.default.getCurrentUser()), g = (0, l.e7)([s.Z], () => s.Z.getProduct(null == r ? true : r.skuId)), h = (0, l.e7)([j.default], () => j.default.locale), b = E.ZP.canUseCollectibles(m), y = (0, c.qS)(f), x = (0, c.G1)(d), O = !b && y, C = (null == f ? true : f.expiresAt) != null ? (0, P.TD)(Date.now(), f.expiresAt) : null, I = (0, u.a)(f), Z = (0, a.k)(g), N = (0, p.M)(!x || b), D = w(O, x, b, N);
    return null != r ? (0, n.jsx)("div", {
      className: t ? S.effectDescriptionNoGradient : S.effectDescriptionBorderWithGradient,
      children: (0, n.jsxs)("div", {
        className: S.effectDescriptionContainer,
        children: [(0, n.jsx)(o.Text, {
          color: "header-primary",
          variant: "text-sm/semibold",
          className: S.effectName,
          children: (0, i.isEmpty)(I) ? Z : I
        }), null != f ? null : (0, n.jsx)(o.Text, {
          color: "text-default",
          variant: "text-sm/normal",
          className: S.effectDescription,
          children: D
        }), null != C && (0, n.jsx)(o.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          className: S.effectPurchasedAt,
          children: _.intl.format(_.t.Io7ozs, {
            days: C.days.toString()
          })
        }), null != f && (0, n.jsxs)(o.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          className: S.effectPurchasedAt,
          children: [_.intl.format(_.t.gW9R4O, {
            date: f.purchasedAt.toLocaleDateString(h, {
              month: "long",
              year: "numeric"
            })
          }), null != f.expiresAt && (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)("br", {}), _.intl.format(_.t.eZSTa2, {
              date: f.expiresAt.toLocaleDateString(h, {
                minute: "numeric",
                hour: "numeric",
                day: "numeric",
                month: "long",
                year: "numeric"
              })
            })]
          })]
        }), y && (0, n.jsx)(o.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          className: S.effectPurchasedAt,
          children: _.intl.string(_.t.nKdAlJ)
        })]
      })
    }) : null
  },
  w = (e, t, r, n) => e ? _.intl.string(_.t["1UPza2"]) : t && r ? _.intl.string(_.t.hmyYKy) : t && !r ? n ? _.intl.string(_.t.meldu7) : _.intl.string(_.t.JtAKws) : _.intl.string(_.t.fEGjVV),
  Z = e => {
    var t, r, i;
    let {
      user: o,
      pendingProfileEffectRecord: s,
      canApplySelectedChange: c,
      product: a,
      purchase: u,
      guild: p
    } = e, {
      pendingGlobalName: j,
      pendingNickname: v,
      pendingPronouns: P,
      pendingBio: _,
      pendingBanner: w,
      pendingAvatar: Z,
      pendingAvatarDecoration: N,
      pendingThemeColors: D,
      pendingAccentColor: k
    } = (0, l.cj)([d.Z, O.Z], () => C({
      pendingNickname: true,
      pendingGlobalName: true,
      pendingAccentColor: true
    }, null != p ? d.Z.getAllPending() : O.Z.getAllPending())), A = E.ZP.isPremium(o), T = E.ZP.canUsePremiumProfileCustomization(o), G = (0, b.ZP)(o.id), R = !!(null == G ? true : G.getPreviewBio(_).value), U = {
      user: o,
      guild: p,
      pendingGlobalName: j,
      pendingNickname: v,
      pendingPronouns: P,
      pendingBio: y.dN.useSetting() && null != _ ? f.ZP.parse(true, _).content : _,
      pendingBanner: w,
      useLargeBanner: true,
      pendingAvatar: (0, g.SD)({
        userId: o.id,
        image: Z
      }),
      pendingAvatarDecoration: N,
      pendingThemeColors: D,
      pendingAccentColor: k,
      pendingProfileEffectId: null != (t = null == s ? true : s.id) ? t : null,
      hideFakeActivity: R,
      canUsePremiumCustomization: T,
      onUpsellClick: x.Z,
      onBannerChange: h.g_
    };
    return (0, n.jsxs)("div", {
      className: S.previewContainer,
      children: [(0, n.jsx)(m.Z, (r = C({}, U), i = i = {
        disabledInputs: true,
        hideCustomStatus: true
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
      }), r)), false, (0, n.jsx)(I, {
        effectIsOwned: c,
        pendingProfileEffectRecord: s,
        product: a,
        purchase: u,
        userIsPremium: A
      })]
    })
  }