/** Chunk was on 49941 **/
/** chunk id: 272289, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk86419 = require("./86419.js"),
  Chunk206599 = require("./206599.js"),
  Chunk141014 = require("./141014.jsx"),
  Chunk977416 = require("./977416.jsx");

function u(e) {
  var {
    widgetType: t
  } = e, n = function(e, t) {
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
  }(e, ["widgetType"]);
  let {
    games: u,
    onAddGame: d
  } = (0, o.K)(t), {
    setExpanded: f
  } = (0, s.g)(), {
    trackUserProfileEditAction: g
  } = (0, l.KZ)(), p = i.useCallback((e, n, r) => {
    d(e), f(true), (0, a.ES)(t, {
      applicationId: e,
      gameName: n,
      imageSrc: r
    }), g({
      action: "GAME_ADDED",
      gameId: e,
      widgetEdited: t
    })
  }, [d, t, g, f]);
  return (0, r.jsx)(c.Z, function(e) {
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
    games: u,
    onClick: p
  }, n))
}