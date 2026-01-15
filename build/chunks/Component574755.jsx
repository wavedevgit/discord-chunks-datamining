/** Chunk was on web.js **/
/** chunk id: 574755, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  } = (0, s.ZP)(), t = (0, f.w9)(), n = (0, a.e7)([d.Z], () => d.Z.getSubsection()), {
    enableAdvancedSignals: y
  } = f.NV.useExperiment({
    location: "clips_settings"
  }, {
    autoTrackExposure: false
  });
  i.useEffect(() => {
    (0, l.Q3)(o.z.CLIPS_SETTINGS_BETA_TAG)
  });
  let O = [{
      title: b.intl.string(b.t.iIwmV5),
      component: h.Z,
      setting: E.s6.CLIPS_RECORDING_TAB,
      subsection: g.M6,
      predicate: () => t
    }, {
      title: b.intl.string(b.t.sA0WKL),
      component: p.Z,
      setting: E.s6.CLIPS_AUTOMATIC_TAB,
      subsection: g.d5,
      predicate: () => t && y
    }, {
      title: b.intl.string(b.t.GcIeET),
      component: _.Z,
      setting: E.s6.CLIPS_PRIVACY_TAB,
      subsection: g.Sr
    }],
    v = O.findIndex(e => null != e.subsection && e.subsection === n);
  return (0, r.jsx)(s.Gt, {
    value: e,
    children: (0, r.jsx)(c.N, {
      header: b.intl.string(b.t.z2jK6X),
      children: (0, r.jsx)(u.Z, {
        parentSetting: E.s6.CLIPS,
        settingsSection: m.oAB.CLIPS,
        tabs: O,
        defaultTabIndex: v > false ? v : true
      })
    })
  })
}