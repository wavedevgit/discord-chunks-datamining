/** Chunk was on web.js **/
/** chunk id: 961350, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i;
require.r(exports), require.d(exports, {
  default: () => eU
}), require("./321073.js"), require("./142703.js"), require("./65821.js");
var a, Chunk247775 = require("./247775.js"),
  Chunk80703 = require("./80703.js"),
  Chunk311907 = require("./311907.js"),
  Chunk562465 = require("./562465.js"),
  Chunk506774 = require("./506774.js"),
  Chunk73153 = require("./73153.js"),
  Chunk155718 = require("./155718.js"),
  Chunk421924 = require("./421924.js"),
  Chunk15552 = require("./15552.js"),
  Chunk248415 = require("./248415.js"),
  Chunk53943 = require("./53943.js"),
  Chunk626584 = require("./626584.js"),
  Chunk620233 = require("./620233.js"),
  Chunk976860 = require("./976860.js"),
  Chunk918518 = require("./918518.js"),
  Chunk252919 = require("./252919.js"),
  Chunk954571 = require("./954571.js"),
  Chunk612181 = require("./612181.js"),
  Chunk728458 = require("./728458.js"),
  Chunk115036 = require("./115036.js"),
  Chunk536802 = require("./536802.js"),
  Chunk652215 = require("./652215.js"),
  Chunk204925 = require("./204925.js");

function w(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let R = new Chunk626584.A("AuthenticationStore"),
  P = "fingerprint",
  D = "analytics_installation",
  L = "user_id_cache",
  x = null,
  M = null,
  j = null,
  k = null,
  U = null,
  G = null,
  F = null,
  V = null,
  B = Chunk652215.aUe.NONE,
  H = false,
  Y = [],
  W = "",
  K = false,
  z = null,
  q = false,
  Z = false,
  Q = null,
  X = null,
  J = false,
  $ = false,
  ee = [];

function et(e) {
  let t = null != o.getToken(),
    n = null != u.w.get(C.ilC);
  R.verbose(e, {
    tokenManagerHasToken: t,
    storageHasToken: n
  })
}

function en() {
  var e;
  let t = !(arguments.length > 0) || true === arguments[0] || arguments[0];
  if (U = u.w.get(P), F = null != (e = u.w.get(D)) ? e : null, null != Q) return Q;
  let n = null != U ? U : o.getToken();
  !(0, y.m)() || !t && null != n || S.A.isHandoffAvailable() || er({
    withGuildExperiments: true
  })
}

function er(e) {
  let {
    withGuildExperiments: t
  } = e, n = {}, r = v.default.getSuperPropertiesBase64();
  null != r && (n["X-Super-Properties"] = r), null != U && (n["X-Fingerprint"] = U), null != F && (n["X-Installation-ID"] = F), Q = c.Bo.get({
    url: C.Rsh.EXPERIMENTS,
    query: {
      with_guild_experiments: t
    },
    headers: n,
    context: {
      location: (0, y.SB)()
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
    t && d.h.dispatch({
      type: "FINGERPRINT",
      fingerprint: t
    }), d.h.dispatch({
      type: "EXPERIMENTS_FETCH_SUCCESS",
      fingerprint: t,
      experiments: n,
      guildExperiments: r
    }), Q = null, (0, p.hK)()
  }, () => {
    Q = null, d.h.dispatch({
      type: "EXPERIMENTS_FETCH_FAILURE"
    })
  })
}

function ei() {
  G = U, U = null, u.w.remove(P)
}

function ea(e, t) {
  et("setAuthToken called."), (null == t || t !== x) && o.removeAnalyticsToken(), o.setToken(e, t)
}

function eo(e) {
  V = e, o.setAnalyticsToken(e)
}

function es() {
  return et("removeAuthToken called."), o.removeAnalyticsToken(), o.removeToken()
}

function el(e) {
  let {
    isPasswordAttempt: t
  } = e;
  B = C.aUe.LOGGING_IN, $ = $ || true === t
}

function ec(e) {
  let {
    isMultiAccount: t
  } = e;
  B = C.aUe.NONE, W = "", K = false, z = null, i = null, r = null, t || (eh(), es(), en(false))
}

function eu() {
  B = C.aUe.NONE
}

function ed(e) {
  let {
    token: t
  } = e;
  B = C.aUe.NONE, ea(t), ei(), W = "", K = false, z = null, i = null, eh(), J = false
}

function ef(e) {
  let {
    error: t
  } = e;
  W = "", K = false, z = null, i = null, eh(), B = null != (0, _.p)(t).date_of_birth ? C.aUe.LOGIN_AGE_GATE : C.aUe.NONE
}

function ep() {
  J = true
}

function e_(e) {
  let {
    error: t
  } = e;
  W = "", K = false, z = null, J = false, i = null, B = null != (0, _.W)(t).date_of_birth ? C.aUe.LOGIN_AGE_GATE : C.aUe.NONE
}

function eh() {
  let e = [];
  null != z && e.push({
    type: "webauthn",
    challenge: z
  }), q && e.push({
    type: "totp"
  }), Z && e.push({
    type: "backup"
  }), K && e.push({
    type: "sms"
  }), ee = e
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
  null != t && (W = t, K = n, z = null != r ? r : null, Z = a, q = o, i = s, eh()), B = C.aUe.MFA_STEP
}

function eg() {
  B = C.aUe.LOGGING_IN_MFA
}

function eE(e) {
  B = C.aUe.ACCOUNT_SCHEDULED_FOR_DELETION, r = e.credentials
}

function ey(e) {
  B = C.aUe.ACCOUNT_DISABLED, r = e.credentials
}

function eb(e) {
  B = C.aUe.PASSWORD_RECOVERY_PHONE_VERIFICATION, r = e.credentials
}

function eO(e) {
  B = C.aUe.PHONE_IP_AUTHORIZATION, r = e.credentials
}

function ev(e) {
  let t = e.fingerprint;
  null == U ? null != t ? (v.default.track(C.HAw.USER_FINGERPRINT_CHANGED, {
    old_fingerprint: null != G ? (0, s.d)(G) : null,
    new_fingerprint: (0, s.d)(t)
  }), U = t, G = t, u.w.set(P, U)) : en() : null != t && U !== t && v.default.track(C.HAw.EXTERNAL_FINGERPRINT_DROPPED, {
    fingerprint: (0, s.d)(U),
    dropped_fingerprint: (0, s.d)(t)
  })
}

function eA(e) {
  let {
    installation: t
  } = e;
  if (null != F && F.length > 0) returnfalse;
  F = t, b.A.canUseInstallationId() && u.w.set(D, t)
}

function eI(e) {
  let {
    token: t
  } = e;
  ea(t), ei()
}

function eS(e) {
  var t;
  let {
    user: n,
    sessionId: r,
    authSessionIdHash: i,
    analyticsToken: a,
    auth: o,
    staticAuthSessionId: s,
    apexExperiments: l
  } = e;
  et("handleConnectionOpen called"), I.A.setUser(n.id, n.username, null != (t = n.email) ? t : true, (0, O.A)(n)), M = r, j = i, k = s, eo(a), x = n.id, true !== o && (Y = o.authenticator_types), u.w.set(L, n.id), (null == l ? true : l.installation) != null && eA({
    type: "INSTALLATION_ID",
    installation: l.installation
  })
}

function eT(e) {
  var t;
  let {
    user: n,
    sessionId: r,
    analyticsToken: i,
    token: a
  } = e;
  I.A.setUser(n.id, n.username, null != (t = n.email) ? t : true, (0, O.A)(n)), M = r, V = i, ea(a, n.id), null != i && eo(i), ei(), x = n.id, u.w.set(L, n.id)
}

function eC(e) {
  let {
    code: t
  } = e;
  et("handleConnectionClosed called with code ".concat(t, "."));
  let r = n(192308).hasModalOpen;
  if (4004 === t) {
    if (H || r(N.jc) || r(N.Uy)) return void eR();
    v.default.track(C.HAw.APP_USER_DEAUTHENTICATED, {
      user_id: u.w.get(L)
    }), eP(), setImmediate(() => (0, y.pX)(C.BVt.DEFAULT_LOGGED_OUT))
  }
}

function eN(e) {
  let {
    token: t,
    userId: n
  } = e;
  et("handleUpdateToken called"), ea(t, n), ei()
}

function ew(e) {
  let {
    authSessionIdHash: t
  } = e;
  null != t && (j = t)
}

function eR() {
  H = true, eP(), d.h.wait(() => {
    (0, y.pX)(C.BVt.REGISTER)
  })
}

function eP(e) {
  var t;
  et("handleLogout called.");
  let n = es();
  null != (t = null == e ? true : e.isSwitchingAccount) && t || (n && ei(), en()), l.Ay.PersistedStore.clearAll({
    omit: ["InstallationManagerStore", "AgeGateStore", "NativePermissionsStore", "MultiAccountStore", "DraftStore", "OverlayStoreV2", "StreamerModeStore", "LoginRequiredActionStore", "LayoutStore", "OverlaySettingsStore", "ApexExperimentStore"],
    type: (null == e ? true : e.isSwitchingAccount) ? "user-data-only" : "all"
  }), T.A.clearAll(), m.IU(), I.A.clearUser(), u.w.remove(L), x = null, M = null, B = (null == e ? true : e.isSwitchingAccount) ? C.aUe.LOGGING_IN : C.aUe.NONE, W = "", z = null, K = false, J = false, $ = false, eh()
}

function eD() {
  B = C.aUe.FORGOT_PASSWORD
}

function eL() {
  B = C.aUe.NONE
}

function ex(e) {
  let {
    user: t
  } = e;
  x = t.id, true !== t.authenticator_types && (Y = t.authenticator_types), u.w.set(L, t.id)
}

function eM(e) {
  let {
    suspendedUserToken: t
  } = e;
  J = false, X = t, setImmediate(() => (0, y.pX)(C.BVt.ACCOUNT_STANDING))
}

function ej() {
  X = null, B = C.aUe.NONE, eP(), setImmediate(() => (0, y.pX)(C.BVt.DEFAULT_LOGGED_OUT))
}
class ek extends(a = Chunk311907.Ay.Store) {
  initialize() {
    var e;
    x = u.w.get(L), F = null != (e = u.w.get(D)) ? e : null, null == o.getToken() && (en(), (null == F || 0 === F.length) && (0, E.Tv)(null)), this.addChangeListener(() => (0, h.f)(x))
  }
  getLoginStatus() {
    return B
  }
  getId() {
    return x
  }
  getSessionId() {
    return M
  }
  getAuthSessionIdHash() {
    return j
  }
  getStaticAuthSessionId() {
    return k
  }
  getToken() {
    return (0, A.gf)()
  }
  isAuthenticated() {
    return (0, A.wR)()
  }
  getFingerprint() {
    return U
  }
  getInstallationForTracking() {
    return b.A.canUseInstallationId() ? F : null
  }
  getAnalyticsToken() {
    return null != V ? V : o.getAnalyticsToken()
  }
  getMFATicket() {
    return W
  }
  getMFAMethods() {
    return ee
  }
  getLoginInstanceId() {
    return i
  }
  hasTOTPEnabled() {
    return Y.includes(f.Wq.TOTP)
  }
  getCredentials() {
    if (null == r) throw Error("no credentials");
    return r
  }
  allowLogoutRedirect() {
    return !H
  }
  getSuspendedUserToken() {
    return X
  }
  getIsPasswordlessActive() {
    return J
  }
  attemptedPasswordLogin() {
    return $
  }
}
w(ek, "displayName", "AuthenticationStore");
let eU = new ek(Chunk73153.h, {
  CONNECTION_OPEN: eS,
  OVERLAY_INITIALIZE: eT,
  CONNECTION_CLOSED: eC,
  AUTH_SESSION_CHANGE: ew,
  LOGIN: el,
  LOGIN_SUCCESS: ed,
  LOGIN_FAILURE: ef,
  LOGIN_MFA_STEP: em,
  LOGIN_MFA: eg,
  LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION: eE,
  LOGIN_ACCOUNT_DISABLED: ey,
  LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: eb,
  LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: eO,
  LOGIN_RESET: ec,
  LOGIN_STATUS_RESET: eu,
  LOGIN_SUSPENDED_USER: eM,
  LOGOUT: eP,
  FINGERPRINT: ev,
  INSTALLATION_ID: eA,
  REGISTER_SUCCESS: eI,
  FORGOT_PASSWORD_REQUEST: eD,
  FORGOT_PASSWORD_SENT: eL,
  UPDATE_TOKEN: eN,
  EXPERIMENTS_FETCH: er,
  CURRENT_USER_UPDATE: ex,
  AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: eR,
  CLOSE_SUSPENDED_USER: ej,
  PASSWORDLESS_FAILURE: e_,
  PASSWORDLESS_START: ep
}, Chunk73153.A.Early)