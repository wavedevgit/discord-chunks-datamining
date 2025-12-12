/** Chunk was on web.js **/
/** chunk id: 172416, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Un: () => d,
  bg: () => u,
  hL: () => p
});
var Chunk442837 = require("./442837.js"),
  Chunk427164 = require("./427164.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk438379 = require("./438379.js");
let l = (0, Chunk427164.le)({
    name: "2025-07-user-profile-game-widgets",
    kind: "user",
    defaultConfig: {
      enabled: false
    },
    variations: {
      0: {
        enabled: false
      },
      1: {
        enabled: true
      }
    }
  }),
  c = (0, Chunk427164.le)({
    name: "2025-10-user-profile-game-widgets-early-access",
    kind: "user",
    defaultConfig: {
      enabled: false
    },
    variations: {
      0: {
        enabled: false
      },
      1: {
        enabled: true
      }
    }
  });

function u(e) {
  let {
    location: t
  } = e, n = c.useConfig({
    location: t
  }).enabled, i = (0, r.e7)([o.default], () => o.default.getCurrentUser()), s = (0, a.I5)(i);
  return n && s
}

function d(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, r = (0, s.J)({
    location: t,
    autoTrackExposure: n
  }), i = u({
    location: t,
    autoTrackExposure: n
  }), o = l.useConfig({
    location: t
  }).enabled;
  return !r && o || i
}

function f(e) {
  let t = o.default.getCurrentUser(),
    n = (0, a.I5)(t);
  return c.getConfig({
    location: e
  }).enabled && n
}

function p(e) {
  let {
    isInHoldout: t
  } = s.m.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: false
  }), n = f(e), r = l.getConfig({
    location: e
  }).enabled;
  return !t && r || n
}