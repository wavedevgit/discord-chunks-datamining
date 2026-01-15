/** Chunk was on web.js **/
/** chunk id: 630759, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J6: () => G,
  LO: () => D,
  TQ: () => R,
  UB: () => H,
  ZU: () => x,
  Zn: () => L,
  aZ: () => P,
  bo: () => j,
  fz: () => W,
  kK: () => M,
  lg: () => Y,
  om: () => B,
  pL: () => w,
  uV: () => N,
  uX: () => V
}), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js"), require("./388685.js");
var Chunk250683 = require("./250683.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk913527 = require("./913527.js"),
  s = require.n(Chunk913527),
  Chunk544891 = require("./544891.js"),
  Chunk974167 = require("./974167.js"),
  Chunk668781 = require("./668781.js"),
  Chunk314897 = require("./314897.js"),
  Chunk131951 = require("./131951.js"),
  Chunk19780 = require("./19780.js"),
  Chunk959457 = require("./959457.js"),
  Chunk594174 = require("./594174.js"),
  Chunk70956 = require("./70956.js"),
  Chunk63063 = require("./63063.js"),
  Chunk5192 = require("./5192.js"),
  Chunk960048 = require("./960048.js"),
  Chunk51144 = require("./51144.js"),
  Chunk90641 = require("./90641.js"),
  Chunk615830 = require("./615830.js"),
  Chunk352954 = require("./352954.jsx"),
  Chunk571826 = require("./571826.js"),
  Chunk760373 = require("./760373.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function N() {
  return g.Z.getArticleURL(C.BhN.END_TO_END_ENCRYPTION)
}

function P() {
  return g.Z.getArticleURL(C.BhN.END_TO_END_ENCRYPTION)
}

function w() {
  return g.Z.getArticleURL(C.BhN.END_TO_END_ENCRYPTION)
}

function R(e, t, n, r, i) {
  n ? O.Z.createSecureFramesVerifiedKey(e, t) : O.Z.createSecureFramesTransientKey(e, t), (0, I.M1)({
    channelId: r,
    userId: e,
    analyticsLocation: i
  })
}

function D(e, t, n) {
  if (n) {
    let n = (0, c.MK)(new Uint8Array(t));
    O.Z.deleteSecureFramesVerifiedKey(e, n)
  } else O.Z.deleteSecureFramesTransientKey(e)
}

function x(e, t) {
  S.Z.openSecureFramesUpdateConfirmation({
    title: A.intl.string(A.t.hdL152),
    subtitle: A.intl.string(A.t["8VGYKg"]),
    onConfirm: () => {
      O.Z.deleteSecureFramesVerifiedKey(e, t), (0, I.Pn)()
    }
  })
}

function L(e) {
  let t = h.default.getUser(e),
    n = y.ZP.getName(t);
  S.Z.openSecureFramesUpdateConfirmation({
    title: A.intl.formatToPlainString(A.t.K6NGBy, {
      username: n
    }),
    subtitle: A.intl.string(A.t.F1BQK3),
    onConfirm: () => {
      O.Z.deleteSecureFramesUserVerifiedKeys(e), (0, I.DF)()
    }
  })
}

function j(e) {
  let t = s()(e),
    n = s()().diff(t, "s");
  if (n > 12 * m.Z.Seconds.DAYS_30) {
    let e = Math.round(n / (12 * m.Z.Seconds.DAYS_30));
    return A.intl.formatToPlainString(A.t.F1wqkD, {
      count: e
    })
  }
  if (n > m.Z.Seconds.DAYS_30) {
    let e = Math.round(n / m.Z.Seconds.DAYS_30);
    return A.intl.formatToPlainString(A.t["iT+b+2"], {
      count: e
    })
  }
  if (n > 7 * m.Z.Seconds.DAY) {
    let e = Math.round(n / (7 * m.Z.Seconds.DAY));
    return A.intl.formatToPlainString(A.t.dLurKZ, {
      count: e
    })
  }
  if (n > m.Z.Seconds.DAY) {
    let e = Math.round(n / m.Z.Seconds.DAY);
    return A.intl.formatToPlainString(A.t.LE8a2H, {
      count: e
    })
  }
  if (n > m.Z.Seconds.HOUR) {
    let e = Math.round(n / m.Z.Seconds.HOUR);
    return A.intl.formatToPlainString(A.t.KULxVS, {
      count: e
    })
  } else {
    if (!(n > m.Z.Seconds.MINUTE)) return A.intl.formatToPlainString(A.t["/w0Qpw"], {
      count: n
    });
    let e = Math.round(n / m.Z.Seconds.MINUTE);
    return A.intl.formatToPlainString(A.t.ws6rWq, {
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
  return t && n ? A.intl.format(A.t["FJN+kh"], {
    helpArticle: N()
  }) : t ? A.intl.format(A.t["p/9PGp"], {
    username: r,
    helpArticle: N()
  }) : n ? A.intl.format(A.t.qT5z87, {
    helpArticle: N()
  }) : A.intl.format(A.t["6JLy+i"], {
    helpArticle: N()
  })
}
async function k(e) {
  let t = d.default.getStaticAuthSessionId();
  return a()(null != t, "[getCurrentUserPublicKey] session id should not be null"), await f.Z.getMLSSigningKey(t, e)
}

function U(e) {
  let t = r.fromByteArray(new Uint8Array(e));
  return "data:application/octet-stream;base64,".concat(t)
}
async function G(e, t, n) {
  try {
    return (await l.tn.post({
      url: C.ANM.VOICE_MATCH_PUBLIC_KEY(e),
      body: {
        public_key: U(t),
        key_version: n
      },
      rejectWithError: false
    })).body.is_match
  } catch (e) {
    throw b.Z.captureException(e), e
  }
}
async function Z(e) {
  let {
    key: t,
    signature: n
  } = await k(e);
  try {
    await l.tn.put({
      url: C.ANM.VOICE_PUBLIC_KEYS(),
      body: {
        public_key: U(t),
        signature: U(n),
        key_version: e
      },
      rejectWithError: false
    }), O.Z.addUploadedKeyVersion(e)
  } catch (e) {
    throw b.Z.captureException(e), e
  }
}

function F(e) {
  return v.Z.getUploadedKeyVersionsCached().includes(e)
}
async function B(e) {
  F(e) || await Z(e)
}
async function V(e) {
  if (!F(e)) return await Z(e), true;
  let t = d.default.getId(),
    {
      key: n
    } = await k(e),
    r = await G(t, n, e);
  return r || (0, I.KA)(e), r
}

function H(e, t) {
  let [n, r] = t;
  if (!n.isUserConnected(e)) returnfalse;
  let i = n.getSecureFramesRosterMapEntry(e);
  if (null == i) returnfalse;
  let a = new Uint8Array(i);
  for (let t of r.getAllActiveStreamKeys()) {
    if (!r.isUserConnected(t, e)) continue;
    let n = _.Z.getSecureFramesRosterMapEntry(t, e);
    if (null == n) returntrue;
    let i = new Uint8Array(n);
    for (let e = 0; e < a.length; e++)
      if (a[e] !== i[e]) returntrue
  }
  returnfalse
}

function Y(e) {
  let {
    userId: t,
    channelId: n,
    nickname: r
  } = e;
  (0, I.CW)({
    userId: t,
    channelId: n,
    keyVersion: T.GB,
    reason: T.Xe.OTHER_USER_INCONSISTENT_KEYS
  }), u.Z.show({
    title: A.intl.string(A.t.mznLyR),
    body: A.intl.format(A.t.WY6IKb, {
      username: r
    })
  })
}

function W(e) {
  let {
    userId: t,
    guildId: n,
    channelId: r
  } = e;
  if (!H(t, [p.Z, _.Z])) returntrue;
  {
    let e = h.default.getUser(t),
      i = E.ZP.getName(n, r, e);
    return Y({
      userId: t,
      channelId: r,
      nickname: i
    }), false
  }
}