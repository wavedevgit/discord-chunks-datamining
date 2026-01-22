/** Chunk was on web.js **/
/** chunk id: 903093, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $5: () => f,
  P$: () => u,
  Qm: () => d,
  _J: () => h,
  di: () => m,
  fi: () => _,
  k$: () => c,
  mR: () => p,
  ql: () => E,
  r2: () => g,
  yc: () => l
}), require("./321073.js");
var Chunk989349 = require("./989349.js"),
  i = require.n(Chunk989349),
  Chunk834409 = require("./834409.js"),
  Chunk218113 = require("./218113.js"),
  Chunk985018 = require("./985018.jsx");
let l = {
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit"
};

function c(e) {
  return null != e.dmSpamDetectedAt && i()(e.dmSpamDetectedAt).add(s.Qs, "hours") > i()() || null != e.raidDetectedAt && i()(e.raidDetectedAt).add(s.Qs, "hours") > i()()
}

function u(e) {
  return null != e.raidDetectedAt && i()(e.raidDetectedAt).add(s.Qs, "hours") > i()()
}

function d(e) {
  return null != e.dmSpamDetectedAt && i()(e.dmSpamDetectedAt).add(s.Qs, "hours") > i()()
}

function f(e) {
  return null == e ? true : u(e) ? a.V.JOIN_RAID : a.V.DM_RAID
}

function p(e, t) {
  let n = [];
  return e && n.push(a.ZE.INVITES_DISABLED), t && n.push(a.ZE.DMS_DISABLED), n
}

function _(e, t) {
  let n = [];
  return e || n.push(a.ZE.INVITES_DISABLED), t || n.push(a.ZE.DMS_DISABLED), n
}

function h(e) {
  return null != e.dmsDisabledUntil && new Date(e.dmsDisabledUntil) > new Date || null != e.invitesDisabledUntil && new Date(e.invitesDisabledUntil) > new Date
}

function m(e) {
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
      return o.intl.formatToPlainString(o.t.hCZitf, {
        guildName: t,
        time: new Date(r).toLocaleString(o.intl.currentLocale, l)
      });
    case i:
      return o.intl.formatToPlainString(o.t["HNKxf+"], {
        guildName: t,
        time: new Date(r).toLocaleString(o.intl.currentLocale, l)
      });
    case a:
      return o.intl.formatToPlainString(o.t.M3iSyL, {
        guildName: t,
        time: new Date(r).toLocaleString(o.intl.currentLocale, l)
      });
    default:
      return ""
  }
}