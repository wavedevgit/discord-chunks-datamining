/** Chunk was on web.js **/
/** chunk id: 878752, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk779618 = require("./779618.js"),
  Chunk446226 = require("./446226.js"),
  Chunk441167 = require("./441167.js"),
  Chunk822183 = require("./822183.js"),
  Chunk131951 = require("./131951.js"),
  Chunk213652 = require("./213652.jsx"),
  Chunk320427 = require("./320427.jsx"),
  Chunk145010 = require("./145010.jsx"),
  Chunk159909 = require("./159909.jsx"),
  Chunk531675 = require("./531675.js");

function m(e) {
  let {
    channel: t,
    hasActiveStream: n,
    showRightDivider: m = false
  } = e, {
    analyticsLocations: g
  } = (0, o.ZP)(i.Z.VOICE_CONTROL_TRAY), E = null != (0, s.Z)(), {
    isSharedCanvasEnabled: b
  } = c.Z.useExperiment({
    guildId: null == t ? true : t.guild_id,
    location: "b7309a_1"
  }), {
    enableViewerClipping: y
  } = l.Z.useExperiment({
    location: "VoiceEffectsActionBar"
  }, {
    autoTrackExposure: false
  }), O = (0, a.Z)(u.Z);
  if (null == t || E) return null;
  let v = y && O,
    I = b && n;
  return (0, r.jsxs)(o.Gt, {
    value: g,
    children: [(0, r.jsxs)("div", {
      className: h.voiceEffectsActionBar,
      children: [v && (0, r.jsx)(d.Z, {
        channel: t
      }), I && (0, r.jsx)(f.Z, {}), I && (0, r.jsx)(_.Z, {
        channel: t
      }), I && (0, r.jsx)(p.Z, {})]
    }), m && (v || I) && (0, r.jsx)("div", {
      className: h.divider
    })]
  })
}