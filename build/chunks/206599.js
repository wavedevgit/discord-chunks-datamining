/** Chunk was on 83789 **/
/** chunk id: 206599, original params: e,t,r (module,exports,require) **/
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
  var t, r;
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
  n.useEffect(() => {
    var t;
    for (let r of null != (t = d[e]) ? t : []) {
      let t = f[r];
      (null == t ? true : t.coverImageUrl) != null || g(r) || c(r, e)
    }
  }, [d, f, g, c, e]);
  let p = n.useMemo(() => {
      var t;
      return null != (t = o[e]) ? t : []
    }, [o, e]),
    b = n.useCallback(t => {
      i(t, e)
    }, [i, e]),
    {
      gameDataMap: m,
      isGameFetching: O
    } = (0, u.F)(p),
    [j, y] = n.useState([]),
    x = (r = p.map(e => O(e)), n.useMemo(() => r.join("\x1f"), [r]));
  return n.useEffect(() => {
    let t = p.filter(e => l.Z.noDataAvailable(e));
    t.length > 0 && a(t, e)
  }, [m, x, p, e, a]), n.useEffect(() => {
    y(p.map(e => {
      let t = m[e];
      return {
        applicationId: e,
        gameName: null == t ? true : t.name,
        imageSrc: null == t ? true : t.coverImageUrl
      }
    }))
  }, [p, m, e]), {
    games: j,
    isGameFetching: O,
    onAddGame: b
  }
}

function f(e, t) {
  let [r, l, u, d] = (0, i.Wu)([c.Z], () => [c.Z.suggestedFetchAttempted, c.Z.suggestedFetchError, c.Z.suggestedGameIds, c.Z.suggestedFetchIsLoading]), {
    onLoad: f
  } = (0, s.b)();
  n.useEffect(() => {
    !r && e && o.Z.fetchSuggestedGames()
  }, [r, e]);
  let g = r && !d;
  n.useEffect(() => {
    var e, r;
    if (!g) return;
    let n = t.map(e => e.games).flat();
    f(l ? [] : (null != (e = u.suggestedGamesIds) ? e : []).filter(a.z6), l ? [] : (null != (r = u.suggestedWishlistGamesIds) ? r : []).filter(a.z6), n)
  }, [g])
}