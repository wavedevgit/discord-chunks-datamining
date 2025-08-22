/** Chunk was on 21585 **/
/** chunk id: 272289, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk399606 = require("./399606.js"),
  Chunk224724 = require("./224724.js"),
  Chunk86419 = require("./86419.js"),
  Chunk206599 = require("./206599.js"),
  Chunk977416 = require("./977416.jsx");

function u(e) {
  var {
    widgetType: t
  } = e, r = function(e, t) {
    if (null == e) return {};
    var r, n, i = function(e, t) {
      if (null == e) return {};
      var r, n, i = {},
        a = Object.keys(e);
      for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (n = 0; n < a.length; n++) r = a[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
    }
    return i
  }(e, ["widgetType"]);
  let {
    games: u,
    isGameFetching: d,
    onAddGame: f
  } = (0, c.K)(t), [g] = (0, a.Wu)([l.Z], () => [l.Z.suggestedFetchIsLoading]), b = i.useCallback((e, r, n) => {
    f(e), (0, o.ES)(t, {
      applicationId: e,
      gameName: r,
      imageSrc: n
    })
  }, [f, t]);
  return (0, n.jsx)(s.Z, function(e) {
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
    games: u,
    isGameFetching: d,
    isSuggestedGamesLoading: g,
    onClick: b
  }, r))
}