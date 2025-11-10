/** Chunk was on 27978 **/
/** chunk id: 781428, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => et,
  q: () => $
}), require("./35282.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk593473 = require("./593473.js"),
  Chunk873546 = require("./873546.js"),
  Chunk265489 = require("./265489.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk893776 = require("./893776.js"),
  Chunk899742 = require("./899742.js"),
  Chunk743142 = require("./743142.js"),
  Chunk254942 = require("./254942.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk379760 = require("./379760.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk100159 = require("./100159.js"),
  Chunk473855 = require("./473855.jsx"),
  Chunk124860 = require("./124860.jsx"),
  Chunk86779 = require("./86779.jsx"),
  Chunk726745 = require("./726745.js"),
  Chunk913583 = require("./913583.jsx"),
  Chunk144114 = require("./144114.js"),
  Chunk541692 = require("./541692.js"),
  Chunk952802 = require("./952802.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk648358 = require("./648358.js"),
  Chunk108427 = require("./108427.js"),
  Chunk901375 = require("./901375.js"),
  Chunk314897 = require("./314897.js"),
  Chunk117240 = require("./117240.js"),
  Chunk896797 = require("./896797.js"),
  Chunk626135 = require("./626135.js"),
  Chunk585483 = require("./585483.js"),
  Chunk358085 = require("./358085.js"),
  Chunk481153 = require("./481153.jsx"),
  Chunk588705 = require("./588705.jsx"),
  Chunk494526 = require("./494526.jsx"),
  Chunk163671 = require("./163671.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk260539 = require("./260539.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk132825 = require("./132825.js"),
  Chunk197571 = require("./197571.js");

function J(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function Q(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      J(e, t, n[t])
    })
  }
  return e
}

function X(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function $() {
  return (0, Chunk951288.jsx)(Chunk388905.ZP, {
    children: (0, Chunk951288.jsx)(Chunk481060.$jN, {})
  })
}
class ee extends(r = Chunk647438.PureComponent) {
  static getDerivedStateFromProps(e) {
    let {
      handoffAvailable: t,
      authenticated: n
    } = e;
    return t || n ? null : {
      checkingHandoff: false
    }
  }
  componentDidMount() {
    let {
      handoffAvailable: e,
      authenticated: t,
      giftCodeSKU: n,
      invite: r,
      location: i
    } = this.props;
    module && !exports ? (0, Chunk899742.is)() : exports && this.loginOrSSO(exports, Chunk951288, true), Chunk626135.default.track(Chunk981631.rMx.LOGIN_VIEWED, X(Q({
      location: null != r ? "Invite Login Page" : "Non-Invite Login Page",
      login_source: this.loginSource,
      authenticated: exports
    }, null != require ? (0, Chunk100159.Z)(require, false, false) : {}), {
      source: (0, Chunk703656.At)()
    }), {
      flush: true
    }), exports || (0, Chunk901375.j)({
      abortController: this.state.conditionalMediationAbortController,
      loginSource: this.loginSource,
      giftCodeSKUId: this.giftCodeSKUId
    }), Chunk893776.Z.getLocationMetadata(), (0, Chunk108427.e)("login")
  }
  componentDidUpdate(e, t) {
    let {
      authenticated: n,
      location: r,
      handoffAvailable: i
    } = this.props, {
      checkingHandoff: s,
      redirecting: l
    } = this.state;
    if (!n || e.authenticated || s && (i || l) || (this.state.conditionalMediationAbortController.abort("Transitioning to authenticated state"), this.loginOrSSO(n, r)), t.errors !== this.state.errors) {
      var a, o, c;
      this.hasError("password") ? null == (a = this.passwordRef) || a.focus() : this.hasError("email") || this.hasError("login") ? null == (o = this.loginRef) || o.focus() : this.hasError("code") && (null == (c = this.codeRef) || c.focus())
    }
  }
  get loginSource() {
    let {
      giftCode: e,
      guildTemplate: t,
      invite: n,
      loginSource: r,
      redirectTo: i
    } = this.props;
    if (null != r) return r;
    if (null != module) return "gift";
    if (null != exports) return "guild_template";
    if (null != require) {
      if (null != require.guild) return "guild_invite";
      else if (null != require.channel) return "dm_invite";
      else if (null != require.inviter) return "friend_invite"
    }
    return null != Chunk951288 ? (0, Chunk743142.L)(Chunk951288) : null
  }
  get giftCodeSKUId() {
    let {
      giftCode: e
    } = this.props;
    return null != module ? module.skuId : null
  }
  get canShowChooseAccount() {
    return this.props.hasLoggedInAccounts
  }
  loginOrSSO(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
    e && null != t && (this.setState({
      redirecting: true
    }), n ? p.Z.verifySSOToken("login").then(() => this.transitionSSO(t)) : this.transitionSSO(t))
  }
  transitionSSO(e) {
    let {
      transitionTo: t,
      redirectTo: n,
      replaceWith: r
    } = this.props, i = null != e ? (0, o.parse)(e.search) : {};
    if (delete i.redirect_to, null != n) null != r ? r(n) : t(n);
    else if (null == i.service) t(H.Z5c.APP);
    else {
      let e = window.location.protocol + window.GLOBAL_ENV.API_ENDPOINT + H.ANM.SSO,
        t = X(Q({}, i), {
          token: w.default.getToken()
        });
      window.location = "".concat(e, "?").concat((0, o.stringify)(t))
    }
  }
  hasError(e) {
    return null != this.state.errors[e]
  }
  renderHandOffAvailable() {
    let {
      authBoxClassName: e
    } = this.props;
    return (0, Chunk951288.jsxs)(Chunk388905.ZP, {
      className: module,
      children: [(0, Chunk951288.jsx)(Chunk388905.Hh, {}), (0, Chunk951288.jsx)(Chunk388905.Dx, {
        className: Chunk197571.marginBottom8,
        children: Chunk388032.intl.string(Chunk388032.t.S6RMNA)
      }), (0, Chunk951288.jsx)(Chunk388905.DK, {
        children: Chunk388032.intl.string(Chunk388032.t.YZiJbh)
      })]
    })
  }
  renderDisabledAccount() {
    let {
      authBoxClassName: e
    } = this.props, t = this.props.loginStatus === Chunk981631.u34.ACCOUNT_DISABLED, n = exports ? Chunk388032.intl.string(Chunk388032.t["j3rC+U"]) : Chunk388032.intl.string(Chunk388032.t.ZFWofo), r = exports ? Chunk388032.intl.string(Chunk388032.t["6eNTWe"]) : Chunk388032.intl.string(Chunk388032.t["pCBti+"]);
    return (0, Chunk951288.jsx)(Chunk388905.ZP, {
      tag: "form",
      onSubmit: this.handleReset,
      className: module,
      children: (0, Chunk951288.jsxs)(Chunk481060.y5t, {
        component: (0, Chunk951288.jsx)(Chunk388905.Dx, {
          className: Chunk197571.marginBottom8,
          children: require
        }),
        children: [(0, Chunk951288.jsx)(Chunk388905.DK, {
          className: Chunk197571.marginBottom20,
          children: r
        }), (0, Chunk951288.jsxs)(Chunk388905.gO, {
          children: [(0, Chunk951288.jsx)(Chunk481060.Button, {
            text: Chunk388032.intl.string(Chunk388032.t.JhDw5o),
            fullWidth: true,
            type: "submit"
          }), (0, Chunk951288.jsx)("div", {
            className: a()(Chunk197571.marginTop8, Chunk132825.needAccount),
            children: Chunk388032.intl.format(Chunk388032.t.js2rr5, {
              onClick: this.handleCancelAccountDeletion
            })
          })]
        })]
      })
    })
  }
  renderResolving() {
    let {
      authBoxClassName: e,
      country: t
    } = this.props;
    return (0, Chunk951288.jsxs)(Chunk388905.ZP, {
      className: module,
      children: [(0, Chunk951288.jsx)(Chunk588705.R, {}), (0, Chunk951288.jsxs)(Chunk388905.gO, {
        className: Chunk197571.marginTop20,
        children: [(0, Chunk951288.jsx)(Chunk952802.Z, {
          className: Chunk197571.marginBottom20,
          alpha2: exports.alpha2,
          countryCode: exports.code.split(" ")[0],
          label: Chunk388032.intl.string(Chunk388032.t.tUjnxr),
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
          autoFocus: true,
          required: true
        }), (0, Chunk951288.jsx)(Chunk388905.II, {
          className: Chunk197571.marginBottom20,
          label: Chunk388032.intl.string(Chunk388032.t["CIGa+7"]),
          onChange: e => this.setState({
            password: e
          }),
          type: "password",
          setRef: this.setPasswordRef,
          autoComplete: "current-password",
          spellCheck: "false",
          value: this.state.password,
          required: true
        }), (0, Chunk951288.jsx)("div", {
          className: Chunk197571.marginBottom8,
          children: (0, Chunk951288.jsx)(Chunk481060.Button, {
            text: Chunk388032.intl.string(Chunk388032.t.dKhVQN),
            fullWidth: true,
            type: "submit",
            disabled: true
          })
        }), (0, Chunk951288.jsx)(Chunk481060.Avr, {
          text: Chunk388032.intl.string(Chunk388032.t.wWIufs),
          textVariant: "text-sm/normal",
          disabled: true
        }), (0, Chunk951288.jsx)("div", {
          className: Chunk197571.marginTop4,
          children: (0, Chunk951288.jsx)(Chunk481060.Avr, {
            text: Chunk388032.intl.string(Chunk388032.t.tmE73r),
            textVariant: "text-sm/normal",
            disabled: true
          })
        })]
      })]
    })
  }
  renderDefaultForm(e) {
    var t;
    let n, {
        invite: r,
        giftCode: s,
        loginStatus: l,
        country: o,
        showMobileWebHandoff: c,
        disableAutofocusOnDefaultForm: u
      } = this.props,
      d = !this.hasError("email") && this.hasError("password");
    return n = null != r ? (0, i.jsx)(F.Z, {
      invite: r
    }) : null != s ? (0, i.jsx)(G.Z, {
      giftCode: s
    }) : (0, i.jsxs)("div", {
      className: q.header,
      children: [(0, i.jsx)(E.Dx, {
        className: Y.marginBottom8,
        children: K.intl.string(K.t["7fNJgA"])
      }, "title"), false === (0, U.isAndroidWeb)() ? (0, i.jsx)(E.DK, {
        children: K.intl.string(K.t.euS7r4)
      }, "subtitle") : null]
    }), (0, i.jsxs)(j.Z, {
      direction: j.Z.Direction.HORIZONTAL,
      align: j.Z.Align.CENTER,
      children: [(0, i.jsxs)("div", {
        className: q.mainLoginContainer,
        children: [this.canShowChooseAccount && this.state.dismissedChooseAccount && (0, i.jsx)("div", {
          className: q.goBackButton,
          children: (0, i.jsx)(g.Button, {
            onClick: () => {
              this.setState(e => X(Q({}, e), {
                dismissedChooseAccount: false
              }))
            },
            variant: "secondary",
            text: K.intl.string(K.t["1MrpWO"]),
            icon: g.V7D
          })
        }), n, (0, i.jsx)(g.y5t, {
          children: (0, i.jsxs)(E.gO, {
            className: Y.marginTop20,
            children: [(0, i.jsx)(T.Z, {
              alpha2: o.alpha2,
              countryCode: o.code.split(" ")[0],
              className: Y.marginBottom20,
              label: K.intl.string(K.t.tUjnxr),
              error: null != (t = this.renderError("login")) ? t : this.renderError("email"),
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
              autoFocus: !d && !c && !u,
              required: true
            }), (0, i.jsx)(E.II, {
              label: K.intl.string(K.t["CIGa+7"]),
              error: this.renderError("password"),
              onChange: e => this.setState({
                password: e
              }),
              name: "password",
              type: "password",
              setRef: this.setPasswordRef,
              autoComplete: "current-password",
              spellCheck: "false",
              autoFocus: d && !c && !u,
              value: this.state.password,
              required: true
            }), (0, i.jsx)("div", {
              className: a()(Y.marginBottom20, Y.marginTop4),
              children: (0, i.jsx)(g.Avr, {
                text: K.intl.string(K.t.wWIufs),
                textVariant: "text-sm/normal",
                onClick: this.handleForgotPassword
              })
            }), (0, i.jsx)("div", {
              className: Y.marginBottom8,
              children: (0, i.jsx)(g.Button, {
                text: K.intl.string(K.t.dKhVQN),
                fullWidth: true,
                type: "submit",
                loading: l === H.u34.LOGGING_IN
              })
            }), (0, i.jsxs)("div", {
              className: Y.marginTop4,
              children: [(0, i.jsx)("span", {
                className: q.needAccount,
                children: K.intl.string(K.t.tmE73r)
              }), (0, i.jsx)("span", {
                className: q.smallRegisterLink,
                children: (0, i.jsx)(g.Avr, {
                  text: K.intl.string(K.t.pV8xeR),
                  textVariant: "text-sm/normal",
                  onClick: this.handleGotoRegister
                })
              })]
            })]
          })
        })]
      }), (0, i.jsx)(g.y5t, {
        children: e ? (0, i.jsx)(V.Z, {
          authTokenCallback: this.handleAuthToken,
          conditionalMediationAbortController: this.state.conditionalMediationAbortController
        }) : null
      })]
    }, "form-wrapper")
  }
  renderDefault() {
    let {
      authBoxClassName: e,
      showMobileWebHandoff: t
    } = this.props;
    return (0, Chunk951288.jsxs)("div", {
      className: Chunk132825.__invalid_pageContainer,
      children: [(0, Chunk951288.jsx)(Chunk388905.ZP, {
        onSubmit: this.handleLogin,
        tag: "form",
        className: module,
        expanded: true,
        children: this.renderDefaultForm(true)
      }), exports && (0, Chunk951288.jsx)(Chunk86779.Z, {})]
    })
  }
  renderGuildTemplate(e) {
    return (0, i.jsx)(W.Z, {
      onSubmit: this.handleLogin,
      tag: "form",
      className: a()(this.props.authBoxClassName, q.horizontalAuthBox),
      children: () => [(0, i.jsx)(I.Z, {
        guildTemplate: e
      }, "template"), this.renderDefaultForm(false)]
    })
  }
  renderMFA() {
    let e = {
      ticket: this.props.mfaTicket,
      methods: this.props.mfaMethods
    };
    return (0, Chunk951288.jsx)(Chunk388905.ZP, {
      style: {
        padding: 0
      },
      children: (0, Chunk951288.jsx)(Chunk124860.Cd, {
        mfaFinish: this.handleTokenSubmitMFA,
        mfaChallenge: module,
        onEarlyClose: () => {
          Chunk570140.Z.dispatch({
            type: "LOGIN_RESET"
          })
        },
        width: 480
      })
    })
  }
  renderIPAuthorization() {
    let {
      authBoxClassName: e
    } = this.props, {
      phoneVerifyError: t
    } = this.state;
    return (0, Chunk951288.jsx)(Chunk388905.ZP, {
      tag: "form",
      className: module,
      children: (0, Chunk951288.jsx)(Chunk379760.Z, {
        title: Chunk388032.intl.string(Chunk388032.t.w55Oco),
        subtitle: Chunk388032.intl.format(Chunk388032.t.CfRZBj, {
          onResendClick: this.handleResendCode
        }),
        error: exports,
        onSubmit: this.handleIPAuthorize,
        onCancel: this.loginReset
      })
    })
  }
  renderPasswordRecovery() {
    let {
      authBoxClassName: e
    } = this.props, {
      phoneVerifyError: t
    } = this.state;
    return (0, Chunk951288.jsx)(Chunk388905.ZP, {
      tag: "form",
      className: module,
      children: (0, Chunk951288.jsx)(Chunk379760.Z, {
        title: Chunk388032.intl.string(Chunk388032.t["+xqy3d"]),
        subtitle: Chunk388032.intl.format(Chunk388032.t.ef4uZ7, {
          onResendClick: this.handleResendCode
        }),
        error: exports,
        onSubmit: this.handlePasswordReset,
        onCancel: this.loginReset
      })
    })
  }
  renderChooseAccount() {
    let e = () => {
      this.setState(e => X(Q({}, e), {
        dismissedChooseAccount: true
      }))
    };
    return (0, Chunk951288.jsx)(Chunk913583.Z, {
      onDismiss: module
    })
  }
  render() {
    let {
      invite: e,
      guildTemplate: t,
      loginStatus: n,
      handoffAvailable: r
    } = this.props, {
      checkingHandoff: s,
      redirecting: l
    } = this.state;
    if (Chunk120356 || Chunk647438) return (0, Chunk951288.jsx)($, {});
    if (r) return this.renderHandOffAvailable();
    switch (require) {
      case Chunk981631.u34.LOGGING_IN_MFA_SMS:
      case Chunk981631.u34.MFA_SMS_STEP:
      case Chunk981631.u34.LOGGING_IN_MFA:
      case Chunk981631.u34.MFA_STEP:
        return this.renderMFA();
      case Chunk981631.u34.ACCOUNT_SCHEDULED_FOR_DELETION:
      case Chunk981631.u34.ACCOUNT_DISABLED:
        return this.renderDisabledAccount();
      case Chunk981631.u34.PHONE_IP_AUTHORIZATION:
        return this.renderIPAuthorization();
      case Chunk981631.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION:
        return this.renderPasswordRecovery();
      case Chunk981631.u34.LOGGING_IN:
      case Chunk981631.u34.NONE:
      default:
        if (null != module && module.state === Chunk981631.r2o.RESOLVING) return this.renderResolving();
        if (null != exports)
          if (exports.state === Chunk260539.Rj.RESOLVING) return this.renderResolving();
          else return this.renderGuildTemplate(exports);
        if (this.canShowChooseAccount && !this.state.dismissedChooseAccount) return this.renderChooseAccount();
        return this.renderDefault()
    }
  }
  constructor(e) {
    var t, n;
    super(e), J(this, "loginRef", true), J(this, "passwordRef", true), J(this, "codeRef", true), J(this, "handleAuthToken", async (e, t) => {
      this.setState({
        errors: {}
      }), await p.Z.loginToken(e, false), M.default.track(H.rMx.LOGIN_SUCCESSFUL, {
        source: H.uRl.QR_CODE,
        login_source: this.loginSource,
        gift_code_sku_id: this.giftCodeSKUId,
        is_new_user: false,
        login_method: "remote_auth",
        login_instance_id: null != t ? t : null
      })
    }), J(this, "loginReset", () => {
      this.state.conditionalMediationAbortController.abort("Login state reset"), this.setState({
        errors: {}
      }), p.Z.loginReset()
    }), J(this, "setLoginRef", e => {
      this.loginRef = e
    }), J(this, "setPasswordRef", e => {
      this.passwordRef = e
    }), J(this, "setCodeRef", e => {
      this.codeRef = e
    }), J(this, "getFullLogin", () => {
      let {
        loginPrefix: e,
        login: t
      } = this.state;
      return e + t
    }), J(this, "renderError", e => {
      let {
        errors: t
      } = this.state;
      if (this.hasError(e)) {
        let n = t[e];
        return Array.isArray(n) ? n[0] : n
      }
      return null
    }), J(this, "handleLogin", async e => {
      let {
        password: t,
        undelete: n,
        conditionalMediationAbortController: r
      } = this.state;
      null == e || e.preventDefault(), r.abort("Starting password login"), B.S.dispatch(H.CkL.WAVE_EMPHASIZE), this.setState({
        errors: {}
      });
      try {
        await p.Z.login({
          login: this.getFullLogin(),
          password: t,
          undelete: n,
          source: this.loginSource,
          giftCodeSKUId: this.giftCodeSKUId,
          invite: this.props.invite
        })
      } catch (t) {
        let e = (0, x.p)(t);
        this.setState({
          errors: e
        })
      }
    }), J(this, "handleIPAuthorize", async e => {
      let t = this.getFullLogin();
      this.setState({
        errors: {}
      });
      try {
        let {
          token: n
        } = await C.Z.verifyPhone(t, e, false);
        await p.Z.authorizeIPAddress(n), this.handleLogin()
      } catch (e) {
        null != e.body && null != e.body.message && this.setState({
          phoneVerifyError: e.body.message
        })
      }
    }), J(this, "handlePasswordReset", async e => {
      let {
        transitionTo: t
      } = this.props;
      this.setState({
        phoneVerifyError: null
      });
      try {
        let {
          token: n
        } = await C.Z.verifyPhone(this.getFullLogin(), e, false);
        t(H.Z5c.RESET, {
          search: (0, o.stringify)({
            token: n,
            from_login: "true"
          })
        })
      } catch (e) {
        null != e.body && null != e.body.message && this.setState({
          phoneVerifyError: e.body.message
        })
      }
    }), J(this, "handleTokenSubmitMFA", e => {
      let {
        mfaType: t,
        data: n,
        ticket: r
      } = e;
      return B.S.dispatch(H.CkL.WAVE_EMPHASIZE), p.Z.loginMFAv2({
        code: n,
        ticket: r,
        mfaType: t,
        source: this.loginSource,
        giftCodeSKUId: this.giftCodeSKUId
      })
    }), J(this, "handleForgotPassword", async e => {
      null != e && e.preventDefault(), null != this.loginRef && this.loginRef.focus();
      let t = this.getFullLogin();
      this.setState({
        errors: {}
      });
      try {
        B.S.dispatch(H.CkL.WAVE_EMPHASIZE);
        let e = await p.Z.forgotPassword(t);
        if (false === e) return;
        e === u.B.ONE_TIME_LOGIN ? (0, g.h7j)(e => {
          let t = [{
            variant: "primary",
            text: K.intl.string(K.t.BddRzS),
            onClick: e.onClose,
            fullWidth: true
          }];
          return (0, i.jsx)(d.Modal, X(Q({
            title: K.intl.string(K.t["6Ecyts"]),
            actions: t
          }, e), {
            children: (0, i.jsx)(g.Text, {
              variant: "text-md/normal",
              children: K.intl.string(K.t.iAcrqV)
            })
          }))
        }) : (0, g.h7j)(e => (0, i.jsx)(g.ConfirmModal, X(Q({
          header: K.intl.string(K.t.f5Pi7A),
          confirmText: K.intl.string(K.t.BddRzS),
          className: c.tq ? q.mobile : ""
        }, e), {
          children: (0, i.jsx)(g.Text, {
            variant: "text-md/normal",
            children: K.intl.format(K.t["6u5hQ9"], {
              email: t
            })
          })
        })))
      } catch (t) {
        let e = (0, x.p)(t);
        this.setState({
          errors: e
        })
      }
    }), J(this, "handleResendCode", () => {
      C.Z.resendCode(this.getFullLogin())
    }), J(this, "handleReset", e => {
      null != e && e.preventDefault(), p.Z.loginReset(), this.setState({
        password: "",
        loginPrefix: "",
        login: "",
        code: "",
        smsCode: "",
        undelete: false,
        checkingHandoff: false,
        redirecting: false,
        errors: {}
      })
    }), J(this, "handleCancelAccountDeletion", () => {
      this.setState({
        undelete: true
      }, this.handleLogin)
    }), J(this, "handleGotoRegister", () => {
      let e, {
          login: t
        } = this.state,
        {
          invite: n,
          giftCode: r,
          guildTemplate: i,
          location: s,
          transitionTo: l,
          redirectTo: a
        } = this.props,
        c = null != s ? (0, o.parse)(s.search) : {};
      "" !== t && (c.email = t), null != n ? (c.mode = "register", e = H.Z5c.INVITE(n.code)) : null != r ? (c.mode = "register", e = H.Z5c.GIFT_CODE(r.code)) : null != i ? e = H.Z5c.GUILD_TEMPLATE(i.code) : null != a ? (e = H.Z5c.REGISTER, c.redirect_to = a) : e = H.Z5c.REGISTER, this.loginReset(), l(e, {
        search: (0, o.stringify)(c)
      }), B.S.dispatch(H.CkL.WAVE_EMPHASIZE)
    });
    let r = null != e.location ? (0, o.parse)(e.location.search) : {};
    this.state = {
      redirecting: e.authenticated,
      checkingHandoff: e.handoffAvailable,
      loginPrefix: "",
      login: null != (n = null != (t = r.email) ? t : r.login) ? n : "",
      password: "",
      code: "",
      smsCode: "",
      undelete: false,
      phoneVerifyError: null,
      dismissedChooseAccount: false,
      conditionalMediationAbortController: new AbortController,
      errors: {}
    }
  }
}
J(ee, "defaultProps", {
  transitionTo: e => n.g.location.assign(e)
});
let et = function(e) {
  (0, P.M)();
  let t = (0, h.cj)([D.Z, k.Z, w.default, N.Z, A.Z], () => ({
    authenticated: w.default.isAuthenticated(),
    handoffAvailable: D.Z.isHandoffAvailable(),
    user: D.Z.user,
    loginStatus: w.default.getLoginStatus(),
    mfaTicket: w.default.getMFATicket(),
    mfaMethods: w.default.getMFAMethods(),
    defaultRoute: k.Z.defaultRoute,
    country: A.Z.getCountryCode(),
    hasLoggedInAccounts: N.Z.getHasLoggedInAccounts()
  }));
  return (0, i.jsx)(ee, Q({}, e, t))
}