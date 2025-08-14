/** Chunk was on 7384 **/
/** chunk id: 520384, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk921801 = require("./921801.js"),
  Chunk695346 = require("./695346.js"),
  Chunk569550 = require("./569550.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk197571 = require("./197571.js");

function p(e) {
  let {
    refreshStyles: t = false
  } = e, n = o.I0.useSetting(), {
    analyticsLocations: p
  } = (0, a.ZP)(), g = r.useCallback(e => {
    (0, c.Z)("stream_previews_disabled", e, o.I0.getSetting(), p), o.I0.updateSetting(e)
  }, [p]), h = (0, i.jsx)(s.j7V, {
    value: n,
    onChange: g,
    note: u.intl.string(u.t.jTNPHB),
    hideBorder: t,
    children: u.intl.string(u.t["1CzWUF"])
  });
  return (0, i.jsx)(l.F, {
    setting: d.s6.VOICE_AND_VIDEO_STREAM_PREVIEWS,
    children: t ? h : (0, i.jsx)(s.hjN, {
      className: m.marginBottom20,
      title: u.intl.string(u.t.OBwCXF),
      children: h
    })
  })
}