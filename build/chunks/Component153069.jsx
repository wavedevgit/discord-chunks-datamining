/** Chunk was on 24374 **/
/** chunk id: 153069, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  default: () => Z
}), require("./49124.js"), require("./35282.js"), require("./704826.js");
var n, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk533126 = require("./533126.js"),
  Chunk990547 = require("./990547.js"),
  Chunk265489 = require("./265489.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk893776 = require("./893776.js"),
  Chunk479495 = require("./479495.jsx"),
  Chunk213609 = require("./213609.js"),
  Chunk254942 = require("./254942.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk379760 = require("./379760.jsx"),
  Chunk124860 = require("./124860.jsx"),
  Chunk144114 = require("./144114.js"),
  Chunk541692 = require("./541692.js"),
  Chunk952802 = require("./952802.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk210887 = require("./210887.js"),
  Chunk901375 = require("./901375.js"),
  Chunk314897 = require("./314897.js"),
  Chunk896797 = require("./896797.js"),
  Chunk585483 = require("./585483.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk407791 = require("./407791.js"),
  Chunk197571 = require("./197571.js");

function L(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = r, t
}

function D(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = null != arguments[e] ? arguments[e] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
      return Object.getOwnPropertyDescriptor(r, t).enumerable
    }))), n.forEach(function(e) {
      L(t, e, r[e])
    })
  }
  return t
}

function N(t, e) {
  return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : (function(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      r.push.apply(r, n)
    }
    return r
  })(Object(e)).forEach(function(r) {
    Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r))
  }), t
}
class M extends(n = Chunk647438.PureComponent) {
  componentDidMount() {
    window.addEventListener("keydown", this.handleTabOrEnter), (0, Chunk901375.j)({
      abortController: this.state.conditionalMediationAbortController,
      loginSource: "multi-account"
    })
  }
  componentDidUpdate(t, e) {
    let {
      authenticated: r,
      transitionTo: n
    } = this.props;
    if (r && !t.authenticated && (n(k.Z5c.APP), this.state.conditionalMediationAbortController.abort()), e.errors !== this.state.errors) {
      var s, o, i;
      this.hasError("password") ? null == (s = this.passwordRef) || s.focus() : this.hasError("email") || this.hasError("login") ? null == (o = this.loginRef) || o.focus() : this.hasError("code") && (null == (i = this.codeRef) || i.focus())
    }
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleTabOrEnter), this.state.conditionalMediationAbortController.abort()
  }
  hasError(t) {
    return null != this.state.errors[t]
  }
  renderDefaultForm() {
    var t;
    let {
      country: e,
      isPasswordlessActive: r
    } = this.props, n = !this.hasError("email") && this.hasError("password");
    return (0, Chunk951288.jsx)("div", {
      className: Chunk407791.mainLoginContainer,
      children: (0, Chunk951288.jsxs)(Chunk388905.gO, {
        children: [(0, Chunk951288.jsx)(Chunk952802.Z, {
          alpha2: exports.alpha2,
          countryCode: exports.code.split(" ")[0],
          className: Chunk197571.marginBottom20,
          label: Chunk388032.intl.string(Chunk388032.t.tUjnxr),
          error: null != (t = this.renderError("login")) ? module : this.renderError("email"),
          onChange: (t, e) => this.setState({
            login: t,
            loginPrefix: e
          }),
          setRef: this.setLoginRef,
          autoCapitalize: "none",
          autoComplete: "username webauthn",
          autoCorrect: "off",
          spellCheck: "false",
          value: this.state.login,
          autoFocus: !n,
          required: true
        }), (0, Chunk951288.jsx)(Chunk388905.II, {
          label: Chunk388032.intl.string(Chunk388032.t["CIGa+7"]),
          error: this.renderError("password"),
          onChange: t => this.setState({
            password: t
          }),
          name: "password",
          type: "password",
          setRef: this.setPasswordRef,
          autoComplete: "current-password",
          spellCheck: "false",
          autoFocus: n,
          value: this.state.password,
          required: true
        }), (0, Chunk951288.jsxs)(Chunk481060.ButtonGroup, {
          direction: "horizontal",
          className: Chunk197571.marginTop4,
          children: [(0, Chunk951288.jsx)(Chunk481060.Avr, {
            text: Chunk388032.intl.string(Chunk388032.t.wWIufs),
            onClick: this.handleForgotPassword
          }), (0, Chunk951288.jsx)(Chunk481060.Avr, {
            text: Chunk388032.intl.string(Chunk388032.t["/kpMDt"]),
            onClick: () => (function(t) {
              let e = v.isPlatformEmbedded && R.ZP.supportsFeature(k.eRX.WEBAUTHN) ? R.ZP.webAuthnAuthenticate : t => {
                let e = (0, i.wz)(JSON.parse(t));
                return (0, i.U2)(e).then(t => JSON.stringify(t))
              };
              p.Z.authenticatePasswordless({
                authenticateFunc: e,
                conditionalMediationAbortController: t
              }).catch(() => {})
            })(this.state.conditionalMediationAbortController),
            disabled: require
          })]
        })]
      })
    })
  }
  renderDefault() {
    let {
      loginStatus: t,
      onBackPressed: e
    } = this.props;
    return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk793030.xBx, {
        title: Chunk388032.intl.string(Chunk388032.t.bPP34Q),
        subtitle: Chunk388032.intl.string(Chunk388032.t.rvx0T4)
      }), (0, Chunk951288.jsx)(Chunk793030.fef, {
        children: this.renderDefaultForm()
      }), (0, Chunk951288.jsx)(Chunk793030.Go$, {
        leading: (0, Chunk951288.jsx)(Chunk481060.Avr, {
          variant: "secondary",
          size: "md",
          onClick: exports,
          text: Chunk388032.intl.string(Chunk388032.t["13/7kX"]),
          type: "button"
        }),
        actions: [{
          variant: "primary",
          text: Chunk388032.intl.string(Chunk388032.t["3PatSz"]),
          onClick: this.handleLogin,
          loading: module === Chunk981631.u34.LOGGING_IN
        }]
      })]
    })
  }
  renderMFA() {
    let t = {
      ticket: this.props.mfaTicket,
      methods: this.props.mfaMethods
    };
    return (0, Chunk951288.jsx)(Chunk124860.Cd, {
      mfaFinish: this.handleTokenSubmitMFA,
      mfaChallenge: module,
      onEarlyClose: () => {
        this.handleReset()
      },
      width: "100%",
      headerAlignStart: true
    })
  }
  renderDisabledAccount() {
    let t = this.props.loginStatus === Chunk981631.u34.ACCOUNT_DISABLED,
      e = module ? Chunk388032.intl.string(Chunk388032.t["j3rC+U"]) : Chunk388032.intl.string(Chunk388032.t.ZFWofo),
      r = module ? Chunk388032.intl.string(Chunk388032.t["6eNTWe"]) : Chunk388032.intl.string(Chunk388032.t["pCBti+"]);
    return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk793030.xBx, {
        title: exports,
        subtitle: require
      }), (0, Chunk951288.jsx)(Chunk793030.Go$, {
        leading: (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          color: "text-secondary",
          children: Chunk388032.intl.format(Chunk388032.t.js2rr5, {
            onClick: this.handleCancelAccountDeletion
          })
        }),
        actions: [{
          variant: "primary",
          text: Chunk388032.intl.string(Chunk388032.t.JhDw5o),
          onClick: this.handleReset
        }]
      })]
    })
  }
  renderResetPhonePassword() {
    let {
      resetPasswordPhoneToken: t
    } = this.state;
    return (0, Chunk951288.jsx)(Chunk479495.Z, D({
      resetToken: module,
      onLoginSuccess: t => {
        this.setState({
          errors: {}
        }), p.Z.switchAccountToken(t)
      },
      width: "100%"
    }, this.props))
  }
  renderPhonePasswordRecovery() {
    let {
      phoneVerifyError: t
    } = this.state;
    return (0, Chunk951288.jsx)(Chunk793030.fef, {
      children: (0, Chunk951288.jsx)(Chunk379760.Z, {
        title: Chunk388032.intl.string(Chunk388032.t["+xqy3d"]),
        subtitle: Chunk388032.intl.format(Chunk388032.t.ef4uZ7, {
          onResendClick: this.handleResendCode
        }),
        error: module,
        onSubmit: this.handlePasswordReset,
        onCancel: true
      })
    })
  }
  render() {
    let {
      loginStatus: t
    } = this.props;
    if (null != this.state.resetPasswordPhoneToken) return this.renderResetPhonePassword();
    switch (module) {
      case Chunk981631.u34.LOGGING_IN_MFA_SMS:
      case Chunk981631.u34.MFA_SMS_STEP:
      case Chunk981631.u34.LOGGING_IN_MFA:
      case Chunk981631.u34.MFA_STEP:
        return this.renderMFA();
      case Chunk981631.u34.ACCOUNT_SCHEDULED_FOR_DELETION:
      case Chunk981631.u34.ACCOUNT_DISABLED:
        return this.renderDisabledAccount();
      case Chunk981631.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION:
        return this.renderPhonePasswordRecovery();
      case Chunk981631.u34.LOGGING_IN:
      case Chunk981631.u34.NONE:
      default:
        return this.renderDefault()
    }
  }
  constructor(t) {
    super(t), L(this, "loginRef", true), L(this, "passwordRef", true), L(this, "codeRef", true), L(this, "handleAuthToken", async t => {
      this.setState({
        errors: {}
      }), await p.Z.loginToken(t, false)
    }), L(this, "handleTabOrEnter", t => {
      if ("Tab" === t.key && !t.shiftKey && t.target === this.loginRef) {
        var e;
        null == (e = this.passwordRef) || e.focus(), t.stopPropagation(), t.preventDefault()
      }
      "Enter" === t.key && (t.target === this.loginRef || t.target === this.passwordRef) && (this.handleLogin(), t.stopPropagation(), t.preventDefault())
    }), L(this, "setLoginRef", t => {
      this.loginRef = t
    }), L(this, "setPasswordRef", t => {
      this.passwordRef = t
    }), L(this, "setCodeRef", t => {
      this.codeRef = t
    }), L(this, "getFullLogin", () => {
      let {
        loginPrefix: t,
        login: e
      } = this.state;
      return t + e
    }), L(this, "renderError", t => {
      let {
        errors: e
      } = this.state;
      if (this.hasError(t)) {
        let r = e[t];
        return Array.isArray(r) ? r[0] : r
      }
      return null
    }), L(this, "handleForgotPassword", async t => {
      var e;
      null == t || t.preventDefault(), null == (e = this.loginRef) || e.focus();
      let r = this.getFullLogin();
      this.setState({
        errors: {}
      });
      try {
        E.S.dispatch(k.CkL.WAVE_EMPHASIZE);
        let t = await p.Z.forgotPassword(r);
        if (false === t) return;
        t === l.B.ONE_TIME_LOGIN ? (0, h.h7j)(t => {
          let e = [{
            variant: "primary",
            text: T.intl.string(T.t.BddRzS),
            onClick: t.onClose,
            fullWidth: true
          }];
          return (0, s.jsx)(d.Modal, N(D({
            title: T.intl.string(T.t["6Ecyts"]),
            actions: e
          }, t), {
            children: (0, s.jsx)(h.Text, {
              variant: "text-md/normal",
              children: T.intl.string(T.t.iAcrqV)
            })
          }))
        }) : (0, h.h7j)(t => (0, s.jsx)(h.ConfirmModal, N(D({
          header: T.intl.string(T.t.f5Pi7A),
          confirmText: T.intl.string(T.t.BddRzS),
          confirmButtonColor: c.zx.Colors.BRAND
        }, t), {
          children: (0, s.jsx)(h.Text, {
            variant: "text-md/normal",
            children: T.intl.format(T.t["6u5hQ9"], {
              email: r
            })
          })
        })))
      } catch (e) {
        let t = (0, m.p)(e);
        this.setState({
          errors: t
        })
      }
    }), L(this, "handleLogin", async t => {
      let {
        password: e,
        undelete: r
      } = this.state;
      null == t || t.preventDefault(), this.setState({
        errors: {}
      });
      try {
        await p.Z.login({
          login: this.getFullLogin(),
          password: e,
          undelete: r,
          isMultiAccount: true
        })
      } catch (e) {
        let t = (0, m.p)(e);
        this.setState({
          errors: t
        })
      }
    }), L(this, "handlePasswordReset", async t => {
      this.setState({
        phoneVerifyError: null,
        errors: {}
      });
      try {
        let {
          token: e
        } = await y.Z.verifyPhone(this.getFullLogin(), t, false, true);
        this.setState({
          resetPasswordPhoneToken: e
        })
      } catch (t) {
        null != t.body && null != t.body.message && this.setState({
          phoneVerifyError: t.body.message
        })
      }
    }), L(this, "handleTokenSubmitMFA", t => {
      let {
        mfaType: e,
        data: r,
        ticket: n
      } = t;
      return p.Z.loginMFAv2({
        code: r,
        ticket: n,
        mfaType: e,
        isMultiAccount: true
      })
    }), L(this, "handleResendCode", () => {
      y.Z.resendCode(this.getFullLogin())
    }), L(this, "handleReset", t => {
      null == t || t.preventDefault(), p.Z.loginReset(true), this.setState({
        password: "",
        loginPrefix: "",
        login: "",
        code: "",
        smsCode: "",
        undelete: false,
        resetPasswordPhoneToken: null,
        errors: {}
      })
    }), L(this, "handleCancelAccountDeletion", () => {
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
L(M, "defaultProps", {
  transitionTo: t => r.g.location.assign(t),
  replaceWith: t => r.g.location.replace(t)
});
let Z = function(t) {
  var {
    onClose: e,
    transitionState: r,
    onBackPressed: n
  } = t, i = function(t, e) {
    if (null == t) return {};
    var r, n, s = function(t, e) {
      if (null == t) return {};
      var r, n, s = {},
        o = Object.keys(t);
      for (n = 0; n < o.length; n++) r = o[n], e.indexOf(r) >= 0 || (s[r] = t[r]);
      return s
    }(t, e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(t);
      for (n = 0; n < o.length; n++) r = o[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (s[r] = t[r])
    }
    return s
  }(t, ["onClose", "transitionState", "onBackPressed"]);
  let l = (0, u.cj)([S.Z, j.default, w.Z, O.Z], () => ({
    authenticated: j.default.isAuthenticated(),
    isPasswordlessActive: j.default.getIsPasswordlessActive(),
    loginStatus: j.default.getLoginStatus(),
    mfaTicket: j.default.getMFATicket(),
    mfaMethods: j.default.getMFAMethods(),
    defaultRoute: S.Z.defaultRoute,
    country: w.Z.getCountryCode(),
    theme: O.Z.theme
  }));
  (0, g.Z)({
    type: a.ImpressionTypes.MODAL,
    name: a.ImpressionNames.USER_LOGIN
  });
  let c = o.useCallback(() => {
    e(), n()
  }, [e, n]);
  return (0, s.jsx)(d.IX, {
    size: "md",
    onClose: e,
    transitionState: r,
    children: (0, s.jsx)(M, N(D({}, i, l), {
      transitionTo: x.uL,
      replaceWith: x.dL,
      onBackPressed: c,
      authBoxClassName: I.card
    }))
  })
}