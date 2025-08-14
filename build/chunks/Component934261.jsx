/** Chunk was on 55183 **/
/** chunk id: 934261, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => w
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk597688 = require("./597688.js"),
  Chunk884697 = require("./884697.js"),
  Chunk29121 = require("./29121.js"),
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

function S(e) {
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
let C = e => {
    let {
      effectIsOwned: t,
      pendingProfileEffectRecord: r,
      product: u,
      purchase: d
    } = e, p = (0, l.e7)([O.default], () => O.default.getCurrentUser()), m = (0, l.e7)([s.Z], () => s.Z.getProduct(null == r ? true : r.skuId)), g = (0, l.e7)([b.default], () => b.default.locale), h = P.ZP.canUseCollectibles(p), j = (0, c.qS)(d), y = (0, c.G1)(u), x = !h && j, S = (null == d ? true : d.expiresAt) != null ? (0, v.TD)(Date.now(), d.expiresAt) : null, C = (0, a.ag)(d), w = (0, a.kd)(m), Z = (0, f.M)(!y || h), N = I(x, y, h, Z);
    return null != r ? (0, n.jsx)("div", {
      className: t ? E.effectDescriptionNoGradient : E.effectDescriptionBorderWithGradient,
      children: (0, n.jsxs)("div", {
        className: E.effectDescriptionContainer,
        children: [(0, n.jsx)(o.Text, {
          color: "header-primary",
          variant: "text-sm/semibold",
          className: E.effectName,
          children: (0, i.isEmpty)(C) ? w : C
        }), null != d ? null : (0, n.jsx)(o.Text, {
          color: "text-default",
          variant: "text-sm/normal",
          className: E.effectDescription,
          children: N
        }), null != S && (0, n.jsx)(o.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          className: E.effectPurchasedAt,
          children: _.intl.format(_.t.Io7ozs, {
            days: S.days.toString()
          })
        }), null != d && (0, n.jsxs)(o.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          className: E.effectPurchasedAt,
          children: [_.intl.format(_.t.gW9R4O, {
            date: d.purchasedAt.toLocaleDateString(g, {
              month: "long",
              year: "numeric"
            })
          }), null != d.expiresAt && (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)("br", {}), _.intl.format(_.t.eZSTa2, {
              date: d.expiresAt.toLocaleDateString(g, {
                minute: "numeric",
                hour: "numeric",
                day: "numeric",
                month: "long",
                year: "numeric"
              })
            })]
          })]
        }), j && (0, n.jsx)(o.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          className: E.effectPurchasedAt,
          children: _.intl.string(_.t.nKdAlJ)
        })]
      })
    }) : null
  },
  I = (e, t, r, n) => e ? _.intl.string(_.t["1UPza2"]) : t && r ? _.intl.string(_.t.hmyYKy) : t && !r ? n ? _.intl.string(_.t.meldu7) : _.intl.string(_.t.JtAKws) : _.intl.string(_.t.fEGjVV),
  w = e => {
    var t, r, i;
    let {
      user: o,
      pendingProfileEffectRecord: s,
      canApplySelectedChange: c,
      product: a,
      purchase: f,
      guild: b
    } = e, {
      pendingGlobalName: O,
      pendingNickname: v,
      pendingPronouns: _,
      pendingBio: I,
      pendingBanner: w,
      pendingAvatar: Z,
      pendingAvatarDecoration: N,
      pendingThemeColors: D,
      pendingAccentColor: k
    } = (0, l.cj)([u.Z, x.Z], () => S({
      pendingNickname: true,
      pendingGlobalName: true,
      pendingAccentColor: true
    }, null != b ? u.Z.getAllPending() : x.Z.getAllPending())), A = P.ZP.isPremium(o), T = P.ZP.canUsePremiumProfileCustomization(o), G = (0, h.ZP)(o.id), R = !!(null == G ? true : G.getPreviewBio(I).value), U = {
      user: o,
      guild: b,
      pendingGlobalName: O,
      pendingNickname: v,
      pendingPronouns: _,
      pendingBio: j.dN.useSetting() && null != I ? d.ZP.parse(true, I).content : I,
      pendingBanner: w,
      useLargeBanner: true,
      pendingAvatar: (0, m.SD)({
        userId: o.id,
        image: Z
      }),
      pendingAvatarDecoration: N,
      pendingThemeColors: D,
      pendingAccentColor: k,
      pendingProfileEffectId: null != (t = null == s ? true : s.id) ? t : null,
      hideFakeActivity: R,
      canUsePremiumCustomization: T,
      onUpsellClick: y.Z,
      onBannerChange: g.g_
    };
    return (0, n.jsxs)("div", {
      className: E.previewContainer,
      children: [(0, n.jsx)(p.Z, (r = S({}, U), i = i = {
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
      }), r)), false, (0, n.jsx)(C, {
        effectIsOwned: c,
        pendingProfileEffectRecord: s,
        product: a,
        purchase: f,
        userIsPremium: A
      })]
    })
  }