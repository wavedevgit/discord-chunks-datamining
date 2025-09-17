/** Chunk was on web.js **/
/** chunk id: 472243, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk849522 = require("./849522.js"),
  Chunk639119 = require("./639119.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk694320 = require("./694320.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk781990 = require("./781990.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function I(e) {
  var t, n, i, b;
  let {
    type: O,
    textValue: I,
    maxCharacterCount: T,
    showRemainingCharsAfterCount: S,
    className: A
  } = e, C = (0, o.e7)([f.default], () => _.ZP.canUseIncreasedMessageLength(f.default.getCurrentUser())), N = (0, u.Z)(), R = null != T ? T : N, P = null != (b = null != S ? S : T) ? b : N / 10, w = I.length, D = null != O.upsellLongMessages && (null != w ? w : 0) > h.J6R && C, x = null != O.upsellLongMessages && !C, L = (null == (n = (0, d.N)()) || null == (t = n.subscription_trial) ? true : t.sku_id) === m.Si.TIER_2, j = R - w, M = j > P, k = j < 0 && L, U = 0 === j ? g.intl.string(g.t.tU6YQ0) : j > 0 ? g.intl.formatToPlainString(g.t.qH8uFR, {
    count: j
  }) : g.intl.string(g.t.YSRIqa), {
    analyticsLocations: G
  } = (0, c.ZP)(l.Z.CHARACTER_COUNT);
  if (!(D && j >= 0 || !M || x && !M)) return null;
  let B = j >= 0;
  return (0, r.jsx)(c.Gt, {
    value: G,
    children: (0, r.jsxs)("div", {
      className: a()(A, E.characterCount),
      children: [(0, r.jsxs)("div", {
        className: E.flairContainer,
        children: [D && B ? (0, r.jsx)(s.ua7, {
          text: g.intl.formatToPlainString(g.t.vcvHa2, {
            maxLength: R
          }),
          position: "top",
          children: e => (0, r.jsx)(s.SrA, y({
            size: "md",
            color: "currentColor",
            className: E.premiumFlair
          }, e))
        }) : null, M || k ? null : (0, r.jsx)(s.ua7, {
          text: U,
          position: "top",
          children: e => (0, r.jsx)(s.Text, v(y({
            variant: "text-sm/semibold",
            tabularNumbers: true,
            "aria-hidden": true
          }, e), {
            color: B ? "text-default" : "text-danger",
            children: j
          }))
        })]
      }), (0, r.jsx)(s.nn4, {
        children: g.intl.format(g.t.qH8uFR, {
          count: j
        })
      }), x && !M ? (0, r.jsx)(p.Z, {
        className: E.upsell,
        iconOnly: (null == (i = O.upsellLongMessages) ? true : i.iconOnly) || false,
        remaining: j
      }) : null]
    })
  })
}