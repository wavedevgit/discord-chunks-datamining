/** Chunk was on 63379 **/
/** chunk id: 29086, original params: A,t,e (module,exports,require) **/
require.d(exports, {
  A: () => H,
  V: () => i
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  v = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk328006 = require("./328006.js"),
  Chunk857909 = require("./857909.js"),
  Chunk334840 = require("./334840.js"),
  Chunk653919 = require("./653919.js"),
  Chunk203656 = require("./203656.jsx"),
  Chunk583970 = require("./583970.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk197827 = require("./197827.js");

function i(A) {
  return (0, g.jsxs)("div", {
    className: v()(Q.zC, A.className),
    children: [(0, g.jsx)("div", {
      className: Q.H,
      children: "string" == typeof A.avatar ? (0, g.jsx)("img", {
        className: Q.my,
        src: A.avatar,
        alt: "".concat(A.username, " avatar"),
        width: 40,
        height: 40
      }) : A.avatar
    }), (0, g.jsxs)("div", {
      className: Q.hQ,
      children: [(0, g.jsxs)("div", {
        className: Q.QV,
        children: ["string" == typeof A.username ? (0, g.jsx)(f.Text, {
          "data-text": A.username,
          className: A.usernameClassName,
          variant: "text-md/semibold",
          style: A.usernameStyle,
          children: A.username
        }) : A.username, true !== A.decorations && (0, g.jsx)("div", {
          className: Q.bw,
          children: A.decorations
        })]
      }), null != A.message && (0, g.jsx)(f.Text, {
        variant: "text-md/medium",
        children: A.message
      }), A.asset]
    })]
  })
}
let H = function(A) {
  let {
    className: t
  } = A, e = function(A, t) {
    if (null == A) return {};
    var e, g, r, v = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (r = 0, e = Reflect.ownKeys(A); r < e.length; r++) g = e[r], !(t.indexOf(g) >= 0) && Object.prototype.propertyIsEnumerable.call(A, g) && (v[g] = A[g]);
      return v
    }
    if (v = function(A, t) {
        if (null == A) return {};
        var e, g, r = {},
          v = Object.getOwnPropertyNames(A);
        for (g = 0; g < v.length; g++) e = v[g], !(t.indexOf(e) >= 0) && Object.prototype.propertyIsEnumerable.call(A, e) && (r[e] = A[e]);
        return r
      }(A, t), Object.getOwnPropertySymbols)
      for (r = 0, e = Object.getOwnPropertySymbols(A); r < e.length; r++) g = e[r], !(t.indexOf(g) >= 0) && Object.prototype.propertyIsEnumerable.call(A, g) && (v[g] = A[g]);
    return v
  }(A, ["className"]);
  return (0, g.jsxs)("div", {
    className: v()(Q.kL, t),
    children: [(0, g.jsx)(i, {
      className: Q.E6,
      avatar: B.A,
      username: "Roka",
      usernameStyle: {
        color: "var(--brand-400)"
      },
      message: o.intl.string(w.default.bpghV6)
    }), (0, g.jsx)(i, {
      className: Q.E6,
      avatar: h.A,
      username: "hongo",
      usernameStyle: {
        color: "var(--green-230)"
      },
      message: o.intl.string(w.default.rnpv79)
    }), (0, g.jsx)(i, {
      avatar: n.A,
      username: "Lily",
      usernameStyle: {
        color: "var(--orange-300)"
      },
      message: o.intl.string(w.default.u7tjsh),
      decorations: (0, g.jsx)(C.M, function(A) {
        for (var t = 1; t < arguments.length; t++) {
          var e = null != arguments[t] ? arguments[t] : {},
            g = Object.keys(e);
          "function" == typeof Object.getOwnPropertySymbols && (g = g.concat(Object.getOwnPropertySymbols(e).filter(function(A) {
            return Object.getOwnPropertyDescriptor(e, A).enumerable
          }))), g.forEach(function(t) {
            var g;
            g = e[t], t in A ? Object.defineProperty(A, t, {
              value: g,
              enumerable: true,
              configurable: true,
              writable: true
            }) : A[t] = g
          })
        }
        return A
      }({}, e))
    }), (0, g.jsx)(i, {
      className: Q.E6,
      avatar: l.A,
      username: "sharon",
      usernameStyle: {
        color: "var(--brand-400)"
      },
      message: o.intl.string(w.default.GlWVJH)
    }), (0, g.jsx)(i, {
      className: Q.E6,
      avatar: n.A,
      username: "Lily",
      usernameStyle: {
        color: "var(--orange-300)"
      },
      message: o.intl.string(w.default.AIp9hh)
    })]
  })
}