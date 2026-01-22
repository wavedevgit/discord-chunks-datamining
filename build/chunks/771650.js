/** Chunk was on web.js **/
/** chunk id: 771650, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => eg,
  G0: () => ep,
  If: () => e_,
  WL: () => em,
  Yd: () => Z,
  gR: () => eh,
  gU: () => ef,
  sC: () => K,
  v1: () => ec
}), require("./896048.js"), require("./591487.js"), require("./727858.js"), require("./747238.js"), require("./733351.js"), require("./812715.js"), require("./866193.js"), require("./321073.js"), require("./667532.js"), require("./638769.js");
var Chunk91871 = require("./91871.js"),
  i = require.n(Chunk91871),
  Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
  Chunk989349 = require("./989349.js"),
  l = require.n(Chunk989349),
  Chunk629357 = require("./629357.js"),
  Chunk47167 = require("./47167.js"),
  Chunk734057 = require("./734057.js"),
  Chunk808728 = require("./808728.js"),
  Chunk994500 = require("./994500.js"),
  Chunk309010 = require("./309010.js"),
  Chunk351906 = require("./351906.js"),
  Chunk287809 = require("./287809.js"),
  Chunk248465 = require("./248465.js"),
  Chunk257120 = require("./257120.js"),
  Chunk427262 = require("./427262.js"),
  Chunk692986 = require("./692986.js"),
  Chunk268988 = require("./268988.js"),
  Chunk822382 = require("./822382.js"),
  Chunk768278 = require("./768278.js"),
  Chunk233003 = require("./233003.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      C(e, t, n[t])
    })
  }
  return e
}

function R(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : R(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function P() {
  return new Set(l().months().map(e => e.toLowerCase()))
}

function D() {
  return new Set(l().weekdays().map(e => e.toLowerCase()))
}

function x() {
  let e = new Date().getFullYear();
  return new Set(s().range(2015, e + 1).map(e => e.toString()))
}

function L(e, t) {
  return [e, e.clone().add(1, t)]
}

function j(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 0;
  return L(l()().startOf(e).add(t, e), e)
}

function M(e, t, n) {
  return L(l()(e, t).local(), n)
}

function k() {
  return {
    [T.intl.string(T.t.HYiVEQ)]: () => j("day"),
    [T.intl.string(T.t.cu86KC)]: () => j("day", false),
    [T.intl.string(T.t["FvBj/6"])]: () => j("week"),
    [T.intl.string(T.t["20uWCw"])]: () => j("month"),
    [T.intl.string(T.t["dXC/hn"])]: () => j("year")
  }
}
let U = "([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})",
  G = "\\d{4}",
  V = "([0-9]{4})-([0-9]{1,2})",
  F = "([^\\d\\s]+)",
  B = RegExp("(?:\\s*(".concat(U, "|").concat(V, "|").concat(G, "|").concat(F, "))"), "i"),
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
  return null != (t = I.Ut1.test(n) ? n : r(n === I.ME ? m.default.getCurrentUser() : null != e.getMatch(4) ? m.default.findByTag(e.getMatch(4)) : m.default.findByTag(e.getMatch(2), e.getMatch(3)))) && (e.setData("userId", t), true)
}

function z(e, t) {
  let n, r, i = e.getFullMatch().trim().toLowerCase(),
    a = k()[i];
  return null != a ? [n, r] = a() : P().has(i) ? [n, r] = M(i, "MMMM", "month") : D().has(i) ? [n, r] = M(i, "dddd", "day") : x().has(i) ? [n, r] = M(i, "YYYY", "year") : [n, r] = M(i, I.ump, "day"), !!(n.isValid() && r.isValid()) && ("before" === t ? (r = n, n = null) : "after" === t && (n = r, r = null), e.setData("start", n), e.setData("end", r), true)
}

function q(e, t, n) {
  let r = f.Ay.getChannels(n)[f.I6].concat(f.Ay.getChannels(n)[f.vM]),
    i = f.Ay.getTextChannelNameDisambiguations(n),
    a = v.A.getCurrentConfig({
      location: "guildChannelValidator"
    }).enabled,
    o = s().chain(r).map(e => {
      let {
        channel: t
      } = e;
      return t
    }).concat(a && null != n ? d.A.getAllThreadsForGuild(n) : []).filter(e => {
      var n, r;
      return t === (null != (n = null == (r = i[e.id]) ? true : r.name) ? n : e.name)
    }).value();
  return (null == o ? true : o.length) > 0 && (e.setData("channelIds", o.map(e => e.id)), true)
}

function X(e, t) {
  let n = Object.values(d.A.getMutablePrivateChannels()).filter(e => {
    if (e.isGroupDM() && t === (0, u.m1)(e, m.default, p.A)) returntrue;
    if (e.isDM()) {
      let n = e.getRecipientId(),
        r = m.default.getUser(n);
      return null != r && t === b.Ay.getUserTag(r)
    }
    returnfalse
  });
  return (null == n ? true : n.length) > 0 && (e.setData("channelIds", n.map(e => e.id)), true)
}

function Z(e, t) {
  let n = e.getMatch(1);
  return I.Ut1.test(n) ? (e.setData("channelIds", [n]), true) : (n.startsWith('"') && n.endsWith('"') && (n = n.substring(1, n.length - 1).replaceAll(/\\(.)/g, (e, t) => t)), (0, A._B)(t)) ? q(e, n, t.guildId) : t.type === I.I4_.DMS && !h.A.hidePersonalInformation && X(e, n)
}

function Q(e) {
  let t = {
    [T.intl.string(T.t.ZNR2fi)]: "link",
    [T.intl.string(T.t["20uQR3"])]: "embed",
    [T.intl.string(T.t.L4lxyE)]: "poll",
    [T.intl.string(T.t.nrpA5E)]: "snapshot",
    [T.intl.string(T.t["AV/v6i"])]: "file",
    [T.intl.string(T.t.XM9XGP)]: "video",
    [T.intl.string(T.t.TNLcpx)]: "image",
    [T.intl.string(T.t.F8Wf0e)]: "sound",
    [T.intl.string(T.t.PJgX2h)]: "sticker"
  } [e.getMatch(1)];
  return null != t && "" !== t && (e.setData("has", t), true)
}

function $(e) {
  let t = {
    [T.intl.string(T.t.tPZo4p)]: "user",
    [T.intl.string(T.t.JL7sRS)]: "bot",
    [T.intl.string(T.t.WjkIKU)]: "webhook"
  } [e.getMatch(1)];
  return null != t && "" !== t && (e.setData("author_type", t), true)
}

function J() {
  return [...Array.from(P()), ...Array.from(D()), ...Array.from(x()), ...Object.keys(k())]
}

function ee(e, t, n) {
  return et(e, t, J()).map(e => w(N({}, e), {
    group: n,
    key: "".concat(n, "-").concat(e.text)
  }))
}

function et(e, t, n) {
  let r = e.toLocaleLowerCase();
  return s()(n).filter(e => i()(r, e.toLocaleLowerCase())).take(t).map(e => ({
    text: e
  })).value()
}

function en(e) {
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
    let t = d.A.getChannel(e);
    if (null != t)
      if (t.isDM()) {
        let e = t.getRecipientId();
        r(m.default.getUser(e))
      } else t.isGroupDM() && t.recipients.forEach(e => {
        r(m.default.getUser(e))
      })
  }), i
}

function er(e) {
  let {
    query: t,
    searchContext: n,
    maxResults: r = 10,
    tokens: i
  } = e, a = {
    query: t = t.trim().split("#")[0],
    limit: r,
    request: false,
    boosters: (0, g.X3)(c.rD.USER)
  }, s = [];
  switch (n.type) {
    case I.I4_.GUILD:
    case I.I4_.GUILD_CHANNEL:
    case I.I4_.THREAD:
      if (0 === t.length) {
        let e = [],
          t = new Set,
          i = n => {
            null == n || t.has(n.id) || p.A.isBlockedOrIgnored(n.id) || (e.push({
              user: n,
              text: b.Ay.getUserTag(n)
            }), t.add(n.id))
          },
          a = _.A.getCurrentlySelectedChannelId(n.guildId);
        return g.Ay.getRecentlyTalked(a, r).forEach(e => {
          let {
            record: t
          } = e;
          return i(t)
        }), O.A.getRecentMessageAuthorIds(n.guildId).forEach(e => i(m.default.getUser(e))), e.slice(0, r)
      }
      s = g.Ay.queryGuildUsers(w(N({}, a), {
        guildId: n.guildId
      }));
      break;
    case I.I4_.CHANNEL:
      s = g.Ay.queryChannelUsers(w(N({}, a), {
        channelId: n.channelId
      }));
      break;
    case I.I4_.DMS:
      let o = en(null != i ? i : []);
      if (null != o && o.length > 0) {
        let e = m.default.getCurrentUser();
        null != e && o.push(e), s = g.Ay.queryUsers(w(N({}, a), {
          users: o,
          boosters: (0, g.X3)(c.rD.USER)
        }))
      } else s = g.Ay.queryAllUsers(w(N({}, a), {
        boosters: (0, g.X3)(c.rD.USER)
      }));
      break;
    default:
      return []
  }
  let l = m.default.getCurrentUser(),
    u = t.toLowerCase().replace(/^@/, ""),
    d = null != l && t.length > 0 && (T.intl.string(T.t.Qf3ptv).startsWith(u) || I.ME.substr(1).startsWith(u)),
    f = s.filter(e => {
      let {
        record: t
      } = e;
      return !p.A.isBlockedOrIgnored(t.id) && (!d || t.id !== (null == l ? true : l.id))
    }).map(e => {
      let {
        record: t
      } = e;
      return {
        text: b.Ay.getUserTag(t),
        user: t
      }
    });
  return d && f.unshift({
    text: I.ME,
    user: l
  }), f
}

function ei() {
  return !h.A.hidePersonalInformation
}

function ea(e, t, n) {
  let r = g.Ay.queryGroupDMs({
      query: e,
      limit: t,
      fuzzy: true,
      boosters: (0, g.X3)(c.rD.GROUP_DM)
    }),
    i = g.Ay.queryDMChannels({
      query: e,
      limit: t,
      boosters: (0, g.X3)(c.rD.USER)
    }),
    a = s()(r.concat(i)).sort(c.vH).map(e => {
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
    let e = _.A.getChannelId(),
      t = d.A.getChannel(e);
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
        let e = (0, u.m1)(t, m.default, p.A);
        a.unshift({
          text: e,
          channel: t,
          key: t.id
        })
      } else if (t.isDM()) {
        let e = t.getRecipientId(),
          n = m.default.getUser(e);
        if (null != n) {
          let e = b.Ay.getUserTag(n);
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

function es(e, t, n) {
  let r = v.A.getCurrentConfig({
      location: "getGuildChannelAutocompletions"
    }).enabled,
    i = g.Ay.queryChannels({
      query: e,
      type: f.I6,
      guildId: t,
      limit: 1 / 0,
      allowEmptyQueries: true,
      allowSnowflake: true,
      includeAllThreads: r,
      boosters: (0, g.X3)(c.rD.TEXT_CHANNEL)
    }).concat(g.Ay.queryChannels({
      query: e,
      type: f.vM,
      guildId: t,
      limit: 1 / 0,
      allowEmptyQueries: true,
      allowSnowflake: true,
      boosters: (0, g.X3)(c.rD.VOICE_CHANNEL)
    })).map(e => {
      let {
        record: t
      } = e;
      return t
    });
  if (r || (i = i.filter(e => !e.isThread())), 0 === e.length) {
    let e = _.A.getChannelId(t),
      n = i.find(t => t.id === e);
    null != n && (i.splice(i.indexOf(n), 1), i.unshift(n))
  }
  let a = f.Ay.getTextChannelNameDisambiguations(t);
  return s()(i).take(n).map(e => {
    var t, n;
    return {
      text: "".concat(null != (t = null == (n = a[e.id]) ? true : n.name) ? t : e.name),
      channel: e,
      key: e.id
    }
  }).value()
}

function eo(e) {
  let {
    query: t,
    searchContext: n,
    maxResults: r
  } = e;
  return ((t = t.trim()).startsWith('"') && t.endsWith('"') ? t = t.substring(1, t.length - 1).replaceAll(/\\(.)/g, (e, t) => t) : t.startsWith('"') && (t = t.substring(1).replaceAll(/\\(.)/g, (e, t) => t)), "#" === t[0] && (t = t.substring(1)), (0, A._B)(n)) ? es(t, n.guildId, r) : n.type !== I.I4_.DMS || h.A.hidePersonalInformation ? [] : ea(t, r, true)
}
let el = /^(?:\s*(\d{17,20}|@me|([^@#:]+)#([0-9]{4})|([a-z0-9_.]{2,32})))/i;
var ec = function(e) {
  return e.FILTER = "FILTER", e.ANSWER = "ANSWER", e
}({});

function eu(e) {
  let t = [T.intl.string(T.t.tPZo4p), T.intl.string(T.t.JL7sRS), T.intl.string(T.t.WjkIKU)],
    n = [T.intl.string(T.t.TNLcpx), T.intl.string(T.t.XM9XGP), T.intl.string(T.t.ZNR2fi), T.intl.string(T.t["AV/v6i"]), T.intl.string(T.t["20uQR3"]), T.intl.string(T.t.F8Wf0e), T.intl.string(T.t.L4lxyE), T.intl.string(T.t.PJgX2h), T.intl.string(T.t.nrpA5E)];
  return {
    [I.LWr.FILTER_FROM]: {
      regex: W(T.intl.string(T.t["1TUdFo"])),
      componentType: "FILTER",
      key: Y(T.intl.string(T.t["1TUdFo"])),
      plainText: T.intl.string(T.t["1TUdFo"]),
      validator: ei,
      getAutocompletions: er
    },
    [I.LWr.ANSWER_USERNAME_FROM]: {
      follows: [I.LWr.FILTER_FROM],
      regex: el,
      validator: K,
      mutable: true,
      componentType: "ANSWER",
      queryKey: "author_id"
    },
    [I.LWr.FILTER_MENTIONS]: {
      regex: W(T.intl.string(T.t["i96lO+"])),
      componentType: "FILTER",
      key: Y(T.intl.string(T.t["i96lO+"])),
      plainText: T.intl.string(T.t["i96lO+"]),
      validator: ei,
      getAutocompletions: er
    },
    [I.LWr.ANSWER_USERNAME_MENTIONS]: {
      follows: [I.LWr.FILTER_MENTIONS],
      regex: el,
      validator: K,
      mutable: true,
      componentType: "ANSWER",
      queryKey: "mentions"
    },
    [I.LWr.FILTER_HAS]: {
      regex: W(T.intl.string(T.t.CqCvir)),
      componentType: "FILTER",
      key: Y(T.intl.string(T.t.CqCvir)),
      plainText: T.intl.string(T.t.CqCvir),
      getAutocompletions(e) {
        let {
          query: t,
          maxResults: r
        } = e;
        return et(t, r, n)
      }
    },
    [I.LWr.ANSWER_HAS]: {
      regex: RegExp("(?:\\s*-?(".concat(n.map(e => E.A.escape(e)).join("|"), "))"), "i"),
      follows: [I.LWr.FILTER_HAS],
      validator: Q,
      componentType: "ANSWER",
      queryKey: "has"
    },
    [I.LWr.FILTER_FILE_TYPE]: {
      regex: W(T.intl.string(T.t.TMNjFm)),
      key: Y(T.intl.string(T.t.TMNjFm)),
      plainText: T.intl.string(T.t.TMNjFm),
      componentType: "FILTER"
    },
    [I.LWr.ANSWER_FILE_TYPE]: {
      regex: /(?:\s*([^\s]+))/,
      follows: [I.LWr.FILTER_FILE_TYPE],
      mutable: true,
      componentType: "ANSWER",
      queryKey: "attachment_extensions"
    },
    [I.LWr.FILTER_FILE_NAME]: {
      regex: W(T.intl.string(T.t["5xtLRC"])),
      key: Y(T.intl.string(T.t["5xtLRC"])),
      plainText: T.intl.string(T.t["5xtLRC"]),
      componentType: "FILTER"
    },
    [I.LWr.ANSWER_FILE_NAME]: {
      regex: /(?:\s*([^\s]+)(?=\s))/,
      follows: [I.LWr.FILTER_FILE_NAME],
      mutable: true,
      componentType: "ANSWER",
      queryKey: "attachment_filename"
    },
    [I.LWr.FILTER_BEFORE]: {
      regex: W(T.intl.string(T.t["qZ+7BA"])),
      componentType: "FILTER",
      key: Y(T.intl.string(T.t["qZ+7BA"])),
      plainText: T.intl.string(T.t["qZ+7BA"]),
      getAutocompletions(e) {
        let {
          query: t,
          maxResults: n
        } = e;
        return ee(t, n, I.LWr.FILTER_BEFORE)
      }
    },
    [I.LWr.FILTER_ON]: {
      regex: W("(".concat(T.intl.string(T.t.tIxkOo), "|").concat(T.intl.string(T.t.h2NzSd), ")")),
      componentType: "FILTER",
      key: Y(T.intl.string(T.t.h2NzSd)),
      plainText: T.intl.string(T.t.h2NzSd),
      getAutocompletions(e) {
        let {
          query: t,
          maxResults: n
        } = e;
        return ee(t, n, I.LWr.FILTER_ON)
      }
    },
    [I.LWr.FILTER_AFTER]: {
      regex: W(T.intl.string(T.t.KSDx7M)),
      componentType: "FILTER",
      key: Y(T.intl.string(T.t.KSDx7M)),
      plainText: T.intl.string(T.t.KSDx7M),
      getAutocompletions(e) {
        let {
          query: t,
          maxResults: n
        } = e;
        return ee(t, n, I.LWr.FILTER_AFTER)
      }
    },
    [I.LWr.ANSWER_BEFORE]: {
      regex: B,
      follows: [I.LWr.FILTER_BEFORE],
      componentType: "ANSWER",
      mutable: true,
      validator: e => z(e, "before")
    },
    [I.LWr.ANSWER_ON]: {
      regex: B,
      follows: [I.LWr.FILTER_ON],
      componentType: "ANSWER",
      mutable: true,
      validator: e => z(e, "on")
    },
    [I.LWr.ANSWER_AFTER]: {
      regex: B,
      follows: [I.LWr.FILTER_AFTER],
      componentType: "ANSWER",
      mutable: true,
      validator: e => z(e, "after")
    },
    [I.LWr.FILTER_IN]: {
      regex: W(T.intl.string(T.t.WNpFHa)),
      componentType: "FILTER",
      key: Y(T.intl.string(T.t.WNpFHa)),
      plainText: T.intl.string(T.t.WNpFHa),
      validator: () => {
        let t = null != e ? e : y.A.getSelectedSearchContext();
        return null != t && (0, A.Wg)(t)
      },
      getAutocompletions: eo
    },
    [I.LWr.ANSWER_IN]: {
      regex: S.r,
      mutable: true,
      follows: [I.LWr.FILTER_IN],
      componentType: "ANSWER",
      validator: t => {
        let n = null != e ? e : y.A.getSelectedSearchContext();
        return null != n && Z(t, n)
      },
      queryKey: "channel_id"
    },
    [I.LWr.FILTER_PINNED]: {
      regex: W(T.intl.string(T.t["0B74eY"])),
      componentType: "FILTER",
      key: Y(T.intl.string(T.t["0B74eY"])),
      plainText: T.intl.string(T.t["0B74eY"]),
      getAutocompletions: () => [{
        text: "true"
      }, {
        text: "false"
      }]
    },
    [I.LWr.ANSWER_PINNED]: {
      regex: H,
      componentType: "ANSWER",
      follows: [I.LWr.FILTER_PINNED],
      queryKey: "pinned",
      validator: e => {
        let t = e.getMatch(1);
        return "true" === t ? (e.setData("pinned", true), true) : "false" === t && (e.setData("pinned", false), true)
      }
    },
    [I.LWr.FILTER_AUTHOR_TYPE]: {
      regex: W(T.intl.string(T.t.us8IQi)),
      componentType: "FILTER",
      key: Y(T.intl.string(T.t.us8IQi)),
      plainText: T.intl.string(T.t.us8IQi),
      getAutocompletions(e) {
        let {
          query: n,
          maxResults: r
        } = e;
        return et(n, r, t)
      }
    },
    [I.LWr.ANSWER_AUTHOR_TYPE]: {
      regex: RegExp("(?:\\s*-?(".concat(t.map(e => E.A.escape(e)).join("|"), "))"), "i"),
      follows: [I.LWr.FILTER_AUTHOR_TYPE],
      validator: $,
      componentType: "ANSWER",
      queryKey: "author_type"
    }
  }
}
let ed = {};

function ef() {
  return eu({
    type: I.I4_.DMS
  })
}

function ep() {
  Object.assign(ed, eu())
}

function e_(e) {
  return I.l90.test(e)
}

function eh(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : Object.keys(ed).length,
    n = [];
  for (let r of Object.keys(ed)) {
    if (n.length >= t) break;
    let a = ed[r].key;
    e_(r) && null != a && i()(e.toLowerCase(), a) && n.push({
      token: r,
      text: a
    })
  }
  return n
}

function em(e) {
  if (0 === e.length) returnfalse;
  let t = e.toLowerCase().replace(/^@/, "");
  return T.intl.string(T.t.Qf3ptv).startsWith(t) || I.ME.substring(1).startsWith(t)
}
let eg = ed