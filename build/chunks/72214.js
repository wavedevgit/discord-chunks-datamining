/** Chunk was on 83098 **/
/** chunk id: 72214, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  s: () => h
}), require("./388685.js"), require("./35282.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk38618 = require("./38618.js"),
  Chunk51596 = require("./51596.js"),
  Chunk391436 = require("./391436.js"),
  Chunk314897 = require("./314897.js"),
  Chunk580005 = require("./580005.js"),
  Chunk987509 = require("./987509.js"),
  Chunk601565 = require("./601565.js"),
  Chunk41837 = require("./41837.js");

function b(e) {
  let {
    query: t,
    queryMode: n
  } = (0, a.F_)(e), l = f.M, r = null;
  return null != n && f.M.includes(n) && (l = [n], r = n), {
    query: t,
    queryMode: r,
    resultTypes: l
  }
}

function h(e) {
  let {
    targetDestination: t,
    selectedDestinations: n,
    originDestination: a,
    includeMissingDMs: f = false
  } = e, h = (0, r.e7)([u.default], () => u.default.getId()), m = l.useMemo(() => ({
    searchOptions: {
      blacklist: new Set(["user:".concat(h)]),
      frecencyBoosters: true,
      userFilters: null
    }
  }), [h]), {
    search: p,
    query: g,
    results: x
  } = (0, d.Z)(m), [y, j] = l.useState(b("")), v = l.useCallback(e => j(b(e)), [j]), {
    queryMode: S
  } = y, P = l.useRef(null), O = l.useRef(n), Z = g !== P.current ? n : O.current;
  l.useEffect(() => {
    g !== P.current && (O.current = n), P.current = g
  }, [g, n]), l.useLayoutEffect(() => {
    let {
      query: e,
      resultTypes: t
    } = y;
    p({
      query: e,
      resultTypes: t
    })
  }, [p, y]), (0, i.D)();
  let E = (0, r.e7)([o.Z], () => o.Z.getFrequentlyWithoutFetchingLatest()),
    L = (0, r.e7)([s.Z], () => s.Z.isConnected()),
    T = "" !== g;
  return {
    results: l.useMemo(() => (0, c.ZP)({
      results: x,
      hasQuery: T,
      queryMode: S,
      targetDestination: t,
      frequentChannels: E,
      selectedDestinations: n,
      pinnedDestinations: Z,
      originDestination: a,
      includeMissingDMs: f,
      isConnected: L
    }), [x, T, S, t, E, n, Z, a, f, L]),
    updateSearchText: v
  }
}