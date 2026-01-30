/** Chunk was on 78376 **/
/** chunk id: 115063, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  CN: () => p,
  Kk: () => _,
  Lx: () => m,
  Oj: () => g,
  Tb: () => d,
  fO: () => f,
  iY: () => A,
  xo: () => u
}), require("./896048.js");
var Chunk58149 = require("./58149.js"),
  Chunk253932 = require("./253932.js"),
  Chunk919638 = require("./919638.js"),
  Chunk71393 = require("./71393.js"),
  Chunk203982 = require("./203982.js"),
  Chunk652215 = require("./652215.js");
require("./985018.jsx");
let c = 864e5 * Chunk652215.n83;

function d() {
  let e = i.$s.getSetting();
  return 0 === l.A.totalUnavailableGuilds && (e = e.filter(e => null != s.A.getGuild(e))), new Set(e)
}

function u() {
  let e = i.Zr.getSetting();
  return 0 === l.A.totalUnavailableGuilds && (e = e.filter(e => null != s.A.getGuild(e))), new Set(e)
}

function _() {
  let e = i.JG.getSetting();
  return 0 === l.A.totalUnavailableGuilds && (e = e.filter(e => null != s.A.getGuild(e))), new Set(e)
}

function p() {
  let e = i.pE.getSetting();
  return 0 === l.A.totalUnavailableGuilds && (e = e.filter(e => null != s.A.getGuild(e))), new Set(e)
}

function m(e) {
  return (e & o.yKI) === o.yKI ? {
    all: true,
    mutualFriends: true,
    mutualGuilds: true
  } : {
    all: false,
    mutualFriends: (e & o.dzt.MUTUAL_FRIENDS) === o.dzt.MUTUAL_FRIENDS,
    mutualGuilds: (e & o.dzt.MUTUAL_GUILDS) === o.dzt.MUTUAL_GUILDS
  }
}

function g(e, t) {
  return !!(!t.verified || t.isStaff()) || null != e && c > Date.now() - new Date(e.created_at).getTime()
}

function A(e) {
  let {
    destinationPane: t,
    originPane: n,
    source: i,
    subsection: l,
    locationStack: s,
    applicationId: a
  } = e;
  r.Ay.trackWithMetadata(o.HAw.SETTINGS_PANE_VIEWED, {
    settings_type: "user",
    origin_pane: n,
    destination_pane: t,
    location_stack: s,
    source: i,
    subsection: l,
    application_id: a
  })
}

function f(e) {
  a._.dispatch(o.jej.SHAKE_SETTINGS_MODAL, e)
}