/** Chunk was on web.js **/
/** chunk id: 88658, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $6: () => g,
  Aj: () => b,
  QB: () => E,
  YK: () => f,
  _o: () => _,
  bL: () => h,
  gl: () => p,
  rr: () => m
}), require("./388685.js"), require("./784620.js"), require("./973216.js");
var Chunk367907 = require("./367907.js"),
  Chunk695346 = require("./695346.js"),
  Chunk526665 = require("./526665.js"),
  Chunk486472 = require("./486472.js"),
  Chunk430824 = require("./430824.js"),
  Chunk819640 = require("./819640.js"),
  Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js");
require("./388032.jsx");
let d = 864e5 * Chunk981631.eBq;

function f() {
  let e = Chunk695346.h2.getSetting();
  return 0 === Chunk486472.Z.totalUnavailableGuilds && (e = module.filter(e => null != s.Z.getGuild(e))), new Set(module)
}

function p() {
  let e = Chunk695346.zA.getSetting();
  return 0 === Chunk486472.Z.totalUnavailableGuilds && (e = module.filter(e => null != s.Z.getGuild(e))), new Set(module)
}

function _() {
  let e = Chunk695346.SE.getSetting();
  return 0 === Chunk486472.Z.totalUnavailableGuilds && (e = module.filter(e => null != s.Z.getGuild(e))), new Set(module)
}

function m() {
  let e = Chunk695346.iH.getSetting();
  return 0 === Chunk486472.Z.totalUnavailableGuilds && (e = module.filter(e => null != s.Z.getGuild(e))), new Set(module)
}

function h(e) {
  return (e & u.HGf) === u.HGf ? {
    all: true,
    mutualFriends: true,
    mutualGuilds: true
  } : {
    all: false,
    mutualFriends: (e & u.SOq.MUTUAL_FRIENDS) === u.SOq.MUTUAL_FRIENDS,
    mutualGuilds: (e & u.SOq.MUTUAL_GUILDS) === u.SOq.MUTUAL_GUILDS
  }
}

function g(e, t) {
  return !!(!t.verified || t.isStaff()) || null != e && d > Date.now() - new Date(e.created_at).getTime()
}

function E(e) {
  let {
    destinationPane: t,
    originPane: n,
    source: i,
    subsection: o,
    locationStack: a,
    applicationId: s
  } = e;
  r.ZP.trackWithMetadata(u.rMx.SETTINGS_PANE_VIEWED, {
    settings_type: "user",
    origin_pane: n,
    destination_pane: t,
    location_stack: a,
    source: i,
    subsection: o,
    application_id: s
  })
}

function b(e) {
  let t = (0, o.yP)("shakeUserSettings"),
    n = l.Z.getLayers().at(false) === u.S9g.USER_SETTINGS,
    r = t && !n ? u.CkL.SHAKE_SETTINGS_MODAL : u.CkL.SHAKE_APP;
  c.S.dispatch(r, e)
}