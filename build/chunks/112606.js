/** Chunk was on web.js **/
/** chunk id: 112606, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk626135 = require("./626135.js"),
  Chunk524484 = require("./524484.js"),
  Chunk981631 = require("./981631.js");
let l = 5e3;

function c(e) {
  switch (e) {
    case o.oZ.CHAT_INPUT:
      return "chat_input";
    case o.oZ.MENTION:
      return "mention";
    case o.oZ.VOICE_USER:
      return "voice_user"
  }
}

function u(e) {
  switch (e) {
    case o.Hn.CHAT_INPUT:
      return "chat_input";
    case o.Hn.MEMBER_USER:
      return "member_user";
    case o.Hn.REACTION:
      return "reaction";
    case o.Hn.CALL_TILE:
      return "call_tile"
  }
}

function d(e, t) {
  return Object.entries(e).filter(e => {
    let [t, n] = e;
    return n
  }).map(e => {
    let [n] = e;
    return t(Number.parseInt(n))
  })
}
let f = i().throttle(e => {
  let {
    enabled: t,
    combosEnabled: n,
    combosRequiredCount: r,
    screenshakeEnabled: i,
    shakeIntensity: o,
    screenshakeEnabledLocations: l,
    confettiEnabled: f,
    confettiSize: p,
    confettiCount: _,
    confettiEnabledLocations: h
  } = e;
  a.default.track(s.rMx.POGGERMODE_SETTINGS_UPDATED, {
    enabled: t,
    combos_enabled: n,
    combos_required_count: r,
    screenshake_enabled: i,
    shake_intensity: o,
    screenshake_enabled_locations: d(l, c),
    confetti_enabled: f,
    confetti_size: p,
    confetti_count: _,
    confetti_enabled_locations: d(h, u)
  })
}, l)