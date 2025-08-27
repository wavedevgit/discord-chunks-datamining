/** Chunk was on 21585 **/
/** chunk id: 272289, original params: e,t,r (module,exports,require) **/
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
  } = e, r = function(e, t) {
    if (null == e) return {};
    var r, n, a = function(e, t) {
      if (null == e) return {};
      var r, n, a = {},
        i = Object.keys(e);
      for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
      return a
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
    }
    return a
  }(e, ["widgetType"]);
  let {
    games: d,
    isGameFetching: f,
    onAddGame: g
  } = (0, s.K)(t), [b] = (0, i.Wu)([o.Z], () => [o.Z.suggestedFetchIsLoading]), {
    trackUserProfileAction: p
  } = (0, l.KZ)(), m = a.useCallback((e, r, n) => {
    g(e), (0, c.ES)(t, {
      applicationId: e,
      gameName: r,
      imageSrc: n
    }), p({
      action: "EDIT_ACTION"
    })
  }, [g, t, p]);
  return (0, n.jsx)(u.Z, function(e) {
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
    games: d,
    isGameFetching: f,
    isSuggestedGamesLoading: b,
    onClick: m
  }, r))
}