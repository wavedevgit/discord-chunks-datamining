/** Chunk was on 27069 **/
/** chunk id: 206599, original params: e,t,r (module,exports,require) **/
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
  var t, r;
  let {
    bump: l,
    bumpMultiple: a,
    gameIds: o
  } = (0, c.b)(), {
    remove: u,
    peekedGameIds: d
  } = (0, c.b)(), {
    gameDataMap: f,
    isGameFetching: g
  } = (0, s.F)(null != (t = d[e]) ? t : []);
  n.useEffect(() => {
    var t;
    for (let r of null != (t = d[e]) ? t : []) {
      let t = f[r];
      (null == t ? true : t.coverImageUrl) != null || g(r) || u(r, e)
    }
  }, [d, f, g, u, e]);
  let p = n.useMemo(() => {
      var t;
      return null != (t = o[e]) ? t : []
    }, [o, e]),
    b = n.useCallback(t => {
      l(t, e)
    }, [l, e]),
    {
      gameDataMap: O,
      isGameFetching: m
    } = (0, s.F)(p),
    [j, y] = n.useState([]),
    v = (r = p.map(e => m(e)), n.useMemo(() => r.join("\x1f"), [r]));
  return n.useEffect(() => {
    let t = p.filter(e => i.Z.noDataAvailable(e));
    t.length > 0 && a(t, e)
  }, [O, v, p, e, a]), n.useEffect(() => {
    y(p.map(e => {
      let t = O[e];
      return {
        applicationId: e,
        gameName: null == t ? true : t.name,
        imageSrc: null == t ? true : t.coverImageUrl
      }
    }))
  }, [p, O, e]), {
    games: j,
    isGameFetching: m,
    onAddGame: b
  }
}

function d(e, t) {
  let [r, i, s, u] = (0, l.Wu)([o.Z], () => [o.Z.suggestedFetchAttempted, o.Z.suggestedFetchError, o.Z.suggestedGameIds, o.Z.suggestedFetchIsLoading]), {
    onLoad: d
  } = (0, c.b)();
  n.useEffect(() => {
    !r && e && a.Z.fetchSuggestedGames()
  }, [r, e]);
  let f = r && !u;
  n.useEffect(() => {
    if (!f) return;
    let e = t.map(e => e.games).flat();
    d(i ? [] : s.suggestedGamesIds, i ? [] : s.suggestedWishlistGamesIds, e)
  }, [f])
}