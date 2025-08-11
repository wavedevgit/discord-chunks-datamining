/** Chunk was on web.js **/
/** chunk id: 456269, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AJ: () => et,
  Bs: () => $,
  ES: () => Y,
  IN: () => J,
  J$: () => ea,
  MC: () => en,
  Vm: () => el,
  XZ: () => ef,
  eV: () => q,
  eZ: () => ed,
  iM: () => X,
  jR: () => eu,
  kF: () => W,
  kn: () => ec,
  ku: () => ep,
  mX: () => er,
  n2: () => eh,
  nP: () => ee,
  ql: () => es,
  r_: () => ei,
  vP: () => em,
  xw: () => Q
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

function B(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function Z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      B(e, t, n[t])
    })
  }
  return e
}

function F(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function V(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : F(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let H = 180;

function Y(e, t, n, i) {
  let o = (0, s.e7)([g.Z], () => g.Z.hasLoaded(e.guild_id));
  r.useEffect(() => {
    if (!o) return;
    let r = P.Z.getThreadIds(e.id, t, n, i),
      a = L.Z.getThreadIdsMissingCounts(e.guild_id, r).filter(e => (0, M.nU)(e, [S.ZP])).slice(0, H).map(e => ({
        threadId: e,
        ackMessageId: S.ZP.getTrackedAckMessageId(e)
      }));
    a.length > 0 && l.Z.dispatch({
      type: "REQUEST_FORUM_UNREADS",
      guildId: e.guild_id,
      channelId: e.id,
      threads: a
    })
  }, [e.id, e.guild_id, o, n, t, i])
}

function W(e) {
  return (0, s.e7)([g.Z, O.Z], () => {
    let t = o()(g.Z.getThreadsForParent(e.guild_id, e.parent_id)).keys().filter(e => {
      var t;
      return (null == (t = O.Z.getChannel(e)) ? true : t.hasFlag(U.zZ.PINNED)) === true
    }).head();
    return O.Z.getChannel(t)
  })
}

function K(e) {
  let t = null == e ? true : e.parent_id;
  return (0, s.cj)([O.Z], () => {
    var e;
    let n = O.Z.getChannel(t);
    return (null != (e = null == n ? true : n.availableTags) ? e : []).reduce((e, t) => V(Z({}, e), {
      [t.id]: t
    }), {})
  }, [t])
}
let z = [];

function q(e) {
  let t = K(e);
  return r.useMemo(() => {
    var n, r, i;
    let o = null != (i = null == e || null == (r = e.appliedTags) || null == (n = r.map(e => t[e])) ? true : n.filter(N.lm)) ? i : z;
    return (null == e ? true : e.isModeratorReportChannel()) ? (0, h.iq)(o) : o
  }, [t, e])
}

function X(e, t) {
  let n = (0, s.Wu)([A.default], () => t.map(e => A.default.getUser(e)).filter(N.lm));
  return (0, u.ZP)(() => {
    n.forEach(t => {
      v.Z.requestMember(e.guild_id, t.id)
    })
  }), n
}

function Q(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : k.R6.DURATION_AGO,
    i = r.useMemo(() => C.default.extractTimestamp(e.id), [e.id]),
    o = (0, y.Ok)(e),
    s = r.useMemo(() => (0, M.Uw)(t, n), [t, n]);
  return r.useMemo(() => t === a.z.CREATION_DATE ? (0, y.Ye)(i, s) : (0, y.Ye)(o, s), [o, t, i, s])
}

function J(e) {
  return r.useMemo(() => {
    var t;
    return o().maxBy(null != (t = null == e ? true : e.reactions) ? t : [], e => Math.max(e.burst_count, e.count))
  }, [null == e ? true : e.reactions])
}

function $(e) {
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

function ee(e) {
  let t = (0, s.e7)([b.Z], () => {
      var t;
      return null != (t = b.Z.getCount(e.id)) ? t : 0
    }),
    n = (0, E.lE)(t, e.id),
    r = (0, s.e7)([S.ZP], () => (0, M.nU)(e.id, [S.ZP])),
    i = (0, s.e7)([L.Z], () => {
      if (!r) return null;
      let n = L.Z.getCount(e.id);
      if (null == n || !(n > 0)) return "1+";
      {
        let e = Math.min(n, t);
        return e >= G.dg ? "".concat(G.dg, "+") : e
      }
    });
  return {
    messageCount: t,
    isMaxMessageCount: null != t && "".concat(t) !== n,
    messageCountText: n,
    unreadCount: i
  }
}

function et(e) {
  var t;
  let n = (0, s.e7)([A.default], () => A.default.getUser(e.ownerId)),
    i = (0, s.e7)([D.Z], () => {
      var t;
      return null == (t = D.Z.getMessage(e.id)) ? true : t.firstMessage
    }),
    o = (0, p.Sw)(null != (t = null == i ? true : i.author) ? t : n, e);
  return r.useEffect(() => {
    null != e.ownerId && v.Z.requestMember(e.guild_id, e.ownerId)
  }, [e.guild_id, e.ownerId]), {
    user: n,
    author: o
  }
}

function en(e) {
  var t, n;
  let r = A.default.getUser(e.ownerId),
    i = null == (t = D.Z.getMessage(e.id)) ? true : t.firstMessage,
    o = (0, p.ij)(null != (n = null == i ? true : i.author) ? n : r, e);
  return {
    user: r,
    author: o
  }
}

function er(e) {
  let {
    firstMessage: t,
    formatInline: n = true,
    noStyleAndInteraction: i = true
  } = e, o = (0, f.p)(), {
    hasSpoilerEmbeds: a,
    content: s
  } = r.useMemo(() => (null == t ? true : t.content) != null && "" !== t.content ? (0, _.ZP)(t, {
    formatInline: n,
    noStyleAndInteraction: i,
    allowHeading: true,
    allowList: true,
    shouldFilterKeywords: o
  }) : {
    hasSpoilerEmbeds: false,
    content: null
  }, [t, n, i, o]), l = (0, w.eL)(t, a), c = (0, w.vg)(t, a);
  return {
    hasSpoilerEmbeds: a,
    content: s,
    firstMedia: l,
    firstMediaIsEmbed: c
  }
}

function ei(e) {
  return (0, s.e7)([T.Z], () => T.Z.can(j.Plq.MANAGE_CHANNELS, e))
}
let eo = {
  isNew: false,
  hasUnreads: false
};

function ea(e) {
  return (0, s.cj)([I.Z, S.ZP], () => {
    var t;
    let n = I.Z.getGuild(null != (t = e.getGuildId()) ? t : j.lds);
    return null == n ? eo : (0, M.FS)(e, n, [S.ZP])
  })
}

function es(e) {
  return r.useMemo(() => null == e || null == e.template ? "" : e.template.trim(), [e])
}

function el(e) {
  let t = (0, s.e7)([T.Z], () => T.Z.can(j.Plq.MANAGE_THREADS, e));
  return r.useMemo(() => {
    var n;
    let r = [...null != (n = null == e ? true : e.availableTags) ? n : []];
    return t || (r = r.filter(e => !e.moderated)), r
  }, [t, null == e ? true : e.availableTags])
}

function ec(e, t) {
  let n = el((0, s.e7)([O.Z], () => O.Z.getChannel(null == e ? true : e.parent_id), [e]));
  return r.useMemo(() => {
    let r = t.filter(e => n.includes(e));
    return (null == e ? true : e.isModeratorReportChannel()) ? (0, h.iq)(r) : r
  }, [t, n, e])
}

function eu(e) {
  return (0, s.e7)([T.Z], () => T.Z.can(j.Plq.READ_MESSAGE_HISTORY, e))
}

function ed(e) {
  return (0, s.e7)([T.Z], () => T.Z.can(j.Plq.READ_MESSAGE_HISTORY, e))
}

function ef(e) {
  let {
    channelId: t
  } = e;
  return (0, s.cj)([x.Z], () => ({
    isSearchLoading: x.Z.getSearchLoading(t),
    searchQuery: x.Z.getSearchQuery(t),
    searchResults: x.Z.getSearchResults(t)
  }))
}
let e_ = 350;

function ep(e, t, n) {
  let i = arguments.length > 3 && true !== arguments[3] && arguments[3],
    {
      isSearchLoading: o,
      searchQuery: a
    } = ef({
      channelId: e.id
    }),
    s = eu(e),
    l = r.useRef(null),
    c = r.useRef(new Set);
  r.useEffect(() => {
    if (null == a && null != l.current) {
      R.Z.clearForumSearch(e.id), l.current = null;
      return
    }
    if (null == a || 0 === a.length || i) return;
    if (!s) return void R.Z.clearForumSearch(e.id);
    if (l.current === a && c.current === t || o) return;
    let r = setTimeout(async () => {
      l.current = a, c.current = t;
      try {
        await R.Z.searchForumPosts(e.guild_id, e.id, a, t, n)
      } catch (e) {}
    }, e_);
    return () => clearTimeout(r)
  }, [s, e.guild_id, e.id, i, o, a, t, n])
}

function eh(e, t) {
  return (0, s.e7)([m.Z, S.ZP, O.Z], () => {
    let n = O.Z.getChannel(t);
    if (!(null == n ? true : n.isForumLikeChannel())) return 0;
    let r = m.Z.getActiveJoinedUnreadThreadsForParent(e, t),
      i = m.Z.getActiveUnjoinedUnreadThreadsForParent(e, t),
      o = S.ZP.ackMessageId(t),
      a = 0;
    if (null == o) return a;
    for (let e in r) {
      let t = r[e],
        n = S.ZP.lastMessageId(t.channel.id);
      null != n && n > o && a++
    }
    for (let e in i) {
      let t = i[e],
        n = S.ZP.lastMessageId(t.id);
      null != n && n > o && a++
    }
    return a
  })
}

function em(e) {
  let {
    channel: t,
    sortOrder: n,
    tagFilter: i,
    tagSetting: o,
    shouldAutomaticallyAck: a
  } = e, l = (0, s.Wu)([P.Z], () => P.Z.getThreadIds(t.id, n, i, o)), u = eh(t.guild_id, t.id), d = (0, s.e7)([P.Z], () => a && (u > 0 || P.Z.getCanAckThreads()), [a, u]);
  return r.useEffect(() => {
    d && (0, c.U6)(t, {
      object: j.qAy.ACK_FORUM_ACTIVE_THREADS,
      objectType: j.Qqv.ACK_AUTOMATIC
    })
  }, [t, d]), l
}