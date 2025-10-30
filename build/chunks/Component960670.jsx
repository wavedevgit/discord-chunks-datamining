/** Chunk was on 14604 **/
/** chunk id: 960670, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => a
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk621521 = require("./621521.js");

function a(e) {
  var t, r, {
      header: a,
      body: b,
      onSubmit: s
    } = e,
    u = function(e, t) {
      if (null == e) return {};
      var r, n, o = function(e, t) {
        if (null == e) return {};
        var r, n, o = {},
          c = Object.keys(e);
        for (n = 0; n < c.length; n++) r = c[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var c = Object.getOwnPropertySymbols(e);
        for (n = 0; n < c.length; n++) r = c[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
      }
      return o
    }(e, ["header", "body", "onSubmit"]);
  let [p, f] = o.useState(false);
  return (0, n.jsxs)(c.ConfirmModal, (t = function(e) {
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
  }({
    header: a,
    confirmText: i.intl.string(i.t["26C4oi"]),
    cancelText: i.intl.string(i.t["ETE/oC"]),
    onConfirm: () => {
      s(null, p)
    }
  }, u), r = r = {
    children: [(0, n.jsx)(c.Text, {
      variant: "text-md/normal",
      children: b
    }), (0, n.jsx)("div", {
      className: l.checkbox,
      children: (0, n.jsx)(c.Checkbox, {
        checked: p,
        onChange: () => f(e => !e),
        label: i.intl.string(i.t.bq3JXs),
        labelType: "secondary"
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