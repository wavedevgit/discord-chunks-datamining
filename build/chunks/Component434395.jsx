/** Chunk was on web.js **/
/** chunk id: 434395, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk531260 = require("./531260.js"),
  Chunk927578 = require("./927578.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk416179 = require("./416179.js");

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

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m(e) {
  let {
    subscription: t,
    renewalMutations: i,
    className: f,
    analyticsLocation: _
  } = e, m = (0, o.A)(), g = t.currentPeriodEnd;
  return m.fractionalState === c.xc.FP_SUB_PAUSED && (g = m.endsAt.toDate()), (0, r.jsxs)("div", {
    className: a()(d.zr, f),
    children: [(0, r.jsx)(s.EpV, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      className: d.G
    }), (0, r.jsx)("div", {
      className: d.Qq,
      children: u.intl.format(u.t.ar1cPl, {
        planName: t.hasExternalPlanChange ? (0, l.OU)(i) : l.Ay.getDisplayName(i.planId),
        date: g
      })
    }), t.isPurchasedExternally ? null : (0, r.jsx)(s.MzZ, {
      onClick: e => {
        e.preventDefault(), (0, s.mMO)(async () => {
          let {
            default: e
          } = await n.e("65975").then(n.bind(n, 702698));
          return n => (0, r.jsx)(e, h(p({}, n), {
            subscription: t,
            renewalMutations: i,
            analyticsLocation: _
          }))
        })
      },
      className: d.Lu,
      children: u.intl.string(u.t["ETE/oC"])
    })]
  })
}