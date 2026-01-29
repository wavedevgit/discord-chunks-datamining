/** Chunk was on 1113 **/
/** chunk id: 168754, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk697744 = require("./697744.jsx"),
  Chunk709562 = require("./709562.jsx");

function s(e) {
  let {
    isActivityActive: t,
    onMouseEnter: n,
    onMouseLeave: s,
    onClick: a
  } = e, o = function(e, t) {
    if (null == e) return {};
    var n, r, l, i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
      return i
    }
    if (i = function(e, t) {
        if (null == e) return {};
        var n, r, l = {},
          i = Object.getOwnPropertyNames(e);
        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
        return l
      }(e, t), Object.getOwnPropertySymbols)
      for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    return i
  }(e, ["isActivityActive", "onMouseEnter", "onMouseLeave", "onClick"]), {
    Component: c,
    events: u,
    play: d
  } = (0, l.c)();
  return (0, r.jsx)(i.l, function(e) {
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
      null == s || s(e), u.onMouseLeave()
    },
    onClick: e => {
      null == a || a(e), d()
    }
  }, o))
}