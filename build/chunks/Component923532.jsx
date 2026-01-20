/** Chunk was on 63141 **/
/** chunk id: 923532, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk399606 = require("./399606.js"),
  Chunk822183 = require("./822183.js"),
  Chunk673125 = require("./673125.js"),
  Chunk90753 = require("./90753.js"),
  Chunk594174 = require("./594174.js"),
  Chunk91178 = require("./91178.js");

function f(e) {
  let {
    streamerId: t,
    channelId: n
  } = e, s = r.useRef(null), l = (0, a.e7)([u.default], () => u.default.getCurrentUser());
  return o()(null != l, "user cannot be null"), (0, d.Z)(s, l, t, n), (0, i.jsx)("canvas", {
    className: h.canvas,
    ref: s
  })
}

function p(e) {
  let {
    guildId: t,
    channelId: n,
    streamerId: r
  } = e, {
    isSharedCanvasEnabled: s
  } = l.Z.useExperiment({
    guildId: t,
    location: "f0d1b1_1"
  }, {
    autoTrackExposure: true
  }), o = (0, a.e7)([c.Z], () => c.Z.visibleOverlayCanvas);
  return s && o ? (0, i.jsx)(f, {
    guildId: t,
    channelId: n,
    streamerId: r
  }) : null
}