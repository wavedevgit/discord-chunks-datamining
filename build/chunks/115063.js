/** Chunk was on web.js **/
/** chunk id: 115063, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CN: () => p,
  Kk: () => f,
  Lx: () => _,
  Oj: () => h,
  Tb: () => u,
  fO: () => g,
  iY: () => m,
  xo: () => d
}), require("./896048.js");
var Chunk58149 = require("./58149.js"),
  Chunk253932 = require("./253932.js"),
  Chunk919638 = require("./919638.js"),
  Chunk71393 = require("./71393.js"),
  Chunk203982 = require("./203982.js"),
  Chunk652215 = require("./652215.js");
require("./985018.jsx");
let c = 864e5 * Chunk652215.n83;

function u() {
  let e = i.$s.getSetting();
  return 0 === a.A.totalUnavailableGuilds && (e = e.filter(e => null != s.A.getGuild(e))), new Set(e)
}

function d() {
  let e = i.Zr.getSetting();
  return 0 === a.A.totalUnavailableGuilds && (e = e.filter(e => null != s.A.getGuild(e))), new Set(e)
}

function f() {
  let e = i.JG.getSetting();
  return 0 === a.A.totalUnavailableGuilds && (e = e.filter(e => null != s.A.getGuild(e))), new Set(e)
}

function p() {
  let e = i.pE.getSetting();
  return 0 === a.A.totalUnavailableGuilds && (e = e.filter(e => null != s.A.getGuild(e))), new Set(e)
}

function _(e) {
  return (e & l.yKI) === l.yKI ? {
    all: true,
    mutualFriends: true,
    mutualGuilds: true
  } : {
    all: false,
    mutualFriends: (e & l.dzt.MUTUAL_FRIENDS) === l.dzt.MUTUAL_FRIENDS,
    mutualGuilds: (e & l.dzt.MUTUAL_GUILDS) === l.dzt.MUTUAL_GUILDS
  }
}

function h(e, t) {
  return !!(!t.verified || t.isStaff()) || null != e && c > Date.now() - new Date(e.created_at).getTime()
}

function m(e) {
  let {
    destinationPane: t,
    originPane: n,
    source: i,
    subsection: a,
    locationStack: s,
    applicationId: o
  } = e;
  r.Ay.trackWithMetadata(l.HAw.SETTINGS_PANE_VIEWED, {
    settings_type: "user",
    origin_pane: n,
    destination_pane: t,
    location_stack: s,
    source: i,
    subsection: a,
    application_id: o
  })
}

function g(e) {
  o._.dispatch(l.jej.SHAKE_SETTINGS_MODAL, e)
}