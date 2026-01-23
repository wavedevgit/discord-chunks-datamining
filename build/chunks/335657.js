/** Chunk was on 21738 **/
/** chunk id: 335657, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  y: () => p
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk635358 = require("./635358.js"),
  Chunk311907 = require("./311907.js"),
  Chunk49463 = require("./49463.js"),
  Chunk979286 = require("./979286.js"),
  Chunk590180 = require("./590180.js"),
  Chunk295811 = require("./295811.js"),
  Chunk233525 = require("./233525.js"),
  Chunk766201 = require("./766201.js");

function p(e, t, n) {
  let p = arguments.length > 3 && true !== arguments[3] && arguments[3],
    h = (0, l.bG)([a.A], () => a.A.hasLoadedExperiments);
  (0, u.n)("useMaybeFetchCollectiblesShopHome");
  let g = i.g.VARIANTS_GROUP,
    f = (0, l.bG)([o.A], () => o.A.skipNumCategories),
    [m, A, _, b, E, O, y, I] = (0, l.yK)([c.A], () => {
      var t, n;
      return [c.A.getShopBlocks(e), null != (t = c.A.getLastSuccessfulFetch(e)) ? t : 0, null != (n = c.A.getLastErrorTimestamp(e)) ? n : 0, c.A.getLastFetchOptions(e), c.A.getFetchShopHomeError(e), c.A.getIsFetchingShopHome(e), c.A.getHasKnownStaleData(e), c.A.getShopHomeConfigOverride()]
    }),
    v = (0, r.useMemo)(() => {
      var e, n;
      return e = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({}, t), n = n = {
        variantsReturnStyle: g,
        includeDynamicBlocks: true,
        shopHomeConfig: I,
        skipNumCategories: f
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(n)).forEach(function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }), e
    }, [t, I, f, g]),
    S = (0, r.useMemo)(() => !(0, s.gn)(b, v), [b, v]),
    C = (0, d.n)(m, null != O && O, p),
    N = (0, r.useMemo)(() => !C && Date.now() - A < 6e5, [A, C]);
  return (0, r.useEffect)(() => {
    if (!h || O) return;
    let t = Date.now() - _ < 6e5;
    null != E && t || (S || !N || y) && (0, s.h$)(e, v, n)
  }, [h, O, E, _, N, y, S, v, e, n]), {
    isFetchingShopHome: O,
    fetchShopHomeError: E,
    shopBlocks: m,
    refreshShopHome: (0, r.useCallback)(() => {
      (0, s.h$)(e, v, n)
    }, [e, v, n])
  }
}