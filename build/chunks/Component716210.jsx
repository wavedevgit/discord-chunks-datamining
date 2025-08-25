/** Chunk was on web.js **/
/** chunk id: 716210, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk921801 = require("./921801.js"),
  Chunk131951 = require("./131951.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");

function d() {
  let e = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getEnableSilenceWarning());
  return (0, Chunk951288.jsx)(Chunk921801.F, {
    setting: Chunk726985.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING,
    children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
      value: module,
      onChange: e => a.Z.setSilenceWarning(e),
      hideBorder: true,
      children: Chunk388032.intl.string(Chunk388032.t.jtiiCw)
    })
  })
}