/** Chunk was on web.js **/
/** chunk id: 975368, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./997841.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk296182 = require("./296182.js"),
  Chunk630388 = require("./630388.js"),
  Chunk49012 = require("./49012.js"),
  Chunk694859 = require("./694859.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function d(e) {
  let t = (0, l.X)("use-save-voice-message-audio");
  return (0, a.yE)(e.flags, c.iLy.IS_VOICE_MESSAGE) && t ? (0, r.jsx)(i.sNh, {
    id: "save-voice-message-audio",
    label: u.intl.string(u.t.vbAEaG),
    icon: i._8t,
    action: () => {
      let t = (0, o.s$)(e.attachments[0].url);
      (0, s.q)({
        href: t
      })
    }
  }) : null
}