/** Chunk was on 30355 **/
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
  let {
    bump: r,
    bumpMultiple: l,
    gameIds: a
  } = (0, o.b)();
  ! function(e) {
    var t, r;
    let {
      remove: l,
      peekedGameIds: a
    } = (0, o.b)();
    (0, c.qU)(null != (t = a[e]) ? t : []);
    let s = n.useCallback(e => i.Z.isFetching(e), []),
      u = (0, c.kN)(null != (r = a[e]) ? r : []);
    n.useEffect(() => {
      var t;
      for (let r of null != (t = a[e]) ? t : []) {
        let t = u[r];
        (null == t ? true : t.coverImageUrl) != null || s(r) || l(r, e)
      }
    }, [a, l, e, s, u])
  }(e);
  let s = n.useMemo(() => {
      var t;
      return null != (t = a[e]) ? t : []
    }, [a, e]),
    u = n.useCallback(t => {
      r(t, e)
    }, [r, e]);
  (0, c.qU)(s);
  let d = (0, c.kN)(s),
    [f, g] = n.useState([]),
    m = (t = s.map(e => i.Z.isFetching(e)), n.useMemo(() => t.join("\x1f"), [t]));
  return n.useEffect(() => {
    let t = s.filter(e => i.Z.noDataAvailable(e));
    t.length > 0 && l(t, e)
  }, [m, s, e, l, d]), n.useEffect(() => {
    g(s.map(e => {
      let t = d[e];
      return {
        applicationId: e,
        gameName: null == t ? true : t.name,
        imageSrc: null == t ? true : t.coverImageUrl
      }
    }))
  }, [s, d, e]), {
    games: f,
    onAddGame: u
  }
}

function d(e, t) {
  let [r, i, c, u] = (0, l.Wu)([s.Z], () => [s.Z.suggestedFetchAttempted, s.Z.suggestedFetchError, s.Z.suggestedGameIds, s.Z.suggestedFetchIsLoading]), {
    onLoad: d
  } = (0, o.b)();
  n.useEffect(() => {
    !r && e && a.Z.fetchSuggestedGames()
  }, [r, e]);
  let f = r && !u;
  n.useEffect(() => {
    var e, r;
    if (!f) return;
    let n = t.map(e => e.games).flat();
    if (!i) d(null != (e = c.suggestedGamesIds) ? e : [], null != (r = c.suggestedWishlistGamesIds) ? r : [], n)
  }, [f])
}