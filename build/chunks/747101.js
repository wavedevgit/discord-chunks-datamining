/** Chunk was on 27069 **/
/** chunk id: 747101, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  F: () => s,
  Z: () => u
}), require("./539854.js"), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk224706 = require("./224706.js"),
  Chunk669764 = require("./669764.js");

function o(e) {
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
}

function c(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}

function s(e) {
  n.useEffect(() => {
    if (e.length > 0) {
      let t = e.filter(e => a.Z.canFetch(e));
      t.length > 0 && l.Z.getDetectableGamesSupplemental(t)
    }
  }, [e]);
  let [t, r] = (0, i.Wu)([a.Z], () => [a.Z.numNoDataAvailable(), a.Z.numSupplementalGames()]);
  return {
    gameDataMap: n.useMemo(() => {
      let t = {};
      return e.forEach(e => {
        t[e] = a.Z.getGame(e)
      }), t
    }, [e, t, r]),
    isGameFetching: n.useCallback(e => a.Z.isFetching(e), [])
  }
}

function u(e) {
  let {
    gameDataMap: t,
    isGameFetching: r
  } = s(n.useMemo(() => (function(e) {
    let t = [];
    return e.forEach(e => {
      e.games.forEach(e => {
        t.push(e.applicationId)
      })
    }), [...new Set(t)]
  })(e), [e]));
  return {
    widgets: n.useMemo(() => e.map(e => {
      let r = e.games.map(e => {
        let r = t[e.applicationId];
        return c(o({}, e), {
          gameName: null == r ? true : r.name,
          imageSrc: null == r ? true : r.coverImageUrl
        })
      });
      return c(o({}, e), {
        games: r
      })
    }), [e, t]),
    isGameFetching: r
  }
}