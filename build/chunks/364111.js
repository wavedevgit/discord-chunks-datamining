/** Chunk was on 1272 **/
/** chunk id: 364111, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E: () => p
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk311570 = require("./311570.js"),
  Chunk442837 = require("./442837.js"),
  Chunk353926 = require("./353926.js"),
  Chunk335131 = require("./335131.js"),
  Chunk597688 = require("./597688.js"),
  Chunk52030 = require("./52030.js"),
  Chunk952597 = require("./952597.js"),
  Chunk447988 = require("./447988.js");

function p(e, t, n) {
  let p = arguments.length > 3 && true !== arguments[3] && arguments[3],
    f = (0, l.e7)([a.Z], () => a.Z.hasLoadedExperiments);
  (0, u.a)("useMaybeFetchCollectiblesShopHome");
  let g = i.v.VARIANTS_GROUP,
    h = (0, l.e7)([s.Z], () => s.Z.skipNumCategories),
    [m, b, E, _, O, I, v, y] = (0, l.Wu)([c.Z], () => {
      var t, n;
      return [c.Z.getShopBlocks(e), null != (t = c.Z.getLastSuccessfulFetch(e)) ? t : 0, null != (n = c.Z.getLastErrorTimestamp(e)) ? n : 0, c.Z.getLastFetchOptions(e), c.Z.getFetchShopHomeError(e), c.Z.getIsFetchingShopHome(e), c.Z.getHasKnownStaleData(e), c.Z.getShopHomeConfigOverride()]
    }),
    C = (0, r.useMemo)(() => {
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
        shopHomeConfig: y,
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
    }, [t, y, h, g]),
    S = (0, r.useMemo)(() => !(0, o.oc)(_, C), [_, C]),
    T = (0, d.J)(m, null != I && I, p),
    N = (0, r.useMemo)(() => !T && Date.now() - b < 6e5, [b, T]);
  return (0, r.useEffect)(() => {
    if (!f || I) return;
    let t = Date.now() - E < 6e5;
    (null == O || !t) && (S || !N || v) && (0, o.Ov)(e, C, n)
  }, [f, I, O, E, N, v, S, C, e, n]), {
    isFetchingShopHome: I,
    fetchShopHomeError: O,
    shopBlocks: m,
    refreshShopHome: (0, r.useCallback)(() => {
      (0, o.Ov)(e, C, n)
    }, [e, C, n])
  }
}