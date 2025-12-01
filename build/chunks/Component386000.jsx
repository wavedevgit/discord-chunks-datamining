/** Chunk was on 34740 **/
/** chunk id: 386000, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
    parentAnalyticsLocation: y
  } = (0, a.ZP)(), C = t || n || d, v = p ? u.d : u.Z, _ = (0, o.Z)(t, n, d, h), {
    events: O,
    play: x,
    Component: j
  } = (0, c.b)(C), E = n || d ? l.v0G : j;
  return r.useEffect(() => () => x(), [x, C]), (0, i.jsx)(v, function(e) {
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
    caretColor: C ? "red" : "primaryDark",
    color: C ? "red" : true,
    label: _,
    onMouseEnter: e => {
      null == f || f(e), O.onMouseEnter()
    },
    onMouseLeave: e => {
      null == m || m(e), O.onMouseLeave()
    },
    onClick: e => {
      null == g || g(e), (0, s.v)(y, s.d.MIC, t)
    }
  }, b))
}