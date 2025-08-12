/** Chunk was on 20501 **/
/** chunk id: 402567, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js"),
  Chunk597688 = require("./597688.js"),
  Chunk350327 = require("./350327.js"),
  Chunk626135 = require("./626135.js"),
  Chunk211712 = require("./211712.js"),
  Chunk981631 = require("./981631.js");
let u = Object.keys(Chunk211712.hq),
  m = e => {
    let t = null == e ? u : u.filter(t => t !== e);
    return t[Math.floor(Math.random() * t.length)]
  };

function p() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion),
    [t, n] = (0, Chunk73800.useState)(m()),
    {
      banner: u,
      themeColors: p,
      avatarDecorationSkuId: g
    } = (0, Chunk73800.useMemo)(() => {
      let n = (0, Chunk211712.Ib)(exports);
      return {
        banner: require.getBannerSrc(module),
        themeColors: require.themeColors,
        avatarDecorationSkuId: require.avatarDecorationSkuId
      }
    }, [exports, module]),
    h = (0, Chunk442837.e7)([Chunk597688.Z], () => {
      if (null == g) return;
      let e = Chunk597688.Z.getProduct(g);
      if (null != module && 0 !== module.items.length) return module.items[0]
    });
  (0, Chunk73800.useEffect)(() => {
    (0, Chunk350327.x3)({
      banner: u,
      themeColors: p,
      avatarDecoration: h
    })
  }, [u, p, h]);
  let f = (0, Chunk73800.useCallback)(() => {
    let e = m(exports);
    require(module), Chunk626135.default.track(Chunk981631.rMx.TRY_IT_OUT_PRESET_SHUFFLED, {
      preset: module
    })
  }, [exports]);
  return {
    preset: exports,
    onShuffle: f
  }
}