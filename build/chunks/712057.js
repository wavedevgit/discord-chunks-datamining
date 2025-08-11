/** Chunk was on web.js **/
/** chunk id: 712057, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u,
  u: () => c
});
var Chunk564334 = require("./564334.js"),
  Chunk302221 = require("./302221.js"),
  Chunk563114 = require("./563114.js");
let a = "#ffffff",
  s = "#36393e",
  l = e => {
    var t, n;
    let {
      colors: o,
      saturationFactor: l = 1
    } = e;
    if (null == o || o.length < 1) return null;
    let c = (0, i.YD)(o),
      u = r.Z.parseString(a);
    if (null == u) return null;
    let d = r.Z.parseString(s);
    if (null == d) return null;
    let f = r.Z.parseString(c);
    if (null == f) return null;
    let _ = (0, i.AZ)(f.red, f.blue, f.green),
      p = null != (t = (0, i.k8)({
        colors: [(0, i.j)(f, .6, true), u],
        ratio: 3,
        saturationFactor: l
      })) ? t : f,
      h = null != (n = (0, i.k8)({
        colors: [(0, i.j)(f, .6, false), d],
        ratio: 5,
        saturationFactor: l
      })) ? n : f,
      m = (0, i.k8)({
        colors: [f, u],
        ratio: 7,
        saturationFactor: l
      }),
      g = (0, i.k8)({
        colors: [f, d],
        ratio: 7,
        saturationFactor: l
      });
    return {
      LIGHT: {
        accentColor: null == m ? true : m.toHexString(),
        backgroundColor: (0, i.xj)({
          colorRGB: p,
          saturationFactor: l
        }),
        highlightColor: null == f ? true : f.toHexString(),
        opacity: (null == _ ? true : _.saturation) < .1 ? .35 : .1
      },
      DARK: {
        accentColor: null == g ? true : g.toHexString(),
        backgroundColor: (0, i.xj)({
          colorRGB: h,
          saturationFactor: l
        }),
        highlightColor: null == f ? true : f.toHexString(),
        opacity: (null == _ ? true : _.saturation) < .1 ? .5 : .2
      }
    }
  },
  c = e => {
    let {
      colors: t,
      saturationFactor: n = 1,
      shouldProcessMobileColors: r = false
    } = e, i = l({
      colors: t,
      saturationFactor: n
    });
    return o.Z.applyPlatformToThemedEmojiColorPalette({
      palette: i,
      shouldProcessMobileColors: r
    })
  },
  u = (e, t, n) => {
    var r;
    if (null == e || e.length < 1) return null;
    let i = c({
        colors: e,
        saturationFactor: t
      }),
      o = n ? null == i ? true : i.DARK : null == i ? true : i.LIGHT;
    return {
      backgroundColor: null == o ? true : o.backgroundColor,
      accentColor: null == o ? true : o.accentColor,
      highlightColor: null == o ? true : o.highlightColor,
      opacity: null != (r = null == o ? true : o.opacity) ? r : .15
    }
  }