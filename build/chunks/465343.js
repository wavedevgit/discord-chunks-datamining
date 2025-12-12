/** Chunk was on web.js **/
/** chunk id: 465343, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => g,
  i: () => h
}), require("./388685.js"), require("./35282.js");
var Chunk933557 = require("./933557.js"),
  Chunk339085 = require("./339085.js"),
  Chunk633302 = require("./633302.js"),
  Chunk601070 = require("./601070.js"),
  Chunk592125 = require("./592125.js"),
  Chunk984933 = require("./984933.js"),
  Chunk271383 = require("./271383.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk483360 = require("./483360.js"),
  Chunk709054 = require("./709054.js"),
  Chunk752305 = require("./752305.js");

function h(e, t, n, r) {
  let {
    allowUsers: i = true,
    allowRoles: a = true
  } = null != r ? r : {};
  switch (e[0]) {
    case "@":
      return E(e, t, n, i, a);
    case ":":
      return O(e, t);
    case "#":
      return y(e, t)
  }
  return null
}

function g(e, t, n, r) {
  let i = h(e, t, n, r);
  return null == i ? null : (0, m.VI)(i)
}

function E(e, t, n, r, i) {
  let [a, o] = e.slice(1).split("#", 2), l = null != t ? d.Z.getGuild(t) : null;
  if (i && null == o && null != l) {
    for (let e of u.Z.getSortedRoles(l.id))
      if (a === e.name) return {
        type: "roleMention",
        roleId: e.id,
        children: [{
          text: ""
        }]
      }
  }
  if (r) {
    let e = null != n ? s.Z.getChannel(n) : null;
    if (null == e) return null;
    let r = (e.isPrivate() ? e.recipients : c.ZP.getMembers(t).map(e => {
      let {
        userId: t
      } = e;
      return t
    })).map(e => f.default.getUser(e)).filter(e => true !== e && b(a, o, e));
    if (1 === r.length) {
      let e = r[0];
      if (b(a, o, e, {
          requireExact: true
        })) return {
        type: "userMention",
        userId: e.id,
        children: [{
          text: ""
        }]
      }
    }
  }
  return null
}

function b(e, t, n) {
  let {
    requireExact: r = false
  } = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {};
  return null != n && (r ? n.username === e : n.username.startsWith(e)) && n.discriminator === (null != t ? t : "0")
}

function y(e, t) {
  let n;
  if (null == t) return null;
  n = e.length > 3 && '"' === e[1] && '"' === e[e.length - 1] ? (0, r.mA)(e.slice(2, e.length - 1)) : e.slice(1);
  let i = l.ZP.getTextChannelNameDisambiguations(t);
  for (let e of _.default.keys(i))
    if (i[e].name === n) return {
      type: "channelMention",
      channelId: e,
      children: [{
        text: ""
      }]
    };
  for (let e of p.k1)
    if (e !== l.sH) {
      for (let {
          channel: r
        }
        of l.ZP.getChannels(t)[e])
        if (r.name === n) return {
          type: "channelMention",
          channelId: r.id,
          children: [{
            text: ""
          }]
        }
    } let a = o.Z.getActiveJoinedThreadsForGuild(t);
  for (let e of _.default.keys(a))
    for (let t of _.default.keys(a[e])) {
      let {
        channel: r
      } = a[e][t];
      if (r.name === n) return {
        type: "channelMention",
        channelId: r.id,
        children: [{
          text: ""
        }]
      }
    }
  return null
}

function O(e, t) {
  let n = a.ZP.EMOJI_NAME_RE.exec(e);
  if (null == n) return null;
  let r = n[1],
    o = i.ZP.getDisambiguatedEmojiContext(t).getCustomEmoji();
  if (null != o && r in o) {
    let e = o[r];
    return {
      type: "customEmoji",
      emoji: {
        emojiId: e.id,
        name: "require_colons" in e && e.require_colons ? ":".concat(e.name, ":") : e.name,
        animated: true === e.animated,
        jumboable: false
      },
      children: [{
        text: ""
      }]
    }
  }
  return null
}