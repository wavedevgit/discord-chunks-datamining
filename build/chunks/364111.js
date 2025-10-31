/** Chunk was on 1272 **/
/** chunk id: 364111, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E: () => p
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk311570 = require("./311570.js"),
  Chunk442837 = require("./442837.js"),
  Chunk353926 = require("./353926.js"),
  Chunk335131 = require("./335131.js"),
  Chunk597688 = require("./597688.js"),
  Chunk52030 = require("./52030.js"),
  Chunk447988 = require("./447988.js");
let d = Chunk311570.v.VARIANTS_GROUP;

function p(e, t, n) {
  let i = arguments.length > 3 && true !== arguments[3] && arguments[3],
    p = (0, l.e7)([a.Z], () => a.Z.hasLoadedExperiments),
    f = (0, l.e7)([o.Z], () => o.Z.skipNumCategories),
    [m, h, g, _, b, E, O, I] = (0, l.Wu)([c.Z], () => {
      var t, n;
      return [c.Z.getShopBlocks(e), null != (t = c.Z.getLastSuccessfulFetch(e)) ? t : 0, null != (n = c.Z.getLastErrorTimestamp(e)) ? n : 0, c.Z.getLastFetchOptions(e), c.Z.getFetchShopHomeError(e), c.Z.getIsFetchingShopHome(e), c.Z.getHasKnownStaleData(e), c.Z.getShopHomeConfigOverride()]
    }),
    y = (0, r.useMemo)(() => {
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
        variantsReturnStyle: d,
        includePopularPicks: true,
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
    }, [t, I, f]),
    v = (0, r.useMemo)(() => !(0, s.oc)(_, y), [_, y]),
    C = (0, u.J)(m, null != E && E, i),
    S = (0, r.useMemo)(() => !C && Date.now() - h < 6e5, [h, C]);
  return (0, r.useEffect)(() => {
    if (!p || E) return;
    let t = Date.now() - g < 6e5;
    (null == b || !t) && (v || !S || O) && (0, s.Ov)(e, y, n)
  }, [p, E, b, g, S, O, v, y, e, n]), {
    isFetchingShopHome: E,
    fetchShopHomeError: b,
    shopBlocks: m,
    refreshShopHome: (0, r.useCallback)(() => {
      (0, s.Ov)(e, y, n)
    }, [e, y, n])
  }
}