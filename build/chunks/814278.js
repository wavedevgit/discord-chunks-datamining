/** Chunk was on 97283 **/
/** chunk id: 814278, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A5: () => j,
  Dh: () => N,
  Lu: () => D,
  Vw: () => G,
  W0: () => L,
  Z1: () => k,
  aW: () => w,
  bk: () => F,
  dc: () => O,
  iO: () => Y,
  kj: () => V,
  m8: () => W,
  tC: () => M,
  to: () => B,
  z4: () => z
}), require("./927092.js"), require("./212978.js"), require("./201528.js"), require("./393431.js"), require("./752391.js"), require("./532706.js"), require("./42231.js"), require("./232424.js"), require("./757074.js"), require("./949626.js"), require("./767709.js"), require("./65162.js"), require("./896048.js");
var Chunk827762 = require("./827762.js"),
  Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk989349 = require("./989349.js"),
  l = require.n(Chunk989349),
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

function w() {
  return y.A.getArticleURL(C.MVz.END_TO_END_ENCRYPTION)
}

function D() {
  return y.A.getArticleURL(C.MVz.END_TO_END_ENCRYPTION)
}

function O() {
  return y.A.getArticleURL(C.MVz.END_TO_END_ENCRYPTION)
}

function F(e, t, n, r, i) {
  n ? I.A.createSecureFramesVerifiedKey(e, t) : I.A.createSecureFramesTransientKey(e, t), (0, T.cw)({
    channelId: r,
    userId: e,
    analyticsLocation: i
  })
}

function N(e, t, n) {
  if (n) {
    let n = (0, u.uo)(new Uint8Array(t));
    I.A.deleteSecureFramesVerifiedKey(e, n)
  } else I.A.deleteSecureFramesTransientKey(e)
}

function L(e, t) {
  m.A.openSecureFramesUpdateConfirmation({
    title: b.intl.string(b.t.hdL152),
    subtitle: b.intl.string(b.t["8VGYKg"]),
    onConfirm: () => {
      I.A.deleteSecureFramesVerifiedKey(e, t), (0, T.Jk)()
    }
  })
}

function V(e) {
  let t = A.default.getUser(e),
    n = p.Ay.getName(t);
  m.A.openSecureFramesUpdateConfirmation({
    title: b.intl.formatToPlainString(b.t.K6NGBy, {
      username: n
    }),
    subtitle: b.intl.string(b.t.F1BQK3),
    onConfirm: () => {
      I.A.deleteSecureFramesUserVerifiedKeys(e), (0, T.YT)()
    }
  })
}

function M(e) {
  let t = l()(e),
    n = l()().diff(t, "s");
  if (n > 12 * S.A.Seconds.DAYS_30) {
    let e = Math.round(n / (12 * S.A.Seconds.DAYS_30));
    return b.intl.formatToPlainString(b.t.F1wqkD, {
      count: e
    })
  }
  if (n > S.A.Seconds.DAYS_30) {
    let e = Math.round(n / S.A.Seconds.DAYS_30);
    return b.intl.formatToPlainString(b.t["iT+b+2"], {
      count: e
    })
  }
  if (n > 7 * S.A.Seconds.DAY) {
    let e = Math.round(n / (7 * S.A.Seconds.DAY));
    return b.intl.formatToPlainString(b.t.dLurKZ, {
      count: e
    })
  }
  if (n > S.A.Seconds.DAY) {
    let e = Math.round(n / S.A.Seconds.DAY);
    return b.intl.formatToPlainString(b.t.LE8a2H, {
      count: e
    })
  }
  if (n > S.A.Seconds.HOUR) {
    let e = Math.round(n / S.A.Seconds.HOUR);
    return b.intl.formatToPlainString(b.t.KULxVS, {
      count: e
    })
  } else {
    if (!(n > S.A.Seconds.MINUTE)) return b.intl.formatToPlainString(b.t["/w0Qpw"], {
      count: n
    });
    let e = Math.round(n / S.A.Seconds.MINUTE);
    return b.intl.formatToPlainString(b.t.ws6rWq, {
      count: e
    })
  }
}

function k(e) {
  let {
    isCurrentUserKeyPersistent: t,
    isOtherUserKeyPersistent: n,
    otherUserNickname: r
  } = e;
  return t && n ? b.intl.format(b.t["FJN+kh"], {
    helpArticle: w()
  }) : t ? b.intl.format(b.t["p/9PGp"], {
    username: r,
    helpArticle: w()
  }) : n ? b.intl.format(b.t.qT5z87, {
    helpArticle: w()
  }) : b.intl.format(b.t["6JLy+i"], {
    helpArticle: w()
  })
}
async function K(e) {
  let t = E.default.getStaticAuthSessionId();
  return a()(null != t, "[getCurrentUserPublicKey] session id should not be null"), await d.A.getMLSSigningKey(t, e)
}

function P(e) {
  let t = r.fromByteArray(new Uint8Array(e));
  return "data:application/octet-stream;base64,".concat(t)
}
async function Y(e, t, n) {
  try {
    return (await c.Bo.post({
      url: C.Rsh.VOICE_MATCH_PUBLIC_KEY(e),
      body: {
        public_key: P(t),
        key_version: n
      },
      rejectWithError: false
    })).body.is_match
  } catch (e) {
    throw g.A.captureException(e), e
  }
}
async function v(e) {
  let {
    key: t,
    signature: n
  } = await K(e);
  try {
    await c.Bo.put({
      url: C.Rsh.VOICE_PUBLIC_KEYS(),
      body: {
        public_key: P(t),
        signature: P(n),
        key_version: e
      },
      rejectWithError: false
    }), I.A.addUploadedKeyVersion(e)
  } catch (e) {
    throw g.A.captureException(e), e
  }
}

function H(e) {
  return R.A.getUploadedKeyVersionsCached().includes(e)
}
async function B(e) {
  H(e) || await v(e)
}
async function j(e) {
  if (!H(e)) return await v(e), true;
  let t = E.default.getId(),
    {
      key: n
    } = await K(e),
    r = await Y(t, n, e);
  return r || (0, T.XS)(e), r
}

function W(e, t) {
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

function G(e) {
  let {
    userId: t,
    channelId: n,
    nickname: r
  } = e;
  (0, T.kF)({
    userId: t,
    channelId: n,
    keyVersion: 1,
    reason: U.m4.OTHER_USER_INCONSISTENT_KEYS
  }), s.A.show({
    title: b.intl.string(b.t.mznLyR),
    body: b.intl.format(b.t.WY6IKb, {
      username: r
    })
  })
}

function z(e) {
  let {
    userId: t,
    guildId: n,
    channelId: r
  } = e;
  if (!W(t, [f.A, _.A])) returntrue;
  {
    let e = A.default.getUser(t),
      i = h.Ay.getName(n, r, e);
    return G({
      userId: t,
      channelId: r,
      nickname: i
    }), false
  }
}