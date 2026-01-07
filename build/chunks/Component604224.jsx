/** Chunk was on web.js **/
/** chunk id: 604224, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk663389 = require("./663389.js"),
  Chunk10298 = require("./10298.jsx"),
  Chunk526156 = require("./526156.jsx"),
  Chunk314394 = require("./314394.jsx"),
  Chunk167540 = require("./167540.jsx"),
  Chunk674116 = require("./674116.jsx"),
  Chunk754367 = require("./754367.jsx"),
  Chunk526761 = require("./526761.js"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function E() {
  let {
    analyticsLocations: e
  } = (0, o.ZP)([a.Z.USER_SETTINGS_VOICE_AND_VIDEO]), t = (0, i.e7)([s.Z], () => s.Z.getSubsection()), n = [{
    title: g.intl.string(g.t.K3lovD),
    component: f.Z,
    setting: m.s6.VOICE_AND_VIDEO_VOICE_TAB,
    subsection: _.CO
  }, {
    title: g.intl.string(g.t.FlNoSV),
    component: d.Z,
    setting: m.s6.VOICE_AND_VIDEO_VIDEO_TAB,
    subsection: _.gP
  }, {
    title: g.intl.string(g.t.ABjMWI),
    component: u.Z,
    setting: m.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB,
    subsection: _.GA
  }, {
    title: g.intl.string(g.t.OFpL3c),
    component: p.Z,
    setting: m.s6.VOICE_AND_VIDEO_DEBUG_TAB
  }], E = n.findIndex(e => null != e.subsection && e.subsection === t);
  return (0, r.jsx)(o.Gt, {
    value: e,
    children: (0, r.jsx)(l.N, {
      header: g.intl.string(g.t.B1fFpf),
      children: (0, r.jsx)(c.Z, {
        parentSetting: m.s6.VOICE_AND_VIDEO,
        settingsSection: h.oAB.VOICE,
        tabs: n,
        defaultTabIndex: E > false ? E : true
      })
    })
  })
}