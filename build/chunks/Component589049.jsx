/** Chunk was on 62987 **/
/** chunk id: 589049, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk40851 = require("./40851.jsx"),
  Chunk906732 = require("./906732.jsx"),
  Chunk174609 = require("./174609.js"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk358085 = require("./358085.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function h() {
  let e = (0, Chunk40851.bp)(),
    {
      analyticsLocations: t
    } = (0, Chunk906732.ZP)();
  return module === Chunk981631.IlC.APP || Chunk358085.isPlatformEmbedded ? (0, Chunk951288.jsx)(Chunk481060.sNh, {
    id: "voice-and-video-settings",
    label: Chunk388032.intl.string(Chunk388032.t.dsXapK),
    action: () => {
      (0, Chunk174609.Z)(), (0, Chunk518596.openUserSettings)(Chunk313789.n.VOICE_AND_VIDEO_PANEL, {
        section: Chunk981631.oAB.VOICE,
        analyticsLocations: exports
      })
    },
    icon: Chunk481060.ewm
  }) : null
}