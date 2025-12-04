/** Chunk was on 83098 **/
/** chunk id: 72214, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  s: () => h
}), require("./388685.js"), require("./35282.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk38618 = require("./38618.js"),
  Chunk51596 = require("./51596.js"),
  Chunk516373 = require("./516373.js"),
  Chunk314897 = require("./314897.js"),
  Chunk580005 = require("./580005.js"),
  Chunk987509 = require("./987509.js"),
  Chunk601565 = require("./601565.js"),
  Chunk41837 = require("./41837.js");

function f(e) {
  let {
    query: t,
    queryMode: n
  } = (0, a.F_)(e), l = b.M, r = null;
  return null != n && b.M.includes(n) && (l = [n], r = n), {
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
    includeMissingDMs: b = false
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
  } = (0, d.Z)(m), [y, j] = l.useState(f("")), v = l.useCallback(e => j(f(e)), [j]), {
    queryMode: S
  } = y, P = l.useRef(null), O = l.useRef(n), _ = g !== P.current ? n : O.current;
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
  let Z = (0, r.e7)([o.Z], () => o.Z.getFrequentlyWithoutFetchingLatest()),
    E = (0, r.e7)([s.Z], () => s.Z.isConnected()),
    L = "" !== g;
  return {
    results: l.useMemo(() => (0, c.ZP)({
      results: x,
      hasQuery: L,
      queryMode: S,
      targetDestination: t,
      frequentChannels: Z,
      selectedDestinations: n,
      pinnedDestinations: _,
      originDestination: a,
      includeMissingDMs: b,
      isConnected: E
    }), [x, L, S, t, Z, n, _, a, b, E]),
    updateSearchText: v
  }
}