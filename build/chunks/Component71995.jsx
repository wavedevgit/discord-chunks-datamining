/** Chunk was on web.js **/
/** chunk id: 71995, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => E
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk628965 = require("./628965.js"),
  Chunk740625 = require("./740625.jsx"),
  Chunk524738 = require("./524738.jsx"),
  Chunk998126 = require("./998126.jsx"),
  Chunk360668 = require("./360668.jsx"),
  Chunk175539 = require("./175539.jsx"),
  Chunk942515 = require("./942515.jsx"),
  Chunk355097 = require("./355097.js"),
  Chunk531525 = require("./531525.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function E() {
  let {
    analyticsLocations: e
  } = (0, s.Ay)([a.A.USER_SETTINGS_VOICE_AND_VIDEO]), t = (0, i.bG)([o.A], () => o.A.getSubsection()), n = [{
    title: g.intl.string(g.t.K3lovD),
    component: f.A,
    setting: h.H.VOICE_AND_VIDEO_VOICE_TAB,
    subsection: _.V5
  }, {
    title: g.intl.string(g.t.FlNoSV),
    component: d.A,
    setting: h.H.VOICE_AND_VIDEO_VIDEO_TAB,
    subsection: _.Ss
  }, {
    title: g.intl.string(g.t.ABjMWI),
    component: u.A,
    setting: h.H.VOICE_AND_VIDEO_SOUNDBOARD_TAB,
    subsection: _.MJ
  }, {
    title: g.intl.string(g.t.OFpL3c),
    component: p.A,
    setting: h.H.VOICE_AND_VIDEO_DEBUG_TAB
  }], E = n.findIndex(e => null != e.subsection && e.subsection === t);
  return (0, r.jsx)(s.f5, {
    value: e,
    children: (0, r.jsx)(l.R, {
      header: g.intl.string(g.t.B1fFpf),
      children: (0, r.jsx)(c.A, {
        parentSetting: h.H.VOICE_AND_VIDEO,
        settingsSection: m.nc_.VOICE,
        tabs: n,
        defaultTabIndex: E > false ? E : true
      })
    })
  })
}