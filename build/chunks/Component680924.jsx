/** Chunk was on 7384 **/
/** chunk id: 680924, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx");

function a(e, t, n) {
  (0, r.h7j)(a => {
    var l, o;
    return (0, i.jsx)(r.ConfirmModal, (l = function(e) {
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
    }({
      header: e,
      confirmText: s.intl.string(s.t.BddRzc),
      cancelText: s.intl.string(s.t["ETE/oK"]),
      onConfirm: n
    }, a), o = o = {
      children: (0, i.jsx)(r.Text, {
        variant: "text-md/normal",
        children: t
      })
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n.push.apply(n, i)
      }
      return n
    })(Object(o)).forEach(function(e) {
      Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e))
    }), l))
  })
}