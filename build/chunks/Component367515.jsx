/** Chunk was on web.js **/
/** chunk id: 367515, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => v
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk880257 = require("./880257.js"),
  Chunk631885 = require("./631885.js"),
  Chunk933970 = require("./933970.jsx"),
  Chunk340453 = require("./340453.jsx"),
  Chunk292352 = require("./292352.js"),
  Chunk225753 = require("./225753.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk823074 = require("./823074.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
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

function y(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function v(e) {
  let {
    user: t
  } = e, a = (0, u.Z)(), E = (0, d.VM)(), y = (0, s.e7)([c.default], () => c.default.getCurrentUser()), v = i.useCallback(() => {
    o()(true !== y, "User must be logged in to accept a link request"), (0, l.ZDy)(async () => {
      let {
        default: e
      } = await n.e("59716").then(n.bind(n, 275370));
      return n => (0, r.jsx)(e, O(b({}, n), {
        currentUser: y,
        otherUser: t
      }))
    })
  }, [y, t]), S = i.useCallback(() => {
    o()(true !== y, "User must be logged in to decline a link request"), (0, l.ZDy)(async () => {
      let {
        default: e
      } = await n.e("958").then(n.bind(n, 4526));
      return n => (0, r.jsx)(e, O(b({}, n), {
        currentUser: y,
        otherUser: t
      }))
    })
  }, [y, t]), I = i.useCallback(() => {
    o()(true !== y, "User must be logged in to decline a link request"), (0, l.ZDy)(async () => {
      let {
        default: e
      } = await n.e("69015").then(n.bind(n, 247265));
      return n => (0, r.jsx)(e, O(b({}, n), {
        currentUser: y,
        otherUser: t
      }))
    })
  }, [y, t]);
  return (0, r.jsxs)("div", {
    className: g.container,
    children: [(0, r.jsx)("div", {
      className: g.details,
      children: (0, r.jsx)(p.Z, {
        otherUser: t,
        status: _.ne.PENDING
      })
    }), (0, r.jsx)("div", {
      className: g.actions,
      children: a ? (0, r.jsx)(f.Z, {
        icon: l.Dio,
        tooltip: h.intl.string(m.default.e5iHmZ),
        onClick: I
      }) : (0, r.jsxs)(r.Fragment, {
        children: [E ? null : (0, r.jsx)(f.Z, {
          icon: l.dz2,
          tooltip: h.intl.string(m.default.krWQZK),
          onClick: v
        }), (0, r.jsx)(f.Z, {
          icon: l.Dio,
          tooltip: h.intl.string(m.default.bBDeNI),
          onClick: S
        })]
      })
    })]
  })
}