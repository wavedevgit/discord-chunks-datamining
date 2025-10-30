/** Chunk was on 24338 **/
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
  let [n, l] = (0, i.Wu)([a.Z], () => [a.Z.numNoDataAvailable(), a.Z.numSupplementalGames()]), {
    bump: o,
    bumpMultiple: u,
    gameIds: d
  } = (0, c.b)();
  ! function(e) {
    var t, n;
    let {
      remove: i,
      peekedGameIds: l
    } = (0, c.b)();
    (0, s.qU)(null != (t = l[e]) ? t : []);
    let o = r.useCallback(e => a.Z.isFetching(e), []),
      u = (0, s.kN)(null != (n = l[e]) ? n : []);
    r.useEffect(() => {
      var t;
      for (let n of null != (t = l[e]) ? t : []) {
        let t = u[n];
        (null == t ? true : t.coverImageUrl) != null || o(n) || i(n, e)
      }
    }, [l, i, e, o, u])
  }(e);
  let f = r.useMemo(() => {
      var t;
      return null != (t = d[e]) ? t : []
    }, [d, e]),
    g = r.useCallback(t => {
      o(t, e)
    }, [o, e]);
  (0, s.qU)(f);
  let p = (0, s.kN)(f),
    [m, b] = r.useState([]),
    y = (t = f.map(e => a.Z.isFetching(e)), r.useMemo(() => t.join("\x1f"), [t]));
  return r.useEffect(() => {
    let t = f.filter(e => a.Z.noDataAvailable(e));
    t.length > 0 && u(t, e)
  }, [y, f, e, u, p]), r.useEffect(() => {
    b(f.map(e => {
      let t = p[e];
      return {
        applicationId: e,
        gameName: null == t ? true : t.name,
        imageSrc: null == t ? true : t.coverImageUrl
      }
    }))
  }, [f, p, e, n, l]), {
    games: m,
    onAddGame: g
  }
}

function d(e, t) {
  let [n, a, s, u] = (0, i.Wu)([o.Z], () => [o.Z.suggestedFetchAttempted, o.Z.suggestedFetchError, o.Z.suggestedGameIds, o.Z.suggestedFetchIsLoading]), {
    onLoad: d
  } = (0, c.b)();
  r.useEffect(() => {
    !n && e && l.Z.fetchSuggestedGames()
  }, [n, e]);
  let f = n && !u;
  r.useEffect(() => {
    var e, n;
    if (!f) return;
    let r = t.map(e => e.games).flat();
    if (!a) d(null != (e = s.suggestedGamesIds) ? e : [], null != (n = s.suggestedWishlistGamesIds) ? n : [], r)
  }, [f])
}