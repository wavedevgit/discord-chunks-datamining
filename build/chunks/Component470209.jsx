/** Chunk was on 73628 **/
/** chunk id: 470209, original params: e,t,A (module,exports,require) **/
require.d(exports, {
  Z: () => h
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
  Chunk874847 = require("./874847.js");

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var A = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(A);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(A).filter(function(e) {
      return Object.getOwnPropertyDescriptor(A, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = A[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var A = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      A.push.apply(A, r)
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
  } = e, a = n.useRef(null), {
    name: s,
    color: h
  } = t, v = e => A(t => (l()(null != t, "newRoleParams should be defined"), p(f({}, t), {
    color: e
  })));
  return (0, r.jsxs)("div", {
    className: g.roleInputContainer,
    children: [(0, r.jsx)(o.oil, {
      autoFocus: true,
      value: s,
      onChange: e => A(t => (l()(null != t, "newRoleParams should be defined"), p(f({}, t), {
        name: e
      }))),
      id: m,
      placeholder: u.intl.string(u.t.oNauur),
      maxLength: c.VKK
    }), (0, r.jsxs)("div", {
      className: g.roleColorContainer,
      children: [(0, r.jsx)(o.nn4, {
        children: u.intl.format(u.t["Vlq/pK"], {
          color: (0, i.Rf)(h)
        })
      }), (0, r.jsx)(o.yRy, {
        targetElementRef: a,
        renderPopout: e => (0, r.jsx)(o.Z$W, p(f({}, e), {
          value: h,
          onChange: v
        })),
        children: e => (0, r.jsx)(o.hU, p(f({}, e), {
          variant: "secondary",
          icon: o.ilE,
          buttonRef: a,
          "aria-label": u.intl.string(u.t.QLgdlZ)
        }))
      })]
    }), (0, r.jsx)(d.Z, {
      role: t
    })]
  })
}