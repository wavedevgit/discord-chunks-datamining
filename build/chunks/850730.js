/** Chunk was on 65599 **/
/** chunk id: 850730, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  DB: () => T,
  ZL: () => O,
  ln: () => E,
  t0: () => S
}), require("./896048.js"), require("./492834.js");
var Chunk64700 = require("./64700.js"),
  Chunk873298 = require("./873298.js"),
  Chunk631670 = require("./631670.js"),
  Chunk817281 = require("./817281.js"),
  Chunk955572 = require("./955572.js"),
  Chunk775602 = require("./775602.js"),
  Chunk4227 = require("./4227.js"),
  Chunk993408 = require("./993408.js"),
  Chunk919395 = require("./919395.js"),
  Chunk587600 = require("./587600.js"),
  Chunk544028 = require("./544028.js"),
  Chunk253932 = require("./253932.js"),
  Chunk594061 = require("./594061.js"),
  Chunk752319 = require("./752319.js"),
  Chunk287809 = require("./287809.js"),
  Chunk927578 = require("./927578.js"),
  Chunk652215 = require("./652215.js"),
  Chunk385803 = require("./385803.js"),
  Chunk381941 = require("./381941.js");
let y = [Chunk652215.NJ8.DARK, Chunk652215.NJ8.LIGHT, Chunk652215.NJ8.DARKER, Chunk652215.NJ8.MIDNIGHT],
  A = [Chunk873298.NS.COMPACT, Chunk873298.NS.COZY, Chunk873298.NS.DEFAULT];

function C(e) {
  return e[Math.floor(Math.random() * e.length)]
}
async function S() {
  let e, t = (e = f.default.getCurrentUser(), b.Ay.canUseClientThemes(e) ? Object.keys(j.ag).map(e => Number(e)) : []),
    n = t.length > 0 && Math.random() > .7;
  try {
    if (n) {
      let e, n = [...t, null],
        l = C(n);
      if (null != l) {
        var a;
        let t = j.ag[l];
        e = null != (a = null == t ? true : t.theme) ? a : v.NJ8.DARK
      } else e = C([v.NJ8.DARK, v.NJ8.DARKER, v.NJ8.MIDNIGHT]);
      await i.u_({
        theme: e,
        backgroundGradientPresetId: null != l ? l : true,
        customUserThemeSettings: true
      }, x.Sb.INFREQUENT_USER_ACTION)
    } else {
      let e = C(y);
      await i.u_({
        theme: e,
        backgroundGradientPresetId: true,
        customUserThemeSettings: true
      }, x.Sb.INFREQUENT_USER_ACTION)
    }
  } catch (e) {}
}
async function O() {
  let e = c.A.purchases,
    t = (0, d.x9)(e),
    n = (0, d.$W)(e),
    a = t.length > 0,
    l = n.length > 0;
  if (a || l) try {
    if (a) {
      let e = C([...t, null]);
      (0, u.Dx)(e)
    }
    if (l) {
      let e = C([...n, null]);
      (0, u.pX)(e)
    }
    let e = g.A.getAllPending(),
      i = (0, m.Sk)(e);
    await (0, r.yu)(i).finally(r.pZ)
  } catch (e) {}
}

function E() {
  try {
    let e = C(v.hH7.FONT_SIZES);
    (0, s.XS)(e);
    let t = C(_.qh);
    (0, s.AC)(t);
    let n = C(A);
    h.Xi.updateSetting(n)
  } catch (e) {}
}

function T() {
  a.useEffect(() => {
    var e, t, n, a, l;
    let b = f.default.getCurrentUser(),
      v = h.eh.getSetting(),
      j = c.A.purchases,
      _ = (0, d.x9)(j),
      y = (0, d.$W)(j),
      A = p.A.theme,
      C = v.backgroundGradientPresetId,
      S = null == b || null == (n = b.avatarDecoration) ? true : n.skuId,
      O = null == b || null == (l = b.collectibles) || null == (a = l.nameplate) ? true : a.skuId,
      E = null != S && null != (e = _.find(e => e.skuId === S)) ? e : null,
      T = null != O && null != (t = y.find(e => e.skuId === O)) ? t : null,
      N = o.A.fontSize,
      w = o.A.messageGroupSpacing,
      I = h.Xi.getSetting();
    return () => {
      try {
        i.u_({
          theme: A,
          backgroundGradientPresetId: null != C ? C : true,
          customUserThemeSettings: true
        }, x.Sb.INFREQUENT_USER_ACTION), (0, u.Dx)(E), (0, u.pX)(T);
        let e = g.A.getAllPending(),
          t = (0, m.Sk)(e);
        (0, r.yu)(t).finally(r.pZ), (0, s.XS)(N), (0, s.AC)(w), h.Xi.updateSetting(I)
      } catch (e) {}
    }
  }, [])
}