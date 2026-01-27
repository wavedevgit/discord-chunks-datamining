/** Chunk was on 92818 **/
/** chunk id: 725550, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => I
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk735438 = require("./735438.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk590180 = require("./590180.js"),
  Chunk993408 = require("./993408.js"),
  Chunk645178 = require("./645178.js"),
  Chunk833336 = require("./833336.js"),
  Chunk451909 = require("./451909.js"),
  Chunk702211 = require("./702211.js"),
  Chunk287070 = require("./287070.jsx"),
  Chunk101058 = require("./101058.js"),
  Chunk207803 = require("./207803.js"),
  Chunk950191 = require("./950191.js"),
  Chunk814390 = require("./814390.js"),
  Chunk773669 = require("./773669.js"),
  Chunk606532 = require("./606532.jsx"),
  Chunk752319 = require("./752319.js"),
  Chunk287809 = require("./287809.js"),
  Chunk405269 = require("./405269.js"),
  Chunk927578 = require("./927578.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk645052 = require("./645052.js");

function E(e) {
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
      pendingProfileEffectRecord: t,
      product: r,
      purchase: u
    } = e, d = (0, i.bG)([j.default], () => j.default.getCurrentUser()), f = (0, i.bG)([o.A], () => o.A.getProduct(null == t ? true : t.skuId)), m = (0, i.bG)([O.default], () => O.default.locale), g = v.Ay.canUseCollectibles(d), y = (0, c.gA)(u), b = (0, c.G0)(r), x = !g && y, h = (null == u ? true : u.expiresAt) != null ? (0, A.Tf)(Date.now(), u.expiresAt) : null, E = (0, a.Tk)(u), C = (0, a.o7)(f), I = (0, p.b)(!b || g), S = w(x, b, g, I), T = null == u || x;
    return null != t ? (0, n.jsx)("div", {
      className: T ? _.Mf : _.zf,
      children: (0, n.jsxs)("div", {
        className: _.RQ,
        children: [(0, n.jsx)(s.Text, {
          color: "text-strong",
          variant: "text-sm/semibold",
          children: (0, l.isEmpty)(E) ? C : E
        }), T ? (0, n.jsx)(s.Text, {
          color: "text-default",
          variant: "text-sm/normal",
          children: S
        }) : (0, n.jsxs)(n.Fragment, {
          children: [null != h && (0, n.jsx)(s.Text, {
            variant: "text-xxs/normal",
            color: "text-muted",
            children: P.intl.format(P.t.Io7ozn, {
              days: h.days.toString()
            })
          }), (0, n.jsxs)(s.Text, {
            variant: "text-xxs/normal",
            color: "text-muted",
            children: [P.intl.format(P.t.gW9R4B, {
              date: u.purchasedAt.toLocaleDateString(m, {
                month: "long",
                year: "numeric"
              })
            }), null != u.expiresAt && (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)("br", {}), P.intl.format(P.t.eZSTa5, {
                date: u.expiresAt.toLocaleDateString(m, {
                  minute: "numeric",
                  hour: "numeric",
                  day: "numeric",
                  month: "long",
                  year: "numeric"
                })
              })]
            })]
          }), y && (0, n.jsx)(s.Text, {
            variant: "text-xxs/normal",
            color: "text-muted",
            children: P.intl.string(P.t.nKdAlO)
          })]
        })]
      })
    }) : null
  },
  w = (e, t, r, n) => e ? P.intl.string(P.t["1UPza/"]) : t && r ? P.intl.string(P.t.hmyYK8) : t && !r ? n ? P.intl.string(P.t.melduy) : P.intl.string(P.t.JtAKwp) : P.intl.string(P.t.fEGjVQ),
  I = e => {
    var t, r;
    let {
      user: l,
      pendingProfileEffectRecord: s,
      product: o,
      purchase: c,
      guild: a
    } = e, {
      pendingGlobalName: p,
      pendingNickname: O,
      pendingPronouns: j,
      pendingBio: A,
      pendingBanner: P,
      pendingAvatar: w,
      pendingAvatarDecoration: I,
      pendingThemeColors: S,
      pendingAccentColor: T
    } = (0, i.cf)([u.A, h.A], () => E({
      pendingNickname: true,
      pendingGlobalName: true,
      pendingAccentColor: true
    }, null != a ? u.A.getAllPending() : h.A.getAllPending())), k = v.Ay.isPremium(l), N = v.Ay.canUsePremiumProfileCustomization(l), R = (0, y.Ay)(l.id), U = !!(null == R ? true : R.getPreviewBio(A)), D = {
      user: l,
      guild: a,
      pendingGlobalName: p,
      pendingNickname: O,
      pendingPronouns: j,
      pendingBio: (0, b.A)() && null != A ? d.Ay.parse(true, A).content : A,
      pendingBanner: P,
      useLargeBanner: true,
      pendingAvatar: (0, m.V7)({
        userId: l.id,
        image: w
      }),
      pendingAvatarDecoration: I,
      pendingThemeColors: S,
      pendingAccentColor: T,
      pendingProfileEffect: null != s ? s : null,
      hideFakeActivity: U,
      canUsePremiumCustomization: N,
      onUpsellClick: x.A,
      onBannerChange: g.Iz
    };
    return (0, n.jsxs)("div", {
      className: _.i1,
      children: [(0, n.jsx)(f.A, (t = E({}, D), r = r = {
        disabledInputs: true,
        hideCustomStatus: true
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
      }), t)), false, (0, n.jsx)(C, {
        pendingProfileEffectRecord: s,
        product: o,
        purchase: c,
        userIsPremium: k
      })]
    })
  }