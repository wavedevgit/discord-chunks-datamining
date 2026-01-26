/** Chunk was on 67564 **/
/** chunk id: 958449, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  h: () => o
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk416696 = require("./416696.jsx"),
  Chunk709562 = require("./709562.jsx"),
  Chunk985018 = require("./985018.jsx");

function o(e) {
  let t, n, {
      hasPermission: o,
      streamActive: c,
      isSelfStream: u,
      centerButton: d,
      onMouseEnter: p,
      onMouseLeave: h,
      renderNUXHighlight: f,
      buttonRef: g
    } = e,
    m = function(e, t) {
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
    }(e, ["hasPermission", "streamActive", "isSelfStream", "centerButton", "onMouseEnter", "onMouseLeave", "renderNUXHighlight", "buttonRef"]),
    b = d ? s.l : s.A;
  n = c ? u ? a.intl.string(a.t.S5anIc) : a.intl.string(a.t.q3O3J8) : o ? a.intl.string(a.t.fjBNo1) : a.intl.string(a.t.uQn9B8);
  let {
    Component: A,
    events: y,
    play: _
  } = (0, i.c)(c ? "disable" : "enable");
  return l.useEffect(() => () => _(), [c, _]), (0, r.jsx)(b, function(e) {
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
    buttonRef: g,
    isTrayButton: true,
    label: n,
    disabled: !o,
    iconComponent: A,
    isActive: c,
    color: (f ? t = "premiumGradient" : c && (t = "green"), t),
    onMouseEnter: e => {
      null == p || p(e), y.onMouseEnter()
    },
    onMouseLeave: e => {
      null == h || h(e), y.onMouseLeave()
    }
  }, m))
}