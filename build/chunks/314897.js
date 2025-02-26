/** Chunk was on web.js **/
"use strict";
let r;
n.r(t), n.d(t, {
  default: () => eR
}), n(177593), n(653041), n(411104);
var i, o = n(213919),
  a = n(756647),
  s = n(442837),
  l = n(544891),
  c = n(433517),
  u = n(570140),
  d = n(911969),
  f = n(109728),
  _ = n(254942),
  p = n(670890),
  h = n(569611),
  g = n(710845),
  m = n(703656),
  E = n(786213),
  v = n(626135),
  b = n(449934),
  y = n(960048),
  O = n(117240),
  S = n(412788),
  I = n(981631),
  T = n(723359);

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let A = new g.Z("AuthenticationStore"),
  C = "fingerprint",
  R = "user_id_cache",
  P = null,
  D = null,
  w = null,
  L = null,
  x = null,
  M = null,
  k = null,
  j = I.u34.NONE,
  U = !1,
  G = [],
  B = "",
  V = !1,
  F = null,
  Z = !1,
  H = !1,
  W = null,
  Y = null,
  K = !1,
  z = !1;

function q(e) {
  let t = null != o.getToken(),
    n = null != c.K.get(I.B1h);
  A.verbose(e, {
    tokenManagerHasToken: t,
    storageHasToken: n
  })
}

function Q() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  if (x = c.K.get(C), null != W) return W;
  let t = null != x ? x : o.getToken();
  !(!(0, m.m1)() || !e && null != t || O.Z.isHandoffAvailable()) && X({
    withGuildExperiments: !0
  })
}

function X(e) {
  let {
    withGuildExperiments: t
  } = e, n = {}, r = v.default.getSuperPropertiesBase64();
  null != r && (n["X-Super-Properties"] = r), null != x && (n["X-Fingerprint"] = x), W = l.tn.get({
    url: I.ANM.EXPERIMENTS,
    query: {
      with_guild_experiments: t
    },
    headers: n,
    context: {
      location: (0, m.Wf)()
    },
    retries: 3,
    oldFormErrors: !0,
    rejectWithError: !1
  }).then(e => {
    let {
      fingerprint: t,
      assignments: n,
      guild_experiments: r
    } = e.body;
    t && u.Z.dispatch({
      type: "FINGERPRINT",
      fingerprint: t
    }), u.Z.dispatch({
      type: "EXPERIMENTS_FETCH_SUCCESS",
      fingerprint: t,
      experiments: n,
      guildExperiments: r
    }), W = null, (0, f.$L)()
  }, () => {
    W = null, u.Z.dispatch({
      type: "EXPERIMENTS_FETCH_FAILURE"
    })
  })
}

function J() {
  M = x, x = null, c.K.remove(C)
}

function $(e, t) {
  q("setAuthToken called."), o.setToken(e, t)
}

function ee() {
  return q("removeAuthToken called."), o.removeToken()
}

function et(e) {
  let {
    isPasswordAttempt: t
  } = e;
  j = I.u34.LOGGING_IN, z = z || !0 === t
}

function en(e) {
  let {
    isMultiAccount: t
  } = e;
  j = I.u34.NONE, B = "", V = !1, F = null, r = null, !t && (ee(), Q(!1))
}

function er() {
  j = I.u34.NONE
}

function ei(e) {
  let {
    token: t
  } = e;
  j = I.u34.NONE, $(t), J(), B = "", V = !1, F = null, K = !1
}

function eo(e) {
  let {
    error: t
  } = e;
  B = "", V = !1, F = null, j = null != (0, _.p)(t).date_of_birth ? I.u34.LOGIN_AGE_GATE : I.u34.NONE
}

function ea() {
  K = !0
}

function es(e) {
  let {
    error: t
  } = e;
  B = "", V = !1, F = null, K = !1, j = null != (0, _.F)(t).date_of_birth ? I.u34.LOGIN_AGE_GATE : I.u34.NONE
}

function el(e) {
  let {
    ticket: t,
    sms: n,
    webauthn: r,
    backup: i,
    totp: o
  } = e;
  null != t && (B = t, V = n, F = null != r ? r : null, H = i, Z = o), j = I.u34.MFA_STEP
}

function ec() {
  j = I.u34.LOGGING_IN_MFA
}

function eu(e) {
  j = I.u34.ACCOUNT_SCHEDULED_FOR_DELETION, r = e.credentials
}

function ed(e) {
  j = I.u34.ACCOUNT_DISABLED, r = e.credentials
}

function ef(e) {
  j = I.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION, r = e.credentials
}

function e_(e) {
  j = I.u34.PHONE_IP_AUTHORIZATION, r = e.credentials
}

function ep(e) {
  let t = e.fingerprint;
  null == x ? null != t ? (v.default.track(I.rMx.USER_FINGERPRINT_CHANGED, {
    old_fingerprint: null != M ? (0, a.s)(M) : null,
    new_fingerprint: (0, a.s)(t)
  }), x = t, M = t, c.K.set(C, x)) : Q() : null != t && x !== t && v.default.track(I.rMx.EXTERNAL_FINGERPRINT_DROPPED, {
    fingerprint: (0, a.s)(x),
    dropped_fingerprint: (0, a.s)(t)
  })
}

function eh(e) {
  let {
    token: t
  } = e;
  $(t), J()
}

function eg(e) {
  var t;
  let {
    user: n,
    sessionId: r,
    authSessionIdHash: i,
    analyticsToken: o,
    auth: a,
    staticAuthSessionId: s
  } = e;
  q("handleConnectionOpen called"), y.Z.setUser(n.id, n.username, null !== (t = n.email) && void 0 !== t ? t : void 0, (0, E.Z)(n)), D = r, w = i, L = s, k = o, P = n.id, void 0 !== a && (G = a.authenticator_types), c.K.set(R, n.id)
}

function em(e) {
  var t;
  let {
    user: n,
    sessionId: r,
    analyticsToken: i,
    token: o
  } = e;
  y.Z.setUser(n.id, n.username, null !== (t = n.email) && void 0 !== t ? t : void 0, (0, E.Z)(n)), D = r, k = i, $(o), J(), P = n.id, c.K.set(R, n.id)
}

function eE(e) {
  let {
    code: t
  } = e;
  q("handleConnectionClosed called with code ".concat(t, "."));
  let r = n(952265).nf;
  if (4004 === t) {
    if (U || r(T.$$) || r(T.dG)) {
      ey();
      return
    }
    v.default.track(I.rMx.APP_USER_DEAUTHENTICATED, {
      user_id: c.K.get(R)
    }), eO(), setImmediate(() => (0, m.uL)(I.Z5c.DEFAULT_LOGGED_OUT))
  }
}

function ev(e) {
  let {
    token: t,
    userId: n
  } = e;
  q("handleUpdateToken called"), $(t, n), J()
}

function eb(e) {
  let {
    authSessionIdHash: t
  } = e;
  null != t && (w = t)
}

function ey() {
  U = !0, eO(), u.Z.wait(() => {
    (0, m.uL)(I.Z5c.REGISTER)
  })
}

function eO(e) {
  var t;
  q("handleLogout called.");
  let n = ee();
  null !== (t = null == e ? void 0 : e.isSwitchingAccount) && void 0 !== t && t || (n && J(), Q()), s.ZP.PersistedStore.clearAll({
    omit: ["InstallationManagerStore", "AgeGateStore", "NativePermissionsStore", "MultiAccountStore", "DraftStore", "OverlayStoreV2", "StreamerModeStore", "LoginRequiredActionStore"],
    type: (null == e ? void 0 : e.isSwitchingAccount) ? "user-data-only" : "all"
  }), S.Z.clearAll(), h.ZH(), y.Z.clearUser(), c.K.remove(R), P = null, D = null, j = (null == e ? void 0 : e.isSwitchingAccount) ? I.u34.LOGGING_IN : I.u34.NONE, B = "", F = null, V = !1, K = !1, z = !1
}

function eS() {
  j = I.u34.FORGOT_PASSWORD
}

function eI() {
  j = I.u34.NONE
}

function eT(e) {
  let {
    user: t
  } = e;
  P = t.id, void 0 !== t.authenticator_types && (G = t.authenticator_types), c.K.set(R, t.id)
}

function eN(e) {
  let {
    suspendedUserToken: t
  } = e;
  K = !1, Y = t, setImmediate(() => (0, m.uL)(I.Z5c.ACCOUNT_STANDING))
}

function eA() {
  Y = null, j = I.u34.NONE, eO(), setImmediate(() => (0, m.uL)(I.Z5c.DEFAULT_LOGGED_OUT))
}
class eC extends(i = s.ZP.Store) {
  initialize() {
    P = c.K.get(R), null == o.getToken() && Q(), this.addChangeListener(() => (0, p.u)(P))
  }
  getLoginStatus() {
    return j
  }
  getId() {
    return P
  }
  getSessionId() {
    return D
  }
  getAuthSessionIdHash() {
    return w
  }
  getStaticAuthSessionId() {
    return L
  }
  getToken() {
    return (0, b.LP)()
  }
  isAuthenticated() {
    return (0, b.$8)()
  }
  getFingerprint() {
    return x
  }
  getAnalyticsToken() {
    return k
  }
  getMFATicket() {
    return B
  }
  getMFAMethods() {
    let e = [];
    return null != F && e.push({
      type: "webauthn",
      challenge: F
    }), Z && e.push({
      type: "totp",
      backup_codes_allowed: H
    }), H && e.push({
      type: "backup"
    }), V && e.push({
      type: "sms"
    }), e
  }
  hasTOTPEnabled() {
    return G.includes(d.Pi.TOTP)
  }
  getCredentials() {
    if (null == r) throw Error("no credentials");
    return r
  }
  allowLogoutRedirect() {
    return !U
  }
  getSuspendedUserToken() {
    return Y
  }
  getIsPasswordlessActive() {
    return K
  }
  attemptedPasswordLogin() {
    return z
  }
}
N(eC, "displayName", "AuthenticationStore");
let eR = new eC(u.Z, {
  CONNECTION_OPEN: eg,
  OVERLAY_INITIALIZE: em,
  CONNECTION_CLOSED: eE,
  AUTH_SESSION_CHANGE: eb,
  LOGIN: et,
  LOGIN_SUCCESS: ei,
  LOGIN_FAILURE: eo,
  LOGIN_MFA_STEP: el,
  LOGIN_MFA: ec,
  LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION: eu,
  LOGIN_ACCOUNT_DISABLED: ed,
  LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: ef,
  LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: e_,
  LOGIN_RESET: en,
  LOGIN_STATUS_RESET: er,
  LOGIN_SUSPENDED_USER: eN,
  LOGOUT: eO,
  FINGERPRINT: ep,
  REGISTER_SUCCESS: eh,
  FORGOT_PASSWORD_REQUEST: eS,
  FORGOT_PASSWORD_SENT: eI,
  UPDATE_TOKEN: ev,
  EXPERIMENTS_FETCH: X,
  CURRENT_USER_UPDATE: eT,
  AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: ey,
  CLOSE_SUSPENDED_USER: eA,
  PASSWORDLESS_FAILURE: es,
  PASSWORDLESS_START: ea
}, u.c.Early)