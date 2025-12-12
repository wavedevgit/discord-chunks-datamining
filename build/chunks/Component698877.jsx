/** Chunk was on 7891 **/
/** chunk id: 698877, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  O: () => s
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk864094 = require("./864094.jsx"),
  Chunk871499 = require("./871499.jsx"),
  Chunk388032 = require("./388032.jsx");

function s(e) {
  let t, n;
  var {
    hasPermission: s,
    streamActive: c,
    isSelfStream: u,
    centerButton: d,
    onMouseEnter: p,
    onMouseLeave: h,
    renderNUXHighlight: f,
    buttonRef: m
  } = e, g = function(e, t) {
    if (null == e) return {};
    var n, i, r = function(e, t) {
      if (null == e) return {};
      var n, i, r = {},
        l = Object.keys(e);
      for (i = 0; i < l.length; i++) n = l[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (i = 0; i < l.length; i++) n = l[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
  }(e, ["hasPermission", "streamActive", "isSelfStream", "centerButton", "onMouseEnter", "onMouseLeave", "renderNUXHighlight", "buttonRef"]);
  let b = d ? a.d : a.Z;
  t = c ? u ? o.intl.string(o.t.S5anIc) : o.intl.string(o.t.q3O3J8) : s ? o.intl.string(o.t.fjBNo1) : o.intl.string(o.t.uQn9B8);
  let {
    Component: C,
    events: y,
    play: v
  } = (0, l.P)(c ? "disable" : "enable");
  return r.useEffect(() => () => v(), [c, v]), (0, i.jsx)(b, function(e) {
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
    buttonRef: m,
    isTrayButton: true,
    label: t,
    disabled: !s,
    iconComponent: C,
    isActive: c,
    color: (f ? n = "premiumGradient" : c && (n = "green"), n),
    onMouseEnter: e => {
      null == p || p(e), y.onMouseEnter()
    },
    onMouseLeave: e => {
      null == h || h(e), y.onMouseLeave()
    }
  }, g))
}