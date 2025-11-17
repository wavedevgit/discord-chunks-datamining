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
  Chunk921801 = require("./921801.js"),
  Chunk695346 = require("./695346.js"),
  Chunk569550 = require("./569550.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");

function f() {
  let e = Chunk695346.I0.useSetting(),
    {
      analyticsLocations: t
    } = (0, Chunk906732.ZP)(),
    n = Chunk473749.useCallback(e => {
      (0, c.Z)("stream_previews_disabled", e, l.I0.getSetting(), t), l.I0.updateSetting(e)
    }, [exports]);
  return (0, Chunk54381.jsx)(Chunk921801.F, {
    setting: Chunk726985.s6.VOICE_AND_VIDEO_STREAM_PREVIEWS,
    children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
      label: Chunk388032.intl.string(Chunk388032.t["1CzWUK"]),
      description: Chunk388032.intl.string(Chunk388032.t.jTNPHM),
      checked: module,
      onChange: require
    })
  })
}