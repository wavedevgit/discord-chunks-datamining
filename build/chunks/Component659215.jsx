/** Chunk was on 38626 **/
/** chunk id: 659215, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => f,
  m: () => g
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk104494 = require("./104494.js"),
  Chunk639119 = require("./639119.js"),
  Chunk790527 = require("./790527.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk819620 = require("./819620.js"),
  Chunk784370 = require("./784370.js");

function m(e) {
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

function f(e) {
  var t, n, {
      onClose: l,
      analyticsSource: f
    } = e,
    g = function(e, t) {
      if (null == e) return {};
      var n, i, l = function(e, t) {
        if (null == e) return {};
        var n, i, l = {},
          r = Object.keys(e);
        for (i = 0; i < r.length; i++) n = r[i], t.indexOf(n) >= 0 || (l[n] = e[n]);
        return l
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        for (i = 0; i < r.length; i++) n = r[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
      }
      return l
    }(e, ["onClose", "analyticsSource"]);
  let b = d.intl.format(d.t["JmbS+f"], {
      onClick: () => {
        r.Z.open(u.oAB.PREMIUM), l()
      }
    }),
    j = (0, a.N)(),
    v = (0, o.Ng)(),
    O = null != j || null != v;
  return (0, i.jsx)(s.Z, m({
    artURL: p,
    artContainerClassName: h.artContainer,
    modalClassName: h.modalContainer,
    bodyClassName: h.bodyContainer,
    type: c.cd.BURST_REACTION_UPSELL,
    title: d.intl.string(d.t.N4SCJy),
    body: b,
    glowUp: b,
    analyticsSource: f,
    analyticsLocation: {
      page: u.ZY5.PREMIUM_UPSELL_BURST_REACTIONS,
      object: u.qAy.BUTTON_CTA
    },
    onClose: l,
    subscribeButtonText: O ? true : d.intl.string(d.t["8x0jKS"]),
    subscriptionTier: null != (n = null == j || null == (t = j.subscription_trial) ? true : t.sku_id) ? n : c.Si.TIER_2,
    backButtonText: d.intl.string(d.t.f3Pet7)
  }, g))
}

function g(e) {
  let {
    analytics: t
  } = e;
  (0, l.ZDy)(async () => {
    let {
      default: e
    } = await Promise.resolve().then(n.bind(n, 659215));
    return n => (0, i.jsx)(e, m({
      analyticsSource: t
    }, n))
  })
}