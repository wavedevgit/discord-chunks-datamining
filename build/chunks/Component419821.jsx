/** Chunk was on web.js **/
/** chunk id: 419821, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  u: () => y
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk933970 = require("./933970.jsx"),
  Chunk340453 = require("./340453.jsx"),
  Chunk292352 = require("./292352.js"),
  Chunk382402 = require("./382402.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk944651 = require("./944651.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
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

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function y(e) {
  let {
    user: t
  } = e, a = (0, s.e7)([c.default], () => c.default.getCurrentUser()), m = i.useCallback(() => {
    o()(true !== a, "User must be logged in to accept a link request"), (0, l.ZDy)(async () => {
      let {
        default: e
      } = await n.e("50872").then(n.bind(n, 442673));
      return n => (0, r.jsx)(e, b(g({}, n), {
        currentUser: a,
        otherUser: t
      }))
    })
  }, [a, t]);
  return (0, r.jsxs)("div", {
    className: h.container,
    children: [(0, r.jsx)("div", {
      className: h.details,
      children: (0, r.jsx)(d.Z, {
        otherUser: t,
        status: f.ne.ACTIVE
      })
    }), (0, r.jsx)("div", {
      className: h.actions,
      children: (0, r.jsx)(u.Z, {
        icon: l.Dio,
        tooltip: p.intl.string(_.default.l20ZZp),
        onClick: m
      })
    })]
  })
}