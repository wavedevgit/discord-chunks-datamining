/** Chunk was on 56848 **/
/** chunk id: 206599, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  J: () => d,
  K: () => u
}), require("./388685.js"), require("./472816.js"), require("./794429.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk669764 = require("./669764.js"),
  Chunk592183 = require("./592183.js"),
  Chunk224724 = require("./224724.js"),
  Chunk938236 = require("./938236.js"),
  Chunk747101 = require("./747101.js");

function u(e) {
  var t;
  let [n, a] = (0, i.Wu)([l.Z], () => [l.Z.numNoDataAvailable(), l.Z.numSupplementalGames()]), {
    bump: s,
    bumpMultiple: u,
    gameIds: d
  } = (0, o.b)();
  ! function(e) {
    var t, n;
    let {
      remove: i,
      peekedGameIds: a
    } = (0, o.b)();
    (0, c.qU)(null != (t = a[e]) ? t : []);
    let s = r.useCallback(e => l.Z.isFetching(e), []),
      u = (0, c.kN)(null != (n = a[e]) ? n : []);
    r.useEffect(() => {
      var t;
      for (let n of null != (t = a[e]) ? t : []) {
        let t = u[n];
        (null == t ? true : t.coverImageUrl) != null || s(n) || i(n, e)
      }
    }, [a, i, e, s, u])
  }(e);
  let f = r.useMemo(() => {
      var t;
      return null != (t = d[e]) ? t : []
    }, [d, e]),
    g = r.useCallback(t => {
      s(t, e)
    }, [s, e]);
  (0, c.qU)(f);
  let p = (0, c.kN)(f),
    [m, h] = r.useState([]),
    v = (t = f.map(e => l.Z.isFetching(e)), r.useMemo(() => t.join("\x1f"), [t]));
  return r.useEffect(() => {
    let t = f.filter(e => l.Z.noDataAvailable(e));
    t.length > 0 && u(t, e)
  }, [v, f, e, u, p]), r.useEffect(() => {
    h(f.map(e => {
      let t = p[e];
      return {
        applicationId: e,
        gameName: null == t ? true : t.name,
        imageSrc: null == t ? true : t.coverImageUrl
      }
    }))
  }, [f, p, e, n, a]), {
    games: m,
    onAddGame: g
  }
}

function d(e, t) {
  let [n, l, c, u] = (0, i.Wu)([s.Z], () => [s.Z.suggestedFetchAttempted, s.Z.suggestedFetchError, s.Z.suggestedGameIds, s.Z.suggestedFetchIsLoading]), {
    onLoad: d
  } = (0, o.b)();
  r.useEffect(() => {
    !n && e && a.Z.fetchSuggestedGames()
  }, [n, e]);
  let f = n && !u;
  r.useEffect(() => {
    var e, n;
    if (!f) return;
    let r = t.map(e => e.games).flat();
    if (!l) d(null != (e = c.suggestedGamesIds) ? e : [], null != (n = c.suggestedWishlistGamesIds) ? n : [], r)
  }, [f])
}