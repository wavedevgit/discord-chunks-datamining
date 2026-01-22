/** Chunk was on web.js **/
/** chunk id: 148131, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  w: () => y
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk287809 = require("./287809.js"),
  Chunk53719 = require("./53719.jsx"),
  Chunk390370 = require("./390370.jsx"),
  Chunk191627 = require("./191627.js"),
  Chunk842130 = require("./842130.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk487693 = require("./487693.js");

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
  } = e, a = (0, o.bG)([c.default], () => c.default.getCurrentUser()), m = i.useCallback(() => {
    s()(true !== a, "User must be logged in to accept a link request"), (0, l.mMO)(async () => {
      let {
        default: e
      } = await n.e("43139").then(n.bind(n, 179950));
      return n => (0, r.jsx)(e, b(g({}, n), {
        currentUser: a,
        otherUser: t
      }))
    })
  }, [a, t]);
  return (0, r.jsxs)("div", {
    className: h.kL,
    children: [(0, r.jsx)("div", {
      className: h.zH,
      children: (0, r.jsx)(d.A, {
        otherUser: t,
        status: f.Ef.ACTIVE
      })
    }), (0, r.jsx)("div", {
      className: h.o1,
      children: (0, r.jsx)(u.A, {
        icon: l.PGe,
        tooltip: _.intl.string(p.default.l20ZZp),
        onClick: m
      })
    })]
  })
}