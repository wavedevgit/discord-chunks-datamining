/** Chunk was on web.js **/
/** chunk id: 862570, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
}), require("./896048.js");
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk954571 = require("./954571.js"),
  Chunk31408 = require("./31408.js"),
  Chunk652215 = require("./652215.js");
let l = 5e3;

function c(e) {
  switch (e) {
    case s.uD.CHAT_INPUT:
      return "chat_input";
    case s.uD.MENTION:
      return "mention";
    case s.uD.VOICE_USER:
      return "voice_user"
  }
}

function u(e) {
  switch (e) {
    case s.k.CHAT_INPUT:
      return "chat_input";
    case s.k.MEMBER_USER:
      return "member_user";
    case s.k.REACTION:
      return "reaction";
    case s.k.CALL_TILE:
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
    shakeIntensity: s,
    screenshakeEnabledLocations: l,
    confettiEnabled: f,
    confettiSize: p,
    confettiCount: _,
    confettiEnabledLocations: h
  } = e;
  a.default.track(o.HAw.POGGERMODE_SETTINGS_UPDATED, {
    enabled: t,
    combos_enabled: n,
    combos_required_count: r,
    screenshake_enabled: i,
    shake_intensity: s,
    screenshake_enabled_locations: d(l, c),
    confetti_enabled: f,
    confetti_size: p,
    confetti_count: _,
    confetti_enabled_locations: d(h, u)
  })
}, l)