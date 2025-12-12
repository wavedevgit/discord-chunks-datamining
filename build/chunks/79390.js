/** Chunk was on web.js **/
/** chunk id: 79390, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D$: () => R,
  N4: () => M,
  UI: () => P,
  Uu: () => T,
  cS: () => w,
  cZ: () => k,
  e1: () => Z,
  eQ: () => N,
  fw: () => A,
  uY: () => D,
  x9: () => L
}), require("./704826.js"), require("./35282.js"), require("./388685.js"), require("./781311.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk772848 = require("./772848.js"),
  Chunk468194 = require("./468194.js"),
  Chunk442837 = require("./442837.js"),
  Chunk333023 = require("./333023.js"),
  Chunk566006 = require("./566006.js"),
  Chunk739566 = require("./739566.js"),
  Chunk592125 = require("./592125.js"),
  Chunk542578 = require("./542578.js"),
  Chunk375954 = require("./375954.js"),
  Chunk496675 = require("./496675.js"),
  Chunk699516 = require("./699516.js"),
  Chunk70956 = require("./70956.js"),
  Chunk5192 = require("./5192.js"),
  Chunk489887 = require("./489887.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

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

function S(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function T() {
  return {
    text: true,
    image: true,
    localCreationAnswerId: C()
  }
}

function C() {
  return (0, Chunk772848.Z)()
}

function A(e) {
  let t = /\b[a-f\d]{8}-(?:[a-f\d]{4}-){3}[a-f\d]{12}-\b/i;
  return e.replace(t, "")
}

function N(e) {
  for (let t of e.reactions)
    if (null == t.me_vote) returntrue;
  returnfalse
}

function P(e) {
  return (0, s.e7)([_.Z], () => null != e && e.id !== l.V && !!b.TPd.POLLS.has(e.type) && (!!e.isPrivate() || _.Z.can(b.Plq.SEND_MESSAGES, e) && _.Z.can(b.Plq.SEND_POLLS, e)))
}

function R(e, t) {
  return 0 === e.length && null == t.find(e => w(e))
}

function w(e) {
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
  return new Date(Date.now() + e * h.Z.Millis.HOUR).toISOString()
}

function L(e) {
  var t;
  if (null == e) return;
  let n = null == e || null == (t = e.answers) ? true : t.map((e, t) => {
      var n, r;
      let i = null == (n = e.poll_media) ? true : n.emoji,
        o = I(v({}, e.poll_media), {
          emoji: null != i ? {
            id: i.id,
            name: null != (r = i.name) ? r : ""
          } : true
        });
      return I(v({}, e), {
        answer_id: t + 1,
        poll_media: o
      })
    }),
    r = (null == e ? true : e.duration) != null ? x(e.duration) : "0";
  return I(v({}, e), {
    expiry: r,
    answers: n
  })
}

function j(e, t) {
  var n, r, i, o;
  let s = null != (o = null == (i = e.embeds[0]) || null == (r = i.fields) || null == (n = r.find(e => "poll_question_text" === e.rawName)) ? true : n.rawValue) ? o : "";
  return null != t ? (0, a.aF)(s, t) : s
}

function M(e) {
  let t = (0, u.ZH)(e),
    n = j(e, E.Dv);
  return y.intl.format(y.t.Vn97Ka, {
    username: t.nick,
    title: n
  })
}

function k(e) {
  return e.reduce((e, t) => {
    var n, r;
    return e + (null != (r = null == (n = t.count_details) ? true : n.vote) ? r : 0)
  }, 0)
}

function U(e, t) {
  var n;
  let r = {
      id: t,
      name: "",
      animated: false
    },
    o = e.getChannelId(),
    a = f.Z.getReactions(o, e.id, r, E.$J, c.O.VOTE),
    s = d.Z.getChannel(o),
    l = null == s || s.isPrivate() ? null : s.getGuildId();
  return i()(Array.from(null != (n = null == a ? true : a.values()) ? n : [])).reject(e => m.Z.isBlockedOrIgnored(e.id)).take(E.$J).map(e => g.ZP.getName(l, null == s ? true : s.id, e)).value()
}

function G(e, t) {
  let n = Math.max(0, t - e.length);
  if (1 === e.length)
    if (n > 0) return y.intl.formatToPlainString(y.t["SV/iZn"], {
      a: e[0],
      n: n
    });
    else return e[0];
  if (2 === e.length)
    if (n > 0) return y.intl.formatToPlainString(y.t.YBnZK0, {
      a: e[0],
      b: e[1],
      n: n
    });
    else return y.intl.formatToPlainString(y.t["O5+f5c"], {
      a: e[0],
      b: e[1]
    });
  return 3 !== e.length ? y.intl.formatToPlainString(y.t.yVX6kE, {
    n: n
  }) : n > 0 ? y.intl.formatToPlainString(y.t["ThXp+N"], {
    a: e[0],
    b: e[1],
    c: e[2],
    n: n
  }) : y.intl.formatToPlainString(y.t["0UzBM3"], {
    a: e[0],
    b: e[1],
    c: e[2]
  })
}

function Z(e, t, n) {
  var r, i;
  let o = p.Z.getMessage(t, e);
  if (null == o) return "";
  let a = o.getReaction({
      id: n,
      name: "",
      animated: false
    }),
    s = null != (i = null == a || null == (r = a.count_details) ? true : r.vote) ? i : 0,
    l = U(o, n);
  return 0 === l.length ? "" : G(l, s)
}