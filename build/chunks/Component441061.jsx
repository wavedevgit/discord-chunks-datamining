/** Chunk was on 6915 **/
/** chunk id: 441061, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk475179 = require("./475179.js"),
  Chunk358221 = require("./358221.js"),
  Chunk388032 = require("./388032.jsx");

function s(e) {
  let t = (0, l.e7)([a.Z], () => a.Z.getVoiceParticipantsHidden(e));
  return (0, r.jsx)(i.S89, {
    id: "no-video-hide",
    label: c.intl.string(c.t.BL8ss6),
    checked: !t,
    action: () => o.Z.toggleVoiceParticipantsHidden(e, !t)
  })
}