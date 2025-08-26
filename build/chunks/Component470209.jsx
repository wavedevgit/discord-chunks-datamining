/** Chunk was on 73628 **/
/** chunk id: 470209, original params: e,A,t (module,exports,require) **/
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
let m = (0, Chunk313201.hQ)();

function b(e) {
  let {
    newRoleParams: A,
    setNewRoleParams: t
  } = e, l = n.useRef(null), {
    name: d,
    color: b
  } = A, q = e => t(A => (a()(null != A, "newRoleParams should be defined"), p(g({}, A), {
    color: e
  })));
  return (0, r.jsxs)("div", {
    className: f.roleInputContainer,
    children: [(0, r.jsx)(i.Is, {
      autoFocus: true,
      value: d,
      onChange: e => t(A => (a()(null != A, "newRoleParams should be defined"), p(g({}, A), {
        name: e
      }))),
      id: m,
      placeholder: u.intl.string(u.t.oNauur),
      maxLength: c.VKK,
      inputClassName: f.input
    }), (0, r.jsxs)("div", {
      className: f.roleColorContainer,
      children: [(0, r.jsx)(s.nn4, {
        children: u.intl.format(u.t["Vlq/pK"], {
          color: (0, o.Rf)(b)
        })
      }), (0, r.jsx)("div", {
        className: f.roleColorPreview,
        style: {
          backgroundColor: (0, o.Rf)(b)
        }
      }), (0, r.jsx)(s.LZC, {
        size: 8,
        horizontal: true
      }), (0, r.jsx)(s.yRy, {
        targetElementRef: l,
        renderPopout: e => (0, r.jsx)(s.Z$W, p(g({}, e), {
          value: b,
          onChange: q
        })),
        children: e => (0, r.jsx)(s.P3F, p(g({}, e), {
          innerRef: l,
          tag: "span",
          "aria-label": u.intl.string(u.t.QLgdlZ),
          className: f.dropperIconContainer,
          children: (0, r.jsx)(s.ilE, {
            size: "xs",
            color: "currentColor",
            className: f.dropperIcon
          })
        }))
      })]
    })]
  })
}