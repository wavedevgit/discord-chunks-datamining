/** Chunk was on web.js **/
/** chunk id: 845197, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => v
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk287809 = require("./287809.js"),
  Chunk438732 = require("./438732.js"),
  Chunk834981 = require("./834981.js"),
  Chunk53719 = require("./53719.jsx"),
  Chunk390370 = require("./390370.jsx"),
  Chunk191627 = require("./191627.js"),
  Chunk842130 = require("./842130.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk487693 = require("./487693.js");

function E(e, t, n) {
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
      E(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function v(e) {
  let {
    user: t
  } = e, a = (0, u.A)(), E = (0, d.xr)(), b = (0, o.bG)([c.default], () => c.default.getCurrentUser()), v = i.useCallback(() => {
    s()(true !== b, "User must be logged in to accept a link request"), (0, l.mMO)(async () => {
      let {
        default: e
      } = await n.e("31385").then(n.bind(n, 58144));
      return n => (0, r.jsx)(e, O(y({}, n), {
        currentUser: b,
        otherUser: t
      }))
    })
  }, [b, t]), A = i.useCallback(() => {
    s()(true !== b, "User must be logged in to decline a link request"), (0, l.mMO)(async () => {
      let {
        default: e
      } = await n.e("84811").then(n.bind(n, 389094));
      return n => (0, r.jsx)(e, O(y({}, n), {
        currentUser: b,
        otherUser: t
      }))
    })
  }, [b, t]), I = i.useCallback(() => {
    s()(true !== b, "User must be logged in to decline a link request"), (0, l.mMO)(async () => {
      let {
        default: e
      } = await n.e("17219").then(n.bind(n, 187278));
      return n => (0, r.jsx)(e, O(y({}, n), {
        currentUser: b,
        otherUser: t
      }))
    })
  }, [b, t]);
  return (0, r.jsxs)("div", {
    className: g.kL,
    children: [(0, r.jsx)("div", {
      className: g.zH,
      children: (0, r.jsx)(p.A, {
        otherUser: t,
        status: _.Ef.PENDING
      })
    }), (0, r.jsx)("div", {
      className: g.o1,
      children: a ? (0, r.jsx)(f.A, {
        icon: l.PGe,
        tooltip: m.intl.string(h.default.e5iHmZ),
        onClick: I
      }) : (0, r.jsxs)(r.Fragment, {
        children: [E ? null : (0, r.jsx)(f.A, {
          icon: l.A9s,
          tooltip: m.intl.string(h.default.krWQZK),
          onClick: v
        }), (0, r.jsx)(f.A, {
          icon: l.PGe,
          tooltip: m.intl.string(h.default.bBDeNI),
          onClick: A
        })]
      })
    })]
  })
}