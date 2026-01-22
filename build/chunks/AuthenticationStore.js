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

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let w = new Chunk626584.A("AuthenticationStore"),
  P = "fingerprint",
  D = "analytics_installation",
  x = "user_id_cache",
  L = null,
  j = null,
  M = null,
  k = null,
  U = null,
  G = null,
  V = null,
  F = null,
  B = Chunk652215.aUe.NONE,
  H = false,
  Y = [],
  W = "",
  K = false,
  z = null,
  q = false,
  X = false,
  Z = null,
  Q = null,
  $ = false,
  J = false,
  ee = [];

function et(e) {
  let t = null != s.getToken(),
    n = null != u.w.get(C.ilC);
  w.verbose(e, {
    tokenManagerHasToken: t,
    storageHasToken: n
  })
}

function en() {
  var e;
  let t = !(arguments.length > 0) || true === arguments[0] || arguments[0];
  if (U = u.w.get(P), V = null != (e = u.w.get(D)) ? e : null, null != Z) return Z;
  let n = null != U ? U : s.getToken();
  !(0, b.m)() || !t && null != n || I.A.isHandoffAvailable() || er({
    withGuildExperiments: true
  })
}

function er(e) {
  let {
    withGuildExperiments: t
  } = e, n = {}, r = A.default.getSuperPropertiesBase64();
  null != r && (n["X-Super-Properties"] = r), null != U && (n["X-Fingerprint"] = U), null != V && (n["X-Installation-ID"] = V), Z = c.Bo.get({
    url: C.Rsh.EXPERIMENTS,
    query: {
      with_guild_experiments: t
    },
    headers: n,
    context: {
      location: (0, b.SB)()
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
    }), Z = null, (0, p.hK)()
  }, () => {
    Z = null, d.h.dispatch({
      type: "EXPERIMENTS_FETCH_FAILURE"
    })
  })
}

function ei() {
  G = U, U = null, u.w.remove(P)
}

function ea(e, t) {
  et("setAuthToken called."), (null == t || t !== L) && s.removeAnalyticsToken(), s.setToken(e, t)
}

function es(e) {
  F = e, s.setAnalyticsToken(e)
}

function eo() {
  return et("removeAuthToken called."), s.removeAnalyticsToken(), s.removeToken()
}

function el(e) {
  let {
    isPasswordAttempt: t
  } = e;
  B = C.aUe.LOGGING_IN, J = J || true === t
}

function ec(e) {
  let {
    isMultiAccount: t
  } = e;
  B = C.aUe.NONE, W = "", K = false, z = null, i = null, r = null, t || (eh(), eo(), en(false))
}

function eu() {
  B = C.aUe.NONE
}

function ed(e) {
  let {
    token: t
  } = e;
  B = C.aUe.NONE, ea(t), ei(), W = "", K = false, z = null, i = null, eh(), $ = false
}

function ef(e) {
  let {
    error: t
  } = e;
  W = "", K = false, z = null, i = null, eh(), B = null != (0, _.p)(t).date_of_birth ? C.aUe.LOGIN_AGE_GATE : C.aUe.NONE
}

function ep() {
  $ = true
}

function e_(e) {
  let {
    error: t
  } = e;
  W = "", K = false, z = null, $ = false, i = null, B = null != (0, _.W)(t).date_of_birth ? C.aUe.LOGIN_AGE_GATE : C.aUe.NONE
}

function eh() {
  let e = [];
  null != z && e.push({
    type: "webauthn",
    challenge: z
  }), q && e.push({
    type: "totp"
  }), X && e.push({
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
    totp: s,
    loginInstanceId: o
  } = e;
  null != t && (W = t, K = n, z = null != r ? r : null, X = a, q = s, i = o, eh()), B = C.aUe.MFA_STEP
}

function eg() {
  B = C.aUe.LOGGING_IN_MFA
}

function eE(e) {
  B = C.aUe.ACCOUNT_SCHEDULED_FOR_DELETION, r = e.credentials
}

function eb(e) {
  B = C.aUe.ACCOUNT_DISABLED, r = e.credentials
}

function ey(e) {
  B = C.aUe.PASSWORD_RECOVERY_PHONE_VERIFICATION, r = e.credentials
}

function eO(e) {
  B = C.aUe.PHONE_IP_AUTHORIZATION, r = e.credentials
}

function eA(e) {
  let t = e.fingerprint;
  null == U ? null != t ? (A.default.track(C.HAw.USER_FINGERPRINT_CHANGED, {
    old_fingerprint: null != G ? (0, o.d)(G) : null,
    new_fingerprint: (0, o.d)(t)
  }), U = t, G = t, u.w.set(P, U)) : en() : null != t && U !== t && A.default.track(C.HAw.EXTERNAL_FINGERPRINT_DROPPED, {
    fingerprint: (0, o.d)(U),
    dropped_fingerprint: (0, o.d)(t)
  })
}

function ev(e) {
  let {
    installation: t
  } = e;
  if (null != V && V.length > 0) returnfalse;
  V = t, y.A.canUseInstallationId() && u.w.set(D, t)
}

function eS(e) {
  let {
    token: t
  } = e;
  ea(t), ei()
}

function eI(e) {
  var t;
  let {
    user: n,
    sessionId: r,
    authSessionIdHash: i,
    analyticsToken: a,
    auth: s,
    staticAuthSessionId: o,
    apexExperiments: l
  } = e;
  et("handleConnectionOpen called"), S.A.setUser(n.id, n.username, null != (t = n.email) ? t : true, (0, O.A)(n)), j = r, M = i, k = o, es(a), L = n.id, true !== s && (Y = s.authenticator_types), u.w.set(x, n.id), (null == l ? true : l.installation) != null && ev({
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
  S.A.setUser(n.id, n.username, null != (t = n.email) ? t : true, (0, O.A)(n)), j = r, F = i, ea(a, n.id), null != i && es(i), ei(), L = n.id, u.w.set(x, n.id)
}

function eC(e) {
  let {
    code: t
  } = e;
  et("handleConnectionClosed called with code ".concat(t, "."));
  let r = n(192308).hasModalOpen;
  if (4004 === t) {
    if (H || r(N.jc) || r(N.Uy)) return void ew();
    A.default.track(C.HAw.APP_USER_DEAUTHENTICATED, {
      user_id: u.w.get(x)
    }), eP(), setImmediate(() => (0, b.pX)(C.BVt.DEFAULT_LOGGED_OUT))
  }
}

function eN(e) {
  let {
    token: t,
    userId: n
  } = e;
  et("handleUpdateToken called"), ea(t, n), ei()
}

function eR(e) {
  let {
    authSessionIdHash: t
  } = e;
  null != t && (M = t)
}

function ew() {
  H = true, eP(), d.h.wait(() => {
    (0, b.pX)(C.BVt.REGISTER)
  })
}

function eP(e) {
  var t;
  et("handleLogout called.");
  let n = eo();
  null != (t = null == e ? true : e.isSwitchingAccount) && t || (n && ei(), en()), l.Ay.PersistedStore.clearAll({
    omit: ["InstallationManagerStore", "AgeGateStore", "NativePermissionsStore", "MultiAccountStore", "DraftStore", "OverlayStoreV2", "StreamerModeStore", "LoginRequiredActionStore", "LayoutStore", "OverlaySettingsStore", "ApexExperimentStore"],
    type: (null == e ? true : e.isSwitchingAccount) ? "user-data-only" : "all"
  }), T.A.clearAll(), m.IU(), S.A.clearUser(), u.w.remove(x), L = null, j = null, B = (null == e ? true : e.isSwitchingAccount) ? C.aUe.LOGGING_IN : C.aUe.NONE, W = "", z = null, K = false, $ = false, J = false, eh()
}

function eD() {
  B = C.aUe.FORGOT_PASSWORD
}

function ex() {
  B = C.aUe.NONE
}

function eL(e) {
  let {
    user: t
  } = e;
  L = t.id, true !== t.authenticator_types && (Y = t.authenticator_types), u.w.set(x, t.id)
}

function ej(e) {
  let {
    suspendedUserToken: t
  } = e;
  $ = false, Q = t, setImmediate(() => (0, b.pX)(C.BVt.ACCOUNT_STANDING))
}

function eM() {
  Q = null, B = C.aUe.NONE, eP(), setImmediate(() => (0, b.pX)(C.BVt.DEFAULT_LOGGED_OUT))
}
class ek extends(a = Chunk311907.Ay.Store) {
  initialize() {
    var e;
    L = u.w.get(x), V = null != (e = u.w.get(D)) ? e : null, null == s.getToken() && (en(), (null == V || 0 === V.length) && (0, E.Tv)(null)), this.addChangeListener(() => (0, h.f)(L))
  }
  getLoginStatus() {
    return B
  }
  getId() {
    return L
  }
  getSessionId() {
    return j
  }
  getAuthSessionIdHash() {
    return M
  }
  getStaticAuthSessionId() {
    return k
  }
  getToken() {
    return (0, v.gf)()
  }
  isAuthenticated() {
    return (0, v.wR)()
  }
  getFingerprint() {
    return U
  }
  getInstallationForTracking() {
    return y.A.canUseInstallationId() ? V : null
  }
  getAnalyticsToken() {
    return null != F ? F : s.getAnalyticsToken()
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
    return Q
  }
  getIsPasswordlessActive() {
    return $
  }
  attemptedPasswordLogin() {
    return J
  }
}
R(ek, "displayName", "AuthenticationStore");
let eU = new ek(Chunk73153.h, {
  CONNECTION_OPEN: eI,
  OVERLAY_INITIALIZE: eT,
  CONNECTION_CLOSED: eC,
  AUTH_SESSION_CHANGE: eR,
  LOGIN: el,
  LOGIN_SUCCESS: ed,
  LOGIN_FAILURE: ef,
  LOGIN_MFA_STEP: em,
  LOGIN_MFA: eg,
  LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION: eE,
  LOGIN_ACCOUNT_DISABLED: eb,
  LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: ey,
  LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: eO,
  LOGIN_RESET: ec,
  LOGIN_STATUS_RESET: eu,
  LOGIN_SUSPENDED_USER: ej,
  LOGOUT: eP,
  FINGERPRINT: eA,
  INSTALLATION_ID: ev,
  REGISTER_SUCCESS: eS,
  FORGOT_PASSWORD_REQUEST: eD,
  FORGOT_PASSWORD_SENT: ex,
  UPDATE_TOKEN: eN,
  EXPERIMENTS_FETCH: er,
  CURRENT_USER_UPDATE: eL,
  AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: ew,
  CLOSE_SUSPENDED_USER: eM,
  PASSWORDLESS_FAILURE: e_,
  PASSWORDLESS_START: ep
}, Chunk73153.A.Early)