/** Chunk was on 91976 **/
/** chunk id: 526710, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => v
});
var Chunk627968 = require("./627968.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk192308 = require("./192308.js"),
  Chunk975807 = require("./975807.js"),
  Chunk166403 = require("./166403.js"),
  Chunk975571 = require("./975571.js"),
  Chunk783420 = require("./783420.jsx"),
  Chunk938973 = require("./938973.js"),
  Chunk788868 = require("./788868.js"),
  Chunk88001 = require("./88001.js"),
  Chunk652215 = require("./652215.js"),
  Chunk519412 = require("./519412.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk438705 = require("./438705.js");

function g(e) {
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

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}

function j(e) {
  return (0, n.jsx)(i.Modal, m(g({}, e), {
    size: "md",
    title: y.intl.formatToPlainString(d.default.BcZLdW, {
      premiumGroupProductName: (0, f.DP)()
    }),
    subtitle: y.intl.string(d.default.EjhBrs),
    actions: [{
      text: y.intl.string(d.default["IO+nlU"]),
      variant: "secondary",
      onClick: () => {
        (0, a.A)(f.TE)
      }
    }]
  }))
}
let v = e => {
  var t;
  let {
    subscribeButtonProps: r
  } = (0, p.B)({
    subscriptionTier: b.pe.TIER_2,
    subscriptionPlanId: b.gD.PREMIUM_GROUP_MONTH
  }), {
    disabled: v
  } = r, w = function(e, t) {
    if (null == e) return {};
    var r, n, i, o = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (i = 0, r = Reflect.ownKeys(e); i < r.length; i++) n = r[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
      return o
    }
    if (o = function(e, t) {
        if (null == e) return {};
        var r, n, i = {},
          o = Object.getOwnPropertyNames(e);
        for (n = 0; n < o.length; n++) r = o[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
        return i
      }(e, t), Object.getOwnPropertySymbols)
      for (i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) n = r[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
    return o
  }(r, ["disabled"]), h = (0, o.bG)([c.A], () => c.A.getPremiumTypeSubscription()), E = null != (t = null == h ? true : h.hasActiveTrial) && t, T = v && !E;
  return (0, n.jsx)(s.A, {
    subscriptionTier: b.pe.TIER_2,
    initialPlanId: b.gD.PREMIUM_GROUP_MONTH,
    children: t => {
      let {
        onClick: r
      } = t;
      return (0, n.jsx)(i.ExpressiveModal, m(g({}, e), {
        graphic: {
          src: P,
          type: "image"
        },
        gradientColor: "nitro-pink",
        title: y.intl.formatToPlainString(d.default.tJbHtN, {
          premiumGroupProductName: (0, f.DP)()
        }),
        badge: {
          type: "beta",
          variant: "expressive"
        },
        subtitle: y.intl.formatToPlainString(d.default.csDq8A, {
          premiumGroupProductName: (0, f.DP)(),
          totalSeats: f.aw
        }),
        actions: [{
          text: y.intl.string(d.default.z8re5H),
          variant: "secondary",
          onClick: () => void(0, a.A)(u.A.getArticleURL(O.MVz.PREMIUM_GROUP_ABOUT))
        }, m(g({}, w), {
          disabled: T,
          onClick: t => {
            var n;
            E ? (0, l.openModalLazy)(() => Promise.resolve(j)) : (null == r || r(t), null == (n = e.onClose) || n.call(e))
          }
        })]
      }))
    }
  })
}