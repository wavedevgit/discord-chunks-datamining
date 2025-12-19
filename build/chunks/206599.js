/** Chunk was on 39442 **/
/** chunk id: 206599, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  J: () => d,
  K: () => u
}), require("./388685.js"), require("./472816.js"), require("./794429.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk224706 = require("./224706.js"),
  Chunk669764 = require("./669764.js"),
  Chunk592183 = require("./592183.js"),
  Chunk224724 = require("./224724.js"),
  Chunk938236 = require("./938236.js");

function u(e) {
  let {
    bump: t,
    bumpMultiple: n,
    gameIds: o
  } = (0, s.b)(), {
    remove: c,
    peekedGameIds: u
  } = (0, s.b)(), d = r.useMemo(() => {
    var t;
    return null != (t = u[e]) ? t : []
  }, [u, e]);
  r.useEffect(() => {
    let e = d.filter(e => l.Z.canFetch(e));
    e.length > 0 && a.Z.getDetectableGamesSupplemental(e)
  }, [d]);
  let f = (0, i.Wu)([l.Z], () => d.map(e => l.Z.isFetching(e)));
  r.useEffect(() => {
    for (let t of d) {
      let n = !l.Z.canFetch(t) && !l.Z.isFetching(t),
        r = null != l.Z.getCoverImageUrl(t);
      n && !r && c(t, e)
    }
  }, [d, c, e, f]);
  let g = r.useMemo(() => {
      var t;
      return null != (t = o[e]) ? t : []
    }, [o, e]),
    p = r.useCallback(n => {
      t(n, e)
    }, [t, e]),
    b = (0, i.Wu)([l.Z], () => g.map(e => l.Z.isFetching(e)));
  return r.useEffect(() => {
    let t = g.filter(e => {
      let t = !l.Z.canFetch(e) && !l.Z.isFetching(e),
        n = null != l.Z.getCoverImageUrl(e);
      return t && !n
    });
    t.length > 0 && n(t, e)
  }, [g, e, n, b]), {
    games: r.useMemo(() => g.map(e => ({
      applicationId: e
    })), [g]),
    onAddGame: p
  }
}

function d(e, t) {
  let [n, a, l, u] = (0, i.Wu)([c.Z], () => [c.Z.suggestedFetchAttempted, c.Z.suggestedFetchError, c.Z.suggestedGameIds, c.Z.suggestedFetchIsLoading]), {
    onLoad: d
  } = (0, s.b)();
  r.useEffect(() => {
    !n && e && o.Z.fetchSuggestedGames()
  }, [n, e]);
  let f = n && !u;
  r.useEffect(() => {
    var e, n;
    if (!f) return;
    let r = t.map(e => e.games).flat();
    if (!a) d(null != (e = l.suggestedGamesIds) ? e : [], null != (n = l.suggestedWishlistGamesIds) ? n : [], r)
  }, [f])
}