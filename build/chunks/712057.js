/** Chunk was on web.js **/
/** chunk id: 712057, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk688619 = require("./688619.js"),
  i = require.n(Chunk688619),
  Chunk564334 = require("./564334.js"),
  Chunk302221 = require("./302221.js"),
  Chunk563114 = require("./563114.js");
let l = "#ffffff",
  c = "#36393e",
  u = e => {
    var t, n;
    let {
      colors: r,
      saturationFactor: s = 1
    } = e;
    if (null == r || r.length < 1) return null;
    let u = (0, o.YD)(r),
      d = a.Z.parseString(u);
    if (null == d) return null;
    let f = (0, o.AZ)(d.red, d.blue, d.green),
      p = null != (t = (0, o.wh)({
        foreground: i()((0, o.j)(d, .6, true).toHexString()),
        background: i()(l),
        ratio: 3,
        saturationFactor: s
      })) ? t : d,
      _ = null != (n = (0, o.wh)({
        foreground: i()((0, o.j)(d, .6, false).toHexString()),
        background: i()(c),
        ratio: 5,
        saturationFactor: s
      })) ? n : d,
      h = (0, o.wh)({
        foreground: i()(u),
        background: i()(l),
        ratio: 7,
        saturationFactor: s
      }),
      m = (0, o.wh)({
        foreground: i()(u),
        background: i()(c),
        ratio: 7,
        saturationFactor: s
      });
    return {
      LIGHT: {
        accentColor: null == h ? true : h.hex(),
        backgroundColor: (0, o.xj)({
          colorRGB: p,
          saturationFactor: s
        }),
        highlightColor: null == d ? true : d.toHexString(),
        opacity: (null == f ? true : f.saturation) < .1 ? .35 : .1
      },
      DARK: {
        accentColor: null == m ? true : m.hex(),
        backgroundColor: (0, o.xj)({
          colorRGB: _,
          saturationFactor: s
        }),
        highlightColor: null == d ? true : d.toHexString(),
        opacity: (null == f ? true : f.saturation) < .1 ? .5 : .2
      }
    }
  },
  d = e => {
    let {
      colors: t,
      saturationFactor: n = 1,
      shouldProcessMobileColors: r = false
    } = e, i = u({
      colors: t,
      saturationFactor: n
    });
    return s.Z.applyPlatformToThemedEmojiColorPalette({
      palette: i,
      shouldProcessMobileColors: r
    })
  },
  f = (e, t, n) => {
    var r;
    if (null == e || e.length < 1) return null;
    let i = d({
        colors: e,
        saturationFactor: t
      }),
      a = n ? null == i ? true : i.DARK : null == i ? true : i.LIGHT;
    return {
      backgroundColor: null == a ? true : a.backgroundColor,
      accentColor: null == a ? true : a.accentColor,
      highlightColor: null == a ? true : a.highlightColor,
      opacity: null != (r = null == a ? true : a.opacity) ? r : .15
    }
  }