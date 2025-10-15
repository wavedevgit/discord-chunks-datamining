/** Chunk was on 27978 **/
/** chunk id: 781428, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => $,
  q: () => Q
}), require("./35282.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk593473 = require("./593473.js"),
  Chunk873546 = require("./873546.js"),
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

function q(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function Y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      q(e, t, n[t])
    })
  }
  return e
}

function J(e, t) {
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

function Q() {
  return (0, Chunk951288.jsx)(Chunk388905.ZP, {
    children: (0, Chunk951288.jsx)(Chunk481060.$jN, {})
  })
}
class X extends(r = Chunk647438.PureComponent) {
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
    module && !exports ? (0, Chunk899742.is)() : exports && this.loginOrSSO(exports, Chunk951288, true), Chunk626135.default.track(Chunk981631.rMx.LOGIN_VIEWED, J(Y({
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
      checkingHandoff: l,
      redirecting: s
    } = this.state;
    if (!n || e.authenticated || l && (i || s) || (this.state.conditionalMediationAbortController.abort("Transitioning to authenticated state"), this.loginOrSSO(n, r)), t.errors !== this.state.errors) {
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
    }), n ? g.Z.verifySSOToken("login").then(() => this.transitionSSO(t)) : this.transitionSSO(t))
  }
  transitionSSO(e) {
    let {
      transitionTo: t,
      redirectTo: n,
      replaceWith: r
    } = this.props, i = null != e ? (0, o.parse)(e.search) : {};
    if (delete i.redirect_to, null != n) null != r ? r(n) : t(n);
    else if (null == i.service) t(z.Z5c.APP);
    else {
      let e = window.location.protocol + window.GLOBAL_ENV.API_ENDPOINT + z.ANM.SSO,
        t = J(Y({}, i), {
          token: R.default.getToken()
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
  renderHandOffContinue() {
    let {
      user: e,
      transitionTo: t,
      authBoxClassName: n
    } = this.props;
    return null == module ? null : (0, Chunk951288.jsxs)(Chunk388905.ZP, {
      className: require,
      children: [(0, Chunk951288.jsx)(Chunk388905.qE, {
        src: module.getAvatarURL(true, 100),
        size: Chunk481060.EFr.DEPRECATED_SIZE_100,
        className: Chunk197571.marginBottom20
      }), (0, Chunk951288.jsx)(Chunk388905.Dx, {
        className: Chunk197571.marginBottom8,
        children: Chunk388032.intl.format(Chunk388032.t.ot19hv, {
          name: module.toString()
        })
      }), (0, Chunk951288.jsx)(Chunk388905.DK, {
        className: Chunk197571.marginBottom40,
        children: Chunk388032.intl.string(Chunk388032.t["2xkqzT"])
      }), (0, Chunk951288.jsxs)(Chunk388905.gO, {
        children: [(0, Chunk951288.jsx)(Chunk388905.zx, {
          onClick: () => exports(Chunk981631.Z5c.APP),
          className: Chunk197571.marginBottom8,
          children: Chunk388032.intl.format(Chunk388032.t.fohtv2, {
            name: module.toString()
          })
        }), (0, Chunk951288.jsx)(Chunk388905.zx, {
          look: Chunk388905.zx.Looks.LINK,
          color: Chunk388905.zx.Colors.LINK,
          onClick: this.handleReset,
          children: Chunk388032.intl.string(Chunk388032.t.nO564d)
        })]
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
          children: [(0, Chunk951288.jsx)(Chunk388905.zx, {
            color: Chunk388905.zx.Colors.BRAND,
            type: "submit",
            children: Chunk388032.intl.string(Chunk388032.t.JhDw5o)
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
        }), (0, Chunk951288.jsx)(Chunk388905.zx, {
          className: Chunk197571.marginBottom8,
          type: "submit",
          disabled: true,
          children: Chunk388032.intl.string(Chunk388032.t.dKhVQN)
        }), (0, Chunk951288.jsx)(Chunk388905.zx, {
          disabled: true,
          look: Chunk388905.zx.Looks.LINK,
          color: Chunk388905.zx.Colors.LINK,
          children: Chunk388032.intl.string(Chunk388032.t.wWIufs)
        }), (0, Chunk951288.jsx)(Chunk388905.zx, {
          disabled: true,
          className: Chunk197571.marginTop4,
          look: Chunk388905.zx.Looks.LINK,
          color: Chunk388905.zx.Colors.LINK,
          children: Chunk388032.intl.string(Chunk388032.t.tmE73r)
        })]
      })]
    })
  }
  renderDefaultForm(e) {
    var t;
    let n, {
        invite: r,
        giftCode: l,
        loginStatus: s,
        country: o,
        showMobileWebHandoff: c,
        disableAutofocusOnDefaultForm: u
      } = this.props,
      h = !this.hasError("email") && this.hasError("password");
    return n = null != r ? (0, i.jsx)(B.Z, {
      invite: r
    }) : null != l ? (0, i.jsx)(U.Z, {
      giftCode: l
    }) : (0, i.jsxs)("div", {
      className: H.header,
      children: [(0, i.jsx)(_.Dx, {
        className: W.marginBottom8,
        children: K.intl.string(K.t["7fNJgA"])
      }, "title"), false === (0, M.isAndroidWeb)() ? (0, i.jsx)(_.DK, {
        children: K.intl.string(K.t.euS7r4)
      }, "subtitle") : null]
    }), (0, i.jsxs)(E.Z, {
      direction: E.Z.Direction.HORIZONTAL,
      align: E.Z.Align.CENTER,
      children: [(0, i.jsxs)("div", {
        className: H.mainLoginContainer,
        children: [this.canShowChooseAccount && this.state.dismissedChooseAccount && (0, i.jsx)(_.zx, {
          onClick: () => {
            this.setState(e => J(Y({}, e), {
              dismissedChooseAccount: false
            }))
          },
          look: _.zx.Looks.LINK,
          color: _.zx.Colors.PRIMARY,
          className: H.goBackButton,
          children: (0, i.jsxs)("div", {
            className: H.content,
            children: [(0, i.jsx)(d.V7D, {
              size: "xs",
              color: "currentColor",
              className: H.caret
            }), (0, i.jsx)(d.Text, {
              variant: "text-md/normal",
              children: K.intl.string(K.t["1MrpWO"])
            })]
          })
        }), n, (0, i.jsx)(d.y5t, {
          children: (0, i.jsxs)(_.gO, {
            className: W.marginTop20,
            children: [(0, i.jsx)(C.Z, {
              alpha2: o.alpha2,
              countryCode: o.code.split(" ")[0],
              className: W.marginBottom20,
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
              autoFocus: !h && !c && !u,
              required: true
            }), (0, i.jsx)(_.II, {
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
              autoFocus: h && !c && !u,
              value: this.state.password,
              required: true
            }), (0, i.jsx)(_.zx, {
              onClick: this.handleForgotPassword,
              look: _.zx.Looks.LINK,
              color: _.zx.Colors.LINK,
              className: a()(W.marginBottom20, W.marginTop4),
              children: K.intl.string(K.t.wWIufs)
            }), (0, i.jsx)(_.zx, {
              type: "submit",
              submitting: s === z.u34.LOGGING_IN,
              color: _.zx.Colors.BRAND,
              className: W.marginBottom8,
              children: K.intl.string(K.t.dKhVQN)
            }), (0, i.jsxs)("div", {
              className: W.marginTop4,
              children: [(0, i.jsx)("span", {
                className: H.needAccount,
                children: K.intl.string(K.t.tmE73r)
              }), (0, i.jsx)(_.zx, {
                onClick: this.handleGotoRegister,
                look: _.zx.Looks.LINK,
                color: _.zx.Colors.LINK,
                className: H.smallRegisterLink,
                children: K.intl.string(K.t.pV8xeR)
              })]
            })]
          })
        })]
      }), (0, i.jsx)(d.y5t, {
        children: e ? (0, i.jsx)(G.Z, {
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
    return (0, i.jsx)(F.Z, {
      onSubmit: this.handleLogin,
      tag: "form",
      className: a()(this.props.authBoxClassName, H.horizontalAuthBox),
      children: () => [(0, i.jsx)(b.Z, {
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
      this.setState(e => J(Y({}, e), {
        dismissedChooseAccount: true
      }))
    };
    return (0, Chunk951288.jsx)(Chunk913583.Z, {
      onDismiss: module
    })
  }
  render() {
    let {
      authenticated: e,
      invite: t,
      guildTemplate: n,
      loginStatus: r,
      handoffAvailable: l
    } = this.props, {
      checkingHandoff: s,
      redirecting: a
    } = this.state;
    if (a || Chunk120356) return (0, Chunk951288.jsx)(Q, {});
    if (Chunk647438) return this.renderHandOffAvailable();
    if (module && Chunk120356) return this.renderHandOffContinue();
    switch (r) {
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
        if (null != exports && exports.state === Chunk981631.r2o.RESOLVING) return this.renderResolving();
        if (null != require)
          if (require.state === Chunk260539.Rj.RESOLVING) return this.renderResolving();
          else return this.renderGuildTemplate(require);
        if (this.canShowChooseAccount && !this.state.dismissedChooseAccount) return this.renderChooseAccount();
        return this.renderDefault()
    }
  }
  constructor(e) {
    var t, n;
    super(e), q(this, "loginRef", true), q(this, "passwordRef", true), q(this, "codeRef", true), q(this, "handleAuthToken", async (e, t) => {
      this.setState({
        errors: {}
      }), await g.Z.loginToken(e, false), D.default.track(z.rMx.LOGIN_SUCCESSFUL, {
        source: z.uRl.QR_CODE,
        login_source: this.loginSource,
        gift_code_sku_id: this.giftCodeSKUId,
        is_new_user: false,
        login_method: "remote_auth",
        login_instance_id: null != t ? t : null
      })
    }), q(this, "loginReset", () => {
      this.state.conditionalMediationAbortController.abort("Login state reset"), this.setState({
        errors: {}
      }), g.Z.loginReset()
    }), q(this, "setLoginRef", e => {
      this.loginRef = e
    }), q(this, "setPasswordRef", e => {
      this.passwordRef = e
    }), q(this, "setCodeRef", e => {
      this.codeRef = e
    }), q(this, "getFullLogin", () => {
      let {
        loginPrefix: e,
        login: t
      } = this.state;
      return e + t
    }), q(this, "renderError", e => {
      let {
        errors: t
      } = this.state;
      if (this.hasError(e)) {
        let n = t[e];
        return Array.isArray(n) ? n[0] : n
      }
      return null
    }), q(this, "handleLogin", async e => {
      let {
        password: t,
        undelete: n,
        conditionalMediationAbortController: r
      } = this.state;
      null == e || e.preventDefault(), r.abort("Starting password login"), k.S.dispatch(z.CkL.WAVE_EMPHASIZE), this.setState({
        errors: {}
      });
      try {
        await g.Z.login({
          login: this.getFullLogin(),
          password: t,
          undelete: n,
          source: this.loginSource,
          giftCodeSKUId: this.giftCodeSKUId,
          invite: this.props.invite
        })
      } catch (t) {
        let e = (0, f.p)(t);
        this.setState({
          errors: e
        })
      }
    }), q(this, "handleIPAuthorize", async e => {
      let t = this.getFullLogin();
      this.setState({
        errors: {}
      });
      try {
        let {
          token: n
        } = await O.Z.verifyPhone(t, e, false);
        await g.Z.authorizeIPAddress(n), this.handleLogin()
      } catch (e) {
        null != e.body && null != e.body.message && this.setState({
          phoneVerifyError: e.body.message
        })
      }
    }), q(this, "handlePasswordReset", async e => {
      let {
        transitionTo: t
      } = this.props;
      this.setState({
        phoneVerifyError: null
      });
      try {
        let {
          token: n
        } = await O.Z.verifyPhone(this.getFullLogin(), e, false);
        t(z.Z5c.RESET, {
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
    }), q(this, "handleTokenSubmitMFA", e => {
      let {
        mfaType: t,
        data: n,
        ticket: r
      } = e;
      return k.S.dispatch(z.CkL.WAVE_EMPHASIZE), g.Z.loginMFAv2({
        code: n,
        ticket: r,
        mfaType: t,
        source: this.loginSource,
        giftCodeSKUId: this.giftCodeSKUId
      })
    }), q(this, "handleForgotPassword", async e => {
      null != e && e.preventDefault(), null != this.loginRef && this.loginRef.focus();
      let t = this.getFullLogin();
      this.setState({
        errors: {}
      });
      try {
        if (k.S.dispatch(z.CkL.WAVE_EMPHASIZE), !await g.Z.forgotPassword(t)) return;
        (0, d.h7j)(e => (0, i.jsx)(d.ConfirmModal, J(Y({
          header: K.intl.string(K.t.f5Pi7A),
          confirmText: K.intl.string(K.t.BddRzS),
          confirmButtonColor: _.zx.Colors.BRAND,
          className: c.tq ? H.mobile : ""
        }, e), {
          children: (0, i.jsx)(d.Text, {
            variant: "text-md/normal",
            children: K.intl.format(K.t["6u5hQ9"], {
              email: t
            })
          })
        })))
      } catch (t) {
        let e = (0, f.p)(t);
        this.setState({
          errors: e
        })
      }
    }), q(this, "handleResendCode", () => {
      O.Z.resendCode(this.getFullLogin())
    }), q(this, "handleReset", e => {
      null != e && e.preventDefault(), g.Z.loginReset(), this.setState({
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
    }), q(this, "handleCancelAccountDeletion", () => {
      this.setState({
        undelete: true
      }, this.handleLogin)
    }), q(this, "handleGotoRegister", () => {
      let e, {
          login: t
        } = this.state,
        {
          invite: n,
          giftCode: r,
          guildTemplate: i,
          location: l,
          transitionTo: s,
          redirectTo: a
        } = this.props,
        c = null != l ? (0, o.parse)(l.search) : {};
      "" !== t && (c.email = t), null != n ? (c.mode = "register", e = z.Z5c.INVITE(n.code)) : null != r ? (c.mode = "register", e = z.Z5c.GIFT_CODE(r.code)) : null != i ? e = z.Z5c.GUILD_TEMPLATE(i.code) : null != a ? (e = z.Z5c.REGISTER, c.redirect_to = a) : e = z.Z5c.REGISTER, this.loginReset(), s(e, {
        search: (0, o.stringify)(c)
      }), k.S.dispatch(z.CkL.WAVE_EMPHASIZE)
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
q(X, "defaultProps", {
  transitionTo: e => n.g.location.assign(e)
});
let $ = function(e) {
  (0, T.M)();
  let t = (0, u.cj)([L.Z, w.Z, R.default, N.Z, y.Z], () => ({
    authenticated: R.default.isAuthenticated(),
    handoffAvailable: L.Z.isHandoffAvailable(),
    user: L.Z.user,
    loginStatus: R.default.getLoginStatus(),
    mfaTicket: R.default.getMFATicket(),
    mfaMethods: R.default.getMFAMethods(),
    defaultRoute: w.Z.defaultRoute,
    country: y.Z.getCountryCode(),
    hasLoggedInAccounts: N.Z.getHasLoggedInAccounts()
  }));
  return (0, i.jsx)(X, Y({}, e, t))
}