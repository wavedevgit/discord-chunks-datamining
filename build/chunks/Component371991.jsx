/** Chunk was on web.js **/
/** chunk id: 371991, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => b,
  tS: () => g,
  x3: () => E
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk846519 = require("./846519.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk706454 = require("./706454.js"),
  Chunk70956 = require("./70956.js"),
  Chunk506071 = require("./506071.js"),
  Chunk719247 = require("./719247.js"),
  Chunk561308 = require("./561308.js"),
  Chunk284635 = require("./284635.js");

function g(e) {
  let [t, n] = i.useState(Date.now()), r = (0, p.n)(), a = (0, s.e7)([u.Z], () => u.Z.useReducedMotion), o = !r || a && !e;
  return i.useEffect(() => {
    let e = new l.Xp;
    return e.start(o ? 15 * f.Z.Millis.SECOND : f.Z.Millis.SECOND, () => {
      n(Date.now())
    }), () => e.stop()
  }, [o]), {
    now: t,
    slowTickMode: o
  }
}
let E = e => {
    let {
      entry: t,
      inline: n = false,
      textColor: a,
      textTabularNumbers: s = true,
      textFontCode: l = true,
      hovered: u = false,
      bold: d = false,
      scaleFontToUserSetting: f = false
    } = e, {
      now: p
    } = g(u), _ = i.useMemo(() => (0, m.T_)(t, p), [t, p]), E = i.useRef(_), b = i.useRef(_);
    return i.useEffect(() => {
      b.current = _
    }), i.useEffect(() => {
      E.current = b.current
    }, [t]), (0, r.jsx)(c.Text, {
      className: o()({
        [h.fontCode]: l,
        [h.bold]: d,
        [h.inlineTimestamp]: n
      }),
      variant: "text-xs/medium",
      tabularNumbers: s,
      color: a,
      scaleFontToUserSetting: f,
      "aria-label": E.current,
      children: _
    })
  },
  b = e => {
    var t, n;
    let {
      entry: i,
      textColor: a,
      hovered: o = false,
      bold: l = false,
      scaleFontToUserSetting: u = false
    } = e, f = (0, m.Jg)(i), p = (0, s.e7)([d.default], () => d.default.locale), h = (0, s.e7)([_.Z], () => _.Z.getMatchingActivity(i)), g = null != (n = null == h || null == (t = h.timestamps) ? true : t.start) ? n : null == h ? true : h.created_at;
    return null != g ? (0, r.jsx)(E, {
      entry: {
        start: g
      },
      textColor: a,
      hovered: o,
      bold: l,
      scaleFontToUserSetting: u
    }) : f ? (0, r.jsx)(E, {
      entry: i,
      textColor: a,
      hovered: o,
      bold: l,
      scaleFontToUserSetting: u
    }) : (0, r.jsx)(c.Text, {
      variant: "text-xs/normal",
      color: a,
      lineClamp: 1,
      scaleFontToUserSetting: u,
      children: (0, m.GL)(i, p)
    })
  }