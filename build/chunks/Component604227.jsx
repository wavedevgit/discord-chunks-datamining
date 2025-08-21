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

function y() {
  var e, t, n, i, o;
  let s = window.GLOBAL_ENV.RELEASE_CHANNEL,
    f = "435131",
    h = "6769e60c1f580ae9ddc3648036a23129f62b7444".substring(0, 7),
    g = null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.remoteApp.getVersion(),
    y = null === Chunk579806.Z || true === Chunk579806.Z || null == (e = (t = Chunk579806.Z.remoteApp).getBuildNumber) ? true : module.call(exports),
    O = null === Chunk579806.Z || true === Chunk579806.Z || null == (n = (i = Chunk579806.Z.remoteApp).getAppArch) ? true : require.call(Chunk120356),
    v = null == (o = Chunk304761.C.getCurrentBuildOverride().overrides) ? true : Chunk525654.discord_web,
    I = b(),
    T = [s, Chunk998502, "(".concat(h, ")")];
  return null != g && (T.push("Host ".concat(g)), null != O && T.push(O.toLowerCase()), null != y && T.push("(".concat(y, ")"))), T.push("Build Override: ".concat(null != v ? v.id : "N/A")), null != I && T.push(I), (0, Chunk951288.jsx)(Chunk320161.Z, {
    copyValue: T.join(" "),
    text: Chunk388032.intl.string(Chunk388032.t["9Al4QU"]),
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
          children: [s, " ", f, " ", (0, r.jsxs)("span", {
            className: p.versionHash,
            children: ["(", h, ")"]
          })]
        }), " ", null != v && (0, r.jsx)(l.Text, {
          tag: "span",
          className: p.line,
          variant: "text-xs/normal",
          color: "text-muted",
          children: (0, r.jsxs)("span", {
            className: p.versionHash,
            children: ["Build Override: ", v.id]
          })
        }), null != g ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsxs)(l.Text, {
            tag: "span",
            className: p.line,
            variant: "text-xs/normal",
            color: "text-muted",
            children: ["Host ", g, " ", null != O ? (0, r.jsxs)("span", {
              className: p.appArch,
              children: [O.toLowerCase(), " "]
            }) : null, null != y ? (0, r.jsxs)("span", {
              children: ["(", y, ")"]
            }) : null]
          }), " "]
        }) : null, null != I ? (0, r.jsx)(l.Text, {
          tag: "span",
          className: a()(p.line, p.os),
          variant: "text-xs/normal",
          color: "text-muted",
          children: I
        }) : null]
      })
    }))
  })
}