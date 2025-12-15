/** Chunk was on 37220 **/
/** chunk id: 975368, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./997841.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk95015 = require("./95015.js"),
  Chunk481060 = require("./481060.js"),
  Chunk296182 = require("./296182.js"),
  Chunk49012 = require("./49012.js"),
  Chunk694859 = require("./694859.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function d(e) {
  let t = (0, c.X)("use-save-voice-message-audio");
  return (0, i.yE)(e.flags, s.iLy.IS_VOICE_MESSAGE) && t ? (0, r.jsx)(l.sNh, {
    id: "save-voice-message-audio",
    label: u.intl.string(u.t.vbAEaA),
    icon: l._8t,
    action: () => {
      let t = (0, o.s$)(e.attachments[0].url);
      (0, a.q)({
        href: t
      })
    }
  }) : null
}