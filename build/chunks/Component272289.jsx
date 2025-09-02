/** Chunk was on 8188 **/
/** chunk id: 272289, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk399606 = require("./399606.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk224724 = require("./224724.js"),
  Chunk86419 = require("./86419.js"),
  Chunk206599 = require("./206599.js"),
  Chunk977416 = require("./977416.jsx");

function d(e) {
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
    games: d,
    isGameFetching: f,
    onAddGame: g
  } = (0, s.K)(t), [b] = (0, l.Wu)([o.Z], () => [o.Z.suggestedFetchIsLoading]), {
    trackUserProfileAction: p
  } = (0, a.KZ)(), m = i.useCallback((e, n, r) => {
    g(e), (0, c.ES)(t, {
      applicationId: e,
      gameName: n,
      imageSrc: r
    }), p({
      action: "EDIT_ACTION"
    })
  }, [g, t, p]);
  return (0, r.jsx)(u.Z, function(e) {
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
    games: d,
    isGameFetching: f,
    isSuggestedGamesLoading: b,
    onClick: m
  }, n))
}