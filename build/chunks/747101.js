/** Chunk was on 8188 **/
/** chunk id: 747101, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => u,
  Z: () => d
}), require("./539854.js"), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk224706 = require("./224706.js"),
  Chunk669764 = require("./669764.js"),
  Chunk77498 = require("./77498.js");

function c(e) {
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
}

function s(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function u(e) {
  r.useEffect(() => {
    if (e.length > 0) {
      let t = e.filter(e => a.Z.canFetch(e));
      t.length > 0 && l.Z.getDetectableGamesSupplemental(t)
    }
  }, [e]);
  let [t, n] = (0, i.Wu)([a.Z], () => [a.Z.numNoDataAvailable(), a.Z.numSupplementalGames()]);
  return {
    gameDataMap: r.useMemo(() => {
      let t = {};
      return e.forEach(e => {
        t[e] = a.Z.getGame(e)
      }), t
    }, [e, t, n]),
    isGameFetching: r.useCallback(e => a.Z.isFetching(e), [])
  }
}

function d(e) {
  let {
    gameDataMap: t,
    isGameFetching: n
  } = u(r.useMemo(() => (function(e) {
    let t = [];
    return e.forEach(e => {
      e.games.forEach(e => {
        t.push(e.applicationId)
      })
    }), [...new Set(t)]
  })(e), [e]));
  return {
    widgets: r.useMemo(() => e.map(e => {
      let n = e.games.map(e => {
        let n = t[e.applicationId];
        if (null != n) return s(c({}, e), {
          gameName: n.name,
          imageSrc: n.coverImageUrl
        });
        let r = o.Z.getDetectableGame(e.applicationId);
        return s(c({}, e), {
          gameName: null == r ? true : r.name
        })
      });
      return s(c({}, e), {
        games: n
      })
    }), [e, t]),
    isGameFetching: n
  }
}