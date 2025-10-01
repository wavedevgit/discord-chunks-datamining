/** Chunk was on 24374 **/
/** chunk id: 153069, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  default: () => G
}), require("./49124.js"), require("./35282.js"), require("./704826.js");
var n, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk533126 = require("./533126.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk990547 = require("./990547.js"),
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

function N(t, e, r) {
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
      N(t, e, r[e])
    })
  }
  return t
}

function M(t, e) {
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
class Z extends(n = Chunk647438.PureComponent) {
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
    if (r && !t.authenticated && (n(I.Z5c.APP), this.state.conditionalMediationAbortController.abort()), e.errors !== this.state.errors) {
      var o, s, i;
      this.hasError("password") ? null == (o = this.passwordRef) || o.focus() : this.hasError("email") || this.hasError("login") ? null == (s = this.loginRef) || s.focus() : this.hasError("code") && (null == (i = this.codeRef) || i.focus())
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
          label: Chunk388032.intl.string(Chunk388032.t.tUjnxs),
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
          label: Chunk388032.intl.string(Chunk388032.t["CIGa+/"]),
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
        }), (0, Chunk951288.jsxs)("div", {
          className: l()(Chunk197571.marginTop4, Chunk407791.buttonsContainer),
          children: [(0, Chunk951288.jsx)(Chunk388905.zx, {
            onClick: this.handleForgotPassword,
            look: Chunk755721.zx.Looks.LINK,
            color: Chunk755721.zx.Colors.LINK,
            children: Chunk388032.intl.string(Chunk388032.t.wWIufn)
          }), (0, Chunk951288.jsx)(Chunk388905.zx, {
            onClick: () => (function(t) {
              let e = E.isPlatformEmbedded && v.ZP.supportsFeature(I.eRX.WEBAUTHN) ? v.ZP.webAuthnAuthenticate : t => {
                let e = (0, i.wz)(JSON.parse(t));
                return (0, i.U2)(e).then(t => JSON.stringify(t))
              };
              f.Z.authenticatePasswordless({
                authenticateFunc: e,
                conditionalMediationAbortController: t
              }).catch(() => {})
            })(this.state.conditionalMediationAbortController),
            look: Chunk755721.zx.Looks.LINK,
            color: Chunk755721.zx.Colors.LINK,
            disabled: require,
            children: Chunk388032.intl.string(Chunk388032.t["/kpMDg"])
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
        title: Chunk388032.intl.string(Chunk388032.t.bPP34e),
        subtitle: Chunk388032.intl.string(Chunk388032.t.rvx0T0)
      }), (0, Chunk951288.jsx)(Chunk793030.fef, {
        children: this.renderDefaultForm()
      }), (0, Chunk951288.jsx)(Chunk793030.Go$, {
        leading: (0, Chunk951288.jsx)(Chunk481060.Avr, {
          variant: "secondary",
          size: "md",
          onClick: exports,
          text: Chunk388032.intl.string(Chunk388032.t["13/7kZ"]),
          type: "button"
        }),
        actions: [{
          variant: "primary",
          text: Chunk388032.intl.string(Chunk388032.t["3PatS0"]),
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
      e = module ? Chunk388032.intl.string(Chunk388032.t["j3rC+f"]) : Chunk388032.intl.string(Chunk388032.t.ZFWofn),
      r = module ? Chunk388032.intl.string(Chunk388032.t["6eNTWV"]) : Chunk388032.intl.string(Chunk388032.t.pCBti4);
    return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk793030.xBx, {
        title: exports,
        subtitle: require
      }), (0, Chunk951288.jsx)(Chunk793030.Go$, {
        leading: (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          color: "text-secondary",
          children: Chunk388032.intl.format(Chunk388032.t.js2rr6, {
            onClick: this.handleCancelAccountDeletion
          })
        }),
        actions: [{
          variant: "primary",
          text: Chunk388032.intl.string(Chunk388032.t.JhDw5u),
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
        }), f.Z.switchAccountToken(t)
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
        subtitle: Chunk388032.intl.format(Chunk388032.t.ef4uZ2, {
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
    super(t), N(this, "loginRef", true), N(this, "passwordRef", true), N(this, "codeRef", true), N(this, "handleAuthToken", async t => {
      this.setState({
        errors: {}
      }), await f.Z.loginToken(t, false)
    }), N(this, "handleTabOrEnter", t => {
      if ("Tab" === t.key && !t.shiftKey && t.target === this.loginRef) {
        var e;
        null == (e = this.passwordRef) || e.focus(), t.stopPropagation(), t.preventDefault()
      }
      "Enter" === t.key && (t.target === this.loginRef || t.target === this.passwordRef) && (this.handleLogin(), t.stopPropagation(), t.preventDefault())
    }), N(this, "setLoginRef", t => {
      this.loginRef = t
    }), N(this, "setPasswordRef", t => {
      this.passwordRef = t
    }), N(this, "setCodeRef", t => {
      this.codeRef = t
    }), N(this, "getFullLogin", () => {
      let {
        loginPrefix: t,
        login: e
      } = this.state;
      return t + e
    }), N(this, "renderError", t => {
      let {
        errors: e
      } = this.state;
      if (this.hasError(t)) {
        let r = e[t];
        return Array.isArray(r) ? r[0] : r
      }
      return null
    }), N(this, "handleForgotPassword", async t => {
      var e;
      null == t || t.preventDefault(), null == (e = this.loginRef) || e.focus();
      let r = this.getFullLogin();
      this.setState({
        errors: {}
      });
      try {
        if (R.S.dispatch(I.CkL.WAVE_EMPHASIZE), !await f.Z.forgotPassword(r)) return;
        (0, p.h7j)(t => (0, o.jsx)(p.ConfirmModal, M(D({
          header: T.intl.string(T.t.f5Pi7O),
          confirmText: T.intl.string(T.t.BddRzc),
          confirmButtonColor: h.zx.Colors.BRAND
        }, t), {
          children: (0, o.jsx)(p.Text, {
            variant: "text-md/normal",
            children: T.intl.format(T.t["6u5hQ0"], {
              email: r
            })
          })
        })))
      } catch (e) {
        let t = (0, _.p)(e);
        this.setState({
          errors: t
        })
      }
    }), N(this, "handleLogin", async t => {
      let {
        password: e,
        undelete: r
      } = this.state;
      null == t || t.preventDefault(), this.setState({
        errors: {}
      });
      try {
        await f.Z.login({
          login: this.getFullLogin(),
          password: e,
          undelete: r,
          isMultiAccount: true
        })
      } catch (e) {
        let t = (0, _.p)(e);
        this.setState({
          errors: t
        })
      }
    }), N(this, "handlePasswordReset", async t => {
      this.setState({
        phoneVerifyError: null,
        errors: {}
      });
      try {
        let {
          token: e
        } = await w.Z.verifyPhone(this.getFullLogin(), t, false, true);
        this.setState({
          resetPasswordPhoneToken: e
        })
      } catch (t) {
        null != t.body && null != t.body.message && this.setState({
          phoneVerifyError: t.body.message
        })
      }
    }), N(this, "handleTokenSubmitMFA", t => {
      let {
        mfaType: e,
        data: r,
        ticket: n
      } = t;
      return f.Z.loginMFAv2({
        code: r,
        ticket: n,
        mfaType: e,
        isMultiAccount: true
      })
    }), N(this, "handleResendCode", () => {
      w.Z.resendCode(this.getFullLogin())
    }), N(this, "handleReset", t => {
      null == t || t.preventDefault(), f.Z.loginReset(true), this.setState({
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
N(Z, "defaultProps", {
  transitionTo: t => r.g.location.assign(t),
  replaceWith: t => r.g.location.replace(t)
});
let G = function(t) {
  var {
    onClose: e,
    transitionState: r,
    onBackPressed: n
  } = t, i = function(t, e) {
    if (null == t) return {};
    var r, n, o = function(t, e) {
      if (null == t) return {};
      var r, n, o = {},
        s = Object.keys(t);
      for (n = 0; n < s.length; n++) r = s[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
      return o
    }(t, e);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(t);
      for (n = 0; n < s.length; n++) r = s[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
    }
    return o
  }(t, ["onClose", "transitionState", "onBackPressed"]);
  let a = (0, c.cj)([k.Z, j.default, P.Z, A.Z], () => ({
    authenticated: j.default.isAuthenticated(),
    isPasswordlessActive: j.default.getIsPasswordlessActive(),
    loginStatus: j.default.getLoginStatus(),
    mfaTicket: j.default.getMFATicket(),
    mfaMethods: j.default.getMFAMethods(),
    defaultRoute: k.Z.defaultRoute,
    country: P.Z.getCountryCode(),
    theme: A.Z.theme
  }));
  (0, m.Z)({
    type: u.ImpressionTypes.MODAL,
    name: u.ImpressionNames.USER_LOGIN
  });
  let l = s.useCallback(() => {
    e(), n()
  }, [e, n]);
  return (0, o.jsx)(d.IX, {
    size: "md",
    onClose: e,
    transitionState: r,
    children: (0, o.jsx)(Z, M(D({}, i, a), {
      transitionTo: O.uL,
      replaceWith: O.dL,
      onBackPressed: l,
      authBoxClassName: L.card
    }))
  })
}