/** Chunk was on 8188 **/
/** chunk id: 206599, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  J: () => f,
  K: () => d
}), require("./388685.js"), require("./472816.js"), require("./794429.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk669764 = require("./669764.js"),
  Chunk774073 = require("./774073.js"),
  Chunk592183 = require("./592183.js"),
  Chunk224724 = require("./224724.js"),
  Chunk938236 = require("./938236.js"),
  Chunk747101 = require("./747101.js");

function d(e) {
  var t, n;
  let {
    bump: i,
    bumpMultiple: a,
    gameIds: o
  } = (0, s.b)(), {
    remove: c,
    peekedGameIds: d
  } = (0, s.b)(), {
    gameDataMap: f,
    isGameFetching: g
  } = (0, u.F)(null != (t = d[e]) ? t : []);
  r.useEffect(() => {
    var t;
    for (let n of null != (t = d[e]) ? t : []) {
      let t = f[n];
      (null == t ? true : t.coverImageUrl) != null || g(n) || c(n, e)
    }
  }, [d, f, g, c, e]);
  let b = r.useMemo(() => {
      var t;
      return null != (t = o[e]) ? t : []
    }, [o, e]),
    p = r.useCallback(t => {
      i(t, e)
    }, [i, e]),
    {
      gameDataMap: m,
      isGameFetching: O
    } = (0, u.F)(b),
    [j, y] = r.useState([]),
    x = (n = b.map(e => O(e)), r.useMemo(() => n.join("\x1f"), [n]));
  return r.useEffect(() => {
    let t = b.filter(e => l.Z.noDataAvailable(e));
    t.length > 0 && a(t, e)
  }, [m, x, b, e, a]), r.useEffect(() => {
    y(b.map(e => {
      let t = m[e];
      return {
        applicationId: e,
        gameName: null == t ? true : t.name,
        imageSrc: null == t ? true : t.coverImageUrl
      }
    }))
  }, [b, m, e]), {
    games: j,
    isGameFetching: O,
    onAddGame: p
  }
}

function f(e, t) {
  let [n, l, u, d] = (0, i.Wu)([c.Z], () => [c.Z.suggestedFetchAttempted, c.Z.suggestedFetchError, c.Z.suggestedGameIds, c.Z.suggestedFetchIsLoading]), {
    onLoad: f
  } = (0, s.b)();
  r.useEffect(() => {
    !n && e && o.Z.fetchSuggestedGames()
  }, [n, e]);
  let g = n && !d;
  r.useEffect(() => {
    var e, n;
    if (!g) return;
    let r = t.map(e => e.games).flat();
    f(l ? [] : (null != (e = u.suggestedGamesIds) ? e : []).filter(a.z6), l ? [] : (null != (n = u.suggestedWishlistGamesIds) ? n : []).filter(a.z6), r)
  }, [g])
}