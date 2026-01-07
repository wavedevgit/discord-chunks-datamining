/** Chunk was on web.js **/
/** chunk id: 402567, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js"),
  Chunk597688 = require("./597688.js"),
  Chunk922347 = require("./922347.js"),
  Chunk350327 = require("./350327.js"),
  Chunk626135 = require("./626135.js"),
  Chunk211712 = require("./211712.js"),
  Chunk981631 = require("./981631.js");
let f = Object.keys(Chunk211712.hq),
  p = e => {
    let t = null == e ? f : f.filter(t => t !== e);
    return t[Math.floor(Math.random() * t.length)]
  };

function _() {
  let e = (0, i.e7)([a.Z], () => a.Z.useReducedMotion),
    [t, n] = (0, r.useState)(p()),
    {
      banner: f,
      themeColors: _,
      avatarDecorationSkuId: m,
      displayNameStyles: h
    } = (0, r.useMemo)(() => {
      let n = (0, u.Ib)(t);
      return {
        banner: n.getBannerSrc(e),
        themeColors: n.themeColors,
        avatarDecorationSkuId: n.avatarDecorationSkuId,
        displayNameStyles: n.displayNameStyles
      }
    }, [t, e]),
    g = (0, i.e7)([o.Z], () => {
      let e = o.Z.getProduct(m);
      return (0, s.M)(null == e ? true : e.items[0]) ? e.items[0] : null
    });
  (0, r.useEffect)(() => {
    (0, l.x3)({
      banner: f,
      themeColors: _,
      avatarDecoration: g,
      displayNameStyles: h
    })
  }, [f, _, g, h]);
  let E = (0, r.useCallback)(() => {
    let e = p(t);
    n(e), c.default.track(d.rMx.TRY_IT_OUT_PRESET_SHUFFLED, {
      preset: e
    })
  }, [t]);
  return {
    preset: t,
    onShuffle: E
  }
}