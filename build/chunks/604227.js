/** Chunk was on 51724 **/
n.d(t, {
  Z: () => p
}), n(47120), n(757143), n(301563), n(653041);
var r = n(200651);
n(192379);
var i = n(525654),
  s = n.n(i),
  a = n(481060),
  l = n(579806),
  o = n(304761),
  c = n(320161),
  d = n(998502),
  u = n(388032),
  m = n(532111);

function p() {
  var e, t, n, i, p;
  let g = window.GLOBAL_ENV.RELEASE_CHANNEL,
    h = "375375",
    f = "b24ad85a00547a2ae09c7e71c65d1fe92293cd9c".substring(0, 7),
    x = null === l.Z || void 0 === l.Z ? void 0 : l.Z.remoteApp.getVersion(),
    b = null === l.Z || void 0 === l.Z ? void 0 : null === (e = (t = l.Z.remoteApp).getBuildNumber) || void 0 === e ? void 0 : e.call(t),
    N = null === l.Z || void 0 === l.Z ? void 0 : null === (n = (i = l.Z.remoteApp).getAppArch) || void 0 === n ? void 0 : n.call(i),
    _ = null === (p = o.C.getCurrentBuildOverride().overrides) || void 0 === p ? void 0 : p.discord_web,
    E = function() {
      var e;
      let t = null === s() || void 0 === s() ? void 0 : null === (e = s().os) || void 0 === e ? void 0 : e.toString();
      if (null == t || null == l.Z) return null;
      let n = l.Z.os.release,
        [r, i, a] = d.ZP.parsedOSRelease;
      return t.includes("Windows 10") && void 0 !== a && a >= 22e3 && (t = t.replace("Windows 10", "Windows 11")), t.includes("OS X 10.15.7") && void 0 !== r && r >= 20 && (t = "macOS ".concat(r - 9)), "".concat(t, " (").concat(n, ")")
    }(),
    j = [g, h, "(".concat(f, ")")];
  return null != x && (j.push("Host ".concat(x)), null != N && j.push(N.toLowerCase()), null != b && j.push("(".concat(b, ")"))), j.push("Build Override: ".concat(null != _ ? _.id : "N/A")), null != E && j.push(E), (0, r.jsx)(c.Z, {
    copyValue: j.join(" "),
    text: u.NW.string(u.t["9Al4QU"]),
    "aria-label": !1,
    children: e => {
      var t, n;
      return (0, r.jsx)(a.P3F, (t = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = r
          })
        }
        return e
      }({}, e), n = n = {
        "aria-label": u.NW.string(u.t["9Al4QU"]),
        className: m.clickable,
        children: (0, r.jsxs)("div", {
          className: m.info,
          children: [(0, r.jsxs)(a.Text, {
            tag: "span",
            className: m.line,
            variant: "text-xs/normal",
            color: "text-muted",
            children: [g, " ", h, " ", (0, r.jsxs)("span", {
              className: m.versionHash,
              children: ["(", f, ")"]
            })]
          }), " ", null != _ && (0, r.jsx)(a.Text, {
            tag: "span",
            className: m.line,
            variant: "text-xs/normal",
            color: "text-muted",
            children: (0, r.jsxs)("span", {
              className: m.versionHash,
              children: ["Build Override: ", _.id]
            })
          }), null != x ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsxs)(a.Text, {
              tag: "span",
              className: m.line,
              variant: "text-xs/normal",
              color: "text-muted",
              children: ["Host ", x, " ", null != N ? (0, r.jsxs)("span", {
                className: m.appArch,
                children: [N.toLowerCase(), " "]
              }) : null, null != b ? (0, r.jsxs)("span", {
                children: ["(", b, ")"]
              }) : null]
            }), " "]
          }) : null, null != E ? (0, r.jsx)(a.Text, {
            tag: "span",
            className: m.line,
            variant: "text-xs/normal",
            color: "text-muted",
            children: E
          }) : null]
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t))
    }
  })
}