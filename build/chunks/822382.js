/** Chunk was on web.js **/
/** chunk id: 822382, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E3: () => X,
  EH: () => $,
  Eq: () => J,
  Gk: () => U,
  IY: () => q,
  Jl: () => I,
  L5: () => L,
  Pe: () => W,
  Pp: () => j,
  Rt: () => Q,
  TZ: () => G,
  Wg: () => Z,
  XC: () => w,
  Zf: () => x,
  Zh: () => z,
  _B: () => T,
  _b: () => C,
  _o: () => Y,
  av: () => K,
  bS: () => A,
  dX: () => M,
  lX: () => V,
  mt: () => S,
  nm: () => N,
  rI: () => F,
  sh: () => R,
  zZ: () => k
}), require("./747238.js"), require("./896048.js"), require("./733351.js"), require("./591487.js"), require("./727858.js"), require("./321073.js"), require("./812715.js"), require("./866193.js");
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438);
require("./989349.js");
var Chunk988665 = require("./988665.js"),
  Chunk47167 = require("./47167.js"),
  Chunk734057 = require("./734057.js"),
  Chunk808728 = require("./808728.js"),
  Chunk517019 = require("./517019.js"),
  Chunk994500 = require("./994500.js"),
  Chunk309010 = require("./309010.js"),
  Chunk351906 = require("./351906.js"),
  Chunk287809 = require("./287809.js"),
  Chunk661191 = require("./661191.js"),
  Chunk427262 = require("./427262.js"),
  Chunk256796 = require("./256796.js"),
  Chunk353271 = require("./353271.js"),
  Chunk771650 = require("./771650.js");
require("./768570.js");
var Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      O(e, t, n[t])
    })
  }
  return e
}

function A(e) {
  switch (e.type) {
    case y.I4_.GUILD:
      return e.guildId;
    case y.I4_.GUILD_CHANNEL:
    case y.I4_.CHANNEL:
    case y.I4_.THREAD:
      return e.channelId;
    case y.I4_.DMS:
      return e.type;
    case y.I4_.FAVORITES:
      return y.YYv
  }
}

function I(e) {
  if (e.type === y.I4_.DMS) {
    var t;
    return null != (t = d.A.getChannelId(y.ME)) ? t : null
  }
  return A(e)
}

function S(e) {
  switch (e.type) {
    case y.I4_.GUILD_CHANNEL:
    case y.I4_.GUILD:
    case y.I4_.THREAD:
      return e.guildId;
    case y.I4_.CHANNEL:
      var t;
      let n = s.A.getChannel(e.channelId);
      return null != (t = null == n ? true : n.guild_id) ? t : null;
    case y.I4_.FAVORITES:
      return y.YYv;
    default:
      return null
  }
}

function T(e) {
  return e.type === y.I4_.GUILD || e.type === y.I4_.GUILD_CHANNEL || e.type === y.I4_.THREAD
}

function C(e) {
  switch (e.type) {
    case y.I4_.GUILD_CHANNEL:
    case y.I4_.CHANNEL:
    case y.I4_.THREAD:
      return e.channelId;
    default:
      return null
  }
}

function N(e) {
  switch (e) {
    case y.BBH.MOST_RELEVANT:
      return {
        sort_by: "relevance", sort_order: "desc"
      };
    case y.BBH.OLDEST:
      return {
        sort_by: "timestamp", sort_order: "asc"
      };
    case y.BBH.NEWEST:
    default:
      return {
        sort_by: "timestamp", sort_order: "desc"
      }
  }
}

function w(e) {
  return null == e.sort_by || null == e.sort_order ? y.BBH.NEWEST : "relevance" === e.sort_by ? y.BBH.MOST_RELEVANT : "asc" === e.sort_order ? y.BBH.OLDEST : y.BBH.NEWEST
}

function R(e) {
  switch (e) {
    case y.LWr.FILTER_FROM:
      return b.intl.string(b.t.E466pL);
    case y.LWr.FILTER_MENTIONS:
      return b.intl.string(b.t.BYvFWl);
    case y.LWr.FILTER_HAS:
      return b.intl.string(b.t.bhSYbc);
    case y.LWr.FILTER_BEFORE:
    case y.LWr.FILTER_ON:
    case y.LWr.FILTER_AFTER:
      return b.intl.string(b.t.Zbbc1E);
    case y.LWr.FILTER_IN:
      return b.intl.string(b.t["GpM+/7"]);
    case y.LWr.FILTER_FILE_TYPE:
      return b.intl.string(b.t.FXcAFe);
    case y.LWr.FILTER_FILE_NAME:
      return b.intl.string(b.t.uAbFDM);
    case y.LWr.FILTER_PINNED:
      return b.intl.string(b.t.UJxL3V);
    case y.LWr.FILTER_AUTHOR_TYPE:
      return b.intl.string(b.t.qCQzBl)
  }
}
let P = {
  [Chunk652215.LWr.FILTER_BEFORE]: true,
  [Chunk652215.LWr.FILTER_AFTER]: true,
  [Chunk652215.LWr.FILTER_ON]: true
};

function D(e) {
  let t = E.Ay[e],
    n = null != t ? t.queryKey : null;
  return null == n && (n = "content"), n
}

function L(e, t) {
  if (c.A.didAgree(t)) {
    let t = p.default.getCurrentUser();
    null != t && (e.include_nsfw = null == t.nsfwAllowed || t.nsfwAllowed)
  }
}

function x(e) {
  let t = {};
  for (let [n, r] of(e.forEach(e => {
      let {
        type: n
      } = e;
      if (y.l90.test(n)) return;
      switch (n) {
        case y.LWr.ANSWER_BEFORE:
        case y.LWr.ANSWER_ON:
        case y.LWr.ANSWER_AFTER:
          let r = e.getData("start"),
            i = e.getData("end");
          r && (t.min_id = _.default.fromTimestamp(r)), i && (t.max_id = _.default.fromTimestamp(i));
          return
      }
      let a = D(n);
      null == t[a] && (t[a] = new Set);
      let o = t[a];
      switch (n) {
        case y.LWr.ANSWER_USERNAME_FROM:
        case y.LWr.ANSWER_USERNAME_MENTIONS:
          o.add(e.getData("userId"));
          break;
        case y.LWr.ANSWER_FILE_TYPE:
        case y.LWr.ANSWER_FILE_NAME:
          o.add(e.getMatch(1));
          break;
        case y.LWr.ANSWER_IN:
          var s;
          for (let t of null != (s = e.getData("channelIds")) ? s : []) o.add(t);
          break;
        case y.LWr.ANSWER_HAS:
          o.add(e.getData("has"));
          break;
        case y.LWr.ANSWER_PINNED:
          o.add(e.getData("pinned"));
          break;
        case y.LWr.ANSWER_AUTHOR_TYPE:
          o.add(e.getData("author_type"));
          break;
        default:
          o.add(e.getFullMatch().trim())
      }
    }), Object.entries(t))) r instanceof Set && (t[n] = Array.from(r));
  if (t.content) {
    delete t.contents;
    let e = g.A.getCurrentConfig({
      location: "getSearchQueryFromTokens"
    });
    if (e.enabled) {
      let n = [],
        r = e.brackets ? RegExp("(\\[([^\\]]+)\\]|(?:\\S+))", "gu") : e.quotes ? RegExp('("([^"]+)"|(?:\\S+))', "gu") : RegExp("(\\S+)", "gu");
      for (let i of t.content) {
        let t = i.match(r);
        if (null != t)
          for (let r of t) {
            let t = e.brackets && r.startsWith("[") && r.endsWith("]"),
              i = e.quotes && r.startsWith('"') && r.endsWith('"'),
              a = r.includes("://"),
              o = t || i || a ? 0 : 2;
            n.push("".concat(o, "|").concat(r))
          }
      }
      n.length > 0 && (t.contents = n), delete t.content
    } else t.content = t.content.join(" ").trim(), t.content || delete t.content
  }
  return t
}

function M(e) {
  var t;
  return (null == e ? true : e.contents) != null && e.contents.length > 0 ? null == e || null == (t = e.contents) ? true : t.map(e => e.split("|").slice(1).join("|")).join(" ") : null == e ? true : e.content
}

function j(e) {
  return e.map(e => e.type === a.Ay.NON_TOKEN_TYPE ? e.getFullMatch() : "").join(" ").trim()
}

function k(e, t, n) {
  let r, i, a = e.find((a, o) => t >= a.start && t <= a.end && n >= a.start && n <= a.end ? (null != e[o + 1] && (i = e[o + 1]), true) : (r = a, false));
  return null == a ? null : {
    previousToken: r,
    currentToken: a,
    nextToken: i,
    focusOffset: t,
    anchorOffset: n
  }
}

function U(e, t) {
  let n, {
    currentToken: r,
    nextToken: i,
    previousToken: o
  } = e = null != e ? e : {};
  if (0 === t.length) return {
    type: y.o$q.EMPTY,
    filter: null,
    token: null
  };
  if (null == r) return {
    type: y.o$q.FILTER_ALL,
    filter: null,
    token: null
  };
  if ((0, E.If)(r.type)) {
    if (null == i || i.type === a.Ay.NON_TOKEN_TYPE) return {
      type: y.o$q.FILTER,
      filter: r.type,
      token: i
    };
    if (null != i && !y.T2E.test(i.type)) return {
      type: y.o$q.FILTER,
      filter: r.type,
      token: null
    }
  }
  return r.type === a.Ay.NON_TOKEN_TYPE && null != o && (0, E.If)(o.type) ? {
    type: y.o$q.FILTER,
    filter: o.type,
    token: r
  } : (r.type === a.Ay.NON_TOKEN_TYPE && (n = r), {
    type: y.o$q.FILTER_ALL,
    filter: null,
    token: n
  })
}

function G(e) {
  if (null == e.match(/([\\" ])/g)) return e;
  {
    let t = e.replaceAll(/([\\"])/g, (e, t) => "\\".concat(t));
    return '"'.concat(t, '"')
  }
}

function F(e) {
  return e.reduce((e, t) => null == t ? e : t.results.length + e, 0)
}

function V(e) {
  return null == e ? "" : e.map(e => e.getFullMatch()).join("")
}
let B = new Chunk988665.Ay,
  H = new Chunk988665.Ay;

function Y(e) {
  return B.tokenize(e)
}

function W() {
  B.clearCache(), H.clearCache()
}

function K(e) {
  return null != e ? P[e] : null
}

function z(e, t) {
  let n = y.l90.test(e.type);
  return (null != t || !n) && (null == t || !n || !!y.T2E.test(t.type))
}

function q() {
  (0, E.G0)(), B.reset(), i()(E.Ay).forOwn((e, t) => B.addRule(v({
    type: t
  }, e))), H.reset();
  let e = (0, E.gU)();
  i()(e).forOwn((e, t) => H.addRule(v({
    type: t
  }, e))), m.A.markSearchTokensRefreshed()
}

function Z(e) {
  return !!T(e) || e.type === y.I4_.DMS && !f.A.hidePersonalInformation
}

function Q(e) {
  let t = e.name,
    n = false;
  if (e.isGroupDM()) t = (0, o.m1)(e, p.default, u.A);
  else if (e.isDM()) {
    let n = e.getRecipientId(),
      r = p.default.getUser(n),
      i = h.Ay.getUserTag(r);
    if (null == i) return null;
    t = i
  } else {
    n = !e.isThread();
    let r = l.Ay.getTextChannelNameDisambiguations(e.getGuildId())[e.id];
    (null == r ? true : r.name) != null && (t = r.name)
  }
  return (t = G(t), n) ? "#".concat(t) : t
}

function X(e) {
  var t;
  if (e.isGroupDM()) return (0, o.m1)(e, p.default, u.A);
  if (e.isDM()) {
    let t = e.getRecipientId(),
      n = p.default.getUser(t);
    return h.Ay.getUserTag(n)
  }
  let n = l.Ay.getTextChannelNameDisambiguations(e.getGuildId())[e.id];
  return null != (t = null == n ? true : n.name) ? t : e.name
}

function J() {
  var e, t;
  return null != (e = null == (t = p.default.getCurrentUser()) ? true : t.isStaff()) && e
}

function $(e) {
  let t = H.tokenize(e),
    n = [];
  t.forEach(e => {
    e.type !== y.LWr.FILTER_IN && e.type !== y.LWr.ANSWER_IN && n.push(e)
  });
  let r = "";
  return n.forEach(e => {
    r += e.getFullMatch()
  }), r.trim()
}