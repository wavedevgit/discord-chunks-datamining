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
  var t;
  let {
    bump: r,
    bumpMultiple: l,
    gameIds: a
  } = (0, c.b)();
  ! function(e) {
    var t, r;
    let {
      remove: l,
      peekedGameIds: a
    } = (0, c.b)();
    (0, u.qU)(null != (t = a[e]) ? t : []);
    let s = n.useCallback(e => i.Z.isFetching(e), []),
      o = (0, u.kN)(null != (r = a[e]) ? r : []);
    n.useEffect(() => {
      var t;
      for (let r of null != (t = a[e]) ? t : []) {
        let t = o[r];
        (null == t ? true : t.coverImageUrl) != null || s(r) || l(r, e)
      }
    }, [a, l, e, s, o])
  }(e);
  let s = n.useMemo(() => {
      var t;
      return null != (t = a[e]) ? t : []
    }, [a, e]),
    o = n.useCallback(t => {
      r(t, e)
    }, [r, e]);
  (0, u.qU)(s);
  let d = (0, u.kN)(s),
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
    onAddGame: o
  }
}

function f(e, t) {
  let [r, i, u, d] = (0, l.Wu)([o.Z], () => [o.Z.suggestedFetchAttempted, o.Z.suggestedFetchError, o.Z.suggestedGameIds, o.Z.suggestedFetchIsLoading]), {
    onLoad: f
  } = (0, c.b)();
  n.useEffect(() => {
    !r && e && s.Z.fetchSuggestedGames()
  }, [r, e]);
  let g = r && !d;
  n.useEffect(() => {
    var e, r;
    if (!g) return;
    let n = t.map(e => e.games).flat();
    f(i ? [] : (null != (e = u.suggestedGamesIds) ? e : []).filter(a.z6), i ? [] : (null != (r = u.suggestedWishlistGamesIds) ? r : []).filter(a.z6), n)
  }, [g])
}