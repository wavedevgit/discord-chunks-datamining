/** Chunk was on 62684 **/
/** chunk id: 115063, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  CN: () => A,
  Kk: () => S,
  Lx: () => g,
  Oj: () => _,
  Tb: () => o,
  fO: () => m,
  iY: () => f,
  xo: () => c
}), require("./896048.js");
var Chunk58149 = require("./58149.js"),
  Chunk253932 = require("./253932.js"),
  Chunk919638 = require("./919638.js"),
  Chunk71393 = require("./71393.js"),
  Chunk203982 = require("./203982.js"),
  Chunk652215 = require("./652215.js");
require("./985018.jsx");
let d = 864e5 * Chunk652215.n83;

function o() {
  let t = l.$s.getSetting();
  return 0 === a.A.totalUnavailableGuilds && (t = t.filter(t => null != r.A.getGuild(t))), new Set(t)
}

function c() {
  let t = l.Zr.getSetting();
  return 0 === a.A.totalUnavailableGuilds && (t = t.filter(t => null != r.A.getGuild(t))), new Set(t)
}

function S() {
  let t = l.JG.getSetting();
  return 0 === a.A.totalUnavailableGuilds && (t = t.filter(t => null != r.A.getGuild(t))), new Set(t)
}

function A() {
  let t = l.pE.getSetting();
  return 0 === a.A.totalUnavailableGuilds && (t = t.filter(t => null != r.A.getGuild(t))), new Set(t)
}

function g(t) {
  return (t & u.yKI) === u.yKI ? {
    all: true,
    mutualFriends: true,
    mutualGuilds: true
  } : {
    all: false,
    mutualFriends: (t & u.dzt.MUTUAL_FRIENDS) === u.dzt.MUTUAL_FRIENDS,
    mutualGuilds: (t & u.dzt.MUTUAL_GUILDS) === u.dzt.MUTUAL_GUILDS
  }
}

function _(t, e) {
  return !!(!e.verified || e.isStaff()) || null != t && d > Date.now() - new Date(t.created_at).getTime()
}

function f(t) {
  let {
    destinationPane: e,
    originPane: i,
    source: l,
    subsection: a,
    locationStack: r,
    applicationId: s
  } = t;
  n.Ay.trackWithMetadata(u.HAw.SETTINGS_PANE_VIEWED, {
    settings_type: "user",
    origin_pane: i,
    destination_pane: e,
    location_stack: r,
    source: l,
    subsection: a,
    application_id: s
  })
}

function m(t) {
  s._.dispatch(u.jej.SHAKE_SETTINGS_MODAL, t)
}