/** Chunk was on 38626 **/
/** chunk id: 712057, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk688619 = require("./688619.js"),
  l = require.n(Chunk688619),
  Chunk564334 = require("./564334.js"),
  Chunk302221 = require("./302221.js"),
  Chunk563114 = require("./563114.js");
let s = "#ffffff",
  c = "#36393e",
  u = (e, t, n) => {
    var i;
    if (null == e || e.length < 1) return null;
    let u = (e => {
        let {
          colors: t,
          saturationFactor: n = 1,
          shouldProcessMobileColors: i = false
        } = e, u = (e => {
          var t, n;
          let {
            colors: i,
            saturationFactor: a = 1
          } = e;
          if (null == i || i.length < 1) return null;
          let u = (0, o.YD)(i),
            d = r.Z.parseString(u);
          if (null == d) return null;
          let h = (0, o.AZ)(d.red, d.blue, d.green),
            p = null != (t = (0, o.wh)({
              foreground: l()((0, o.j)(d, .6, true).toHexString()),
              background: l()(s),
              ratio: 3,
              saturationFactor: a
            })) ? t : d,
            m = null != (n = (0, o.wh)({
              foreground: l()((0, o.j)(d, .6, false).toHexString()),
              background: l()(c),
              ratio: 5,
              saturationFactor: a
            })) ? n : d,
            f = (0, o.wh)({
              foreground: l()(u),
              background: l()(s),
              ratio: 7,
              saturationFactor: a
            }),
            g = (0, o.wh)({
              foreground: l()(u),
              background: l()(c),
              ratio: 7,
              saturationFactor: a
            });
          return {
            LIGHT: {
              accentColor: null == f ? true : f.hex(),
              backgroundColor: (0, o.xj)({
                colorRGB: p,
                saturationFactor: a
              }),
              highlightColor: null == d ? true : d.toHexString(),
              opacity: (null == h ? true : h.saturation) < .1 ? .35 : .1
            },
            DARK: {
              accentColor: null == g ? true : g.hex(),
              backgroundColor: (0, o.xj)({
                colorRGB: m,
                saturationFactor: a
              }),
              highlightColor: null == d ? true : d.toHexString(),
              opacity: (null == h ? true : h.saturation) < .1 ? .5 : .2
            }
          }
        })({
          colors: t,
          saturationFactor: n
        });
        return a.Z.applyPlatformToThemedEmojiColorPalette({
          palette: u,
          shouldProcessMobileColors: i
        })
      })({
        colors: e,
        saturationFactor: t
      }),
      d = n ? null == u ? true : u.DARK : null == u ? true : u.LIGHT;
    return {
      backgroundColor: null == d ? true : d.backgroundColor,
      accentColor: null == d ? true : d.accentColor,
      highlightColor: null == d ? true : d.highlightColor,
      opacity: null != (i = null == d ? true : d.opacity) ? i : .15
    }
  }