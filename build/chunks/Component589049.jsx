/** Chunk was on 73755 **/
/** chunk id: 589049, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk174609 = require("./174609.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk313789 = require("./313789.js"),
  Chunk526665 = require("./526665.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk358085 = require("./358085.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function f() {
  let e = (0, Chunk728285.bp)(),
    {
      analyticsLocations: t,
      newestAnalyticsLocation: n
    } = (0, Chunk906732.ZP)(),
    f = (0, Chunk526665.wy)(require);
  return module === Chunk981631.IlC.APP || Chunk358085.isPlatformEmbedded || f ? (0, Chunk54381.jsx)(Chunk481060.sNh, {
    id: "voice-and-video-settings",
    label: Chunk388032.intl.string(Chunk388032.t.dsXapM),
    action: () => {
      f || (0, Chunk174609.Z)(), (0, Chunk518596.openUserSettings)(Chunk313789.n.VOICE_AND_VIDEO_PANEL, {
        section: Chunk981631.oAB.VOICE,
        analyticsLocations: exports
      })
    },
    icon: Chunk481060.ewm
  }) : null
}