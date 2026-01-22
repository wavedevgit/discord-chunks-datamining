/** Chunk was on 67096 **/
/** chunk id: 137766, original params: e,A,t (module,exports,require) **/
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk317097 = require("./317097.js"),
  Chunk397927 = require("./397927.js"),
  Chunk915089 = require("./915089.js"),
  Chunk411342 = require("./411342.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk228580 = require("./228580.js");

function f(e) {
  for (var A = 1; A < arguments.length; A++) {
    var t = null != arguments[A] ? arguments[A] : {},
      r = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), r.forEach(function(A) {
      var r;
      r = t[A], A in e ? Object.defineProperty(e, A, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[A] = r
    })
  }
  return e
}

function p(e, A) {
  return A = null != A ? A : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(A)) : (function(e, A) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t.push.apply(t, r)
    }
    return t
  })(Object(A)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(A, t))
  }), e
}
let m = (0, Chunk915089.Ld)();

function b(e) {
  let {
    newRoleParams: A,
    setNewRoleParams: t
  } = e, l = n.useRef(null), {
    name: o,
    color: b
  } = A, v = e => t(A => (a()(null != A, "newRoleParams should be defined"), p(f({}, A), {
    color: e
  })));
  return (0, r.jsxs)("div", {
    className: g.CJ,
    children: [(0, r.jsx)(s.ksK, {
      autoFocus: true,
      value: o,
      onChange: e => t(A => (a()(null != A, "newRoleParams should be defined"), p(f({}, A), {
        name: e
      }))),
      id: m,
      placeholder: u.intl.string(u.t.oNauug),
      maxLength: c.fHV
    }), (0, r.jsxs)("div", {
      className: g.P4,
      children: [(0, r.jsx)(s.AC4, {
        children: u.intl.format(u.t["Vlq/pH"], {
          color: (0, i.Hl)(b)
        })
      }), (0, r.jsx)(s.YNO, {
        targetElementRef: l,
        renderPopout: e => (0, r.jsx)(s.VNw, p(f({}, e), {
          value: b,
          onChange: v
        })),
        children: e => (0, r.jsx)(s.K0, p(f({}, e), {
          variant: "secondary",
          icon: s.dDg,
          buttonRef: l,
          "aria-label": u.intl.string(u.t.QLgdlS)
        }))
      })]
    }), (0, r.jsx)(d.A, {
      role: A
    })]
  })
}