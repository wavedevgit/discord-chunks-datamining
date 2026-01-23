/** Chunk was on web.js **/
/** chunk id: 969632, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $m: () => V,
  G8: () => L,
  Gh: () => N,
  I7: () => w,
  Il: () => M,
  Kj: () => C,
  ND: () => P,
  VD: () => D,
  Wn: () => R,
  YP: () => S,
  aw: () => k
}), require("./747238.js"), require("./812715.js"), require("./896048.js"), require("./733351.js");
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk835245 = require("./835245.js"),
  Chunk23339 = require("./23339.js"),
  Chunk311907 = require("./311907.js"),
  Chunk695870 = require("./695870.js"),
  Chunk505527 = require("./505527.js"),
  Chunk763754 = require("./763754.js"),
  Chunk734057 = require("./734057.js"),
  Chunk956703 = require("./956703.js"),
  Chunk320501 = require("./320501.js"),
  Chunk576705 = require("./576705.js"),
  Chunk994500 = require("./994500.js"),
  Chunk927813 = require("./927813.js"),
  Chunk562153 = require("./562153.js"),
  Chunk412136 = require("./412136.js"),
  Chunk652215 = require("./652215.js"),
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

function A(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function S() {
  return {
    text: true,
    image: true,
    localCreationAnswerId: T()
  }
}

function T() {
  return (0, a.A)()
}

function C(e) {
  let t = /\b[a-f\d]{8}-(?:[a-f\d]{4}-){3}[a-f\d]{12}-\b/i;
  return e.replace(t, "")
}

function N(e) {
  for (let t of e.reactions)
    if (null == t.me_vote) returntrue;
  returnfalse
}

function w(e) {
  return (0, o.bG)([_.A], () => null != e && e.id !== l.E && !!y.kvI.POLLS.has(e.type) && (!!e.isPrivate() || _.A.can(y.xBc.SEND_MESSAGES, e) && _.A.can(y.xBc.SEND_POLLS, e)))
}

function R(e, t) {
  return 0 === e.length && null == t.find(e => P(e))
}

function P(e) {
  var t;
  let n = null == (t = e.text) ? true : t.trim();
  return null != n && n.length > 0
}

function D(e) {
  var t;
  let n = null == (t = e.text) ? true : t.trim();
  return null != e.image && (null == n || 0 === n.length)
}

function x(e) {
  return new Date(Date.now() + e * m.A.Millis.HOUR).toISOString()
}

function L(e) {
  var t;
  if (null == e) return;
  let n = null == e || null == (t = e.answers) ? true : t.map((e, t) => {
      var n, r;
      let i = null == (r = e.poll_media) ? true : r.emoji,
        a = I(v({}, e.poll_media), {
          emoji: null != i ? {
            id: i.id,
            name: null != (n = i.name) ? n : ""
          } : true
        });
      return I(v({}, e), {
        answer_id: t + 1,
        poll_media: a
      })
    }),
    r = (null == e ? true : e.duration) != null ? x(e.duration) : "0";
  return I(v({}, e), {
    expiry: r,
    answers: n
  })
}

function j(e, t) {
  var n, r, i, a;
  let o = null != (n = null == (a = e.embeds[0]) || null == (i = a.fields) || null == (r = i.find(e => "poll_question_text" === e.rawName)) ? true : r.rawValue) ? n : "";
  return null != t ? (0, s.EJ)(o, t) : o
}

function M(e) {
  let t = (0, u.p_)(e),
    n = j(e, E.TU);
  return b.intl.format(b.t.Vn97Ka, {
    username: t.nick,
    title: n
  })
}

function k(e) {
  return e.reduce((e, t) => {
    var n, r;
    return e + (null != (n = null == (r = t.count_details) ? true : r.vote) ? n : 0)
  }, 0)
}

function U(e, t) {
  var n;
  let r = {
      id: t,
      name: "",
      animated: false
    },
    a = e.getChannelId(),
    s = f.A.getReactions(a, e.id, r, E.kx, c.v.VOTE),
    o = d.A.getChannel(a),
    l = null == o || o.isPrivate() ? null : o.getGuildId();
  return i()(Array.from(null != (n = null == s ? true : s.values()) ? n : [])).reject(e => h.A.isBlockedOrIgnored(e.id)).take(E.kx).map(e => g.Ay.getName(l, null == o ? true : o.id, e)).value()
}

function G(e, t) {
  let n = Math.max(0, t - e.length);
  if (1 === e.length)
    if (n > 0) return b.intl.formatToPlainString(b.t["SV/iZn"], {
      a: e[0],
      n: n
    });
    else return e[0];
  if (2 === e.length)
    if (n > 0) return b.intl.formatToPlainString(b.t.YBnZK0, {
      a: e[0],
      b: e[1],
      n: n
    });
    else return b.intl.formatToPlainString(b.t["O5+f5c"], {
      a: e[0],
      b: e[1]
    });
  return 3 !== e.length ? b.intl.formatToPlainString(b.t.yVX6kE, {
    n: n
  }) : n > 0 ? b.intl.formatToPlainString(b.t["ThXp+N"], {
    a: e[0],
    b: e[1],
    c: e[2],
    n: n
  }) : b.intl.formatToPlainString(b.t["0UzBM3"], {
    a: e[0],
    b: e[1],
    c: e[2]
  })
}

function V(e, t, n) {
  var r, i;
  let a = p.A.getMessage(t, e);
  if (null == a) return "";
  let s = a.getReaction({
      id: n,
      name: "",
      animated: false
    }),
    o = null != (r = null == s || null == (i = s.count_details) ? true : i.vote) ? r : 0,
    l = U(a, n);
  return 0 === l.length ? "" : G(l, o)
}