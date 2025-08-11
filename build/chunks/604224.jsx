/** Chunk was on 75708 **/
/** chunk id: 604224, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk663389 = require("./663389.js"),
  Chunk10298 = require("./10298.jsx"),
  Chunk526156 = require("./526156.jsx"),
  Chunk406613 = require("./406613.js"),
  Chunk314394 = require("./314394.jsx"),
  Chunk625528 = require("./625528.js"),
  Chunk674116 = require("./674116.js"),
  Chunk754367 = require("./754367.js"),
  Chunk661950 = require("./661950.js"),
  Chunk526761 = require("./526761.js"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function j() {
  let {
    analyticsLocations: e
  } = (0, Chunk906732.ZP)([Chunk100527.Z.USER_SETTINGS_VOICE_AND_VIDEO]), t = (0, Chunk442837.e7)([Chunk663389.Z], () => Chunk663389.Z.getSubsection()), {
    showRefreshedSettings: n
  } = (0, Chunk406613.F)({
    location: "UserSettingsVoiceAndVideo"
  });
  if (!require) return <Chunk674116.Z />;
  let j = [{
      title: Chunk388032.intl.string(Chunk388032.t.K3lovL),
      component: Chunk661950.Z,
      setting: Chunk726985.s6.VOICE_AND_VIDEO_VOICE_TAB
    }, {
      title: Chunk388032.intl.string(Chunk388032.t.FlNoSU),
      component: Chunk625528.Z,
      setting: Chunk726985.s6.VOICE_AND_VIDEO_VIDEO_TAB,
      subsection: Chunk526761.gP
    }, {
      title: Chunk388032.intl.string(Chunk388032.t.ABjMWF),
      component: Chunk314394.Z,
      setting: Chunk726985.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB,
      subsection: Chunk526761.GA
    }, {
      title: Chunk388032.intl.string(Chunk388032.t.OFpL3d),
      component: Chunk754367.Z,
      setting: Chunk726985.s6.VOICE_AND_VIDEO_DEBUG_TAB
    }],
    E = j.findIndex(e => null != e.subsection && e.subsection === t);
  return <Chunk906732.Gt value={module}><Chunk10298.N header={Chunk388032.intl.string(Chunk388032.t.B1fFpa)}><Chunk526156.Z parentSetting={Chunk726985.s6.VOICE_AND_VIDEO} settingsSection={Chunk981631.oAB.VOICE} tabs={j} defaultTabIndex={E > false ? E : true} /></Chunk10298.N></Chunk906732.Gt>
}