/** Chunk was on 26215 **/
/** chunk id: 153069, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  default: () => W
}), require("./49124.js"), require("./35282.js"), require("./704826.js");
var n, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk533126 = require("./533126.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk257465 = require("./257465.jsx"),
  Chunk369585 = require("./369585.jsx"),
  Chunk103866 = require("./103866.jsx"),
  Chunk37148 = require("./37148.jsx"),
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
  Chunk589151 = require("./589151.js"),
  Chunk10198 = require("./10198.js");

function Z(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = r, t
}

function G(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = null != arguments[e] ? arguments[e] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
      return Object.getOwnPropertyDescriptor(r, t).enumerable
    }))), n.forEach(function(e) {
      Z(t, e, r[e])
    })
  }
  return t
}

function B(t, e) {
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
class z extends(n = Chunk647438.PureComponent) {
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
    if (r && !t.authenticated && (n(D.Z5c.APP), this.state.conditionalMediationAbortController.abort()), e.errors !== this.state.errors) {
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
      className: Chunk589151.mainLoginContainer,
      children: (0, Chunk951288.jsxs)(Chunk388905.gO, {
        children: [(0, Chunk951288.jsx)(Chunk952802.Z, {
          alpha2: exports.alpha2,
          countryCode: exports.code.split(" ")[0],
          className: Chunk10198.marginBottom20,
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
          className: l()(Chunk10198.marginTop4, Chunk589151.buttonsContainer),
          children: [(0, Chunk951288.jsx)(Chunk388905.zx, {
            onClick: this.handleForgotPassword,
            look: Chunk755721.zx.Looks.LINK,
            color: Chunk755721.zx.Colors.LINK,
            children: Chunk388032.intl.string(Chunk388032.t.wWIufn)
          }), (0, Chunk951288.jsx)(Chunk388905.zx, {
            onClick: () => (function(t) {
              let e = T.isPlatformEmbedded && L.ZP.supportsFeature(D.eRX.WEBAUTHN) ? L.ZP.webAuthnAuthenticate : t => {
                let e = (0, i.wz)(JSON.parse(t));
                return (0, i.U2)(e).then(t => JSON.stringify(t))
              };
              b.Z.authenticatePasswordless({
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
      children: [(0, Chunk951288.jsx)(Chunk37148.x, {
        title: Chunk388032.intl.string(Chunk388032.t.bPP34e),
        subtitle: Chunk388032.intl.string(Chunk388032.t.rvx0T0)
      }), (0, Chunk951288.jsx)(Chunk103866.f, {
        children: this.renderDefaultForm()
      }), (0, Chunk951288.jsx)(Chunk369585.G, {
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
      children: [(0, Chunk951288.jsx)(Chunk37148.x, {
        title: exports,
        subtitle: require
      }), (0, Chunk951288.jsx)(Chunk369585.G, {
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
    return (0, Chunk951288.jsx)(Chunk479495.Z, G({
      resetToken: module,
      onLoginSuccess: t => {
        this.setState({
          errors: {}
        }), b.Z.switchAccountToken(t)
      },
      width: "100%"
    }, this.props))
  }
  renderPhonePasswordRecovery() {
    let {
      phoneVerifyError: t
    } = this.state;
    return (0, Chunk951288.jsx)(Chunk103866.f, {
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
    super(t), Z(this, "loginRef", true), Z(this, "passwordRef", true), Z(this, "codeRef", true), Z(this, "handleAuthToken", async t => {
      this.setState({
        errors: {}
      }), await b.Z.loginToken(t, false)
    }), Z(this, "handleTabOrEnter", t => {
      if ("Tab" === t.key && !t.shiftKey && t.target === this.loginRef) {
        var e;
        null == (e = this.passwordRef) || e.focus(), t.stopPropagation(), t.preventDefault()
      }
      "Enter" === t.key && (t.target === this.loginRef || t.target === this.passwordRef) && (this.handleLogin(), t.stopPropagation(), t.preventDefault())
    }), Z(this, "setLoginRef", t => {
      this.loginRef = t
    }), Z(this, "setPasswordRef", t => {
      this.passwordRef = t
    }), Z(this, "setCodeRef", t => {
      this.codeRef = t
    }), Z(this, "getFullLogin", () => {
      let {
        loginPrefix: t,
        login: e
      } = this.state;
      return t + e
    }), Z(this, "renderError", t => {
      let {
        errors: e
      } = this.state;
      if (this.hasError(t)) {
        let r = e[t];
        return Array.isArray(r) ? r[0] : r
      }
      return null
    }), Z(this, "handleForgotPassword", async t => {
      var e;
      null == t || t.preventDefault(), null == (e = this.loginRef) || e.focus();
      let r = this.getFullLogin();
      this.setState({
        errors: {}
      });
      try {
        if (I.S.dispatch(D.CkL.WAVE_EMPHASIZE), !await b.Z.forgotPassword(r)) return;
        (0, m.h7j)(t => (0, s.jsx)(m.ConfirmModal, B(G({
          header: F.intl.string(F.t.f5Pi7O),
          confirmText: F.intl.string(F.t.BddRzc),
          confirmButtonColor: g.zx.Colors.BRAND
        }, t), {
          children: (0, s.jsx)(m.Text, {
            variant: "text-md/normal",
            children: F.intl.format(F.t["6u5hQ0"], {
              email: r
            })
          })
        })))
      } catch (e) {
        let t = (0, w.p)(e);
        this.setState({
          errors: t
        })
      }
    }), Z(this, "handleLogin", async t => {
      let {
        password: e,
        undelete: r
      } = this.state;
      null == t || t.preventDefault(), this.setState({
        errors: {}
      });
      try {
        await b.Z.login({
          login: this.getFullLogin(),
          password: e,
          undelete: r,
          isMultiAccount: true
        })
      } catch (e) {
        let t = (0, w.p)(e);
        this.setState({
          errors: t
        })
      }
    }), Z(this, "handlePasswordReset", async t => {
      this.setState({
        phoneVerifyError: null,
        errors: {}
      });
      try {
        let {
          token: e
        } = await O.Z.verifyPhone(this.getFullLogin(), t, false, true);
        this.setState({
          resetPasswordPhoneToken: e
        })
      } catch (t) {
        null != t.body && null != t.body.message && this.setState({
          phoneVerifyError: t.body.message
        })
      }
    }), Z(this, "handleTokenSubmitMFA", t => {
      let {
        mfaType: e,
        data: r,
        ticket: n
      } = t;
      return b.Z.loginMFAv2({
        code: r,
        ticket: n,
        mfaType: e,
        isMultiAccount: true
      })
    }), Z(this, "handleResendCode", () => {
      O.Z.resendCode(this.getFullLogin())
    }), Z(this, "handleReset", t => {
      null == t || t.preventDefault(), b.Z.loginReset(true), this.setState({
        password: "",
        loginPrefix: "",
        login: "",
        code: "",
        smsCode: "",
        undelete: false,
        resetPasswordPhoneToken: null,
        errors: {}
      })
    }), Z(this, "handleCancelAccountDeletion", () => {
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
Z(z, "defaultProps", {
  transitionTo: t => r.g.location.assign(t),
  replaceWith: t => r.g.location.replace(t)
});
let W = function(t) {
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
  let a = (0, d.cj)([v.Z, E.default, A.Z, k.Z], () => ({
    authenticated: E.default.isAuthenticated(),
    isPasswordlessActive: E.default.getIsPasswordlessActive(),
    loginStatus: E.default.getLoginStatus(),
    mfaTicket: E.default.getMFATicket(),
    mfaMethods: E.default.getMFAMethods(),
    defaultRoute: v.Z.defaultRoute,
    country: A.Z.getCountryCode(),
    theme: k.Z.theme
  }));
  (0, _.Z)({
    type: u.ImpressionTypes.MODAL,
    name: u.ImpressionNames.USER_LOGIN
  });
  let l = o.useCallback(() => {
    e(), n()
  }, [e, n]);
  return (0, s.jsx)(h.I, {
    size: "md",
    onClose: e,
    transitionState: r,
    children: (0, s.jsx)(z, B(G({}, i, a), {
      transitionTo: S.uL,
      replaceWith: S.dL,
      onBackPressed: l,
      authBoxClassName: N.card
    }))
  })
}