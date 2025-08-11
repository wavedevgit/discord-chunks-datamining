/** Chunk was on web.js **/
/** chunk id: 371991, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => b,
  tS: () => g,
  x3: () => E
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk419732 = require("./419732.js");

function g(e) {
  let [t, n] = i.useState(Date.now()), r = (0, _.n)(), o = (0, s.e7)([u.Z], () => u.Z.useReducedMotion), a = !r || o && !e;
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
let E = e => {
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
      now: _
    } = g(u), p = i.useMemo(() => (0, h.T_)(t, _), [t, _]), E = i.useRef(p), b = i.useRef(p);
    return i.useEffect(() => {
      b.current = p
    }), i.useEffect(() => {
      E.current = b.current
    }, [t]), <c.Text className={a()({
        [m.fontCode]: l,
        [m.bold]: d,
        [m.inlineTimestamp]: n
      })} variant={"text-xs/medium"} tabularNumbers={s} color={o} scaleFontToUserSetting={f} aria-label={E.current}>{p}</c.Text>
  },
  b = e => {
    var t, n;
    let {
      entry: i,
      textColor: o,
      hovered: a = false,
      bold: l = false,
      scaleFontToUserSetting: u = false
    } = e, f = (0, h.Jg)(i), _ = (0, s.e7)([d.default], () => d.default.locale), m = (0, s.e7)([p.Z], () => p.Z.getMatchingActivity(i)), g = null != (n = null == m || null == (t = m.timestamps) ? true : t.start) ? n : null == m ? true : m.created_at;
    return null != g ? <E entry={{
        start: g
      }} textColor={o} hovered={a} bold={l} scaleFontToUserSetting={u} /> : f ? <E entry={i} textColor={o} hovered={a} bold={l} scaleFontToUserSetting={u} /> : <c.Text variant={"text-xs/normal"} color={o} lineClamp={1} scaleFontToUserSetting={u}>{(0, h.GL)(i, _)}</c.Text>
  }