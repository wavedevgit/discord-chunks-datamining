/** Chunk was on web.js **/
/** chunk id: 927723, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => h,
  k: () => p
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk63063 = require("./63063.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk43617 = require("./43617.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function p(e) {
  let {
    kind: t
  } = e;
  (0, a.ZDy)(async () => {
    let {
      default: e
    } = await n.e("7285").then(n.bind(n, 951269));
    return n => (0, r.jsx)(e, _(d({}, n), {
      kind: t
    }))
  })
}

function h() {
  (0, Chunk481060.ZDy)(async () => {
    let {
      ConfirmModal: e
    } = await Promise.resolve().then(require.bind(require, 878678));
    return t => (0, r.jsx)(e, _(d({}, t), {
      header: l.intl.string(c.default.odgSTk),
      confirmText: l.intl.string(l.t.BddRzS),
      confirmButtonColor: i.zx.Colors.BRAND,
      children: (0, r.jsx)(a.Text, {
        variant: "text-md/normal",
        children: l.intl.format(c.default.EZfHRq, {
          helpURL: o.Z.getArticleURL(s.BhN.NSFW_AGE_GATING)
        })
      })
    }))
  })
}