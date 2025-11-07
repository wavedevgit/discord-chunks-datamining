/** Chunk was on 13140 **/
/** chunk id: 878752, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
  Chunk474830 = require("./474830.js");

function g(e) {
  let {
    channel: t,
    hasActiveStream: n,
    showRightDivider: g = false
  } = e, {
    analyticsLocations: b
  } = (0, l.ZP)(i.Z.VOICE_CONTROL_TRAY), _ = (0, o.Z)(), {
    isSharedCanvasEnabled: y
  } = c.Z.useExperiment({
    guildId: null == t ? true : t.guild_id,
    location: "b7309a_1"
  }), {
    enableViewerClipping: C
  } = s.Z.useExperiment({
    location: "VoiceEffectsActionBar"
  }, {
    autoTrackExposure: false
  }), v = (0, a.Z)(u.Z);
  if (null == t || null != _) return null;
  let O = C && v,
    x = y && n;
  return O || x ? (0, r.jsxs)(l.Gt, {
    value: b,
    children: [(0, r.jsxs)("div", {
      className: m.voiceEffectsActionBar,
      children: [O && (0, r.jsx)(d.Z, {
        channel: t
      }), x && (0, r.jsx)(p.Z, {}), x && (0, r.jsx)(f.Z, {
        channel: t
      }), x && (0, r.jsx)(h.Z, {})]
    }), g && (0, r.jsx)("div", {
      className: m.divider
    })]
  }) : null
}