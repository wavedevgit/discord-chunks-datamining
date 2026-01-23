/** Chunk was on web.js **/
/** chunk id: 867402, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => U
}), require("./747238.js");
var Chunk280230 = require("./280230.js"),
  i = require.n(Chunk280230),
  Chunk717125 = require("./717125.js"),
  Chunk47167 = require("./47167.js"),
  Chunk721592 = require("./721592.js"),
  Chunk376943 = require("./376943.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk486020 = require("./486020.js"),
  Chunk147036 = require("./147036.js"),
  Chunk240248 = require("./240248.js"),
  Chunk465365 = require("./465365.js"),
  Chunk704726 = require("./704726.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      O(e, t, n[t])
    })
  }
  return e
}

function A(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let S = e => {
  let t = c.A.getChannel(e);
  return null == t ? true : t.getGuildId()
};

function T(e) {
  return {
    type: "guild",
    guildId: e.id,
    content: (0, m.EJ)(e.name, 32),
    icon: _.Ay.getGuildIconURL({
      id: e.id,
      icon: e.icon,
      size: 40
    })
  }
}

function C(e, t) {
  let n, r = D((0, m.EJ)(e.name, 32));
  return {
    type: "channel",
    content: [n = "italics" === t ? {
      type: "em",
      content: [r]
    } : r],
    channelType: e.type,
    iconType: e.iconType
  }
}

function N(e, t) {
  let n = {
    type: "channel",
    content: [D(e.roleSubscriptionGated ? e.name : b.intl.string(b.t["/YzI63"]))],
    channelType: e.roleSubscriptionGated ? e.type : y.rbe.UNKNOWN,
    iconType: "locked"
  };
  return {
    type: "channelMention",
    guildId: e.guildId,
    channelId: e.id,
    messageId: t,
    inContent: null,
    content: [n]
  }
}

function R(e) {
  return {
    type: "channel",
    content: [D("")],
    iconType: e ? "post" : "message"
  }
}

function w(e, t) {
  var n;
  let r = c.A.getChannel(e),
    i = (0, o.p)(e, c.A, a.A, d.A).isSubscriptionGated,
    u = null != (n = (0, h.QG)(r)) ? n : "text";
  if (null != t) {
    let n = t.find(t => t.id === e);
    if (null != n) return {
      type: n.type,
      id: n.id,
      guildId: n.guild_id,
      name: n.name,
      isDm: null != r && r.isPrivate(),
      isForumPost: null != r && r.isForumPost(),
      isMentionable: true,
      canViewChannel: true,
      roleSubscriptionGated: i,
      iconType: u,
      parentId: null == r ? true : r.parent_id
    }
  }
  return null != r ? {
    type: r.type,
    id: r.id,
    guildId: r.guild_id,
    name: (0, s.m1)(r, p.default, f.A),
    isDm: r.isPrivate(),
    isForumPost: r.isForumPost(),
    isMentionable: (0, g.Y)(r.type),
    canViewChannel: (0, l.nc)(r),
    roleSubscriptionGated: i,
    iconType: u,
    parentId: r.parent_id
  } : null
}

function P(e) {
  return {
    type: "link",
    content: [{
      type: "text",
      content: e
    }],
    target: e,
    title: true
  }
}

function D(e) {
  return {
    type: "text",
    content: e
  }
}

function x(e) {
  return null != e ? P(e) : D("#".concat(b.intl.string(b.t.J90oLW)))
}

function L() {
  return C({
    name: b.intl.string(b.t.zLZPmk).toLowerCase(),
    type: y.rbe.UNKNOWN,
    iconType: "text"
  }, "italics")
}

function j(e, t, n, r, i) {
  let a = u.A.getGuild(e),
    s = (null == a ? true : a.id) === r;
  return {
    type: "channelMention",
    guildId: e,
    channelId: t,
    messageId: n,
    originalLink: i,
    inContent: null == a || s ? null : [T(a)],
    content: [L()]
  }
}

function M(e, t, n, r) {
  let i = T(e),
    a = C(t),
    s = R(t.isForumPost);
  if (n && r) {
    if (t.isForumPost) {
      let e = c.A.getChannel(t.parentId);
      if (null != e) {
        var o;
        return {
          inContent: [C({
            name: e.name,
            type: e.type,
            iconType: null != (o = (0, h.QG)(e)) ? o : "forum"
          })],
          content: [a]
        }
      }
    }
    return {
      inContent: [a],
      content: [s]
    }
  }
  return n && !r ? {
    inContent: null,
    content: [a]
  } : !n && r ? {
    inContent: [i],
    content: [t.isForumPost ? a : s]
  } : n || r ? true : {
    inContent: [i],
    content: [a]
  }
}

function k(e, t, n, r) {
  if (!e.canViewChannel) return N(e, t);
  if (!e.isMentionable) return D("#".concat(e.name));
  let i = {
      type: "channelMention",
      channelId: e.id,
      guildId: e.guildId,
      messageId: t,
      originalLink: r
    },
    a = u.A.getGuild(e.guildId);
  if (null == a)
    if (e.isDm) return I(v({}, i), {
      guildId: y.ME,
      inContent: [C(e)],
      content: [R(false)]
    });
    else return x(r);
  let s = e.guildId === n;
  return v({}, i, M(a, e, s, null != t))
}
let U = {
  channelMention: {
    order: Chunk704726.Ay.order,
    requiredFirstCharacters: ["<"],
    match: e => /^<#(\d+)>/.exec(e),
    parse(e, t, n) {
      let r = e[1];
      if (n.returnMentionIds) return {
        type: "channelMention",
        id: r
      };
      let i = w(r, n.mentionChannels);
      return null == i ? j(null, r, null, S(n.channelId)) : k(i, null, S(n.channelId))
    }
  },
  channelOrMessageUrl: {
    order: i().defaultRules.url.order - .5,
    requiredFirstCharacters: ["h"],
    match(e) {
      let t = l.Ju.exec(e);
      return null != t && (null != t[2] && /\D/.test(t[2]) || null != t[3] && /\D/.test(t[3])) ? null : t
    },
    parse(e, t, n) {
      let r = e[0],
        i = e[1],
        a = e[2],
        s = e[3];
      if (null == a) return P(r);
      let o = w(a, null);
      return null == o ? j(i, a, s, S(n.channelId), r) : k(o, s, S(n.channelId), r)
    }
  },
  mediaPostLink: {
    order: i().defaultRules.url.order - .5,
    requiredFirstCharacters: ["h"],
    match: e => l.En.exec(e),
    parse(e, t, n) {
      let r = e[0],
        i = e[1],
        a = e[2],
        s = e[3],
        o = e[4];
      if (null == a || null == s) return P(r);
      let l = w(s, null);
      if (null != l) return k(l, o, S(n.channelId), r);
      let c = w(a, null);
      return null != c ? k(c, o, S(n.channelId), r) : j(i, a, o, S(n.channelId), r)
    }
  }
}