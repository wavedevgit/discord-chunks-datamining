/** Chunk was on 60449 **/
/** chunk id: 71995, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => j
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

function j() {
  let {
    analyticsLocations: e
  } = (0, r.Ay)([l.A.USER_SETTINGS_VOICE_AND_VIDEO]), t = (0, s.bG)([a.A], () => a.A.getSubsection()), n = [{
    title: m.intl.string(m.t.K3lovD),
    component: g.A,
    setting: A.H.VOICE_AND_VIDEO_VOICE_TAB,
    subsection: x.V5
  }, {
    title: m.intl.string(m.t.FlNoSV),
    component: u.A,
    setting: A.H.VOICE_AND_VIDEO_VIDEO_TAB,
    subsection: x.Ss
  }, {
    title: m.intl.string(m.t.ABjMWI),
    component: d.A,
    setting: A.H.VOICE_AND_VIDEO_SOUNDBOARD_TAB,
    subsection: x.MJ
  }, {
    title: m.intl.string(m.t.OFpL3c),
    component: h.A,
    setting: A.H.VOICE_AND_VIDEO_DEBUG_TAB
  }], j = n.findIndex(e => null != e.subsection && e.subsection === t);
  return (0, i.jsx)(r.f5, {
    value: e,
    children: (0, i.jsx)(o.R, {
      header: m.intl.string(m.t.B1fFpf),
      children: (0, i.jsx)(c.A, {
        parentSetting: A.H.VOICE_AND_VIDEO,
        settingsSection: p.nc_.VOICE,
        tabs: n,
        defaultTabIndex: j > false ? j : true
      })
    })
  })
}