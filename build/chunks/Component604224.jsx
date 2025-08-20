/** Chunk was on web.js **/
/** chunk id: 604224, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk663389 = require("./663389.js"),
  Chunk10298 = require("./10298.jsx"),
  Chunk526156 = require("./526156.jsx"),
  Chunk406613 = require("./406613.js"),
  Chunk314394 = require("./314394.jsx"),
  Chunk625528 = require("./625528.jsx"),
  Chunk674116 = require("./674116.jsx"),
  Chunk754367 = require("./754367.jsx"),
  Chunk661950 = require("./661950.jsx"),
  Chunk526761 = require("./526761.js"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function y() {
  let {
    analyticsLocations: e
  } = (0, Chunk906732.ZP)([Chunk100527.Z.USER_SETTINGS_VOICE_AND_VIDEO]), t = (0, Chunk442837.e7)([Chunk663389.Z], () => Chunk663389.Z.getSubsection()), {
    showRefreshedSettings: n
  } = (0, Chunk406613.F)({
    location: "UserSettingsVoiceAndVideo"
  });
  if (!require) return (0, Chunk951288.jsx)(Chunk674116.Z, {});
  let y = [{
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
    O = y.findIndex(e => null != e.subsection && e.subsection === t);
  return (0, Chunk951288.jsx)(Chunk906732.Gt, {
    value: module,
    children: (0, Chunk951288.jsx)(Chunk10298.N, {
      header: Chunk388032.intl.string(Chunk388032.t.B1fFpa),
      children: (0, Chunk951288.jsx)(Chunk526156.Z, {
        parentSetting: Chunk726985.s6.VOICE_AND_VIDEO,
        settingsSection: Chunk981631.oAB.VOICE,
        tabs: y,
        defaultTabIndex: O > false ? O : true
      })
    })
  })
}