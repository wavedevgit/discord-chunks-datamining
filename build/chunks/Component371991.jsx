/** Chunk was on web.js **/
/** chunk id: 371991, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => y,
  tS: () => E,
  x3: () => b
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk846519 = require("./846519.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk706454 = require("./706454.js"),
  Chunk70956 = require("./70956.js"),
  Chunk506071 = require("./506071.js"),
  Chunk719247 = require("./719247.js"),
  Chunk561308 = require("./561308.js"),
  Chunk368176 = require("./368176.js"),
  Chunk284635 = require("./284635.js");

function E(e) {
  let [t, n] = i.useState(Date.now()), r = (0, p.n)(), o = (0, s.e7)([u.Z], () => u.Z.useReducedMotion), a = !r || o && !e;
  return i.useEffect(() => {
    let e = new l.Xp;
    return e.start(a ? 15 * f.Z.Millis.SECOND : f.Z.Millis.SECOND, () => {
      n(Date.now())
    }), () => e.stop()
  }, [a]), {
    now: t,
    slowTickMode: a
  }
}
let b = e => {
    let {
      entry: t,
      inline: n = false,
      textColor: o,
      textTabularNumbers: s = true,
      textFontCode: l = true,
      hovered: u = false,
      bold: d = false,
      scaleFontToUserSetting: f = false
    } = e, {
      now: p
    } = E(u), {
      enabled: _
    } = h.Q.useConfig({
      location: "active_timestamp"
    }), b = i.useMemo(() => (0, m.T_)(t, p), [t, p]), y = i.useRef(b), O = i.useRef(b);
    return i.useEffect(() => {
      O.current = b
    }), i.useEffect(() => {
      y.current = O.current
    }, [t]), (0, r.jsx)(c.Text, {
      className: a()({
        [g.fontCode]: !!_ || l,
        [g.bold]: !_ && d,
        [g.inlineTimestamp]: n
      }),
      variant: _ ? "text-xs/normal" : "text-xs/medium",
      tabularNumbers: s,
      color: _ ? "text-feedback-positive" : o,
      scaleFontToUserSetting: f,
      "aria-label": y.current,
      children: b
    })
  },
  y = e => {
    var t, n;
    let {
      entry: i,
      textColor: o,
      hovered: a = false,
      bold: l = false,
      scaleFontToUserSetting: u = false
    } = e, f = (0, m.Jg)(i), p = (0, s.e7)([d.default], () => d.default.locale), h = (0, s.e7)([_.Z], () => _.Z.getMatchingActivity(i)), g = null != (n = null == h || null == (t = h.timestamps) ? true : t.start) ? n : null == h ? true : h.created_at;
    return null != g ? (0, r.jsx)(b, {
      entry: {
        start: g
      },
      textColor: o,
      hovered: a,
      bold: l,
      scaleFontToUserSetting: u
    }) : f ? (0, r.jsx)(b, {
      entry: i,
      textColor: o,
      hovered: a,
      bold: l,
      scaleFontToUserSetting: u
    }) : (0, r.jsx)(c.Text, {
      variant: "text-xs/normal",
      color: o,
      lineClamp: 1,
      scaleFontToUserSetting: u,
      children: (0, m.GL)(i, p)
    })
  }