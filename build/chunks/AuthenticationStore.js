/** Chunk was on web.js **/
/** chunk id: 314897, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i;
require.r(exports), require.d(exports, {
  default: () => eL
}), require("./539854.js"), require("./358797.js"), require("./415506.js");
var a, Chunk213919 = require("./213919.js"),
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

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let N = new Chunk710845.Z("AuthenticationStore"),
  R = "fingerprint",
  P = "user_id_cache",
  D = null,
  w = null,
  L = null,
  x = null,
  M = null,
  k = null,
  j = null,
  U = Chunk981631.u34.NONE,
  G = false,
  B = [],
  Z = "",
  F = false,
  V = null,
  H = false,
  Y = false,
  W = null,
  K = null,
  z = false,
  q = false,
  X = [];

function Q(e) {
  let t = null != o.getToken(),
    n = null != u.K.get(S.B1h);
  N.verbose(e, {
    tokenManagerHasToken: t,
    storageHasToken: n
  })
}

function J() {
  let e = !(arguments.length > 0) || true === arguments[0] || arguments[0];
  if (M = Chunk433517.K.get(R), null != W) return W;
  let t = null != M ? M : Chunk213919.getToken();
  !(0, Chunk703656.m1)() || !module && null != exports || Chunk117240.Z.isHandoffAvailable() || $({
    withGuildExperiments: true
  })
}

function $(e) {
  let {
    withGuildExperiments: t
  } = e, n = {}, r = y.default.getSuperPropertiesBase64();
  null != r && (n["X-Super-Properties"] = r), null != M && (n["X-Fingerprint"] = M), W = c.tn.get({
    url: S.ANM.EXPERIMENTS,
    query: {
      with_guild_experiments: t
    },
    headers: n,
    context: {
      location: (0, E.Wf)()
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
    t && d.Z.dispatch({
      type: "FINGERPRINT",
      fingerprint: t
    }), d.Z.dispatch({
      type: "EXPERIMENTS_FETCH_SUCCESS",
      fingerprint: t,
      experiments: n,
      guildExperiments: r
    }), W = null, (0, _.$L)()
  }, () => {
    W = null, d.Z.dispatch({
      type: "EXPERIMENTS_FETCH_FAILURE"
    })
  })
}

function ee() {
  k = M, M = null, Chunk433517.K.remove(R)
}

function et(e, t) {
  Q("setAuthToken called."), (null == t || t !== D) && o.removeAnalyticsToken(), o.setToken(e, t)
}

function en(e) {
  j = e, o.setAnalyticsToken(e)
}

function er() {
  return Q("removeAuthToken called."), Chunk213919.removeAnalyticsToken(), Chunk213919.removeToken()
}

function ei(e) {
  let {
    isPasswordAttempt: t
  } = e;
  U = S.u34.LOGGING_IN, q = q || true === t
}

function ea(e) {
  let {
    isMultiAccount: t
  } = e;
  U = S.u34.NONE, Z = "", F = false, V = null, i = null, r = null, t || (ed(), er(), J(false))
}

function eo() {
  U = Chunk981631.u34.NONE
}

function es(e) {
  let {
    token: t
  } = e;
  U = S.u34.NONE, et(t), ee(), Z = "", F = false, V = null, i = null, ed(), z = false
}

function el(e) {
  let {
    error: t
  } = e;
  Z = "", F = false, V = null, i = null, ed(), U = null != (0, p.p)(t).date_of_birth ? S.u34.LOGIN_AGE_GATE : S.u34.NONE
}

function ec() {
  z = true
}

function eu(e) {
  let {
    error: t
  } = e;
  Z = "", F = false, V = null, z = false, i = null, U = null != (0, p.F)(t).date_of_birth ? S.u34.LOGIN_AGE_GATE : S.u34.NONE
}

function ed() {
  let e = [];
  null != V && module.push({
    type: "webauthn",
    challenge: V
  }), H && module.push({
    type: "totp"
  }), Y && module.push({
    type: "backup"
  }), F && module.push({
    type: "sms"
  }), X = module
}

function ef(e) {
  let {
    ticket: t,
    sms: n,
    webauthn: r,
    backup: a,
    totp: o,
    loginInstanceId: s
  } = e;
  null != t && (Z = t, F = n, V = null != r ? r : null, Y = a, H = o, i = s, ed()), U = S.u34.MFA_STEP
}

function e_() {
  U = Chunk981631.u34.LOGGING_IN_MFA
}

function ep(e) {
  U = S.u34.ACCOUNT_SCHEDULED_FOR_DELETION, r = e.credentials
}

function eh(e) {
  U = S.u34.ACCOUNT_DISABLED, r = e.credentials
}

function em(e) {
  U = S.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION, r = e.credentials
}

function eg(e) {
  U = S.u34.PHONE_IP_AUTHORIZATION, r = e.credentials
}

function eE(e) {
  let t = e.fingerprint;
  null == M ? null != t ? (y.default.track(S.rMx.USER_FINGERPRINT_CHANGED, {
    old_fingerprint: null != k ? (0, s.s)(k) : null,
    new_fingerprint: (0, s.s)(t)
  }), M = t, k = t, u.K.set(R, M)) : J() : null != t && M !== t && y.default.track(S.rMx.EXTERNAL_FINGERPRINT_DROPPED, {
    fingerprint: (0, s.s)(M),
    dropped_fingerprint: (0, s.s)(t)
  })
}

function eb(e) {
  let {
    token: t
  } = e;
  et(t), ee()
}

function ey(e) {
  var t;
  let {
    user: n,
    sessionId: r,
    authSessionIdHash: i,
    analyticsToken: a,
    auth: o,
    staticAuthSessionId: s
  } = e;
  Q("handleConnectionOpen called"), v.Z.setUser(n.id, n.username, null != (t = n.email) ? t : true, (0, b.Z)(n)), w = r, L = i, x = s, en(a), D = n.id, true !== o && (B = o.authenticator_types), u.K.set(P, n.id)
}

function eO(e) {
  var t;
  let {
    user: n,
    sessionId: r,
    analyticsToken: i,
    token: a
  } = e;
  v.Z.setUser(n.id, n.username, null != (t = n.email) ? t : true, (0, b.Z)(n)), w = r, j = i, et(a, n.id), null != i && en(i), ee(), D = n.id, u.K.set(P, n.id)
}

function ev(e) {
  let {
    code: t
  } = e;
  Q("handleConnectionClosed called with code ".concat(t, "."));
  let r = n(952265).nf;
  if (4004 === t) {
    if (G || r(A.$$) || r(A.dG)) return void eS();
    y.default.track(S.rMx.APP_USER_DEAUTHENTICATED, {
      user_id: u.K.get(P)
    }), eA(), setImmediate(() => (0, E.uL)(S.Z5c.DEFAULT_LOGGED_OUT))
  }
}

function eI(e) {
  let {
    token: t,
    userId: n
  } = e;
  Q("handleUpdateToken called"), et(t, n), ee()
}

function eT(e) {
  let {
    authSessionIdHash: t
  } = e;
  null != t && (L = t)
}

function eS() {
  G = true, eA(), Chunk570140.Z.wait(() => {
    (0, Chunk703656.uL)(Chunk981631.Z5c.REGISTER)
  })
}

function eA(e) {
  var t;
  Q("handleLogout called.");
  let n = er();
  null != (t = null == e ? true : e.isSwitchingAccount) && t || (n && ee(), J()), l.ZP.PersistedStore.clearAll({
    omit: ["InstallationManagerStore", "AgeGateStore", "NativePermissionsStore", "MultiAccountStore", "DraftStore", "OverlayStoreV2", "StreamerModeStore", "LoginRequiredActionStore", "LayoutStore", "OverlaySettingsStore", "ApexExperimentStore"],
    type: (null == e ? true : e.isSwitchingAccount) ? "user-data-only" : "all"
  }), T.Z.clearAll(), m.ZH(), v.Z.clearUser(), u.K.remove(P), D = null, w = null, U = (null == e ? true : e.isSwitchingAccount) ? S.u34.LOGGING_IN : S.u34.NONE, Z = "", V = null, F = false, z = false, q = false, ed()
}

function eC() {
  U = Chunk981631.u34.FORGOT_PASSWORD
}

function eN() {
  U = Chunk981631.u34.NONE
}

function eR(e) {
  let {
    user: t
  } = e;
  D = t.id, true !== t.authenticator_types && (B = t.authenticator_types), u.K.set(P, t.id)
}

function eP(e) {
  let {
    suspendedUserToken: t
  } = e;
  z = false, K = t, setImmediate(() => (0, E.uL)(S.Z5c.ACCOUNT_STANDING))
}

function eD() {
  K = null, U = Chunk981631.u34.NONE, eA(), setImmediate(() => (0, Chunk703656.uL)(Chunk981631.Z5c.DEFAULT_LOGGED_OUT))
}
class ew extends(a = Chunk442837.ZP.Store) {
  initialize() {
    D = Chunk433517.K.get(P), null == Chunk213919.getToken() && J(), this.addChangeListener(() => (0, Chunk670890.u)(D))
  }
  getLoginStatus() {
    return U
  }
  getId() {
    return D
  }
  getSessionId() {
    return w
  }
  getAuthSessionIdHash() {
    return L
  }
  getStaticAuthSessionId() {
    return x
  }
  getToken() {
    return (0, Chunk449934.LP)()
  }
  isAuthenticated() {
    return (0, Chunk449934.$8)()
  }
  getFingerprint() {
    return M
  }
  getAnalyticsToken() {
    return null != j ? j : Chunk213919.getAnalyticsToken()
  }
  getMFATicket() {
    return Z
  }
  getMFAMethods() {
    return X
  }
  getLoginInstanceId() {
    return i
  }
  hasTOTPEnabled() {
    return B.includes(Chunk911969.Pi.TOTP)
  }
  getCredentials() {
    if (null == r) throw Error("no credentials");
    return r
  }
  allowLogoutRedirect() {
    return !G
  }
  getSuspendedUserToken() {
    return K
  }
  getIsPasswordlessActive() {
    return z
  }
  attemptedPasswordLogin() {
    return q
  }
}
C(ew, "displayName", "AuthenticationStore");
let eL = new ew(Chunk570140.Z, {
  CONNECTION_OPEN: ey,
  OVERLAY_INITIALIZE: eO,
  CONNECTION_CLOSED: ev,
  AUTH_SESSION_CHANGE: eT,
  LOGIN: ei,
  LOGIN_SUCCESS: es,
  LOGIN_FAILURE: el,
  LOGIN_MFA_STEP: ef,
  LOGIN_MFA: e_,
  LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION: ep,
  LOGIN_ACCOUNT_DISABLED: eh,
  LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: em,
  LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: eg,
  LOGIN_RESET: ea,
  LOGIN_STATUS_RESET: eo,
  LOGIN_SUSPENDED_USER: eP,
  LOGOUT: eA,
  FINGERPRINT: eE,
  REGISTER_SUCCESS: eb,
  FORGOT_PASSWORD_REQUEST: eC,
  FORGOT_PASSWORD_SENT: eN,
  UPDATE_TOKEN: eI,
  EXPERIMENTS_FETCH: $,
  CURRENT_USER_UPDATE: eR,
  AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: eS,
  CLOSE_SUSPENDED_USER: eD,
  PASSWORDLESS_FAILURE: eu,
  PASSWORDLESS_START: ec
}, Chunk570140.c.Early)