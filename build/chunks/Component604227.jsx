/** Chunk was on web.js **/
/** chunk id: 604227, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./388685.js"), require("./704826.js"), require("./35282.js"), require("./539854.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk525654 = require("./525654.js"),
  s = require.n(Chunk525654),
  Chunk481060 = require("./481060.js"),
  Chunk579806 = require("./579806.js"),
  Chunk304761 = require("./304761.js"),
  Chunk320161 = require("./320161.jsx"),
  Chunk998502 = require("./998502.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk447160 = require("./447160.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function b() {
  var e;
  let t = null === s() || true === s() || null == (e = s().os) ? true : module.toString();
  if (null == exports || null == Chunk579806.Z) return null;
  let n = Chunk579806.Z.os.release,
    [r, i, a] = Chunk998502.ZP.parsedOSRelease;
  if (exports.includes("Windows 10") && true !== a && a >= 22e3 && (t = exports.replace("Windows 10", "Windows 11")), exports.includes("OS X 10.15.7") && true !== Chunk951288 && Chunk951288 >= 20) {
    let e = Chunk951288 >= 25 ? Chunk951288 + 1 : Chunk951288 - 9;
    t = "macOS ".concat(module)
  }
  return "".concat(exports, " (").concat(require, ")")
}

function y(e) {
  var t, n, i, o, s;
  let {
    compact: f = false
  } = e, h = window.GLOBAL_ENV.RELEASE_CHANNEL, g = "441572", y = "f61673464515b74c260be76aea8def4ac302509b".substring(0, 7), O = null === c.Z || true === c.Z ? true : c.Z.remoteApp.getVersion(), v = null === c.Z || true === c.Z || null == (t = (n = c.Z.remoteApp).getBuildNumber) ? true : t.call(n), I = null === c.Z || true === c.Z || null == (i = (o = c.Z.remoteApp).getAppArch) ? true : i.call(o), T = null == (s = u.C.getCurrentBuildOverride().overrides) ? true : s.discord_web, S = b(), A = [h, g, "(".concat(y, ")")];
  return (null != O && (A.push("Host ".concat(O)), null != I && A.push(I.toLowerCase()), null != v && A.push("(".concat(v, ")"))), A.push("Build Override: ".concat(null != T ? T.id : "N/A")), null != S && A.push(S), f) ? (0, r.jsx)(d.Z, {
    copyValue: A.join(" "),
    text: _.intl.string(_.t["9Al4QU"]),
    "aria-label": false,
    children: e => (0, r.jsx)(l.P3F, E(m({}, e), {
      "aria-label": _.intl.string(_.t["9Al4QU"]),
      className: p.clickable,
      children: (0, r.jsxs)("div", {
        className: p.compactInfo,
        "data-mtctest-ignore": "true",
        children: [(0, r.jsxs)(l.Text, {
          tag: "span",
          variant: "text-xxs/normal",
          color: "text-muted",
          children: [h, " ", g, " ", (0, r.jsxs)("span", {
            className: p.versionHash,
            children: ["(", y, ")"]
          })]
        }), null != T && (0, r.jsx)(l.Text, {
          tag: "span",
          variant: "text-xxs/normal",
          color: "text-muted",
          children: (0, r.jsxs)("span", {
            className: p.versionHash,
            children: ["Build Override: ", T.id]
          })
        }), null != O && (0, r.jsxs)(l.Text, {
          tag: "span",
          variant: "text-xxs/normal",
          color: "text-muted",
          children: [O, null != I && (0, r.jsxs)("span", {
            className: p.appArch,
            children: [" ", I.toLowerCase()]
          }), null != v && (0, r.jsxs)("span", {
            children: [" (", v, ")"]
          })]
        }), null != S && (0, r.jsx)(l.Text, {
          tag: "span",
          variant: "text-xxs/normal",
          color: "text-muted",
          className: p.os,
          children: S
        })]
      })
    }))
  }) : (0, r.jsx)(d.Z, {
    copyValue: A.join(" "),
    text: _.intl.string(_.t["9Al4QU"]),
    "aria-label": false,
    children: e => (0, r.jsx)(l.P3F, E(m({}, e), {
      "aria-label": _.intl.string(_.t["9Al4QU"]),
      className: p.clickable,
      children: (0, r.jsxs)("div", {
        className: p.info,
        "data-mtctest-ignore": "true",
        children: [(0, r.jsxs)(l.Text, {
          tag: "span",
          className: p.line,
          variant: "text-xs/normal",
          color: "text-muted",
          children: [h, " ", g, " ", (0, r.jsxs)("span", {
            className: p.versionHash,
            children: ["(", y, ")"]
          })]
        }), " ", null != T && (0, r.jsx)(l.Text, {
          tag: "span",
          className: p.line,
          variant: "text-xs/normal",
          color: "text-muted",
          children: (0, r.jsxs)("span", {
            className: p.versionHash,
            children: ["Build Override: ", T.id]
          })
        }), null != O ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsxs)(l.Text, {
            tag: "span",
            className: p.line,
            variant: "text-xs/normal",
            color: "text-muted",
            children: ["Host ", O, " ", null != I ? (0, r.jsxs)("span", {
              className: p.appArch,
              children: [I.toLowerCase(), " "]
            }) : null, null != v ? (0, r.jsxs)("span", {
              children: ["(", v, ")"]
            }) : null]
          }), " "]
        }) : null, null != S ? (0, r.jsx)(l.Text, {
          tag: "span",
          className: a()(p.line, p.os),
          variant: "text-xs/normal",
          color: "text-muted",
          children: S
        }) : null]
      })
    }))
  })
}