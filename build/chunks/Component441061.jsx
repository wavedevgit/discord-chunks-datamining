/** Chunk was on 70127 **/
/** chunk id: 441061, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk475179 = require("./475179.js"),
  Chunk358221 = require("./358221.js"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  let t = (0, i.e7)([o.Z], () => o.Z.getVoiceParticipantsHidden(e));
  return (0, r.jsx)(l.S89, {
    id: "no-video-hide",
    label: s.intl.string(s.t.BL8ss7),
    checked: !t,
    action: () => a.Z.toggleVoiceParticipantsHidden(e, !t)
  })
}