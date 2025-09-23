/** Chunk was on 73628 **/
/** chunk id: 470209, original params: e,A,t (module,exports,require) **/
require.d(exports, {
  Z: () => q
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk866442 = require("./866442.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk916001 = require("./916001.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk874847 = require("./874847.js");

function f(e) {
  for (var A = 1; A < arguments.length; A++) {
    var t = null != arguments[A] ? arguments[A] : {},
      n = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), n.forEach(function(A) {
      var n;
      n = t[A], A in e ? Object.defineProperty(e, A, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[A] = n
    })
  }
  return e
}

function p(e, A) {
  return A = null != A ? A : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(A)) : (function(e, A) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t.push.apply(t, n)
    }
    return t
  })(Object(A)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(A, t))
  }), e
}
let m = (0, Chunk313201.hQ)();

function q(e) {
  let {
    newRoleParams: A,
    setNewRoleParams: t
  } = e, l = r.useRef(null), {
    name: s,
    color: q
  } = A, h = e => t(A => (a()(null != A, "newRoleParams should be defined"), p(f({}, A), {
    color: e
  })));
  return (0, n.jsxs)("div", {
    className: g.roleInputContainer,
    children: [(0, n.jsx)(o.oil, {
      autoFocus: true,
      value: s,
      onChange: e => t(A => (a()(null != A, "newRoleParams should be defined"), p(f({}, A), {
        name: e
      }))),
      id: m,
      placeholder: c.intl.string(c.t.oNauur),
      maxLength: u.VKK
    }), (0, n.jsxs)("div", {
      className: g.roleColorContainer,
      children: [(0, n.jsx)(o.nn4, {
        children: c.intl.format(c.t["Vlq/pK"], {
          color: (0, i.Rf)(q)
        })
      }), (0, n.jsx)(o.yRy, {
        targetElementRef: l,
        renderPopout: e => (0, n.jsx)(o.Z$W, p(f({}, e), {
          value: q,
          onChange: h
        })),
        children: e => (0, n.jsx)(o.hU, p(f({}, e), {
          variant: "secondary",
          icon: o.ilE,
          buttonRef: l,
          "aria-label": c.intl.string(c.t.QLgdlZ)
        }))
      })]
    }), (0, n.jsx)(d.Z, {
      role: A
    })]
  })
}