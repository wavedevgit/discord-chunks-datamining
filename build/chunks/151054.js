/** Chunk was on 96758 **/
/** chunk id: 151054, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  R: () => h
}), require("./896048.js"), require("./747238.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk142120 = require("./142120.js"),
  Chunk793322 = require("./793322.js"),
  Chunk999886 = require("./999886.js"),
  Chunk961350 = require("./961350.js"),
  Chunk205761 = require("./205761.js"),
  Chunk223863 = require("./223863.js"),
  Chunk146793 = require("./146793.js"),
  Chunk507696 = require("./507696.js");

function f(e) {
  let {
    query: t,
    queryMode: r
  } = (0, i.LV)(e), n = b.D, l = null;
  return null != r && b.D.includes(r) && (n = [r], l = r), {
    query: t,
    queryMode: l,
    resultTypes: n
  }
}

function h(e) {
  let {
    targetDestination: t,
    selectedDestinations: r,
    originDestination: i,
    includeMissingDMs: b = false
  } = e, h = (0, l.bG)([a.default], () => a.default.getId()), m = n.useMemo(() => ({
    searchOptions: {
      blacklist: new Set(["user:".concat(h)]),
      frecencyBoosters: true,
      userFilters: null
    }
  }), [h]), {
    search: p,
    query: y,
    results: g
  } = (0, d.A)(m), [j, x] = n.useState(f("")), O = n.useCallback(e => x(f(e)), [x]), {
    queryMode: v
  } = j, A = n.useRef(null), L = n.useRef(r), P = y !== A.current ? r : L.current;
  n.useEffect(() => {
    y !== A.current && (L.current = r), A.current = y
  }, [y, r]), n.useLayoutEffect(() => {
    let {
      query: e,
      resultTypes: t
    } = j;
    p({
      query: e,
      resultTypes: t
    })
  }, [p, j]), (0, u.k)();
  let S = (0, l.bG)([c.A], () => c.A.getFrequentlyWithoutFetchingLatest()),
    N = (0, l.bG)([s.A], () => s.A.isConnected()),
    w = "" !== y;
  return {
    results: n.useMemo(() => (0, o.Ay)({
      results: g,
      hasQuery: w,
      queryMode: v,
      targetDestination: t,
      frequentChannels: S,
      selectedDestinations: r,
      pinnedDestinations: P,
      originDestination: i,
      includeMissingDMs: b,
      isConnected: N
    }), [g, w, v, t, S, r, P, i, b, N]),
    updateSearchText: O
  }
}