/** Chunk was on 12630 **/
/** chunk id: 742409, original params: A,e,t (module,exports,require) **/
require.d(exports, {
  Z: () => d,
  l: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk957537 = require("./957537.js"),
  Chunk737770 = require("./737770.js"),
  Chunk839008 = require("./839008.js"),
  Chunk685184 = require("./685184.js"),
  Chunk369509 = require("./369509.jsx"),
  Chunk899926 = require("./899926.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk215486 = require("./215486.js");

function h(A) {
  return (0, n.jsxs)("div", {
    className: l()(u.messageContainer, A.className),
    children: [(0, n.jsx)("div", {
      className: u.avatarContainer,
      children: "string" == typeof A.avatar ? (0, n.jsx)("img", {
        className: u.avatar,
        src: A.avatar,
        alt: "".concat(A.username, " avatar"),
        width: 40,
        height: 40
      }) : A.avatar
    }), (0, n.jsxs)("div", {
      className: u.contentContainer,
      children: [(0, n.jsxs)("div", {
        className: u.usernameContainer,
        children: ["string" == typeof A.username ? (0, n.jsx)(i.Text, {
          "data-text": A.username,
          className: A.usernameClassName,
          variant: "text-md/semibold",
          style: A.usernameStyle,
          children: A.username
        }) : A.username, true !== A.decorations && (0, n.jsx)("div", {
          className: u.decorationsContainer,
          children: A.decorations
        })]
      }), null != A.message && (0, n.jsx)(i.Text, {
        variant: "text-md/medium",
        children: A.message
      }), A.asset]
    })]
  })
}
let d = function(A) {
  var {
    className: e
  } = A, t = function(A, e) {
    if (null == A) return {};
    var t, n, r = function(A, e) {
      if (null == A) return {};
      var t, n, r = {},
        l = Object.keys(A);
      for (n = 0; n < l.length; n++) t = l[n], e.indexOf(t) >= 0 || (r[t] = A[t]);
      return r
    }(A, e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(A);
      for (n = 0; n < l.length; n++) t = l[n], !(e.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(A, t) && (r[t] = A[t])
    }
    return r
  }(A, ["className"]);
  return (0, n.jsxs)("div", {
    className: l()(u.container, e),
    children: [(0, n.jsx)(h, {
      className: u.unfocusedMessage,
      avatar: s.Z,
      username: "Roka",
      usernameStyle: {
        color: "var(--brand-400)"
      },
      message: v.intl.string(f.default.bpghV1)
    }), (0, n.jsx)(h, {
      className: u.unfocusedMessage,
      avatar: a.Z,
      username: "hongo",
      usernameStyle: {
        color: "var(--green-230)"
      },
      message: v.intl.string(f.default["rnpv7+"])
    }), (0, n.jsx)(h, {
      avatar: o.Z,
      username: "Lily",
      usernameStyle: {
        color: "var(--orange-300)"
      },
      message: v.intl.string(f.default.u7tjsr),
      decorations: (0, n.jsx)(c.S, function(A) {
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
      }({}, t))
    }), (0, n.jsx)(h, {
      className: u.unfocusedMessage,
      avatar: g.Z,
      username: "sharon",
      usernameStyle: {
        color: "var(--brand-400)"
      },
      message: v.intl.string(f.default.GlWVJC)
    }), (0, n.jsx)(h, {
      className: u.unfocusedMessage,
      avatar: o.Z,
      username: "Lily",
      usernameStyle: {
        color: "var(--orange-300)"
      },
      message: v.intl.string(f.default.AIp9ho)
    })]
  })
}