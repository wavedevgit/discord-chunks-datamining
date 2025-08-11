/** Chunk was on 1272 **/
/** chunk id: 364111, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E: () => d
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk353926 = require("./353926.js"),
  Chunk358085 = require("./358085.js"),
  Chunk335131 = require("./335131.js"),
  Chunk597688 = require("./597688.js"),
  Chunk52030 = require("./52030.js"),
  Chunk228624 = require("./228624.js");

function d(e, t, n) {
  let d = (0, i.e7)([l.Z], () => l.Z.hasLoadedExperiments),
    p = (0, i.e7)([s.Z], () => s.Z.skipNumCategories),
    f = (0, u.hv)("useMaybeFetchCollectiblesShopHome"),
    h = (0, a.isDesktop)() || (0, a.isWeb)(),
    [g, m, b, _, O, E, y] = (0, i.Wu)([c.Z], () => {
      var t, n;
      return [c.Z.getShopBlocks(e), null != (t = c.Z.getLastSuccessfulFetch(e)) ? t : 0, null != (n = c.Z.getLastErrorTimestamp(e)) ? n : 0, c.Z.getLastFetchOptions(e), c.Z.getFetchShopHomeError(e), c.Z.getIsFetchingShopHome(e), c.Z.getShopHomeConfigOverride()]
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
        variantsReturnStyle: f,
        includeBundles: h,
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
    }, [t, f, h, y, p]),
    I = (0, r.useMemo)(() => !(0, o.oc)(_, v), [_, v]),
    C = (0, r.useMemo)(() => Date.now() - m < 6e5, [m]);
  return (0, r.useEffect)(() => {
    if (!d || E) return;
    let t = Date.now() - b < 6e5;
    null != O && t || (I || !C) && (0, o.Ov)(e, v, n)
  }, [d, E, O, b, C, I, v, e, n]), {
    isFetchingShopHome: E,
    fetchShopHomeError: O,
    shopBlocks: g,
    refreshShopHome: (0, r.useCallback)(() => {
      (0, o.Ov)(e, v, n)
    }, [e, v, n])
  }
}