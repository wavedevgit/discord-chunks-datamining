/** Chunk was on web.js **/
/** chunk id: 995774, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Lh: () => u,
  MR: () => h,
  g1: () => f,
  iD: () => d,
  ir: () => p,
  s4: () => _,
  sm: () => m
}), require("./704826.js"), require("./35282.js"), require("./781311.js");
var Chunk633302 = require("./633302.js"),
  Chunk695346 = require("./695346.js"),
  Chunk314897 = require("./314897.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk468788 = require("./468788.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  return null == e.id ? r.ZP.convertSurrogateToName(e.name) : ":".concat(e.name, ":")
}

function d(e, t, n, r) {
  var i, a, o;
  let s;
  return s = r ? e ? c.t.i9DXqM : c.t["Z/l+qu"] : e ? c.t.CLuzw5 : c.t.PirBBE, c.intl.formatToPlainString(s, {
    reactions: t,
    emojiName: null != (o = null == (a = u(n)) || null == (i = a.replace(/[:_]/g, " ")) ? true : i.trim()) ? o : ""
  })
}

function f(e) {
  var t, n, r;
  return {
    id: null != (t = e.id) ? t : null,
    name: null != (r = null != (n = null != e.id ? e.name : e.optionallyDiverseSequence) ? n : e.name) ? r : "",
    animated: !!e.animated
  }
}

function p(e, t) {
  if (null != t.id) {
    let n = null != e.id ? "".concat(e.id) : e.id;
    return "".concat(t.id) === n
  }
  return null == e.id && t.name === e.name
}

function _(e) {
  return e.isThread() ? s.jXE.THREAD_TEXT_AREA : e.isForumPost() ? s.jXE.FORUM_CHANNEL_TEXT_AREA : e.isGuildVocal() ? s.jXE.TEXT_IN_VOICE : s.jXE.CHANNEL_TEXT_AREA
}

function m(e) {
  let {
    userId: t,
    optimistic: n
  } = e, r = a.default.getId() === t;
  return !n || !!r
}

function h(e, t) {
  i.fz.updateSetting(e), o.default.track(s.rMx.NOTIFICATION_SETTINGS_UPDATED, {
    update_type: l.I.ACCOUNT,
    reaction_notifications: e,
    reaction_notifications_old: t
  })
}