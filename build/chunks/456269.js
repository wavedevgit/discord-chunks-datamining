/** Chunk was on 90508 **/
/** chunk id: 456269, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  AJ: () => K,
  Bs: () => B,
  ES: () => q,
  IN: () => z,
  J$: () => ee,
  MC: () => V,
  Vm: () => en,
  XZ: () => ei,
  eV: () => H,
  eZ: () => eu,
  iM: () => Y,
  jR: () => el,
  kF: () => x,
  kn: () => er,
  ku: () => ea,
  mX: () => W,
  n2: () => eo,
  nP: () => J,
  ql: () => et,
  r_: () => X,
  vP: () => ed,
  xw: () => Q
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

function q(e, t, n, l) {
  let u = (0, a.e7)([v.Z], () => v.Z.hasLoaded(e.guild_id));
  r.useEffect(() => {
    if (!u) return;
    let r = j.Z.getThreadIds(e.id, t, n, l),
      i = R.Z.getThreadIdsMissingCounts(e.guild_id, r).filter(e => (0, N.nU)(e, [S.ZP])).slice(0, 180).map(e => ({
        threadId: e,
        ackMessageId: S.ZP.getTrackedAckMessageId(e)
      }));
    i.length > 0 && o.Z.dispatch({
      type: "REQUEST_FORUM_UNREADS",
      guildId: e.guild_id,
      channelId: e.id,
      threads: i
    })
  }, [e.id, e.guild_id, u, n, t, l])
}

function x(e) {
  return (0, a.e7)([v.Z, _.Z], () => {
    let t = u()(v.Z.getThreadsForParent(e.guild_id, e.parent_id)).keys().filter(e => {
      var t;
      return (null == (t = _.Z.getChannel(e)) ? true : t.hasFlag(D.zZ.PINNED)) === true
    }).head();
    return _.Z.getChannel(t)
  })
}
let G = [];

function H(e) {
  let t = function(e) {
    let t = null == e ? true : e.parent_id;
    return (0, a.cj)([_.Z], () => {
      var e;
      let n = _.Z.getChannel(t);
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
    let u = null != (l = null == e || null == (r = e.appliedTags) || null == (n = r.map(e => t[e])) ? true : n.filter(A.lm)) ? l : G;
    return (null == e ? true : e.isModeratorReportChannel()) ? (0, m.iq)(u) : u
  }, [t, e])
}

function Y(e, t) {
  let n = (0, a.Wu)([O.default], () => t.map(e => O.default.getUser(e)).filter(A.lm));
  return (0, s.ZP)(() => {
    n.forEach(t => {
      b.Z.requestMember(e.guild_id, t.id)
    })
  }), n
}

function Q(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : k.R6.DURATION_AGO,
    l = r.useMemo(() => T.default.extractTimestamp(e.id), [e.id]),
    u = (0, P.Ok)(e),
    a = r.useMemo(() => (0, N.Uw)(t, n), [t, n]);
  return r.useMemo(() => t === i.z.CREATION_DATE ? (0, P.Ye)(l, a) : (0, P.Ye)(u, a), [u, t, l, a])
}

function z(e) {
  return r.useMemo(() => {
    var t;
    return u().maxBy(null != (t = null == e ? true : e.reactions) ? t : [], e => Math.max(e.burst_count, e.count))
  }, [null == e ? true : e.reactions])
}

function B(e) {
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

function J(e) {
  let t = (0, a.e7)([p.Z], () => {
      var t;
      return null != (t = p.Z.getCount(e.id)) ? t : 0
    }),
    n = (0, E.lE)(t, e.id),
    r = (0, a.e7)([S.ZP], () => (0, N.nU)(e.id, [S.ZP])),
    l = (0, a.e7)([R.Z], () => {
      if (!r) return null;
      let n = R.Z.getCount(e.id);
      if (null == n || !(n > 0)) return "1+";
      {
        let e = Math.min(n, t);
        return e >= L.dg ? "".concat(L.dg, "+") : e
      }
    });
  return {
    messageCount: t,
    isMaxMessageCount: null != t && "".concat(t) !== n,
    messageCountText: n,
    unreadCount: l
  }
}

function K(e) {
  var t;
  let n = (0, a.e7)([O.default], () => O.default.getUser(e.ownerId)),
    l = (0, a.e7)([w.Z], () => {
      var t;
      return null == (t = w.Z.getMessage(e.id)) ? true : t.firstMessage
    }),
    u = (0, Z.Sw)(null != (t = null == l ? true : l.author) ? t : n, e);
  return r.useEffect(() => {
    null != e.ownerId && b.Z.requestMember(e.guild_id, e.ownerId)
  }, [e.guild_id, e.ownerId]), {
    user: n,
    author: u
  }
}

function V(e) {
  var t, n;
  let r = O.default.getUser(e.ownerId),
    l = null == (t = w.Z.getMessage(e.id)) ? true : t.firstMessage,
    u = (0, Z.ij)(null != (n = null == l ? true : l.author) ? n : r, e);
  return {
    user: r,
    author: u
  }
}

function W(e) {
  let {
    firstMessage: t,
    formatInline: n = true,
    noStyleAndInteraction: l = true,
    hasUnreads: u = true
  } = e, i = f.d.useExperiment({
    location: "modules/forums/ForumHooks"
  }).enabled, a = u ? "text-normal" : "text-muted", {
    hasSpoilerEmbeds: o,
    content: d
  } = r.useMemo(() => (null == t ? true : t.content) != null && "" !== t.content ? (0, g.ZP)(t, {
    formatInline: n,
    noStyleAndInteraction: l,
    allowHeading: true,
    allowList: true,
    allowGameMentions: i,
    textColor: a
  }) : {
    hasSpoilerEmbeds: false,
    content: null
  }, [t, n, l, i, a]), s = (0, y.eL)(t, o), c = (0, y.vg)(t, o);
  return {
    hasSpoilerEmbeds: o,
    content: d,
    firstMedia: s,
    firstMediaIsEmbed: c
  }
}

function X(e) {
  return (0, a.e7)([C.Z], () => C.Z.can(F.Plq.MANAGE_CHANNELS, e))
}
let $ = {
  isNew: false,
  hasUnreads: false
};

function ee(e) {
  return (0, a.cj)([M.Z, S.ZP], () => {
    var t;
    let n = M.Z.getGuild(null != (t = e.getGuildId()) ? t : F.lds);
    return null == n ? $ : (0, N.FS)(e, n, [S.ZP])
  })
}

function et(e) {
  return r.useMemo(() => null == e || null == e.template ? "" : e.template.trim(), [e])
}

function en(e) {
  let t = (0, a.e7)([C.Z], () => C.Z.can(F.Plq.MANAGE_THREADS, e));
  return r.useMemo(() => {
    var n;
    let r = [...null != (n = null == e ? true : e.availableTags) ? n : []];
    return t || (r = r.filter(e => !e.moderated)), r
  }, [t, null == e ? true : e.availableTags])
}

function er(e, t) {
  let n = en((0, a.e7)([_.Z], () => _.Z.getChannel(null == e ? true : e.parent_id), [e]));
  return r.useMemo(() => {
    let r = t.filter(e => n.includes(e));
    return (null == e ? true : e.isModeratorReportChannel()) ? (0, m.iq)(r) : r
  }, [t, n, e])
}

function el(e) {
  return (0, a.e7)([C.Z], () => C.Z.can(F.Plq.READ_MESSAGE_HISTORY, e))
}

function eu(e) {
  return (0, a.e7)([C.Z], () => C.Z.can(F.Plq.READ_MESSAGE_HISTORY, e))
}

function ei(e) {
  let {
    channelId: t
  } = e;
  return (0, a.cj)([U.Z], () => ({
    isSearchLoading: U.Z.getSearchLoading(t),
    searchQuery: U.Z.getSearchQuery(t),
    searchResults: U.Z.getSearchResults(t)
  }))
}

function ea(e, t, n) {
  let l = arguments.length > 3 && true !== arguments[3] && arguments[3],
    {
      isSearchLoading: u,
      searchQuery: i
    } = ei({
      channelId: e.id
    }),
    a = el(e),
    o = r.useRef(null),
    d = r.useRef(new Set);
  r.useEffect(() => {
    if (null == i && null != o.current) {
      I.Z.clearForumSearch(e.id), o.current = null;
      return
    }
    if (null == i || 0 === i.length || l) return;
    if (!a) return void I.Z.clearForumSearch(e.id);
    if (o.current === i && d.current === t || u) return;
    let r = setTimeout(async () => {
      o.current = i, d.current = t;
      try {
        await I.Z.searchForumPosts(e.guild_id, e.id, i, t, n)
      } catch (e) {}
    }, 350);
    return () => clearTimeout(r)
  }, [a, e.guild_id, e.id, l, u, i, t, n])
}

function eo(e, t) {
  return (0, a.e7)([h.Z, S.ZP, _.Z], () => {
    let n = _.Z.getChannel(t);
    if (!(null == n ? true : n.isForumLikeChannel())) return 0;
    let r = h.Z.getActiveJoinedUnreadThreadsForParent(e, t),
      l = h.Z.getActiveUnjoinedUnreadThreadsForParent(e, t),
      u = S.ZP.ackMessageId(t),
      i = 0;
    if (null == u) return i;
    for (let e in r) {
      let t = r[e],
        n = S.ZP.lastMessageId(t.channel.id);
      null != n && n > u && i++
    }
    for (let e in l) {
      let t = l[e],
        n = S.ZP.lastMessageId(t.id);
      null != n && n > u && i++
    }
    return i
  })
}

function ed(e) {
  let {
    channel: t,
    sortOrder: n,
    tagFilter: l,
    tagSetting: u,
    shouldAutomaticallyAck: i
  } = e, o = (0, a.Wu)([j.Z], () => j.Z.getThreadIds(t.id, n, l, u)), s = eo(t.guild_id, t.id), c = (0, a.e7)([j.Z], () => i && (s > 0 || j.Z.getCanAckThreads()), [i, s]);
  return r.useEffect(() => {
    c && (0, d.U6)(t, {
      object: F.qAy.ACK_FORUM_ACTIVE_THREADS,
      objectType: F.AnalyticsObjectTypes.ACK_AUTOMATIC
    })
  }, [t, c]), o
}