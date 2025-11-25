/** Chunk was on web.js **/
/** chunk id: 314897, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i;
require.r(exports), require.d(exports, {
  default: () => ej
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
  Chunk625143 = require("./625143.js"),
  Chunk786213 = require("./786213.js"),
  Chunk626135 = require("./626135.js"),
  Chunk449934 = require("./449934.js"),
  Chunk960048 = require("./960048.js"),
  Chunk117240 = require("./117240.js"),
  Chunk750041 = require("./750041.js"),
  Chunk981631 = require("./981631.js"),
  Chunk723359 = require("./723359.js");

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let R = new Chunk710845.Z("AuthenticationStore"),
  P = "fingerprint",
  D = "analytics_installation",
  w = "user_id_cache",
  L = null,
  x = null,
  M = null,
  k = null,
  j = null,
  U = null,
  G = null,
  B = null,
  Z = Chunk981631.u34.NONE,
  F = false,
  V = [],
  H = "",
  W = false,
  Y = null,
  K = false,
  z = false,
  q = null,
  X = null,
  Q = false,
  J = false,
  $ = [];

function ee(e) {
  let t = null != o.getToken(),
    n = null != u.K.get(A.B1h);
  R.verbose(e, {
    tokenManagerHasToken: t,
    storageHasToken: n
  })
}

function et() {
  var e;
  let t = !(arguments.length > 0) || true === arguments[0] || arguments[0];
  if (j = Chunk433517.K.get(P), G = null != (e = Chunk433517.K.get(D)) ? module : null, null != q) return q;
  let n = null != j ? j : Chunk213919.getToken();
  !(0, Chunk703656.m1)() || !exports && null != require || Chunk117240.Z.isHandoffAvailable() || en({
    withGuildExperiments: true
  })
}

function en(e) {
  let {
    withGuildExperiments: t
  } = e, n = {}, r = O.default.getSuperPropertiesBase64();
  null != r && (n["X-Super-Properties"] = r), null != j && (n["X-Fingerprint"] = j), null != G && (n["X-Installation-ID"] = G), q = c.tn.get({
    url: A.ANM.EXPERIMENTS,
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
      installation: n,
      assignments: r,
      guild_experiments: i
    } = e.body;
    t && d.Z.dispatch({
      type: "FINGERPRINT",
      fingerprint: t
    }), n && d.Z.dispatch({
      type: "INSTALLATION_DEFINED",
      installation: n
    }), d.Z.dispatch({
      type: "EXPERIMENTS_FETCH_SUCCESS",
      fingerprint: t,
      experiments: r,
      guildExperiments: i
    }), q = null, (0, _.$L)()
  }, () => {
    q = null, d.Z.dispatch({
      type: "EXPERIMENTS_FETCH_FAILURE"
    })
  })
}

function er() {
  U = j, j = null, Chunk433517.K.remove(P)
}

function ei(e, t) {
  ee("setAuthToken called."), (null == t || t !== L) && o.removeAnalyticsToken(), o.setToken(e, t)
}

function ea(e) {
  B = e, o.setAnalyticsToken(e)
}

function eo() {
  return ee("removeAuthToken called."), Chunk213919.removeAnalyticsToken(), Chunk213919.removeToken()
}

function es(e) {
  let {
    isPasswordAttempt: t
  } = e;
  Z = A.u34.LOGGING_IN, J = J || true === t
}

function el(e) {
  let {
    isMultiAccount: t
  } = e;
  Z = A.u34.NONE, H = "", W = false, Y = null, i = null, r = null, t || (ep(), eo(), et(false))
}

function ec() {
  Z = Chunk981631.u34.NONE
}

function eu(e) {
  let {
    token: t
  } = e;
  Z = A.u34.NONE, ei(t), er(), H = "", W = false, Y = null, i = null, ep(), Q = false
}

function ed(e) {
  let {
    error: t
  } = e;
  H = "", W = false, Y = null, i = null, ep(), Z = null != (0, p.p)(t).date_of_birth ? A.u34.LOGIN_AGE_GATE : A.u34.NONE
}

function ef() {
  Q = true
}

function e_(e) {
  let {
    error: t
  } = e;
  H = "", W = false, Y = null, Q = false, i = null, Z = null != (0, p.F)(t).date_of_birth ? A.u34.LOGIN_AGE_GATE : A.u34.NONE
}

function ep() {
  let e = [];
  null != Y && module.push({
    type: "webauthn",
    challenge: Y
  }), K && module.push({
    type: "totp"
  }), z && module.push({
    type: "backup"
  }), W && module.push({
    type: "sms"
  }), $ = module
}

function eh(e) {
  let {
    ticket: t,
    sms: n,
    webauthn: r,
    backup: a,
    totp: o,
    loginInstanceId: s
  } = e;
  null != t && (H = t, W = n, Y = null != r ? r : null, z = a, K = o, i = s, ep()), Z = A.u34.MFA_STEP
}

function em() {
  Z = Chunk981631.u34.LOGGING_IN_MFA
}

function eg(e) {
  Z = A.u34.ACCOUNT_SCHEDULED_FOR_DELETION, r = e.credentials
}

function eE(e) {
  Z = A.u34.ACCOUNT_DISABLED, r = e.credentials
}

function eb(e) {
  Z = A.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION, r = e.credentials
}

function ey(e) {
  Z = A.u34.PHONE_IP_AUTHORIZATION, r = e.credentials
}

function eO(e) {
  let t = e.fingerprint;
  null == j ? null != t ? (O.default.track(A.rMx.USER_FINGERPRINT_CHANGED, {
    old_fingerprint: null != U ? (0, s.s)(U) : null,
    new_fingerprint: (0, s.s)(t)
  }), j = t, U = t, u.K.set(P, j)) : et() : null != t && j !== t && O.default.track(A.rMx.EXTERNAL_FINGERPRINT_DROPPED, {
    fingerprint: (0, s.s)(j),
    dropped_fingerprint: (0, s.s)(t)
  })
}

function ev(e) {
  let {
    installation: t
  } = e;
  if (null != G && G.length > 0) returnfalse;
  G = t, b.Z.canUseInstallationId() && u.K.set(D, t)
}

function eI(e) {
  let {
    token: t
  } = e;
  ei(t), er()
}

function eT(e) {
  var t;
  let {
    user: n,
    sessionId: r,
    authSessionIdHash: i,
    analyticsToken: a,
    auth: o,
    staticAuthSessionId: s
  } = e;
  ee("handleConnectionOpen called"), I.Z.setUser(n.id, n.username, null != (t = n.email) ? t : true, (0, y.Z)(n)), x = r, M = i, k = s, ea(a), L = n.id, true !== o && (V = o.authenticator_types), u.K.set(w, n.id)
}

function eS(e) {
  var t;
  let {
    user: n,
    sessionId: r,
    analyticsToken: i,
    token: a
  } = e;
  I.Z.setUser(n.id, n.username, null != (t = n.email) ? t : true, (0, y.Z)(n)), x = r, B = i, ei(a, n.id), null != i && ea(i), er(), L = n.id, u.K.set(w, n.id)
}

function eA(e) {
  let {
    code: t
  } = e;
  ee("handleConnectionClosed called with code ".concat(t, "."));
  let r = n(952265).nf;
  if (4004 === t) {
    if (F || r(C.$$) || r(C.dG)) return void eR();
    O.default.track(A.rMx.APP_USER_DEAUTHENTICATED, {
      user_id: u.K.get(w)
    }), eP(), setImmediate(() => (0, E.uL)(A.Z5c.DEFAULT_LOGGED_OUT))
  }
}

function eC(e) {
  let {
    token: t,
    userId: n
  } = e;
  ee("handleUpdateToken called"), ei(t, n), er()
}

function eN(e) {
  let {
    authSessionIdHash: t
  } = e;
  null != t && (M = t)
}

function eR() {
  F = true, eP(), Chunk570140.Z.wait(() => {
    (0, Chunk703656.uL)(Chunk981631.Z5c.REGISTER)
  })
}

function eP(e) {
  var t;
  ee("handleLogout called.");
  let n = eo();
  null != (t = null == e ? true : e.isSwitchingAccount) && t || (n && er(), et()), l.ZP.PersistedStore.clearAll({
    omit: ["InstallationManagerStore", "AgeGateStore", "NativePermissionsStore", "MultiAccountStore", "DraftStore", "OverlayStoreV2", "StreamerModeStore", "LoginRequiredActionStore", "LayoutStore", "OverlaySettingsStore", "ApexExperimentStore"],
    type: (null == e ? true : e.isSwitchingAccount) ? "user-data-only" : "all"
  }), S.Z.clearAll(), m.ZH(), I.Z.clearUser(), u.K.remove(w), L = null, x = null, Z = (null == e ? true : e.isSwitchingAccount) ? A.u34.LOGGING_IN : A.u34.NONE, H = "", Y = null, W = false, Q = false, J = false, ep()
}

function eD() {
  Z = Chunk981631.u34.FORGOT_PASSWORD
}

function ew() {
  Z = Chunk981631.u34.NONE
}

function eL(e) {
  let {
    user: t
  } = e;
  L = t.id, true !== t.authenticator_types && (V = t.authenticator_types), u.K.set(w, t.id)
}

function ex(e) {
  let {
    suspendedUserToken: t
  } = e;
  Q = false, X = t, setImmediate(() => (0, E.uL)(A.Z5c.ACCOUNT_STANDING))
}

function eM() {
  X = null, Z = Chunk981631.u34.NONE, eP(), setImmediate(() => (0, Chunk703656.uL)(Chunk981631.Z5c.DEFAULT_LOGGED_OUT))
}
class ek extends(a = Chunk442837.ZP.Store) {
  initialize() {
    L = Chunk433517.K.get(w), null == Chunk213919.getToken() && et(), this.addChangeListener(() => (0, Chunk670890.u)(L))
  }
  getLoginStatus() {
    return Z
  }
  getId() {
    return L
  }
  getSessionId() {
    return x
  }
  getAuthSessionIdHash() {
    return M
  }
  getStaticAuthSessionId() {
    return k
  }
  getToken() {
    return (0, Chunk449934.LP)()
  }
  isAuthenticated() {
    return (0, Chunk449934.$8)()
  }
  getFingerprint() {
    return j
  }
  getInstallationForTracking() {
    return Chunk625143.Z.canUseInstallationId() ? G : null
  }
  getAnalyticsToken() {
    return null != B ? B : Chunk213919.getAnalyticsToken()
  }
  getMFATicket() {
    return H
  }
  getMFAMethods() {
    return $
  }
  getLoginInstanceId() {
    return i
  }
  hasTOTPEnabled() {
    return V.includes(Chunk911969.Pi.TOTP)
  }
  getCredentials() {
    if (null == r) throw Error("no credentials");
    return r
  }
  allowLogoutRedirect() {
    return !F
  }
  getSuspendedUserToken() {
    return X
  }
  getIsPasswordlessActive() {
    return Q
  }
  attemptedPasswordLogin() {
    return J
  }
}
N(ek, "displayName", "AuthenticationStore");
let ej = new ek(Chunk570140.Z, {
  CONNECTION_OPEN: eT,
  OVERLAY_INITIALIZE: eS,
  CONNECTION_CLOSED: eA,
  AUTH_SESSION_CHANGE: eN,
  LOGIN: es,
  LOGIN_SUCCESS: eu,
  LOGIN_FAILURE: ed,
  LOGIN_MFA_STEP: eh,
  LOGIN_MFA: em,
  LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION: eg,
  LOGIN_ACCOUNT_DISABLED: eE,
  LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: eb,
  LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: ey,
  LOGIN_RESET: el,
  LOGIN_STATUS_RESET: ec,
  LOGIN_SUSPENDED_USER: ex,
  LOGOUT: eP,
  FINGERPRINT: eO,
  INSTALLATION_DEFINED: ev,
  REGISTER_SUCCESS: eI,
  FORGOT_PASSWORD_REQUEST: eD,
  FORGOT_PASSWORD_SENT: ew,
  UPDATE_TOKEN: eC,
  EXPERIMENTS_FETCH: en,
  CURRENT_USER_UPDATE: eL,
  AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: eR,
  CLOSE_SUSPENDED_USER: eM,
  PASSWORDLESS_FAILURE: e_,
  PASSWORDLESS_START: ef
}, Chunk570140.c.Early)