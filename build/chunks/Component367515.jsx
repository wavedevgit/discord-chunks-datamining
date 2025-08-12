/** Chunk was on 20501 **/
/** chunk id: 367515, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => j
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk880257 = require("./880257.js"),
  Chunk631885 = require("./631885.js"),
  Chunk933970 = require("./933970.jsx"),
  Chunk340453 = require("./340453.jsx"),
  Chunk292352 = require("./292352.js"),
  Chunk916723 = require("./916723.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk497917 = require("./497917.js");

function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function j(e) {
  let {
    user: t
  } = e, s = (0, d.Z)(), j = (0, u.VM)(), E = (0, l.e7)([c.default], () => c.default.getCurrentUser()), C = r.useCallback(() => {
    a()(true !== E, "User must be logged in to accept a link request"), (0, o.ZDy)(async () => {
      let {
        default: e
      } = await n.e("59716").then(n.bind(n, 275370));
      return n => (0, i.jsx)(e, _(x({}, n), {
        currentUser: E,
        otherUser: t
      }))
    })
  }, [E, t]), O = r.useCallback(() => {
    a()(true !== E, "User must be logged in to decline a link request"), (0, o.ZDy)(async () => {
      let {
        default: e
      } = await n.e("958").then(n.bind(n, 4526));
      return n => (0, i.jsx)(e, _(x({}, n), {
        currentUser: E,
        otherUser: t
      }))
    })
  }, [E, t]), v = r.useCallback(() => {
    a()(true !== E, "User must be logged in to decline a link request"), (0, o.ZDy)(async () => {
      let {
        default: e
      } = await n.e("69015").then(n.bind(n, 247265));
      return n => (0, i.jsx)(e, _(x({}, n), {
        currentUser: E,
        otherUser: t
      }))
    })
  }, [E, t]);
  return (0, i.jsxs)("div", {
    className: b.container,
    children: [(0, i.jsx)("div", {
      className: b.details,
      children: (0, i.jsx)(p.Z, {
        otherUser: t,
        status: g.ne.PENDING
      })
    }), (0, i.jsx)("div", {
      className: b.actions,
      children: s ? (0, i.jsx)(m.Z, {
        icon: o.Dio,
        className: b.__invalid_actionDeny,
        tooltip: f.intl.string(h.default.e5iHmZ),
        onClick: v
      }) : (0, i.jsxs)(i.Fragment, {
        children: [j ? null : (0, i.jsx)(m.Z, {
          icon: o.dz2,
          className: b.__invalid_actionAccept,
          tooltip: f.intl.string(h.default.krWQZG),
          onClick: C
        }), (0, i.jsx)(m.Z, {
          icon: o.Dio,
          className: b.__invalid_actionDeny,
          tooltip: f.intl.string(h.default.bBDeND),
          onClick: O
        })]
      })
    })]
  })
}