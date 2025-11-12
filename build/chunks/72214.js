/** Chunk was on 83098 **/
/** chunk id: 72214, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  s: () => h
}), require("./388685.js"), require("./35282.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk38618 = require("./38618.js"),
  Chunk51596 = require("./51596.js"),
  Chunk516373 = require("./516373.js"),
  Chunk314897 = require("./314897.js"),
  Chunk580005 = require("./580005.js"),
  Chunk987509 = require("./987509.js"),
  Chunk601565 = require("./601565.js"),
  Chunk41837 = require("./41837.js");

function b(e) {
  let {
    query: t,
    queryMode: n
  } = (0, s.F_)(e), r = f.M, l = null;
  return null != n && f.M.includes(n) && (r = [n], l = n), {
    query: t,
    queryMode: l,
    resultTypes: r
  }
}

function h(e) {
  let {
    targetDestination: t,
    selectedDestinations: n,
    originDestination: s,
    includeMissingDMs: f = false
  } = e, h = (0, l.e7)([u.default], () => u.default.getId()), p = r.useMemo(() => ({
    searchOptions: {
      blacklist: new Set(["user:".concat(h)]),
      frecencyBoosters: true,
      userFilters: null
    }
  }), [h]), {
    search: m,
    query: g,
    results: y
  } = (0, d.Z)(p), [x, v] = r.useState(b("")), S = r.useCallback(e => v(b(e)), [v]), {
    queryMode: E
  } = x, j = r.useRef(null), Z = r.useRef(n), P = g !== j.current ? n : Z.current;
  r.useEffect(() => {
    g !== j.current && (Z.current = n), j.current = g
  }, [g, n]), r.useLayoutEffect(() => {
    let {
      query: e,
      resultTypes: t
    } = x;
    m({
      query: e,
      resultTypes: t
    })
  }, [m, x]), (0, i.D)();
  let _ = (0, l.e7)([o.Z], () => o.Z.getFrequentlyWithoutFetchingLatest()),
    O = (0, l.e7)([a.Z], () => a.Z.isConnected()),
    C = "" !== g;
  return {
    results: r.useMemo(() => (0, c.ZP)({
      results: y,
      hasQuery: C,
      queryMode: E,
      targetDestination: t,
      frequentChannels: _,
      selectedDestinations: n,
      pinnedDestinations: P,
      originDestination: s,
      includeMissingDMs: f,
      isConnected: O
    }), [y, C, E, t, _, n, P, s, f, O]),
    updateSearchText: S
  }
}