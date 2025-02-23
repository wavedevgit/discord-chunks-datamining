/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
n.d(t, {
  Lh: () => u,
  MR: () => m,
  g1: () => f,
  iD: () => d,
  ir: () => p,
  s4: () => _,
  sm: () => h
}), n(757143), n(301563), n(566702);
var r = n(633302),
  i = n(695346),
  o = n(314897),
  a = n(626135),
  s = n(981631),
  l = n(468788),
  c = n(388032);

function u(e) {
  return null == e.id ? r.ZP.convertSurrogateToName(e.name) : ":".concat(e.name, ":")
}

function d(e, t, n, r) {
  var i, o, a;
  let s;
  return s = r ? e ? c.t.i9DXqK : c.t["Z/l+qq"] : e ? c.t.CLuzw8 : c.t.PirBBA, c.NW.formatToPlainString(s, {
    reactions: t,
    emojiName: null !== (a = null === (o = u(n)) || void 0 === o ? void 0 : null === (i = o.replace(/[:_]/g, " ")) || void 0 === i ? void 0 : i.trim()) && void 0 !== a ? a : ""
  })
}

function f(e) {
  var t, n, r;
  return {
    id: null !== (t = e.id) && void 0 !== t ? t : null,
    name: null !== (r = null !== (n = null != e.id ? e.name : e.optionallyDiverseSequence) && void 0 !== n ? n : e.name) && void 0 !== r ? r : "",
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

function h(e) {
  let {
    userId: t,
    optimistic: n
  } = e, r = o.default.getId() === t;
  return !n || !!r
}

function m(e, t) {
  i.fz.updateSetting(e), a.default.track(s.rMx.NOTIFICATION_SETTINGS_UPDATED, {
    update_type: l.I.ACCOUNT,
    reaction_notifications: e,
    reaction_notifications_old: t
  })
}