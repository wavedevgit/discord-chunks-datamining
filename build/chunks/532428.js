/** Chunk was on web.js **/
/** chunk id: 532428, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Pr: () => en,
  Qe: () => ef,
  WK: () => eh,
  ZP: () => eb,
  _m: () => em,
  co: () => eE,
  nB: () => eg
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
  Chunk607802 = require("./607802.js"),
  Chunk612806 = require("./612806.js"),
  Chunk375123 = require("./375123.js"),
  Chunk945577 = require("./945577.js"),
  Chunk494573 = require("./494573.js"),
  Chunk129301 = require("./129301.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function P(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      R(e, t, n[t])
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

function L() {
  return new Set(l().months().map(e => e.toLowerCase()))
}

function x() {
  return new Set(l().weekdays().map(e => e.toLowerCase()))
}

function M() {
  let e = new Date().getFullYear();
  return new Set(a().range(2015, module + 1).map(e => e.toString()))
}

function k(e, t) {
  return [e, e.clone().add(1, t)]
}

function j(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 0;
  return k(l()().startOf(e).add(t, e), e)
}

function U(e, t, n) {
  return k(l()(e, t).local(), n)
}

function G() {
  return {
    [Chunk388032.intl.string(Chunk388032.t.HYiVER)]: () => j("day"),
    [Chunk388032.intl.string(Chunk388032.t.cu86KC)]: () => j("day", false),
    [Chunk388032.intl.string(Chunk388032.t["FvBj//"])]: () => j("week"),
    [Chunk388032.intl.string(Chunk388032.t["20uWCw"])]: () => j("month"),
    [Chunk388032.intl.string(Chunk388032.t["dXC/ho"])]: () => j("year")
  }
}
let B = "([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})",
  Z = "\\d{4}",
  F = "([0-9]{4})-([0-9]{1,2})",
  V = "([^\\d\\s]+)",
  H = RegExp("(?:\\s*(".concat(B, "|").concat(F, "|").concat(Z, "|").concat(V, "))"), "i"),
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
  return null != (t = N.Xyh.test(n) ? n : r(n === N.ME ? m.default.getCurrentUser() : null != e.getMatch(4) ? m.default.findByTag(e.getMatch(4)) : m.default.findByTag(e.getMatch(2), e.getMatch(3)))) && (e.setData("userId", t), true)
}

function q(e, t) {
  let n, r, i = e.getFullMatch().trim().toLowerCase(),
    o = G()[i];
  return null != o ? [n, r] = o() : L().has(i) ? [n, r] = U(i, "MMMM", "month") : x().has(i) ? [n, r] = U(i, "dddd", "day") : M().has(i) ? [n, r] = U(i, "YYYY", "year") : [n, r] = U(i, N.b2L, "day"), !!(n.isValid() && r.isValid()) && ("before" === t ? (r = n, n = null) : "after" === t && (n = r, r = null), e.setData("start", n), e.setData("end", r), true)
}

function X(e, t, n) {
  let r = f.ZP.getChannels(n)[f.sH].concat(f.ZP.getChannels(n)[f.Zb]),
    i = f.ZP.getTextChannelNameDisambiguations(n),
    o = v.Z.getCurrentConfig({
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
  return (null == s ? true : s.length) > 0 && (e.setData("channels", s), true)
}

function Q(e, t) {
  let n = Object.values(d.Z.getMutablePrivateChannels()).filter(e => {
    if (t === (0, u.F6)(e, m.default, _.Z)) returntrue;
    if (e.isDM()) {
      let n = e.getRecipientId(),
        r = m.default.getUser(n);
      return null != r && t === b.ZP.getUserTag(r)
    }
  });
  return (null == n ? true : n.length) > 0 && (e.setData("channels", n), true)
}

function J(e) {
  let t = e.getMatch(1);
  t.startsWith('"') && t.endsWith('"') && (t = t.substring(1, t.length - 1).replaceAll(/\\(.)/g, (e, t) => t));
  let n = y.Z.getSelectedSearchContext();
  if (null == n) returnfalse;
  if ((0, O.b7)(n)) return X(e, t, n.guildId);
  let r = (0, T.ad)({
      location: "channelValidator"
    }),
    i = (0, S.J)({
      location: "channelValidator"
    }),
    o = r || i;
  return n.type === N.aib.DMS && !!o && Q(e, t)
}

function $(e) {
  let t = {
    [C.intl.string(C.t.ZNR2fn)]: "link",
    [C.intl.string(C.t["20uQR0"])]: "embed",
    [C.intl.string(C.t.L4lxyM)]: "poll",
    [C.intl.string(C.t.nrpA5O)]: "snapshot",
    [C.intl.string(C.t["AV/v6u"])]: "file",
    [C.intl.string(C.t.XM9XGB)]: "video",
    [C.intl.string(C.t.TNLcp6)]: "image",
    [C.intl.string(C.t.F8Wf0d)]: "sound",
    [C.intl.string(C.t.PJgX2t)]: "sticker"
  } [e.getMatch(1)];
  return null != t && "" !== t && (e.setData("has", t), true)
}

function ee(e) {
  let t = {
    [C.intl.string(C.t.tPZo4u)]: "user",
    [C.intl.string(C.t.JL7sRU)]: "bot",
    [C.intl.string(C.t.WjkIKS)]: "webhook"
  } [e.getMatch(1)];
  return null != t && "" !== t && (e.setData("author_type", t), true)
}

function et() {
  return [...Array.from(L()), ...Array.from(x()), ...Array.from(M()), ...Object.keys(G())]
}

function en() {
  return a().sample(et())
}

function er(e, t, n) {
  return ei(e, t, et()).map(e => D(P({}, e), {
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
    let t = e.getData("channels");
    null != t && t.forEach(e => n.push(e.id))
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
  let t, {
      query: n,
      searchContext: r,
      maxResults: i = 10,
      tokens: o
    } = e,
    a = {
      query: n = n.split("#")[0],
      limit: i,
      request: false
    };
  switch (r.type) {
    case N.aib.GUILD:
    case N.aib.GUILD_CHANNEL:
    case N.aib.THREAD:
      t = g.ZP.queryGuildUsers(D(P({}, a), {
        guildId: r.guildId
      }));
      break;
    case N.aib.CHANNEL:
      t = g.ZP.queryChannelUsers(D(P({}, a), {
        channelId: r.channelId
      }));
      break;
    case N.aib.DMS:
      let s = eo(null != o ? o : []);
      if (null != s && s.length > 0) {
        let e = m.default.getCurrentUser();
        null != e && s.push(e), t = g.ZP.queryUsers(D(P({}, a), {
          users: s,
          boosters: (0, g.Cq)(c.h8.USER)
        }))
      } else t = g.ZP.queryAllUsers(D(P({}, a), {
        boosters: (0, g.Cq)(c.h8.USER)
      }));
      break;
    default:
      return []
  }
  let l = m.default.getCurrentUser(),
    u = n.toLowerCase().replace(/^@/, ""),
    d = null != l && n.length > 0 && (C.intl.string(C.t.Qf3ptr).startsWith(u) || N.ME.substr(1).startsWith(u)),
    f = t.filter(e => {
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
    text: N.ME,
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
  if ("" === e.trim() && n) {
    let e = p.Z.getChannelId(),
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
        let e = (0, u.F6)(t, m.default, _.Z);
        o.unshift({
          text: e,
          channel: t,
          key: t.id
        })
      } else if (t.isDM()) {
        let e = t.getRecipientId(),
          n = m.default.getUser(e);
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
  let r = v.Z.getCurrentConfig({
      location: "getInFilterAutocompletionsForGuild"
    }).enabled,
    i = g.ZP.queryChannels({
      query: e,
      type: f.sH,
      guildId: t,
      limit: 1 / 0,
      allowEmptyQueries: true,
      includeAllThreads: r
    }).concat(g.ZP.queryChannels({
      query: e,
      type: f.Zb,
      guildId: t,
      limit: 1 / 0,
      allowEmptyQueries: true
    })).map(e => {
      let {
        record: t
      } = e;
      return t
    });
  if (r || (i = i.filter(e => !e.isThread())), "" === e.trim()) {
    let e = p.Z.getChannelId(t),
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

function eu(e, t, n) {
  if (e.startsWith('"') && e.endsWith('"') ? e = e.substring(1, e.length - 1).replaceAll(/\\(.)/g, (e, t) => t) : e.startsWith('"') && (e = e.substring(1).replaceAll(/\\(.)/g, (e, t) => t)), "#" === e[0] && (e = e.substring(1)), (0, O.b7)(t)) return ec(e, t.guildId, n);
  let r = (0, T.ad)({
      location: "getInFilterAutocompletions"
    }),
    i = (0, S.J)({
      location: "getInFilterAutocompletions"
    }),
    o = r || i;
  return t.type === N.aib.DMS && o ? el(e, n, true) : []
}
let ed = /^(?:\s*(\d{17,20}|@me|([^@#:]+)#([0-9]{4})|([a-z0-9_.]{2,32})))/i;
var ef = function(e) {
  return e.FILTER = "FILTER", e.ANSWER = "ANSWER", e
}({});

function e_() {
  let e = [Chunk388032.intl.string(Chunk388032.t.ZNR2fn), Chunk388032.intl.string(Chunk388032.t["20uQR0"]), Chunk388032.intl.string(Chunk388032.t.L4lxyM), Chunk388032.intl.string(Chunk388032.t["AV/v6u"]), Chunk388032.intl.string(Chunk388032.t.XM9XGB), Chunk388032.intl.string(Chunk388032.t.TNLcp6), Chunk388032.intl.string(Chunk388032.t.F8Wf0d), Chunk388032.intl.string(Chunk388032.t.PJgX2t), Chunk388032.intl.string(Chunk388032.t.nrpA5O)],
    t = [Chunk388032.intl.string(Chunk388032.t.tPZo4u), Chunk388032.intl.string(Chunk388032.t.JL7sRU), Chunk388032.intl.string(Chunk388032.t.WjkIKS)];
  return {
    [Chunk981631.dCx.FILTER_FROM]: {
      regex: K(Chunk388032.intl.string(Chunk388032.t["1TUdFh"])),
      componentType: "FILTER",
      key: W(Chunk388032.intl.string(Chunk388032.t["1TUdFh"])),
      plainText: Chunk388032.intl.string(Chunk388032.t["1TUdFh"]),
      validator: es,
      getAutocompletions: ea
    },
    [Chunk981631.dCx.ANSWER_USERNAME_FROM]: {
      follows: [Chunk981631.dCx.FILTER_FROM],
      regex: ed,
      validator: z,
      mutable: true,
      componentType: "ANSWER",
      queryKey: "author_id"
    },
    [Chunk981631.dCx.FILTER_MENTIONS]: {
      regex: K(Chunk388032.intl.string(Chunk388032.t.i96lOz)),
      componentType: "FILTER",
      key: W(Chunk388032.intl.string(Chunk388032.t.i96lOz)),
      plainText: Chunk388032.intl.string(Chunk388032.t.i96lOz),
      validator: es,
      getAutocompletions: ea
    },
    [Chunk981631.dCx.ANSWER_USERNAME_MENTIONS]: {
      follows: [Chunk981631.dCx.FILTER_MENTIONS],
      regex: ed,
      validator: z,
      mutable: true,
      componentType: "ANSWER",
      queryKey: "mentions"
    },
    [Chunk981631.dCx.FILTER_HAS]: {
      regex: K(Chunk388032.intl.string(Chunk388032.t.CqCvio)),
      componentType: "FILTER",
      key: W(Chunk388032.intl.string(Chunk388032.t.CqCvio)),
      plainText: Chunk388032.intl.string(Chunk388032.t.CqCvio),
      getAutocompletions(t) {
        let {
          query: n,
          maxResults: r
        } = t;
        return ei(n, r, e)
      }
    },
    [Chunk981631.dCx.ANSWER_HAS]: {
      regex: RegExp("(?:\\s*-?(".concat(module.map(e => E.Z.escape(e)).join("|"), "))"), "i"),
      follows: [Chunk981631.dCx.FILTER_HAS],
      validator: $,
      componentType: "ANSWER",
      queryKey: "has"
    },
    [Chunk981631.dCx.FILTER_FILE_TYPE]: {
      regex: K(Chunk388032.intl.string(Chunk388032.t.TMNjFh)),
      key: W(Chunk388032.intl.string(Chunk388032.t.TMNjFh)),
      plainText: Chunk388032.intl.string(Chunk388032.t.TMNjFh),
      componentType: "FILTER"
    },
    [Chunk981631.dCx.ANSWER_FILE_TYPE]: {
      regex: /(?:\s*([^\s]+))/,
      follows: [Chunk981631.dCx.FILTER_FILE_TYPE],
      mutable: true,
      componentType: "ANSWER",
      queryKey: "attachment_extensions"
    },
    [Chunk981631.dCx.FILTER_FILE_NAME]: {
      regex: K(Chunk388032.intl.string(Chunk388032.t["5xtLRE"])),
      key: W(Chunk388032.intl.string(Chunk388032.t["5xtLRE"])),
      plainText: Chunk388032.intl.string(Chunk388032.t["5xtLRE"]),
      componentType: "FILTER"
    },
    [Chunk981631.dCx.ANSWER_FILE_NAME]: {
      regex: /(?:\s*([^\s]+)(?=\s))/,
      follows: [Chunk981631.dCx.FILTER_FILE_NAME],
      mutable: true,
      componentType: "ANSWER",
      queryKey: "attachment_filename"
    },
    [Chunk981631.dCx.FILTER_BEFORE]: {
      regex: K(Chunk388032.intl.string(Chunk388032.t["qZ+7BA"])),
      componentType: "FILTER",
      key: W(Chunk388032.intl.string(Chunk388032.t["qZ+7BA"])),
      plainText: Chunk388032.intl.string(Chunk388032.t["qZ+7BA"]),
      getAutocompletions(e) {
        let {
          query: t,
          maxResults: n
        } = e;
        return er(t, n, N.dCx.FILTER_BEFORE)
      }
    },
    [Chunk981631.dCx.FILTER_ON]: {
      regex: K("(".concat(Chunk388032.intl.string(Chunk388032.t.tIxkOj), "|").concat(Chunk388032.intl.string(Chunk388032.t.h2NzSU), ")")),
      componentType: "FILTER",
      key: W(Chunk388032.intl.string(Chunk388032.t.h2NzSU)),
      plainText: Chunk388032.intl.string(Chunk388032.t.h2NzSU),
      getAutocompletions(e) {
        let {
          query: t,
          maxResults: n
        } = e;
        return er(t, n, N.dCx.FILTER_ON)
      }
    },
    [Chunk981631.dCx.FILTER_AFTER]: {
      regex: K(Chunk388032.intl.string(Chunk388032.t.KSDx7O)),
      componentType: "FILTER",
      key: W(Chunk388032.intl.string(Chunk388032.t.KSDx7O)),
      plainText: Chunk388032.intl.string(Chunk388032.t.KSDx7O),
      getAutocompletions(e) {
        let {
          query: t,
          maxResults: n
        } = e;
        return er(t, n, N.dCx.FILTER_AFTER)
      }
    },
    [Chunk981631.dCx.ANSWER_BEFORE]: {
      regex: H,
      follows: [Chunk981631.dCx.FILTER_BEFORE],
      componentType: "ANSWER",
      mutable: true,
      validator: e => q(e, "before")
    },
    [Chunk981631.dCx.ANSWER_ON]: {
      regex: H,
      follows: [Chunk981631.dCx.FILTER_ON],
      componentType: "ANSWER",
      mutable: true,
      validator: e => q(e, "on")
    },
    [Chunk981631.dCx.ANSWER_AFTER]: {
      regex: H,
      follows: [Chunk981631.dCx.FILTER_AFTER],
      componentType: "ANSWER",
      mutable: true,
      validator: e => q(e, "after")
    },
    [Chunk981631.dCx.FILTER_IN]: {
      regex: K(Chunk388032.intl.string(Chunk388032.t.WNpFHR)),
      componentType: "FILTER",
      key: W(Chunk388032.intl.string(Chunk388032.t.WNpFHR)),
      plainText: Chunk388032.intl.string(Chunk388032.t.WNpFHR),
      validator: () => {
        let e = Chunk738018.Z.getSelectedSearchContext();
        return null != module && (0, Chunk607802.R6)(module)
      },
      getAutocompletions(e) {
        let {
          query: t,
          searchContext: n,
          maxResults: r
        } = e;
        return eu(t, n, r)
      }
    },
    [Chunk981631.dCx.ANSWER_IN]: {
      regex: Chunk129301.e,
      mutable: true,
      follows: [Chunk981631.dCx.FILTER_IN],
      componentType: "ANSWER",
      validator: J,
      queryKey: "channel_id"
    },
    [Chunk981631.dCx.FILTER_PINNED]: {
      regex: K(Chunk388032.intl.string(Chunk388032.t["0B74eX"])),
      componentType: "FILTER",
      key: W(Chunk388032.intl.string(Chunk388032.t["0B74eX"])),
      plainText: Chunk388032.intl.string(Chunk388032.t["0B74eX"]),
      getAutocompletions: () => [{
        text: "true"
      }, {
        text: "false"
      }]
    },
    [Chunk981631.dCx.ANSWER_PINNED]: {
      regex: Y,
      componentType: "ANSWER",
      follows: [Chunk981631.dCx.FILTER_PINNED],
      queryKey: "pinned",
      validator: e => {
        let t = e.getMatch(1);
        return "true" === t ? (e.setData("pinned", true), true) : "false" === t && (e.setData("pinned", false), true)
      }
    },
    [Chunk981631.dCx.FILTER_AUTHOR_TYPE]: {
      regex: K(Chunk388032.intl.string(Chunk388032.t.us8IQk)),
      componentType: "FILTER",
      key: W(Chunk388032.intl.string(Chunk388032.t.us8IQk)),
      validator: () => (0, Chunk375123.Z)({
        location: "SearchTokens"
      }),
      plainText: Chunk388032.intl.string(Chunk388032.t.us8IQk),
      getAutocompletions(e) {
        let {
          query: n,
          maxResults: r
        } = e;
        return ei(n, r, t)
      }
    },
    [Chunk981631.dCx.ANSWER_AUTHOR_TYPE]: {
      regex: RegExp("(?:\\s*-?(".concat(exports.map(e => E.Z.escape(e)).join("|"), "))"), "i"),
      follows: [Chunk981631.dCx.FILTER_AUTHOR_TYPE],
      validator: ee,
      componentType: "ANSWER",
      queryKey: "author_type"
    }
  }
}
let ep = {};

function eh() {
  Object.assign(ep, e_())
}

function em(e) {
  return N.TNx.test(e)
}

function eg(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : Object.keys(ep).length,
    n = [];
  for (let r of Object.keys(ep)) {
    if (n.length >= t) break;
    let o = ep[r].key;
    em(r) && null != o && i()(e.toLowerCase(), o) && n.push({
      token: r,
      text: o
    })
  }
  return n
}

function eE(e) {
  if (0 === e.length) returnfalse;
  let t = e.toLowerCase().replace(/^@/, "");
  return C.intl.string(C.t.Qf3ptr).startsWith(t) || N.ME.substring(1).startsWith(t)
}
let eb = ep