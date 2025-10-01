/** Chunk was on 56848 **/
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
  var t;
  let [r, l] = (0, i.Wu)([a.Z], () => [a.Z.numNoDataAvailable(), a.Z.numSupplementalGames()]), {
    bump: s,
    bumpMultiple: u,
    gameIds: d
  } = (0, o.b)();
  ! function(e) {
    var t, r;
    let {
      remove: i,
      peekedGameIds: l
    } = (0, o.b)();
    (0, c.qU)(null != (t = l[e]) ? t : []);
    let s = n.useCallback(e => a.Z.isFetching(e), []),
      u = (0, c.kN)(null != (r = l[e]) ? r : []);
    n.useEffect(() => {
      var t;
      for (let r of null != (t = l[e]) ? t : []) {
        let t = u[r];
        (null == t ? true : t.coverImageUrl) != null || s(r) || i(r, e)
      }
    }, [l, i, e, s, u])
  }(e);
  let f = n.useMemo(() => {
      var t;
      return null != (t = d[e]) ? t : []
    }, [d, e]),
    g = n.useCallback(t => {
      s(t, e)
    }, [s, e]);
  (0, c.qU)(f);
  let h = (0, c.kN)(f),
    [p, m] = n.useState([]),
    v = (t = f.map(e => a.Z.isFetching(e)), n.useMemo(() => t.join("\x1f"), [t]));
  return n.useEffect(() => {
    let t = f.filter(e => a.Z.noDataAvailable(e));
    t.length > 0 && u(t, e)
  }, [v, f, e, u, h]), n.useEffect(() => {
    m(f.map(e => {
      let t = h[e];
      return {
        applicationId: e,
        gameName: null == t ? true : t.name,
        imageSrc: null == t ? true : t.coverImageUrl
      }
    }))
  }, [f, h, e, r, l]), {
    games: p,
    onAddGame: g
  }
}

function d(e, t) {
  let [r, a, c, u] = (0, i.Wu)([s.Z], () => [s.Z.suggestedFetchAttempted, s.Z.suggestedFetchError, s.Z.suggestedGameIds, s.Z.suggestedFetchIsLoading]), {
    onLoad: d
  } = (0, o.b)();
  n.useEffect(() => {
    !r && e && l.Z.fetchSuggestedGames()
  }, [r, e]);
  let f = r && !u;
  n.useEffect(() => {
    var e, r;
    if (!f) return;
    let n = t.map(e => e.games).flat();
    if (!a) d(null != (e = c.suggestedGamesIds) ? e : [], null != (r = c.suggestedWishlistGamesIds) ? r : [], n)
  }, [f])
}