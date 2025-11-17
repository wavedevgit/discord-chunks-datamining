/** Chunk was on 63141 **/
/** chunk id: 923532, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk399606 = require("./399606.js"),
  Chunk822183 = require("./822183.js"),
  Chunk673125 = require("./673125.js"),
  Chunk90753 = require("./90753.js"),
  Chunk594174 = require("./594174.js"),
  Chunk901602 = require("./901602.js");

function p(e) {
  let {
    streamerId: t,
    channelId: n
  } = e, o = r.useRef(null), a = (0, s.e7)([u.default], () => u.default.getCurrentUser());
  return l()(null != a, "user cannot be null"), (0, d.Z)(o, a, t, n), (0, i.jsx)("canvas", {
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
  } = a.Z.useExperiment({
    guildId: t,
    location: "f0d1b1_1"
  }, {
    autoTrackExposure: true
  }), l = (0, s.e7)([c.Z], () => c.Z.visibleOverlayCanvas);
  return o && l ? (0, i.jsx)(p, {
    guildId: t,
    channelId: n,
    streamerId: r
  }) : null
}