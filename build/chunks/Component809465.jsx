/** Chunk was on web.js **/
/** chunk id: 809465, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => O
}), require("./896048.js"), require("./747238.js"), require("./812715.js"), require("./321073.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk481613 = require("./481613.js"),
  o = require.n(Chunk481613),
  Chunk397927 = require("./397927.js"),
  Chunk77729 = require("./77729.js"),
  Chunk521502 = require("./521502.js"),
  Chunk915089 = require("./915089.js"),
  Chunk206845 = require("./206845.jsx"),
  Chunk837921 = require("./837921.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk355893 = require("./355893.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function b() {
  var e;
  let t = null === o() || true === o() || null == (e = o().os) ? true : e.toString();
  if (null == t || null == c.A) return null;
  let n = c.A.os.release,
    [r, i, a] = p.Ay.parsedOSRelease;
  if (t.includes("Windows 10") && true !== a && a >= 22e3 && (t = t.replace("Windows 10", "Windows 11")), t.includes("OS X 10.15.7") && true !== r && r >= 20) {
    let e = r >= 25 ? r + 1 : r - 9;
    t = "macOS ".concat(e)
  }
  return "".concat(t, " (").concat(n, ")")
}

function O(e) {
  var t, n, i, s, o;
  let {
    compact: p = false
  } = e, m = (0, d.GV)(), E = window.GLOBAL_ENV.RELEASE_CHANNEL, O = "489201", v = "6578f6bf33b96d2cd9f1e29c046baa2376d3c2a9".substring(0, 7), A = null === c.A || true === c.A ? true : c.A.remoteApp.getVersion(), I = null === c.A || true === c.A || null == (t = (n = c.A.remoteApp).getBuildNumber) ? true : t.call(n), S = null === c.A || true === c.A || null == (i = (s = c.A.remoteApp).getAppArch) ? true : i.call(s), T = null == (o = u.A.getCurrentBuildOverride().overrides) ? true : o.discord_web, C = b(), N = [E, O, "(".concat(v, ")")];
  return (null != A && (N.push("Host ".concat(A)), null != S && N.push(S.toLowerCase()), null != I && N.push("(".concat(I, ")"))), N.push("Build Override: ".concat(null != T ? T.id : "N/A")), null != C && N.push(C), p) ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(f.A, {
      copyValue: N.join(" "),
      text: _.intl.string(_.t["9Al4Qd"]),
      "aria-label": false,
      dataMeticulousIgnore: "true",
      children: e => (0, r.jsxs)(l.DUT, y(g({}, e), {
        "aria-describedby": m,
        className: a()(h.vk, h.oE),
        children: [(0, r.jsxs)("div", {
          className: h.Cr,
          "data-mtctest-ignore": "true",
          children: [(0, r.jsxs)(l.Text, {
            tag: "span",
            variant: "text-xxs/normal",
            color: "text-muted",
            children: [E, " ", O, " ", (0, r.jsxs)("span", {
              className: h.Pc,
              children: ["(", v, ")"]
            })]
          }), null != A && (0, r.jsxs)(l.Text, {
            tag: "span",
            variant: "text-xxs/normal",
            color: "text-muted",
            children: [A, null != S && (0, r.jsxs)("span", {
              className: h.GI,
              children: [" ", S.toLowerCase()]
            }), null != I && (0, r.jsxs)("span", {
              children: [" (", I, ")"]
            })]
          })]
        }), null != T && (0, r.jsx)(l.Text, {
          tag: "span",
          variant: "text-xxs/normal",
          color: "text-muted",
          children: (0, r.jsxs)("span", {
            className: h.Pc,
            children: ["Build Override: ", T.id]
          })
        })]
      }))
    }), (0, r.jsx)(l.AC4, {
      id: m,
      children: _.intl.string(_.t["9Al4Qd"])
    })]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(f.A, {
      copyValue: N.join(" "),
      text: _.intl.string(_.t["9Al4Qd"]),
      "aria-label": false,
      dataMeticulousIgnore: "true",
      children: e => (0, r.jsx)(l.DUT, y(g({}, e), {
        "aria-describedby": m,
        className: a()(h.vk, h.oE),
        children: (0, r.jsxs)("div", {
          className: h.pq,
          "data-mtctest-ignore": "true",
          children: [(0, r.jsxs)(l.Text, {
            tag: "span",
            className: h.n8,
            variant: "text-xs/normal",
            color: "text-muted",
            children: [E, " ", O, " ", (0, r.jsxs)("span", {
              className: h.Pc,
              children: ["(", v, ")"]
            })]
          }), " ", null != T && (0, r.jsx)(l.Text, {
            tag: "span",
            className: h.n8,
            variant: "text-xs/normal",
            color: "text-muted",
            children: (0, r.jsxs)("span", {
              className: h.Pc,
              children: ["Build Override: ", T.id]
            })
          }), null != A ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsxs)(l.Text, {
              tag: "span",
              className: h.n8,
              variant: "text-xs/normal",
              color: "text-muted",
              children: ["Host ", A, " ", null != S ? (0, r.jsxs)("span", {
                className: h.GI,
                children: [S.toLowerCase(), " "]
              }) : null, null != I ? (0, r.jsxs)("span", {
                children: ["(", I, ")"]
              }) : null]
            }), " "]
          }) : null, null != C ? (0, r.jsx)(l.Text, {
            tag: "span",
            className: a()(h.n8, h.os),
            variant: "text-xs/normal",
            color: "text-muted",
            children: C
          }) : null]
        })
      }))
    }), (0, r.jsx)(l.AC4, {
      id: m,
      children: _.intl.string(_.t["9Al4Qd"])
    })]
  })
}