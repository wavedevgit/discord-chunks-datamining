/** Chunk was on 62987 **/
/** chunk id: 698877, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  O: () => s
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  }(e, ["hasPermission", "streamActive", "isSelfStream", "centerButton", "onMouseEnter", "onMouseLeave", "renderNUXHighlight", "buttonRef"]);
  let b = d ? a.d : a.Z;
  t = c ? u ? o.intl.string(o.t.S5anIS) : o.intl.string(o.t.q3O3Jy) : s ? o.intl.string(o.t.fjBNo6) : o.intl.string(o.t.uQn9Bw);
  let {
    Component: y,
    events: _,
    play: C
  } = (0, l.P)(c ? "disable" : "enable");
  return i.useEffect(() => () => C(), [c, C]), (0, r.jsx)(b, function(e) {
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
    buttonRef: m,
    isTrayButton: true,
    label: t,
    disabled: !s,
    iconComponent: y,
    isActive: c,
    color: (f ? n = "premiumGradient" : c && (n = "green"), n),
    onMouseEnter: e => {
      null == p || p(e), _.onMouseEnter()
    },
    onMouseLeave: e => {
      null == h || h(e), _.onMouseLeave()
    }
  }, g))
}