/** Chunk was on 54573 **/
/** chunk id: 82084, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
});
var Chunk951288 = require("./951288.js"),
  Chunk352065 = require("./352065.jsx"),
  Chunk79808 = require("./79808.jsx");

function i(e) {
  var t, n, {
      root: i,
      directory: a,
      target: s,
      onPanelChange: c,
      sidebarHeader: u,
      sidebarFooter: d
    } = e,
    f = function(e, t) {
      if (null == e) return {};
      var n, r, l = function(e, t) {
        if (null == e) return {};
        var n, r, l = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
        return l
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
      }
      return l
    }(e, ["root", "directory", "target", "onPanelChange", "sidebarHeader", "sidebarFooter"]);
  return (0, r.jsx)(l.A, (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = n[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = r
      })
    }
    return e
  }({}, f), n = n = {
    children: (0, r.jsx)(o.Z, {
      onClose: f.onClose,
      root: i,
      directory: a,
      target: s,
      onPanelChange: c,
      sidebarHeader: u,
      sidebarFooter: d
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