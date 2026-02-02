/** Chunk was on 96758 **/
/** chunk id: 151054, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  R: () => b
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

function h(e) {
  let {
    query: t,
    queryMode: r
  } = (0, i.LV)(e), n = f.D, l = null;
  return null != r && f.D.includes(r) && (n = [r], l = r), {
    query: t,
    queryMode: l,
    resultTypes: n
  }
}

function b(e) {
  let {
    targetDestination: t,
    selectedDestinations: r,
    originDestination: i,
    includeMissingDMs: f = false
  } = e, b = (0, l.bG)([u.default], () => u.default.getId()), d = n.useMemo(() => ({
    searchOptions: {
      blacklist: new Set(["user:".concat(b)]),
      frecencyBoosters: true,
      userFilters: null
    }
  }), [b]), {
    search: _,
    query: p,
    results: y
  } = (0, A.A)(d), [O, E] = n.useState(h("")), I = n.useCallback(e => E(h(e)), [E]), {
    queryMode: L
  } = O, g = n.useRef(null), m = n.useRef(r), P = p !== g.current ? r : m.current;
  n.useEffect(() => {
    p !== g.current && (m.current = r), g.current = p
  }, [p, r]), n.useLayoutEffect(() => {
    let {
      query: e,
      resultTypes: t
    } = O;
    _({
      query: e,
      resultTypes: t
    })
  }, [_, O]), (0, a.k)();
  let N = (0, l.bG)([o.A], () => o.A.getFrequentlyWithoutFetchingLatest()),
    j = (0, l.bG)([s.A], () => s.A.isConnected()),
    C = "" !== p;
  return {
    results: n.useMemo(() => (0, c.Ay)({
      results: y,
      hasQuery: C,
      queryMode: L,
      targetDestination: t,
      frequentChannels: N,
      selectedDestinations: r,
      pinnedDestinations: P,
      originDestination: i,
      includeMissingDMs: f,
      isConnected: j
    }), [y, C, L, t, N, r, P, i, f, j]),
    updateSearchText: I
  }
}