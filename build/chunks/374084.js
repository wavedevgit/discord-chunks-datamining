/** Chunk was on web.js **/
/** chunk id: 374084, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CW: () => m,
  Fi: () => s,
  Fn: () => A,
  Ic: () => S,
  K5: () => N,
  Mu: () => h,
  NewMemberActionTypes: () => g,
  RR: () => y,
  Rc: () => C,
  SM: () => p,
  Xu: () => b,
  Y4: () => O,
  Yt: () => T,
  _7: () => f,
  dl: () => l,
  jJ: () => I,
  kh: () => u,
  kk: () => E,
  oW: () => _,
  oc: () => c,
  xr: () => v
}), require("./228524.js"), require("./896048.js");
var Chunk734057 = require("./734057.js"),
  Chunk403362 = require("./403362.js"),
  Chunk488926 = require("./488926.js"),
  Chunk652215 = require("./652215.js");
let s = 7,
  l = 300,
  c = 7,
  u = 60,
  d = 3,
  f = 5,
  p = 1,
  _ = 30,
  h = 200,
  m = 7;
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

function y(e) {
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

function b(e) {
  if (null == e) return null;
  let {
    welcome_message: t,
    new_member_actions: n,
    resource_channels: a,
    enabled: o
  } = e, s = {
    authorIds: t.author_ids,
    message: t.message
  };
  return {
    welcomeMessage: s,
    newMemberActions: n.filter(e => (0, i.Vq)(r.A.getChannel(e.channel_id))).map(E),
    resourceChannels: a.filter(e => (0, i.Vq)(r.A.getChannel(e.channel_id))).map(y),
    enabled: o
  }
}

function O(e, t) {
  var n, a;
  if (null == t) return null;
  let {
    welcomeMessage: o,
    newMemberActions: s,
    resourceChannels: l,
    enabled: c
  } = t, u = {
    author_ids: null != (n = null == o ? true : o.authorIds) ? n : [],
    message: null != (a = null == o ? true : o.message) ? a : ""
  };
  return {
    guild_id: e,
    welcome_message: u,
    new_member_actions: (null != s ? s : []).filter(e => (0, i.Vq)(r.A.getChannel(e.channelId))).map(e => {
      var t, n, r, i, a, o, s;
      return {
        channel_id: e.channelId,
        action_type: e.actionType,
        title: e.title,
        description: e.description,
        emoji: {
          id: null != (t = null == (a = e.emoji) ? true : a.id) ? t : true,
          name: null != (n = null == (o = e.emoji) ? true : o.name) ? n : true,
          animated: null != (r = null == (s = e.emoji) ? true : s.animated) ? r : true
        },
        icon: null != (i = e.icon) ? i : true
      }
    }),
    resource_channels: (null != l ? l : []).filter(e => (0, i.Vq)(r.A.getChannel(e.channelId))).map(e => {
      var t, n, r, i, a, o, s;
      return {
        channel_id: e.channelId,
        title: e.title,
        description: e.description,
        emoji: {
          id: null != (t = null == (a = e.emoji) ? true : a.id) ? t : true,
          name: null != (n = null == (o = e.emoji) ? true : o.name) ? n : true,
          animated: null != (r = null == (s = e.emoji) ? true : s.animated) ? r : true
        },
        icon: null != (i = e.icon) ? i : true
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

function A(e) {
  return null == e || (null == e.message || !(e.message.length > 0)) && (null == e.authorIds || !(e.authorIds.length > 0))
}

function I(e) {
  return null == e || !!A(e.welcomeMessage) && (null == e.newMemberActions || !(e.newMemberActions.length > 0)) && (null == e.resourceChannels || !(e.resourceChannels.length > 0))
}

function S(e) {
  var t, n;
  if (null == e) returnfalse;
  if (I(e)) returntrue;
  if ((null == (t = e.welcomeMessage) ? true : t.message) == null || e.welcomeMessage.message.length < s || (null == (n = e.welcomeMessage) ? true : n.authorIds) == null || 0 === e.welcomeMessage.authorIds.length || null == e.newMemberActions || e.newMemberActions.length < d) returnfalse;
  if (null != e.newMemberActions)
    for (let t of e.newMemberActions) {
      let e = r.A.getChannel(t.channelId);
      if (null == e || !a.MJ(o.xBc.VIEW_CHANNEL, e)) returnfalse
    }
  returntrue
}

function T(e) {
  return e.type === o.rbe.GUILD_TEXT && !a.MJ(o.xBc.SEND_MESSAGES, e) && a.MJ(o.xBc.VIEW_CHANNEL, e)
}

function C(e) {
  switch (e.type) {
    case o.rbe.GUILD_TEXT:
    case o.rbe.GUILD_ANNOUNCEMENT:
    case o.rbe.GUILD_FORUM:
    case o.rbe.GUILD_MEDIA:
      return a.MJ(o.xBc.VIEW_CHANNEL, e);
    default:
      returnfalse
  }
}
var N = function(e) {
  return e[e.DEFAULT = 0] = "DEFAULT", e[e.TODO = 1] = "TODO", e[e.RESOURCE = 2] = "RESOURCE", e[e.RULES = 3] = "RULES", e[e.UPDATES = 4] = "UPDATES", e
}({})