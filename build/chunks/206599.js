/** Chunk was on 30355 **/
/** chunk id: 206599, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  J: () => f,
  K: () => d
}), require("./388685.js"), require("./472816.js"), require("./794429.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk669764 = require("./669764.js"),
  Chunk836197 = require("./836197.js"),
  Chunk592183 = require("./592183.js"),
  Chunk224724 = require("./224724.js"),
  Chunk938236 = require("./938236.js"),
  Chunk747101 = require("./747101.js");

function d(e) {
  var t;
  let [n, a] = (0, l.Wu)([i.Z], () => [i.Z.numNoDataAvailable(), i.Z.numSupplementalGames()]), {
    bump: s,
    bumpMultiple: o,
    gameIds: d
  } = (0, c.b)();
  ! function(e) {
    var t, n;
    let {
      remove: l,
      peekedGameIds: a
    } = (0, c.b)();
    (0, u.qU)(null != (t = a[e]) ? t : []);
    let s = r.useCallback(e => i.Z.isFetching(e), []),
      o = (0, u.kN)(null != (n = a[e]) ? n : []);
    r.useEffect(() => {
      var t;
      for (let n of null != (t = a[e]) ? t : []) {
        let t = o[n];
        (null == t ? true : t.coverImageUrl) != null || s(n) || l(n, e)
      }
    }, [a, l, e, s, o])
  }(e);
  let f = r.useMemo(() => {
      var t;
      return null != (t = d[e]) ? t : []
    }, [d, e]),
    m = r.useCallback(t => {
      s(t, e)
    }, [s, e]);
  (0, u.qU)(f);
  let g = (0, u.kN)(f),
    [p, b] = r.useState([]),
    j = (t = f.map(e => i.Z.isFetching(e)), r.useMemo(() => t.join("\x1f"), [t]));
  return r.useEffect(() => {
    let t = f.filter(e => i.Z.noDataAvailable(e));
    t.length > 0 && o(t, e)
  }, [j, f, e, o, g]), r.useEffect(() => {
    b(f.map(e => {
      let t = g[e];
      return {
        applicationId: e,
        gameName: null == t ? true : t.name,
        imageSrc: null == t ? true : t.coverImageUrl
      }
    }))
  }, [f, g, e, n, a]), {
    games: p,
    onAddGame: m
  }
}

function f(e, t) {
  let [n, i, u, d] = (0, l.Wu)([o.Z], () => [o.Z.suggestedFetchAttempted, o.Z.suggestedFetchError, o.Z.suggestedGameIds, o.Z.suggestedFetchIsLoading]), {
    onLoad: f
  } = (0, c.b)();
  r.useEffect(() => {
    !n && e && s.Z.fetchSuggestedGames()
  }, [n, e]);
  let m = n && !d;
  r.useEffect(() => {
    var e, n;
    if (!m) return;
    let r = t.filter(a.W).map(e => e.games).flat();
    if (!i) f(null != (e = u.suggestedGamesIds) ? e : [], null != (n = u.suggestedWishlistGamesIds) ? n : [], r)
  }, [m])
}