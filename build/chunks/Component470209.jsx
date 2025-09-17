/** Chunk was on 73628 **/
/** chunk id: 470209, original params: A,e,t (module,exports,require) **/
require.d(exports, {
  Z: () => q
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk866442 = require("./866442.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk916001 = require("./916001.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk744422 = require("./744422.js");

function g(A) {
  for (var e = 1; e < arguments.length; e++) {
    var t = null != arguments[e] ? arguments[e] : {},
      n = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(A) {
      return Object.getOwnPropertyDescriptor(t, A).enumerable
    }))), n.forEach(function(e) {
      var n;
      n = t[e], e in A ? Object.defineProperty(A, e, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : A[e] = n
    })
  }
  return A
}

function p(A, e) {
  return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(e)) : (function(A, e) {
    var t = Object.keys(A);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(A);
      t.push.apply(t, n)
    }
    return t
  })(Object(e)).forEach(function(t) {
    Object.defineProperty(A, t, Object.getOwnPropertyDescriptor(e, t))
  }), A
}
let m = (0, Chunk313201.hQ)();

function q(A) {
  let {
    newRoleParams: e,
    setNewRoleParams: t
  } = A, a = r.useRef(null), {
    name: s,
    color: q
  } = e, h = A => t(e => (l()(null != e, "newRoleParams should be defined"), p(g({}, e), {
    color: A
  })));
  return (0, n.jsxs)("div", {
    className: f.roleInputContainer,
    children: [(0, n.jsx)(o.oil, {
      autoFocus: true,
      value: s,
      onChange: A => t(e => (l()(null != e, "newRoleParams should be defined"), p(g({}, e), {
        name: A
      }))),
      id: m,
      placeholder: u.intl.string(u.t.oNauur),
      maxLength: c.VKK
    }), (0, n.jsxs)("div", {
      className: f.roleColorContainer,
      children: [(0, n.jsx)(o.nn4, {
        children: u.intl.format(u.t["Vlq/pK"], {
          color: (0, i.Rf)(q)
        })
      }), (0, n.jsx)(o.yRy, {
        targetElementRef: a,
        renderPopout: A => (0, n.jsx)(o.Z$W, p(g({}, A), {
          value: q,
          onChange: h
        })),
        children: A => (0, n.jsx)(o.hU, p(g({}, A), {
          variant: "secondary",
          icon: o.ilE,
          buttonRef: a,
          "aria-label": u.intl.string(u.t.QLgdlZ)
        }))
      })]
    }), (0, n.jsx)(d.Z, {
      role: e
    })]
  })
}