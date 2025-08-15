/** Chunk was on 78086 **/
/** chunk id: 441061, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk475179 = require("./475179.js"),
  Chunk358221 = require("./358221.js"),
  Chunk388032 = require("./388032.jsx");

function s(e) {
  let n = (0, i.e7)([a.Z], () => a.Z.getVoiceParticipantsHidden(e));
  return (0, r.jsx)(l.S89, {
    id: "no-video-hide",
    label: c.intl.string(c.t.BL8ss7),
    checked: !n,
    action: () => o.Z.toggleVoiceParticipantsHidden(e, !n)
  })
}