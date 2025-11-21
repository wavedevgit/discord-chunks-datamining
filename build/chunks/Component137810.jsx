/** Chunk was on web.js **/
/** chunk id: 137810, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk887413 = require("./887413.jsx"),
  Chunk313789 = require("./313789.js"),
  Chunk526665 = require("./526665.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx");

function _(e) {
  let {
    analyticsLocations: t
  } = (0, a.ZP)();
  return (0, r.jsx)(i.sNh, {
    id: "video-settings",
    label: f.intl.string(f.t.LKzQSF),
    action: () => {
      let n = (0, l.Ml)("useVideoSettingsItem") ? s.n.CAMERA_CATEGORY : s.n.VOICE_AND_VIDEO_PANEL;
      (0, c.openUserSettings)(n, {
        section: u.oAB.VOICE,
        subsection: d.gP,
        analyticsLocations: t
      }), (0, o.i)(e)
    },
    icon: i.ewm
  })
}