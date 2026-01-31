/** Chunk was on 17534 **/
/** chunk id: 462675, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk915618 = require("./915618.js"),
  Chunk857253 = require("./857253.js"),
  Chunk670470 = require("./670470.js"),
  Chunk502633 = require("./502633.js"),
  Chunk430452 = require("./430452.js"),
  Chunk699022 = require("./699022.jsx"),
  Chunk680949 = require("./680949.jsx"),
  Chunk319610 = require("./319610.jsx"),
  Chunk786515 = require("./786515.jsx"),
  Chunk878559 = require("./878559.js");

function m(e) {
  let {
    channel: t,
    hasActiveStream: n,
    showRightDivider: m = false
  } = e, {
    analyticsLocations: b
  } = (0, i.Ay)(l.A.VOICE_CONTROL_TRAY), A = (0, a.A)(), {
    isSharedCanvasEnabled: y
  } = c.A.useExperiment({
    guildId: null == t ? true : t.guild_id,
    location: "b7309a_1"
  }), {
    enableViewerClipping: O
  } = o.A.useExperiment({
    location: "VoiceEffectsActionBar"
  }, {
    autoTrackExposure: false
  }), _ = (0, s.A)(u.A);
  if (null == t || null != A) return null;
  let j = O && _,
    x = y && n;
  return j || x ? (0, r.jsxs)(i.f5, {
    value: b,
    children: [(0, r.jsxs)("div", {
      className: f.w,
      children: [j && (0, r.jsx)(d.A, {
        channel: t
      }), x && (0, r.jsx)(h.A, {}), x && (0, r.jsx)(p.A, {
        channel: t
      }), x && (0, r.jsx)(g.A, {})]
    }), m && (0, r.jsx)("div", {
      className: f.y
    })]
  }) : null
}