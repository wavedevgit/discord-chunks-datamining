/** Chunk was on 50118 **/
/** chunk id: 386000, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk628581 = require("./628581.js"),
  Chunk522651 = require("./522651.js"),
  Chunk8404 = require("./8404.js"),
  Chunk871499 = require("./871499.jsx");

function d(e) {
  var {
    selfMute: t,
    serverMute: n,
    suppress: d,
    centerButton: p = false,
    awaitingRemote: h,
    onMouseEnter: f,
    onMouseLeave: m,
    onClick: g
  } = e, b = function(e, t) {
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
  }(e, ["selfMute", "serverMute", "suppress", "centerButton", "awaitingRemote", "onMouseEnter", "onMouseLeave", "onClick"]);
  let {
    parentAnalyticsLocation: C
  } = (0, a.ZP)(), y = t || n || d, _ = p ? u.d : u.Z, v = (0, o.Z)(t, n, d, h), {
    events: x,
    play: O,
    Component: j
  } = (0, c.b)(y), E = n || d ? l.v0G : j;
  return r.useEffect(() => () => O(), [O, y]), (0, i.jsx)(_, function(e) {
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
    iconComponent: E,
    isTrayButton: true,
    caretColor: y ? "red" : "primaryDark",
    color: y ? "red" : true,
    label: v,
    onMouseEnter: e => {
      null == f || f(e), x.onMouseEnter()
    },
    onMouseLeave: e => {
      null == m || m(e), x.onMouseLeave()
    },
    onClick: e => {
      null == g || g(e), (0, s.v)(C, s.d.MIC, t)
    }
  }, b))
}