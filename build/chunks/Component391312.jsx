/** Chunk was on 82560 **/
/** chunk id: 391312, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  default: () => a
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk43740 = require("./43740.js"),
  Chunk437152 = require("./437152.js"),
  Chunk388032 = require("./388032.jsx");

function a(t) {
  var e, r;
  let [a, u] = o.useState(false);
  return (0, n.jsx)(c.sm4, (e = function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = null != arguments[e] ? arguments[e] : {},
        n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
        return Object.getOwnPropertyDescriptor(r, t).enumerable
      }))), n.forEach(function(e) {
        var n;
        n = r[e], e in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : t[e] = n
      })
    }
    return t
  }({}, t), r = r = {
    title: s.intl.string(s.t["pjYu0/"]),
    subtitle: s.intl.format(s.t["0eydyj"], {}),
    confirmText: s.intl.string(s.t.zVZXRU),
    cancelText: s.intl.string(s.t["ETE/oC"]),
    onConfirm: () => {
      (0, i.l)(true)
    },
    onCloseCallback: () => {
      a && (0, l.E)()
    },
    variant: "primary",
    checkboxProps: {
      checked: a,
      onChange: t => u(t)
    }
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : (function(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      r.push.apply(r, n)
    }
    return r
  })(Object(r)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
  }), e))
}