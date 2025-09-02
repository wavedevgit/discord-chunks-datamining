/** Chunk was on 30355 **/
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
    bump: l,
    bumpMultiple: s,
    gameIds: a
  } = (0, c.b)(), {
    remove: o,
    peekedGameIds: d
  } = (0, c.b)(), {
    gameDataMap: f,
    isGameFetching: g
  } = (0, u.F)(null != (t = d[e]) ? t : []);
  n.useEffect(() => {
    var t;
    for (let r of null != (t = d[e]) ? t : []) {
      let t = f[r];
      (null == t ? true : t.coverImageUrl) != null || g(r) || o(r, e)
    }
  }, [d, f, g, o, e]);
  let m = n.useMemo(() => {
      var t;
      return null != (t = a[e]) ? t : []
    }, [a, e]),
    p = n.useCallback(t => {
      l(t, e)
    }, [l, e]),
    {
      gameDataMap: j,
      isGameFetching: b
    } = (0, u.F)(m),
    [h, x] = n.useState([]),
    O = (r = m.map(e => b(e)), n.useMemo(() => r.join("\x1f"), [r]));
  return n.useEffect(() => {
    let t = m.filter(e => i.Z.noDataAvailable(e));
    t.length > 0 && s(t, e)
  }, [j, O, m, e, s]), n.useEffect(() => {
    x(m.map(e => {
      let t = j[e];
      return {
        applicationId: e,
        gameName: null == t ? true : t.name,
        imageSrc: null == t ? true : t.coverImageUrl
      }
    }))
  }, [m, j, e]), {
    games: h,
    isGameFetching: b,
    onAddGame: p
  }
}

function f(e, t) {
  let [r, i, u, d] = (0, l.Wu)([o.Z], () => [o.Z.suggestedFetchAttempted, o.Z.suggestedFetchError, o.Z.suggestedGameIds, o.Z.suggestedFetchIsLoading]), {
    onLoad: f
  } = (0, c.b)();
  n.useEffect(() => {
    !r && e && a.Z.fetchSuggestedGames()
  }, [r, e]);
  let g = r && !d;
  n.useEffect(() => {
    var e, r;
    if (!g) return;
    let n = t.map(e => e.games).flat();
    f(i ? [] : (null != (e = u.suggestedGamesIds) ? e : []).filter(s.z6), i ? [] : (null != (r = u.suggestedWishlistGamesIds) ? r : []).filter(s.z6), n)
  }, [g])
}