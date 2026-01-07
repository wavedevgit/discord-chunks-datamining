/** Chunk was on web.js **/
/** chunk id: 520384, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk921801 = require("./921801.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk569550 = require("./569550.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");

function f() {
  let e = l.I0.useSetting(),
    {
      analyticsLocations: t
    } = (0, o.ZP)(),
    n = i.useCallback(e => {
      (0, c.Z)("stream_previews_disabled", e, l.I0.getSetting(), t), l.I0.updateSetting(e)
    }, [t]);
  return (0, r.jsx)(s.F, {
    setting: u.s6.VOICE_AND_VIDEO_STREAM_PREVIEWS,
    children: (0, r.jsx)(a.rsf, {
      label: d.intl.string(d.t["1CzWUK"]),
      description: d.intl.string(d.t.jTNPHM),
      checked: e,
      onChange: n
    })
  })
}