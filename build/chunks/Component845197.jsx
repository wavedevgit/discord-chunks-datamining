/** Chunk was on 60667 **/
/** chunk id: 845197, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  M: () => E
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

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function E(e) {
  let {
    user: t
  } = e, l = (0, d.A)(), E = (0, u.xr)(), x = (0, a.bG)([c.default], () => c.default.getCurrentUser()), O = i.useCallback(() => {
    s()(true !== x, "User must be logged in to accept a link request"), (0, o.mMO)(async () => {
      let {
        default: e
      } = await n.e("31385").then(n.bind(n, 58144));
      return n => (0, r.jsx)(e, b(h({}, n), {
        currentUser: x,
        otherUser: t
      }))
    })
  }, [x, t]), C = i.useCallback(() => {
    s()(true !== x, "User must be logged in to decline a link request"), (0, o.mMO)(async () => {
      let {
        default: e
      } = await n.e("84811").then(n.bind(n, 389094));
      return n => (0, r.jsx)(e, b(h({}, n), {
        currentUser: x,
        otherUser: t
      }))
    })
  }, [x, t]), T = i.useCallback(() => {
    s()(true !== x, "User must be logged in to decline a link request"), (0, o.mMO)(async () => {
      let {
        default: e
      } = await n.e("17219").then(n.bind(n, 187278));
      return n => (0, r.jsx)(e, b(h({}, n), {
        currentUser: x,
        otherUser: t
      }))
    })
  }, [x, t]);
  return (0, r.jsxs)("div", {
    className: f.kL,
    children: [(0, r.jsx)("div", {
      className: f.zH,
      children: (0, r.jsx)(p.A, {
        otherUser: t,
        status: m.Ef.PENDING
      })
    }), (0, r.jsx)("div", {
      className: f.o1,
      children: l ? (0, r.jsx)(_.A, {
        icon: o.PGe,
        tooltip: A.intl.string(g.default.e5iHmZ),
        onClick: T
      }) : (0, r.jsxs)(r.Fragment, {
        children: [E ? null : (0, r.jsx)(_.A, {
          icon: o.A9s,
          tooltip: A.intl.string(g.default.krWQZK),
          onClick: O
        }), (0, r.jsx)(_.A, {
          icon: o.PGe,
          tooltip: A.intl.string(g.default.bBDeNI),
          onClick: C
        })]
      })
    })]
  })
}