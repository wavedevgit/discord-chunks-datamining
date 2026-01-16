/** Chunk was on web.js **/
/** chunk id: 604227, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./388685.js"), require("./704826.js"), require("./35282.js"), require("./539854.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk525654 = require("./525654.js"),
  s = require.n(Chunk525654),
  Chunk481060 = require("./481060.js"),
  Chunk579806 = require("./579806.js"),
  Chunk304761 = require("./304761.js"),
  Chunk313201 = require("./313201.js"),
  Chunk320161 = require("./320161.jsx"),
  Chunk998502 = require("./998502.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk574775 = require("./574775.js");

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

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function y() {
  var e;
  let t = null === s() || true === s() || null == (e = s().os) ? true : e.toString();
  if (null == t || null == c.Z) return null;
  let n = c.Z.os.release,
    [r, i, a] = p.ZP.parsedOSRelease;
  if (t.includes("Windows 10") && true !== a && a >= 22e3 && (t = t.replace("Windows 10", "Windows 11")), t.includes("OS X 10.15.7") && true !== r && r >= 20) {
    let e = r >= 25 ? r + 1 : r - 9;
    t = "macOS ".concat(e)
  }
  return "".concat(t, " (").concat(n, ")")
}

function O(e) {
  var t, n, i, o, s;
  let {
    compact: p = false
  } = e, m = (0, d.Dt)(), E = window.GLOBAL_ENV.RELEASE_CHANNEL, O = "486628", v = "7a6f040c97c987eb73ede27882cd4d324c70223f".substring(0, 7), S = null === c.Z || true === c.Z ? true : c.Z.remoteApp.getVersion(), I = null === c.Z || true === c.Z || null == (t = (n = c.Z.remoteApp).getBuildNumber) ? true : t.call(n), T = null === c.Z || true === c.Z || null == (i = (o = c.Z.remoteApp).getAppArch) ? true : i.call(o), C = null == (s = u.C.getCurrentBuildOverride().overrides) ? true : s.discord_web, A = y(), N = [E, O, "(".concat(v, ")")];
  return (null != S && (N.push("Host ".concat(S)), null != T && N.push(T.toLowerCase()), null != I && N.push("(".concat(I, ")"))), N.push("Build Override: ".concat(null != C ? C.id : "N/A")), null != A && N.push(A), p) ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(f.Z, {
      copyValue: N.join(" "),
      text: _.intl.string(_.t["9Al4Qd"]),
      "aria-label": false,
      dataMeticulousIgnore: "true",
      children: e => (0, r.jsxs)(l.P3F, b(g({}, e), {
        "aria-describedby": m,
        className: a()(h.clickable, h.compact),
        children: [(0, r.jsxs)("div", {
          className: h.compactInfo,
          "data-mtctest-ignore": "true",
          children: [(0, r.jsxs)(l.Text, {
            tag: "span",
            variant: "text-xxs/normal",
            color: "text-muted",
            children: [E, " ", O, " ", (0, r.jsxs)("span", {
              className: h.versionHash,
              children: ["(", v, ")"]
            })]
          }), null != S && (0, r.jsxs)(l.Text, {
            tag: "span",
            variant: "text-xxs/normal",
            color: "text-muted",
            children: [S, null != T && (0, r.jsxs)("span", {
              className: h.appArch,
              children: [" ", T.toLowerCase()]
            }), null != I && (0, r.jsxs)("span", {
              children: [" (", I, ")"]
            })]
          })]
        }), null != C && (0, r.jsx)(l.Text, {
          tag: "span",
          variant: "text-xxs/normal",
          color: "text-muted",
          children: (0, r.jsxs)("span", {
            className: h.versionHash,
            children: ["Build Override: ", C.id]
          })
        })]
      }))
    }), (0, r.jsx)(l.nn4, {
      id: m,
      children: _.intl.string(_.t["9Al4Qd"])
    })]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(f.Z, {
      copyValue: N.join(" "),
      text: _.intl.string(_.t["9Al4Qd"]),
      "aria-label": false,
      dataMeticulousIgnore: "true",
      children: e => (0, r.jsx)(l.P3F, b(g({}, e), {
        "aria-describedby": m,
        className: a()(h.clickable, h.compact),
        children: (0, r.jsxs)("div", {
          className: h.info,
          "data-mtctest-ignore": "true",
          children: [(0, r.jsxs)(l.Text, {
            tag: "span",
            className: h.line,
            variant: "text-xs/normal",
            color: "text-muted",
            children: [E, " ", O, " ", (0, r.jsxs)("span", {
              className: h.versionHash,
              children: ["(", v, ")"]
            })]
          }), " ", null != C && (0, r.jsx)(l.Text, {
            tag: "span",
            className: h.line,
            variant: "text-xs/normal",
            color: "text-muted",
            children: (0, r.jsxs)("span", {
              className: h.versionHash,
              children: ["Build Override: ", C.id]
            })
          }), null != S ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsxs)(l.Text, {
              tag: "span",
              className: h.line,
              variant: "text-xs/normal",
              color: "text-muted",
              children: ["Host ", S, " ", null != T ? (0, r.jsxs)("span", {
                className: h.appArch,
                children: [T.toLowerCase(), " "]
              }) : null, null != I ? (0, r.jsxs)("span", {
                children: ["(", I, ")"]
              }) : null]
            }), " "]
          }) : null, null != A ? (0, r.jsx)(l.Text, {
            tag: "span",
            className: a()(h.line, h.os),
            variant: "text-xs/normal",
            color: "text-muted",
            children: A
          }) : null]
        })
      }))
    }), (0, r.jsx)(l.nn4, {
      id: m,
      children: _.intl.string(_.t["9Al4Qd"])
    })]
  })
}