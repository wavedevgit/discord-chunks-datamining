/** Chunk was on 6043 **/
/** chunk id: 176038, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  _Y: () => O,
  aB: () => E,
  th: () => T,
  ub: () => N
}), require("./388685.js"), require("./457542.js");
var Chunk473749 = require("./473749.js"),
  Chunk524437 = require("./524437.js"),
  Chunk809206 = require("./809206.js"),
  Chunk153867 = require("./153867.js"),
  Chunk857595 = require("./857595.js"),
  Chunk607070 = require("./607070.js"),
  Chunk1870 = require("./1870.js"),
  Chunk884697 = require("./884697.js"),
  Chunk150039 = require("./150039.js"),
  Chunk164946 = require("./164946.js"),
  Chunk210887 = require("./210887.js"),
  Chunk695346 = require("./695346.js"),
  Chunk675478 = require("./675478.js"),
  Chunk25990 = require("./25990.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk981631 = require("./981631.js"),
  Chunk469115 = require("./469115.js"),
  Chunk959517 = require("./959517.js");
let y = [Chunk981631.BRd.DARK, Chunk981631.BRd.LIGHT, Chunk981631.BRd.DARKER, Chunk981631.BRd.MIDNIGHT],
  _ = [Chunk524437.Pi.COMPACT, Chunk524437.Pi.COZY, Chunk524437.Pi.DEFAULT];

function S(e) {
  return e[Math.floor(Math.random() * e.length)]
}
async function E() {
  let e = function() {
      let e = b.default.getCurrentUser();
      return g.ZP.canUseClientThemes(e) ? Object.keys(j.qt).map(e => Number(e)) : []
    }(),
    t = e.length > 0 && Math.random() > .7;
  try {
    if (t) {
      let t, a = [...e, null],
        r = S(a);
      if (null != r) {
        var n;
        let e = j.qt[r];
        t = null != (n = null == e ? true : e.theme) ? n : v.BRd.DARK
      } else t = S([v.BRd.DARK, v.BRd.DARKER, v.BRd.MIDNIGHT]);
      await l.ZI({
        theme: t,
        backgroundGradientPresetId: null != r ? r : true,
        customUserThemeSettings: true
      }, h.fy.INFREQUENT_USER_ACTION)
    } else {
      let e = S(y);
      await l.ZI({
        theme: e,
        backgroundGradientPresetId: true,
        customUserThemeSettings: true
      }, h.fy.INFREQUENT_USER_ACTION)
    }
  } catch (e) {}
}
async function T() {
  let e = c.Z.purchases,
    t = (0, d.Ad)(e),
    n = (0, d.jT)(e),
    a = t.length > 0,
    r = n.length > 0;
  if (a || r) try {
    if (a) {
      let e = S([...t, null]);
      (0, u.PO)(e)
    }
    if (r) {
      let e = S([...n, null]);
      (0, u.Wh)(e)
    }
    let e = x.Z.getAllPending(),
      l = (0, m.ED)(e);
    await (0, i.Mn)(l).finally(i.si)
  } catch (e) {}
}

function O() {
  try {
    let e = S(v.yqN.FONT_SIZES);
    (0, s.oL)(e);
    let t = S(C.fP);
    (0, s.ZZ)(t);
    let n = S(_);
    f.YC.updateSetting(n)
  } catch (e) {}
}

function N() {
  a.useEffect(() => {
    var e, t, n, a, r;
    let g = b.default.getCurrentUser(),
      v = f.L1.getSetting(),
      j = c.Z.purchases,
      C = (0, d.Ad)(j),
      y = (0, d.jT)(j),
      _ = p.Z.theme,
      S = v.backgroundGradientPresetId,
      E = null == g || null == (e = g.avatarDecoration) ? true : e.skuId,
      T = null == g || null == (n = g.collectibles) || null == (t = n.nameplate) ? true : t.skuId,
      O = null != E && null != (a = C.find(e => e.skuId === E)) ? a : null,
      N = null != T && null != (r = y.find(e => e.skuId === T)) ? r : null,
      P = o.Z.fontSize,
      w = o.Z.messageGroupSpacing,
      I = f.YC.getSetting();
    return () => {
      try {
        l.ZI({
          theme: _,
          backgroundGradientPresetId: null != S ? S : true,
          customUserThemeSettings: true
        }, h.fy.INFREQUENT_USER_ACTION), (0, u.PO)(O), (0, u.Wh)(N);
        let e = x.Z.getAllPending(),
          t = (0, m.ED)(e);
        (0, i.Mn)(t).finally(i.si), (0, s.oL)(P), (0, s.ZZ)(w), f.YC.updateSetting(I)
      } catch (e) {}
    }
  }, [])
}