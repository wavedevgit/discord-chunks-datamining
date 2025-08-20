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
let C = new Chunk710845.Z("AuthenticationStore"),
  N = "fingerprint",
  R = "user_id_cache",
  P = null,
  w = null,
  D = null,
  x = null,
  L = null,
  j = null,
  M = null,
  k = Chunk981631.u34.NONE,
  U = false,
  G = [],
  B = "",
  Z = false,
  V = null,
  F = false,
  H = false,
  Y = null,
  W = null,
  K = false,
  z = false,
  q = [];

function X(e) {
  let t = null != a.getToken(),
    n = null != c.K.get(T.B1h);
  C.verbose(e, {
    tokenManagerHasToken: t,
    storageHasToken: n
  })
}

function Q() {
  let e = !(arguments.length > 0) || true === arguments[0] || arguments[0];
  if (L = Chunk433517.K.get(N), null != Y) return Y;
  let t = null != L ? L : Chunk213919.getToken();
  !(0, Chunk703656.m1)() || !module && null != exports || Chunk117240.Z.isHandoffAvailable() || J({
    withGuildExperiments: true
  })
}

function J(e) {
  let {
    withGuildExperiments: t
  } = e, n = {}, r = b.default.getSuperPropertiesBase64();
  null != r && (n["X-Super-Properties"] = r), null != L && (n["X-Fingerprint"] = L), Y = l.tn.get({
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
  j = L, L = null, Chunk433517.K.remove(N)
}

function ee(e, t) {
  X("setAuthToken called."), (null == t || t !== P) && a.removeAnalyticsToken(), a.setToken(e, t)
}

function et(e) {
  M = e, a.setAnalyticsToken(e)
}

function en() {
  return X("removeAuthToken called."), Chunk213919.removeAnalyticsToken(), Chunk213919.removeToken()
}

function er(e) {
  let {
    isPasswordAttempt: t
  } = e;
  k = T.u34.LOGGING_IN, z = z || true === t
}

function ei(e) {
  let {
    isMultiAccount: t
  } = e;
  k = T.u34.NONE, B = "", Z = false, V = null, r = null, t || (eu(), en(), Q(false))
}

function ea() {
  k = Chunk981631.u34.NONE
}

function eo(e) {
  let {
    token: t
  } = e;
  k = T.u34.NONE, ee(t), $(), B = "", Z = false, V = null, eu(), K = false
}

function es(e) {
  let {
    error: t
  } = e;
  B = "", Z = false, V = null, eu(), k = null != (0, _.p)(t).date_of_birth ? T.u34.LOGIN_AGE_GATE : T.u34.NONE
}

function el() {
  K = true
}

function ec(e) {
  let {
    error: t
  } = e;
  B = "", Z = false, V = null, K = false, k = null != (0, _.F)(t).date_of_birth ? T.u34.LOGIN_AGE_GATE : T.u34.NONE
}

function eu() {
  let e = [];
  null != V && module.push({
    type: "webauthn",
    challenge: V
  }), F && module.push({
    type: "totp",
    backup_codes_allowed: H
  }), H && module.push({
    type: "backup"
  }), Z && module.push({
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
  null != t && (B = t, Z = n, V = null != r ? r : null, H = i, F = a, eu()), k = T.u34.MFA_STEP
}

function ef() {
  k = Chunk981631.u34.LOGGING_IN_MFA
}

function e_(e) {
  k = T.u34.ACCOUNT_SCHEDULED_FOR_DELETION, r = e.credentials
}

function ep(e) {
  k = T.u34.ACCOUNT_DISABLED, r = e.credentials
}

function eh(e) {
  k = T.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION, r = e.credentials
}

function em(e) {
  k = T.u34.PHONE_IP_AUTHORIZATION, r = e.credentials
}

function eg(e) {
  let t = e.fingerprint;
  null == L ? null != t ? (b.default.track(T.rMx.USER_FINGERPRINT_CHANGED, {
    old_fingerprint: null != j ? (0, o.s)(j) : null,
    new_fingerprint: (0, o.s)(t)
  }), L = t, j = t, c.K.set(N, L)) : Q() : null != t && L !== t && b.default.track(T.rMx.EXTERNAL_FINGERPRINT_DROPPED, {
    fingerprint: (0, o.s)(L),
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
  X("handleConnectionOpen called"), O.Z.setUser(n.id, n.username, null != (t = n.email) ? t : true, (0, E.Z)(n)), w = r, D = i, x = s, et(a), P = n.id, true !== o && (G = o.authenticator_types), c.K.set(R, n.id)
}

function ey(e) {
  var t;
  let {
    user: n,
    sessionId: r,
    analyticsToken: i,
    token: a
  } = e;
  O.Z.setUser(n.id, n.username, null != (t = n.email) ? t : true, (0, E.Z)(n)), w = r, M = i, ee(a, n.id), null != i && et(i), $(), P = n.id, c.K.set(R, n.id)
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
  }), I.Z.clearAll(), h.ZH(), O.Z.clearUser(), c.K.remove(R), P = null, w = null, k = (null == e ? true : e.isSwitchingAccount) ? T.u34.LOGGING_IN : T.u34.NONE, B = "", V = null, Z = false, K = false, z = false, eu()
}

function eA() {
  k = Chunk981631.u34.FORGOT_PASSWORD
}

function eC() {
  k = Chunk981631.u34.NONE
}

function eN(e) {
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
  W = null, k = Chunk981631.u34.NONE, eS(), setImmediate(() => (0, Chunk703656.uL)(Chunk981631.Z5c.DEFAULT_LOGGED_OUT))
}
class ew extends(i = Chunk442837.ZP.Store) {
  initialize() {
    P = Chunk433517.K.get(R), null == Chunk213919.getToken() && Q(), this.addChangeListener(() => (0, Chunk670890.u)(P))
  }
  getLoginStatus() {
    return k
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
    return x
  }
  getToken() {
    return (0, Chunk449934.LP)()
  }
  isAuthenticated() {
    return (0, Chunk449934.$8)()
  }
  getFingerprint() {
    return L
  }
  getAnalyticsToken() {
    return null != M ? M : Chunk213919.getAnalyticsToken()
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
  FORGOT_PASSWORD_SENT: eC,
  UPDATE_TOKEN: ev,
  EXPERIMENTS_FETCH: J,
  CURRENT_USER_UPDATE: eN,
  AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: eT,
  CLOSE_SUSPENDED_USER: eP,
  PASSWORDLESS_FAILURE: ec,
  PASSWORDLESS_START: el
}, Chunk570140.c.Early)