/** Chunk was on 75708 **/
/** chunk id: 520384, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.js"),
  Chunk921801 = require("./921801.js"),
  Chunk695346 = require("./695346.js"),
  Chunk569550 = require("./569550.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk20493 = require("./20493.js");

function p(e) {
  let {
    refreshStyles: t = false
  } = e, n = o.I0.useSetting(), {
    analyticsLocations: p
  } = (0, a.ZP)(), g = r.useCallback(e => {
    (0, c.Z)("stream_previews_disabled", e, o.I0.getSetting(), p), o.I0.updateSetting(e)
  }, [p]), h = <s.j7V value={n} onChange={g} note={u.intl.string(u.t.jTNPHB)} hideBorder={t}>{u.intl.string(u.t["1CzWUF"])}</s.j7V>;
  return <l.F setting={d.s6.VOICE_AND_VIDEO_STREAM_PREVIEWS}>{t ? h : (0, i.jsx)(s.hjN, {
      className: m.marginBottom20,
      title: u.intl.string(u.t.OBwCXF),
      children: h
    })}</l.F>
}