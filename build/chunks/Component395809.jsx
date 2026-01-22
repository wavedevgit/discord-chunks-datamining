/** Chunk was on 84018 **/
/** chunk id: 395809, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  l = require.n(Chunk284009),
  Chunk417597 = require("./417597.js"),
  Chunk502633 = require("./502633.js"),
  Chunk533117 = require("./533117.js"),
  Chunk427160 = require("./427160.js"),
  Chunk287809 = require("./287809.js"),
  Chunk200301 = require("./200301.js");

function p(e) {
  let {
    streamerId: t,
    channelId: n
  } = e, s = r.useRef(null), a = (0, o.bG)([u.default], () => u.default.getCurrentUser());
  return l()(null != a, "user cannot be null"), (0, d.A)(s, a, t, n), (0, i.jsx)("canvas", {
    className: h.J,
    ref: s
  })
}

function f(e) {
  let {
    guildId: t,
    channelId: n,
    streamerId: r
  } = e, {
    isSharedCanvasEnabled: s
  } = a.A.useExperiment({
    guildId: t,
    location: "f0d1b1_1"
  }, {
    autoTrackExposure: true
  }), l = (0, o.bG)([c.A], () => c.A.visibleOverlayCanvas);
  return s && l ? (0, i.jsx)(p, {
    guildId: t,
    channelId: n,
    streamerId: r
  }) : null
}