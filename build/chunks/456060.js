/** Chunk was on 92917 **/
/** chunk id: 456060, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  BE: () => d,
  SJ: () => p,
  Wf: () => c,
  YC: () => u,
  n$: () => o
});
var Chunk287809 = require("./287809.js"),
  Chunk562153 = require("./562153.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk426127 = require("./426127.js");

function o(e, t, n) {
  switch (t) {
    case l.xL.LISTEN:
      return a.intl.formatToPlainString(a.t["/8czH4"], {
        name: e
      });
    case l.xL.WATCH:
      return a.intl.formatToPlainString(a.t.BBJXVk, {
        name: e
      });
    case l.xL.JOIN:
      return n ? true : a.intl.string(a.t.pkq6Vq);
    case l.xL.STREAM_REQUEST:
      return a.intl.string(s.default.DKHhec);
    case l.xL.JOIN_REQUEST:
    default:
      return a.intl.string(a.t.Ckxb6j)
  }
}

function c(e, t, n) {
  return e.author.id === n ? a.intl.string(s.default["8B3U5O"]) : a.intl.formatToPlainString(s.default["d/qbC0"], {
    username: (0, i.mG)(t.guild_id, t.id, e.author)
  })
}

function u(e, t, n, i, l) {
  if (e.author.id === i) {
    if (n.isPrivate()) {
      let e = r.default.getUser(n.getRecipientId());
      if (null != e) return l ? a.intl.formatToPlainString(a.t.JddpN2, {
        username: e.globalName,
        appName: t
      }) : a.intl.formatToPlainString(a.t.gYVkSW, {
        username: e.globalName,
        appName: t
      })
    }
    return l ? a.intl.formatToPlainString(a.t["2N1kNS"], {
      appName: t
    }) : a.intl.formatToPlainString(a.t.IA6uDV, {
      appName: t
    })
  }
  return l ? a.intl.formatToPlainString(a.t.XE8axA, {
    username: e.author.globalName,
    appName: t
  }) : a.intl.formatToPlainString(a.t.hgcjOn, {
    username: e.author.globalName,
    appName: t
  })
}

function d(e, t, n, r, i) {
  var s;
  switch (null == (s = e.activity) ? true : s.type) {
    case l.xL.LISTEN:
    case l.xL.WATCH:
    case l.xL.JOIN:
      return a.intl.string(i ? a.t.x1UXGR : a.t["Ek+51n"]);
    case l.xL.STREAM_REQUEST:
      return c(e, n, r);
    case l.xL.JOIN_REQUEST:
    default:
      return u(e, t, n, r, true)
  }
}

function p(e) {
  let {
    activityActionType: t,
    maxPartySize: n,
    partySize: r
  } = e;
  return t === l.xL.STREAM_REQUEST ? "" : t === l.xL.LISTEN ? n > 0 ? a.intl.formatToPlainString(a.t.Zogoou, {
    partySize: r,
    maxPartySize: n
  }) : a.intl.formatToPlainString(a.t.UGei0j, {
    partySize: r
  }) : n > 0 ? a.intl.formatToPlainString(a.t.gLu7NU, {
    partySize: r,
    maxPartySize: n
  }) : a.intl.formatToPlainString(a.t["65JnWC"], {
    partySize: r
  })
}