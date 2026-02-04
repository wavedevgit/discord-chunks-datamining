/** Chunk was on 59569 **/
/** chunk id: 958338, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => u,
  Y: () => d
}), require("./896048.js"), require("./864466.js"), require("./443073.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk544420 = require("./544420.js"),
  Chunk524799 = require("./524799.js"),
  Chunk958805 = require("./958805.js"),
  Chunk61881 = require("./61881.js"),
  Chunk911498 = require("./911498.js");

function u(e) {
  let {
    bump: t,
    bumpMultiple: n,
    gameIds: o
  } = (0, c.s)();
  ! function(e) {
    let {
      remove: t,
      peekedGameIds: n
    } = (0, c.s)(), o = r.useMemo(() => {
      var t;
      return null != (t = n[e]) ? t : []
    }, [n, e]);
    r.useEffect(() => {
      let e = o.filter(e => a.A.canFetch(e));
      e.length > 0 && i.A.getDetectableGamesSupplemental(e)
    }, [o]);
    let s = (0, l.yK)([a.A], () => o.map(e => a.A.isFetching(e)));
    r.useEffect(() => {
      for (let n of o) {
        let r = !a.A.canFetch(n) && !a.A.isFetching(n),
          l = null != a.A.getCoverImageUrl(n);
        r && !l && t(n, e)
      }
    }, [o, t, e, s])
  }(e);
  let s = r.useMemo(() => {
      var t;
      return null != (t = o[e]) ? t : []
    }, [o, e]),
    u = r.useCallback(n => {
      t(n, e)
    }, [t, e]),
    d = (0, l.yK)([a.A], () => s.map(e => a.A.isFetching(e)));
  r.useEffect(() => {
    let t = s.filter(e => {
      let t = !a.A.canFetch(e) && !a.A.isFetching(e),
        n = null != a.A.getCoverImageUrl(e);
      return t && !n
    });
    t.length > 0 && n(t, e)
  }, [s, e, n, d]);
  let f = r.useMemo(() => s.map(e => ({
    applicationId: e
  })), [s]);
  return {
    applicationIds: s,
    games: f,
    onAddGame: u
  }
}

function d(e, t) {
  let [n, i, a, u] = (0, l.yK)([s.A], () => [s.A.suggestedFetchAttempted, s.A.suggestedFetchError, s.A.suggestedGameIds, s.A.suggestedFetchIsLoading]), {
    onLoad: d
  } = (0, c.s)();
  r.useEffect(() => {
    !n && e && o.A.fetchSuggestedGames()
  }, [n, e]);
  let f = n && !u;
  r.useEffect(() => {
    var e, n;
    if (!f) return;
    let r = t.map(e => e.games).flat();
    i || d(null != (e = a.suggestedGamesIds) ? e : [], null != (n = a.suggestedWishlistGamesIds) ? n : [], r)
  }, [f])
}