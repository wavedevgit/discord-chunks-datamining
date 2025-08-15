/** Chunk was on web.js **/
/** chunk id: 314897, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.r(exports), require.d(exports, {
  default: () => eD
}), require("./539854.js"), require("./358797.js"), require("./415506.js");
var i, Chunk213919 = require("./213919.js"),
  Chunk756647 = require("./756647.js"),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk433517 = require("./433517.js"),
  Chunk570140 = require("./570140.js"),
  Chunk911969 = require("./911969.js"),
  Chunk109728 = require("./109728.js"),
  Chunk254942 = require("./254942.js"),
  Chunk670890 = require("./670890.js"),
  Chunk569611 = require("./569611.js"),
  Chunk710845 = require("./710845.js"),
  Chunk703656 = require("./703656.js"),
  Chunk786213 = require("./786213.js"),
  Chunk626135 = require("./626135.js"),
  Chunk449934 = require("./449934.js"),
  Chunk960048 = require("./960048.js"),
  Chunk117240 = require("./117240.js"),
  Chunk750041 = require("./750041.js"),
  Chunk981631 = require("./981631.js"),
  Chunk723359 = require("./723359.js");

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let N = new Chunk710845.Z("AuthenticationStore"),
  C = "fingerprint",
  R = "user_id_cache",
  P = null,
  w = null,
  D = null,
  L = null,
  x = null,
  M = null,
  k = null,
  j = Chunk981631.u34.NONE,
  U = false,
  G = [],
  B = "",
  V = false,
  F = null,
  Z = false,
  H = false,
  Y = null,
  W = null,
  K = false,
  z = false,
  q = [];

function X(e) {
  let t = null != a.getToken(),
    n = null != c.K.get(T.B1h);
  N.verbose(e, {
    tokenManagerHasToken: t,
    storageHasToken: n
  })
}

function Q() {
  let e = !(arguments.length > 0) || true === arguments[0] || arguments[0];
  if (x = Chunk433517.K.get(C), null != Y) return Y;
  let t = null != x ? x : Chunk213919.getToken();
  !(0, Chunk703656.m1)() || !module && null != exports || Chunk117240.Z.isHandoffAvailable() || J({
    withGuildExperiments: true
  })
}

function J(e) {
  let {
    withGuildExperiments: t
  } = e, n = {}, r = b.default.getSuperPropertiesBase64();
  null != r && (n["X-Super-Properties"] = r), null != x && (n["X-Fingerprint"] = x), Y = l.tn.get({
    url: T.ANM.EXPERIMENTS,
    query: {
      with_guild_experiments: t
    },
    headers: n,
    context: {
      location: (0, g.Wf)()
    },
    retries: 3,
    oldFormErrors: true,
    rejectWithError: false
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
    }), Y = null, (0, f.$L)()
  }, () => {
    Y = null, u.Z.dispatch({
      type: "EXPERIMENTS_FETCH_FAILURE"
    })
  })
}

function $() {
  M = x, x = null, Chunk433517.K.remove(C)
}

function ee(e, t) {
  X("setAuthToken called."), (null == t || t !== P) && a.removeAnalyticsToken(), a.setToken(e, t)
}

function et(e) {
  k = e, a.setAnalyticsToken(e)
}

function en() {
  return X("removeAuthToken called."), Chunk213919.removeAnalyticsToken(), Chunk213919.removeToken()
}

function er(e) {
  let {
    isPasswordAttempt: t
  } = e;
  j = T.u34.LOGGING_IN, z = z || true === t
}

function ei(e) {
  let {
    isMultiAccount: t
  } = e;
  j = T.u34.NONE, B = "", V = false, F = null, r = null, t || (eu(), en(), Q(false))
}

function ea() {
  j = Chunk981631.u34.NONE
}

function eo(e) {
  let {
    token: t
  } = e;
  j = T.u34.NONE, ee(t), $(), B = "", V = false, F = null, eu(), K = false
}

function es(e) {
  let {
    error: t
  } = e;
  B = "", V = false, F = null, eu(), j = null != (0, _.p)(t).date_of_birth ? T.u34.LOGIN_AGE_GATE : T.u34.NONE
}

function el() {
  K = true
}

function ec(e) {
  let {
    error: t
  } = e;
  B = "", V = false, F = null, K = false, j = null != (0, _.F)(t).date_of_birth ? T.u34.LOGIN_AGE_GATE : T.u34.NONE
}

function eu() {
  let e = [];
  null != F && module.push({
    type: "webauthn",
    challenge: F
  }), Z && module.push({
    type: "totp",
    backup_codes_allowed: H
  }), H && module.push({
    type: "backup"
  }), V && module.push({
    type: "sms"
  }), q = module
}

function ed(e) {
  let {
    ticket: t,
    sms: n,
    webauthn: r,
    backup: i,
    totp: a
  } = e;
  null != t && (B = t, V = n, F = null != r ? r : null, H = i, Z = a, eu()), j = T.u34.MFA_STEP
}

function ef() {
  j = Chunk981631.u34.LOGGING_IN_MFA
}

function e_(e) {
  j = T.u34.ACCOUNT_SCHEDULED_FOR_DELETION, r = e.credentials
}

function ep(e) {
  j = T.u34.ACCOUNT_DISABLED, r = e.credentials
}

function eh(e) {
  j = T.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION, r = e.credentials
}

function em(e) {
  j = T.u34.PHONE_IP_AUTHORIZATION, r = e.credentials
}

function eg(e) {
  let t = e.fingerprint;
  null == x ? null != t ? (b.default.track(T.rMx.USER_FINGERPRINT_CHANGED, {
    old_fingerprint: null != M ? (0, o.s)(M) : null,
    new_fingerprint: (0, o.s)(t)
  }), x = t, M = t, c.K.set(C, x)) : Q() : null != t && x !== t && b.default.track(T.rMx.EXTERNAL_FINGERPRINT_DROPPED, {
    fingerprint: (0, o.s)(x),
    dropped_fingerprint: (0, o.s)(t)
  })
}

function eE(e) {
  let {
    token: t
  } = e;
  ee(t), $()
}

function eb(e) {
  var t;
  let {
    user: n,
    sessionId: r,
    authSessionIdHash: i,
    analyticsToken: a,
    auth: o,
    staticAuthSessionId: s
  } = e;
  X("handleConnectionOpen called"), O.Z.setUser(n.id, n.username, null != (t = n.email) ? t : true, (0, E.Z)(n)), w = r, D = i, L = s, et(a), P = n.id, true !== o && (G = o.authenticator_types), c.K.set(R, n.id)
}

function ey(e) {
  var t;
  let {
    user: n,
    sessionId: r,
    analyticsToken: i,
    token: a
  } = e;
  O.Z.setUser(n.id, n.username, null != (t = n.email) ? t : true, (0, E.Z)(n)), w = r, k = i, ee(a, n.id), null != i && et(i), $(), P = n.id, c.K.set(R, n.id)
}

function eO(e) {
  let {
    code: t
  } = e;
  X("handleConnectionClosed called with code ".concat(t, "."));
  let r = n(952265).nf;
  if (4004 === t) {
    if (U || r(S.$$) || r(S.dG)) return void eT();
    b.default.track(T.rMx.APP_USER_DEAUTHENTICATED, {
      user_id: c.K.get(R)
    }), eS(), setImmediate(() => (0, g.uL)(T.Z5c.DEFAULT_LOGGED_OUT))
  }
}

function ev(e) {
  let {
    token: t,
    userId: n
  } = e;
  X("handleUpdateToken called"), ee(t, n), $()
}

function eI(e) {
  let {
    authSessionIdHash: t
  } = e;
  null != t && (D = t)
}

function eT() {
  U = true, eS(), Chunk570140.Z.wait(() => {
    (0, Chunk703656.uL)(Chunk981631.Z5c.REGISTER)
  })
}

function eS(e) {
  var t;
  X("handleLogout called.");
  let n = en();
  null != (t = null == e ? true : e.isSwitchingAccount) && t || (n && $(), Q()), s.ZP.PersistedStore.clearAll({
    omit: ["InstallationManagerStore", "AgeGateStore", "NativePermissionsStore", "MultiAccountStore", "DraftStore", "OverlayStoreV2", "StreamerModeStore", "LoginRequiredActionStore", "LayoutStore", "OverlaySettingsStore", "ApexExperimentStore"],
    type: (null == e ? true : e.isSwitchingAccount) ? "user-data-only" : "all"
  }), I.Z.clearAll(), h.ZH(), O.Z.clearUser(), c.K.remove(R), P = null, w = null, j = (null == e ? true : e.isSwitchingAccount) ? T.u34.LOGGING_IN : T.u34.NONE, B = "", F = null, V = false, K = false, z = false, eu()
}

function eA() {
  j = Chunk981631.u34.FORGOT_PASSWORD
}

function eN() {
  j = Chunk981631.u34.NONE
}

function eC(e) {
  let {
    user: t
  } = e;
  P = t.id, true !== t.authenticator_types && (G = t.authenticator_types), c.K.set(R, t.id)
}

function eR(e) {
  let {
    suspendedUserToken: t
  } = e;
  K = false, W = t, setImmediate(() => (0, g.uL)(T.Z5c.ACCOUNT_STANDING))
}

function eP() {
  W = null, j = Chunk981631.u34.NONE, eS(), setImmediate(() => (0, Chunk703656.uL)(Chunk981631.Z5c.DEFAULT_LOGGED_OUT))
}
class ew extends(i = Chunk442837.ZP.Store) {
  initialize() {
    P = Chunk433517.K.get(R), null == Chunk213919.getToken() && Q(), this.addChangeListener(() => (0, Chunk670890.u)(P))
  }
  getLoginStatus() {
    return j
  }
  getId() {
    return P
  }
  getSessionId() {
    return w
  }
  getAuthSessionIdHash() {
    return D
  }
  getStaticAuthSessionId() {
    return L
  }
  getToken() {
    return (0, Chunk449934.LP)()
  }
  isAuthenticated() {
    return (0, Chunk449934.$8)()
  }
  getFingerprint() {
    return x
  }
  getAnalyticsToken() {
    return null != k ? k : Chunk213919.getAnalyticsToken()
  }
  getMFATicket() {
    return B
  }
  getMFAMethods() {
    return q
  }
  hasTOTPEnabled() {
    return G.includes(Chunk911969.Pi.TOTP)
  }
  getCredentials() {
    if (null == r) throw Error("no credentials");
    return r
  }
  allowLogoutRedirect() {
    return !U
  }
  getSuspendedUserToken() {
    return W
  }
  getIsPasswordlessActive() {
    return K
  }
  attemptedPasswordLogin() {
    return z
  }
}
A(ew, "displayName", "AuthenticationStore");
let eD = new ew(Chunk570140.Z, {
  CONNECTION_OPEN: eb,
  OVERLAY_INITIALIZE: ey,
  CONNECTION_CLOSED: eO,
  AUTH_SESSION_CHANGE: eI,
  LOGIN: er,
  LOGIN_SUCCESS: eo,
  LOGIN_FAILURE: es,
  LOGIN_MFA_STEP: ed,
  LOGIN_MFA: ef,
  LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION: e_,
  LOGIN_ACCOUNT_DISABLED: ep,
  LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: eh,
  LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: em,
  LOGIN_RESET: ei,
  LOGIN_STATUS_RESET: ea,
  LOGIN_SUSPENDED_USER: eR,
  LOGOUT: eS,
  FINGERPRINT: eg,
  REGISTER_SUCCESS: eE,
  FORGOT_PASSWORD_REQUEST: eA,
  FORGOT_PASSWORD_SENT: eN,
  UPDATE_TOKEN: ev,
  EXPERIMENTS_FETCH: J,
  CURRENT_USER_UPDATE: eC,
  AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: eT,
  CLOSE_SUSPENDED_USER: eP,
  PASSWORDLESS_FAILURE: ec,
  PASSWORDLESS_START: el
}, Chunk570140.c.Early)