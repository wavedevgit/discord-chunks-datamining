/** Chunk was on web.js **/
/** chunk id: 483360, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Cq: () => eH,
  ZP: () => e6,
  gF: () => eg,
  k1: () => eY,
  mB: () => eV
}), require("./388685.js"), require("./35282.js"), require("./413496.js"), require("./433524.js"), require("./539854.js"), require("./642613.js"), require("./290780.js"), require("./704826.js"), require("./583741.js");
var Chunk658722 = require("./658722.js"),
  o = require.n(Chunk658722),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk423802 = require("./423802.js"),
  Chunk101186 = require("./101186.js"),
  Chunk827837 = require("./827837.js"),
  Chunk815372 = require("./815372.js"),
  Chunk620490 = require("./620490.js"),
  Chunk933557 = require("./933557.js"),
  Chunk565924 = require("./565924.js"),
  Chunk710845 = require("./710845.js"),
  Chunk339085 = require("./339085.js"),
  Chunk594190 = require("./594190.js"),
  Chunk627050 = require("./627050.js"),
  Chunk31445 = require("./31445.js"),
  Chunk931261 = require("./931261.js"),
  Chunk510231 = require("./510231.js"),
  Chunk277078 = require("./277078.js"),
  Chunk208049 = require("./208049.js"),
  Chunk763296 = require("./763296.js"),
  Chunk421673 = require("./421673.js"),
  Chunk285651 = require("./285651.js"),
  Chunk822179 = require("./822179.js"),
  Chunk926491 = require("./926491.js"),
  Chunk373228 = require("./373228.js"),
  Chunk601070 = require("./601070.js"),
  Chunk569471 = require("./569471.js"),
  Chunk675478 = require("./675478.js"),
  Chunk131704 = require("./131704.js"),
  Chunk345162 = require("./345162.js"),
  Chunk598077 = require("./598077.js"),
  Chunk592125 = require("./592125.js"),
  Chunk580005 = require("./580005.js"),
  Chunk77498 = require("./77498.js"),
  Chunk984933 = require("./984933.js"),
  Chunk271383 = require("./271383.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk375954 = require("./375954.js"),
  Chunk496675 = require("./496675.js"),
  Chunk158776 = require("./158776.js"),
  Chunk699516 = require("./699516.js"),
  Chunk944486 = require("./944486.js"),
  Chunk914010 = require("./914010.js"),
  Chunk594174 = require("./594174.js"),
  Chunk230307 = require("./230307.js"),
  Chunk55563 = require("./55563.js"),
  Chunk251625 = require("./251625.js"),
  Chunk823379 = require("./823379.js"),
  Chunk411198 = require("./411198.js"),
  Chunk892880 = require("./892880.js"),
  Chunk700785 = require("./700785.js"),
  Chunk226951 = require("./226951.js"),
  Chunk709054 = require("./709054.js"),
  Chunk624138 = require("./624138.js"),
  Chunk51144 = require("./51144.js"),
  Chunk981631 = require("./981631.js"),
  Chunk727785 = require("./727785.js"),
  Chunk176505 = require("./176505.js"),
  Chunk570911 = require("./570911.js"),
  Chunk388032 = require("./388032.jsx");

function ef(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function e_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      ef(e, t, n[t])
    })
  }
  return e
}

function ep(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function eh(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ep(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let em = (0, Chunk101186.M)(() => ({
  options: []
}));

function eg(e) {
  em.setState({
    options: e
  })
}
let eE = new Chunk710845.Z("AutocompleteUtils"),
  eb = 10,
  ey = 7,
  eO = 5,
  ev = 3,
  eI = 1,
  eT = 1,
  eS = 3,
  eA = 5,
  eC = 3,
  eN = 11,
  eR = 6,
  eP = 8,
  ew = 1,
  eD = 1e3,
  ex = .2,
  eL = .1,
  ej = 50,
  eM = () => true,
  ek = /(\t|\s)/,
  eU = [],
  eG = (r = require("./786074.js").Z).MENTION_EVERYONE,
  eB = r.MENTION_HERE,
  eZ = r.MENTION_GAME,
  eF = r.LAUNCHABLE_APPLICATIONS;

function eV() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 0,
    t = arguments.length > 1 ? arguments[1] : true;
  return eD * module * (null != exports ? exports : 1)
}

function eH(e) {
  var t, n;
  let r = k.Z.getFrequentlyWithoutFetchingLatest(),
    i = r.reduce((e, t) => {
      let {
        id: n
      } = t, r = k.Z.getScoreWithoutFetchingLatest(n);
      return r > e ? r : e
    }, 0),
    o = [];
  switch (e) {
    case el.h8.GUILD:
      o = r.filter(e => (0, ee.lM)(e));
      break;
    case el.h8.USER:
      o = r.filter(e => e instanceof x.Sf && e.type === es.d4z.DM);
      break;
    case el.h8.GROUP_DM:
      o = r.filter(e => e instanceof x.Sf && e.isMultiUserDM());
      break;
    case el.h8.TEXT_CHANNEL:
      o = r.filter(e => e instanceof x.Sf && (0, x.r8)(e.type));
      break;
    case el.h8.VOICE_CHANNEL:
      o = r.filter(e => e instanceof x.Sf && e.isGuildVocal())
  }
  let a = {};
  for (let t of o) {
    let {
      id: n
    } = t, r = k.Z.getScoreWithoutFetchingLatest(n);
    if (e === el.h8.USER && t instanceof x.mn) {
      if (t.type === es.d4z.DM) a[n = t.getRecipientId()] = 1 + r / i;
      else if (t.type === es.d4z.GROUP_DM) {
        let e = t.recipients.length;
        for (let n of t.recipients) a[n] = 1 + r / i * (1 / e)
      }
    } else a[n] = 1 + r / i
  }
  for (let e of W.Z.getFriendIDs()) a[e] = (null != (t = a[e]) ? t : 1) + ex;
  for (let e of M.Z.getDMUserIds()) a[e] = (null != (n = a[e]) ? n : 1) + eL;
  return a
}
let eY = [Chunk984933.sH, Chunk984933.Zb, Chunk981631.d4z.GUILD_CATEGORY];

function eW(e, t) {
  return e.split(/(?:,| )+/).every(e => RegExp(er.Z.escape(e), "i").test(t))
}

function eK(e, t) {
  let {
    exactQuery: n,
    containQuery: r,
    queryLower: i
  } = t, a = !(arguments.length > 2) || true === arguments[2] || arguments[2];
  try {
    if (n.test(e)) {
      if (e.toLocaleLowerCase() === i) return eb;
      return ey
    }
    if (r.test(e)) return eO;
    if (eW(i, e)) return ev;
    if (a && o()(i, e)) return eI
  } catch (e) {
    eE.error(e)
  }
  return 0
}

function ez(e) {
  return (null == e ? true : e.joinedAt) != null && !e.isPending
}

function eq(e) {
  let {
    query: t,
    members: n,
    limit: r,
    filter: i,
    allowSnowflake: a,
    boosters: s
  } = e, l = q.default.getUsers(), c = z.Z.getGuildId(), u = t.toLocaleLowerCase(), d = (0, eo.Fv)(u), _ = [], p = [], h = n.length, m = 0, g = 0;
  for (; m < h;) {
    var E, b, y, O, v, I, T, S, A;
    let e, r, f = n[m];
    f instanceof j.Z ? (r = f, e = null == (b = B.ZP.getNick(c, r.id)) ? true : b.toLocaleLowerCase()) : (e = null == (y = f.nick) ? true : y.toLocaleLowerCase(), r = l[f.userId]);
    let h = null == (E = ea.ZP.getGlobalName(r)) ? true : E.toLocaleLowerCase();
    if (null != r && (null == i || i(r))) {
      let n = r.username.toLocaleLowerCase(),
        i = (0, eo._I)(n),
        l = (0, eo.Fv)(i),
        c = null != e ? (0, eo._I)(e) : null,
        f = null != c ? (0, eo.Fv)(c) : null,
        m = null != h ? (0, eo._I)(h) : null,
        E = null != m ? (0, eo.Fv)(m) : null;
      a && t === r.id || n.substring(0, u.length) === u || i.substring(0, u.length) === u || (null == e ? true : e.substring(0, u.length)) === u || (null == c ? true : c.substring(0, u.length)) === u || (null == h ? true : h.substring(0, u.length)) === u || (null == m ? true : m.substring(0, u.length)) === u ? _.push({
        type: el.h8.USER,
        record: r,
        score: eV(eb, null == s ? true : s[r.id]),
        comparator: null != (O = null != h ? h : e) ? O : n,
        sortable: null != (v = null != m ? m : c) ? v : i
      }) : l.substring(0, d.length) === d || (null == f ? true : f.substring(0, d.length)) === d || (null == E ? true : E.substring(0, d.length)) === d ? _.push({
        type: el.h8.USER,
        record: r,
        score: eV(eI, null == s ? true : s[r.id]),
        comparator: null != (I = null != h ? h : e) ? I : n,
        sortable: null != (T = null != m ? m : c) ? T : i
      }) : g < ej && (o()(u, i) || o()(d, l) || null != c && o()(u, c) || null != f && o()(d, f) || null != m && o()(u, m) || null != E && o()(d, E)) && (p.push({
        type: el.h8.USER,
        record: r,
        score: eV(eI, null == s ? true : s[r.id]),
        comparator: null != (S = null != h ? h : e) ? S : n,
        sortable: null != (A = null != m ? m : c) ? A : i
      }), g += 1)
    }
    m += 1
  }
  return _.sort(f.Z), _.length < r && (p.sort(f.Z), _ = _.concat(p.slice(0, Math.max(0, r - _.length)))), _.length > r && (_.length = r), _
}

function eX(e) {
  switch (e) {
    case R.MO.STICKER_NAME:
      return eN;
    case R.MO.CORRELATED_EMOJI:
      return eR;
    case R.MO.TAG:
      return ew;
    case R.MO.GUILD_NAME:
    case R.MO.PACK_NAME:
      return eP;
    default:
      return 1
  }
}

function eQ(e) {
  return e === G.sH || e !== G.Zb && !!(0, x.Q5)(e)
}

function eJ(e, t, n) {
  return e === t || (!!n || !!(0, x.Km)(t)) && (e === G.sH ? (0, x.r8)(t) || (0, x.bw)(t) : e === G.Zb && (0, x.bw)(t))
}

function e$(e, t) {
  return e === G.sH && (0, x.bw)(t)
}

function e0(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = e.split(" ").filter(e => "" !== e || t).map(e => {
      let t = e.toLocaleLowerCase();
      return {
        queryLower: t,
        exactQuery: RegExp("^".concat(er.Z.escape(t)), "i"),
        containQuery: RegExp(er.Z.escape(t), "i"),
        isFullMatch: false
      }
    });
  if (e.includes(" ")) {
    let t = e.toLocaleLowerCase();
    n.unshift({
      queryLower: t,
      exactQuery: RegExp("^".concat(er.Z.escape(t).replace(" ", "( |-)")), "i"),
      containQuery: RegExp(er.Z.escape(t).replace(" ", "( |-)"), "i"),
      isFullMatch: true
    })
  }
  return n
}

function e1(e, t, n) {
  let r = 0,
    i = null;
  for (let o of t) {
    let t = eK(e, o, n);
    t > r && (r = t, i = o)
  }
  return null != i && (i.isFullMatch ? t.length = 0 : t.splice(t.indexOf(i), 1)), r
}

function e2(e, t) {
  if (null == e.guild_id) return;
  let n = t[e.guild_id];
  if (null == n) {
    var r;
    n = t[e.guild_id] = null == (r = F.Z.getGuild(e.guild_id)) ? true : r.name.toLocaleLowerCase()
  }
  return n
}

function e3(e, t) {
  if (null == e.parent_id) return;
  let n = t[e.parent_id];
  if (null == n) {
    var r;
    n = t[e.parent_id] = null == (r = M.Z.getChannel(e.parent_id)) ? true : r.name.toLocaleLowerCase()
  }
  return n
}

function e4(e, t) {
  let n = M.Z.getChannel(e);
  return null == e || null == n ? [] : s()(V.Z.getMessages(e).toArray()).reverse().uniqBy(e => e.author.id).map(e => q.default.getUser(e.author.id)).filter(e => {
    if (null == e || e.isNonUserBot()) returnfalse;
    let t = n.getGuildId();
    return null == t || ez(B.ZP.getMember(t, e.id))
  }).map(e => {
    var t;
    let r = n.getGuildId(),
      i = null != r ? B.ZP.getMember(r, e.id) : null;
    return {
      type: el.h8.USER,
      record: e,
      score: 0,
      comparator: null != (t = null == i ? true : i.nick) ? t : ea.ZP.getName(e)
    }
  }).take(t).value()
}
let e8 = (0, Chunk251625.oH)((e, t, n) => {
    let r = new Map,
      i = new Map,
      o = [];
    return s()(M.Z.getMutablePrivateChannels()).values().value().forEach(e => {
      if (e.isDM()) {
        let t = e.getRecipientId(),
          n = q.default.getUser(t);
        null == t || null == n || r.has(t) || (r.set(t, e), o.push({
          userId: t,
          nick: W.Z.getNickname(t)
        }), i.set(t, n))
      }
    }), {
      channelsByRecipientId: r,
      recipientsById: i,
      recipients: o
    }
  }),
  e6 = {
    queryFriends(e) {
      let {
        query: t,
        limit: n = 10,
        _fuzzy: r = true,
        filter: i
      } = e;
      return eq({
        query: t,
        members: W.Z.getFriendIDs().map(e => q.default.getUser(e)).filter($.lm),
        limit: n,
        filter: i
      })
    },
    queryDMUsers(e) {
      let {
        query: t,
        limit: n = 10,
        filter: r
      } = e;
      return eq({
        query: t,
        members: M.Z.getDMUserIds().map(e => q.default.getUser(e)).filter($.lm),
        limit: n,
        filter: r
      })
    },
    queryChannelUsers(e) {
      let t, {
          channelId: n,
          query: r,
          limit: i = 10,
          request: o = true,
          checkRecentlyTalkedOnEmptyQuery: a = true,
          allowSnowflake: s = false
        } = e,
        l = M.Z.getChannel(n);
      if (null == l) return [];
      let c = l.isThread() ? M.Z.getChannel(l.parent_id) : null,
        u = null != c ? c : l;
      if (null == u) return [];
      if (u.isPrivate()) {
        t = u.recipients.map(e => {
          var t;
          return {
            userId: e,
            nick: null != (t = W.Z.getNickname(e)) ? t : null
          }
        });
        let e = q.default.getCurrentUser();
        null != e && t.push({
          userId: e.id,
          nick: null
        })
      } else {
        if (0 === r.length && a) {
          let e = e4(l.id, i);
          if (e.length > 0) return e
        }
        t = B.ZP.getMembers(u.guild_id).filter(ez), o && et.Z.requestMembers(u.guild_id, r, i)
      }
      return eq({
        query: r,
        members: t,
        limit: i,
        filter: e => u.isPrivate() || en.BT({
          permission: es.Plq.VIEW_CHANNEL,
          user: e,
          context: u
        }),
        allowSnowflake: s
      })
    },
    queryGuildUsers(e) {
      let {
        guildId: t,
        query: n,
        limit: r = 10,
        request: i = true,
        checkRecentlyTalkedOnEmptyQuery: o = true,
        filter: a,
        allowSnowflake: s
      } = e;
      if (null == F.Z.getGuild(t)) return [];
      if (0 === n.length && o) {
        let e = e4(K.Z.getChannelId(t), r);
        if (e.length > 0) return e
      }
      let l = B.ZP.getMembers(t).filter(ez);
      return i && n.length > 0 && et.Z.requestMembers(t, n, r), eq({
        query: n,
        members: l,
        limit: r,
        filter: a,
        allowSnowflake: s
      })
    },
    queryUsers(e) {
      let {
        query: t,
        filter: n,
        boosters: r,
        limit: i = 10,
        users: o,
        allowSnowflake: a
      } = e;
      return eq({
        query: t,
        members: o,
        limit: i,
        filter: n,
        allowSnowflake: a,
        boosters: r
      })
    },
    queryAllUsers(e) {
      let {
        query: t,
        filter: n,
        boosters: r,
        limit: i = 10,
        request: o = true
      } = e;
      return o && t.length > 0 && et.Z.requestMembers(null, t, i), this.queryUsers({
        query: t,
        limit: i,
        request: o,
        filter: n,
        boosters: r,
        users: s()(q.default.getUsers()).values().value()
      })
    },
    queryChannels(e) {
      let t, {
          query: n,
          guildId: r,
          limit: i = es.rnv,
          fuzzy: o = true,
          filter: a = eM,
          type: l = G.sH,
          allowEmptyQueries: c = false,
          requireVocalConnectAccess: u = true,
          boosters: d = {},
          allowSnowflake: p,
          includeAllThreads: h
        } = e,
        m = e0(n, c),
        g = eQ(l);
      t = null != r ? s()(G.ZP.getChannels(r)[l]).map(e => e.channel).concat(g ? h ? M.Z.getAllThreadsForGuild(r) : P.Z.computeAllActiveJoinedThreads(r) : []).value() : s()(M.Z.loadAllGuildAndPrivateChannelsFromDisk()).values().concat(g ? P.Z.computeAllActiveJoinedThreads() : []).value();
      let E = {},
        b = [],
        y = k.Z.getMaxScore();
      for (let e of t) {
        var O;
        if (!eJ(l, e.type, null != r) || (0, x.Km)(e.type) && !H.Z.can(u ? e.accessPermissions : es.Plq.VIEW_CHANNEL, e) || !a(e)) continue;
        let t = [...m],
          i = e.name.toLocaleLowerCase(),
          s = p && n === e.id,
          c = s ? eb : e1(i, t, o);
        if (0 !== c) {
          if (t.length > 0) {
            for (let n of [e2(e, E), e3(e, E)]) {
              if (null == n || "" === n) continue;
              let e = e1(n, t, false);
              0 !== e && (c += .5 * e)
            }
            c = Math.min(ey - eI, c)
          }
          0 !== c && !(t.length > 1) && (1 !== t.length || t[0].isFullMatch || s) && (e$(l, e.type) && (c = Math.max(c - eT, eI / 2)), e.isThread() && (e.isActiveThread() || (c -= eS), w.Z.hasJoined(e.id) || (c -= eA)), c = Math.min(c + Math.min(null != (O = k.Z.getScoreWithoutFetchingLatest(e.id)) ? O : 0 / y, 1) * eC, c >= ey ? eb : ey), b.push({
            type: (0, x.bw)(e.type) ? el.h8.VOICE_CHANNEL : el.h8.TEXT_CHANNEL,
            record: e,
            score: eV(c, d[e.id]),
            comparator: (0, _.F6)(e, q.default, W.Z),
            sortable: i
          }))
        }
      }
      return b.sort(f.Z), null != i && b.length > i && (b.length = i), b
    },
    queryGuilds(e) {
      let {
        query: t,
        limit: n = 10,
        fuzzy: r = true,
        allowSnowflake: i,
        filter: o = eM,
        boosters: a = {}
      } = e, s = "" === t ? "" : t.toLocaleLowerCase(), l = {
        exactQuery: RegExp("^".concat(er.Z.escape(s)), "i"),
        containQuery: RegExp(er.Z.escape(s), "i"),
        queryLower: s
      }, c = [];
      for (let e of F.Z.getGuildsArray()) {
        if (!o(e)) continue;
        let n = e.name.toLocaleLowerCase(),
          s = i && t === e.id ? eb : eK(n, l, r);
        s > 0 && c.push({
          type: el.h8.GUILD,
          record: e,
          score: eV(s, a[e.id]),
          comparator: e.name,
          sortable: n
        })
      }
      return c.sort(f.Z), c.length > n && (c.length = n), c
    },
    queryDMChannels(e) {
      let {
        query: t,
        limit: n = 10,
        boosters: r = {}
      } = e, {
        channelsByRecipientId: i,
        recipientsById: o,
        recipients: a
      } = e8(M.Z.getPrivateChannelsVersion(), W.Z.getVersion(), q.default.getUserStoreVersion()), s = eq({
        query: t,
        members: a,
        limit: a.length,
        boosters: r
      }), l = [];
      return s.forEach(e => {
        let t = i.get(e.record.id);
        null != t && l.push({
          type: el.h8.DM,
          record: t,
          score: e.score,
          comparator: ea.ZP.getUserTag(o.get(e.record.id)),
          sortable: e.sortable
        })
      }), l.sort(f.Z), l.length > n && (l.length = n), l
    },
    queryGroupDMs(e) {
      let {
        query: t,
        limit: n = 10,
        fuzzy: r = true,
        filter: i = eM,
        boosters: o = {}
      } = e, a = (0, eo._I)((0, eo.Fv)(t.toLocaleLowerCase())), l = {
        exactQuery: RegExp("^".concat(er.Z.escape(a)), "i"),
        containQuery: RegExp(er.Z.escape(a), "i"),
        queryLower: a
      }, c = s()(M.Z.getMutablePrivateChannels()).values().value(), u = [];
      for (let e of c) {
        if (!e.isMultiUserDM() || !i(e)) continue;
        let t = (0, _.F6)(e, q.default, W.Z).toLocaleLowerCase(),
          n = (0, eo._I)((0, eo.Fv)(t)),
          a = eK(n, l, r);
        if ("" !== e.name) {
          let t = (0, _.on)(e, q.default, W.Z).toLocaleLowerCase();
          a = Math.max(a, eK((0, eo._I)((0, eo.Fv)(t)), l, r))
        }
        a > 0 && u.push({
          type: el.h8.GROUP_DM,
          record: e,
          score: eV(a, o[e.id]),
          comparator: (0, _.F6)(e, q.default, W.Z),
          sortable: n
        })
      }
      return u.sort(f.Z), u.length > n && (u.length = n), u
    },
    queryApplications(e) {
      let {
        query: t,
        limit: n = 10,
        fuzzy: r = true,
        filter: i = eM
      } = e, o = t.toLocaleLowerCase(), a = {
        exactQuery: RegExp("^".concat(er.Z.escape(o)), "i"),
        containQuery: RegExp(er.Z.escape(o), "i"),
        queryLower: o
      }, s = eF(), l = [];
      for (let {
          application: e
        }
        of s) {
        if (!i(e)) continue;
        let t = e.name.toLocaleLowerCase(),
          n = eK(t, a, r);
        n > 0 && l.push({
          type: el.h8.APPLICATION,
          record: e,
          score: n,
          comparator: e.name,
          sortable: t
        })
      }
      return l.sort(f.Z), l.length > n && (l.length = n), l
    },
    queryInAppNavigations(e) {
      let {
        query: t,
        limit: n = 10,
        fuzzy: r = true
      } = e, i = t.toLocaleLowerCase(), o = {
        exactQuery: RegExp("^".concat(er.Z.escape(i)), "i"),
        containQuery: RegExp(er.Z.escape(i), "i"),
        queryLower: i
      }, s = {
        [d.Ky.SHOP]: [ed.intl.string(ed.t.pWG4zc)],
        [d.Ky.NITRO_HOME]: [ed.intl.string(ed.t.Ipxkoq)],
        [d.Ky.QUEST_HOME]: [ed.intl.string(ed.t.JALI2N)],
        [d.Ky.APPS_HOME]: [ed.intl.string(ed.t.PHjkRE), ed.intl.string(ed.t.AKcFUl)]
      }, l = [];
      for (let e in s) {
        let t = d.Ky[e],
          n = s[t];
        if (null != n)
          for (let e of n) {
            let n = e.toLocaleLowerCase(),
              i = eK(n, o, r);
            i > 0 && l.push({
              type: el.h8.IN_APP_NAVIGATION,
              record: d.FL.fromType(t),
              score: eV(i),
              comparator: n,
              sortable: n
            })
          }
      }
      return em.getState().options.forEach(e => {
        var t;
        let n = [e.title].concat(e.searchableTitles),
          i = null != (t = (0, a.max)(n.map(e => eV(eK(e.toLocaleLowerCase(), o, r))))) ? t : 0;
        i > 0 && l.push({
          type: el.h8.IN_APP_NAVIGATION,
          record: d.FL.fromType(d.Ky.SETTINGS, e.path, e.title),
          score: i,
          comparator: e.title.toLocaleLowerCase(),
          sortable: e.title.toLocaleLowerCase()
        })
      }), l.sort(f.Z), l.length > n && (l.length = n), l
    },
    querySKUs(e) {
      let {
        query: t,
        limit: n = 10,
        fuzzy: r = true,
        filter: i = eM
      } = e, o = t.toLocaleLowerCase(), a = {
        exactQuery: RegExp("^".concat(er.Z.escape(o)), "i"),
        containQuery: RegExp(er.Z.escape(o), "i"),
        queryLower: o
      }, l = s()(Q.Z.getSKUs()).values().value(), c = [];
      for (let e of l)
        if (e.type === es.epS.DURABLE_PRIMARY && i(e)) {
          let t = e.name.toLocaleLowerCase(),
            n = eK(t, a, r);
          n > 0 && c.push({
            type: el.h8.SKU,
            record: e,
            score: n,
            comparator: e.name,
            sortable: t
          })
        } return c.sort(f.Z), c.length > n && (c.length = n), c
    },
    getRecentlyTalked: e4,
    queryMentionResults(e) {
      let {
        query: t,
        channel: n,
        canMentionEveryone: r = false,
        canMentionHere: i = true,
        canMentionUsers: a = true,
        canMentionRoles: c = true,
        includeAllGuildUsers: u = false,
        includeNonMentionableRoles: d = false,
        checkRecentlyTalkedOnEmptyQuery: f = true,
        limit: _ = es.rnv,
        request: p,
        allowSnowflake: h = false
      } = e, m = a ? (u && null != n.guild_id ? this.queryGuildUsers({
        guildId: n.guild_id,
        query: t,
        limit: _,
        checkRecentlyTalkedOnEmptyQuery: f,
        request: p,
        allowSnowflake: h
      }) : this.queryChannelUsers({
        channelId: n.id,
        query: t,
        limit: _,
        checkRecentlyTalkedOnEmptyQuery: f,
        allowSnowflake: h
      })).map(e => {
        let {
          record: t,
          score: r,
          comparator: i
        } = e;
        return {
          user: t,
          score: r,
          comparator: i,
          nick: B.ZP.getNick(n.guild_id, t.id),
          status: Y.Z.getStatus(t.id)
        }
      }) : [], g = m.length, b = t.toLowerCase(), y = [];
      if (g < _ && c) {
        let e = n.getGuildId(),
          i = F.Z.getGuild(e);
        if (null != i) {
          let n = s()(Z.Z.getSortedRoles(i.id)).filter(t => {
            let {
              mentionable: n,
              name: i,
              id: a
            } = t;
            return (n || r || d) && (o()(b, i.toLowerCase()) || h && b === a) && a !== ei.default.castGuildIdAsEveryoneGuildRoleId(e)
          }).value();
          y = (0, l.Lu)(n, t, {
            keys: ["name"]
          }).slice(0, _ - g), g += y.length
        }
      }
      let O = [];
      !n.isPrivate() && r && c && (g < _ && o()(b, eG().test) && (O.push(eG()), g += 1), i && g < _ && o()(b, eB().test) && (O.push(eB()), g += 1));
      let v = E.N.getCurrentConfig({
        guildId: n.guild_id,
        location: "mention autocomplete"
      }, {
        autoTrackExposure: true
      }).enabled;
      return r && v && null != eZ && (g < _ || 0 === b.length) && o()(b, eZ().test) && (g >= _ && (O.length > 0 ? O.pop() : y.length > 0 ? y.pop() : m.length > 0 && m.pop()), O.push(eZ()), g += 1), {
        users: m,
        globals: O,
        roles: y
      }
    },
    queryGuildMentionResults(e) {
      let {
        query: t,
        guildId: n,
        canMentionEveryone: r = false,
        canMentionUsers: i = true,
        canMentionRoles: a = true,
        canMentionNonMentionableRoles: l = false
      } = e, c = i ? this.queryGuildUsers({
        guildId: n,
        query: t
      }).map(e => eh(e_({}, e), {
        status: Y.Z.getStatus(e.record.id)
      })) : [], u = c.length, d = t.toLowerCase(), f = [];
      if (u < es.rnv && a) {
        let e = F.Z.getGuild(n);
        null != e && (s()(Z.Z.getSortedRoles(e.id)).filter(e => (e.mentionable || r || l) && o()(d, e.name.toLowerCase()) && !(0, L.fI)(e)).take(es.rnv - u).forEach(e => {
          f.push(e)
        }), u += f.length)
      }
      let _ = [];
      return r && a && (u < es.rnv && o()(d, eG().test) && (_.push(eG()), u += 1), u < es.rnv && o()(d, eB().test) && _.push(eB())), {
        users: c,
        globals: _,
        roles: f
      }
    },
    queryChoice(e) {
      let {
        query: t,
        choices: n,
        limit: r = 10,
        fuzzy: i = true
      } = e, o = t.toLocaleLowerCase(), a = RegExp("^".concat(er.Z.escape(o)), "i"), l = RegExp(er.Z.escape(o), "i"), c = s()(n).map((e, t) => {
        let n = eK(e.displayName.toLocaleLowerCase(), {
          exactQuery: a,
          containQuery: l,
          queryLower: o
        }, i);
        return n > 0 ? {
          choice: e,
          score: n,
          originalIndex: t
        } : null
      }).filter($.lm).sortBy(e => false * e.score);
      return null !== r && (c = c.take(r)), c.value()
    },
    queryStaticRouteChannels(e) {
      let {
        query: t,
        guild: n
      } = e, r = t.toLocaleLowerCase(), i = {
        exactQuery: RegExp("^".concat(er.Z.escape(r)), "i"),
        containQuery: RegExp(er.Z.escape(r), "i"),
        queryLower: r
      }, o = (0, y.s)(n.id) && !n.features.has(es.oNc.HUB), a = n.features.has(es.oNc.COMMUNITY), s = (0, b.t)(n) && n.features.has(es.oNc.COMMUNITY), l = [{
        id: ec.HY.SERVER_GUIDE,
        name: ed.intl.string(ed.t.VbpLyc)
      }, {
        id: ec.HY.CHANNEL_BROWSER,
        name: ed.intl.string(ed.t.et6wam)
      }, {
        id: ec.HY.CUSTOMIZE_COMMUNITY,
        name: ed.intl.string(ed.t.h9mGOD)
      }], c = [];
      for (let e of l)(e.id !== ec.HY.SERVER_GUIDE || o) && (e.id !== ec.HY.CHANNEL_BROWSER || a) && (e.id !== ec.HY.CUSTOMIZE_COMMUNITY || s) && eK(e.name.toLocaleLowerCase(), i, false) > 0 && c.push(new x.nl({
        id: e.id,
        name: e.name,
        type: es.d4z.UNKNOWN,
        guild_id: n.id
      }));
      return c
    },
    queryChannelResults(e) {
      let {
        query: t,
        channel: n,
        type: r = G.sH,
        channelTypes: i
      } = e;
      return {
        channels: this.queryChannels({
          query: t,
          guildId: n.getGuildId(),
          limit: true,
          fuzzy: true,
          filter: e => null == i || i.includes(e.type),
          type: r,
          allowEmptyQueries: true
        }).map(e => e.record)
      }
    },
    queryApplicationCommandChannelResults(e) {
      let {
        query: t,
        channel: n,
        channelTypes: r,
        limit: i = es.rnv,
        allowSnowflake: o
      } = e;
      if (null == n.guild_id) {
        let e = [];
        return (null == r || r.includes(n.type)) && e.push(n), {
          channels: e
        }
      }
      let a = [];
      for (let e of eY) a = a.concat(this.queryChannels({
        query: t,
        guildId: n.guild_id,
        limit: i,
        fuzzy: true,
        filter: e => null == r || r.includes(e.type),
        type: e,
        allowEmptyQueries: true,
        requireVocalConnectAccess: false,
        allowSnowflake: o
      }));
      return a = a.filter(e => {
        let {
          record: t
        } = e;
        return "null" !== t.id
      }).sort(p.Z), null != i && a.length > i && (a = a.slice(0, i)), {
        channels: a.map(e => e.record)
      }
    },
    queryChoiceResults(e) {
      let {
        query: t,
        choices: n
      } = e;
      return {
        choices: this.queryChoice({
          query: t,
          choices: n,
          limit: null
        }).map(e => e.choice)
      }
    },
    queryEmojiResults(e) {
      let {
        query: t,
        channel: n,
        intention: r,
        maxCount: i = es.rnv,
        matchComparator: o
      } = e;
      return D.DZ.loadIfNecessary(), {
        emojis: m.ZP.searchWithoutFetchingLatest({
          channel: n,
          query: t,
          count: i,
          intention: r,
          matchComparator: o
        })
      }
    },
    queryStickers(e) {
      let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
        [n, r] = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [null, eM],
        {
          stickerMetadata: i
        } = N.Z,
        o = q.default.getCurrentUser(),
        a = new Set,
        l = [];
      for (let s of (D.DZ.loadIfNecessary(), e)) {
        if ("" === s) continue;
        let e = s.toLocaleLowerCase(),
          c = (0, eo._I)(e),
          u = RegExp("^".concat(er.Z.escape(c)), "i"),
          d = RegExp("".concat(er.Z.escape(c)), "i");
        i.forEach((i, s) => {
          let c = 0,
            f = null,
            _ = N.Z.getStickerById(s);
          if (null == _ || !r(_, (0, A.cO)(_, o, n))) return;
          for (let n of i) {
            let {
              type: r,
              value: i
            } = n, o = eX(r), a = 0;
            t ? i === e ? a = eb * o : u.test(i) ? a = ey * o : (r === R.MO.GUILD_NAME || r === R.MO.PACK_NAME || r === R.MO.STICKER_NAME) && d.test(i) && (a = eO * o) : i === e && (a = eb * o, f = i), a > c && (c = a, f = i)
          }
          let p = C.Z.stickerFrecencyWithoutFetchingLatest.getScore(s);
          null != p && (c *= p / 100), c > 0 && null != f && !a.has(_.id) && (a.add(_.id), l.push({
            sticker: _,
            comparator: f,
            score: c
          }))
        })
      }
      return 0 === (l = s()(l).sortBy(e => false * e.score).value()).length && (l = eU), l
    },
    querySoundmoji(e, t) {
      let n = q.default.getCurrentUser();
      T.Z.isFetching() || T.Z.hasFetchedAllSounds() || (0, I.w)(), D.DZ.loadIfNecessary();
      let r = Array.from(T.Z.getSounds().values()).reduce((e, n) => (n.forEach(n => {
        (0, v.Z)(n, null == t ? true : t.guild_id, null == t ? true : t.id) && e.push(n)
      }), e), []);
      return (0, S.cK)(e, r, n, t)
    },
    queryGames(e) {
      let t = g.ZP.getRunningVerifiedApplicationIds();
      null == X.Z.lastFetched && u.N();
      let n = X.Z.applicationStatistics;

      function r(r) {
        let i = 0,
          a = r.name.toLowerCase(),
          s = e.toLowerCase();
        return r.id === s ? i += 1e3 : a === s ? i += 5 : a.startsWith(s) ? i += 4 : a.includes(s) ? i += 3 : a.endsWith(s) ? i += 2 : o()(s, a) && (i += 1), i > 0 && (t.includes(r.id) && (i += 10), r.id in n && (i += 2), eu.gQ.has(r.id) && (i += eu.gQ.get(r.id) / eu.gQ.size)), i
      }
      let i = U.Z.games;
      return s()(i).filter(e => !(0, O.N)(e)).map(e => ({
        game: e,
        score: r(e)
      })).filter(e => {
        let {
          score: t
        } = e;
        return t > 0
      }).sortBy(e => {
        let {
          score: t
        } = e;
        return t
      }).map(e => {
        let {
          game: t
        } = e;
        return t
      }).reverse().value().slice(0, es.rnv)
    },
    matchSentinel: (e, t, n) => !ek.test(t) && e === n,
    hasSameRoleAsUsername(e, t) {
      if (!t.hasUniqueUsername()) returnfalse;
      let n = F.Z.getGuild(e.getGuildId());
      for (let {
          name: e
        }
        of null != n ? Z.Z.getSortedRoles(n.id) : [])
        if (t.username.startsWith(e.toLowerCase())) returntrue;
      returnfalse
    }
  }