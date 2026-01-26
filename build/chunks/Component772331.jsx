/** Chunk was on 1636 **/
/** chunk id: 772331, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
}), require("./938796.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk665260 = require("./665260.js"),
  Chunk397927 = require("./397927.js"),
  Chunk803316 = require("./803316.js"),
  Chunk307600 = require("./307600.js"),
  Chunk751775 = require("./751775.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function u(e) {
  let t = (0, c.R)("use-save-voice-message-audio");
  return (0, i.Lt)(e.flags, s.pr7.IS_VOICE_MESSAGE) && t ? (0, r.jsx)(l.Drp, {
    id: "save-voice-message-audio",
    label: d.intl.string(d.t.vbAEaA),
    leadingAccessory: {
      type: "icon",
      icon: l.s3U
    },
    icon: l.s3U,
    action: () => {
      let t = (0, a.XW)(e.attachments[0].url);
      (0, o.h)({
        href: t
      })
    }
  }) : null
}