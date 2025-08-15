/** Chunk was on 76708 **/
/** chunk id: 272289, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js"), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  Chunk296009 = require("./296009.js"),
  Chunk399606 = require("./399606.js"),
  Chunk804919 = require("./804919.js"),
  Chunk592183 = require("./592183.js"),
  Chunk224724 = require("./224724.js"),
  Chunk86419 = require("./86419.js"),
  Chunk747101 = require("./747101.js"),
  Chunk977416 = require("./977416.jsx");

function m(e) {
  var {
    widgetGames: t,
    widgetType: n
  } = e, m = function(e, t) {
    if (null == e) return {};
    var n, r, l = function(e, t) {
      if (null == e) return {};
      var n, r, l = {},
        i = Object.keys(e);
      for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
      return l
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
    }
    return l
  }(e, ["widgetGames", "widgetType"]);
  let {
    games: g,
    isGameFetching: b,
    isSuggestedGamesLoading: j
  } = function(e, t) {
    let {
      games: n
    } = function() {
      let [e] = l.useState(() => (0, i.sampleSize)(c.qs, 4)), {
        gameDataMap: t,
        isGameFetching: n
      } = (0, f.F)(e);
      return {
        games: l.useMemo(() => e.map(e => {
          let n = t[e];
          return {
            applicationId: e,
            gameName: null == n ? true : n.name,
            imageSrc: null == n ? true : n.coverImageUrl
          }
        }), [e, t]),
        isGameFetching: n
      }
    }(), r = new Set(t.map(e => e.applicationId)), s = n.filter(e => !r.has(e.applicationId)), [u, p, m] = (0, a.Wu)([d.Z], () => [d.Z.suggestedFetchIsLoading, d.Z.suggestedFetchError, d.Z.suggestedGameIds]), g = l.useMemo(() => {
      var t, n;
      if (p || e === o.l.WANT_TO_PLAY_GAMES && (null == m || null == (t = m.suggestedWishlistGamesIds) ? true : t.length) === 0 || (null == m || null == (n = m.suggestedGamesIds) ? true : n.length) === 0) return s.map(e => e.applicationId);
      let r = [];
      return e === o.l.WANT_TO_PLAY_GAMES ? r.push(...m.suggestedWishlistGamesIds.slice(0, 4)) : r.push(...m.suggestedGamesIds.slice(0, 4)), r.length < 4 && r.push(...s.slice(0, 4 - r.length).map(e => e.applicationId)), r
    }, [s, m, p, e]), {
      gameDataMap: b,
      isGameFetching: j
    } = (0, f.F)(g);
    return {
      games: l.useMemo(() => g.map(e => {
        let t = b[e];
        return {
          applicationId: e,
          gameName: null == t ? true : t.name,
          imageSrc: null == t ? true : t.coverImageUrl,
          comment: null == t ? true : t.comment
        }
      }), [g, b]),
      isGameFetching: j,
      isSuggestedGamesLoading: u
    }
  }(n, t), y = l.useCallback((e, t, r) => {
    s.Z.removeGameFromSuggestedGames(e), (0, u.ES)(n, {
      applicationId: e,
      gameName: t,
      imageSrc: r
    })
  }, [n]);
  return (0, r.jsx)(p.Z, function(e) {
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
    games: g,
    isGameFetching: b,
    isSuggestedGamesLoading: j,
    onClick: y
  }, m))
}