/** Chunk was on 82560 **/
/** chunk id: 391312, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => f
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk43740 = require("./43740.js"),
  Chunk437152 = require("./437152.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk557313 = require("./557313.js");

function f(e) {
  var t, r;
  let [f, b] = o.useState(false);
  return (0, n.jsxs)(i.ConfirmModal, (t = function(e) {
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
    header: a.intl.string(a.t["pjYu0/"]),
    confirmText: a.intl.string(a.t.zVZXRU),
    cancelText: a.intl.string(a.t["ETE/oC"]),
    onConfirm: () => {
      (0, l.l)(true)
    },
    confirmButtonColor: c.zx.Colors.BRAND,
    children: [(0, n.jsx)(i.Text, {
      variant: "text-md/normal",
      children: a.intl.format(a.t["0eydyj"], {})
    }), (0, n.jsx)("div", {
      className: u.checkboxMargin,
      children: (0, n.jsx)(i.Checkbox, {
        checked: f,
        onChange: () => {
          (0, s.E)(), b(true)
        },
        label: a.intl.string(a.t["50TyjR"])
      })
    })]
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