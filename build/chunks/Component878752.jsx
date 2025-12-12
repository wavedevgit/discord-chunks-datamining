/** Chunk was on 7891 **/
/** chunk id: 878752, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
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
  Chunk474830 = require("./474830.js");

function g(e) {
  let {
    channel: t,
    hasActiveStream: n,
    showRightDivider: g = false
  } = e, {
    analyticsLocations: b
  } = (0, l.ZP)(r.Z.VOICE_CONTROL_TRAY), C = (0, o.Z)(), {
    isSharedCanvasEnabled: y
  } = c.Z.useExperiment({
    guildId: null == t ? true : t.guild_id,
    location: "b7309a_1"
  }), {
    enableViewerClipping: v
  } = s.Z.useExperiment({
    location: "VoiceEffectsActionBar"
  }, {
    autoTrackExposure: false
  }), _ = (0, a.Z)(u.Z);
  if (null == t || null != C) return null;
  let O = v && _,
    x = y && n;
  return O || x ? (0, i.jsxs)(l.Gt, {
    value: b,
    children: [(0, i.jsxs)("div", {
      className: m.voiceEffectsActionBar,
      children: [O && (0, i.jsx)(d.Z, {
        channel: t
      }), x && (0, i.jsx)(p.Z, {}), x && (0, i.jsx)(h.Z, {
        channel: t
      }), x && (0, i.jsx)(f.Z, {})]
    }), g && (0, i.jsx)("div", {
      className: m.divider
    })]
  }) : null
}