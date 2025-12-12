/** Chunk was on web.js **/
/** chunk id: 734893, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  HH: () => O,
  NewMemberActionTypes: () => g,
  O9: () => f,
  Vu: () => m,
  W4: () => l,
  Wz: () => c,
  Z3: () => u,
  ZR: () => s,
  am: () => _,
  av: () => I,
  cq: () => E,
  j: () => N,
  k3: () => C,
  kb: () => A,
  n: () => p,
  pw: () => S,
  rk: () => v,
  tB: () => y,
  uo: () => T,
  vD: () => b,
  x3: () => h
}), require("./953529.js"), require("./388685.js");
var Chunk592125 = require("./592125.js"),
  Chunk823379 = require("./823379.js"),
  Chunk700785 = require("./700785.js"),
  Chunk981631 = require("./981631.js");
let s = 7,
  l = 300,
  c = 7,
  u = 60,
  d = 3,
  f = 5,
  p = 1,
  _ = 30,
  m = 200,
  h = 7;
var g = function(e) {
  return e[e.VIEW = 0] = "VIEW", e[e.CHAT = 1] = "CHAT", e
}({});

function E(e) {
  var t;
  return {
    channelId: e.channel_id,
    actionType: e.action_type,
    title: e.title,
    description: e.description,
    emoji: null == e.emoji ? null : {
      id: e.emoji.id,
      name: e.emoji.name,
      animated: e.emoji.animated
    },
    icon: null != (t = e.icon) ? t : null
  }
}

function b(e) {
  var t, n;
  return {
    channelId: e.channel_id,
    title: e.title,
    description: null != (t = e.description) ? t : "",
    emoji: null == e.emoji ? null : {
      id: e.emoji.id,
      name: e.emoji.name,
      animated: e.emoji.animated
    },
    icon: null != (n = e.icon) ? n : null
  }
}

function y(e) {
  if (null == e) return null;
  let {
    welcome_message: t,
    new_member_actions: n,
    resource_channels: o,
    enabled: a
  } = e, s = {
    authorIds: t.author_ids,
    message: t.message
  };
  return {
    welcomeMessage: s,
    newMemberActions: n.filter(e => (0, i.lm)(r.Z.getChannel(e.channel_id))).map(E),
    resourceChannels: o.filter(e => (0, i.lm)(r.Z.getChannel(e.channel_id))).map(b),
    enabled: a
  }
}

function O(e, t) {
  var n, o;
  if (null == t) return null;
  let {
    welcomeMessage: a,
    newMemberActions: s,
    resourceChannels: l,
    enabled: c
  } = t, u = {
    author_ids: null != (n = null == a ? true : a.authorIds) ? n : [],
    message: null != (o = null == a ? true : a.message) ? o : ""
  };
  return {
    guild_id: e,
    welcome_message: u,
    new_member_actions: (null != s ? s : []).filter(e => (0, i.lm)(r.Z.getChannel(e.channelId))).map(e => {
      var t, n, r, i, o, a, s;
      return {
        channel_id: e.channelId,
        action_type: e.actionType,
        title: e.title,
        description: e.description,
        emoji: {
          id: null != (i = null == (t = e.emoji) ? true : t.id) ? i : true,
          name: null != (o = null == (n = e.emoji) ? true : n.name) ? o : true,
          animated: null != (a = null == (r = e.emoji) ? true : r.animated) ? a : true
        },
        icon: null != (s = e.icon) ? s : true
      }
    }),
    resource_channels: (null != l ? l : []).filter(e => (0, i.lm)(r.Z.getChannel(e.channelId))).map(e => {
      var t, n, r, i, o, a, s;
      return {
        channel_id: e.channelId,
        title: e.title,
        description: e.description,
        emoji: {
          id: null != (i = null == (t = e.emoji) ? true : t.id) ? i : true,
          name: null != (o = null == (n = e.emoji) ? true : n.name) ? o : true,
          animated: null != (a = null == (r = e.emoji) ? true : r.animated) ? a : true
        },
        icon: null != (s = e.icon) ? s : true
      }
    }),
    enabled: c
  }
}
let v = e => {
  if (null == e) return null;
  let t = {};
  for (let n in e.channel_actions) t[n] = e.channel_actions[n].completed;
  return t
};

function S(e) {
  return null == e || (null == e.message || !(e.message.length > 0)) && (null == e.authorIds || !(e.authorIds.length > 0))
}

function I(e) {
  return null == e || !!S(e.welcomeMessage) && (null == e.newMemberActions || !(e.newMemberActions.length > 0)) && (null == e.resourceChannels || !(e.resourceChannels.length > 0))
}

function T(e) {
  var t, n;
  if (null == e) returnfalse;
  if (I(e)) returntrue;
  if ((null == (t = e.welcomeMessage) ? true : t.message) == null || e.welcomeMessage.message.length < s || (null == (n = e.welcomeMessage) ? true : n.authorIds) == null || 0 === e.welcomeMessage.authorIds.length || null == e.newMemberActions || e.newMemberActions.length < d) returnfalse;
  if (null != e.newMemberActions)
    for (let t of e.newMemberActions) {
      let e = r.Z.getChannel(t.channelId);
      if (null == e || !o.Uu(a.Plq.VIEW_CHANNEL, e)) returnfalse
    }
  returntrue
}

function C(e) {
  return e.type === a.d4z.GUILD_TEXT && !o.Uu(a.Plq.SEND_MESSAGES, e) && o.Uu(a.Plq.VIEW_CHANNEL, e)
}

function A(e) {
  switch (e.type) {
    case a.d4z.GUILD_TEXT:
    case a.d4z.GUILD_ANNOUNCEMENT:
    case a.d4z.GUILD_FORUM:
    case a.d4z.GUILD_MEDIA:
      return o.Uu(a.Plq.VIEW_CHANNEL, e);
    default:
      returnfalse
  }
}
var N = function(e) {
  return e[e.DEFAULT = 0] = "DEFAULT", e[e.TODO = 1] = "TODO", e[e.RESOURCE = 2] = "RESOURCE", e[e.RULES = 3] = "RULES", e[e.UPDATES = 4] = "UPDATES", e
}({})