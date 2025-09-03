/** Chunk was on 30397 **/
/** chunk id: 747101, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Fn: () => d,
  ZP: () => f,
  kO: () => u
}), require("./539854.js"), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk224706 = require("./224706.js"),
  Chunk669764 = require("./669764.js"),
  Chunk77498 = require("./77498.js");

function c(e) {
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

function s(e, t) {
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

function u(e) {
  return (0, a.e7)([i.Z], () => i.Z.isFetching(e))
}

function d(e) {
  n.useEffect(() => {
    if (e.length > 0) {
      let t = e.filter(e => i.Z.canFetch(e));
      t.length > 0 && o.Z.getDetectableGamesSupplemental(t)
    }
  }, [e]);
  let [t, r] = (0, a.Wu)([i.Z], () => [i.Z.numNoDataAvailable(), i.Z.numSupplementalGames()]);
  return n.useMemo(() => {
    let t = {};
    return e.forEach(e => {
      t[e] = i.Z.getGame(e)
    }), t
  }, [e, t, r])
}

function f(e) {
  let t = d(n.useMemo(() => (function(e) {
    let t = [];
    return e.forEach(e => {
      e.games.forEach(e => {
        t.push(e.applicationId)
      })
    }), [...new Set(t)]
  })(e), [e]));
  return n.useMemo(() => e.map(e => {
    let r = e.games.map(e => {
      let r = t[e.applicationId];
      if (null != r) return s(c({}, e), {
        gameName: r.name,
        imageSrc: r.coverImageUrl
      });
      let n = l.Z.getDetectableGame(e.applicationId);
      return s(c({}, e), {
        gameName: null == n ? true : n.name
      })
    });
    return s(c({}, e), {
      games: r
    })
  }), [e, t])
}