/** Chunk was on web.js **/
/** chunk id: 592889, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk975298 = require("./975298.js"),
  Chunk74538 = require("./74538.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk159240 = require("./159240.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e) {
  let {
    subscription: t,
    renewalMutations: i,
    className: f,
    analyticsLocation: _
  } = e, h = (0, s.Z)(), g = t.currentPeriodEnd;
  return h.fractionalState === c.a$.FP_SUB_PAUSED && (g = h.endsAt.toDate()), (0, r.jsxs)("div", {
    className: a()(d.root, f),
    children: [(0, r.jsx)(o.Mgn, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      className: d.infoIcon
    }), (0, r.jsx)("div", {
      className: d.text,
      children: u.intl.format(u.t.ar1cPl, {
        planName: t.hasExternalPlanChange ? (0, l.zL)(i) : l.ZP.getDisplayName(i.planId),
        date: g
      })
    }), t.isPurchasedExternally ? null : (0, r.jsx)(o.Anchor, {
      onClick: e => {
        e.preventDefault(), (0, o.ZDy)(async () => {
          let {
            default: e
          } = await n.e("19429").then(n.bind(n, 604468));
          return n => (0, r.jsx)(e, m(p({}, n), {
            subscription: t,
            renewalMutations: i,
            analyticsLocation: _
          }))
        })
      },
      className: d.cancelLink,
      children: u.intl.string(u.t["ETE/oC"])
    })]
  })
}