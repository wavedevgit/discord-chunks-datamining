/** Chunk was on web.js **/
/** chunk id: 927723, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => m,
  k: () => _
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk885387 = require("./885387.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk63063 = require("./63063.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk546484 = require("./546484.js");

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

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function _(e) {
  let {
    kind: t
  } = e;
  (0, o.ZDy)(async () => {
    let {
      default: e
    } = await n.e("7285").then(n.bind(n, 951269));
    return n => (0, r.jsx)(e, p(d({}, n), {
      kind: t
    }))
  })
}

function m() {
  (0, Chunk885387.Z)({
    title: Chunk388032.intl.string(Chunk546484.default.odgSTk),
    subtitle: Chunk388032.intl.format(Chunk546484.default.EZfHRq, {
      helpURL: Chunk63063.Z.getArticleURL(Chunk981631.BhN.NSFW_AGE_GATING)
    })
  })
}