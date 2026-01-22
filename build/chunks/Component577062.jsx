/** Chunk was on 97492 **/
/** chunk id: 577062, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk980923 = require("./980923.js"),
  Chunk384059 = require("./384059.js"),
  Chunk277342 = require("./277342.js"),
  Chunk709562 = require("./709562.jsx");

function d(e) {
  let {
    selfMute: t,
    serverMute: n,
    suppress: d,
    centerButton: f = false,
    awaitingRemote: p,
    onMouseEnter: h,
    onMouseLeave: b,
    onClick: g
  } = e, m = function(e, t) {
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
  }(e, ["selfMute", "serverMute", "suppress", "centerButton", "awaitingRemote", "onMouseEnter", "onMouseLeave", "onClick"]), {
    parentAnalyticsLocation: A
  } = (0, a.Ay)(), y = t || n || d, O = f ? u.l : u.A, j = (0, s.A)(t, n, d, p), {
    events: v,
    play: x,
    Component: E
  } = (0, c.q)(y), _ = n || d ? i.O1p : E;
  return l.useEffect(() => () => x(), [x, y]), (0, r.jsx)(O, function(e) {
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
    iconComponent: _,
    isTrayButton: true,
    caretColor: y ? "red" : "primaryDark",
    color: y ? "red" : true,
    label: j,
    onMouseEnter: e => {
      null == h || h(e), v.onMouseEnter()
    },
    onMouseLeave: e => {
      null == b || b(e), v.onMouseLeave()
    },
    onClick: e => {
      null == g || g(e), (0, o.X)(A, o.O.MIC, t)
    }
  }, m))
}