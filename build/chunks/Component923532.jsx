/** Chunk was on 63141 **/
/** chunk id: 923532, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk399606 = require("./399606.js"),
  Chunk822183 = require("./822183.js"),
  Chunk673125 = require("./673125.js"),
  Chunk90753 = require("./90753.js"),
  Chunk594174 = require("./594174.js"),
  Chunk932154 = require("./932154.js");

function p(e) {
  let {
    streamerId: t,
    channelId: n
  } = e, o = r.useRef(null), s = (0, a.e7)([u.default], () => u.default.getCurrentUser());
  return l()(null != s, "user cannot be null"), (0, d.Z)(o, s, t, n), (0, i.jsx)("canvas", {
    className: h.canvas,
    ref: o
  })
}

function f(e) {
  let {
    guildId: t,
    channelId: n,
    streamerId: r
  } = e, {
    isSharedCanvasEnabled: o
  } = s.Z.useExperiment({
    guildId: t,
    location: "f0d1b1_1"
  }, {
    autoTrackExposure: true
  }), l = (0, a.e7)([c.Z], () => c.Z.visibleOverlayCanvas);
  return o && l ? (0, i.jsx)(p, {
    guildId: t,
    channelId: n,
    streamerId: r
  }) : null
}