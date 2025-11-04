/** Chunk was on web.js **/
/** chunk id: 402567, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js"),
  Chunk597688 = require("./597688.js"),
  Chunk922347 = require("./922347.js"),
  Chunk350327 = require("./350327.js"),
  Chunk626135 = require("./626135.js"),
  Chunk211712 = require("./211712.js"),
  Chunk981631 = require("./981631.js");
let f = Object.keys(Chunk211712.hq),
  _ = e => {
    let t = null == e ? f : f.filter(t => t !== e);
    return t[Math.floor(Math.random() * t.length)]
  };

function p() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion),
    [t, n] = (0, Chunk647438.useState)(_()),
    {
      banner: f,
      themeColors: p,
      avatarDecorationSkuId: h,
      displayNameStyles: m
    } = (0, Chunk647438.useMemo)(() => {
      let n = (0, Chunk211712.Ib)(exports);
      return {
        banner: require.getBannerSrc(module),
        themeColors: require.themeColors,
        avatarDecorationSkuId: require.avatarDecorationSkuId,
        displayNameStyles: require.displayNameStyles
      }
    }, [exports, module]),
    g = (0, Chunk442837.e7)([Chunk597688.Z], () => {
      let e = Chunk597688.Z.getProduct(h);
      return (0, Chunk922347.M)(null == module ? true : module.items[0]) ? module.items[0] : null
    });
  (0, Chunk647438.useEffect)(() => {
    (0, Chunk350327.x3)({
      banner: f,
      themeColors: p,
      avatarDecoration: g,
      displayNameStyles: m
    })
  }, [f, p, g, m]);
  let E = (0, Chunk647438.useCallback)(() => {
    let e = _(exports);
    require(module), Chunk626135.default.track(Chunk981631.rMx.TRY_IT_OUT_PRESET_SHUFFLED, {
      preset: module
    })
  }, [exports]);
  return {
    preset: exports,
    onShuffle: E
  }
}