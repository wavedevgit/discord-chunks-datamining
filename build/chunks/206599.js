/** Chunk was on 30355 **/
/** chunk id: 206599, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  J: () => f,
  K: () => d
}), require("./388685.js"), require("./472816.js"), require("./794429.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk669764 = require("./669764.js"),
  Chunk836197 = require("./836197.js"),
  Chunk592183 = require("./592183.js"),
  Chunk224724 = require("./224724.js"),
  Chunk938236 = require("./938236.js"),
  Chunk747101 = require("./747101.js");

function d(e) {
  var t;
  let [r, a] = (0, l.Wu)([i.Z], () => [i.Z.numNoDataAvailable(), i.Z.numSupplementalGames()]), {
    bump: s,
    bumpMultiple: o,
    gameIds: d
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
  let f = n.useMemo(() => {
      var t;
      return null != (t = d[e]) ? t : []
    }, [d, e]),
    m = n.useCallback(t => {
      s(t, e)
    }, [s, e]);
  (0, u.qU)(f);
  let p = (0, u.kN)(f),
    [g, b] = n.useState([]),
    j = (t = f.map(e => i.Z.isFetching(e)), n.useMemo(() => t.join("\x1f"), [t]));
  return n.useEffect(() => {
    let t = f.filter(e => i.Z.noDataAvailable(e));
    t.length > 0 && o(t, e)
  }, [j, f, e, o, p]), n.useEffect(() => {
    b(f.map(e => {
      let t = p[e];
      return {
        applicationId: e,
        gameName: null == t ? true : t.name,
        imageSrc: null == t ? true : t.coverImageUrl
      }
    }))
  }, [f, p, e, r, a]), {
    games: g,
    onAddGame: m
  }
}

function f(e, t) {
  let [r, i, u, d] = (0, l.Wu)([o.Z], () => [o.Z.suggestedFetchAttempted, o.Z.suggestedFetchError, o.Z.suggestedGameIds, o.Z.suggestedFetchIsLoading]), {
    onLoad: f
  } = (0, c.b)();
  n.useEffect(() => {
    !r && e && s.Z.fetchSuggestedGames()
  }, [r, e]);
  let m = r && !d;
  n.useEffect(() => {
    var e, r;
    if (!m) return;
    let n = t.filter(a.W).map(e => e.games).flat();
    if (!i) f(null != (e = u.suggestedGamesIds) ? e : [], null != (r = u.suggestedWishlistGamesIds) ? r : [], n)
  }, [m])
}