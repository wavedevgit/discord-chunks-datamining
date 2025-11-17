/** Chunk was on 90508 **/
/** chunk id: 456269, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  AJ: () => V,
  Bs: () => J,
  ES: () => x,
  IN: () => B,
  J$: () => et,
  MC: () => W,
  Vm: () => er,
  XZ: () => ea,
  eV: () => Y,
  eZ: () => ei,
  iM: () => Q,
  jR: () => eu,
  kF: () => G,
  kn: () => el,
  ku: () => eo,
  mX: () => X,
  n2: () => ed,
  nP: () => K,
  ql: () => en,
  r_: () => $,
  vP: () => es,
  xw: () => z
}), require("./388685.js"), require("./583741.js"), require("./781311.js");
var Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  u = require.n(Chunk392711),
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

function x(e, t, n, l) {
  let u = (0, a.e7)([p.Z], () => p.Z.hasLoaded(e.guild_id));
  r.useEffect(() => {
    if (!u) return;
    let r = y.Z.getThreadIds(e.id, t, n, l),
      i = U.Z.getThreadIdsMissingCounts(e.guild_id, r).filter(e => (0, k.nU)(e, [O.ZP])).slice(0, 180).map(e => ({
        threadId: e,
        ackMessageId: O.ZP.getTrackedAckMessageId(e)
      }));
    i.length > 0 && o.Z.dispatch({
      type: "REQUEST_FORUM_UNREADS",
      guildId: e.guild_id,
      channelId: e.id,
      threads: i
    })
  }, [e.id, e.guild_id, u, n, t, l])
}

function G(e) {
  return (0, a.e7)([p.Z, b.Z], () => {
    let t = u()(p.Z.getThreadsForParent(e.guild_id, e.parent_id)).keys().filter(e => {
      var t;
      return (null == (t = b.Z.getChannel(e)) ? true : t.hasFlag(L.zZ.PINNED)) === true
    }).head();
    return b.Z.getChannel(t)
  })
}
let H = [];

function Y(e) {
  let t = function(e) {
    let t = null == e ? true : e.parent_id;
    return (0, a.cj)([b.Z], () => {
      var e;
      let n = b.Z.getChannel(t);
      return (null != (e = null == n ? true : n.availableTags) ? e : []).reduce((e, t) => {
        var n, r;
        return n = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              var r;
              r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = r
            })
          }
          return e
        }({}, e), r = r = {
          [t.id]: t
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(r)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
        }), n
      }, {})
    }, [t])
  }(e);
  return r.useMemo(() => {
    var n, r, l;
    let u = null != (l = null == e || null == (r = e.appliedTags) || null == (n = r.map(e => t[e])) ? true : n.filter(T.lm)) ? l : H;
    return (null == e ? true : e.isModeratorReportChannel()) ? (0, h.iq)(u) : u
  }, [t, e])
}

function Q(e, t) {
  let n = (0, a.Wu)([A.default], () => t.map(e => A.default.getUser(e)).filter(T.lm));
  return (0, s.ZP)(() => {
    n.forEach(t => {
      M.Z.requestMember(e.guild_id, t.id)
    })
  }), n
}

function z(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : F.R6.DURATION_AGO,
    l = r.useMemo(() => I.default.extractTimestamp(e.id), [e.id]),
    u = (0, _.Ok)(e),
    a = r.useMemo(() => (0, k.Uw)(t, n), [t, n]);
  return r.useMemo(() => t === i.z.CREATION_DATE ? (0, _.Ye)(l, a) : (0, _.Ye)(u, a), [u, t, l, a])
}

function B(e) {
  return r.useMemo(() => {
    var t;
    return u().maxBy(null != (t = null == e ? true : e.reactions) ? t : [], e => Math.max(e.burst_count, e.count))
  }, [null == e ? true : e.reactions])
}

function J(e) {
  let t = null == e ? true : e.defaultReactionEmoji,
    n = (0, a.e7)([c.ZP], () => (null == t ? true : t.emojiId) != null ? c.ZP.getUsableCustomEmojiById(t.emojiId) : null);
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

function K(e) {
  let t = (0, a.e7)([P.Z], () => {
      var t;
      return null != (t = P.Z.getCount(e.id)) ? t : 0
    }),
    n = (0, E.lE)(t, e.id),
    r = (0, a.e7)([O.ZP], () => (0, k.nU)(e.id, [O.ZP])),
    l = (0, a.e7)([U.Z], () => {
      if (!r) return null;
      let n = U.Z.getCount(e.id);
      if (null == n || !(n > 0)) return "1+";
      {
        let e = Math.min(n, t);
        return e >= q.dg ? "".concat(q.dg, "+") : e
      }
    });
  return {
    messageCount: t,
    isMaxMessageCount: null != t && "".concat(t) !== n,
    messageCountText: n,
    unreadCount: l
  }
}

function V(e) {
  var t;
  let n = (0, a.e7)([A.default], () => A.default.getUser(e.ownerId)),
    l = (0, a.e7)([R.Z], () => {
      var t;
      return null == (t = R.Z.getMessage(e.id)) ? true : t.firstMessage
    }),
    u = (0, m.Sw)(null != (t = null == l ? true : l.author) ? t : n, e);
  return r.useEffect(() => {
    null != e.ownerId && M.Z.requestMember(e.guild_id, e.ownerId)
  }, [e.guild_id, e.ownerId]), {
    user: n,
    author: u
  }
}

function W(e) {
  var t, n;
  let r = A.default.getUser(e.ownerId),
    l = null == (t = R.Z.getMessage(e.id)) ? true : t.firstMessage,
    u = (0, m.ij)(null != (n = null == l ? true : l.author) ? n : r, e);
  return {
    user: r,
    author: u
  }
}

function X(e) {
  let {
    firstMessage: t,
    formatInline: n = true,
    noStyleAndInteraction: l = true,
    hasUnreads: u = true
  } = e, i = (0, g.p)(), a = f.d.useExperiment({
    location: "modules/forums/ForumHooks"
  }).enabled, o = u ? "text-normal" : "text-muted", {
    hasSpoilerEmbeds: d,
    content: s
  } = r.useMemo(() => (null == t ? true : t.content) != null && "" !== t.content ? (0, Z.ZP)(t, {
    formatInline: n,
    noStyleAndInteraction: l,
    allowHeading: true,
    allowList: true,
    allowGameMentions: a,
    shouldFilterKeywords: i,
    textColor: o
  }) : {
    hasSpoilerEmbeds: false,
    content: null
  }, [t, n, l, i, a, o]), c = (0, w.eL)(t, d), m = (0, w.vg)(t, d);
  return {
    hasSpoilerEmbeds: d,
    content: s,
    firstMedia: c,
    firstMediaIsEmbed: m
  }
}

function $(e) {
  return (0, a.e7)([S.Z], () => S.Z.can(D.Plq.MANAGE_CHANNELS, e))
}
let ee = {
  isNew: false,
  hasUnreads: false
};

function et(e) {
  return (0, a.cj)([C.Z, O.ZP], () => {
    var t;
    let n = C.Z.getGuild(null != (t = e.getGuildId()) ? t : D.lds);
    return null == n ? ee : (0, k.FS)(e, n, [O.ZP])
  })
}

function en(e) {
  return r.useMemo(() => null == e || null == e.template ? "" : e.template.trim(), [e])
}

function er(e) {
  let t = (0, a.e7)([S.Z], () => S.Z.can(D.Plq.MANAGE_THREADS, e));
  return r.useMemo(() => {
    var n;
    let r = [...null != (n = null == e ? true : e.availableTags) ? n : []];
    return t || (r = r.filter(e => !e.moderated)), r
  }, [t, null == e ? true : e.availableTags])
}

function el(e, t) {
  let n = er((0, a.e7)([b.Z], () => b.Z.getChannel(null == e ? true : e.parent_id), [e]));
  return r.useMemo(() => {
    let r = t.filter(e => n.includes(e));
    return (null == e ? true : e.isModeratorReportChannel()) ? (0, h.iq)(r) : r
  }, [t, n, e])
}

function eu(e) {
  return (0, a.e7)([S.Z], () => S.Z.can(D.Plq.READ_MESSAGE_HISTORY, e))
}

function ei(e) {
  return (0, a.e7)([S.Z], () => S.Z.can(D.Plq.READ_MESSAGE_HISTORY, e))
}

function ea(e) {
  let {
    channelId: t
  } = e;
  return (0, a.cj)([N.Z], () => ({
    isSearchLoading: N.Z.getSearchLoading(t),
    searchQuery: N.Z.getSearchQuery(t),
    searchResults: N.Z.getSearchResults(t)
  }))
}

function eo(e, t, n) {
  let l = arguments.length > 3 && true !== arguments[3] && arguments[3],
    {
      isSearchLoading: u,
      searchQuery: i
    } = ea({
      channelId: e.id
    }),
    a = eu(e),
    o = r.useRef(null),
    d = r.useRef(new Set);
  r.useEffect(() => {
    if (null == i && null != o.current) {
      j.Z.clearForumSearch(e.id), o.current = null;
      return
    }
    if (null == i || 0 === i.length || l) return;
    if (!a) return void j.Z.clearForumSearch(e.id);
    if (o.current === i && d.current === t || u) return;
    let r = setTimeout(async () => {
      o.current = i, d.current = t;
      try {
        await j.Z.searchForumPosts(e.guild_id, e.id, i, t, n)
      } catch (e) {}
    }, 350);
    return () => clearTimeout(r)
  }, [a, e.guild_id, e.id, l, u, i, t, n])
}

function ed(e, t) {
  return (0, a.e7)([v.Z, O.ZP, b.Z], () => {
    let n = b.Z.getChannel(t);
    if (!(null == n ? true : n.isForumLikeChannel())) return 0;
    let r = v.Z.getActiveJoinedUnreadThreadsForParent(e, t),
      l = v.Z.getActiveUnjoinedUnreadThreadsForParent(e, t),
      u = O.ZP.ackMessageId(t),
      i = 0;
    if (null == u) return i;
    for (let e in r) {
      let t = r[e],
        n = O.ZP.lastMessageId(t.channel.id);
      null != n && n > u && i++
    }
    for (let e in l) {
      let t = l[e],
        n = O.ZP.lastMessageId(t.id);
      null != n && n > u && i++
    }
    return i
  })
}

function es(e) {
  let {
    channel: t,
    sortOrder: n,
    tagFilter: l,
    tagSetting: u,
    shouldAutomaticallyAck: i
  } = e, o = (0, a.Wu)([y.Z], () => y.Z.getThreadIds(t.id, n, l, u)), s = ed(t.guild_id, t.id), c = (0, a.e7)([y.Z], () => i && (s > 0 || y.Z.getCanAckThreads()), [i, s]);
  return r.useEffect(() => {
    c && (0, d.U6)(t, {
      object: D.qAy.ACK_FORUM_ACTIVE_THREADS,
      objectType: D.AnalyticsObjectTypes.ACK_AUTOMATIC
    })
  }, [t, c]), o
}