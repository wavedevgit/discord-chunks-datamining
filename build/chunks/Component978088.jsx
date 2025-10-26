/** Chunk was on 76692 **/
/** chunk id: 978088, original params: A,t,g (module,exports,require) **/
require.d(exports, {
  Z: () => o,
  l: () => H
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk957537 = require("./957537.js"),
  Chunk737770 = require("./737770.js"),
  Chunk839008 = require("./839008.js"),
  Chunk685184 = require("./685184.js"),
  Chunk9377 = require("./9377.jsx"),
  Chunk562915 = require("./562915.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk783385 = require("./783385.js");

function H(A) {
  return (0, v.jsxs)("div", {
    className: r()(i.messageContainer, A.className),
    children: [(0, v.jsx)("div", {
      className: i.avatarContainer,
      children: "string" == typeof A.avatar ? (0, v.jsx)("img", {
        className: i.avatar,
        src: A.avatar,
        alt: "".concat(A.username, " avatar"),
        width: 40,
        height: 40
      }) : A.avatar
    }), (0, v.jsxs)("div", {
      className: i.contentContainer,
      children: [(0, v.jsxs)("div", {
        className: i.usernameContainer,
        children: ["string" == typeof A.username ? (0, v.jsx)(f.Text, {
          "data-text": A.username,
          className: A.usernameClassName,
          variant: "text-md/semibold",
          style: A.usernameStyle,
          children: A.username
        }) : A.username, true !== A.decorations && (0, v.jsx)("div", {
          className: i.decorationsContainer,
          children: A.decorations
        })]
      }), null != A.message && (0, v.jsx)(f.Text, {
        variant: "text-md/medium",
        children: A.message
      }), A.asset]
    })]
  })
}
let o = function(A) {
  var {
    className: t
  } = A, g = function(A, t) {
    if (null == A) return {};
    var g, v, e = function(A, t) {
      if (null == A) return {};
      var g, v, e = {},
        r = Object.keys(A);
      for (v = 0; v < r.length; v++) g = r[v], t.indexOf(g) >= 0 || (e[g] = A[g]);
      return e
    }(A, t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(A);
      for (v = 0; v < r.length; v++) g = r[v], !(t.indexOf(g) >= 0) && Object.prototype.propertyIsEnumerable.call(A, g) && (e[g] = A[g])
    }
    return e
  }(A, ["className"]);
  return (0, v.jsxs)("div", {
    className: r()(i.container, t),
    children: [(0, v.jsx)(H, {
      className: i.unfocusedMessage,
      avatar: B.Z,
      username: "Roka",
      usernameStyle: {
        color: "var(--brand-400)"
      },
      message: Q.intl.string(l.default.bpghV6)
    }), (0, v.jsx)(H, {
      className: i.unfocusedMessage,
      avatar: h.Z,
      username: "hongo",
      usernameStyle: {
        color: "var(--green-230)"
      },
      message: Q.intl.string(l.default.rnpv79)
    }), (0, v.jsx)(H, {
      avatar: n.Z,
      username: "Lily",
      usernameStyle: {
        color: "var(--orange-300)"
      },
      message: Q.intl.string(l.default.u7tjsh),
      decorations: (0, v.jsx)(w.S, function(A) {
        for (var t = 1; t < arguments.length; t++) {
          var g = null != arguments[t] ? arguments[t] : {},
            v = Object.keys(g);
          "function" == typeof Object.getOwnPropertySymbols && (v = v.concat(Object.getOwnPropertySymbols(g).filter(function(A) {
            return Object.getOwnPropertyDescriptor(g, A).enumerable
          }))), v.forEach(function(t) {
            var v;
            v = g[t], t in A ? Object.defineProperty(A, t, {
              value: v,
              enumerable: true,
              configurable: true,
              writable: true
            }) : A[t] = v
          })
        }
        return A
      }({}, g))
    }), (0, v.jsx)(H, {
      className: i.unfocusedMessage,
      avatar: C.Z,
      username: "sharon",
      usernameStyle: {
        color: "var(--brand-400)"
      },
      message: Q.intl.string(l.default.GlWVJH)
    }), (0, v.jsx)(H, {
      className: i.unfocusedMessage,
      avatar: n.Z,
      username: "Lily",
      usernameStyle: {
        color: "var(--orange-300)"
      },
      message: Q.intl.string(l.default.AIp9hh)
    })]
  })
}