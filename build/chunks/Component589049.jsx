/** Chunk was on 81985 **/
/** chunk id: 589049, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
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

function h() {
  let e = (0, o.bp)(),
    {
      analyticsLocations: t,
      newestAnalyticsLocation: n
    } = (0, l.ZP)(),
    h = (0, c.wy)(n);
  return e === p.IlC.APP || d.isPlatformEmbedded || h ? (0, r.jsx)(i.sNh, {
    id: "voice-and-video-settings",
    label: f.intl.string(f.t.dsXapM),
    action: () => {
      (0, a.Z)(null, e === p.IlC.POPOUT), (0, u.openUserSettings)(s.n.VOICE_AND_VIDEO_PANEL, {
        section: p.oAB.VOICE,
        analyticsLocations: t
      })
    },
    icon: i.ewm
  }) : null
}