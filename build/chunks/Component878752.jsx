/** Chunk was on 82124 **/
/** chunk id: 878752, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
  Chunk2012 = require("./2012.js");

function m(e) {
  let {
    channel: t,
    hasActiveStream: n,
    showRightDivider: m = false
  } = e, {
    analyticsLocations: b
  } = (0, l.ZP)(i.Z.VOICE_CONTROL_TRAY), y = (0, o.Z)(), {
    isSharedCanvasEnabled: v
  } = c.Z.useExperiment({
    guildId: null == t ? true : t.guild_id,
    location: "b7309a_1"
  }), {
    enableViewerClipping: O
  } = s.Z.useExperiment({
    location: "VoiceEffectsActionBar"
  }, {
    autoTrackExposure: false
  }), j = (0, a.Z)(u.Z);
  if (null == t || null != y) return null;
  let x = O && j,
    C = v && n;
  return x || C ? (0, r.jsxs)(l.Gt, {
    value: b,
    children: [(0, r.jsxs)("div", {
      className: g.voiceEffectsActionBar,
      children: [x && (0, r.jsx)(d.Z, {
        channel: t
      }), C && (0, r.jsx)(p.Z, {}), C && (0, r.jsx)(f.Z, {
        channel: t
      }), C && (0, r.jsx)(h.Z, {})]
    }), m && (0, r.jsx)("div", {
      className: g.divider
    })]
  }) : null
}