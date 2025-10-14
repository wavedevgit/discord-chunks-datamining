/** Chunk was on 36073 **/
/** chunk id: 747101, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  FX: () => b,
  ZP: () => f,
  kN: () => p,
  kO: () => d,
  qU: () => g
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk224706 = require("./224706.js"),
  Chunk669764 = require("./669764.js"),
  Chunk77498 = require("./77498.js"),
  Chunk836197 = require("./836197.js");

function s(e) {
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

function u(e, t) {
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

function d(e) {
  return (0, i.e7)([o.Z], () => o.Z.isFetching(e))
}

function g(e) {
  n.useEffect(() => {
    if (e.length > 0) {
      let t = e.filter(e => o.Z.canFetch(e));
      t.length > 0 && a.Z.getDetectableGamesSupplemental(t)
    }
  }, [e])
}

function f(e) {
  g(n.useMemo(() => (function(e) {
    let t = new Set;
    return e.forEach(e => {
      e.games.forEach(e => {
        t.add(e.applicationId)
      })
    }), [...t]
  })(e), [e]))
}

function p(e) {
  let [t, r] = (0, i.Wu)([o.Z], () => [o.Z.numNoDataAvailable(), o.Z.numSupplementalGames()]);
  return n.useMemo(() => {
    let t = {};
    return e.forEach(e => {
      t[e] = o.Z.getGame(e)
    }), t
  }, [e, t, r])
}

function b(e) {
  let t = p(e.games.map(e => e.applicationId));
  return n.useMemo(() => new c.zy(u(s({}, e), {
    games: e.games.map(e => {
      let r = t[e.applicationId];
      if (null != r) return u(s({}, e), {
        gameName: r.name,
        imageSrc: r.coverImageUrl
      });
      let n = l.Z.getDetectableGame(e.applicationId);
      return u(s({}, e), {
        gameName: null == n ? true : n.name
      })
    })
  })), [e, t])
}