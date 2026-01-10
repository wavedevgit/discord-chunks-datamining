/** Chunk was on 81985 **/
/** chunk id: 301076, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk749280 = require("./749280.jsx"),
  Chunk871499 = require("./871499.jsx");

function a(e) {
  var {
    isActivityActive: t,
    onMouseEnter: n,
    onMouseLeave: a,
    onClick: o
  } = e, s = function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["isActivityActive", "onMouseEnter", "onMouseLeave", "onClick"]);
  let {
    Component: c,
    events: u,
    play: d
  } = (0, i.w)();
  return (0, r.jsx)(l.d, function(e) {
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
  }({
    isTrayButton: true,
    isActive: t,
    color: t ? "green" : true,
    iconComponent: c,
    onMouseEnter: e => {
      null == n || n(e), u.onMouseEnter()
    },
    onMouseLeave: e => {
      null == a || a(e), u.onMouseLeave()
    },
    onClick: e => {
      null == o || o(e), d()
    }
  }, s))
}