/** Chunk was on web.js **/
/** chunk id: 520384, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk921801 = require("./921801.js"),
  Chunk695346 = require("./695346.js"),
  Chunk569550 = require("./569550.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk197571 = require("./197571.js");

function _(e) {
  let {
    refreshStyles: t = false
  } = e, n = l.I0.useSetting(), {
    analyticsLocations: _
  } = (0, o.ZP)(), p = i.useCallback(e => {
    (0, c.Z)("stream_previews_disabled", e, l.I0.getSetting(), _), l.I0.updateSetting(e)
  }, [_]), h = (0, r.jsx)(a.j7V, {
    value: n,
    onChange: p,
    note: d.intl.string(d.t.jTNPHB),
    hideBorder: t,
    children: d.intl.string(d.t["1CzWUF"])
  });
  return (0, r.jsx)(s.F, {
    setting: u.s6.VOICE_AND_VIDEO_STREAM_PREVIEWS,
    children: t ? h : (0, r.jsx)(a.hjN, {
      className: f.marginBottom20,
      title: d.intl.string(d.t.OBwCXF),
      children: h
    })
  })
}