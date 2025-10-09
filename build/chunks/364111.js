/** Chunk was on 21145 **/
/** chunk id: 364111, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  E: () => O
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
let f = Chunk311570.v.VARIANTS_GROUP;

function O(e, t, r) {
  let o = arguments.length > 3 && true !== arguments[3] && arguments[3],
    O = (0, s.e7)([i.Z], () => i.Z.hasLoadedExperiments),
    d = (0, s.e7)([l.Z], () => l.Z.skipNumCategories),
    b = (0, u.isDesktop)() || (0, u.isWeb)(),
    [S, h, g, y, m, v, _, I] = (0, s.Wu)([a.Z], () => {
      var t, r;
      return [a.Z.getShopBlocks(e), null != (t = a.Z.getLastSuccessfulFetch(e)) ? t : 0, null != (r = a.Z.getLastErrorTimestamp(e)) ? r : 0, a.Z.getLastFetchOptions(e), a.Z.getFetchShopHomeError(e), a.Z.getIsFetchingShopHome(e), a.Z.getHasKnownStaleData(e), a.Z.getShopHomeConfigOverride()]
    }),
    P = (0, n.useMemo)(() => {
      var e, r;
      return e = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), n.forEach(function(t) {
            var n;
            n = r[t], t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = n
          })
        }
        return e
      }({}, t), r = r = {
        variantsReturnStyle: f,
        includeBundles: b,
        includePopularPicks: true,
        includeDynamicBlocks: true,
        shopHomeConfig: I,
        skipNumCategories: d
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(r)).forEach(function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
      }), e
    }, [t, b, I, d]),
    E = (0, n.useMemo)(() => !(0, c.oc)(y, P), [y, P]),
    j = (0, p.J)(S, null != v && v, o),
    w = (0, n.useMemo)(() => !j && Date.now() - h < 6e5, [h, j]);
  return (0, n.useEffect)(() => {
    if (!O || v) return;
    let t = Date.now() - g < 6e5;
    (null == m || !t) && (E || !w || _) && (0, c.Ov)(e, P, r)
  }, [O, v, m, g, w, _, E, P, e, r]), {
    isFetchingShopHome: v,
    fetchShopHomeError: m,
    shopBlocks: S,
    refreshShopHome: (0, n.useCallback)(() => {
      (0, c.Ov)(e, P, r)
    }, [e, P, r])
  }
}