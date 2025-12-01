/** Chunk was on web.js **/
/** chunk id: 659215, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  default: () => b,
  m: () => y
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk622909 = require("./622909.js"),
  Chunk639119 = require("./639119.js"),
  Chunk790527 = require("./790527.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk819620 = require("./819620.js"),
  Chunk784370 = require("./784370.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = E(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function b(e) {
  var t, n, {
      onClose: i,
      analyticsSource: m
    } = e,
    E = g(e, ["onClose", "analyticsSource"]);
  let b = f.intl.format(f.t["JmbS+T"], {
      onClick: () => {
        (0, o.openUserSettings)(a.n.NITRO_PANEL, {
          section: d.oAB.PREMIUM
        }), i()
      }
    }),
    y = (0, l.N)(),
    O = (0, s.N)(),
    v = null != y || null != O;
  return (0, r.jsx)(c.Z, h({
    artURL: _,
    artContainerClassName: p.artContainer,
    modalClassName: p.modalContainer,
    bodyClassName: p.bodyContainer,
    type: u.cd.BURST_REACTION_UPSELL,
    title: f.intl.string(f.t.N4SCJ0),
    body: b,
    glowUp: b,
    analyticsSource: m,
    analyticsLocation: {
      page: d.ZY5.PREMIUM_UPSELL_BURST_REACTIONS,
      object: d.qAy.BUTTON_CTA
    },
    onClose: i,
    subscribeButtonText: v ? true : f.intl.string(f.t["8x0jKT"]),
    subscriptionTier: null != (n = null == y || null == (t = y.subscription_trial) ? true : t.sku_id) ? n : u.Si.TIER_2,
    backButtonText: f.intl.string(f.t.f3Pet9)
  }, E))
}

function y(e) {
  let {
    analytics: t
  } = e;
  (0, i.ZDy)(async () => {
    let {
      default: e
    } = await Promise.resolve().then(n.bind(n, 659215));
    return n => (0, r.jsx)(e, h({
      analyticsSource: t
    }, n))
  })
}