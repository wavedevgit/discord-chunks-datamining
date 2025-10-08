/** Chunk was on 13859 **/
/** chunk id: 272289, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk86419 = require("./86419.js"),
  Chunk206599 = require("./206599.js"),
  Chunk977416 = require("./977416.jsx");

function s(e) {
  var {
    widgetType: t
  } = e, r = function(e, t) {
    if (null == e) return {};
    var r, n, i = function(e, t) {
      if (null == e) return {};
      var r, n, i = {},
        o = Object.keys(e);
      for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (n = 0; n < o.length; n++) r = o[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
    }
    return i
  }(e, ["widgetType"]);
  let {
    games: s,
    onAddGame: u
  } = (0, l.K)(t), {
    trackUserProfileEditAction: d
  } = (0, o.KZ)(), f = i.useCallback((e, r, n) => {
    u(e), (0, a.ES)(t, {
      applicationId: e,
      gameName: r,
      imageSrc: n
    }), d({
      action: "GAME_ADDED",
      gameId: e,
      widgetEdited: t
    })
  }, [u, t, d]);
  return (0, n.jsx)(c.Z, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable
      }))), n.forEach(function(t) {
        var n;
        n = r[t], t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = n
      })
    }
    return e
  }({
    games: s,
    onClick: f
  }, r))
}