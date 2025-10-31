/** Chunk was on web.js **/
/** chunk id: 532428, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ej: () => eg,
  Ni: () => Q,
  Pr: () => et,
  Qe: () => ed,
  WK: () => eh,
  ZP: () => eb,
  _m: () => em,
  co: () => eE,
  fx: () => K,
  mh: () => ep
}), require("./388685.js"), require("./413496.js"), require("./433524.js"), require("./35282.js"), require("./781311.js"), require("./804061.js"), require("./704826.js"), require("./539854.js"), require("./290780.js"), require("./642613.js");
var Chunk658722 = require("./658722.js"),
  i = require.n(Chunk658722),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
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
  Chunk129301 = require("./129301.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function N(e, t, n) {
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
      N(e, t, n[t])
    })
  }
  return e
}

function P(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function w(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : P(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function D() {
  return new Set(l().months().map(e => e.toLowerCase()))
}

function x() {
  return new Set(l().weekdays().map(e => e.toLowerCase()))
}

function L() {
  let e = new Date().getFullYear();
  return new Set(o().range(2015, module + 1).map(e => e.toString()))
}

function M(e, t) {
  return [e, e.clone().add(1, t)]
}

function j(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 0;
  return M(l()().startOf(e).add(t, e), e)
}

function k(e, t, n) {
  return M(l()(e, t).local(), n)
}

function U() {
  return {
    [Chunk388032.intl.string(Chunk388032.t.HYiVEQ)]: () => j("day"),
    [Chunk388032.intl.string(Chunk388032.t.cu86KC)]: () => j("day", false),
    [Chunk388032.intl.string(Chunk388032.t["FvBj/6"])]: () => j("week"),
    [Chunk388032.intl.string(Chunk388032.t["20uWCw"])]: () => j("month"),
    [Chunk388032.intl.string(Chunk388032.t["dXC/hn"])]: () => j("year")
  }
}
let G = "([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})",
  B = "\\d{4}",
  Z = "([0-9]{4})-([0-9]{1,2})",
  F = "([^\\d\\s]+)",
  V = RegExp("(?:\\s*(".concat(G, "|").concat(Z, "|").concat(B, "|").concat(F, "))"), "i"),
  H = RegExp("\\s*(true|false)", "i");

function Y(e) {
  return "".concat(e, ":")
}

function W(e) {
  return RegExp(Y(e), "i")
}

function K(e) {
  let t, n = e.getMatch(1),
    r = e => null != e ? null == e ? true : e.id : null;
  return null != (t = A.Xyh.test(n) ? n : r(n === A.ME ? m.default.getCurrentUser() : null != e.getMatch(4) ? m.default.findByTag(e.getMatch(4)) : m.default.findByTag(e.getMatch(2), e.getMatch(3)))) && (e.setData("userId", t), true)
}

function z(e, t) {
  let n, r, i = e.getFullMatch().trim().toLowerCase(),
    a = U()[i];
  return null != a ? [n, r] = a() : D().has(i) ? [n, r] = k(i, "MMMM", "month") : x().has(i) ? [n, r] = k(i, "dddd", "day") : L().has(i) ? [n, r] = k(i, "YYYY", "year") : [n, r] = k(i, A.b2L, "day"), !!(n.isValid() && r.isValid()) && ("before" === t ? (r = n, n = null) : "after" === t && (n = r, r = null), e.setData("start", n), e.setData("end", r), true)
}

function q(e, t, n) {
  let r = f.ZP.getChannels(n)[f.sH].concat(f.ZP.getChannels(n)[f.Zb]),
    i = f.ZP.getTextChannelNameDisambiguations(n),
    a = I.Z.getCurrentConfig({
      location: "guildChannelValidator"
    }).enabled,
    s = o().chain(r).map(e => {
      let {
        channel: t
      } = e;
      return t
    }).concat(a && null != n ? d.Z.getAllThreadsForGuild(n) : []).filter(e => {
      var n, r;
      return t === (null != (r = null == (n = i[e.id]) ? true : n.name) ? r : e.name)
    }).value();
  return (null == s ? true : s.length) > 0 && (e.setData("channelIds", s.map(e => e.id)), true)
}

function X(e, t) {
  let n = Object.values(d.Z.getMutablePrivateChannels()).filter(e => {
    if (t === (0, u.F6)(e, m.default, _.Z)) returntrue;
    if (e.isDM()) {
      let n = e.getRecipientId(),
        r = m.default.getUser(n);
      return null != r && t === b.ZP.getUserTag(r)
    }
  });
  return (null == n ? true : n.length) > 0 && (e.setData("channelIds", n.map(e => e.id)), true)
}

function Q(e, t) {
  let n = e.getMatch(1);
  return A.Xyh.test(n) ? (e.setData("channelIds", [n]), true) : (n.startsWith('"') && n.endsWith('"') && (n = n.substring(1, n.length - 1).replaceAll(/\\(.)/g, (e, t) => t)), (0, v.b7)(t)) ? q(e, n, t.guildId) : t.type === A.aib.DMS && !h.Z.hidePersonalInformation && X(e, n)
}

function J(e) {
  let t = {
    [C.intl.string(C.t.ZNR2fi)]: "link",
    [C.intl.string(C.t["20uQR3"])]: "embed",
    [C.intl.string(C.t.L4lxyE)]: "poll",
    [C.intl.string(C.t.nrpA5E)]: "snapshot",
    [C.intl.string(C.t["AV/v6i"])]: "file",
    [C.intl.string(C.t.XM9XGP)]: "video",
    [C.intl.string(C.t.TNLcpx)]: "image",
    [C.intl.string(C.t.F8Wf0e)]: "sound",
    [C.intl.string(C.t.PJgX2h)]: "sticker"
  } [e.getMatch(1)];
  return null != t && "" !== t && (e.setData("has", t), true)
}

function $(e) {
  let t = {
    [C.intl.string(C.t.tPZo4p)]: "user",
    [C.intl.string(C.t.JL7sRS)]: "bot",
    [C.intl.string(C.t.WjkIKU)]: "webhook"
  } [e.getMatch(1)];
  return null != t && "" !== t && (e.setData("author_type", t), true)
}

function ee() {
  return [...Array.from(D()), ...Array.from(x()), ...Array.from(L()), ...Object.keys(U())]
}

function et() {
  return o().sample(ee())
}

function en(e, t, n) {
  return er(e, t, ee()).map(e => w(R({}, e), {
    group: n,
    key: "".concat(n, "-").concat(e.text)
  }))
}

function er(e, t, n) {
  let r = e.toLocaleLowerCase();
  return o()(n).filter(e => i()(r, e.toLocaleLowerCase())).take(t).map(e => ({
    text: e
  })).value()
}

function ei(e) {
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
        r(m.default.getUser(e))
      } else t.isGroupDM() && t.recipients.forEach(e => {
        r(m.default.getUser(e))
      })
  }), i
}

function ea(e) {
  let {
    query: t,
    searchContext: n,
    maxResults: r = 10,
    tokens: i
  } = e, a = {
    query: t = t.trim().split("#")[0],
    limit: r,
    request: false,
    boosters: (0, g.Cq)(c.h8.USER)
  }, o = [];
  switch (n.type) {
    case A.aib.GUILD:
    case A.aib.GUILD_CHANNEL:
    case A.aib.THREAD:
      if (0 === t.length) {
        let e = [],
          t = new Set,
          i = n => {
            null == n || t.has(n.id) || _.Z.isBlockedOrIgnored(n.id) || (e.push({
              user: n,
              text: b.ZP.getUserTag(n)
            }), t.add(n.id))
          },
          a = p.Z.getCurrentlySelectedChannelId(n.guildId);
        return g.ZP.getRecentlyTalked(a, r).forEach(e => {
          let {
            record: t
          } = e;
          return i(t)
        }), O.Z.getRecentMessageAuthorIds(n.guildId).forEach(e => i(m.default.getUser(e))), e.slice(0, r)
      }
      o = g.ZP.queryGuildUsers(w(R({}, a), {
        guildId: n.guildId
      }));
      break;
    case A.aib.CHANNEL:
      o = g.ZP.queryChannelUsers(w(R({}, a), {
        channelId: n.channelId
      }));
      break;
    case A.aib.DMS:
      let s = ei(null != i ? i : []);
      if (null != s && s.length > 0) {
        let e = m.default.getCurrentUser();
        null != e && s.push(e), o = g.ZP.queryUsers(w(R({}, a), {
          users: s,
          boosters: (0, g.Cq)(c.h8.USER)
        }))
      } else o = g.ZP.queryAllUsers(w(R({}, a), {
        boosters: (0, g.Cq)(c.h8.USER)
      }));
      break;
    default:
      return []
  }
  let l = m.default.getCurrentUser(),
    u = t.toLowerCase().replace(/^@/, ""),
    d = null != l && t.length > 0 && (C.intl.string(C.t.Qf3ptv).startsWith(u) || A.ME.substr(1).startsWith(u)),
    f = o.filter(e => {
      let {
        record: t
      } = e;
      return !_.Z.isBlockedOrIgnored(t.id) && (!d || t.id !== (null == l ? true : l.id))
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

function eo() {
  return !Chunk246946.Z.hidePersonalInformation
}

function es(e, t, n) {
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
    a = o()(r.concat(i)).sort(c.qU).map(e => {
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
    let e = p.Z.getChannelId(),
      t = d.Z.getChannel(e);
    if (null != t && t.isPrivate()) {
      let n = a.findIndex(t => {
        let {
          channel: n
        } = t;
        return n.id === e
      });
      if (false !== n) {
        let e = a[n];
        a.splice(n, 1), a.unshift(e)
      } else if (t.isGroupDM()) {
        let e = (0, u.F6)(t, m.default, _.Z);
        a.unshift({
          text: e,
          channel: t,
          key: t.id
        })
      } else if (t.isDM()) {
        let e = t.getRecipientId(),
          n = m.default.getUser(e);
        if (null != n) {
          let e = b.ZP.getUserTag(n);
          a.unshift({
            text: e,
            channel: t,
            key: t.id
          })
        }
      }
    }
  }
  return a.slice(0, t)
}

function el(e, t, n) {
  let r = I.Z.getCurrentConfig({
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
    let e = p.Z.getChannelId(t),
      n = i.find(t => t.id === e);
    null != n && (i.splice(i.indexOf(n), 1), i.unshift(n))
  }
  let a = f.ZP.getTextChannelNameDisambiguations(t);
  return o()(i).take(n).map(e => {
    var t, n;
    return {
      text: "".concat(null != (n = null == (t = a[e.id]) ? true : t.name) ? n : e.name),
      channel: e,
      key: e.id
    }
  }).value()
}

function ec(e) {
  let {
    query: t,
    searchContext: n,
    maxResults: r
  } = e;
  return ((t = t.trim()).startsWith('"') && t.endsWith('"') ? t = t.substring(1, t.length - 1).replaceAll(/\\(.)/g, (e, t) => t) : t.startsWith('"') && (t = t.substring(1).replaceAll(/\\(.)/g, (e, t) => t)), "#" === t[0] && (t = t.substring(1)), (0, v.b7)(n)) ? el(t, n.guildId, r) : n.type !== A.aib.DMS || h.Z.hidePersonalInformation ? [] : es(t, r, true)
}
let eu = /^(?:\s*(\d{17,20}|@me|([^@#:]+)#([0-9]{4})|([a-z0-9_.]{2,32})))/i;
var ed = function(e) {
  return e.FILTER = "FILTER", e.ANSWER = "ANSWER", e
}({});

function ef(e) {
  let t = [C.intl.string(C.t.ZNR2fi), C.intl.string(C.t["20uQR3"]), C.intl.string(C.t.L4lxyE), C.intl.string(C.t["AV/v6i"]), C.intl.string(C.t.XM9XGP), C.intl.string(C.t.TNLcpx), C.intl.string(C.t.F8Wf0e), C.intl.string(C.t.PJgX2h), C.intl.string(C.t.nrpA5E)],
    n = [C.intl.string(C.t.tPZo4p), C.intl.string(C.t.JL7sRS), C.intl.string(C.t.WjkIKU)];
  return {
    [A.dCx.FILTER_FROM]: {
      regex: W(C.intl.string(C.t["1TUdFo"])),
      componentType: "FILTER",
      key: Y(C.intl.string(C.t["1TUdFo"])),
      plainText: C.intl.string(C.t["1TUdFo"]),
      validator: eo,
      getAutocompletions: ea
    },
    [A.dCx.ANSWER_USERNAME_FROM]: {
      follows: [A.dCx.FILTER_FROM],
      regex: eu,
      validator: K,
      mutable: true,
      componentType: "ANSWER",
      queryKey: "author_id"
    },
    [A.dCx.FILTER_MENTIONS]: {
      regex: W(C.intl.string(C.t["i96lO+"])),
      componentType: "FILTER",
      key: Y(C.intl.string(C.t["i96lO+"])),
      plainText: C.intl.string(C.t["i96lO+"]),
      validator: eo,
      getAutocompletions: ea
    },
    [A.dCx.ANSWER_USERNAME_MENTIONS]: {
      follows: [A.dCx.FILTER_MENTIONS],
      regex: eu,
      validator: K,
      mutable: true,
      componentType: "ANSWER",
      queryKey: "mentions"
    },
    [A.dCx.FILTER_HAS]: {
      regex: W(C.intl.string(C.t.CqCvir)),
      componentType: "FILTER",
      key: Y(C.intl.string(C.t.CqCvir)),
      plainText: C.intl.string(C.t.CqCvir),
      getAutocompletions(e) {
        let {
          query: n,
          maxResults: r
        } = e;
        return er(n, r, t)
      }
    },
    [A.dCx.ANSWER_HAS]: {
      regex: RegExp("(?:\\s*-?(".concat(t.map(e => E.Z.escape(e)).join("|"), "))"), "i"),
      follows: [A.dCx.FILTER_HAS],
      validator: J,
      componentType: "ANSWER",
      queryKey: "has"
    },
    [A.dCx.FILTER_FILE_TYPE]: {
      regex: W(C.intl.string(C.t.TMNjFm)),
      key: Y(C.intl.string(C.t.TMNjFm)),
      plainText: C.intl.string(C.t.TMNjFm),
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
      regex: W(C.intl.string(C.t["5xtLRC"])),
      key: Y(C.intl.string(C.t["5xtLRC"])),
      plainText: C.intl.string(C.t["5xtLRC"]),
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
      regex: W(C.intl.string(C.t["qZ+7BA"])),
      componentType: "FILTER",
      key: Y(C.intl.string(C.t["qZ+7BA"])),
      plainText: C.intl.string(C.t["qZ+7BA"]),
      getAutocompletions(e) {
        let {
          query: t,
          maxResults: n
        } = e;
        return en(t, n, A.dCx.FILTER_BEFORE)
      }
    },
    [A.dCx.FILTER_ON]: {
      regex: W("(".concat(C.intl.string(C.t.tIxkOo), "|").concat(C.intl.string(C.t.h2NzSd), ")")),
      componentType: "FILTER",
      key: Y(C.intl.string(C.t.h2NzSd)),
      plainText: C.intl.string(C.t.h2NzSd),
      getAutocompletions(e) {
        let {
          query: t,
          maxResults: n
        } = e;
        return en(t, n, A.dCx.FILTER_ON)
      }
    },
    [A.dCx.FILTER_AFTER]: {
      regex: W(C.intl.string(C.t.KSDx7M)),
      componentType: "FILTER",
      key: Y(C.intl.string(C.t.KSDx7M)),
      plainText: C.intl.string(C.t.KSDx7M),
      getAutocompletions(e) {
        let {
          query: t,
          maxResults: n
        } = e;
        return en(t, n, A.dCx.FILTER_AFTER)
      }
    },
    [A.dCx.ANSWER_BEFORE]: {
      regex: V,
      follows: [A.dCx.FILTER_BEFORE],
      componentType: "ANSWER",
      mutable: true,
      validator: e => z(e, "before")
    },
    [A.dCx.ANSWER_ON]: {
      regex: V,
      follows: [A.dCx.FILTER_ON],
      componentType: "ANSWER",
      mutable: true,
      validator: e => z(e, "on")
    },
    [A.dCx.ANSWER_AFTER]: {
      regex: V,
      follows: [A.dCx.FILTER_AFTER],
      componentType: "ANSWER",
      mutable: true,
      validator: e => z(e, "after")
    },
    [A.dCx.FILTER_IN]: {
      regex: W(C.intl.string(C.t.WNpFHa)),
      componentType: "FILTER",
      key: Y(C.intl.string(C.t.WNpFHa)),
      plainText: C.intl.string(C.t.WNpFHa),
      validator: () => {
        let t = null != e ? e : y.Z.getSelectedSearchContext();
        return null != t && (0, v.R6)(t)
      },
      getAutocompletions: ec
    },
    [A.dCx.ANSWER_IN]: {
      regex: S.e,
      mutable: true,
      follows: [A.dCx.FILTER_IN],
      componentType: "ANSWER",
      validator: t => {
        let n = null != e ? e : y.Z.getSelectedSearchContext();
        return null != n && Q(t, n)
      },
      queryKey: "channel_id"
    },
    [A.dCx.FILTER_PINNED]: {
      regex: W(C.intl.string(C.t["0B74eY"])),
      componentType: "FILTER",
      key: Y(C.intl.string(C.t["0B74eY"])),
      plainText: C.intl.string(C.t["0B74eY"]),
      getAutocompletions: () => [{
        text: "true"
      }, {
        text: "false"
      }]
    },
    [A.dCx.ANSWER_PINNED]: {
      regex: H,
      componentType: "ANSWER",
      follows: [A.dCx.FILTER_PINNED],
      queryKey: "pinned",
      validator: e => {
        let t = e.getMatch(1);
        return "true" === t ? (e.setData("pinned", true), true) : "false" === t && (e.setData("pinned", false), true)
      }
    },
    [A.dCx.FILTER_AUTHOR_TYPE]: {
      regex: W(C.intl.string(C.t.us8IQi)),
      componentType: "FILTER",
      key: Y(C.intl.string(C.t.us8IQi)),
      validator: () => (0, T.Z)({
        location: "SearchTokens"
      }),
      plainText: C.intl.string(C.t.us8IQi),
      getAutocompletions(e) {
        let {
          query: t,
          maxResults: r
        } = e;
        return er(t, r, n)
      }
    },
    [A.dCx.ANSWER_AUTHOR_TYPE]: {
      regex: RegExp("(?:\\s*-?(".concat(n.map(e => E.Z.escape(e)).join("|"), "))"), "i"),
      follows: [A.dCx.FILTER_AUTHOR_TYPE],
      validator: $,
      componentType: "ANSWER",
      queryKey: "author_type"
    }
  }
}
let e_ = {};

function ep() {
  return ef({
    type: Chunk981631.aib.DMS
  })
}

function eh() {
  Object.assign(e_, ef())
}

function em(e) {
  return A.TNx.test(e)
}

function eg(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : Object.keys(e_).length,
    n = [];
  for (let r of Object.keys(e_)) {
    if (n.length >= t) break;
    let a = e_[r].key;
    em(r) && null != a && i()(e.toLowerCase(), a) && n.push({
      token: r,
      text: a
    })
  }
  return n
}

function eE(e) {
  if (0 === e.length) returnfalse;
  let t = e.toLowerCase().replace(/^@/, "");
  return C.intl.string(C.t.Qf3ptv).startsWith(t) || A.ME.substring(1).startsWith(t)
}
let eb = e_