/** Chunk was on web.js **/
/** chunk id: 483360, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Cq: () => eW,
  ZP: () => e9,
  gF: () => eE,
  k1: () => eK,
  mB: () => eY
}), require("./388685.js"), require("./35282.js"), require("./413496.js"), require("./433524.js"), require("./539854.js"), require("./642613.js"), require("./290780.js"), require("./704826.js"), require("./583741.js"), require("./361932.js"), require("./187205.js");
var Chunk658722 = require("./658722.js"),
  a = require.n(Chunk658722),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk423802 = require("./423802.js"),
  Chunk509160 = require("./509160.js"),
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
  Chunk314897 = require("./314897.js"),
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

function e_(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function ep(e) {
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

function eh(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function em(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : eh(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let eg = (0, Chunk509160.M)(() => ({
  options: []
}));

function eE(e) {
  eg.setState({
    options: e
  })
}
let eb = new Chunk710845.Z("AutocompleteUtils"),
  ey = 10,
  eO = 8,
  ev = 7,
  eI = 5,
  eT = 3,
  eS = 1,
  eA = 1,
  eC = 3,
  eN = 5,
  eR = 3,
  eP = 11,
  eD = 6,
  ew = 8,
  eL = 1,
  ex = 1e3,
  eM = .2,
  ek = .1,
  ej = 50,
  eU = () => true,
  eG = /(\t|\s)/,
  eB = [],
  eZ = (r = require("./786074.js").Z).MENTION_EVERYONE,
  eF = r.MENTION_HERE,
  eV = r.MENTION_GAME,
  eH = r.LAUNCHABLE_APPLICATIONS;

function eY() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 0,
    t = arguments.length > 1 ? arguments[1] : true;
  return ex * module * (null != exports ? exports : 1)
}

function eW(e) {
  var t, n;
  let r = U.Z.getFrequentlyWithoutFetchingLatest(),
    i = r.reduce((e, t) => {
      let {
        id: n
      } = t, r = U.Z.getScoreWithoutFetchingLatest(n);
      return r > e ? r : e
    }, 0),
    a = [];
  switch (e) {
    case ec.h8.GUILD:
      a = r.filter(e => (0, et.lM)(e));
      break;
    case ec.h8.USER:
      a = r.filter(e => e instanceof L.Sf && e.type === el.d4z.DM);
      break;
    case ec.h8.GROUP_DM:
      a = r.filter(e => e instanceof L.Sf && e.isMultiUserDM());
      break;
    case ec.h8.TEXT_CHANNEL:
      a = r.filter(e => e instanceof L.Sf && (0, L.r8)(e.type));
      break;
    case ec.h8.VOICE_CHANNEL:
      a = r.filter(e => e instanceof L.Sf && e.isGuildVocal())
  }
  let o = {};
  for (let t of a) {
    let {
      id: n
    } = t, r = U.Z.getScoreWithoutFetchingLatest(n);
    if (e === ec.h8.USER && t instanceof L.mn) {
      if (t.type === el.d4z.DM) o[n = t.getRecipientId()] = 1 + r / i;
      else if (t.type === el.d4z.GROUP_DM) {
        let e = t.recipients.length;
        for (let n of t.recipients) o[n] = 1 + r / i * (1 / e)
      }
    } else o[n] = 1 + r / i
  }
  for (let e of K.Z.getFriendIDs()) o[e] = (null != (t = o[e]) ? t : 1) + eM;
  for (let e of j.Z.getDMUserIds()) o[e] = (null != (n = o[e]) ? n : 1) + ek;
  return o
}
let eK = [Chunk984933.sH, Chunk984933.Zb, Chunk981631.d4z.GUILD_CATEGORY];

function ez(e, t) {
  return e.split(/(?:,| )+/).every(e => RegExp(ei.Z.escape(e), "i").test(t))
}

function eq(e, t) {
  let {
    exactQuery: n,
    containQuery: r,
    queryLower: i
  } = t, o = !(arguments.length > 2) || true === arguments[2] || arguments[2];
  try {
    if (n.test(e)) {
      if (e.toLocaleLowerCase() === i) return ey;
      return ev
    }
    if (r.test(e)) return eI;
    if (ez(i, e)) return eT;
    if (o && a()(i, e)) return eS
  } catch (e) {
    eb.error(e)
  }
  return 0
}

function eX(e) {
  return (null == e ? true : e.joinedAt) != null && !e.isPending
}

function eQ(e) {
  if (null == e) return [null, null];
  let t = (0, eo._I)(e),
    n = (0, eo.Fv)(t);
  return [t, n]
}

function eJ(e) {
  let {
    query: t,
    members: n,
    limit: r,
    filter: i,
    allowSnowflake: o,
    boosters: s
  } = e, l = X.default.getUsers(), c = q.Z.getGuildId(), u = t.toLocaleLowerCase(), d = (0, eo.Fv)(u), _ = [], p = [], h = n.length, m = 0, g = 0;
  for (; m < h;) {
    var E, b, y, O, v, I, T, S, A;
    let e, r, f = n[m];
    f instanceof M.Z ? (r = f, e = null == (b = Z.ZP.getNick(c, r.id)) ? true : b.toLocaleLowerCase()) : (e = null == (y = f.nick) ? true : y.toLocaleLowerCase(), r = l[f.userId]);
    let h = null == (E = es.ZP.getGlobalName(r)) ? true : E.toLocaleLowerCase();
    if (null != r && (null == i || i(r))) {
      let n = r.username.toLocaleLowerCase(),
        i = (0, eo._I)(n),
        l = (0, eo.Fv)(i),
        [c, f] = eQ(e),
        [m, E] = eQ(h);
      o && t === r.id || n.substring(0, u.length) === u || i.substring(0, u.length) === u || (null == e ? true : e.substring(0, u.length)) === u || (null == c ? true : c.substring(0, u.length)) === u || (null == h ? true : h.substring(0, u.length)) === u || (null == m ? true : m.substring(0, u.length)) === u ? _.push({
        type: ec.h8.USER,
        record: r,
        score: eY(ey, null == s ? true : s[r.id]),
        comparator: null != (O = null != h ? h : e) ? O : n,
        sortable: null != (v = null != m ? m : c) ? v : i
      }) : l.substring(0, d.length) === d || (null == f ? true : f.substring(0, d.length)) === d || (null == E ? true : E.substring(0, d.length)) === d ? _.push({
        type: ec.h8.USER,
        record: r,
        score: eY(eS, null == s ? true : s[r.id]),
        comparator: null != (I = null != h ? h : e) ? I : n,
        sortable: null != (T = null != m ? m : c) ? T : i
      }) : g < ej && (a()(u, i) || a()(d, l) || null != c && a()(u, c) || null != f && a()(d, f) || null != m && a()(u, m) || null != E && a()(d, E)) && (p.push({
        type: ec.h8.USER,
        record: r,
        score: eY(eS, null == s ? true : s[r.id]),
        comparator: null != (S = null != h ? h : e) ? S : n,
        sortable: null != (A = null != m ? m : c) ? A : i
      }), g += 1)
    }
    m += 1
  }
  return _.sort(f.Z), _.length < r && (p.sort(f.Z), _ = _.concat(p.slice(0, Math.max(0, r - _.length)))), _.length > r && (_.length = r), _
}

function e$(e) {
  switch (e) {
    case R.MO.STICKER_NAME:
      return eP;
    case R.MO.CORRELATED_EMOJI:
      return eD;
    case R.MO.TAG:
      return eL;
    case R.MO.GUILD_NAME:
    case R.MO.PACK_NAME:
      return ew;
    default:
      return 1
  }
}

function e0(e) {
  return e === B.sH || e !== B.Zb && !!(0, L.Q5)(e)
}

function e1(e, t, n) {
  return e === t || (!!n || !!(0, L.Km)(t)) && (e === B.sH ? (0, L.r8)(t) || (0, L.bw)(t) : e === B.Zb && (0, L.bw)(t))
}

function e3(e, t) {
  return e === B.sH && (0, L.bw)(t)
}

function e2(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = e.split(" ").filter(e => "" !== e || t).map(e => {
      let t = e.toLocaleLowerCase();
      return {
        queryLower: t,
        exactQuery: RegExp("^".concat(ei.Z.escape(t)), "i"),
        containQuery: RegExp(ei.Z.escape(t), "i"),
        isFullMatch: false
      }
    });
  if (e.includes(" ")) {
    let t = e.toLocaleLowerCase();
    n.unshift({
      queryLower: t,
      exactQuery: RegExp("^".concat(ei.Z.escape(t).replace(" ", "( |-)")), "i"),
      containQuery: RegExp(ei.Z.escape(t).replace(" ", "( |-)"), "i"),
      isFullMatch: true
    })
  }
  return n
}

function e4(e, t, n) {
  let r = 0,
    i = null;
  for (let a of t) {
    let t = eq(e, a, n);
    t > r && (r = t, i = a)
  }
  return null != i && (i.isFullMatch ? t.length = 0 : t.splice(t.indexOf(i), 1)), r
}

function e8(e, t) {
  if (null == e.guild_id) return;
  let n = t[e.guild_id];
  if (null == n) {
    var r;
    n = t[e.guild_id] = null == (r = V.Z.getGuild(e.guild_id)) ? true : r.name.toLocaleLowerCase()
  }
  return n
}

function e5(e, t) {
  if (null == e.parent_id) return;
  let n = t[e.parent_id];
  if (null == n) {
    var r;
    n = t[e.parent_id] = null == (r = j.Z.getChannel(e.parent_id)) ? true : r.name.toLocaleLowerCase()
  }
  return n
}

function e6(e, t) {
  let n = j.Z.getChannel(e);
  return null == e || null == n ? [] : s()(H.Z.getMessages(e).toArray()).reverse().uniqBy(e => e.author.id).map(e => X.default.getUser(e.author.id)).filter(e => {
    if (null == e || e.isNonUserBot()) returnfalse;
    let t = n.getGuildId();
    return null == t || eX(Z.ZP.getMember(t, e.id))
  }).map(e => {
    var t;
    let r = n.getGuildId(),
      i = null != r ? Z.ZP.getMember(r, e.id) : null;
    return {
      type: ec.h8.USER,
      record: e,
      score: 0,
      comparator: null != (t = null == i ? true : i.nick) ? t : es.ZP.getName(e)
    }
  }).take(t).value()
}
let e7 = (0, Chunk251625.oH)((e, t, n) => {
    let r = new Map,
      i = new Map,
      a = [];
    return s()(j.Z.getMutablePrivateChannels()).values().value().forEach(e => {
      if (e.isDM()) {
        let t = e.getRecipientId(),
          n = X.default.getUser(t);
        null == t || null == n || r.has(t) || (r.set(t, e), a.push({
          userId: t,
          nick: K.Z.getNickname(t)
        }), i.set(t, n))
      }
    }), {
      channelsByRecipientId: r,
      recipientsById: i,
      recipients: a
    }
  }),
  e9 = {
    queryFriends(e) {
      let {
        query: t,
        limit: n = 10,
        _fuzzy: r = true,
        filter: i
      } = e;
      return eJ({
        query: t,
        members: K.Z.getFriendIDs().map(e => X.default.getUser(e)).filter(ee.lm),
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
      return eJ({
        query: t,
        members: j.Z.getDMUserIds().map(e => X.default.getUser(e)).filter(ee.lm),
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
        l = j.Z.getChannel(n);
      if (null == l) return [];
      let c = l.isThread() ? j.Z.getChannel(l.parent_id) : null,
        u = null != c ? c : l;
      if (null == u) return [];
      if (u.isPrivate()) {
        t = u.recipients.map(e => {
          var t;
          return {
            userId: e,
            nick: null != (t = K.Z.getNickname(e)) ? t : null
          }
        });
        let e = X.default.getCurrentUser();
        null != e && t.push({
          userId: e.id,
          nick: null
        })
      } else {
        if (0 === r.length && o) {
          let e = e6(l.id, i);
          if (e.length > 0) return e
        }
        t = Z.ZP.getMembers(u.guild_id).filter(eX), a && en.Z.requestMembers(u.guild_id, r, i)
      }
      return eJ({
        query: r,
        members: t,
        limit: i,
        filter: e => u.isPrivate() || er.BT({
          permission: el.Plq.VIEW_CHANNEL,
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
      if (null == V.Z.getGuild(t)) return [];
      if (0 === n.length && a) {
        let e = e6(z.Z.getChannelId(t), r);
        if (e.length > 0) return e
      }
      let l = Z.ZP.getMembers(t).filter(eX);
      return i && n.length > 0 && en.Z.requestMembers(t, n, r), eJ({
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
      return eJ({
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
      return a && t.length > 0 && en.Z.requestMembers(null, t, i), this.queryUsers({
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
          limit: i = el.rnv,
          fuzzy: a = true,
          filter: o = eU,
          type: l = B.sH,
          allowEmptyQueries: c = false,
          requireVocalConnectAccess: u = true,
          boosters: d = {},
          allowSnowflake: p,
          includeAllThreads: h
        } = e,
        m = e2(n, c),
        g = e0(l);
      t = null != r ? s()(B.ZP.getChannels(r)[l]).map(e => e.channel).concat(g ? h ? j.Z.getAllThreadsForGuild(r) : P.Z.computeAllActiveJoinedThreads(r) : []).value() : s()(j.Z.loadAllGuildAndPrivateChannelsFromDisk()).values().concat(g ? P.Z.computeAllActiveJoinedThreads() : []).value();
      let E = {},
        b = [],
        y = U.Z.getMaxScore();
      for (let e of t) {
        var O;
        if (!e1(l, e.type, null != r) || (0, L.Km)(e.type) && !Y.Z.can(u ? e.accessPermissions : el.Plq.VIEW_CHANNEL, e) || !o(e)) continue;
        let t = [...m],
          i = e.name.toLocaleLowerCase(),
          s = p && n === e.id,
          c = s ? ey : e4(i, t, a);
        if (0 !== c) {
          if (t.length > 0) {
            for (let n of [e8(e, E), e5(e, E)]) {
              if (null == n || "" === n) continue;
              let e = e4(n, t, false);
              0 !== e && (c += .5 * e)
            }
            c = Math.min(ev - eS, c)
          }
          0 !== c && !(t.length > 1) && (1 !== t.length || t[0].isFullMatch || s) && (e3(l, e.type) && (c = Math.max(c - eA, eS / 2)), e.isThread() && (e.isActiveThread() || (c -= eC), D.Z.hasJoined(e.id) || (c -= eN)), c = Math.min(c + Math.min(null != (O = U.Z.getScoreWithoutFetchingLatest(e.id)) ? O : 0 / y, 1) * eR, c >= ev ? ey : ev), b.push({
            type: (0, L.bw)(e.type) ? ec.h8.VOICE_CHANNEL : ec.h8.TEXT_CHANNEL,
            record: e,
            score: eY(c, d[e.id]),
            comparator: (0, _.F6)(e, X.default, K.Z),
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
        filter: a = eU,
        boosters: o = {}
      } = e, s = "" === t ? "" : t.toLocaleLowerCase(), l = {
        exactQuery: RegExp("^".concat(ei.Z.escape(s)), "i"),
        containQuery: RegExp(ei.Z.escape(s), "i"),
        queryLower: s
      }, c = [];
      for (let e of V.Z.getGuildsArray()) {
        if (!a(e)) continue;
        let n = e.name.toLocaleLowerCase(),
          s = i && t === e.id ? ey : eq(n, l, r);
        s > 0 && c.push({
          type: ec.h8.GUILD,
          record: e,
          score: eY(s, o[e.id]),
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
        recipientsById: a,
        recipients: o
      } = e7(j.Z.getPrivateChannelsVersion(), K.Z.getVersion(), X.default.getUserStoreVersion()), s = eJ({
        query: t,
        members: o,
        limit: o.length,
        boosters: r
      }), l = [];
      return s.forEach(e => {
        let t = i.get(e.record.id);
        null != t && l.push({
          type: ec.h8.DM,
          record: t,
          score: e.score,
          comparator: es.ZP.getUserTag(a.get(e.record.id)),
          sortable: e.sortable
        })
      }), l.sort(f.Z), l.length > n && (l.length = n), l
    },
    queryGroupDMs(e) {
      let {
        query: t,
        limit: n = 10,
        fuzzy: r = true,
        filter: i = eU,
        boosters: a = {}
      } = e, o = (0, eo._I)((0, eo.Fv)(t.toLocaleLowerCase())), l = {
        exactQuery: RegExp("^".concat(ei.Z.escape(o)), "i"),
        containQuery: RegExp(ei.Z.escape(o), "i"),
        queryLower: o
      }, c = s()(j.Z.getMutablePrivateChannels()).values().value(), u = [];
      for (let e of c) {
        if (!e.isMultiUserDM() || !i(e)) continue;
        let t = (0, _.F6)(e, X.default, K.Z).toLocaleLowerCase(),
          n = (0, eo._I)((0, eo.Fv)(t)),
          o = eq(n, l, r),
          s = [];
        for (let t of e.recipients) {
          let e = X.default.getUser(t);
          if (null == e) continue;
          let n = e.username,
            r = es.ZP.getGlobalName(e),
            i = K.Z.getNickname(t);
          null != n && s.push(n), null != r && s.push(r), null != i && s.push(i)
        }
        for (let e of s) {
          let t = Math.min(eI, eq((0, eo._I)((0, eo.Fv)(e.toLocaleLowerCase())), l, r));
          t > o && (o = t)
        }
        o > 0 && u.push({
          type: ec.h8.GROUP_DM,
          record: e,
          score: eY(o, a[e.id]),
          comparator: (0, _.F6)(e, X.default, K.Z),
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
        filter: i = eU
      } = e, a = t.toLocaleLowerCase(), o = {
        exactQuery: RegExp("^".concat(ei.Z.escape(a)), "i"),
        containQuery: RegExp(ei.Z.escape(a), "i"),
        queryLower: a
      }, s = eH(), l = [];
      for (let {
          application: e
        }
        of s) {
        if (!i(e)) continue;
        let t = e.name.toLocaleLowerCase(),
          n = eq(t, o, r);
        n > 0 && l.push({
          type: ec.h8.APPLICATION,
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
        limit: r = 10,
        fuzzy: i = true
      } = e, a = t.toLocaleLowerCase(), s = {
        exactQuery: RegExp("^".concat(ei.Z.escape(a)), "i"),
        containQuery: RegExp(ei.Z.escape(a), "i"),
        queryLower: a
      }, l = es.ZP.getUserIsStaff(), c = {
        [d.Ky.SHOP]: [ef.intl.string(ef.t.pWG4ze)],
        [d.Ky.NITRO_HOME]: [ef.intl.string(ef.t.Ipxkog)],
        [d.Ky.QUEST_HOME]: [ef.intl.string(ef.t.JALI2K)],
        [d.Ky.APPS_HOME]: [ef.intl.string(ef.t.PHjkRE), ef.intl.string(ef.t.AKcFUj)]
      }, u = [];
      for (let e in c) {
        let t = d.Ky[e],
          n = c[t];
        if (null != n)
          for (let e of n) {
            let n = e.toLocaleLowerCase(),
              r = eq(n, s, i);
            r > 0 && u.push({
              type: ec.h8.IN_APP_NAVIGATION,
              record: d.FL.fromType(t),
              score: eY(r),
              comparator: n,
              sortable: n
            })
          }
      }
      if (l) {
        let {
          componentPlaygroundConfigs: e
        } = n(653592);
        for (let t of e.flatMap(e => e.collections))
          for (let e of ["".concat(t.name, " Playground"), "".concat(t.name, " Components"), "".concat(t.name, " Design System"), t.name]) {
            let n = e.toLocaleLowerCase(),
              r = eq(n, s, i);
            if (r > 0) {
              u.push({
                type: ec.h8.IN_APP_NAVIGATION,
                record: d.FL.fromType(d.Ky.PLAYGROUND, true, "".concat(t.name, " Playground"), t.id),
                score: eY(r),
                comparator: n,
                sortable: n
              });
              break
            }
          }
      }
      return eg.getState().options.forEach(e => {
        var t;
        let n = [e.title].concat(e.searchableTitles),
          r = null != (t = (0, o.max)(n.map(e => eY(eq(e.toLocaleLowerCase(), s, i))))) ? t : 0;
        r > 0 && u.push({
          type: ec.h8.IN_APP_NAVIGATION,
          record: d.FL.fromType(d.Ky.SETTINGS, e.path, e.title),
          score: r,
          comparator: e.title.toLocaleLowerCase(),
          sortable: e.title.toLocaleLowerCase()
        })
      }), u.sort(f.Z), u.length > r && (u.length = r), u
    },
    querySKUs(e) {
      let {
        query: t,
        limit: n = 10,
        fuzzy: r = true,
        filter: i = eU
      } = e, a = t.toLocaleLowerCase(), o = {
        exactQuery: RegExp("^".concat(ei.Z.escape(a)), "i"),
        containQuery: RegExp(ei.Z.escape(a), "i"),
        queryLower: a
      }, l = s()(J.Z.getSKUs()).values().value(), c = [];
      for (let e of l)
        if (e.type === el.epS.DURABLE_PRIMARY && i(e)) {
          let t = e.name.toLocaleLowerCase(),
            n = eq(t, o, r);
          n > 0 && c.push({
            type: ec.h8.SKU,
            record: e,
            score: n,
            comparator: e.name,
            sortable: t
          })
        } return c.sort(f.Z), c.length > n && (c.length = n), c
    },
    getRecentlyTalked: e6,
    queryMentionResults(e) {
      let {
        query: t,
        channel: n,
        canMentionEveryone: r = false,
        canMentionHere: i = true,
        canMentionUsers: o = true,
        canMentionRoles: c = true,
        includeAllGuildUsers: u = false,
        includeNonMentionableRoles: d = false,
        checkRecentlyTalkedOnEmptyQuery: f = true,
        limit: _ = el.rnv,
        request: p,
        allowSnowflake: h = false
      } = e, m = o ? (u && null != n.guild_id ? this.queryGuildUsers({
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
          nick: Z.ZP.getNick(n.guild_id, t.id),
          status: W.Z.getStatus(t.id)
        }
      }) : [], g = m.length, b = t.toLowerCase(), y = [];
      if (g < _ && c) {
        let e = n.getGuildId(),
          i = V.Z.getGuild(e);
        if (null != i) {
          let n = s()(F.Z.getSortedRoles(i.id)).filter(t => {
            let {
              mentionable: n,
              name: i,
              id: o
            } = t;
            return (n || r || d) && (a()(b, i.toLowerCase()) || h && b === o) && o !== ea.default.castGuildIdAsEveryoneGuildRoleId(e)
          }).value();
          y = (0, l.Lu)(n, t, {
            keys: ["name"]
          }).slice(0, _ - g), g += y.length
        }
      }
      let O = [];
      !n.isPrivate() && r && c && (g < _ && a()(b, eZ().test) && (O.push(eZ()), g += 1), i && g < _ && a()(b, eF().test) && (O.push(eF()), g += 1));
      let v = E.N.getCurrentConfig({
        guildId: n.guild_id,
        location: "mention autocomplete"
      }, {
        autoTrackExposure: true
      }).enabled;
      return r && v && null != eV && (g < _ || 0 === b.length) && a()(b, eV().test) && (g >= _ && (O.length > 0 ? O.pop() : y.length > 0 ? y.pop() : m.length > 0 && m.pop()), O.push(eV()), g += 1), {
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
        canMentionRoles: o = true,
        canMentionNonMentionableRoles: l = false
      } = e, c = i ? this.queryGuildUsers({
        guildId: n,
        query: t
      }).map(e => em(ep({}, e), {
        status: W.Z.getStatus(e.record.id)
      })) : [], u = c.length, d = t.toLowerCase(), f = [];
      if (u < el.rnv && o) {
        let e = V.Z.getGuild(n);
        null != e && (s()(F.Z.getSortedRoles(e.id)).filter(e => (e.mentionable || r || l) && a()(d, e.name.toLowerCase()) && !(0, x.fI)(e)).take(el.rnv - u).forEach(e => {
          f.push(e)
        }), u += f.length)
      }
      let _ = [];
      return r && o && (u < el.rnv && a()(d, eZ().test) && (_.push(eZ()), u += 1), u < el.rnv && a()(d, eF().test) && _.push(eF())), {
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
      } = e, a = t.toLocaleLowerCase(), o = RegExp("^".concat(ei.Z.escape(a)), "i"), l = RegExp(ei.Z.escape(a), "i"), c = s()(n).map((e, t) => {
        let n = eq(e.displayName.toLocaleLowerCase(), {
          exactQuery: o,
          containQuery: l,
          queryLower: a
        }, i);
        return n > 0 ? {
          choice: e,
          score: n,
          originalIndex: t
        } : null
      }).filter(ee.lm).sortBy(e => false * e.score);
      return null !== r && (c = c.take(r)), c.value()
    },
    queryStaticRouteChannels(e) {
      let {
        query: t,
        guild: n
      } = e, r = t.toLocaleLowerCase(), i = {
        exactQuery: RegExp("^".concat(ei.Z.escape(r)), "i"),
        containQuery: RegExp(ei.Z.escape(r), "i"),
        queryLower: r
      }, a = (0, y.s)(n.id) && !n.features.has(el.GuildFeatures.HUB), o = n.features.has(el.GuildFeatures.COMMUNITY), s = (0, b.t)(n) && n.features.has(el.GuildFeatures.COMMUNITY), l = [{
        id: eu.HY.SERVER_GUIDE,
        name: ef.intl.string(ef.t.VbpLyU)
      }, {
        id: eu.HY.CHANNEL_BROWSER,
        name: ef.intl.string(ef.t.et6wav)
      }, {
        id: eu.HY.CUSTOMIZE_COMMUNITY,
        name: ef.intl.string(ef.t.h9mGOP)
      }], c = [];
      for (let e of l)(e.id !== eu.HY.SERVER_GUIDE || a) && (e.id !== eu.HY.CHANNEL_BROWSER || o) && (e.id !== eu.HY.CUSTOMIZE_COMMUNITY || s) && eq(e.name.toLocaleLowerCase(), i, false) > 0 && c.push(new L.nl({
        id: e.id,
        name: e.name,
        type: el.d4z.UNKNOWN,
        guild_id: n.id
      }));
      return c
    },
    queryChannelResults(e) {
      let {
        query: t,
        channel: n,
        type: r = B.sH,
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
        limit: i = el.rnv,
        allowSnowflake: a
      } = e;
      if (null == n.guild_id) {
        let e = [];
        return (null == r || r.includes(n.type)) && e.push(n), {
          channels: e
        }
      }
      let o = [];
      for (let e of eK) o = o.concat(this.queryChannels({
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
      }).sort(p.Z), null != i && o.length > i && (o = o.slice(0, i)), {
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
        maxCount: i = el.rnv,
        matchComparator: a
      } = e;
      return w.DZ.loadIfNecessary(), {
        emojis: m.ZP.searchWithoutFetchingLatest({
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
        [n, r] = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [null, eU],
        i = X.default.getCurrentUser(),
        a = new Set,
        o = [];
      for (let s of (w.DZ.loadIfNecessary(), e)) {
        if ("" === s) continue;
        let e = s.toLocaleLowerCase(),
          l = (0, eo._I)(e),
          c = RegExp("^".concat(ei.Z.escape(l)), "i"),
          u = RegExp("".concat(ei.Z.escape(l)), "i");
        N.Z.getStickerMetadataArrays().forEach(s => {
          s.forEach((s, l) => {
            let d = 0,
              f = null,
              _ = N.Z.getStickerById(l);
            if (null == _ || !r(_, (0, A.cO)(_, i, n))) return;
            for (let n of s) {
              let {
                type: r,
                value: i
              } = n, a = e$(r), o = 0;
              t ? i === e ? o = ey * a : c.test(i) ? o = ev * a : (r === R.MO.GUILD_NAME || r === R.MO.PACK_NAME || r === R.MO.STICKER_NAME) && u.test(i) && (o = eI * a) : i === e && (o = ey * a, f = i), o > d && (d = o, f = i)
            }
            let p = C.Z.stickerFrecencyWithoutFetchingLatest.getScore(l);
            null != p && (d *= p / 100), d > 0 && null != f && !a.has(_.id) && (a.add(_.id), o.push({
              sticker: _,
              comparator: f,
              score: d
            }))
          })
        })
      }
      return 0 === (o = s()(o).sortBy(e => false * e.score).value()).length && (o = eB), o
    },
    querySoundmoji(e, t) {
      let n = X.default.getCurrentUser();
      T.Z.isFetching() || T.Z.hasFetchedAllSounds() || (0, I.w)(), w.DZ.loadIfNecessary();
      let r = Array.from(T.Z.getSounds().values()).reduce((e, n) => (n.forEach(n => {
        (0, v.Z)(n, null == t ? true : t.guild_id, null == t ? true : t.id) && e.push(n)
      }), e), []);
      return (0, S.cK)(e, r, n, t)
    },
    queryGames(e) {
      let t = g.ZP.getRunningVerifiedApplicationIds();
      null == Q.Z.lastFetched && u.N();
      let n = Q.Z.applicationStatistics;

      function r(r) {
        let i = 0,
          o = r.name.toLowerCase(),
          s = e.toLowerCase();
        return r.id === s ? i += 1e3 : o === s ? i += 5 : o.startsWith(s) ? i += 4 : o.includes(s) ? i += 3 : o.endsWith(s) ? i += 2 : a()(s, o) && (i += 1), i > 0 && (t.includes(r.id) && (i += 10), r.id in n && (i += 2), ed.gQ.has(r.id) && (i += ed.gQ.get(r.id) / ed.gQ.size)), i
      }
      let i = G.Z.games;
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
      }).reverse().value().slice(0, el.rnv)
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
          nick: null != (t = K.Z.getNickname(e)) ? t : null
        }
      }) : Z.ZP.getMembers(n.guild_id).filter(eX), s = k.default.getId(), l = X.default.getUsers(), c = q.Z.getGuildId(), u = t.toLocaleLowerCase(), d = (0, eo.Fv)(u), _ = [];
      c: for (let e of o) {
        var p, h, m, g;
        let t, o;
        if (_.length >= r) break;
        e instanceof M.Z ? (o = e, t = null == (m = Z.ZP.getNick(c, o.id)) ? true : m.toLocaleLowerCase()) : (t = null == (g = e.nick) ? true : g.toLocaleLowerCase(), o = l[e.userId]);
        let f = null == (p = K.Z.getNickname(o.id)) ? true : p.toLocaleLowerCase(),
          E = null == (h = es.ZP.getGlobalName(o)) ? true : h.toLocaleLowerCase();
        if (null == o || o.id === s || o.bot || !er.BT({
            permission: el.Plq.VIEW_CHANNEL,
            user: o,
            context: n
          }) && !n.isPrivate()) continue;
        let b = (e, n, r) => {
            _.push({
              user: o,
              score: eY(n, null == i ? true : i[o.id]),
              matchType: e,
              comparator: r,
              nick: t,
              status: W.Z.getStatus(o.id)
            })
          },
          y = o.username.toLocaleLowerCase(),
          O = (0, eo._I)(y),
          v = (0, eo.Fv)(O),
          [I, T] = eQ(t),
          [S, A] = eQ(f),
          [C, N] = eQ(E),
          R = [
            [y, y],
            [O, y],
            [t, t],
            [I, t],
            [f, f],
            [S, f],
            [E, E],
            [C, E]
          ].filter(e => null != e[0] && null != e[1]);
        for (let [e, t] of R)
          if (u === e) {
            b("exact", ey, t);
            continue c
          } let P = /\s+|\.|_/;
        for (let [e, t] of R)
          if (u === e.split(P, 1)[0]) {
            b("exact", eO, t);
            continue c
          } if (!a) {
          for (let [e, t] of R)
            if (e.startsWith(u)) {
              b("starts_with", ev, t);
              continue c
            } for (let [e, n] of [
              [v, y],
              [T, t],
              [A, f],
              [N, E]
            ])
            if (null != e && null != n && e.startsWith(d)) {
              b("starts_with", ev, n);
              continue c
            }
        }
      }
      return _.sort(f.Z), _
    },
    matchSentinel: (e, t, n) => !eG.test(t) && e === n,
    hasSameRoleAsUsername(e, t) {
      if (!t.hasUniqueUsername()) returnfalse;
      let n = V.Z.getGuild(e.getGuildId());
      for (let {
          name: e
        }
        of null != n ? F.Z.getSortedRoles(n.id) : [])
        if (t.username.startsWith(e.toLowerCase())) returntrue;
      returnfalse
    }
  }