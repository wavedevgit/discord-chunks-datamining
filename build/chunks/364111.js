/** Chunk was on 1272 **/
/** chunk id: 364111, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E: () => f
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk311570 = require("./311570.js"),
  Chunk442837 = require("./442837.js"),
  Chunk353926 = require("./353926.js"),
  Chunk358085 = require("./358085.js"),
  Chunk335131 = require("./335131.js"),
  Chunk597688 = require("./597688.js"),
  Chunk52030 = require("./52030.js"),
  Chunk447988 = require("./447988.js");
let p = Chunk311570.v.VARIANTS_GROUP;

function f(e, t, n) {
  let i = arguments.length > 3 && true !== arguments[3] && arguments[3],
    f = (0, l.e7)([a.Z], () => a.Z.hasLoadedExperiments),
    h = (0, l.e7)([c.Z], () => c.Z.skipNumCategories),
    g = (0, o.isDesktop)() || (0, o.isWeb)(),
    [m, b, _, O, E, v, y, I] = (0, l.Wu)([u.Z], () => {
      var t, n;
      return [u.Z.getShopBlocks(e), null != (t = u.Z.getLastSuccessfulFetch(e)) ? t : 0, null != (n = u.Z.getLastErrorTimestamp(e)) ? n : 0, u.Z.getLastFetchOptions(e), u.Z.getFetchShopHomeError(e), u.Z.getIsFetchingShopHome(e), u.Z.getHasKnownStaleData(e), u.Z.getShopHomeConfigOverride()]
    }),
    S = (0, r.useMemo)(() => {
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
        variantsReturnStyle: p,
        includeBundles: g,
        includePopularPicks: true,
        includeDynamicBlocks: true,
        shopHomeConfig: I,
        skipNumCategories: h
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
    }, [t, g, I, h]),
    C = (0, r.useMemo)(() => !(0, s.oc)(O, S), [O, S]),
    T = (0, d.J)(m, null != v && v, i),
    N = (0, r.useMemo)(() => !T && Date.now() - b < 6e5, [b, T]);
  return (0, r.useEffect)(() => {
    if (!f || v) return;
    let t = Date.now() - _ < 6e5;
    (null == E || !t) && (C || !N || y) && (0, s.Ov)(e, S, n)
  }, [f, v, E, _, N, y, C, S, e, n]), {
    isFetchingShopHome: v,
    fetchShopHomeError: E,
    shopBlocks: m,
    refreshShopHome: (0, r.useCallback)(() => {
      (0, s.Ov)(e, S, n)
    }, [e, S, n])
  }
}