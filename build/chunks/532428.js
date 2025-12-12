/** Chunk was on web.js **/
/** chunk id: 532428, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ej: () => eb,
  Ni: () => J,
  Pr: () => en,
  Qe: () => ef,
  WK: () => eg,
  ZP: () => eO,
  _m: () => eE,
  co: () => ey,
  fx: () => z,
  mh: () => eh
}), require("./388685.js"), require("./413496.js"), require("./433524.js"), require("./35282.js"), require("./781311.js"), require("./804061.js"), require("./704826.js"), require("./539854.js"), require("./290780.js"), require("./642613.js");
var Chunk658722 = require("./658722.js"),
  i = require.n(Chunk658722),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk913527 = require("./913527.js"),
  l = require.n(Chunk913527),
  Chunk212819 = require("./212819.js"),
  Chunk933557 = require("./933557.js"),
  Chunk592125 = require("./592125.js"),
  Chunk984933 = require("./984933.js"),
  Chunk699516 = require("./699516.js"),
  Chunk944486 = require("./944486.js"),
  Chunk246946 = require("./246946.js"),
  Chunk594174 = require("./594174.js"),
  Chunk483360 = require("./483360.js"),
  Chunk226951 = require("./226951.js"),
  Chunk51144 = require("./51144.js"),
  Chunk738018 = require("./738018.js"),
  Chunk719801 = require("./719801.js"),
  Chunk607802 = require("./607802.js"),
  Chunk612806 = require("./612806.js"),
  Chunk375123 = require("./375123.js"),
  Chunk28964 = require("./28964.js"),
  Chunk129301 = require("./129301.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function P(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function R(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      P(e, t, n[t])
    })
  }
  return e
}

function w(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function D(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : w(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function x() {
  return new Set(l().months().map(e => e.toLowerCase()))
}

function L() {
  return new Set(l().weekdays().map(e => e.toLowerCase()))
}

function j() {
  let e = new Date().getFullYear();
  return new Set(a().range(2015, module + 1).map(e => e.toString()))
}

function M(e, t) {
  return [e, e.clone().add(1, t)]
}

function k(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 0;
  return M(l()().startOf(e).add(t, e), e)
}

function U(e, t, n) {
  return M(l()(e, t).local(), n)
}

function G() {
  return {
    [Chunk388032.intl.string(Chunk388032.t.HYiVEQ)]: () => k("day"),
    [Chunk388032.intl.string(Chunk388032.t.cu86KC)]: () => k("day", false),
    [Chunk388032.intl.string(Chunk388032.t["FvBj/6"])]: () => k("week"),
    [Chunk388032.intl.string(Chunk388032.t["20uWCw"])]: () => k("month"),
    [Chunk388032.intl.string(Chunk388032.t["dXC/hn"])]: () => k("year")
  }
}
let Z = "([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})",
  F = "\\d{4}",
  B = "([0-9]{4})-([0-9]{1,2})",
  V = "([^\\d\\s]+)",
  H = RegExp("(?:\\s*(".concat(Z, "|").concat(B, "|").concat(F, "|").concat(V, "))"), "i"),
  Y = RegExp("\\s*(true|false)", "i");

function W(e) {
  return "".concat(e, ":")
}

function K(e) {
  return RegExp(W(e), "i")
}

function z(e) {
  let t, n = e.getMatch(1),
    r = e => null != e ? null == e ? true : e.id : null;
  return null != (t = A.Xyh.test(n) ? n : r(n === A.ME ? h.default.getCurrentUser() : null != e.getMatch(4) ? h.default.findByTag(e.getMatch(4)) : h.default.findByTag(e.getMatch(2), e.getMatch(3)))) && (e.setData("userId", t), true)
}

function q(e, t) {
  let n, r, i = e.getFullMatch().trim().toLowerCase(),
    o = G()[i];
  return null != o ? [n, r] = o() : x().has(i) ? [n, r] = U(i, "MMMM", "month") : L().has(i) ? [n, r] = U(i, "dddd", "day") : j().has(i) ? [n, r] = U(i, "YYYY", "year") : [n, r] = U(i, A.b2L, "day"), !!(n.isValid() && r.isValid()) && ("before" === t ? (r = n, n = null) : "after" === t && (n = r, r = null), e.setData("start", n), e.setData("end", r), true)
}

function Q(e, t, n) {
  let r = f.ZP.getChannels(n)[f.sH].concat(f.ZP.getChannels(n)[f.Zb]),
    i = f.ZP.getTextChannelNameDisambiguations(n),
    o = S.Z.getCurrentConfig({
      location: "guildChannelValidator"
    }).enabled,
    s = a().chain(r).map(e => {
      let {
        channel: t
      } = e;
      return t
    }).concat(o && null != n ? d.Z.getAllThreadsForGuild(n) : []).filter(e => {
      var n, r;
      return t === (null != (r = null == (n = i[e.id]) ? true : n.name) ? r : e.name)
    }).value();
  return (null == s ? true : s.length) > 0 && (e.setData("channelIds", s.map(e => e.id)), true)
}

function X(e, t) {
  let n = Object.values(d.Z.getMutablePrivateChannels()).filter(e => {
    if (e.isGroupDM() && t === (0, u.F6)(e, h.default, p.Z)) returntrue;
    if (e.isDM()) {
      let n = e.getRecipientId(),
        r = h.default.getUser(n);
      return null != r && t === b.ZP.getUserTag(r)
    }
    returnfalse
  });
  return (null == n ? true : n.length) > 0 && (e.setData("channelIds", n.map(e => e.id)), true)
}

function J(e, t) {
  let n = e.getMatch(1);
  return A.Xyh.test(n) ? (e.setData("channelIds", [n]), true) : (n.startsWith('"') && n.endsWith('"') && (n = n.substring(1, n.length - 1).replaceAll(/\\(.)/g, (e, t) => t)), (0, v.b7)(t)) ? Q(e, n, t.guildId) : t.type === A.aib.DMS && !m.Z.hidePersonalInformation && X(e, n)
}

function $(e) {
  let t = {
    [N.intl.string(N.t.ZNR2fi)]: "link",
    [N.intl.string(N.t["20uQR3"])]: "embed",
    [N.intl.string(N.t.L4lxyE)]: "poll",
    [N.intl.string(N.t.nrpA5E)]: "snapshot",
    [N.intl.string(N.t["AV/v6i"])]: "file",
    [N.intl.string(N.t.XM9XGP)]: "video",
    [N.intl.string(N.t.TNLcpx)]: "image",
    [N.intl.string(N.t.F8Wf0e)]: "sound",
    [N.intl.string(N.t.PJgX2h)]: "sticker"
  } [e.getMatch(1)];
  return null != t && "" !== t && (e.setData("has", t), true)
}

function ee(e) {
  let t = {
    [N.intl.string(N.t.tPZo4p)]: "user",
    [N.intl.string(N.t.JL7sRS)]: "bot",
    [N.intl.string(N.t.WjkIKU)]: "webhook"
  } [e.getMatch(1)];
  return null != t && "" !== t && (e.setData("author_type", t), true)
}

function et() {
  return [...Array.from(x()), ...Array.from(L()), ...Array.from(j()), ...Object.keys(G())]
}

function en() {
  return a().sample(et())
}

function er(e, t, n) {
  return ei(e, t, et()).map(e => D(R({}, e), {
    group: n,
    key: "".concat(n, "-").concat(e.text)
  }))
}

function ei(e, t, n) {
  let r = e.toLocaleLowerCase();
  return a()(n).filter(e => i()(r, e.toLocaleLowerCase())).take(t).map(e => ({
    text: e
  })).value()
}

function eo(e) {
  if (null == e) return [];
  let t = new Set,
    n = [];
  e.forEach(e => {
    let t = e.getData("channelIds");
    null != t && t.forEach(e => n.push(e))
  });
  let r = e => {
      null == e || t.has(e.id) || (i.push(e), t.add(e.id))
    },
    i = [];
  return n.forEach(e => {
    let t = d.Z.getChannel(e);
    if (null != t)
      if (t.isDM()) {
        let e = t.getRecipientId();
        r(h.default.getUser(e))
      } else t.isGroupDM() && t.recipients.forEach(e => {
        r(h.default.getUser(e))
      })
  }), i
}

function ea(e) {
  let {
    query: t,
    searchContext: n,
    maxResults: r = 10,
    tokens: i
  } = e, o = {
    query: t = t.trim().split("#")[0],
    limit: r,
    request: false,
    boosters: (0, g.Cq)(c.h8.USER)
  }, a = [];
  switch (n.type) {
    case A.aib.GUILD:
    case A.aib.GUILD_CHANNEL:
    case A.aib.THREAD:
      if (0 === t.length) {
        let e = [],
          t = new Set,
          i = n => {
            null == n || t.has(n.id) || p.Z.isBlockedOrIgnored(n.id) || (e.push({
              user: n,
              text: b.ZP.getUserTag(n)
            }), t.add(n.id))
          },
          o = _.Z.getCurrentlySelectedChannelId(n.guildId);
        return g.ZP.getRecentlyTalked(o, r).forEach(e => {
          let {
            record: t
          } = e;
          return i(t)
        }), O.Z.getRecentMessageAuthorIds(n.guildId).forEach(e => i(h.default.getUser(e))), e.slice(0, r)
      }
      a = g.ZP.queryGuildUsers(D(R({}, o), {
        guildId: n.guildId
      }));
      break;
    case A.aib.CHANNEL:
      a = g.ZP.queryChannelUsers(D(R({}, o), {
        channelId: n.channelId
      }));
      break;
    case A.aib.DMS:
      let s = eo(null != i ? i : []);
      if (null != s && s.length > 0) {
        let e = h.default.getCurrentUser();
        null != e && s.push(e), a = g.ZP.queryUsers(D(R({}, o), {
          users: s,
          boosters: (0, g.Cq)(c.h8.USER)
        }))
      } else a = g.ZP.queryAllUsers(D(R({}, o), {
        boosters: (0, g.Cq)(c.h8.USER)
      }));
      break;
    default:
      return []
  }
  let l = h.default.getCurrentUser(),
    u = t.toLowerCase().replace(/^@/, ""),
    d = null != l && t.length > 0 && (N.intl.string(N.t.Qf3ptv).startsWith(u) || A.ME.substr(1).startsWith(u)),
    f = a.filter(e => {
      let {
        record: t
      } = e;
      return !p.Z.isBlockedOrIgnored(t.id) && (!d || t.id !== (null == l ? true : l.id))
    }).map(e => {
      let {
        record: t
      } = e;
      return {
        text: b.ZP.getUserTag(t),
        user: t
      }
    });
  return d && f.unshift({
    text: A.ME,
    user: l
  }), f
}

function es() {
  return !Chunk246946.Z.hidePersonalInformation
}

function el(e, t, n) {
  let r = g.ZP.queryGroupDMs({
      query: e,
      limit: t,
      fuzzy: true,
      boosters: (0, g.Cq)(c.h8.GROUP_DM)
    }),
    i = g.ZP.queryDMChannels({
      query: e,
      limit: t,
      boosters: (0, g.Cq)(c.h8.USER)
    }),
    o = a()(r.concat(i)).sort(c.qU).map(e => {
      let {
        record: t,
        comparator: n
      } = e;
      return {
        text: n,
        channel: t,
        key: null == t ? true : t.id
      }
    }).filter(e => null != e.text && null != e.channel && null != e.key).value();
  if (0 === e.length && n) {
    let e = _.Z.getChannelId(),
      t = d.Z.getChannel(e);
    if (null != t && t.isPrivate()) {
      let n = o.findIndex(t => {
        let {
          channel: n
        } = t;
        return n.id === e
      });
      if (false !== n) {
        let e = o[n];
        o.splice(n, 1), o.unshift(e)
      } else if (t.isGroupDM()) {
        let e = (0, u.F6)(t, h.default, p.Z);
        o.unshift({
          text: e,
          channel: t,
          key: t.id
        })
      } else if (t.isDM()) {
        let e = t.getRecipientId(),
          n = h.default.getUser(e);
        if (null != n) {
          let e = b.ZP.getUserTag(n);
          o.unshift({
            text: e,
            channel: t,
            key: t.id
          })
        }
      }
    }
  }
  return o.slice(0, t)
}

function ec(e, t, n) {
  let r = S.Z.getCurrentConfig({
      location: "getGuildChannelAutocompletions"
    }).enabled,
    i = g.ZP.queryChannels({
      query: e,
      type: f.sH,
      guildId: t,
      limit: 1 / 0,
      allowEmptyQueries: true,
      allowSnowflake: true,
      includeAllThreads: r,
      boosters: (0, g.Cq)(c.h8.TEXT_CHANNEL)
    }).concat(g.ZP.queryChannels({
      query: e,
      type: f.Zb,
      guildId: t,
      limit: 1 / 0,
      allowEmptyQueries: true,
      allowSnowflake: true,
      boosters: (0, g.Cq)(c.h8.VOICE_CHANNEL)
    })).map(e => {
      let {
        record: t
      } = e;
      return t
    });
  if (r || (i = i.filter(e => !e.isThread())), 0 === e.length) {
    let e = _.Z.getChannelId(t),
      n = i.find(t => t.id === e);
    null != n && (i.splice(i.indexOf(n), 1), i.unshift(n))
  }
  let o = f.ZP.getTextChannelNameDisambiguations(t);
  return a()(i).take(n).map(e => {
    var t, n;
    return {
      text: "".concat(null != (n = null == (t = o[e.id]) ? true : t.name) ? n : e.name),
      channel: e,
      key: e.id
    }
  }).value()
}

function eu(e) {
  let {
    query: t,
    searchContext: n,
    maxResults: r
  } = e;
  return ((t = t.trim()).startsWith('"') && t.endsWith('"') ? t = t.substring(1, t.length - 1).replaceAll(/\\(.)/g, (e, t) => t) : t.startsWith('"') && (t = t.substring(1).replaceAll(/\\(.)/g, (e, t) => t)), "#" === t[0] && (t = t.substring(1)), (0, v.b7)(n)) ? ec(t, n.guildId, r) : n.type !== A.aib.DMS || m.Z.hidePersonalInformation ? [] : el(t, r, true)
}
let ed = /^(?:\s*(\d{17,20}|@me|([^@#:]+)#([0-9]{4})|([a-z0-9_.]{2,32})))/i;
var ef = function(e) {
  return e.FILTER = "FILTER", e.ANSWER = "ANSWER", e
}({});

function ep() {
  return (0, Chunk28964.q$)({
    location: "getHasOptions"
  }) ? [Chunk388032.intl.string(Chunk388032.t.TNLcpx), Chunk388032.intl.string(Chunk388032.t.XM9XGP), Chunk388032.intl.string(Chunk388032.t.ZNR2fi), Chunk388032.intl.string(Chunk388032.t["AV/v6i"]), Chunk388032.intl.string(Chunk388032.t["20uQR3"]), Chunk388032.intl.string(Chunk388032.t.F8Wf0e), Chunk388032.intl.string(Chunk388032.t.L4lxyE), Chunk388032.intl.string(Chunk388032.t.PJgX2h), Chunk388032.intl.string(Chunk388032.t.nrpA5E)] : [Chunk388032.intl.string(Chunk388032.t.ZNR2fi), Chunk388032.intl.string(Chunk388032.t["20uQR3"]), Chunk388032.intl.string(Chunk388032.t.L4lxyE), Chunk388032.intl.string(Chunk388032.t["AV/v6i"]), Chunk388032.intl.string(Chunk388032.t.XM9XGP), Chunk388032.intl.string(Chunk388032.t.TNLcpx), Chunk388032.intl.string(Chunk388032.t.F8Wf0e), Chunk388032.intl.string(Chunk388032.t.PJgX2h), Chunk388032.intl.string(Chunk388032.t.nrpA5E)]
}

function e_(e) {
  let t = [N.intl.string(N.t.tPZo4p), N.intl.string(N.t.JL7sRS), N.intl.string(N.t.WjkIKU)],
    n = [N.intl.string(N.t.ZNR2fi), N.intl.string(N.t["20uQR3"]), N.intl.string(N.t.L4lxyE), N.intl.string(N.t["AV/v6i"]), N.intl.string(N.t.XM9XGP), N.intl.string(N.t.TNLcpx), N.intl.string(N.t.F8Wf0e), N.intl.string(N.t.PJgX2h), N.intl.string(N.t.nrpA5E)];
  return {
    [A.dCx.FILTER_FROM]: {
      regex: K(N.intl.string(N.t["1TUdFo"])),
      componentType: "FILTER",
      key: W(N.intl.string(N.t["1TUdFo"])),
      plainText: N.intl.string(N.t["1TUdFo"]),
      validator: es,
      getAutocompletions: ea
    },
    [A.dCx.ANSWER_USERNAME_FROM]: {
      follows: [A.dCx.FILTER_FROM],
      regex: ed,
      validator: z,
      mutable: true,
      componentType: "ANSWER",
      queryKey: "author_id"
    },
    [A.dCx.FILTER_MENTIONS]: {
      regex: K(N.intl.string(N.t["i96lO+"])),
      componentType: "FILTER",
      key: W(N.intl.string(N.t["i96lO+"])),
      plainText: N.intl.string(N.t["i96lO+"]),
      validator: es,
      getAutocompletions: ea
    },
    [A.dCx.ANSWER_USERNAME_MENTIONS]: {
      follows: [A.dCx.FILTER_MENTIONS],
      regex: ed,
      validator: z,
      mutable: true,
      componentType: "ANSWER",
      queryKey: "mentions"
    },
    [A.dCx.FILTER_HAS]: {
      regex: K(N.intl.string(N.t.CqCvir)),
      componentType: "FILTER",
      key: W(N.intl.string(N.t.CqCvir)),
      plainText: N.intl.string(N.t.CqCvir),
      getAutocompletions(e) {
        let {
          query: t,
          maxResults: n
        } = e;
        return ei(t, n, ep())
      }
    },
    [A.dCx.ANSWER_HAS]: {
      regex: RegExp("(?:\\s*-?(".concat(n.map(e => E.Z.escape(e)).join("|"), "))"), "i"),
      follows: [A.dCx.FILTER_HAS],
      validator: $,
      componentType: "ANSWER",
      queryKey: "has"
    },
    [A.dCx.FILTER_FILE_TYPE]: {
      regex: K(N.intl.string(N.t.TMNjFm)),
      key: W(N.intl.string(N.t.TMNjFm)),
      plainText: N.intl.string(N.t.TMNjFm),
      componentType: "FILTER"
    },
    [A.dCx.ANSWER_FILE_TYPE]: {
      regex: /(?:\s*([^\s]+))/,
      follows: [A.dCx.FILTER_FILE_TYPE],
      mutable: true,
      componentType: "ANSWER",
      queryKey: "attachment_extensions"
    },
    [A.dCx.FILTER_FILE_NAME]: {
      regex: K(N.intl.string(N.t["5xtLRC"])),
      key: W(N.intl.string(N.t["5xtLRC"])),
      plainText: N.intl.string(N.t["5xtLRC"]),
      componentType: "FILTER"
    },
    [A.dCx.ANSWER_FILE_NAME]: {
      regex: /(?:\s*([^\s]+)(?=\s))/,
      follows: [A.dCx.FILTER_FILE_NAME],
      mutable: true,
      componentType: "ANSWER",
      queryKey: "attachment_filename"
    },
    [A.dCx.FILTER_BEFORE]: {
      regex: K(N.intl.string(N.t["qZ+7BA"])),
      componentType: "FILTER",
      key: W(N.intl.string(N.t["qZ+7BA"])),
      plainText: N.intl.string(N.t["qZ+7BA"]),
      getAutocompletions(e) {
        let {
          query: t,
          maxResults: n
        } = e;
        return er(t, n, A.dCx.FILTER_BEFORE)
      }
    },
    [A.dCx.FILTER_ON]: {
      regex: K("(".concat(N.intl.string(N.t.tIxkOo), "|").concat(N.intl.string(N.t.h2NzSd), ")")),
      componentType: "FILTER",
      key: W(N.intl.string(N.t.h2NzSd)),
      plainText: N.intl.string(N.t.h2NzSd),
      getAutocompletions(e) {
        let {
          query: t,
          maxResults: n
        } = e;
        return er(t, n, A.dCx.FILTER_ON)
      }
    },
    [A.dCx.FILTER_AFTER]: {
      regex: K(N.intl.string(N.t.KSDx7M)),
      componentType: "FILTER",
      key: W(N.intl.string(N.t.KSDx7M)),
      plainText: N.intl.string(N.t.KSDx7M),
      getAutocompletions(e) {
        let {
          query: t,
          maxResults: n
        } = e;
        return er(t, n, A.dCx.FILTER_AFTER)
      }
    },
    [A.dCx.ANSWER_BEFORE]: {
      regex: H,
      follows: [A.dCx.FILTER_BEFORE],
      componentType: "ANSWER",
      mutable: true,
      validator: e => q(e, "before")
    },
    [A.dCx.ANSWER_ON]: {
      regex: H,
      follows: [A.dCx.FILTER_ON],
      componentType: "ANSWER",
      mutable: true,
      validator: e => q(e, "on")
    },
    [A.dCx.ANSWER_AFTER]: {
      regex: H,
      follows: [A.dCx.FILTER_AFTER],
      componentType: "ANSWER",
      mutable: true,
      validator: e => q(e, "after")
    },
    [A.dCx.FILTER_IN]: {
      regex: K(N.intl.string(N.t.WNpFHa)),
      componentType: "FILTER",
      key: W(N.intl.string(N.t.WNpFHa)),
      plainText: N.intl.string(N.t.WNpFHa),
      validator: () => {
        let t = null != e ? e : y.Z.getSelectedSearchContext();
        return null != t && (0, v.R6)(t)
      },
      getAutocompletions: eu
    },
    [A.dCx.ANSWER_IN]: {
      regex: C.e,
      mutable: true,
      follows: [A.dCx.FILTER_IN],
      componentType: "ANSWER",
      validator: t => {
        let n = null != e ? e : y.Z.getSelectedSearchContext();
        return null != n && J(t, n)
      },
      queryKey: "channel_id"
    },
    [A.dCx.FILTER_PINNED]: {
      regex: K(N.intl.string(N.t["0B74eY"])),
      componentType: "FILTER",
      key: W(N.intl.string(N.t["0B74eY"])),
      plainText: N.intl.string(N.t["0B74eY"]),
      getAutocompletions: () => [{
        text: "true"
      }, {
        text: "false"
      }]
    },
    [A.dCx.ANSWER_PINNED]: {
      regex: Y,
      componentType: "ANSWER",
      follows: [A.dCx.FILTER_PINNED],
      queryKey: "pinned",
      validator: e => {
        let t = e.getMatch(1);
        return "true" === t ? (e.setData("pinned", true), true) : "false" === t && (e.setData("pinned", false), true)
      }
    },
    [A.dCx.FILTER_AUTHOR_TYPE]: {
      regex: K(N.intl.string(N.t.us8IQi)),
      componentType: "FILTER",
      key: W(N.intl.string(N.t.us8IQi)),
      validator: () => (0, I.Z)({
        location: "SearchTokens"
      }),
      plainText: N.intl.string(N.t.us8IQi),
      getAutocompletions(e) {
        let {
          query: n,
          maxResults: r
        } = e;
        return ei(n, r, t)
      }
    },
    [A.dCx.ANSWER_AUTHOR_TYPE]: {
      regex: RegExp("(?:\\s*-?(".concat(t.map(e => E.Z.escape(e)).join("|"), "))"), "i"),
      follows: [A.dCx.FILTER_AUTHOR_TYPE],
      validator: ee,
      componentType: "ANSWER",
      queryKey: "author_type"
    }
  }
}
let em = {};

function eh() {
  return e_({
    type: Chunk981631.aib.DMS
  })
}

function eg() {
  Object.assign(em, e_())
}

function eE(e) {
  return A.TNx.test(e)
}

function eb(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : Object.keys(em).length,
    n = [];
  for (let r of Object.keys(em)) {
    if (n.length >= t) break;
    let o = em[r].key;
    eE(r) && null != o && i()(e.toLowerCase(), o) && n.push({
      token: r,
      text: o
    })
  }
  return n
}

function ey(e) {
  if (0 === e.length) returnfalse;
  let t = e.toLowerCase().replace(/^@/, "");
  return N.intl.string(N.t.Qf3ptv).startsWith(t) || A.ME.substring(1).startsWith(t)
}
let eO = em