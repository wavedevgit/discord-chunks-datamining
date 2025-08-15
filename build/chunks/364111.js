/** Chunk was on 1272 **/
/** chunk id: 364111, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E: () => p
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk311570 = require("./311570.js"),
  Chunk442837 = require("./442837.js"),
  Chunk353926 = require("./353926.js"),
  Chunk358085 = require("./358085.js"),
  Chunk335131 = require("./335131.js"),
  Chunk597688 = require("./597688.js"),
  Chunk52030 = require("./52030.js");
let d = Chunk311570.v.VARIANTS_GROUP;

function p(e, t, n) {
  let i = (0, l.e7)([a.Z], () => a.Z.hasLoadedExperiments),
    p = (0, l.e7)([c.Z], () => c.Z.skipNumCategories),
    f = (0, o.isDesktop)() || (0, o.isWeb)(),
    [h, g, m, b, _, O, E, y] = (0, l.Wu)([u.Z], () => {
      var t, n;
      return [u.Z.getShopBlocks(e), null != (t = u.Z.getLastSuccessfulFetch(e)) ? t : 0, null != (n = u.Z.getLastErrorTimestamp(e)) ? n : 0, u.Z.getLastFetchOptions(e), u.Z.getFetchShopHomeError(e), u.Z.getIsFetchingShopHome(e), u.Z.getHasKnownStaleData(e), u.Z.getShopHomeConfigOverride()]
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
        variantsReturnStyle: d,
        includeBundles: f,
        includePopularPicks: true,
        includeDynamicBlocks: true,
        shopHomeConfig: y,
        skipNumCategories: p
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
    }, [t, f, y, p]),
    I = (0, r.useMemo)(() => !(0, s.oc)(b, v), [b, v]),
    C = (0, r.useMemo)(() => Date.now() - g < 6e5, [g]);
  return (0, r.useEffect)(() => {
    if (!i || O) return;
    let t = Date.now() - m < 6e5;
    (null == _ || !t) && (I || !C || E) && (0, s.Ov)(e, v, n)
  }, [i, O, _, m, C, E, I, v, e, n]), {
    isFetchingShopHome: O,
    fetchShopHomeError: _,
    shopBlocks: h,
    refreshShopHome: (0, r.useCallback)(() => {
      (0, s.Ov)(e, v, n)
    }, [e, v, n])
  }
}