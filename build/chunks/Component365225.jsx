/** Chunk was on 64171 **/
/** chunk id: 365225, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => U
}), require("./457529.js"), require("./747238.js"), require("./812715.js");
var s, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk430370 = require("./430370.js"),
  Chunk110259 = require("./110259.js"),
  Chunk511815 = require("./511815.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk139033 = require("./139033.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk830215 = require("./830215.js"),
  Chunk163050 = require("./163050.jsx"),
  Chunk139286 = require("./139286.js"),
  Chunk15552 = require("./15552.js"),
  Chunk854378 = require("./854378.jsx"),
  Chunk952116 = require("./952116.jsx"),
  Chunk720353 = require("./720353.jsx"),
  Chunk557722 = require("./557722.js"),
  Chunk148864 = require("./148864.js"),
  Chunk146571 = require("./146571.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk544028 = require("./544028.js"),
  Chunk933924 = require("./933924.js"),
  Chunk961350 = require("./961350.js"),
  Chunk650048 = require("./650048.js"),
  Chunk203982 = require("./203982.js"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk31669 = require("./31669.js"),
  Chunk473169 = require("./473169.js");

function N(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = r, e
}

function L(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      s = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), s.forEach(function(t) {
      N(e, t, r[t])
    })
  }
  return e
}

function M(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(e);
      r.push.apply(r, s)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}
class I extends(s = Chunk64700.PureComponent) {
  componentDidMount() {
    window.addEventListener("keydown", this.handleTabOrEnter), (0, E.a)({
      abortController: this.state.conditionalMediationAbortController,
      loginSource: "multi-account"
    })
  }
  componentDidUpdate(e, t) {
    let {
      authenticated: r,
      transitionTo: s
    } = this.props;
    if (r && !e.authenticated && (s(_.BVt.APP), this.state.conditionalMediationAbortController.abort()), t.errors !== this.state.errors) {
      var n, o, i;
      this.hasError("password") ? null == (n = this.passwordRef) || n.focus() : this.hasError("email") || this.hasError("login") ? null == (o = this.loginRef) || o.focus() : this.hasError("code") && (null == (i = this.codeRef) || i.focus())
    }
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleTabOrEnter), this.state.conditionalMediationAbortController.abort()
  }
  hasError(e) {
    return null != this.state.errors[e]
  }
  renderDefaultForm() {
    var e;
    let {
      country: t,
      isPasswordlessActive: r
    } = this.props, s = !this.hasError("email") && this.hasError("password");
    return (0, n.jsx)("div", {
      className: D.Eh,
      children: (0, n.jsxs)(w.eB, {
        children: [(0, n.jsx)(C.A, {
          alpha2: t.alpha2,
          countryCode: t.code.split(" ")[0],
          className: F.SX,
          label: T.intl.string(T.t.tUjnxr),
          error: null != (e = this.renderError("login")) ? e : this.renderError("email"),
          onChange: (e, t) => this.setState({
            login: e,
            loginPrefix: t
          }),
          setRef: this.setLoginRef,
          autoCapitalize: "none",
          autoComplete: "username webauthn",
          autoCorrect: "off",
          spellCheck: "false",
          value: this.state.login,
          autoFocus: !s,
          required: true
        }), (0, n.jsx)(w.pd, {
          label: T.intl.string(T.t["CIGa+7"]),
          error: this.renderError("password"),
          onChange: e => this.setState({
            password: e
          }),
          name: "password",
          type: "password",
          setRef: this.setPasswordRef,
          autoComplete: "current-password",
          spellCheck: "false",
          autoFocus: s,
          value: this.state.password,
          required: true
        }), (0, n.jsxs)(u.ButtonGroup, {
          direction: "horizontal",
          className: F.a5,
          children: [(0, n.jsx)(u.QWc, {
            text: T.intl.string(T.t.wWIufs),
            onClick: this.handleForgotPassword
          }), (0, n.jsx)(u.QWc, {
            text: T.intl.string(T.t["/kpMDt"]),
            onClick: () => {
              var e;
              let t;
              return e = this.state.conditionalMediationAbortController, t = k.isPlatformEmbedded && v.Ay.supportsFeature(_.BYE.WEBAUTHN) ? v.Ay.webAuthnAuthenticate : e => {
                let t = (0, i.d5)(JSON.parse(e));
                return (0, i.Jt)(t).then(e => JSON.stringify(e))
              }, void f.A.authenticatePasswordless({
                authenticateFunc: t,
                conditionalMediationAbortController: e
              }).catch(() => {})
            },
            disabled: r
          })]
        })]
      })
    })
  }
  renderDefault() {
    let {
      loginStatus: e,
      onBackPressed: t
    } = this.props;
    return (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(d.rQ0, {
        title: T.intl.string(T.t.bPP34Q),
        subtitle: T.intl.string(T.t.rvx0T4)
      }), (0, n.jsx)(d.cwr, {
        children: this.renderDefaultForm()
      }), (0, n.jsx)(d.H7u, {
        leading: (0, n.jsx)(u.QWc, {
          variant: "secondary",
          size: "md",
          onClick: t,
          text: T.intl.string(T.t["13/7kX"]),
          type: "button"
        }),
        actions: [{
          variant: "primary",
          text: T.intl.string(T.t["3PatSz"]),
          onClick: this.handleLogin,
          loading: e === _.aUe.LOGGING_IN
        }]
      })]
    })
  }
  renderMFA() {
    let e = {
      ticket: this.props.mfaTicket,
      methods: this.props.mfaMethods
    };
    return (0, n.jsx)(m.t, {
      mfaFinish: this.handleTokenSubmitMFA,
      mfaChallenge: e,
      onEarlyClose: () => {
        this.handleReset()
      },
      width: "100%",
      headerAlignStart: true
    })
  }
  renderDisabledAccount() {
    let e = this.props.loginStatus === _.aUe.ACCOUNT_DISABLED,
      t = e ? T.intl.string(T.t["j3rC+U"]) : T.intl.string(T.t.ZFWofo),
      r = e ? T.intl.string(T.t["6eNTWe"]) : T.intl.string(T.t["pCBti+"]);
    return (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(d.rQ0, {
        title: t,
        subtitle: r
      }), (0, n.jsx)(d.H7u, {
        leading: (0, n.jsx)(u.Text, {
          variant: "text-md/normal",
          color: "text-subtle",
          children: T.intl.format(T.t.js2rr5, {
            onClick: this.handleCancelAccountDeletion
          })
        }),
        actions: [{
          variant: "primary",
          text: T.intl.string(T.t.JhDw5o),
          onClick: this.handleReset
        }]
      })]
    })
  }
  renderResetPhonePassword() {
    let {
      resetPasswordPhoneToken: e
    } = this.state;
    return (0, n.jsx)(p.A, L({
      resetToken: e,
      onLoginSuccess: e => {
        this.setState({
          errors: {}
        }), f.A.switchAccountToken(e)
      },
      width: "100%"
    }, this.props))
  }
  renderPhonePasswordRecovery() {
    let {
      phoneVerifyError: e
    } = this.state;
    return (0, n.jsx)(d.cwr, {
      children: (0, n.jsx)(y.A, {
        title: T.intl.string(T.t["+xqy3d"]),
        subtitle: T.intl.format(T.t.ef4uZ7, {
          onResendClick: this.handleResendCode
        }),
        error: e,
        onSubmit: this.handlePasswordReset,
        onCancel: true
      })
    })
  }
  render() {
    let {
      loginStatus: e
    } = this.props;
    if (null != this.state.resetPasswordPhoneToken) return this.renderResetPhonePassword();
    switch (e) {
      case _.aUe.LOGGING_IN_MFA_SMS:
      case _.aUe.MFA_SMS_STEP:
      case _.aUe.LOGGING_IN_MFA:
      case _.aUe.MFA_STEP:
        return this.renderMFA();
      case _.aUe.ACCOUNT_SCHEDULED_FOR_DELETION:
      case _.aUe.ACCOUNT_DISABLED:
        return this.renderDisabledAccount();
      case _.aUe.PASSWORD_RECOVERY_PHONE_VERIFICATION:
        return this.renderPhonePasswordRecovery();
      case _.aUe.LOGGING_IN:
      case _.aUe.NONE:
      default:
        return this.renderDefault()
    }
  }
  constructor(e) {
    super(e), N(this, "loginRef", true), N(this, "passwordRef", true), N(this, "codeRef", true), N(this, "handleAuthToken", async e => {
      this.setState({
        errors: {}
      }), await f.A.loginToken(e, false)
    }), N(this, "handleTabOrEnter", e => {
      if ("Tab" === e.key && !e.shiftKey && e.target === this.loginRef) {
        var t;
        null == (t = this.passwordRef) || t.focus(), e.stopPropagation(), e.preventDefault()
      }
      "Enter" === e.key && (e.target === this.loginRef || e.target === this.passwordRef) && (this.handleLogin(), e.stopPropagation(), e.preventDefault())
    }), N(this, "setLoginRef", e => {
      this.loginRef = e
    }), N(this, "setPasswordRef", e => {
      this.passwordRef = e
    }), N(this, "setCodeRef", e => {
      this.codeRef = e
    }), N(this, "getFullLogin", () => {
      let {
        loginPrefix: e,
        login: t
      } = this.state;
      return e + t
    }), N(this, "renderError", e => {
      let {
        errors: t
      } = this.state;
      if (this.hasError(e)) {
        let r = t[e];
        return Array.isArray(r) ? r[0] : r
      }
      return null
    }), N(this, "handleForgotPassword", async e => {
      var t;
      null == e || e.preventDefault(), null == (t = this.loginRef) || t.focus();
      let r = this.getFullLogin();
      this.setState({
        errors: {}
      });
      try {
        R._.dispatch(_.jej.WAVE_EMPHASIZE);
        let e = await f.A.forgotPassword(r);
        if (false === e) return;
        e === l.D.ONE_TIME_LOGIN ? (0, u.qfG)(e => {
          let t = [{
            variant: "primary",
            text: T.intl.string(T.t.BddRzS),
            onClick: e.onClose,
            fullWidth: true
          }];
          return (0, n.jsx)(d.Modal, M(L({
            title: T.intl.string(T.t["6Ecyts"]),
            actions: t
          }, e), {
            children: (0, n.jsx)(u.Text, {
              variant: "text-md/normal",
              children: T.intl.string(T.t.iAcrqV)
            })
          }))
        }) : (0, h.A)({
          title: T.intl.string(T.t.f5Pi7A),
          subtitle: T.intl.format(T.t["6u5hQ9"], {
            email: r
          })
        })
      } catch (t) {
        let e = (0, b.p)(t);
        this.setState({
          errors: e
        })
      }
    }), N(this, "handleLogin", async e => {
      let {
        password: t,
        undelete: r
      } = this.state;
      null == e || e.preventDefault(), this.setState({
        errors: {}
      });
      try {
        await f.A.login({
          login: this.getFullLogin(),
          password: t,
          undelete: r,
          isMultiAccount: true
        })
      } catch (t) {
        let e = (0, b.p)(t);
        this.setState({
          errors: e
        })
      }
    }), N(this, "handlePasswordReset", async e => {
      this.setState({
        phoneVerifyError: null,
        errors: {}
      });
      try {
        let {
          token: t
        } = await A.A.verifyPhone(this.getFullLogin(), e, false, true);
        this.setState({
          resetPasswordPhoneToken: t
        })
      } catch (e) {
        null != e.body && null != e.body.message && this.setState({
          phoneVerifyError: e.body.message
        })
      }
    }), N(this, "handleTokenSubmitMFA", e => {
      let {
        mfaType: t,
        data: r,
        ticket: s
      } = e;
      return f.A.loginMFAv2({
        code: r,
        ticket: s,
        mfaType: t,
        isMultiAccount: true
      })
    }), N(this, "handleResendCode", () => {
      A.A.resendCode(this.getFullLogin())
    }), N(this, "handleReset", e => {
      null == e || e.preventDefault(), f.A.loginReset(true), this.setState({
        password: "",
        loginPrefix: "",
        login: "",
        code: "",
        smsCode: "",
        undelete: false,
        resetPasswordPhoneToken: null,
        errors: {}
      })
    }), N(this, "handleCancelAccountDeletion", () => {
      this.setState({
        undelete: true
      }, this.handleLogin)
    }), this.state = {
      loginPrefix: "",
      login: "",
      password: "",
      code: "",
      smsCode: "",
      phoneVerifyError: null,
      resetPasswordPhoneToken: null,
      undelete: false,
      errors: {},
      conditionalMediationAbortController: new AbortController
    }
  }
}
N(I, "defaultProps", {
  transitionTo: e => r.g.location.assign(e),
  replaceWith: e => r.g.location.replace(e)
});
let U = function(e) {
  let {
    onClose: t,
    transitionState: r,
    onBackPressed: s
  } = e, i = function(e, t) {
    if (null == e) return {};
    var r, s, n, o = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (n = 0, r = Reflect.ownKeys(e); n < r.length; n++) s = r[n], !(t.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(e, s) && (o[s] = e[s]);
      return o
    }
    if (o = function(e, t) {
        if (null == e) return {};
        var r, s, n = {},
          o = Object.getOwnPropertyNames(e);
        for (s = 0; s < o.length; s++) r = o[s], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
        return n
      }(e, t), Object.getOwnPropertySymbols)
      for (n = 0, r = Object.getOwnPropertySymbols(e); n < r.length; n++) s = r[n], !(t.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(e, s) && (o[s] = e[s]);
    return o
  }(e, ["onClose", "transitionState", "onBackPressed"]), l = (0, c.cf)([S.A, j.default, P.A, x.A], () => ({
    authenticated: j.default.isAuthenticated(),
    isPasswordlessActive: j.default.getIsPasswordlessActive(),
    loginStatus: j.default.getLoginStatus(),
    mfaTicket: j.default.getMFATicket(),
    mfaMethods: j.default.getMFAMethods(),
    defaultRoute: S.A.defaultRoute,
    country: P.A.getCountryCode(),
    theme: x.A.theme
  }));
  (0, g.A)({
    type: a.ImpressionTypes.MODAL,
    name: a.ImpressionNames.USER_LOGIN
  });
  let h = o.useCallback(() => {
    t(), s()
  }, [t, s]);
  return (0, n.jsx)(d.dWK, {
    size: "md",
    onClose: t,
    transitionState: r,
    children: (0, n.jsx)(I, M(L({}, i, l), {
      transitionTo: O.pX,
      replaceWith: O.bG,
      onBackPressed: h,
      authBoxClassName: D.Nr
    }))
  })
}