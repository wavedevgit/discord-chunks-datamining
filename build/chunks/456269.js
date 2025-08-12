/** Chunk was on web.js **/
/** chunk id: 456269, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AJ: () => en,
  Bs: () => ee,
  ES: () => W,
  IN: () => $,
  J$: () => es,
  MC: () => er,
  Vm: () => ec,
  XZ: () => e_,
  eV: () => X,
  eZ: () => ef,
  iM: () => Q,
  jR: () => ed,
  kF: () => K,
  kn: () => eu,
  ku: () => eh,
  mX: () => ei,
  n2: () => em,
  nP: () => et,
  ql: () => el,
  r_: () => eo,
  vP: () => eg,
  xw: () => J
}), require("./388685.js"), require("./583741.js"), require("./781311.js");
var Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk683860 = require("./683860.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk45114 = require("./45114.js"),
  Chunk493773 = require("./493773.js"),
  Chunk339085 = require("./339085.js"),
  Chunk627050 = require("./627050.js"),
  Chunk905405 = require("./905405.js"),
  Chunk937889 = require("./937889.js"),
  Chunk739566 = require("./739566.js"),
  Chunk982168 = require("./982168.js"),
  Chunk601070 = require("./601070.js"),
  Chunk344185 = require("./344185.js"),
  Chunk723774 = require("./723774.js"),
  Chunk144140 = require("./144140.js"),
  Chunk91159 = require("./91159.js"),
  Chunk592125 = require("./592125.js"),
  Chunk720202 = require("./720202.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk306680 = require("./306680.js"),
  Chunk594174 = require("./594174.js"),
  Chunk823379 = require("./823379.js"),
  Chunk709054 = require("./709054.js"),
  Chunk883429 = require("./883429.js"),
  Chunk238349 = require("./238349.js"),
  Chunk368844 = require("./368844.js"),
  Chunk660189 = require("./660189.js"),
  Chunk581036 = require("./581036.js"),
  Chunk208970 = require("./208970.js"),
  Chunk882252 = require("./882252.js"),
  Chunk710352 = require("./710352.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk124368 = require("./124368.js");

function Z(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function F(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      Z(e, t, n[t])
    })
  }
  return e
}

function V(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function H(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : V(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let Y = 180;

function W(e, t, n, i) {
  let o = (0, s.e7)([E.Z], () => E.Z.hasLoaded(e.guild_id));
  r.useEffect(() => {
    if (!o) return;
    let r = w.Z.getThreadIds(e.id, t, n, i),
      a = x.Z.getThreadIdsMissingCounts(e.guild_id, r).filter(e => (0, k.nU)(e, [A.ZP])).slice(0, Y).map(e => ({
        threadId: e,
        ackMessageId: A.ZP.getTrackedAckMessageId(e)
      }));
    a.length > 0 && l.Z.dispatch({
      type: "REQUEST_FORUM_UNREADS",
      guildId: e.guild_id,
      channelId: e.id,
      threads: a
    })
  }, [e.id, e.guild_id, o, n, t, i])
}

function K(e) {
  return (0, s.e7)([E.Z, v.Z], () => {
    let t = o()(E.Z.getThreadsForParent(e.guild_id, e.parent_id)).keys().filter(e => {
      var t;
      return (null == (t = v.Z.getChannel(e)) ? true : t.hasFlag(G.zZ.PINNED)) === true
    }).head();
    return v.Z.getChannel(t)
  })
}

function z(e) {
  let t = null == e ? true : e.parent_id;
  return (0, s.cj)([v.Z], () => {
    var e;
    let n = v.Z.getChannel(t);
    return (null != (e = null == n ? true : n.availableTags) ? e : []).reduce((e, t) => H(F({}, e), {
      [t.id]: t
    }), {})
  }, [t])
}
let q = [];

function X(e) {
  let t = z(e);
  return r.useMemo(() => {
    var n, r, i;
    let o = null != (i = null == e || null == (r = e.appliedTags) || null == (n = r.map(e => t[e])) ? true : n.filter(C.lm)) ? i : q;
    return (null == e ? true : e.isModeratorReportChannel()) ? (0, m.iq)(o) : o
  }, [t, e])
}

function Q(e, t) {
  let n = (0, s.Wu)([N.default], () => t.map(e => N.default.getUser(e)).filter(C.lm));
  return (0, u.ZP)(() => {
    n.forEach(t => {
      I.Z.requestMember(e.guild_id, t.id)
    })
  }), n
}

function J(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : j.R6.DURATION_AGO,
    i = r.useMemo(() => R.default.extractTimestamp(e.id), [e.id]),
    o = (0, O.Ok)(e),
    s = r.useMemo(() => (0, k.Uw)(t, n), [t, n]);
  return r.useMemo(() => t === a.z.CREATION_DATE ? (0, O.Ye)(i, s) : (0, O.Ye)(o, s), [o, t, i, s])
}

function $(e) {
  return r.useMemo(() => {
    var t;
    return o().maxBy(null != (t = null == e ? true : e.reactions) ? t : [], e => Math.max(e.burst_count, e.count))
  }, [null == e ? true : e.reactions])
}

function ee(e) {
  let t = null == e ? true : e.defaultReactionEmoji,
    n = (0, s.e7)([d.ZP], () => (null == t ? true : t.emojiId) != null ? d.ZP.getUsableCustomEmojiById(t.emojiId) : null);
  return null == t ? null : null != t.emojiId && null != n ? {
    id: t.emojiId,
    name: n.name,
    animated: n.animated
  } : null != t.emojiName ? {
    id: t.emojiId,
    name: t.emojiName,
    animated: false
  } : null
}

function et(e) {
  let t = (0, s.e7)([y.Z], () => {
      var t;
      return null != (t = y.Z.getCount(e.id)) ? t : 0
    }),
    n = (0, b.lE)(t, e.id),
    r = (0, s.e7)([A.ZP], () => (0, k.nU)(e.id, [A.ZP])),
    i = (0, s.e7)([x.Z], () => {
      if (!r) return null;
      let n = x.Z.getCount(e.id);
      if (null == n || !(n > 0)) return "1+";
      {
        let e = Math.min(n, t);
        return e >= B.dg ? "".concat(B.dg, "+") : e
      }
    });
  return {
    messageCount: t,
    isMaxMessageCount: null != t && "".concat(t) !== n,
    messageCountText: n,
    unreadCount: i
  }
}

function en(e) {
  var t;
  let n = (0, s.e7)([N.default], () => N.default.getUser(e.ownerId)),
    i = (0, s.e7)([L.Z], () => {
      var t;
      return null == (t = L.Z.getMessage(e.id)) ? true : t.firstMessage
    }),
    o = (0, h.Sw)(null != (t = null == i ? true : i.author) ? t : n, e);
  return r.useEffect(() => {
    null != e.ownerId && I.Z.requestMember(e.guild_id, e.ownerId)
  }, [e.guild_id, e.ownerId]), {
    user: n,
    author: o
  }
}

function er(e) {
  var t, n;
  let r = N.default.getUser(e.ownerId),
    i = null == (t = L.Z.getMessage(e.id)) ? true : t.firstMessage,
    o = (0, h.ij)(null != (n = null == i ? true : i.author) ? n : r, e);
  return {
    user: r,
    author: o
  }
}

function ei(e) {
  let {
    firstMessage: t,
    formatInline: n = true,
    noStyleAndInteraction: i = true
  } = e, o = (0, _.p)(), a = f.d.useExperiment({
    location: "modules/forums/ForumHooks"
  }).enabled, {
    hasSpoilerEmbeds: s,
    content: l
  } = r.useMemo(() => (null == t ? true : t.content) != null && "" !== t.content ? (0, p.ZP)(t, {
    formatInline: n,
    noStyleAndInteraction: i,
    allowHeading: true,
    allowList: true,
    allowGameMentions: a,
    shouldFilterKeywords: o
  }) : {
    hasSpoilerEmbeds: false,
    content: null
  }, [t, n, i, o, a]), c = (0, D.eL)(t, s), u = (0, D.vg)(t, s);
  return {
    hasSpoilerEmbeds: s,
    content: l,
    firstMedia: c,
    firstMediaIsEmbed: u
  }
}

function eo(e) {
  return (0, s.e7)([S.Z], () => S.Z.can(U.Plq.MANAGE_CHANNELS, e))
}
let ea = {
  isNew: false,
  hasUnreads: false
};

function es(e) {
  return (0, s.cj)([T.Z, A.ZP], () => {
    var t;
    let n = T.Z.getGuild(null != (t = e.getGuildId()) ? t : U.lds);
    return null == n ? ea : (0, k.FS)(e, n, [A.ZP])
  })
}

function el(e) {
  return r.useMemo(() => null == e || null == e.template ? "" : e.template.trim(), [e])
}

function ec(e) {
  let t = (0, s.e7)([S.Z], () => S.Z.can(U.Plq.MANAGE_THREADS, e));
  return r.useMemo(() => {
    var n;
    let r = [...null != (n = null == e ? true : e.availableTags) ? n : []];
    return t || (r = r.filter(e => !e.moderated)), r
  }, [t, null == e ? true : e.availableTags])
}

function eu(e, t) {
  let n = ec((0, s.e7)([v.Z], () => v.Z.getChannel(null == e ? true : e.parent_id), [e]));
  return r.useMemo(() => {
    let r = t.filter(e => n.includes(e));
    return (null == e ? true : e.isModeratorReportChannel()) ? (0, m.iq)(r) : r
  }, [t, n, e])
}

function ed(e) {
  return (0, s.e7)([S.Z], () => S.Z.can(U.Plq.READ_MESSAGE_HISTORY, e))
}

function ef(e) {
  return (0, s.e7)([S.Z], () => S.Z.can(U.Plq.READ_MESSAGE_HISTORY, e))
}

function e_(e) {
  let {
    channelId: t
  } = e;
  return (0, s.cj)([M.Z], () => ({
    isSearchLoading: M.Z.getSearchLoading(t),
    searchQuery: M.Z.getSearchQuery(t),
    searchResults: M.Z.getSearchResults(t)
  }))
}
let ep = 350;

function eh(e, t, n) {
  let i = arguments.length > 3 && true !== arguments[3] && arguments[3],
    {
      isSearchLoading: o,
      searchQuery: a
    } = e_({
      channelId: e.id
    }),
    s = ed(e),
    l = r.useRef(null),
    c = r.useRef(new Set);
  r.useEffect(() => {
    if (null == a && null != l.current) {
      P.Z.clearForumSearch(e.id), l.current = null;
      return
    }
    if (null == a || 0 === a.length || i) return;
    if (!s) return void P.Z.clearForumSearch(e.id);
    if (l.current === a && c.current === t || o) return;
    let r = setTimeout(async () => {
      l.current = a, c.current = t;
      try {
        await P.Z.searchForumPosts(e.guild_id, e.id, a, t, n)
      } catch (e) {}
    }, ep);
    return () => clearTimeout(r)
  }, [s, e.guild_id, e.id, i, o, a, t, n])
}

function em(e, t) {
  return (0, s.e7)([g.Z, A.ZP, v.Z], () => {
    let n = v.Z.getChannel(t);
    if (!(null == n ? true : n.isForumLikeChannel())) return 0;
    let r = g.Z.getActiveJoinedUnreadThreadsForParent(e, t),
      i = g.Z.getActiveUnjoinedUnreadThreadsForParent(e, t),
      o = A.ZP.ackMessageId(t),
      a = 0;
    if (null == o) return a;
    for (let e in r) {
      let t = r[e],
        n = A.ZP.lastMessageId(t.channel.id);
      null != n && n > o && a++
    }
    for (let e in i) {
      let t = i[e],
        n = A.ZP.lastMessageId(t.id);
      null != n && n > o && a++
    }
    return a
  })
}

function eg(e) {
  let {
    channel: t,
    sortOrder: n,
    tagFilter: i,
    tagSetting: o,
    shouldAutomaticallyAck: a
  } = e, l = (0, s.Wu)([w.Z], () => w.Z.getThreadIds(t.id, n, i, o)), u = em(t.guild_id, t.id), d = (0, s.e7)([w.Z], () => a && (u > 0 || w.Z.getCanAckThreads()), [a, u]);
  return r.useEffect(() => {
    d && (0, c.U6)(t, {
      object: U.qAy.ACK_FORUM_ACTIVE_THREADS,
      objectType: U.Qqv.ACK_AUTOMATIC
    })
  }, [t, d]), l
}