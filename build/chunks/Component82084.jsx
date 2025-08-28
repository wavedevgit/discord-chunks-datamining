/** Chunk was on 51651 **/
/** chunk id: 82084, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js"),
  Chunk257465 = require("./257465.jsx"),
  Chunk985092 = require("./985092.js"),
  Chunk79808 = require("./79808.jsx");

function c(e) {
  var t, n, {
      root: c,
      sidebarHeader: b,
      sidebarFooter: l
    } = e,
    s = function(e, t) {
      if (null == e) return {};
      var n, o, r = function(e, t) {
        if (null == e) return {};
        var n, o, r = {},
          i = Object.keys(e);
        for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || (r[n] = e[n]);
        return r
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (o = 0; o < i.length; o++) n = i[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
      }
      return r
    }(e, ["root", "sidebarHeader", "sidebarFooter"]);
  return (0, o.jsx)(r.I, (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        o = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), o.forEach(function(t) {
        var o;
        o = n[t], t in e ? Object.defineProperty(e, t, {
          value: o,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = o
      })
    }
    return e
  }({
    size: "xl",
    fullScreenOnMobile: true
  }, s), n = n = {
    children: (0, o.jsx)(a.Z, {
      onClose: s.onClose,
      root: c,
      sidebarHeader: b,
      sidebarFooter: l,
      initialPanel: i.Z
    })
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      n.push.apply(n, o)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t))
}