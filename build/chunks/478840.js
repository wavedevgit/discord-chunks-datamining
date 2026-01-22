/** Chunk was on web.js **/
/** chunk id: 478840, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => f
});
var Chunk310784 = require("./310784.js"),
  i = require.n(Chunk310784),
  Chunk325335 = require("./325335.js"),
  Chunk998304 = require("./998304.js"),
  Chunk300703 = require("./300703.js");
let l = "#ffffff",
  c = "#36393e",
  u = e => {
    var t, n;
    let {
      colors: r,
      saturationFactor: o = 1
    } = e;
    if (null == r || r.length < 1) return null;
    let u = (0, s.h6)(r),
      d = a.A.parseString(u);
    if (null == d) return null;
    let f = (0, s.IB)(d.red, d.blue, d.green),
      p = null != (t = (0, s.lZ)({
        foreground: i()((0, s.fE)(d, .6, true).toHexString()),
        background: i()(l),
        ratio: 3,
        saturationFactor: o
      })) ? t : d,
      _ = null != (n = (0, s.lZ)({
        foreground: i()((0, s.fE)(d, .6, false).toHexString()),
        background: i()(c),
        ratio: 5,
        saturationFactor: o
      })) ? n : d,
      h = (0, s.lZ)({
        foreground: i()(u),
        background: i()(l),
        ratio: 7,
        saturationFactor: o
      }),
      m = (0, s.lZ)({
        foreground: i()(u),
        background: i()(c),
        ratio: 7,
        saturationFactor: o
      });
    return {
      LIGHT: {
        accentColor: null == h ? true : h.hex(),
        backgroundColor: (0, s.WN)({
          colorRGB: p,
          saturationFactor: o
        }),
        highlightColor: null == d ? true : d.toHexString(),
        opacity: (null == f ? true : f.saturation) < .1 ? .35 : .1
      },
      DARK: {
        accentColor: null == m ? true : m.hex(),
        backgroundColor: (0, s.WN)({
          colorRGB: _,
          saturationFactor: o
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
    return o.A.applyPlatformToThemedEmojiColorPalette({
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