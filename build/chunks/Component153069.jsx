/** Chunk was on 88252 **/
/** chunk id: 153069, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  default: () => Z
}), require("./49124.js"), require("./35282.js"), require("./704826.js");
var n, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk533126 = require("./533126.js"),
  Chunk990547 = require("./990547.js"),
  Chunk265489 = require("./265489.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk885387 = require("./885387.jsx"),
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
  Chunk596263 = require("./596263.js"),
  Chunk478411 = require("./478411.js");

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
class M extends(n = Chunk473749.PureComponent) {
  componentDidMount() {
    window.addEventListener("keydown", this.handleTabOrEnter), (0, S.j)({
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
    return (0, s.jsx)("div", {
      className: I.mainLoginContainer,
      children: (0, s.jsxs)(m.gO, {
        children: [(0, s.jsx)(x.Z, {
          alpha2: e.alpha2,
          countryCode: e.code.split(" ")[0],
          className: F.marginBottom20,
          label: T.intl.string(T.t.tUjnxr),
          error: null != (t = this.renderError("login")) ? t : this.renderError("email"),
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
        }), (0, s.jsx)(m.II, {
          label: T.intl.string(T.t["CIGa+7"]),
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
        }), (0, s.jsxs)(h.ButtonGroup, {
          direction: "horizontal",
          className: F.marginTop4,
          children: [(0, s.jsx)(h.Avr, {
            text: T.intl.string(T.t.wWIufs),
            onClick: this.handleForgotPassword
          }), (0, s.jsx)(h.Avr, {
            text: T.intl.string(T.t["/kpMDt"]),
            onClick: () => (function(t) {
              let e = v.isPlatformEmbedded && R.ZP.supportsFeature(k.eRX.WEBAUTHN) ? R.ZP.webAuthnAuthenticate : t => {
                let e = (0, i.wz)(JSON.parse(t));
                return (0, i.U2)(e).then(t => JSON.stringify(t))
              };
              f.Z.authenticatePasswordless({
                authenticateFunc: e,
                conditionalMediationAbortController: t
              }).catch(() => {})
            })(this.state.conditionalMediationAbortController),
            disabled: r
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
    return (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(d.xBx, {
        title: T.intl.string(T.t.bPP34Q),
        subtitle: T.intl.string(T.t.rvx0T4)
      }), (0, s.jsx)(d.fef, {
        children: this.renderDefaultForm()
      }), (0, s.jsx)(d.Go$, {
        leading: (0, s.jsx)(h.Avr, {
          variant: "secondary",
          size: "md",
          onClick: e,
          text: T.intl.string(T.t["13/7kX"]),
          type: "button"
        }),
        actions: [{
          variant: "primary",
          text: T.intl.string(T.t["3PatSz"]),
          onClick: this.handleLogin,
          loading: t === k.u34.LOGGING_IN
        }]
      })]
    })
  }
  renderMFA() {
    let t = {
      ticket: this.props.mfaTicket,
      methods: this.props.mfaMethods
    };
    return (0, s.jsx)(y.C, {
      mfaFinish: this.handleTokenSubmitMFA,
      mfaChallenge: t,
      onEarlyClose: () => {
        this.handleReset()
      },
      width: "100%",
      headerAlignStart: true
    })
  }
  renderDisabledAccount() {
    let t = this.props.loginStatus === k.u34.ACCOUNT_DISABLED,
      e = t ? T.intl.string(T.t["j3rC+U"]) : T.intl.string(T.t.ZFWofo),
      r = t ? T.intl.string(T.t["6eNTWe"]) : T.intl.string(T.t["pCBti+"]);
    return (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(d.xBx, {
        title: e,
        subtitle: r
      }), (0, s.jsx)(d.Go$, {
        leading: (0, s.jsx)(h.Text, {
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
      resetPasswordPhoneToken: t
    } = this.state;
    return (0, s.jsx)(p.Z, D({
      resetToken: t,
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
    return (0, s.jsx)(d.fef, {
      children: (0, s.jsx)(C.Z, {
        title: T.intl.string(T.t["+xqy3d"]),
        subtitle: T.intl.format(T.t.ef4uZ7, {
          onResendClick: this.handleResendCode
        }),
        error: t,
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
    switch (t) {
      case k.u34.LOGGING_IN_MFA_SMS:
      case k.u34.MFA_SMS_STEP:
      case k.u34.LOGGING_IN_MFA:
      case k.u34.MFA_STEP:
        return this.renderMFA();
      case k.u34.ACCOUNT_SCHEDULED_FOR_DELETION:
      case k.u34.ACCOUNT_DISABLED:
        return this.renderDisabledAccount();
      case k.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION:
        return this.renderPhonePasswordRecovery();
      case k.u34.LOGGING_IN:
      case k.u34.NONE:
      default:
        return this.renderDefault()
    }
  }
  constructor(t) {
    super(t), L(this, "loginRef", true), L(this, "passwordRef", true), L(this, "codeRef", true), L(this, "handleAuthToken", async t => {
      this.setState({
        errors: {}
      }), await f.Z.loginToken(t, false)
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
        let t = await f.Z.forgotPassword(r);
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
        }) : (0, u.Z)({
          title: T.intl.string(T.t.f5Pi7A),
          subtitle: T.intl.format(T.t["6u5hQ9"], {
            email: r
          })
        })
      } catch (e) {
        let t = (0, b.p)(e);
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
        await f.Z.login({
          login: this.getFullLogin(),
          password: e,
          undelete: r,
          isMultiAccount: true
        })
      } catch (e) {
        let t = (0, b.p)(e);
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
        } = await w.Z.verifyPhone(this.getFullLogin(), t, false, true);
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
      return f.Z.loginMFAv2({
        code: r,
        ticket: n,
        mfaType: e,
        isMultiAccount: true
      })
    }), L(this, "handleResendCode", () => {
      w.Z.resendCode(this.getFullLogin())
    }), L(this, "handleReset", t => {
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
  let l = (0, c.cj)([j.Z, _.default, P.Z, A.Z], () => ({
    authenticated: _.default.isAuthenticated(),
    isPasswordlessActive: _.default.getIsPasswordlessActive(),
    loginStatus: _.default.getLoginStatus(),
    mfaTicket: _.default.getMFATicket(),
    mfaMethods: _.default.getMFAMethods(),
    defaultRoute: j.Z.defaultRoute,
    country: P.Z.getCountryCode(),
    theme: A.Z.theme
  }));
  (0, g.Z)({
    type: a.ImpressionTypes.MODAL,
    name: a.ImpressionNames.USER_LOGIN
  });
  let u = o.useCallback(() => {
    e(), n()
  }, [e, n]);
  return (0, s.jsx)(d.IX, {
    size: "md",
    onClose: e,
    transitionState: r,
    children: (0, s.jsx)(M, N(D({}, i, l), {
      transitionTo: O.uL,
      replaceWith: O.dL,
      onBackPressed: u,
      authBoxClassName: I.card
    }))
  })
}