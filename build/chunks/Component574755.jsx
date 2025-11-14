/** Chunk was on web.js **/
/** chunk id: 574755, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk266454 = require("./266454.js"),
  Chunk10298 = require("./10298.jsx"),
  Chunk526156 = require("./526156.jsx"),
  Chunk663389 = require("./663389.js"),
  Chunk924557 = require("./924557.js"),
  Chunk361244 = require("./361244.jsx"),
  Chunk902451 = require("./902451.jsx"),
  Chunk320091 = require("./320091.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk526761 = require("./526761.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");

function y() {
  let {
    analyticsLocations: e
  } = (0, Chunk906732.ZP)(), t = (0, Chunk924557.w9)(), n = (0, Chunk442837.e7)([Chunk663389.Z], () => Chunk663389.Z.getSubsection()), {
    enableAdvancedSignals: y
  } = Chunk924557.NV.useExperiment({
    location: "clips_settings"
  }, {
    autoTrackExposure: false
  });
  Chunk647438.useEffect(() => {
    (0, Chunk266454.Q3)(Chunk704215.z.CLIPS_SETTINGS_BETA_TAG)
  });
  let O = [{
      title: Chunk388032.intl.string(Chunk388032.t.iIwmV5),
      component: Chunk320091.Z,
      setting: Chunk726985.s6.CLIPS_RECORDING_TAB,
      subsection: Chunk526761.M6,
      predicate: () => exports
    }, {
      title: Chunk388032.intl.string(Chunk388032.t.sA0WKL),
      component: Chunk361244.Z,
      setting: Chunk726985.s6.CLIPS_AUTOMATIC_TAB,
      subsection: Chunk526761.d5,
      predicate: () => exports && y
    }, {
      title: Chunk388032.intl.string(Chunk388032.t.GcIeET),
      component: Chunk902451.Z,
      setting: Chunk726985.s6.CLIPS_PRIVACY_TAB,
      subsection: Chunk526761.Sr
    }],
    v = O.findIndex(e => null != e.subsection && e.subsection === n);
  return (0, Chunk951288.jsx)(Chunk906732.Gt, {
    value: module,
    children: (0, Chunk951288.jsx)(Chunk10298.N, {
      header: Chunk388032.intl.string(Chunk388032.t.z2jK6X),
      children: (0, Chunk951288.jsx)(Chunk526156.Z, {
        parentSetting: Chunk726985.s6.CLIPS,
        settingsSection: Chunk981631.oAB.CLIPS,
        tabs: O,
        defaultTabIndex: v > false ? v : true
      })
    })
  })
}