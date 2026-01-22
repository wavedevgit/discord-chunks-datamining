/** Chunk was on web.js **/
/** chunk id: 32605, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  default: () => b,
  z: () => y
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

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = E(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function b(e) {
  var t, n;
  let {
    onClose: i,
    analyticsSource: h
  } = e, E = g(e, ["onClose", "analyticsSource"]), b = f.intl.format(f.t["JmbS+T"], {
    onClick: () => {
      (0, s.openUserSettings)(a.X.NITRO_PANEL, {
        section: d.nc_.PREMIUM
      }), i()
    }
  }), y = (0, l.V)(), O = (0, o.O)(), A = null != y || null != O;
  return (0, r.jsx)(c.A, m({
    artURL: _,
    artContainerClassName: p.JS,
    modalClassName: p.jT,
    bodyClassName: p.IP,
    type: u.e.BURST_REACTION_UPSELL,
    title: f.intl.string(f.t.N4SCJ0),
    body: b,
    glowUp: b,
    analyticsSource: h,
    analyticsLocation: {
      page: d.liQ.PREMIUM_UPSELL_BURST_REACTIONS,
      object: d.ZSU.BUTTON_CTA
    },
    onClose: i,
    subscribeButtonText: A ? true : f.intl.string(f.t["8x0jKT"]),
    subscriptionTier: null != (t = null == y || null == (n = y.subscription_trial) ? true : n.sku_id) ? t : u.pe.TIER_2,
    backButtonText: f.intl.string(f.t.f3Pet9)
  }, E))
}

function y(e) {
  let {
    analytics: t
  } = e;
  (0, i.mMO)(async () => {
    let {
      default: e
    } = await Promise.resolve().then(n.bind(n, 32605));
    return n => (0, r.jsx)(e, m({
      analyticsSource: t
    }, n))
  })
}