/** Chunk was on 76951 **/
/** chunk id: 153069, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => N
}), require("./35282.js"), require("./704826.js");
var n, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk314897 = require("./314897.js"),
  Chunk896797 = require("./896797.js"),
  Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk472645 = require("./472645.js"),
  Chunk20493 = require("./20493.js");

function T(e, t, r) {
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
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      T(e, t, r[t])
    })
  }
  return e
}

function D(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}
class F extends(n = Chunk73800.PureComponent) {
  componentDidMount() {
    window.addEventListener("keydown", this.handleTabOrEnter)
  }
  componentDidUpdate(e, t) {
    let {
      authenticated: r,
      transitionTo: n
    } = this.props;
    if (r && !e.authenticated && n(k.Z5c.APP), t.errors !== this.state.errors) {
      var s, o, i;
      this.hasError("password") ? null == (s = this.passwordRef) || s.focus() : this.hasError("email") || this.hasError("login") ? null == (o = this.loginRef) || o.focus() : this.hasError("code") && (null == (i = this.codeRef) || i.focus())
    }
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleTabOrEnter)
  }
  hasError(e) {
    return null != this.state.errors[e]
  }
  renderDefaultForm() {
    var e;
    let {
      country: t
    } = this.props, r = !this.hasError("email") && this.hasError("password");
    return (0, Chunk255367.jsx)("div", {
      className: Chunk472645.mainLoginContainer,
      children: (0, Chunk255367.jsxs)(Chunk388905.gO, {
        children: [(0, Chunk255367.jsx)(Chunk952802.Z, {
          alpha2: exports.alpha2,
          countryCode: exports.code.split(" ")[0],
          className: Chunk20493.marginBottom20,
          label: Chunk388032.intl.string(Chunk388032.t.tUjnxs),
          error: null != (e = this.renderError("login")) ? module : this.renderError("email"),
          onChange: (e, t) => this.setState({
            login: e,
            loginPrefix: t
          }),
          setRef: this.setLoginRef,
          autoCapitalize: "none",
          autoComplete: "off",
          autoCorrect: "off",
          spellCheck: "false",
          value: this.state.login,
          autoFocus: !require,
          required: true
        }), (0, Chunk255367.jsx)(Chunk388905.II, {
          label: Chunk388032.intl.string(Chunk388032.t["CIGa+/"]),
          error: this.renderError("password"),
          onChange: e => this.setState({
            password: e
          }),
          name: "password",
          type: "password",
          setRef: this.setPasswordRef,
          autoComplete: "off",
          spellCheck: "false",
          autoFocus: require,
          value: this.state.password,
          required: true
        }), (0, Chunk255367.jsx)(Chunk388905.zx, {
          onClick: this.handleForgotPassword,
          look: Chunk755721.zx.Looks.LINK,
          color: Chunk755721.zx.Colors.LINK,
          className: Chunk20493.marginTop4,
          children: Chunk388032.intl.string(Chunk388032.t.wWIufn)
        })]
      })
    })
  }
  renderDefault() {
    let {
      loginStatus: e,
      onBackPressed: t
    } = this.props;
    return (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
      children: [(0, Chunk255367.jsx)(Chunk37148.x, {
        title: Chunk388032.intl.string(Chunk388032.t.bPP34e),
        subtitle: Chunk388032.intl.string(Chunk388032.t.rvx0T0)
      }), (0, Chunk255367.jsx)(Chunk103866.f, {
        children: this.renderDefaultForm()
      }), (0, Chunk255367.jsx)(Chunk369585.G, {
        leading: (0, Chunk255367.jsx)(Chunk481060.Avr, {
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
    let e = {
      ticket: this.props.mfaTicket,
      methods: this.props.mfaMethods
    };
    return (0, Chunk255367.jsx)(Chunk124860.Cd, {
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
    let e = this.props.loginStatus === Chunk981631.u34.ACCOUNT_DISABLED,
      t = module ? Chunk388032.intl.string(Chunk388032.t["j3rC+f"]) : Chunk388032.intl.string(Chunk388032.t.ZFWofn),
      r = module ? Chunk388032.intl.string(Chunk388032.t["6eNTWV"]) : Chunk388032.intl.string(Chunk388032.t.pCBti4);
    return (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
      children: [(0, Chunk255367.jsx)(Chunk37148.x, {
        title: exports,
        subtitle: require
      }), (0, Chunk255367.jsx)(Chunk369585.G, {
        leading: (0, Chunk255367.jsx)(Chunk481060.Text, {
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
      resetPasswordPhoneToken: e
    } = this.state;
    return (0, Chunk255367.jsx)(Chunk479495.Z, L({
      resetToken: module,
      onLoginSuccess: e => {
        this.setState({
          errors: {}
        }), f.Z.switchAccountToken(e)
      },
      width: "100%"
    }, this.props))
  }
  renderPhonePasswordRecovery() {
    let {
      phoneVerifyError: e
    } = this.state;
    return (0, Chunk255367.jsx)(Chunk103866.f, {
      children: (0, Chunk255367.jsx)(Chunk379760.Z, {
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
      loginStatus: e
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
  constructor(e) {
    super(e), T(this, "loginRef", true), T(this, "passwordRef", true), T(this, "codeRef", true), T(this, "handleAuthToken", async e => {
      this.setState({
        errors: {}
      }), await f.Z.loginToken(e, false)
    }), T(this, "handleTabOrEnter", e => {
      if ("Tab" === e.key && !e.shiftKey && e.target === this.loginRef) {
        var t;
        null == (t = this.passwordRef) || t.focus(), e.stopPropagation(), e.preventDefault()
      }
      "Enter" === e.key && (e.target === this.loginRef || e.target === this.passwordRef) && (this.handleLogin(), e.stopPropagation(), e.preventDefault())
    }), T(this, "setLoginRef", e => {
      this.loginRef = e
    }), T(this, "setPasswordRef", e => {
      this.passwordRef = e
    }), T(this, "setCodeRef", e => {
      this.codeRef = e
    }), T(this, "getFullLogin", () => {
      let {
        loginPrefix: e,
        login: t
      } = this.state;
      return e + t
    }), T(this, "renderError", e => {
      let {
        errors: t
      } = this.state;
      if (this.hasError(e)) {
        let r = t[e];
        return Array.isArray(r) ? r[0] : r
      }
      return null
    }), T(this, "handleForgotPassword", async e => {
      var t;
      null == e || e.preventDefault(), null == (t = this.loginRef) || t.focus();
      let r = this.getFullLogin();
      this.setState({
        errors: {}
      });
      try {
        if (E.S.dispatch(k.CkL.WAVE_EMPHASIZE), !await f.Z.forgotPassword(r)) return;
        (0, p.h7j)(e => (0, s.jsx)(p.ConfirmModal, D(L({
          header: v.intl.string(v.t.f5Pi7O),
          confirmText: v.intl.string(v.t.BddRzc),
          confirmButtonColor: c.zx.Colors.BRAND
        }, e), {
          children: (0, s.jsx)(p.Text, {
            variant: "text-md/normal",
            children: v.intl.format(v.t["6u5hQ0"], {
              email: r
            })
          })
        })))
      } catch (t) {
        let e = (0, _.p)(t);
        this.setState({
          errors: e
        })
      }
    }), T(this, "handleLogin", async e => {
      let {
        password: t,
        undelete: r
      } = this.state;
      null == e || e.preventDefault(), this.setState({
        errors: {}
      });
      try {
        await f.Z.login({
          login: this.getFullLogin(),
          password: t,
          undelete: r,
          isMultiAccount: true
        })
      } catch (t) {
        let e = (0, _.p)(t);
        this.setState({
          errors: e
        })
      }
    }), T(this, "handlePasswordReset", async e => {
      this.setState({
        phoneVerifyError: null,
        errors: {}
      });
      try {
        let {
          token: t
        } = await w.Z.verifyPhone(this.getFullLogin(), e, false, true);
        this.setState({
          resetPasswordPhoneToken: t
        })
      } catch (e) {
        null != e.body && null != e.body.message && this.setState({
          phoneVerifyError: e.body.message
        })
      }
    }), T(this, "handleTokenSubmitMFA", e => {
      let {
        mfaType: t,
        data: r,
        ticket: n
      } = e;
      return f.Z.loginMFAv2({
        code: r,
        ticket: n,
        mfaType: t,
        isMultiAccount: true
      })
    }), T(this, "handleResendCode", () => {
      w.Z.resendCode(this.getFullLogin())
    }), T(this, "handleReset", e => {
      null == e || e.preventDefault(), f.Z.loginReset(true), this.setState({
        password: "",
        loginPrefix: "",
        login: "",
        code: "",
        smsCode: "",
        undelete: false,
        resetPasswordPhoneToken: null,
        errors: {}
      })
    }), T(this, "handleCancelAccountDeletion", () => {
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
      errors: {}
    }
  }
}
T(F, "defaultProps", {
  transitionTo: e => r.g.location.assign(e),
  replaceWith: e => r.g.location.replace(e)
});
let N = function(e) {
  var {
    onClose: t,
    transitionState: r,
    onBackPressed: n
  } = e, u = function(e, t) {
    if (null == e) return {};
    var r, n, s = function(e, t) {
      if (null == e) return {};
      var r, n, s = {},
        o = Object.keys(e);
      for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (s[r] = e[r]);
      return s
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (n = 0; n < o.length; n++) r = o[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r])
    }
    return s
  }(e, ["onClose", "transitionState", "onBackPressed"]);
  let h = (0, a.cj)([S.Z, R.default, P.Z, j.Z], () => ({
    authenticated: R.default.isAuthenticated(),
    loginStatus: R.default.getLoginStatus(),
    mfaTicket: R.default.getMFATicket(),
    mfaMethods: R.default.getMFAMethods(),
    defaultRoute: S.Z.defaultRoute,
    country: P.Z.getCountryCode(),
    theme: j.Z.theme
  }));
  (0, m.Z)({
    type: i.ImpressionTypes.MODAL,
    name: i.ImpressionNames.USER_LOGIN
  });
  let d = o.useCallback(() => {
    t(), n()
  }, [t, n]);
  return (0, s.jsx)(l.I, {
    size: "md",
    onClose: t,
    transitionState: r,
    children: (0, s.jsx)(F, D(L({}, u, h), {
      transitionTo: O.uL,
      replaceWith: O.dL,
      onBackPressed: d,
      authBoxClassName: A.card
    }))
  })
}