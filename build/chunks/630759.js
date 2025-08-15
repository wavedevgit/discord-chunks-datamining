/** Chunk was on 80417 **/
/** chunk id: 630759, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  J6: () => v,
  LO: () => P,
  TQ: () => Z,
  UB: () => B,
  ZU: () => w,
  Zn: () => M,
  aZ: () => D,
  bo: () => F,
  fz: () => G,
  kK: () => K,
  lg: () => W,
  om: () => x,
  pL: () => N,
  uV: () => O,
  uX: () => j
}), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js"), require("./388685.js");
var Chunk250683 = require("./250683.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk913527 = require("./913527.js"),
  c = require.n(Chunk913527),
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

function O() {
  return Chunk63063.Z.getArticleURL(Chunk981631.BhN.END_TO_END_ENCRYPTION)
}

function D() {
  return Chunk63063.Z.getArticleURL(Chunk981631.BhN.END_TO_END_ENCRYPTION)
}

function N() {
  return Chunk63063.Z.getArticleURL(Chunk981631.BhN.END_TO_END_ENCRYPTION)
}

function Z(e, t, n, r, i) {
  n ? m.Z.createSecureFramesVerifiedKey(e, t) : m.Z.createSecureFramesTransientKey(e, t), (0, U.M1)({
    channelId: r,
    userId: e,
    analyticsLocation: i
  })
}

function P(e, t, n) {
  if (n) {
    let n = (0, u.MK)(new Uint8Array(t));
    m.Z.deleteSecureFramesVerifiedKey(e, n)
  } else m.Z.deleteSecureFramesTransientKey(e)
}

function w(e, t) {
  R.Z.openSecureFramesUpdateConfirmation({
    title: A.intl.string(A.t["hdL15+"]),
    subtitle: A.intl.string(A.t["8VGYKi"]),
    onConfirm: () => {
      m.Z.deleteSecureFramesVerifiedKey(e, t), (0, U.Pn)()
    }
  })
}

function M(e) {
  let t = S.default.getUser(e),
    n = I.ZP.getName(t);
  R.Z.openSecureFramesUpdateConfirmation({
    title: A.intl.formatToPlainString(A.t.K6NGBw, {
      username: n
    }),
    subtitle: A.intl.string(A.t.F1BQKy),
    onConfirm: () => {
      m.Z.deleteSecureFramesUserVerifiedKeys(e), (0, U.DF)()
    }
  })
}

function F(e) {
  let t = c()(e),
    n = c()().diff(t, "s");
  if (n > 12 * y.Z.Seconds.DAYS_30) {
    let e = Math.round(n / (12 * y.Z.Seconds.DAYS_30));
    return A.intl.formatToPlainString(A.t.F1wqkJ, {
      count: e
    })
  }
  if (n > y.Z.Seconds.DAYS_30) {
    let e = Math.round(n / y.Z.Seconds.DAYS_30);
    return A.intl.formatToPlainString(A.t["iT+b+/"], {
      count: e
    })
  }
  if (n > 7 * y.Z.Seconds.DAY) {
    let e = Math.round(n / (7 * y.Z.Seconds.DAY));
    return A.intl.formatToPlainString(A.t.dLurKS, {
      count: e
    })
  }
  if (n > y.Z.Seconds.DAY) {
    let e = Math.round(n / y.Z.Seconds.DAY);
    return A.intl.formatToPlainString(A.t.LE8a2N, {
      count: e
    })
  }
  if (n > y.Z.Seconds.HOUR) {
    let e = Math.round(n / y.Z.Seconds.HOUR);
    return A.intl.formatToPlainString(A.t.KULxVV, {
      count: e
    })
  } else {
    if (!(n > y.Z.Seconds.MINUTE)) return A.intl.formatToPlainString(A.t["/w0Qp6"], {
      count: n
    });
    let e = Math.round(n / y.Z.Seconds.MINUTE);
    return A.intl.formatToPlainString(A.t.ws6rWl, {
      count: e
    })
  }
}

function K(e) {
  let {
    isCurrentUserKeyPersistent: t,
    isOtherUserKeyPersistent: n,
    otherUserNickname: r
  } = e;
  return t && n ? A.intl.format(A.t["FJN+kp"], {
    helpArticle: O()
  }) : t ? A.intl.format(A.t["p/9PGh"], {
    username: r,
    helpArticle: O()
  }) : n ? A.intl.format(A.t["qT5z8/"], {
    helpArticle: O()
  }) : A.intl.format(A.t["6JLy+v"], {
    helpArticle: O()
  })
}
async function L(e) {
  let t = E.default.getStaticAuthSessionId();
  return a()(null != t, "[getCurrentUserPublicKey] session id should not be null"), await d.Z.getMLSSigningKey(t, e)
}

function V(e) {
  let t = r.fromByteArray(new Uint8Array(e));
  return "data:application/octet-stream;base64,".concat(t)
}
async function v(e, t, n) {
  try {
    return (await l.tn.post({
      url: b.ANM.VOICE_MATCH_PUBLIC_KEY(e),
      body: {
        public_key: V(t),
        key_version: n
      },
      rejectWithError: false
    })).body.is_match
  } catch (e) {
    throw g.Z.captureException(e), e
  }
}
async function k(e) {
  let {
    key: t,
    signature: n
  } = await L(e);
  try {
    await l.tn.put({
      url: b.ANM.VOICE_PUBLIC_KEYS(),
      body: {
        public_key: V(t),
        signature: V(n),
        key_version: e
      },
      rejectWithError: false
    }), m.Z.addUploadedKeyVersion(e)
  } catch (e) {
    throw g.Z.captureException(e), e
  }
}

function Y(e) {
  return T.Z.getUploadedKeyVersionsCached().includes(e)
}
async function x(e) {
  Y(e) || await k(e)
}
async function j(e) {
  if (!Y(e)) return await k(e), true;
  let t = E.default.getId(),
    {
      key: n
    } = await L(e),
    r = await v(t, n, e);
  return r || (0, U.KA)(e), r
}

function B(e, t) {
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

function W(e) {
  let {
    userId: t,
    channelId: n,
    nickname: r
  } = e;
  (0, U.CW)({
    userId: t,
    channelId: n,
    keyVersion: C.GB,
    reason: C.Xe.OTHER_USER_INCONSISTENT_KEYS
  }), s.Z.show({
    title: A.intl.string(A.t.mznLyc),
    body: A.intl.format(A.t.WY6IKS, {
      username: r
    })
  })
}

function G(e) {
  let {
    userId: t,
    guildId: n,
    channelId: r
  } = e;
  if (!B(t, [f.Z, _.Z])) returntrue;
  {
    let e = S.default.getUser(t),
      i = p.ZP.getName(n, r, e);
    return W({
      userId: t,
      channelId: r,
      nickname: i
    }), false
  }
}