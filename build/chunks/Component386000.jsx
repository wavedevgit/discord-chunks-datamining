/** Chunk was on 88647 **/
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
    awaitingRemote: f,
    onMouseEnter: h,
    onMouseLeave: m,
    onClick: g
  } = e, b = function(e, t) {
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
  }(e, ["selfMute", "serverMute", "suppress", "centerButton", "awaitingRemote", "onMouseEnter", "onMouseLeave", "onClick"]);
  let {
    parentAnalyticsLocation: _
  } = (0, a.ZP)(), y = t || n || d, C = p ? u.d : u.Z, v = (0, o.Z)(t, n, d, f), {
    events: O,
    play: x,
    Component: E
  } = (0, c.b)(y), j = n || d ? l.v0G : E;
  return i.useEffect(() => () => x(), [x, y]), (0, r.jsx)(C, function(e) {
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
    iconComponent: j,
    isTrayButton: true,
    caretColor: y ? "red" : "primaryDark",
    color: y ? "red" : true,
    label: v,
    onMouseEnter: e => {
      null == h || h(e), O.onMouseEnter()
    },
    onMouseLeave: e => {
      null == m || m(e), O.onMouseLeave()
    },
    onClick: e => {
      null == g || g(e), (0, s.v)(_, s.d.MIC, t)
    }
  }, b))
}