/** Chunk was on web.js **/
/** chunk id: 814278, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A5: () => H,
  Dh: () => D,
  Lu: () => w,
  Vw: () => W,
  W0: () => x,
  Z1: () => M,
  aW: () => N,
  bk: () => P,
  dc: () => R,
  iO: () => G,
  kj: () => L,
  m8: () => Y,
  tC: () => j,
  to: () => B,
  z4: () => K
}), require("./927092.js"), require("./212978.js"), require("./201528.js"), require("./393431.js"), require("./752391.js"), require("./532706.js"), require("./42231.js"), require("./232424.js"), require("./757074.js"), require("./949626.js"), require("./767709.js"), require("./65162.js"), require("./896048.js");
var Chunk827762 = require("./827762.js"),
  Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk989349 = require("./989349.js"),
  o = require.n(Chunk989349),
  Chunk562465 = require("./562465.js"),
  Chunk149597 = require("./149597.js"),
  Chunk157559 = require("./157559.js"),
  Chunk961350 = require("./961350.js"),
  Chunk430452 = require("./430452.js"),
  Chunk383501 = require("./383501.js"),
  Chunk162605 = require("./162605.js"),
  Chunk287809 = require("./287809.js"),
  Chunk927813 = require("./927813.js"),
  Chunk975571 = require("./975571.js"),
  Chunk562153 = require("./562153.js"),
  Chunk728458 = require("./728458.js"),
  Chunk427262 = require("./427262.js"),
  Chunk936388 = require("./936388.js"),
  Chunk714763 = require("./714763.js"),
  Chunk144485 = require("./144485.jsx"),
  Chunk798286 = require("./798286.js"),
  Chunk603266 = require("./603266.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function N() {
  return g.A.getArticleURL(T.MVz.END_TO_END_ENCRYPTION)
}

function w() {
  return g.A.getArticleURL(T.MVz.END_TO_END_ENCRYPTION)
}

function R() {
  return g.A.getArticleURL(T.MVz.END_TO_END_ENCRYPTION)
}

function P(e, t, n, r, i) {
  n ? O.A.createSecureFramesVerifiedKey(e, t) : O.A.createSecureFramesTransientKey(e, t), (0, I.cw)({
    channelId: r,
    userId: e,
    analyticsLocation: i
  })
}

function D(e, t, n) {
  if (n) {
    let n = (0, c.uo)(new Uint8Array(t));
    O.A.deleteSecureFramesVerifiedKey(e, n)
  } else O.A.deleteSecureFramesTransientKey(e)
}

function x(e, t) {
  A.A.openSecureFramesUpdateConfirmation({
    title: C.intl.string(C.t.hdL152),
    subtitle: C.intl.string(C.t["8VGYKg"]),
    onConfirm: () => {
      O.A.deleteSecureFramesVerifiedKey(e, t), (0, I.Jk)()
    }
  })
}

function L(e) {
  let t = h.default.getUser(e),
    n = b.Ay.getName(t);
  A.A.openSecureFramesUpdateConfirmation({
    title: C.intl.formatToPlainString(C.t.K6NGBy, {
      username: n
    }),
    subtitle: C.intl.string(C.t.F1BQK3),
    onConfirm: () => {
      O.A.deleteSecureFramesUserVerifiedKeys(e), (0, I.YT)()
    }
  })
}

function j(e) {
  let t = o()(e),
    n = o()().diff(t, "s");
  if (n > 12 * m.A.Seconds.DAYS_30) {
    let e = Math.round(n / (12 * m.A.Seconds.DAYS_30));
    return C.intl.formatToPlainString(C.t.F1wqkD, {
      count: e
    })
  }
  if (n > m.A.Seconds.DAYS_30) {
    let e = Math.round(n / m.A.Seconds.DAYS_30);
    return C.intl.formatToPlainString(C.t["iT+b+2"], {
      count: e
    })
  }
  if (n > 7 * m.A.Seconds.DAY) {
    let e = Math.round(n / (7 * m.A.Seconds.DAY));
    return C.intl.formatToPlainString(C.t.dLurKZ, {
      count: e
    })
  }
  if (n > m.A.Seconds.DAY) {
    let e = Math.round(n / m.A.Seconds.DAY);
    return C.intl.formatToPlainString(C.t.LE8a2H, {
      count: e
    })
  }
  if (n > m.A.Seconds.HOUR) {
    let e = Math.round(n / m.A.Seconds.HOUR);
    return C.intl.formatToPlainString(C.t.KULxVS, {
      count: e
    })
  } else {
    if (!(n > m.A.Seconds.MINUTE)) return C.intl.formatToPlainString(C.t["/w0Qpw"], {
      count: n
    });
    let e = Math.round(n / m.A.Seconds.MINUTE);
    return C.intl.formatToPlainString(C.t.ws6rWq, {
      count: e
    })
  }
}

function M(e) {
  let {
    isCurrentUserKeyPersistent: t,
    isOtherUserKeyPersistent: n,
    otherUserNickname: r
  } = e;
  return t && n ? C.intl.format(C.t["FJN+kh"], {
    helpArticle: N()
  }) : t ? C.intl.format(C.t["p/9PGp"], {
    username: r,
    helpArticle: N()
  }) : n ? C.intl.format(C.t.qT5z87, {
    helpArticle: N()
  }) : C.intl.format(C.t["6JLy+i"], {
    helpArticle: N()
  })
}
async function k(e) {
  let t = d.default.getStaticAuthSessionId();
  return a()(null != t, "[getCurrentUserPublicKey] session id should not be null"), await f.A.getMLSSigningKey(t, e)
}

function U(e) {
  let t = r.fromByteArray(new Uint8Array(e));
  return "data:application/octet-stream;base64,".concat(t)
}
async function G(e, t, n) {
  try {
    return (await l.Bo.post({
      url: T.Rsh.VOICE_MATCH_PUBLIC_KEY(e),
      body: {
        public_key: U(t),
        key_version: n
      },
      rejectWithError: false
    })).body.is_match
  } catch (e) {
    throw y.A.captureException(e), e
  }
}
async function V(e) {
  let {
    key: t,
    signature: n
  } = await k(e);
  try {
    await l.Bo.put({
      url: T.Rsh.VOICE_PUBLIC_KEYS(),
      body: {
        public_key: U(t),
        signature: U(n),
        key_version: e
      },
      rejectWithError: false
    }), O.A.addUploadedKeyVersion(e)
  } catch (e) {
    throw y.A.captureException(e), e
  }
}

function F(e) {
  return v.A.getUploadedKeyVersionsCached().includes(e)
}
async function B(e) {
  F(e) || await V(e)
}
async function H(e) {
  if (!F(e)) return await V(e), true;
  let t = d.default.getId(),
    {
      key: n
    } = await k(e),
    r = await G(t, n, e);
  return r || (0, I.XS)(e), r
}

function Y(e, t) {
  let [n, r] = t;
  if (!n.isUserConnected(e)) returnfalse;
  let i = n.getSecureFramesRosterMapEntry(e);
  if (null == i) returnfalse;
  let a = new Uint8Array(i);
  for (let t of r.getAllActiveStreamKeys()) {
    if (!r.isUserConnected(t, e)) continue;
    let n = _.A.getSecureFramesRosterMapEntry(t, e);
    if (null == n) returntrue;
    let i = new Uint8Array(n);
    for (let e = 0; e < a.length; e++)
      if (a[e] !== i[e]) returntrue
  }
  returnfalse
}

function W(e) {
  let {
    userId: t,
    channelId: n,
    nickname: r
  } = e;
  (0, I.kF)({
    userId: t,
    channelId: n,
    keyVersion: 1,
    reason: S.m4.OTHER_USER_INCONSISTENT_KEYS
  }), u.A.show({
    title: C.intl.string(C.t.mznLyR),
    body: C.intl.format(C.t.WY6IKb, {
      username: r
    })
  })
}

function K(e) {
  let {
    userId: t,
    guildId: n,
    channelId: r
  } = e;
  if (!Y(t, [p.A, _.A])) returntrue;
  {
    let e = h.default.getUser(t),
      i = E.Ay.getName(n, r, e);
    return W({
      userId: t,
      channelId: r,
      nickname: i
    }), false
  }
}