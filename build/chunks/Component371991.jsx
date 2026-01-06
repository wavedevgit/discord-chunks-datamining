/** Chunk was on web.js **/
/** chunk id: 371991, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h,
  x: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk706454 = require("./706454.js"),
  Chunk719247 = require("./719247.js"),
  Chunk561308 = require("./561308.js"),
  Chunk368176 = require("./368176.js"),
  Chunk288469 = require("./288469.js"),
  Chunk14743 = require("./14743.js");
let m = e => {
    let {
      entry: t,
      inline: n = false,
      textColor: a,
      textTabularNumbers: s = true,
      textFontCode: c = true,
      hovered: u = false,
      bold: m = false,
      scaleFontToUserSetting: h = false
    } = e, {
      now: g
    } = (0, p.g)(u), {
      enabled: E
    } = f.Q.useConfig({
      location: "active_timestamp"
    }), b = i.useMemo(() => (0, d.T_)(t, g), [t, g]), y = i.useRef(b), O = i.useRef(b);
    return i.useEffect(() => {
      O.current = b
    }), i.useEffect(() => {
      y.current = O.current
    }, [t]), (0, r.jsx)(l.Text, {
      className: o()({
        [_.fontCode]: !!E || c,
        [_.bold]: !E && m,
        [_.inlineTimestamp]: n
      }),
      variant: E ? "text-xs/normal" : "text-xs/medium",
      tabularNumbers: s,
      color: a,
      scaleFontToUserSetting: h,
      "aria-label": y.current,
      children: b
    })
  },
  h = e => {
    var t, n;
    let {
      entry: i,
      textColor: a,
      hovered: o = false,
      bold: f = false,
      scaleFontToUserSetting: p = false
    } = e, _ = (0, d.Jg)(i), h = (0, s.e7)([c.default], () => c.default.locale), g = (0, s.e7)([u.Z], () => u.Z.getMatchingActivity(i)), E = null != (n = null == g || null == (t = g.timestamps) ? true : t.start) ? n : null == g ? true : g.created_at;
    return null != E ? (0, r.jsx)(m, {
      entry: {
        start: E
      },
      textColor: a,
      hovered: o,
      bold: f,
      scaleFontToUserSetting: p
    }) : _ ? (0, r.jsx)(m, {
      entry: i,
      textColor: a,
      hovered: o,
      bold: f,
      scaleFontToUserSetting: p
    }) : (0, r.jsx)(l.Text, {
      variant: "text-xs/normal",
      color: a,
      lineClamp: 1,
      scaleFontToUserSetting: p,
      children: (0, d.GL)(i, h)
    })
  }