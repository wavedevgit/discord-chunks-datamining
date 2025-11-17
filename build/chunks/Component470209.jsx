/** Chunk was on 73628 **/
/** chunk id: 470209, original params: e,t,A (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk866442 = require("./866442.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk916001 = require("./916001.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk744422 = require("./744422.js");

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var A = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(A);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(A).filter(function(e) {
      return Object.getOwnPropertyDescriptor(A, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = A[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var A = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      A.push.apply(A, n)
    }
    return A
  })(Object(t)).forEach(function(A) {
    Object.defineProperty(e, A, Object.getOwnPropertyDescriptor(t, A))
  }), e
}
let m = (0, Chunk313201.hQ)();

function h(e) {
  let {
    newRoleParams: t,
    setNewRoleParams: A
  } = e, a = r.useRef(null), {
    name: s,
    color: h
  } = t, v = e => A(t => (i()(null != t, "newRoleParams should be defined"), p(f({}, t), {
    color: e
  })));
  return (0, n.jsxs)("div", {
    className: g.roleInputContainer,
    children: [(0, n.jsx)(o.oil, {
      autoFocus: true,
      value: s,
      onChange: e => A(t => (i()(null != t, "newRoleParams should be defined"), p(f({}, t), {
        name: e
      }))),
      id: m,
      placeholder: c.intl.string(c.t.oNauug),
      maxLength: u.VKK
    }), (0, n.jsxs)("div", {
      className: g.roleColorContainer,
      children: [(0, n.jsx)(o.nn4, {
        children: c.intl.format(c.t["Vlq/pH"], {
          color: (0, l.Rf)(h)
        })
      }), (0, n.jsx)(o.yRy, {
        targetElementRef: a,
        renderPopout: e => (0, n.jsx)(o.Z$W, p(f({}, e), {
          value: h,
          onChange: v
        })),
        children: e => (0, n.jsx)(o.hU, p(f({}, e), {
          variant: "secondary",
          icon: o.ilE,
          buttonRef: a,
          "aria-label": c.intl.string(c.t.QLgdlS)
        }))
      })]
    }), (0, n.jsx)(d.Z, {
      role: t
    })]
  })
}