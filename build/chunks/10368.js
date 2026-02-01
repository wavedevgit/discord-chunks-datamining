/** Chunk was on 9207 **/
/** chunk id: 10368, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
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
let _ = Object.keys(Chunk461797.jB),
  p = e => {
    let t = null == e ? _ : _.filter(t => t !== e);
    return t[Math.floor(Math.random() * t.length)]
  };

function m() {
  let e = (0, i.bG)([l.A], () => l.A.useReducedMotion),
    [t, n] = (0, r.useState)(p()),
    {
      banner: _,
      themeColors: m,
      avatarDecorationSkuId: g,
      displayNameStyles: A
    } = (0, r.useMemo)(() => {
      let n = (0, d.Wt)(t);
      return {
        banner: n.getBannerSrc(e),
        themeColors: n.themeColors,
        avatarDecorationSkuId: n.avatarDecorationSkuId,
        displayNameStyles: n.displayNameStyles
      }
    }, [t, e]),
    f = (0, i.bG)([s.A], () => {
      let e = s.A.getProduct(g);
      return (0, a.T)(null == e ? true : e.items[0]) ? e.items[0] : null
    });
  (0, r.useEffect)(() => {
    (0, o.w5)({
      banner: _,
      themeColors: m,
      avatarDecoration: f,
      displayNameStyles: A
    })
  }, [_, m, f, A]);
  let b = (0, r.useCallback)(() => {
    let e = p(t);
    n(e), c.default.track(u.HAw.TRY_IT_OUT_PRESET_SHUFFLED, {
      preset: e
    })
  }, [t]);
  return {
    preset: t,
    onShuffle: b
  }
}