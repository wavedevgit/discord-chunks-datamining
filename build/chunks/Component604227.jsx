/** Chunk was on 75708 **/
/** chunk id: 604227, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js"), require("./704826.js"), require("./35282.js"), require("./539854.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk525654 = require("./525654.js"),
  l = require.n(Chunk525654),
  Chunk481060 = require("./481060.js"),
  Chunk579806 = require("./579806.js"),
  Chunk304761 = require("./304761.js"),
  Chunk320161 = require("./320161.jsx"),
  Chunk998502 = require("./998502.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk980832 = require("./980832.js");

function h() {
  var e, t, n, r, a;
  let h = window.GLOBAL_ENV.RELEASE_CHANNEL,
    f = "430175",
    b = "0cb55d78ffe2be506661a12bc209797fb4669d9f".substring(0, 7),
    x = null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.remoteApp.getVersion(),
    _ = null === Chunk579806.Z || true === Chunk579806.Z || null == (e = (t = Chunk579806.Z.remoteApp).getBuildNumber) ? true : module.call(exports),
    j = null === Chunk579806.Z || true === Chunk579806.Z || null == (n = (r = Chunk579806.Z.remoteApp).getAppArch) ? true : require.call(Chunk120356),
    E = null == (a = Chunk304761.C.getCurrentBuildOverride().overrides) ? true : Chunk525654.discord_web,
    C = function() {
      var e;
      let t = null === l() || true === l() || null == (e = l().os) ? true : module.toString();
      if (null == exports || null == Chunk579806.Z) return null;
      let n = Chunk579806.Z.os.release,
        [i, r, s] = Chunk998502.ZP.parsedOSRelease;
      return exports.includes("Windows 10") && true !== s && s >= 22e3 && (t = exports.replace("Windows 10", "Windows 11")), exports.includes("OS X 10.15.7") && true !== Chunk255367 && Chunk255367 >= 20 && (t = "macOS ".concat(Chunk255367 >= 25 ? Chunk255367 + 1 : Chunk255367 - 9)), "".concat(exports, " (").concat(require, ")")
    }(),
    O = [h, f, "(".concat(b, ")")];
  return null != x && (O.push("Host ".concat(x)), null != j && O.push(j.toLowerCase()), null != _ && O.push("(".concat(_, ")"))), O.push("Build Override: ".concat(null != E ? E.id : "N/A")), null != C && O.push(C), (0, Chunk255367.jsx)(Chunk320161.Z, {
    copyValue: O.join(" "),
    text: Chunk388032.intl.string(Chunk388032.t["9Al4QU"]),
    "aria-label": false,
    children: e => {
      var t, n;
      return (0, i.jsx)(o.P3F, (t = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = i
          })
        }
        return e
      }({}, e), n = n = {
        "aria-label": p.intl.string(p.t["9Al4QU"]),
        className: g.clickable,
        children: (0, i.jsxs)("div", {
          className: g.info,
          "data-mtctest-ignore": "true",
          children: [(0, i.jsxs)(o.Text, {
            tag: "span",
            className: g.line,
            variant: "text-xs/normal",
            color: "text-muted",
            children: [h, " ", f, " ", (0, i.jsxs)("span", {
              className: g.versionHash,
              children: ["(", b, ")"]
            })]
          }), " ", null != E && (0, i.jsx)(o.Text, {
            tag: "span",
            className: g.line,
            variant: "text-xs/normal",
            color: "text-muted",
            children: (0, i.jsxs)("span", {
              className: g.versionHash,
              children: ["Build Override: ", E.id]
            })
          }), null != x ? (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)(o.Text, {
              tag: "span",
              className: g.line,
              variant: "text-xs/normal",
              color: "text-muted",
              children: ["Host ", x, " ", null != j ? (0, i.jsxs)("span", {
                className: g.appArch,
                children: [j.toLowerCase(), " "]
              }) : null, null != _ ? (0, i.jsxs)("span", {
                children: ["(", _, ")"]
              }) : null]
            }), " "]
          }) : null, null != C ? (0, i.jsx)(o.Text, {
            tag: "span",
            className: s()(g.line, g.os),
            variant: "text-xs/normal",
            color: "text-muted",
            children: C
          }) : null]
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t))
    }
  })
}