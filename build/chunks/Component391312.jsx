/** Chunk was on 82560 **/
/** chunk id: 391312, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => u
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk43740 = require("./43740.js"),
  Chunk437152 = require("./437152.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk301403 = require("./301403.js");

function u(e) {
  var t, r;
  let [u, b] = o.useState(false);
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
    header: l.intl.string(l.t.pjYu09),
    confirmText: l.intl.string(l.t.zVZXRU),
    cancelText: l.intl.string(l.t["ETE/oK"]),
    onConfirm: () => {
      (0, a.l)(true)
    },
    confirmButtonColor: c.zx.Colors.BRAND,
    children: [(0, n.jsx)(i.Text, {
      variant: "text-md/normal",
      children: l.intl.format(l.t["0eydys"], {})
    }), (0, n.jsx)(i.XZJ, {
      className: p.checkboxMargin,
      type: i.XZJ.Types.INVERTED,
      value: u,
      onChange: () => {
        (0, s.E)(), b(true)
      },
      children: (0, n.jsx)(i.Text, {
        variant: "text-md/normal",
        children: l.intl.string(l.t["50TyjY"])
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