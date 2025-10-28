/** Chunk was on 63141 **/
/** chunk id: 923532, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk399606 = require("./399606.js"),
  Chunk822183 = require("./822183.js"),
  Chunk673125 = require("./673125.js"),
  Chunk90753 = require("./90753.js"),
  Chunk594174 = require("./594174.js"),
  Chunk901602 = require("./901602.js");

function h(e) {
  let {
    streamerId: t,
    channelId: n
  } = e, o = r.useRef(null), a = (0, l.e7)([u.default], () => u.default.getCurrentUser());
  return s()(null != a, "user cannot be null"), (0, d.Z)(o, a, t, n), (0, i.jsx)("canvas", {
    className: p.canvas,
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
  }), s = (0, l.e7)([c.Z], () => c.Z.visibleOverlayCanvas);
  return o && s ? (0, i.jsx)(h, {
    guildId: t,
    channelId: n,
    streamerId: r
  }) : null
}