/** Chunk was on 24848 **/
/** chunk id: 354643, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => a
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk72152 = require("./72152.js"),
  Chunk770376 = require("./770376.js"),
  Chunk985018 = require("./985018.jsx");

function a(e) {
  var t, r;
  let [a, u] = o.useState(false);
  return (0, n.jsx)(c.uoB, (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable
      }))), n.forEach(function(t) {
        var n;
        n = r[t], t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = n
      })
    }
    return e
  }({}, e), r = r = {
    title: s.intl.string(s.t["pjYu0/"]),
    subtitle: s.intl.format(s.t["0eydyj"], {}),
    confirmText: s.intl.string(s.t.zVZXRU),
    cancelText: s.intl.string(s.t["ETE/oC"]),
    onConfirm: () => {
      (0, i.Z)(true)
    },
    onCloseCallback: () => {
      a && (0, l.f)()
    },
    variant: "primary",
    checkboxProps: {
      checked: a,
      onChange: e => u(e)
    }
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(r)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
  }), t))
}