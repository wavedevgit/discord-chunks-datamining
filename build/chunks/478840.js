/** Chunk was on 7034 **/
/** chunk id: 478840, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  V: () => c
});
var Chunk310784 = require("./310784.js"),
  l = require.n(Chunk310784),
  Chunk325335 = require("./325335.js"),
  Chunk998304 = require("./998304.js"),
  Chunk300703 = require("./300703.js");
let s = "#ffffff",
  u = "#36393e",
  c = (e, t, n) => {
    var i;
    if (null == e || e.length < 1) return null;
    let c = (e => {
        let {
          colors: t,
          saturationFactor: n = 1,
          shouldProcessMobileColors: i = false
        } = e, c = (e => {
          var t, n;
          let {
            colors: i,
            saturationFactor: a = 1
          } = e;
          if (null == i || i.length < 1) return null;
          let c = (0, o.h6)(i),
            d = r.A.parseString(c);
          if (null == d) return null;
          let p = (0, o.IB)(d.red, d.blue, d.green),
            h = null != (t = (0, o.lZ)({
              foreground: l()((0, o.fE)(d, .6, true).toHexString()),
              background: l()(s),
              ratio: 3,
              saturationFactor: a
            })) ? t : d,
            m = null != (n = (0, o.lZ)({
              foreground: l()((0, o.fE)(d, .6, false).toHexString()),
              background: l()(u),
              ratio: 5,
              saturationFactor: a
            })) ? n : d,
            f = (0, o.lZ)({
              foreground: l()(c),
              background: l()(s),
              ratio: 7,
              saturationFactor: a
            }),
            g = (0, o.lZ)({
              foreground: l()(c),
              background: l()(u),
              ratio: 7,
              saturationFactor: a
            });
          return {
            LIGHT: {
              accentColor: null == f ? true : f.hex(),
              backgroundColor: (0, o.WN)({
                colorRGB: h,
                saturationFactor: a
              }),
              highlightColor: null == d ? true : d.toHexString(),
              opacity: (null == p ? true : p.saturation) < .1 ? .35 : .1
            },
            DARK: {
              accentColor: null == g ? true : g.hex(),
              backgroundColor: (0, o.WN)({
                colorRGB: m,
                saturationFactor: a
              }),
              highlightColor: null == d ? true : d.toHexString(),
              opacity: (null == p ? true : p.saturation) < .1 ? .5 : .2
            }
          }
        })({
          colors: t,
          saturationFactor: n
        });
        return a.A.applyPlatformToThemedEmojiColorPalette({
          palette: c,
          shouldProcessMobileColors: i
        })
      })({
        colors: e,
        saturationFactor: t
      }),
      d = n ? null == c ? true : c.DARK : null == c ? true : c.LIGHT;
    return {
      backgroundColor: null == d ? true : d.backgroundColor,
      accentColor: null == d ? true : d.accentColor,
      highlightColor: null == d ? true : d.highlightColor,
      opacity: null != (i = null == d ? true : d.opacity) ? i : .15
    }
  }