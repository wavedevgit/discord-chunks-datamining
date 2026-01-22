/** Chunk was on web.js **/
/** chunk id: 9588, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => h,
  K: () => _
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk139033 = require("./139033.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk975571 = require("./975571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk641131 = require("./641131.js");

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
  (0, a.mMO)(async () => {
    let {
      default: e
    } = await n.e("11546").then(n.bind(n, 208731));
    return n => (0, r.jsx)(e, p(d({}, n), {
      kind: t
    }))
  })
}

function h() {
  (0, i.A)({
    title: l.intl.string(c.default.odgSTk),
    subtitle: l.intl.format(c.default.EZfHRq, {
      helpURL: s.A.getArticleURL(o.MVz.NSFW_AGE_GATING)
    })
  })
}