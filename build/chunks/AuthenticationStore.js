/** Chunk was on web.js **/
/** chunk id: 314897, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i;
require.r(exports), require.d(exports, {
  default: () => ek
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
let P = new Chunk710845.Z("AuthenticationStore"),
  R = "fingerprint",
  w = "analytics_installation",
  D = "user_id_cache",
  x = null,
  L = null,
  j = null,
  M = null,
  k = null,
  U = null,
  G = null,
  Z = null,
  B = Chunk981631.u34.NONE,
  F = false,
  V = [],
  H = "",
  Y = false,
  W = null,
  K = false,
  z = false,
  q = null,
  Q = null,
  X = false,
  J = false,
  $ = [];

function ee(e) {
  let t = null != o.getToken(),
    n = null != u.K.get(A.B1h);
  P.verbose(e, {
    tokenManagerHasToken: t,
    storageHasToken: n
  })
}

function et() {
  var e;
  let t = !(arguments.length > 0) || true === arguments[0] || arguments[0];
  if (k = Chunk433517.K.get(R), G = null != (e = Chunk433517.K.get(w)) ? module : null, null != q) return q;
  let n = null != k ? k : Chunk213919.getToken();
  !(0, Chunk703656.m1)() || !exports && null != require || Chunk117240.Z.isHandoffAvailable() || en({
    withGuildExperiments: true
  })
}

function en(e) {
  let {
    withGuildExperiments: t
  } = e, n = {}, r = O.default.getSuperPropertiesBase64();
  null != r && (n["X-Super-Properties"] = r), null != k && (n["X-Fingerprint"] = k), null != G && (n["X-Installation-ID"] = G), q = c.tn.get({
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
    }), q = null, (0, p.$L)()
  }, () => {
    q = null, d.Z.dispatch({
      type: "EXPERIMENTS_FETCH_FAILURE"
    })
  })
}

function er() {
  U = k, k = null, Chunk433517.K.remove(R)
}

function ei(e, t) {
  ee("setAuthToken called."), (null == t || t !== x) && o.removeAnalyticsToken(), o.setToken(e, t)
}

function ea(e) {
  Z = e, o.setAnalyticsToken(e)
}

function eo() {
  return ee("removeAuthToken called."), Chunk213919.removeAnalyticsToken(), Chunk213919.removeToken()
}

function es(e) {
  let {
    isPasswordAttempt: t
  } = e;
  B = A.u34.LOGGING_IN, J = J || true === t
}

function el(e) {
  let {
    isMultiAccount: t
  } = e;
  B = A.u34.NONE, H = "", Y = false, W = null, i = null, r = null, t || (e_(), eo(), et(false))
}

function ec() {
  B = Chunk981631.u34.NONE
}

function eu(e) {
  let {
    token: t
  } = e;
  B = A.u34.NONE, ei(t), er(), H = "", Y = false, W = null, i = null, e_(), X = false
}

function ed(e) {
  let {
    error: t
  } = e;
  H = "", Y = false, W = null, i = null, e_(), B = null != (0, _.p)(t).date_of_birth ? A.u34.LOGIN_AGE_GATE : A.u34.NONE
}

function ef() {
  X = true
}

function ep(e) {
  let {
    error: t
  } = e;
  H = "", Y = false, W = null, X = false, i = null, B = null != (0, _.F)(t).date_of_birth ? A.u34.LOGIN_AGE_GATE : A.u34.NONE
}

function e_() {
  let e = [];
  null != W && module.push({
    type: "webauthn",
    challenge: W
  }), K && module.push({
    type: "totp"
  }), z && module.push({
    type: "backup"
  }), Y && module.push({
    type: "sms"
  }), $ = module
}

function em(e) {
  let {
    ticket: t,
    sms: n,
    webauthn: r,
    backup: a,
    totp: o,
    loginInstanceId: s
  } = e;
  null != t && (H = t, Y = n, W = null != r ? r : null, z = a, K = o, i = s, e_()), B = A.u34.MFA_STEP
}

function eh() {
  B = Chunk981631.u34.LOGGING_IN_MFA
}

function eg(e) {
  B = A.u34.ACCOUNT_SCHEDULED_FOR_DELETION, r = e.credentials
}

function eE(e) {
  B = A.u34.ACCOUNT_DISABLED, r = e.credentials
}

function eb(e) {
  B = A.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION, r = e.credentials
}

function ey(e) {
  B = A.u34.PHONE_IP_AUTHORIZATION, r = e.credentials
}

function eO(e) {
  let t = e.fingerprint;
  null == k ? null != t ? (O.default.track(A.rMx.USER_FINGERPRINT_CHANGED, {
    old_fingerprint: null != U ? (0, s.s)(U) : null,
    new_fingerprint: (0, s.s)(t)
  }), k = t, U = t, u.K.set(R, k)) : et() : null != t && k !== t && O.default.track(A.rMx.EXTERNAL_FINGERPRINT_DROPPED, {
    fingerprint: (0, s.s)(k),
    dropped_fingerprint: (0, s.s)(t)
  })
}

function ev(e) {
  let {
    installation: t
  } = e;
  if (null != G && G.length > 0) returnfalse;
  G = t, b.Z.canUseInstallationId() && u.K.set(w, t)
}

function eS(e) {
  let {
    token: t
  } = e;
  ei(t), er()
}

function eI(e) {
  var t;
  let {
    user: n,
    sessionId: r,
    authSessionIdHash: i,
    analyticsToken: a,
    auth: o,
    staticAuthSessionId: s
  } = e;
  ee("handleConnectionOpen called"), S.Z.setUser(n.id, n.username, null != (t = n.email) ? t : true, (0, y.Z)(n)), L = r, j = i, M = s, ea(a), x = n.id, true !== o && (V = o.authenticator_types), u.K.set(D, n.id)
}

function eT(e) {
  var t;
  let {
    user: n,
    sessionId: r,
    analyticsToken: i,
    token: a
  } = e;
  S.Z.setUser(n.id, n.username, null != (t = n.email) ? t : true, (0, y.Z)(n)), L = r, Z = i, ei(a, n.id), null != i && ea(i), er(), x = n.id, u.K.set(D, n.id)
}

function eA(e) {
  let {
    code: t
  } = e;
  ee("handleConnectionClosed called with code ".concat(t, "."));
  let r = n(952265).nf;
  if (4004 === t) {
    if (F || r(C.$$) || r(C.dG)) return void eP();
    O.default.track(A.rMx.APP_USER_DEAUTHENTICATED, {
      user_id: u.K.get(D)
    }), eR(), setImmediate(() => (0, E.uL)(A.Z5c.DEFAULT_LOGGED_OUT))
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
  null != t && (j = t)
}

function eP() {
  F = true, eR(), Chunk570140.Z.wait(() => {
    (0, Chunk703656.uL)(Chunk981631.Z5c.REGISTER)
  })
}

function eR(e) {
  var t;
  ee("handleLogout called.");
  let n = eo();
  null != (t = null == e ? true : e.isSwitchingAccount) && t || (n && er(), et()), l.ZP.PersistedStore.clearAll({
    omit: ["InstallationManagerStore", "AgeGateStore", "NativePermissionsStore", "MultiAccountStore", "DraftStore", "OverlayStoreV2", "StreamerModeStore", "LoginRequiredActionStore", "LayoutStore", "OverlaySettingsStore", "ApexExperimentStore"],
    type: (null == e ? true : e.isSwitchingAccount) ? "user-data-only" : "all"
  }), T.Z.clearAll(), h.ZH(), S.Z.clearUser(), u.K.remove(D), x = null, L = null, B = (null == e ? true : e.isSwitchingAccount) ? A.u34.LOGGING_IN : A.u34.NONE, H = "", W = null, Y = false, X = false, J = false, e_()
}

function ew() {
  B = Chunk981631.u34.FORGOT_PASSWORD
}

function eD() {
  B = Chunk981631.u34.NONE
}

function ex(e) {
  let {
    user: t
  } = e;
  x = t.id, true !== t.authenticator_types && (V = t.authenticator_types), u.K.set(D, t.id)
}

function eL(e) {
  let {
    suspendedUserToken: t
  } = e;
  X = false, Q = t, setImmediate(() => (0, E.uL)(A.Z5c.ACCOUNT_STANDING))
}

function ej() {
  Q = null, B = Chunk981631.u34.NONE, eR(), setImmediate(() => (0, Chunk703656.uL)(Chunk981631.Z5c.DEFAULT_LOGGED_OUT))
}
class eM extends(a = Chunk442837.ZP.Store) {
  initialize() {
    x = Chunk433517.K.get(D), null == Chunk213919.getToken() && et(), this.addChangeListener(() => (0, Chunk670890.u)(x))
  }
  getLoginStatus() {
    return B
  }
  getId() {
    return x
  }
  getSessionId() {
    return L
  }
  getAuthSessionIdHash() {
    return j
  }
  getStaticAuthSessionId() {
    return M
  }
  getToken() {
    return (0, Chunk449934.LP)()
  }
  isAuthenticated() {
    return (0, Chunk449934.$8)()
  }
  getFingerprint() {
    return k
  }
  getInstallationForTracking() {
    return Chunk625143.Z.canUseInstallationId() ? G : null
  }
  getAnalyticsToken() {
    return null != Z ? Z : Chunk213919.getAnalyticsToken()
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
    return Q
  }
  getIsPasswordlessActive() {
    return X
  }
  attemptedPasswordLogin() {
    return J
  }
}
N(eM, "displayName", "AuthenticationStore");
let ek = new eM(Chunk570140.Z, {
  CONNECTION_OPEN: eI,
  OVERLAY_INITIALIZE: eT,
  CONNECTION_CLOSED: eA,
  AUTH_SESSION_CHANGE: eN,
  LOGIN: es,
  LOGIN_SUCCESS: eu,
  LOGIN_FAILURE: ed,
  LOGIN_MFA_STEP: em,
  LOGIN_MFA: eh,
  LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION: eg,
  LOGIN_ACCOUNT_DISABLED: eE,
  LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: eb,
  LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: ey,
  LOGIN_RESET: el,
  LOGIN_STATUS_RESET: ec,
  LOGIN_SUSPENDED_USER: eL,
  LOGOUT: eR,
  FINGERPRINT: eO,
  INSTALLATION_DEFINED: ev,
  REGISTER_SUCCESS: eS,
  FORGOT_PASSWORD_REQUEST: ew,
  FORGOT_PASSWORD_SENT: eD,
  UPDATE_TOKEN: eC,
  EXPERIMENTS_FETCH: en,
  CURRENT_USER_UPDATE: ex,
  AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: eP,
  CLOSE_SUSPENDED_USER: ej,
  PASSWORDLESS_FAILURE: ep,
  PASSWORDLESS_START: ef
}, Chunk570140.c.Early)