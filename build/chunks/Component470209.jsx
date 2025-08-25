/** Chunk was on 73628 **/
/** chunk id: 470209, original params: e,t,A (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk866442 = require("./866442.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk744422 = require("./744422.js");

function g(e) {
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

function b(e) {
  let {
    newRoleParams: t,
    setNewRoleParams: A
  } = e, l = r.useRef(null), {
    name: d,
    color: b
  } = t, h = e => A(t => (a()(null != t, "newRoleParams should be defined"), p(g({}, t), {
    color: e
  })));
  return (0, n.jsxs)("div", {
    className: f.roleInputContainer,
    children: [(0, n.jsx)(i.Is, {
      autoFocus: true,
      value: d,
      onChange: e => A(t => (a()(null != t, "newRoleParams should be defined"), p(g({}, t), {
        name: e
      }))),
      id: m,
      placeholder: u.intl.string(u.t.oNauur),
      maxLength: c.VKK,
      inputClassName: f.input
    }), (0, n.jsxs)("div", {
      className: f.roleColorContainer,
      children: [(0, n.jsx)(s.nn4, {
        children: u.intl.format(u.t["Vlq/pK"], {
          color: (0, o.Rf)(b)
        })
      }), (0, n.jsx)("div", {
        className: f.roleColorPreview,
        style: {
          backgroundColor: (0, o.Rf)(b)
        }
      }), (0, n.jsx)(s.LZC, {
        size: 8,
        horizontal: true
      }), (0, n.jsx)(s.yRy, {
        targetElementRef: l,
        renderPopout: e => (0, n.jsx)(s.Z$W, p(g({}, e), {
          value: b,
          onChange: h
        })),
        children: e => (0, n.jsx)(s.P3F, p(g({}, e), {
          innerRef: l,
          tag: "span",
          "aria-label": u.intl.string(u.t.QLgdlZ),
          className: f.dropperIconContainer,
          children: (0, n.jsx)(s.ilE, {
            size: "xs",
            color: "currentColor",
            className: f.dropperIcon
          })
        }))
      })]
    })]
  })
}