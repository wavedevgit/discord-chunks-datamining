/** Chunk was on web.js **/
/** chunk id: 248465, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Ay: () => tt,
  FR: () => ey,
  L3: () => eZ,
  X3: () => eq,
  zy: () => ez
}), require("./896048.js"), require("./747238.js"), require("./591487.js"), require("./727858.js"), require("./321073.js"), require("./638769.js"), require("./667532.js"), require("./812715.js"), require("./264879.js"), require("./114821.js"), require("./339614.js");
var Chunk91871 = require("./91871.js"),
  a = require.n(Chunk91871),
  Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
  Chunk896170 = require("./896170.js"),
  Chunk870844 = require("./870844.js"),
  Chunk661439 = require("./661439.js"),
  Chunk329308 = require("./329308.js"),
  Chunk989133 = require("./989133.js"),
  Chunk47167 = require("./47167.js"),
  Chunk857157 = require("./857157.js"),
  Chunk182014 = require("./182014.js"),
  Chunk626584 = require("./626584.js"),
  Chunk508675 = require("./508675.js"),
  Chunk15285 = require("./15285.js"),
  Chunk352505 = require("./352505.js"),
  Chunk202776 = require("./202776.js"),
  Chunk473529 = require("./473529.js"),
  Chunk69945 = require("./69945.js"),
  Chunk796774 = require("./796774.js"),
  Chunk209932 = require("./209932.js"),
  Chunk147472 = require("./147472.js"),
  Chunk361670 = require("./361670.js"),
  Chunk931959 = require("./931959.js"),
  Chunk679382 = require("./679382.js"),
  Chunk842086 = require("./842086.js"),
  Chunk863005 = require("./863005.js"),
  Chunk152007 = require("./152007.js"),
  Chunk735321 = require("./735321.js"),
  Chunk594061 = require("./594061.js"),
  Chunk95701 = require("./95701.js"),
  Chunk34457 = require("./34457.js"),
  Chunk427157 = require("./427157.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk760751 = require("./760751.js"),
  Chunk205761 = require("./205761.js"),
  Chunk808728 = require("./808728.js"),
  Chunk696451 = require("./696451.js"),
  Chunk317525 = require("./317525.js"),
  Chunk71393 = require("./71393.js"),
  Chunk320501 = require("./320501.js"),
  Chunk576705 = require("./576705.js"),
  Chunk290863 = require("./290863.js"),
  Chunk994500 = require("./994500.js"),
  Chunk309010 = require("./309010.js"),
  Chunk967198 = require("./967198.js"),
  Chunk287809 = require("./287809.js"),
  Chunk90165 = require("./90165.js"),
  Chunk67480 = require("./67480.js"),
  Chunk583613 = require("./583613.js"),
  Chunk403362 = require("./403362.js"),
  Chunk860689 = require("./860689.js"),
  Chunk695184 = require("./695184.js"),
  Chunk488926 = require("./488926.js"),
  Chunk257120 = require("./257120.js"),
  Chunk661191 = require("./661191.js"),
  Chunk240248 = require("./240248.js"),
  Chunk427262 = require("./427262.js"),
  Chunk652215 = require("./652215.js"),
  Chunk926140 = require("./926140.js"),
  Chunk746080 = require("./746080.js"),
  Chunk282435 = require("./282435.js"),
  Chunk985018 = require("./985018.jsx");

function e_(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function eh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      e_(e, t, n[t])
    })
  }
  return e
}

function em(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function eg(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : em(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let eE = (0, Chunk870844.y)(() => ({
  options: []
}));

function ey(e) {
  eE.setState({
    options: e
  })
}
let eb = new Chunk626584.A("AutocompleteUtils"),
  eO = 10,
  ev = 8,
  eA = 7,
  eI = 5,
  eS = 3,
  eT = 1,
  eC = 1,
  eN = 3,
  ew = 5,
  eR = 3,
  eP = 11,
  eD = 6,
  eL = 8,
  ex = 1,
  eM = 1e3,
  ej = .2,
  ek = .1,
  eU = 50,
  eG = () => true,
  eF = /(\t|\s)/,
  eV = [],
  eB = (r = require("./966382.js").A).MENTION_EVERYONE,
  eH = r.MENTION_HERE,
  eY = r.MENTION_GAME,
  eW = r.MENTION_TIMESTAMP,
  eK = r.LAUNCHABLE_APPLICATIONS;

function ez() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 0,
    t = arguments.length > 1 ? arguments[1] : true;
  return eM * e * (null != t ? t : 1)
}

function eq(e) {
  var t, n;
  let r = F.A.getFrequentlyWithoutFetchingLatest(),
    i = r.reduce((e, t) => {
      let {
        id: n
      } = t, r = F.A.getScoreWithoutFetchingLatest(n);
      return r > e ? r : e
    }, 0),
    a = [];
  switch (e) {
    case eu.rD.GUILD:
      a = r.filter(e => (0, en.fh)(e));
      break;
    case eu.rD.USER:
      a = r.filter(e => e instanceof x.YB && e.type === ec.rbe.DM);
      break;
    case eu.rD.GROUP_DM:
      a = r.filter(e => e instanceof x.YB && e.isMultiUserDM());
      break;
    case eu.rD.TEXT_CHANNEL:
      a = r.filter(e => e instanceof x.YB && (0, x.tr)(e.type));
      break;
    case eu.rD.VOICE_CHANNEL:
      a = r.filter(e => e instanceof x.YB && e.isGuildVocal())
  }
  let o = {};
  for (let t of a) {
    let {
      id: n
    } = t, r = F.A.getScoreWithoutFetchingLatest(n);
    if (e === eu.rD.USER && t instanceof x.cq) {
      if (t.type === ec.rbe.DM) o[n = t.getRecipientId()] = 1 + r / i;
      else if (t.type === ec.rbe.GROUP_DM) {
        let e = t.recipients.length;
        for (let n of t.recipients) o[n] = 1 + r / i * (1 / e)
      }
    } else o[n] = 1 + r / i
  }
  for (let e of q.A.getFriendIDs()) o[e] = (null != (t = o[e]) ? t : 1) + ej;
  for (let e of U.A.getDMUserIds()) o[e] = (null != (n = o[e]) ? n : 1) + ek;
  return o
}
let eZ = [Chunk808728.I6, Chunk808728.vM, Chunk652215.rbe.GUILD_CATEGORY];

function eQ(e, t) {
  return e.split(/(?:,| )+/).every(e => RegExp(ea.A.escape(e), "i").test(t))
}

function eX(e, t) {
  let {
    exactQuery: n,
    containQuery: r,
    queryLower: i
  } = t, o = !(arguments.length > 2) || true === arguments[2] || arguments[2];
  try {
    if (n.test(e)) {
      if (e.toLocaleLowerCase() === i) return eO;
      return eA
    }
    if (r.test(e)) return eI;
    if (eQ(i, e)) return eS;
    if (o && a()(i, e)) return eT
  } catch (e) {
    eb.error(e)
  }
  return 0
}

function eJ(e) {
  return (null == e ? true : e.joinedAt) != null && !e.isPending
}

function e$(e) {
  if (null == e) return [null, null];
  let t = (0, es.sS)(e),
    n = (0, es.S8)(t);
  return [t, n]
}

function e0(e) {
  let {
    query: t,
    members: n,
    limit: r,
    filter: i,
    allowSnowflake: o,
    boosters: s
  } = e, l = X.default.getUsers(), c = Q.A.getGuildId(), u = t.toLocaleLowerCase(), d = (0, es.S8)(u), p = [], _ = [], h = n.length, m = 0, g = 0;
  for (; m < h;) {
    var E, y, b, O, v, A, I, S, T;
    let e, r, f = n[m];
    f instanceof j.A ? (r = f, e = null == (y = B.Ay.getNick(c, r.id)) ? true : y.toLocaleLowerCase()) : (e = null == (b = f.nick) ? true : b.toLocaleLowerCase(), r = l[f.userId]);
    let h = null == (E = el.Ay.getGlobalName(r)) ? true : E.toLocaleLowerCase();
    if (null != r && (null == i || i(r))) {
      let n = r.username.toLocaleLowerCase(),
        i = (0, es.sS)(n),
        l = (0, es.S8)(i),
        [c, f] = e$(e),
        [m, E] = e$(h);
      o && t === r.id || n.substring(0, u.length) === u || i.substring(0, u.length) === u || (null == e ? true : e.substring(0, u.length)) === u || (null == c ? true : c.substring(0, u.length)) === u || (null == h ? true : h.substring(0, u.length)) === u || (null == m ? true : m.substring(0, u.length)) === u ? p.push({
        type: eu.rD.USER,
        record: r,
        score: ez(eO, null == s ? true : s[r.id]),
        comparator: null != (O = null != h ? h : e) ? O : n,
        sortable: null != (v = null != m ? m : c) ? v : i
      }) : l.substring(0, d.length) === d || (null == f ? true : f.substring(0, d.length)) === d || (null == E ? true : E.substring(0, d.length)) === d ? p.push({
        type: eu.rD.USER,
        record: r,
        score: ez(eT, null == s ? true : s[r.id]),
        comparator: null != (A = null != h ? h : e) ? A : n,
        sortable: null != (I = null != m ? m : c) ? I : i
      }) : g < eU && (a()(u, i) || a()(d, l) || null != c && a()(u, c) || null != f && a()(d, f) || null != m && a()(u, m) || null != E && a()(d, E)) && (_.push({
        type: eu.rD.USER,
        record: r,
        score: ez(eT, null == s ? true : s[r.id]),
        comparator: null != (S = null != h ? h : e) ? S : n,
        sortable: null != (T = null != m ? m : c) ? T : i
      }), g += 1)
    }
    m += 1
  }
  return p.sort(f.A), p.length < r && (_.sort(f.A), p = p.concat(_.slice(0, Math.max(0, r - p.length)))), p.length > r && (p.length = r), p
}

function e1(e) {
  switch (e) {
    case w.cG.STICKER_NAME:
      return eP;
    case w.cG.CORRELATED_EMOJI:
      return eD;
    case w.cG.TAG:
      return ex;
    case w.cG.GUILD_NAME:
    case w.cG.PACK_NAME:
      return eL;
    default:
      return 1
  }
}

function e2(e) {
  return e === V.I6 || e !== V.vM && !!(0, x.fT)(e)
}

function e3(e, t, n) {
  return e === t || (!!n || !!(0, x.zy)(t)) && (e === V.I6 ? (0, x.tr)(t) || (0, x.ay)(t) : e === V.vM && (0, x.ay)(t))
}

function e6(e, t) {
  return e === V.I6 && (0, x.ay)(t)
}

function e4(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = e.split(" ").filter(e => "" !== e || t).map(e => {
      let t = e.toLocaleLowerCase();
      return {
        queryLower: t,
        exactQuery: RegExp("^".concat(ea.A.escape(t)), "i"),
        containQuery: RegExp(ea.A.escape(t), "i"),
        isFullMatch: false
      }
    });
  if (e.includes(" ")) {
    let t = e.toLocaleLowerCase();
    n.unshift({
      queryLower: t,
      exactQuery: RegExp("^".concat(ea.A.escape(t).replace(" ", "( |-)")), "i"),
      containQuery: RegExp(ea.A.escape(t).replace(" ", "( |-)"), "i"),
      isFullMatch: true
    })
  }
  return n
}

function e5(e, t, n) {
  let r = 0,
    i = null;
  for (let a of t) {
    let t = eX(e, a, n);
    t > r && (r = t, i = a)
  }
  return null != i && (i.isFullMatch ? t.length = 0 : t.splice(t.indexOf(i), 1)), r
}

function e7(e, t) {
  if (null == e.guild_id) return;
  let n = t[e.guild_id];
  if (null == n) {
    var r;
    n = t[e.guild_id] = null == (r = Y.A.getGuild(e.guild_id)) ? true : r.name.toLocaleLowerCase()
  }
  return n
}

function e8(e, t) {
  if (null == e.parent_id) return;
  let n = t[e.parent_id];
  if (null == n) {
    var r;
    n = t[e.parent_id] = null == (r = U.A.getChannel(e.parent_id)) ? true : r.name.toLocaleLowerCase()
  }
  return n
}

function e9(e, t) {
  let n = U.A.getChannel(e);
  return null == e || null == n ? [] : s()(W.A.getMessages(e).toArray()).reverse().uniqBy(e => e.author.id).map(e => X.default.getUser(e.author.id)).filter(e => {
    if (null == e || e.isNonUserBot()) returnfalse;
    let t = n.getGuildId();
    return null == t || eJ(B.Ay.getMember(t, e.id))
  }).map(e => {
    var t;
    let r = n.getGuildId(),
      i = null != r ? B.Ay.getMember(r, e.id) : null;
    return {
      type: eu.rD.USER,
      record: e,
      score: 0,
      comparator: null != (t = null == i ? true : i.nick) ? t : el.Ay.getName(e)
    }
  }).take(t).value()
}
let te = (0, Chunk583613.L_)((e, t, n) => {
    let r = new Map,
      i = new Map,
      a = [];
    return s()(U.A.getMutablePrivateChannels()).values().value().forEach(e => {
      if (e.isDM()) {
        let t = e.getRecipientId(),
          n = X.default.getUser(t);
        null == t || null == n || r.has(t) || (r.set(t, e), a.push({
          userId: t,
          nick: q.A.getNickname(t)
        }), i.set(t, n))
      }
    }), {
      channelsByRecipientId: r,
      recipientsById: i,
      recipients: a
    }
  }),
  tt = {
    queryFriends(e) {
      let {
        query: t,
        limit: n = 10,
        _fuzzy: r = true,
        filter: i
      } = e;
      return e0({
        query: t,
        members: q.A.getFriendIDs().map(e => X.default.getUser(e)).filter(et.Vq),
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
      return e0({
        query: t,
        members: U.A.getDMUserIds().map(e => X.default.getUser(e)).filter(et.Vq),
        limit: n,
        filter: r
      })
    },
    queryChannelUsers(e) {
      let t, {
          channelId: n,
          query: r,
          limit: i = 10,
          request: a = true,
          checkRecentlyTalkedOnEmptyQuery: o = true,
          allowSnowflake: s = false
        } = e,
        l = U.A.getChannel(n);
      if (null == l) return [];
      let c = l.isThread() ? U.A.getChannel(l.parent_id) : null,
        u = null != c ? c : l;
      if (null == u) return [];
      if (u.isPrivate()) {
        t = u.recipients.map(e => {
          var t;
          return {
            userId: e,
            nick: null != (t = q.A.getNickname(e)) ? t : null
          }
        });
        let e = X.default.getCurrentUser();
        null != e && t.push({
          userId: e.id,
          nick: null
        })
      } else {
        if (0 === r.length && o) {
          let e = e9(l.id, i);
          if (e.length > 0) return e
        }
        t = B.Ay.getMembers(u.guild_id).filter(eJ), a && er.A.requestMembers(u.guild_id, r, i)
      }
      return e0({
        query: r,
        members: t,
        limit: i,
        filter: e => u.isPrivate() || ei.$3({
          permission: ec.xBc.VIEW_CHANNEL,
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
        checkRecentlyTalkedOnEmptyQuery: a = true,
        filter: o,
        allowSnowflake: s
      } = e;
      if (null == Y.A.getGuild(t)) return [];
      if (0 === n.length && a) {
        let e = e9(Z.A.getChannelId(t), r);
        if (e.length > 0) return e
      }
      let l = B.Ay.getMembers(t).filter(eJ);
      return i && n.length > 0 && er.A.requestMembers(t, n, r), e0({
        query: n,
        members: l,
        limit: r,
        filter: o,
        allowSnowflake: s
      })
    },
    queryUsers(e) {
      let {
        query: t,
        filter: n,
        boosters: r,
        limit: i = 10,
        users: a,
        allowSnowflake: o
      } = e;
      return e0({
        query: t,
        members: a,
        limit: i,
        filter: n,
        allowSnowflake: o,
        boosters: r
      })
    },
    queryAllUsers(e) {
      let {
        query: t,
        filter: n,
        boosters: r,
        limit: i = 10,
        request: a = true
      } = e;
      return a && t.length > 0 && er.A.requestMembers(null, t, i), this.queryUsers({
        query: t,
        limit: i,
        request: a,
        filter: n,
        boosters: r,
        users: s()(X.default.getUsers()).values().value()
      })
    },
    queryChannels(e) {
      let t, {
          query: n,
          guildId: r,
          limit: i = ec.rs7,
          fuzzy: a = true,
          filter: o = eG,
          type: l = V.I6,
          allowEmptyQueries: c = false,
          requireVocalConnectAccess: u = true,
          boosters: d = {},
          allowSnowflake: _,
          includeAllThreads: h
        } = e,
        m = e4(n, c),
        g = e2(l);
      t = null != r ? s()(V.Ay.getChannels(r)[l]).map(e => e.channel).concat(g ? h ? U.A.getAllThreadsForGuild(r) : R.A.computeAllActiveJoinedThreads(r) : []).value() : s()(U.A.loadAllGuildAndPrivateChannelsFromDisk()).values().concat(g ? R.A.computeAllActiveJoinedThreads() : []).value();
      let E = {},
        y = [],
        b = F.A.getMaxScore();
      for (let e of t) {
        var O;
        if (!e3(l, e.type, null != r) || (0, x.zy)(e.type) && !K.A.can(u ? e.accessPermissions : ec.xBc.VIEW_CHANNEL, e) || !o(e)) continue;
        let t = [...m],
          i = e.name.toLocaleLowerCase(),
          s = _ && n === e.id,
          c = s ? eO : e5(i, t, a);
        if (0 !== c) {
          if (t.length > 0) {
            for (let n of [e7(e, E), e8(e, E)]) {
              if (null == n || "" === n) continue;
              let e = e5(n, t, false);
              0 !== e && (c += .5 * e)
            }
            c = Math.min(eA - eT, c)
          }
          0 !== c && !(t.length > 1) && (1 !== t.length || t[0].isFullMatch || s) && (e6(l, e.type) && (c = Math.max(c - eC, eT / 2)), e.isThread() && (e.isActiveThread() || (c -= eN), P.A.hasJoined(e.id) || (c -= ew)), c = Math.min(c + Math.min(null != (O = F.A.getScoreWithoutFetchingLatest(e.id)) ? O : 0 / b, 1) * eR, c >= eA ? eO : eA), y.push({
            type: (0, x.ay)(e.type) ? eu.rD.VOICE_CHANNEL : eu.rD.TEXT_CHANNEL,
            record: e,
            score: ez(c, d[e.id]),
            comparator: (0, p.m1)(e, X.default, q.A),
            sortable: i
          }))
        }
      }
      return y.sort(f.A), null != i && y.length > i && (y.length = i), y
    },
    queryGuilds(e) {
      let {
        query: t,
        limit: n = 10,
        fuzzy: r = true,
        allowSnowflake: i,
        filter: a = eG,
        boosters: o = {}
      } = e, s = "" === t ? "" : t.toLocaleLowerCase(), l = {
        exactQuery: RegExp("^".concat(ea.A.escape(s)), "i"),
        containQuery: RegExp(ea.A.escape(s), "i"),
        queryLower: s
      }, c = [];
      for (let e of Y.A.getGuildsArray()) {
        if (!a(e)) continue;
        let n = e.name.toLocaleLowerCase(),
          s = i && t === e.id ? eO : eX(n, l, r);
        s > 0 && c.push({
          type: eu.rD.GUILD,
          record: e,
          score: ez(s, o[e.id]),
          comparator: e.name,
          sortable: n
        })
      }
      return c.sort(f.A), c.length > n && (c.length = n), c
    },
    queryDMChannels(e) {
      let {
        query: t,
        limit: n = 10,
        boosters: r = {}
      } = e, {
        channelsByRecipientId: i,
        recipientsById: a,
        recipients: o
      } = te(U.A.getPrivateChannelsVersion(), q.A.getVersion(), X.default.getUserStoreVersion()), s = e0({
        query: t,
        members: o,
        limit: o.length,
        boosters: r
      }), l = [];
      return s.forEach(e => {
        let t = i.get(e.record.id);
        null != t && l.push({
          type: eu.rD.DM,
          record: t,
          score: e.score,
          comparator: el.Ay.getUserTag(a.get(e.record.id)),
          sortable: e.sortable
        })
      }), l.sort(f.A), l.length > n && (l.length = n), l
    },
    queryGroupDMs(e) {
      let {
        query: t,
        limit: n = 10,
        fuzzy: r = true,
        filter: i = eG,
        boosters: a = {}
      } = e, o = (0, es.sS)((0, es.S8)(t.toLocaleLowerCase())), l = {
        exactQuery: RegExp("^".concat(ea.A.escape(o)), "i"),
        containQuery: RegExp(ea.A.escape(o), "i"),
        queryLower: o
      }, c = s()(U.A.getMutablePrivateChannels()).values().value(), u = [];
      for (let e of c) {
        if (!e.isMultiUserDM() || !i(e)) continue;
        let t = (0, p.m1)(e, X.default, q.A).toLocaleLowerCase(),
          n = (0, es.sS)((0, es.S8)(t)),
          o = eX(n, l, r),
          s = [];
        for (let t of e.recipients) {
          let e = X.default.getUser(t);
          if (null == e) continue;
          let n = e.username,
            r = el.Ay.getGlobalName(e),
            i = q.A.getNickname(t);
          null != n && s.push(n), null != r && s.push(r), null != i && s.push(i)
        }
        for (let e of s) {
          let t = Math.min(eI, eX((0, es.sS)((0, es.S8)(e.toLocaleLowerCase())), l, r));
          t > o && (o = t)
        }
        o > 0 && u.push({
          type: eu.rD.GROUP_DM,
          record: e,
          score: ez(o, a[e.id]),
          comparator: (0, p.m1)(e, X.default, q.A),
          sortable: n
        })
      }
      return u.sort(f.A), u.length > n && (u.length = n), u
    },
    queryApplications(e) {
      let {
        query: t,
        limit: n = 10,
        fuzzy: r = true,
        filter: i = eG
      } = e, a = t.toLocaleLowerCase(), o = {
        exactQuery: RegExp("^".concat(ea.A.escape(a)), "i"),
        containQuery: RegExp(ea.A.escape(a), "i"),
        queryLower: a
      }, s = eK(), l = [];
      for (let {
          application: e
        }
        of s) {
        if (!i(e)) continue;
        let t = e.name.toLocaleLowerCase(),
          n = eX(t, o, r);
        n > 0 && l.push({
          type: eu.rD.APPLICATION,
          record: e,
          score: n,
          comparator: e.name,
          sortable: t
        })
      }
      return l.sort(f.A), l.length > n && (l.length = n), l
    },
    queryInAppNavigations(e) {
      let {
        query: t,
        limit: r = 10,
        fuzzy: i = true
      } = e, a = t.toLocaleLowerCase(), s = {
        exactQuery: RegExp("^".concat(ea.A.escape(a)), "i"),
        containQuery: RegExp(ea.A.escape(a), "i"),
        queryLower: a
      }, l = el.Ay.getUserIsStaff(), c = {
        [d.t1.SHOP]: [ep.intl.string(ep.t.pWG4ze)],
        [d.t1.SHOP_ORBS_TAB]: [ep.intl.string(ep.t.ElYQFS), ep.intl.string(ep.t.pWG4ze), ep.intl.string(ep.t.EBYkzk)],
        [d.t1.QUEST_ORBS]: [ep.intl.string(ep.t.ElYQFS), ep.intl.string(ep.t["v/R2aC"]), ep.intl.string(ep.t.qQR4tn)],
        [d.t1.NITRO_HOME]: [ep.intl.string(ep.t.Ipxkog)],
        [d.t1.QUEST_HOME]: [ep.intl.string(ep.t.JALI2K)],
        [d.t1.APPS_HOME]: [ep.intl.string(ep.t.PHjkRE), ep.intl.string(ep.t.AKcFUj)]
      }, u = [];
      for (let e in c) {
        let t = d.t1[e],
          n = c[t];
        if (null != n)
          for (let e of n) {
            let n = e.toLocaleLowerCase(),
              r = eX(n, s, i);
            r > 0 && u.push({
              type: eu.rD.IN_APP_NAVIGATION,
              record: d.SV.fromType(t),
              score: ez(r),
              comparator: n,
              sortable: n
            })
          }
      }
      if (l) {
        let {
          componentPlaygroundConfigs: e
        } = n(944771);
        for (let t of e.flatMap(e => e.collections)) {
          var p;
          for (let e of ["".concat(t.name, " Playground"), "".concat(t.name, " Components"), "".concat(t.name, " Design System"), t.name, ...null != (p = t.tags) ? p : []]) {
            let n = e.toLocaleLowerCase(),
              r = eX(n, s, i);
            if (r > 0) {
              u.push({
                type: eu.rD.IN_APP_NAVIGATION,
                record: d.SV.fromType(d.t1.PLAYGROUND, true, "".concat(t.name, " Playground"), t.id, t.IconComponent),
                score: ez(r),
                comparator: n,
                sortable: n
              });
              break
            }
          }
        }
      }
      return eE.getState().options.forEach(e => {
        var t;
        let n = [e.title].concat(e.searchableTitles),
          r = null != (t = (0, o.max)(n.map(e => ez(eX(e.toLocaleLowerCase(), s, i))))) ? t : 0;
        r > 0 && u.push({
          type: eu.rD.IN_APP_NAVIGATION,
          record: d.SV.fromType(d.t1.SETTINGS, e.path, e.title),
          score: r,
          comparator: e.title.toLocaleLowerCase(),
          sortable: e.title.toLocaleLowerCase()
        })
      }), u.sort(f.A), u.length > r && (u.length = r), u
    },
    querySKUs(e) {
      let {
        query: t,
        limit: n = 10,
        fuzzy: r = true,
        filter: i = eG
      } = e, a = t.toLocaleLowerCase(), o = {
        exactQuery: RegExp("^".concat(ea.A.escape(a)), "i"),
        containQuery: RegExp(ea.A.escape(a), "i"),
        queryLower: a
      }, l = s()($.A.getSKUs()).values().value(), c = [];
      for (let e of l)
        if (e.type === ec.Puh.DURABLE_PRIMARY && i(e)) {
          let t = e.name.toLocaleLowerCase(),
            n = eX(t, o, r);
          n > 0 && c.push({
            type: eu.rD.SKU,
            record: e,
            score: n,
            comparator: e.name,
            sortable: t
          })
        } return c.sort(f.A), c.length > n && (c.length = n), c
    },
    getRecentlyTalked: e9,
    queryMentionResults(e) {
      let {
        query: t,
        channel: n,
        canMentionEveryone: r = false,
        canMentionHere: i = true,
        canMentionUsers: o = true,
        canMentionRoles: c = true,
        canMentionOtherGlobals: u = true,
        includeAllGuildUsers: d = false,
        includeNonMentionableRoles: f = false,
        checkRecentlyTalkedOnEmptyQuery: p = true,
        limit: h = ec.rs7,
        request: m,
        allowSnowflake: g = false
      } = e, E = o ? (d && null != n.guild_id ? this.queryGuildUsers({
        guildId: n.guild_id,
        query: t,
        limit: h,
        checkRecentlyTalkedOnEmptyQuery: p,
        request: m,
        allowSnowflake: g
      }) : this.queryChannelUsers({
        channelId: n.id,
        query: t,
        limit: h,
        checkRecentlyTalkedOnEmptyQuery: p,
        allowSnowflake: g
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
          nick: B.Ay.getNick(n.guild_id, t.id),
          status: z.A.getStatus(t.id)
        }
      }) : [], b = E.length, O = t.toLowerCase(), v = [];
      if (b < h && c) {
        let e = n.getGuildId(),
          i = Y.A.getGuild(e);
        if (null != i) {
          let n = s()(H.A.getSortedRoles(i.id)).filter(t => {
            let {
              mentionable: n,
              name: i,
              id: o
            } = t;
            return (n || r || f) && (a()(O, i.toLowerCase()) || g && O === o) && o !== eo.default.castGuildIdAsEveryoneGuildRoleId(e)
          }).value();
          v = (0, l.Ht)(n, t, {
            keys: ["name"]
          }).slice(0, h - b), b += v.length
        }
      }
      let A = [];
      !n.isPrivate() && r && c && (b < h && a()(O, eB().test) && (A.push(eB()), b += 1), i && b < h && a()(O, eH().test) && (A.push(eH()), b += 1));
      let I = y.M.getCurrentConfig({
        guildId: n.guild_id,
        location: "mention autocomplete"
      }, {
        autoTrackExposure: true
      }).enabled;
      return r && I && null != eY && (b < h || 0 === O.length) && a()(O, eY().test) && (b >= h && (A.length > 0 ? A.pop() : v.length > 0 ? v.pop() : E.length > 0 && E.pop()), A.push(eY()), b += 1), _.A.getConfig({
        location: "mention autocomplete"
      }).enabled && u && null != eW && ((b < h || 0 === O.length) && a()(O, eW().test) || O === eW().test) && (b >= h && (v.length > 0 ? v.pop() : E.length > 0 && E.pop()), A.push(eW()), b += 1), {
        users: E,
        globals: A,
        roles: v
      }
    },
    queryGuildMentionResults(e) {
      let {
        query: t,
        guildId: n,
        canMentionEveryone: r = false,
        canMentionUsers: i = true,
        canMentionRoles: o = true,
        canMentionNonMentionableRoles: l = false
      } = e, c = i ? this.queryGuildUsers({
        guildId: n,
        query: t
      }).map(e => eg(eh({}, e), {
        status: z.A.getStatus(e.record.id)
      })) : [], u = c.length, d = t.toLowerCase(), f = [];
      if (u < ec.rs7 && o) {
        let e = Y.A.getGuild(n);
        null != e && (s()(H.A.getSortedRoles(e.id)).filter(e => (e.mentionable || r || l) && a()(d, e.name.toLowerCase()) && !(0, M.Oy)(e)).take(ec.rs7 - u).forEach(e => {
          f.push(e)
        }), u += f.length)
      }
      let p = [];
      return r && o && (u < ec.rs7 && a()(d, eB().test) && (p.push(eB()), u += 1), u < ec.rs7 && a()(d, eH().test) && p.push(eH())), {
        users: c,
        globals: p,
        roles: f
      }
    },
    queryChoice(e) {
      let {
        query: t,
        choices: n,
        limit: r = 10,
        fuzzy: i = true
      } = e, a = t.toLocaleLowerCase(), o = RegExp("^".concat(ea.A.escape(a)), "i"), l = RegExp(ea.A.escape(a), "i"), c = s()(n).map((e, t) => {
        let n = eX(e.displayName.toLocaleLowerCase(), {
          exactQuery: o,
          containQuery: l,
          queryLower: a
        }, i);
        return n > 0 ? {
          choice: e,
          score: n,
          originalIndex: t
        } : null
      }).filter(et.Vq).sortBy(e => false * e.score);
      return null !== r && (c = c.take(r)), c.value()
    },
    queryStaticRouteChannels(e) {
      let {
        query: t,
        guild: n
      } = e, r = t.toLocaleLowerCase(), i = {
        exactQuery: RegExp("^".concat(ea.A.escape(r)), "i"),
        containQuery: RegExp(ea.A.escape(r), "i"),
        queryLower: r
      }, a = (0, O.K)(n.id) && !n.features.has(ec.GuildFeatures.HUB), o = n.features.has(ec.GuildFeatures.COMMUNITY), s = (0, b.u)(n) && n.features.has(ec.GuildFeatures.COMMUNITY), l = [{
        id: ed.T4.SERVER_GUIDE,
        name: ep.intl.string(ep.t.VbpLyU)
      }, {
        id: ed.T4.CHANNEL_BROWSER,
        name: ep.intl.string(ep.t.et6wav)
      }, {
        id: ed.T4.CUSTOMIZE_COMMUNITY,
        name: ep.intl.string(ep.t.h9mGOP)
      }], c = [];
      for (let e of l)(e.id !== ed.T4.SERVER_GUIDE || a) && (e.id !== ed.T4.CHANNEL_BROWSER || o) && (e.id !== ed.T4.CUSTOMIZE_COMMUNITY || s) && eX(e.name.toLocaleLowerCase(), i, false) > 0 && c.push(new x.jb({
        id: e.id,
        name: e.name,
        type: ec.rbe.UNKNOWN,
        guild_id: n.id
      }));
      return c
    },
    queryChannelResults(e) {
      let {
        query: t,
        channel: n,
        type: r = V.I6,
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
        limit: i = ec.rs7,
        allowSnowflake: a
      } = e;
      if (null == n.guild_id) {
        let e = [];
        return (null == r || r.includes(n.type)) && e.push(n), {
          channels: e
        }
      }
      let o = [];
      for (let e of eZ) o = o.concat(this.queryChannels({
        query: t,
        guildId: n.guild_id,
        limit: i,
        fuzzy: true,
        filter: e => null == r || r.includes(e.type),
        type: e,
        allowEmptyQueries: true,
        requireVocalConnectAccess: false,
        allowSnowflake: a
      }));
      return o = o.filter(e => {
        let {
          record: t
        } = e;
        return "null" !== t.id
      }).sort(h.A), null != i && o.length > i && (o = o.slice(0, i)), {
        channels: o.map(e => e.record)
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
        maxCount: i = ec.rs7,
        matchComparator: a
      } = e;
      return L.bW.loadIfNecessary(), {
        emojis: g.Ay.searchWithoutFetchingLatest({
          channel: n,
          query: t,
          count: i,
          intention: r,
          matchComparator: a
        })
      }
    },
    queryStickers(e) {
      let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
        [n, r] = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [null, eG],
        i = X.default.getCurrentUser(),
        a = new Set,
        o = [];
      for (let s of (L.bW.loadIfNecessary(), e)) {
        if ("" === s) continue;
        let e = s.toLocaleLowerCase(),
          l = (0, es.sS)(e),
          c = RegExp("^".concat(ea.A.escape(l)), "i"),
          u = RegExp("".concat(ea.A.escape(l)), "i");
        N.A.getStickerMetadataArrays().forEach(s => {
          s.forEach((s, l) => {
            let d = 0,
              f = null,
              p = N.A.getStickerById(l);
            if (null == p || !r(p, (0, T.W$)(p, i, n))) return;
            for (let n of s) {
              let {
                type: r,
                value: i
              } = n, a = e1(r), o = 0;
              t ? i === e ? o = eO * a : c.test(i) ? o = eA * a : (r === w.cG.GUILD_NAME || r === w.cG.PACK_NAME || r === w.cG.STICKER_NAME) && u.test(i) && (o = eI * a) : i === e && (o = eO * a, f = i), o > d && (d = o, f = i)
            }
            let _ = C.A.stickerFrecencyWithoutFetchingLatest.getScore(l);
            null != _ && (d *= _ / 100), d > 0 && null != f && !a.has(p.id) && (a.add(p.id), o.push({
              sticker: p,
              comparator: f,
              score: d
            }))
          })
        })
      }
      return 0 === (o = s()(o).sortBy(e => false * e.score).value()).length && (o = eV), o
    },
    querySoundmoji(e, t) {
      let n = X.default.getCurrentUser();
      I.A.isFetching() || I.A.hasFetchedAllSounds() || (0, A.E7)(), L.bW.loadIfNecessary();
      let r = Array.from(I.A.getSounds().values()).reduce((e, n) => (n.forEach(n => {
        (0, v.A)(n, null == t ? true : t.guild_id, null == t ? true : t.id) && e.push(n)
      }), e), []);
      return (0, S.lG)(e, r, n, t)
    },
    queryGames(e) {
      let t = E.Ay.getRunningVerifiedApplicationIds();
      null == J.A.lastFetched && u.X();
      let n = J.A.applicationStatistics;

      function r(r) {
        let i = 0,
          o = r.name.toLowerCase(),
          s = e.toLowerCase();
        return r.id === s ? i += 1e3 : o === s ? i += 5 : o.startsWith(s) ? i += 4 : o.includes(s) ? i += 3 : o.endsWith(s) ? i += 2 : a()(s, o) && (i += 1), i > 0 && (t.includes(r.id) && (i += 10), r.id in n && (i += 2), ef.Bf.has(r.id) && (i += ef.Bf.get(r.id) / ef.Bf.size)), i
      }
      let i = G.A.games;
      return s()(i).filter(e => !(0, D.nS)(e)).map(e => ({
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
      }).reverse().value().slice(0, ec.rs7)
    },
    queryMentionSuggestionResults(e) {
      let {
        query: t,
        channel: n,
        limit: r = 3,
        boosters: i,
        onlyExactMatch: a = false
      } = e, o = n.isPrivate() ? n.recipients.map(e => {
        var t;
        return {
          userId: e,
          nick: null != (t = q.A.getNickname(e)) ? t : null
        }
      }) : B.Ay.getMembers(n.guild_id).filter(eJ), s = k.default.getId(), l = X.default.getUsers(), c = Q.A.getGuildId(), u = t.toLocaleLowerCase(), d = (0, es.S8)(u), p = [];
      c: for (let e of o) {
        var _, h, m, g;
        let t, o;
        if (p.length >= r) break;
        if (e instanceof j.A ? (o = e, t = null == (m = B.Ay.getNick(c, o.id)) ? true : m.toLocaleLowerCase()) : (t = null == (g = e.nick) ? true : g.toLocaleLowerCase(), o = l[e.userId]), null == o || o.id === s || o.bot) continue;
        let f = null == (_ = q.A.getNickname(o.id)) ? true : _.toLocaleLowerCase(),
          E = null == (h = el.Ay.getGlobalName(o)) ? true : h.toLocaleLowerCase();
        if (!ei.$3({
            permission: ec.xBc.VIEW_CHANNEL,
            user: o,
            context: n
          }) && !n.isPrivate()) continue;
        let y = (e, n, r) => {
            p.push({
              user: o,
              score: ez(n, null == i ? true : i[o.id]),
              matchType: e,
              comparator: r,
              nick: t,
              status: z.A.getStatus(o.id)
            })
          },
          b = o.username.toLocaleLowerCase(),
          O = (0, es.sS)(b),
          v = (0, es.S8)(O),
          [A, I] = e$(t),
          [S, T] = e$(f),
          [C, N] = e$(E),
          w = [
            [b, b],
            [O, b],
            [t, t],
            [A, t],
            [f, f],
            [S, f],
            [E, E],
            [C, E]
          ].filter(e => null != e[0] && null != e[1]);
        for (let [e, t] of w)
          if (u === e) {
            y("exact", eO, t);
            continue c
          } let R = /\s+|\.|_/;
        for (let [e, t] of w)
          if (u === e.split(R, 1)[0]) {
            y("exact", ev, t);
            continue c
          } if (!a) {
          for (let [e, t] of w)
            if (e.startsWith(u)) {
              y("starts_with", eA, t);
              continue c
            } for (let [e, n] of [
              [v, b],
              [I, t],
              [T, f],
              [N, E]
            ])
            if (null != e && null != n && e.startsWith(d)) {
              y("starts_with", eA, n);
              continue c
            }
        }
      }
      return p.sort(f.A), p
    },
    matchSentinel: (e, t, n) => !eF.test(t) && e === n,
    hasSameRoleAsUsername(e, t) {
      if (!t.hasUniqueUsername()) returnfalse;
      let n = Y.A.getGuild(e.getGuildId());
      for (let {
          name: e
        }
        of null != n ? H.A.getSortedRoles(n.id) : [])
        if (t.username.startsWith(e.toLowerCase())) returntrue;
      returnfalse
    },
    queryMemberList: e0
  }