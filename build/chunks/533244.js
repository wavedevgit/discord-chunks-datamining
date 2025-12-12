/** Chunk was on web.js **/
/** chunk id: 533244, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CG: () => u,
  OY: () => E,
  SG: () => g,
  T1: () => f,
  i9: () => c,
  kk: () => d,
  lk: () => _,
  pQ: () => l,
  sN: () => h,
  sO: () => p,
  ur: () => m
}), require("./539854.js");
var Chunk913527 = require("./913527.js"),
  i = require.n(Chunk913527),
  Chunk666657 = require("./666657.js"),
  Chunk676770 = require("./676770.js"),
  Chunk388032 = require("./388032.jsx");
let l = {
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit"
};

function c(e) {
  return null != e.dmSpamDetectedAt && i()(e.dmSpamDetectedAt).add(o.lp, "hours") > i()() || null != e.raidDetectedAt && i()(e.raidDetectedAt).add(o.lp, "hours") > i()()
}

function u(e) {
  return null != e.raidDetectedAt && i()(e.raidDetectedAt).add(o.lp, "hours") > i()()
}

function d(e) {
  return null != e.dmSpamDetectedAt && i()(e.dmSpamDetectedAt).add(o.lp, "hours") > i()()
}

function f(e) {
  return null == e ? true : u(e) ? a.Hl.JOIN_RAID : a.Hl.DM_RAID
}

function p(e, t) {
  let n = [];
  return e && n.push(a.dj.INVITES_DISABLED), t && n.push(a.dj.DMS_DISABLED), n
}

function _(e, t) {
  let n = [];
  return e || n.push(a.dj.INVITES_DISABLED), t || n.push(a.dj.DMS_DISABLED), n
}

function m(e) {
  return null != e.dmsDisabledUntil && new Date(e.dmsDisabledUntil) > new Date || null != e.invitesDisabledUntil && new Date(e.invitesDisabledUntil) > new Date
}

function h(e) {
  return (null == e ? true : e.dmsDisabledUntil) != null && new Date(e.dmsDisabledUntil) > new Date
}

function g(e) {
  return (null == e ? true : e.invitesDisabledUntil) != null && new Date(e.invitesDisabledUntil) > new Date
}

function E(e, t) {
  var n;
  let r = null != (n = e.dmsDisabledUntil) ? n : e.invitesDisabledUntil;
  if (null == r) return "";
  let i = null != e.dmsDisabledUntil,
    a = null != e.invitesDisabledUntil;
  switch (true) {
    case i && a:
      return s.intl.formatToPlainString(s.t.hCZitf, {
        guildName: t,
        time: new Date(r).toLocaleString(s.intl.currentLocale, l)
      });
    case i:
      return s.intl.formatToPlainString(s.t["HNKxf+"], {
        guildName: t,
        time: new Date(r).toLocaleString(s.intl.currentLocale, l)
      });
    case a:
      return s.intl.formatToPlainString(s.t.M3iSyL, {
        guildName: t,
        time: new Date(r).toLocaleString(s.intl.currentLocale, l)
      });
    default:
      return ""
  }
}