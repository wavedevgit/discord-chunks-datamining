/** Chunk was on web.js **/
/** chunk id: 10368, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk775602 = require("./775602.js"),
  Chunk590180 = require("./590180.js"),
  Chunk898461 = require("./898461.js"),
  Chunk207803 = require("./207803.js"),
  Chunk954571 = require("./954571.js"),
  Chunk461797 = require("./461797.js"),
  Chunk652215 = require("./652215.js");
let f = Object.keys(Chunk461797.jB),
  p = e => {
    let t = null == e ? f : f.filter(t => t !== e);
    return t[Math.floor(Math.random() * t.length)]
  };

function _() {
  let e = (0, i.bG)([a.A], () => a.A.useReducedMotion),
    [t, n] = (0, r.useState)(p()),
    {
      banner: f,
      themeColors: _,
      avatarDecorationSkuId: h,
      displayNameStyles: m
    } = (0, r.useMemo)(() => {
      let n = (0, u.Wt)(t);
      return {
        banner: n.getBannerSrc(e),
        themeColors: n.themeColors,
        avatarDecorationSkuId: n.avatarDecorationSkuId,
        displayNameStyles: n.displayNameStyles
      }
    }, [t, e]),
    g = (0, i.bG)([s.A], () => {
      let e = s.A.getProduct(h);
      return (0, o.T)(null == e ? true : e.items[0]) ? e.items[0] : null
    });
  (0, r.useEffect)(() => {
    (0, l.w5)({
      banner: f,
      themeColors: _,
      avatarDecoration: g,
      displayNameStyles: m
    })
  }, [f, _, g, m]);
  let E = (0, r.useCallback)(() => {
    let e = p(t);
    n(e), c.default.track(d.HAw.TRY_IT_OUT_PRESET_SHUFFLED, {
      preset: e
    })
  }, [t]);
  return {
    preset: t,
    onShuffle: E
  }
}