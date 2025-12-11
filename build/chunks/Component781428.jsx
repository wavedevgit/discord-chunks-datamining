/** Chunk was on 27978 **/
/** chunk id: 781428, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => en,
  q: () => ee
}), require("./35282.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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
  Chunk280466 = require("./280466.js"),
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
  Chunk503096 = require("./503096.js"),
  Chunk478411 = require("./478411.js");

function Q(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function X(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      Q(e, t, n[t])
    })
  }
  return e
}

function $(e, t) {
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

function ee() {
  return (0, Chunk54381.jsx)(Chunk388905.ZP, {
    children: (0, Chunk54381.jsx)(Chunk481060.$jN, {})
  })
}
class et extends(r = Chunk473749.PureComponent) {
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
    module && !exports ? (0, Chunk899742.is)() : exports && this.loginOrSSO(exports, Chunk54381, true), Chunk626135.default.track(Chunk981631.rMx.LOGIN_VIEWED, $(X({
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
      redirecting: a
    } = this.state;
    if (!n || e.authenticated || s && (i || a) || (this.state.conditionalMediationAbortController.abort("Transitioning to authenticated state"), this.loginOrSSO(n, r)), t.errors !== this.state.errors) {
      var l, o, c;
      this.hasError("password") ? null == (l = this.passwordRef) || l.focus() : this.hasError("email") || this.hasError("login") ? null == (o = this.loginRef) || o.focus() : this.hasError("code") && (null == (c = this.codeRef) || c.focus())
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
    return null != Chunk54381 ? (0, Chunk743142.L)(Chunk54381) : null
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
    }), n ? m.Z.verifySSOToken("login").then(() => this.transitionSSO(t)) : this.transitionSSO(t))
  }
  transitionSSO(e) {
    let {
      transitionTo: t,
      redirectTo: n,
      replaceWith: r
    } = this.props, i = null != e ? (0, o.parse)(e.search) : {};
    if (delete i.redirect_to, null != n) {
      if ((0, E.Eu)(n)) return void(0, E.Pq)(n);
      null != r ? r(n) : t(n)
    } else if (null == i.service) t(H.Z5c.APP);
    else {
      let e = window.location.protocol + window.GLOBAL_ENV.API_ENDPOINT + H.ANM.SSO,
        t = $(X({}, i), {
          token: k.default.getToken()
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
    return (0, Chunk54381.jsxs)(Chunk388905.ZP, {
      className: module,
      children: [(0, Chunk54381.jsx)(Chunk388905.Hh, {}), (0, Chunk54381.jsx)(Chunk388905.Dx, {
        className: Chunk478411.marginBottom8,
        children: Chunk388032.intl.string(Chunk388032.t.S6RMNA)
      }), (0, Chunk54381.jsx)(Chunk388905.DK, {
        children: Chunk388032.intl.string(Chunk388032.t.YZiJbh)
      })]
    })
  }
  renderDisabledAccount() {
    let {
      authBoxClassName: e
    } = this.props, t = this.props.loginStatus === Chunk981631.u34.ACCOUNT_DISABLED, n = exports ? Chunk388032.intl.string(Chunk388032.t["j3rC+U"]) : Chunk388032.intl.string(Chunk388032.t.ZFWofo), r = exports ? Chunk388032.intl.string(Chunk388032.t["6eNTWe"]) : Chunk388032.intl.string(Chunk388032.t["pCBti+"]);
    return (0, Chunk54381.jsx)(Chunk388905.ZP, {
      tag: "form",
      onSubmit: this.handleReset,
      className: module,
      children: (0, Chunk54381.jsxs)(Chunk481060.y5t, {
        component: (0, Chunk54381.jsx)(Chunk388905.Dx, {
          className: Chunk478411.marginBottom8,
          children: require
        }),
        children: [(0, Chunk54381.jsx)(Chunk388905.DK, {
          className: Chunk478411.marginBottom20,
          children: r
        }), (0, Chunk54381.jsxs)(Chunk388905.gO, {
          children: [(0, Chunk54381.jsx)(Chunk481060.Button, {
            text: Chunk388032.intl.string(Chunk388032.t.JhDw5o),
            fullWidth: true,
            type: "submit"
          }), (0, Chunk54381.jsx)("div", {
            className: l()(Chunk478411.marginTop8, Chunk503096.needAccount),
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
    return (0, Chunk54381.jsxs)(Chunk388905.ZP, {
      className: module,
      children: [(0, Chunk54381.jsx)(Chunk588705.R, {}), (0, Chunk54381.jsxs)(Chunk388905.gO, {
        className: Chunk478411.marginTop20,
        children: [(0, Chunk54381.jsx)(Chunk952802.Z, {
          className: Chunk478411.marginBottom20,
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
        }), (0, Chunk54381.jsx)(Chunk388905.II, {
          className: Chunk478411.marginBottom20,
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
        }), (0, Chunk54381.jsx)("div", {
          className: Chunk478411.marginBottom8,
          children: (0, Chunk54381.jsx)(Chunk481060.Button, {
            text: Chunk388032.intl.string(Chunk388032.t.dKhVQN),
            fullWidth: true,
            type: "submit",
            disabled: true
          })
        }), (0, Chunk54381.jsx)(Chunk481060.Avr, {
          text: Chunk388032.intl.string(Chunk388032.t.wWIufs),
          textVariant: "text-sm/normal",
          disabled: true
        }), (0, Chunk54381.jsx)("div", {
          className: Chunk478411.marginTop4,
          children: (0, Chunk54381.jsx)(Chunk481060.Avr, {
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
        loginStatus: a,
        country: o,
        showMobileWebHandoff: c,
        disableAutofocusOnDefaultForm: u
      } = this.props,
      d = !this.hasError("email") && this.hasError("password");
    return n = null != r ? (0, i.jsx)(V.Z, {
      invite: r
    }) : null != s ? (0, i.jsx)(F.Z, {
      giftCode: s
    }) : (0, i.jsxs)("div", {
      className: Y.header,
      children: [(0, i.jsx)(v.Dx, {
        className: J.marginBottom8,
        children: q.intl.string(q.t["7fNJgA"])
      }, "title"), false === (0, G.isAndroidWeb)() ? (0, i.jsx)(v.DK, {
        children: q.intl.string(q.t.euS7r4)
      }, "subtitle") : null]
    }), (0, i.jsxs)(j.Z, {
      direction: j.Z.Direction.HORIZONTAL,
      align: j.Z.Align.CENTER,
      children: [(0, i.jsxs)("div", {
        className: Y.mainLoginContainer,
        children: [this.canShowChooseAccount && this.state.dismissedChooseAccount && (0, i.jsx)("div", {
          className: Y.goBackButton,
          children: (0, i.jsx)(f.Button, {
            onClick: () => {
              this.setState(e => $(X({}, e), {
                dismissedChooseAccount: false
              }))
            },
            variant: "secondary",
            text: q.intl.string(q.t["1MrpWO"]),
            icon: f.V7D
          })
        }), n, (0, i.jsx)(f.y5t, {
          children: (0, i.jsxs)(v.gO, {
            className: J.marginTop20,
            children: [(0, i.jsx)(Z.Z, {
              alpha2: o.alpha2,
              countryCode: o.code.split(" ")[0],
              className: J.marginBottom20,
              label: q.intl.string(q.t.tUjnxr),
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
            }), (0, i.jsx)(v.II, {
              label: q.intl.string(q.t["CIGa+7"]),
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
              className: l()(J.marginBottom20, J.marginTop4),
              children: (0, i.jsx)(f.Avr, {
                text: q.intl.string(q.t.wWIufs),
                textVariant: "text-sm/normal",
                onClick: this.handleForgotPassword
              })
            }), (0, i.jsx)("div", {
              className: J.marginBottom8,
              children: (0, i.jsx)(f.Button, {
                text: q.intl.string(q.t.dKhVQN),
                fullWidth: true,
                type: "submit",
                loading: a === H.u34.LOGGING_IN
              })
            }), (0, i.jsxs)("div", {
              className: J.marginTop4,
              children: [(0, i.jsx)("span", {
                className: Y.needAccount,
                children: q.intl.string(q.t.tmE73r)
              }), (0, i.jsx)("span", {
                className: Y.smallRegisterLink,
                children: (0, i.jsx)(f.Avr, {
                  text: q.intl.string(q.t.pV8xeR),
                  textVariant: "text-sm/normal",
                  onClick: this.handleGotoRegister
                })
              })]
            })]
          })
        })]
      }), (0, i.jsx)(f.y5t, {
        children: e ? (0, i.jsx)(W.Z, {
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
    return (0, Chunk54381.jsxs)("div", {
      className: Chunk503096.__invalid_pageContainer,
      children: [(0, Chunk54381.jsx)(Chunk388905.ZP, {
        onSubmit: this.handleLogin,
        tag: "form",
        className: module,
        expanded: true,
        children: this.renderDefaultForm(true)
      }), exports && (0, Chunk54381.jsx)(Chunk86779.Z, {})]
    })
  }
  renderGuildTemplate(e) {
    return (0, i.jsx)(K.Z, {
      onSubmit: this.handleLogin,
      tag: "form",
      className: l()(this.props.authBoxClassName, Y.horizontalAuthBox),
      children: () => [(0, i.jsx)(N.Z, {
        guildTemplate: e
      }, "template"), this.renderDefaultForm(false)]
    })
  }
  renderMFA() {
    let e = {
      ticket: this.props.mfaTicket,
      methods: this.props.mfaMethods
    };
    return (0, Chunk54381.jsx)(Chunk388905.ZP, {
      style: {
        padding: 0
      },
      children: (0, Chunk54381.jsx)(Chunk124860.C, {
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
    return (0, Chunk54381.jsx)(Chunk388905.ZP, {
      tag: "form",
      className: module,
      children: (0, Chunk54381.jsx)(Chunk379760.Z, {
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
    return (0, Chunk54381.jsx)(Chunk388905.ZP, {
      tag: "form",
      className: module,
      children: (0, Chunk54381.jsx)(Chunk379760.Z, {
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
      this.setState(e => $(X({}, e), {
        dismissedChooseAccount: true
      }))
    };
    return (0, Chunk54381.jsx)(Chunk913583.Z, {
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
      redirecting: a
    } = this.state;
    if (Chunk120356 || Chunk473749) return (0, Chunk54381.jsx)(ee, {});
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
    super(e), Q(this, "loginRef", true), Q(this, "passwordRef", true), Q(this, "codeRef", true), Q(this, "handleAuthToken", async (e, t) => {
      this.setState({
        errors: {}
      }), await m.Z.loginToken(e, false), B.default.track(H.rMx.LOGIN_SUCCESSFUL, {
        source: H.uRl.QR_CODE,
        login_source: this.loginSource,
        gift_code_sku_id: this.giftCodeSKUId,
        is_new_user: false,
        login_method: "remote_auth",
        login_instance_id: null != t ? t : null
      })
    }), Q(this, "loginReset", () => {
      this.state.conditionalMediationAbortController.abort("Login state reset"), this.setState({
        errors: {}
      }), m.Z.loginReset()
    }), Q(this, "setLoginRef", e => {
      this.loginRef = e
    }), Q(this, "setPasswordRef", e => {
      this.passwordRef = e
    }), Q(this, "setCodeRef", e => {
      this.codeRef = e
    }), Q(this, "getFullLogin", () => {
      let {
        loginPrefix: e,
        login: t
      } = this.state;
      return e + t
    }), Q(this, "renderError", e => {
      let {
        errors: t
      } = this.state;
      if (this.hasError(e)) {
        let n = t[e];
        return Array.isArray(n) ? n[0] : n
      }
      return null
    }), Q(this, "handleLogin", async e => {
      let {
        password: t,
        undelete: n,
        conditionalMediationAbortController: r
      } = this.state;
      null == e || e.preventDefault(), r.abort("Starting password login"), U.S.dispatch(H.CkL.WAVE_EMPHASIZE), this.setState({
        errors: {}
      });
      try {
        await m.Z.login({
          login: this.getFullLogin(),
          password: t,
          undelete: n,
          source: this.loginSource,
          giftCodeSKUId: this.giftCodeSKUId,
          invite: this.props.invite
        })
      } catch (t) {
        let e = (0, _.p)(t);
        this.setState({
          errors: e
        })
      }
    }), Q(this, "handleIPAuthorize", async e => {
      let t = this.getFullLogin();
      this.setState({
        errors: {}
      });
      try {
        let {
          token: n
        } = await T.Z.verifyPhone(t, e, false);
        await m.Z.authorizeIPAddress(n), this.handleLogin()
      } catch (e) {
        null != e.body && null != e.body.message && this.setState({
          phoneVerifyError: e.body.message
        })
      }
    }), Q(this, "handlePasswordReset", async e => {
      let {
        transitionTo: t
      } = this.props;
      this.setState({
        phoneVerifyError: null
      });
      try {
        let {
          token: n
        } = await T.Z.verifyPhone(this.getFullLogin(), e, false);
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
    }), Q(this, "handleTokenSubmitMFA", e => {
      let {
        mfaType: t,
        data: n,
        ticket: r
      } = e;
      return U.S.dispatch(H.CkL.WAVE_EMPHASIZE), m.Z.loginMFAv2({
        code: n,
        ticket: r,
        mfaType: t,
        source: this.loginSource,
        giftCodeSKUId: this.giftCodeSKUId
      })
    }), Q(this, "handleForgotPassword", async e => {
      null != e && e.preventDefault(), null != this.loginRef && this.loginRef.focus();
      let t = this.getFullLogin();
      this.setState({
        errors: {}
      });
      try {
        U.S.dispatch(H.CkL.WAVE_EMPHASIZE);
        let e = await m.Z.forgotPassword(t);
        if (false === e) return;
        e === u.B.ONE_TIME_LOGIN ? (0, f.h7j)(e => {
          let t = [{
            variant: "primary",
            text: q.intl.string(q.t.BddRzS),
            onClick: e.onClose,
            fullWidth: true
          }];
          return (0, i.jsx)(d.Modal, $(X({
            title: q.intl.string(q.t["6Ecyts"]),
            actions: t
          }, e), {
            children: (0, i.jsx)(f.Text, {
              variant: "text-md/normal",
              children: q.intl.string(q.t.iAcrqV)
            })
          }))
        }) : (0, f.h7j)(e => (0, i.jsx)(f.VoidConfirmModal, $(X({
          header: q.intl.string(q.t.f5Pi7A),
          confirmText: q.intl.string(q.t.BddRzS),
          className: c.tq ? Y.mobile : ""
        }, e), {
          children: (0, i.jsx)(f.Text, {
            variant: "text-md/normal",
            children: q.intl.format(q.t["6u5hQ9"], {
              email: t
            })
          })
        })))
      } catch (t) {
        let e = (0, _.p)(t);
        this.setState({
          errors: e
        })
      }
    }), Q(this, "handleResendCode", () => {
      T.Z.resendCode(this.getFullLogin())
    }), Q(this, "handleReset", e => {
      null != e && e.preventDefault(), m.Z.loginReset(), this.setState({
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
    }), Q(this, "handleCancelAccountDeletion", () => {
      this.setState({
        undelete: true
      }, this.handleLogin)
    }), Q(this, "handleGotoRegister", () => {
      let e, {
          login: t
        } = this.state,
        {
          invite: n,
          giftCode: r,
          guildTemplate: i,
          location: s,
          transitionTo: a,
          redirectTo: l
        } = this.props,
        c = null != s ? (0, o.parse)(s.search) : {};
      "" !== t && (c.email = t), null != n ? (c.mode = "register", e = H.Z5c.INVITE(n.code)) : null != r ? (c.mode = "register", e = H.Z5c.GIFT_CODE(r.code)) : null != i ? e = H.Z5c.GUILD_TEMPLATE(i.code) : null != l ? (e = H.Z5c.REGISTER, c.redirect_to = l) : e = H.Z5c.REGISTER, this.loginReset(), a(e, {
        search: (0, o.stringify)(c)
      }), U.S.dispatch(H.CkL.WAVE_EMPHASIZE)
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
Q(et, "defaultProps", {
  transitionTo: e => n.g.location.assign(e)
});
let en = function(e) {
  (0, R.M)();
  let t = (0, h.cj)([w.Z, M.Z, k.default, C.Z, A.Z], () => ({
    authenticated: k.default.isAuthenticated(),
    handoffAvailable: w.Z.isHandoffAvailable(),
    user: w.Z.user,
    loginStatus: k.default.getLoginStatus(),
    mfaTicket: k.default.getMFATicket(),
    mfaMethods: k.default.getMFAMethods(),
    defaultRoute: M.Z.defaultRoute,
    country: A.Z.getCountryCode(),
    hasLoggedInAccounts: C.Z.getHasLoggedInAccounts()
  }));
  return (0, i.jsx)(et, X({}, e, t))
}