/** Chunk was on web.js **/
/** chunk id: 441061, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk475179 = require("./475179.js"),
  Chunk358221 = require("./358221.js"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  let t = (0, i.e7)([s.Z], () => s.Z.getVoiceParticipantsHidden(e));
  return (0, r.jsx)(o.S89, {
    id: "no-video-hide",
    label: l.intl.string(l.t.BL8ss7),
    checked: !t,
    action: () => a.Z.toggleVoiceParticipantsHidden(e, !t)
  })
}