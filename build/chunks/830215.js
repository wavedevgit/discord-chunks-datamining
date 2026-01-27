/** Chunk was on web.js **/
/** chunk id: 830215, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  A: () => P,
  W: () => N
}), require("./65821.js"), require("./142703.js"), require("./492834.js");
var Chunk110259 = require("./110259.js"),
  Chunk247775 = require("./247775.js"),
  Chunk562465 = require("./562465.js"),
  Chunk506774 = require("./506774.js"),
  Chunk73153 = require("./73153.js"),
  Chunk198982 = require("./198982.js"),
  Chunk934337 = require("./934337.js"),
  Chunk626584 = require("./626584.js"),
  Chunk250953 = require("./250953.js"),
  Chunk976860 = require("./976860.js"),
  Chunk917136 = require("./917136.js"),
  Chunk961350 = require("./961350.js"),
  Chunk153488 = require("./153488.js"),
  Chunk499785 = require("./499785.js"),
  Chunk630054 = require("./630054.js"),
  Chunk652215 = require("./652215.js"),
  Chunk516780 = require("./516780.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      O(e, t, n[t])
    })
  }
  return e
}

function A(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let S = new Chunk626584.A("AuthenticationActionCreators"),
  T = 5e3,
  C = null;
var N = function(e) {
  return e.MFA = "MFA", e.SUCCESS = "SUCCESS", e
}({});

function w(e) {
  let t = v({
    type: "LOGOUT"
  }, e);
  l.h.dispatch(t).catch(e => {
    var t;
    throw S.error("Error while dispatching LOGOUT", e), null == (t = window.DiscordErrors) || t.softCrash(e), e
  })
}

function R(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : y.BVt.DEFAULT_LOGGED_OUT;
  if (w(), null == t) return;
  let n = (0, f.Y)();
  null == n ? (0, p.pX)(t, {
    source: e
  }) : (E.A.popAll(), n.reset({
    index: 0,
    routes: [{
      name: "auth"
    }]
  }))
}
let P = {
  startSession(e) {
    l.h.wait(() => {
      l.h.dispatch({
        type: "START_SESSION",
        token: e
      })
    })
  },
  login(e) {
    let {
      login: t,
      password: n,
      undelete: r,
      source: a,
      giftCodeSKUId: o,
      invite: s,
      isMultiAccount: u
    } = e;
    return l.h.dispatch({
      type: "LOGIN",
      isPasswordAttempt: true
    }), g.A.post(I(v({
      url: y.Rsh.LOGIN,
      body: {
        login: t,
        password: n,
        undelete: r,
        login_source: a,
        gift_code_sku_id: o
      },
      retries: 2,
      oldFormErrors: true,
      trackedActionData: {
        event: i.NetworkActionNames.USER_LOGIN,
        properties: {
          invite_code: null == s ? true : s.code,
          is_multi_account: u
        }
      }
    }, u ? {
      headers: {
        authorization: ""
      }
    } : {}), {
      rejectWithError: false
    })).then(e => {
      let {
        body: {
          mfa: t,
          sms: n,
          webauthn: r,
          ticket: i,
          token: a,
          backup: o,
          user_id: s,
          required_actions: c,
          totp: d,
          login_instance_id: f
        }
      } = e;
      l.h.dispatch({
        type: "LOGIN_ATTEMPTED",
        user_id: s,
        required_actions: c
      }), t ? l.h.dispatch({
        type: "LOGIN_MFA_STEP",
        ticket: i,
        sms: n,
        webauthn: r,
        totp: d,
        backup: o,
        loginInstanceId: f
      }) : u ? this.switchAccountToken(a) : l.h.dispatch({
        type: "LOGIN_SUCCESS",
        token: a
      })
    }, e => {
      var r, i, a;
      let o = new c.Wl(e);
      if (null != e.body && (null == (r = e.body) ? true : r.suspended_user_token) != null) throw l.h.dispatch({
        type: "LOGIN_SUSPENDED_USER",
        suspendedUserToken: null == (a = e.body) ? true : a.suspended_user_token
      }), o;
      let s = null == (i = e.body) ? true : i.code;
      throw s === y.t02.ACCOUNT_SCHEDULED_FOR_DELETION && null != n && "" !== n ? l.h.dispatch({
        type: "LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION",
        credentials: {
          login: t,
          password: n
        }
      }) : s === y.t02.ACCOUNT_DISABLED && null != n && "" !== n ? l.h.dispatch({
        type: "LOGIN_ACCOUNT_DISABLED",
        credentials: {
          login: t,
          password: n
        }
      }) : s === y.t02.PHONE_VERIFICATION_REQUIRED ? l.h.dispatch({
        type: "LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED",
        credentials: {
          login: t,
          password: n
        }
      }) : l.h.dispatch({
        type: "LOGIN_FAILURE",
        error: o
      }), o
    })
  },
  loginMFAv2(e) {
    let {
      code: t,
      ticket: n,
      source: r,
      giftCodeSKUId: a,
      isMultiAccount: o,
      mfaType: s,
      loginInstanceId: c
    } = e;
    return g.A.post({
      url: y.Rsh.LOGIN_MFA(s),
      body: {
        code: t,
        ticket: n,
        login_source: r,
        gift_code_sku_id: a,
        login_instance_id: null != c ? c : h.default.getLoginInstanceId()
      },
      retries: 2,
      oldFormErrors: true,
      trackedActionData: {
        event: i.NetworkActionNames.USER_LOGIN_MFA
      },
      rejectWithError: false
    }).then(e => {
      o ? this.switchAccountToken(e.body.token) : l.h.dispatch({
        type: "LOGIN_SUCCESS",
        token: e.body.token
      })
    }).catch(e => {
      var t;
      if (null != e.body && null != e.body.suspended_user_token) return void l.h.dispatch({
        type: "LOGIN_SUSPENDED_USER",
        suspendedUserToken: e.body.suspended_user_token
      });
      if ((null == (t = e.body) ? true : t.code) === y.t02.MFA_INVALID_CODE) throw Error(e.body.message);
      throw e
    })
  },
  authenticatePasswordless(e) {
    let {
      authenticateFunc: t,
      conditionalMediationAbortController: n,
      source: r,
      giftCodeSKUId: i
    } = e;
    return null == n || n.abort("Starting non-conditional mediation"), l.h.dispatch({
      type: "PASSWORDLESS_START"
    }), (0, _.YS)().then(e => {
      let {
        challenge: n,
        ticket: a
      } = e;
      return t(n).then(e => this.loginWebAuthn({
        ticket: a,
        credential: e,
        source: r,
        giftCodeSKUId: i
      }))
    }).catch(e => {
      throw l.h.dispatch({
        type: "PASSWORDLESS_FAILURE",
        error: e
      }), e
    })
  },
  loginWebAuthn(e) {
    let {
      ticket: t,
      credential: n,
      source: r,
      giftCodeSKUId: a
    } = e;
    return g.A.post({
      url: y.Rsh.WEBAUTHN_CONDITIONAL_UI_LOGIN,
      body: {
        credential: n,
        ticket: t,
        source: r,
        giftCodeSKUId: a
      },
      retries: 1,
      trackedActionData: {
        event: i.NetworkActionNames.USER_LOGIN_PASSWORDLESS
      },
      rejectWithError: false
    }).then(e => {
      let {
        body: {
          token: t,
          user_id: n,
          required_actions: r
        }
      } = e;
      l.h.dispatch({
        type: "LOGIN_ATTEMPTED",
        user_id: n,
        required_actions: r
      }), l.h.dispatch({
        type: "LOGIN_SUCCESS",
        token: t
      })
    }).catch(e => {
      if (null != e.body && null != e.body.suspended_user_token) return void l.h.dispatch({
        type: "LOGIN_SUSPENDED_USER",
        suspendedUserToken: e.body.suspended_user_token
      });
      throw l.h.dispatch({
        type: "PASSWORDLESS_FAILURE",
        error: e
      }), e
    })
  },
  loginToken(e) {
    let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
    return l.h.dispatch({
      type: "LOGIN"
    }), new Promise(n => {
      setImmediate(() => {
        l.h.dispatch({
          type: "LOGIN_SUCCESS",
          token: e
        }), t && this.startSession(e), n()
      })
    })
  },
  async oneTimeLogin(e) {
    l.h.dispatch({
      type: "LOGIN"
    });
    try {
      let t = (await g.A.post({
        url: y.Rsh.ONE_TIME_LOGIN,
        body: {
          ticket: e
        },
        oldFormErrors: true,
        trackedActionData: {
          event: i.NetworkActionNames.USER_ONE_TIME_LOGIN
        },
        rejectWithError: true
      })).body.token;
      if (!t) throw Error("No token in response");
      return await this.loginToken(t, false), t
    } catch (e) {
      throw l.h.dispatch({
        type: "LOGIN_FAILURE",
        error: new c.Wl(e)
      }), e
    }
  },
  loginReset(e) {
    l.h.dispatch({
      type: "LOGIN_RESET",
      isMultiAccount: e
    })
  },
  loginStatusReset() {
    l.h.dispatch({
      type: "LOGIN_STATUS_RESET"
    })
  },
  logoutInternal(e) {
    w(e)
  },
  logout(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : y.BVt.DEFAULT_LOGGED_OUT,
      r = arguments.length > 2 ? arguments[2] : true;
    return g.A.post(I(v({
      url: y.Rsh.LOGOUT,
      body: {
        provider: (0, b.oH)(),
        token: s.w.get(y.Xlh),
        voip_provider: b.vz,
        voip_token: s.w.get(y.Ahp)
      },
      oldFormErrors: true,
      trackedActionData: {
        event: i.NetworkActionNames.USER_LOGOUT,
        properties: {
          logout_source: e
        }
      }
    }, null != r && {
      headers: {
        authorization: null != (t = a.getToken(r)) ? t : ""
      }
    }), {
      rejectWithError: false
    })).finally(() => {
      (null == r || r === h.default.getId()) && R(e, n)
    })
  },
  switchAccountToken(e) {
    let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
      n = h.default.getToken();
    return S.log("Switching accounts", {
      wasLoggedIn: null != n,
      tokenHasChanged: e !== n
    }), w({
      isSwitchingAccount: true,
      goHomeAfterSwitching: t
    }), this.loginToken(e, true).then(() => {
      let t = e === h.default.getToken();
      return S.log("Switched accounts finished", {
        isCorrectToken: t
      }), t
    })
  },
  verifySSOToken(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : y.BVt.DEFAULT_LOGGED_OUT;
    return o.Bo.get({
      url: y.Rsh.ME,
      oldFormErrors: true,
      rejectWithError: true
    }).catch(() => R(e, t))
  },
  async verify(e) {
    let t = await g.A.post({
      url: y.Rsh.VERIFY,
      body: {
        token: e
      },
      trackedActionData: {
        event: i.NetworkActionNames.USER_VERIFY
      },
      rejectWithError: false
    });
    return l.h.dispatch({
      type: "LOGIN_SUCCESS",
      token: t.body.token
    }), t.body.user_id
  },
  authorizePayment: e => g.A.post({
    url: y.Rsh.AUTHORIZE_PAYMENT,
    body: {
      token: e
    },
    trackedActionData: {
      event: i.NetworkActionNames.AUTHORIZE_PAYMENT
    },
    rejectWithError: true
  }),
  authorizeIPAddress: e => g.A.post({
    url: y.Rsh.AUTHORIZE_IP,
    body: {
      token: e
    },
    trackedActionData: {
      event: i.NetworkActionNames.AUTHORIZE_IP
    },
    rejectWithError: true
  }),
  verifyResend: () => g.A.post({
    url: y.Rsh.VERIFY_RESEND,
    oldFormErrors: true,
    trackedActionData: {
      event: i.NetworkActionNames.USER_VERIFY_RESEND
    },
    rejectWithError: false
  }),
  async resetPassword(e, t, n) {
    l.h.dispatch({
      type: "LOGIN"
    });
    let r = {
        token: e,
        password: t,
        source: n
      },
      a = s.w.get(y.Xlh),
      o = (0, b.oH)();
    null != o && null != a && (r.push_provider = o, r.push_token = a);
    let u = s.w.get(y.Ahp);
    null != b.vz && null != u && (r.push_voip_provider = b.vz, r.push_voip_token = u);
    try {
      let {
        body: {
          mfa: e,
          sms: t,
          webauthn: n,
          ticket: a,
          token: o,
          backup: s,
          totp: l
        }
      } = await g.A.post({
        url: y.Rsh.RESET_PASSWORD,
        body: r,
        oldFormErrors: true,
        trackedActionData: {
          event: i.NetworkActionNames.USER_RESET_PASSWORD
        },
        rejectWithError: false
      });
      return {
        result: e ? "MFA" : "SUCCESS",
        sms: t,
        webauthn: n,
        ticket: a,
        token: o,
        backup: s,
        totp: l
      }
    } catch (t) {
      let e = new c.Wl(t);
      throw l.h.dispatch({
        type: "LOGIN_FAILURE",
        error: e
      }), e
    }
  },
  async resetPasswordMFAv2(e) {
    let {
      method: t,
      code: n,
      ticket: r,
      password: a,
      token: o,
      source: s
    } = e;
    return l.h.dispatch({
      type: "LOGIN_MFA"
    }), (await g.A.post({
      url: y.Rsh.RESET_PASSWORD,
      body: {
        code: n,
        ticket: r,
        password: a,
        token: o,
        source: s,
        method: t
      },
      oldFormErrors: true,
      trackedActionData: {
        event: i.NetworkActionNames.USER_RESET_PASSWORD,
        properties: {
          mfa: true
        }
      },
      rejectWithError: true
    })).body.token
  },
  async forgotPassword(e) {
    l.h.dispatch({
      type: "FORGOT_PASSWORD_REQUEST"
    });
    try {
      let t = await g.A.post({
        url: y.Rsh.FORGOT_PASSWORD,
        body: {
          login: e
        },
        oldFormErrors: true,
        trackedActionData: {
          event: i.NetworkActionNames.FORGOT_PASSWORD
        },
        rejectWithError: false
      });
      return l.h.dispatch({
        type: "FORGOT_PASSWORD_SENT"
      }), t.body.method
    } catch (n) {
      let t = new c.Wl(n);
      if (t.code === y.t02.PHONE_VERIFICATION_REQUIRED) return l.h.dispatch({
        type: "LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION",
        credentials: {
          login: e
        }
      }), false;
      throw l.h.dispatch({
        type: "LOGIN_FAILURE",
        error: t
      }), t
    }
  },
  setFingerprint(e) {
    l.h.dispatch({
      type: "FINGERPRINT",
      fingerprint: e
    })
  },
  getExperiments(e) {
    l.h.dispatch({
      type: "EXPERIMENTS_FETCH",
      withGuildExperiments: e
    })
  },
  getLocationMetadata: () => null != C ? C : (clearTimeout(r), r = setTimeout(() => {
    l.h.dispatch({
      type: "SET_CONSENT_REQUIRED",
      consentRequired: true
    })
  }, T), C = o.Bo.get({
    url: y.Rsh.AUTH_LOCATION_METADATA,
    retries: 2,
    oldFormErrors: true,
    rejectWithError: true
  }).then(e => {
    var t, n, i, a, o;
    if (clearTimeout(r), null == m.A.getAuthenticationConsentRequired()) {
      let t = null == (a = null == e || null == (o = e.body) ? true : o.consent_required) || a;
      l.h.dispatch({
        type: "SET_CONSENT_REQUIRED",
        consentRequired: t
      })
    }
    if (l.h.dispatch({
        type: "SET_LOCATION_METADATA",
        countryCode: null != (t = null == e || null == (n = e.body) ? true : n.country_code) ? t : true
      }), C = null, (null == e || null == (i = e.body) ? true : i.promotional_email_opt_in) != null) {
      let t = e.body.promotional_email_opt_in;
      (0, u.tq)({
        required: t.required,
        checked: t.pre_checked,
        preChecked: t.pre_checked
      })
    }
  }, () => {
    clearTimeout(r), l.h.dispatch({
      type: "SET_CONSENT_REQUIRED",
      consentRequired: true
    }), C = null
  })),
  closeSuspendedUser() {
    l.h.dispatch({
      type: "CLOSE_SUSPENDED_USER"
    })
  }
}