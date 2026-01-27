/** Chunk was on 7034 **/
/** chunk id: 32605, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => g,
  z: () => b
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk422936 = require("./422936.js"),
  Chunk234419 = require("./234419.js"),
  Chunk244975 = require("./244975.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk511761 = require("./511761.js"),
  Chunk271110 = require("./271110.js");

function f(e) {
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

function g(e) {
  var t, n;
  let {
    onClose: l,
    analyticsSource: g
  } = e, b = function(e, t) {
    if (null == e) return {};
    var n, i, l, r = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) i = n[l], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (r[i] = e[i]);
      return r
    }
    if (r = function(e, t) {
        if (null == e) return {};
        var n, i, l = {},
          r = Object.getOwnPropertyNames(e);
        for (i = 0; i < r.length; i++) n = r[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
        return l
      }(e, t), Object.getOwnPropertySymbols)
      for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) i = n[l], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (r[i] = e[i]);
    return r
  }(e, ["onClose", "analyticsSource"]), y = p.intl.format(p.t["JmbS+T"], {
    onClick: () => {
      (0, o.openUserSettings)(r.X.NITRO_PANEL, {
        section: d.nc_.PREMIUM
      }), l()
    }
  }), O = (0, s.V)(), v = (0, a.O)(), j = null != O || null != v;
  return (0, i.jsx)(u.A, f({
    artURL: m,
    artContainerClassName: h.JS,
    modalClassName: h.jT,
    bodyClassName: h.IP,
    type: c.e.BURST_REACTION_UPSELL,
    title: p.intl.string(p.t.N4SCJ0),
    body: y,
    glowUp: y,
    analyticsSource: g,
    analyticsLocation: {
      page: d.liQ.PREMIUM_UPSELL_BURST_REACTIONS,
      object: d.ZSU.BUTTON_CTA
    },
    onClose: l,
    subscribeButtonText: j ? true : p.intl.string(p.t["8x0jKT"]),
    subscriptionTier: null != (t = null == O || null == (n = O.subscription_trial) ? true : n.sku_id) ? t : c.pe.TIER_2,
    backButtonText: p.intl.string(p.t.f3Pet9)
  }, b))
}

function b(e) {
  let {
    analytics: t
  } = e;
  (0, l.mMO)(async () => {
    let {
      default: e
    } = await Promise.resolve().then(n.bind(n, 32605));
    return n => (0, i.jsx)(e, f({
      analyticsSource: t
    }, n))
  })
}