/** Chunk was on 27978 **/
/** chunk id: 781428, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => ee,
  q: () => Q
}), require("./49124.js"), require("./35282.js");
var r, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk533126 = require("./533126.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk593473 = require("./593473.js"),
  Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk893776 = require("./893776.js"),
  Chunk899742 = require("./899742.js"),
  Chunk579806 = require("./579806.js"),
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
  Chunk108427 = require("./108427.js"),
  Chunk365007 = require("./365007.js"),
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
  Chunk555763 = require("./555763.js"),
  Chunk20493 = require("./20493.js");

function Y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function J(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      Y(e, t, n[t])
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

function Q() {
  return (0, Chunk255367.jsx)(Chunk388905.ZP, {
    children: (0, Chunk255367.jsx)(Chunk481060.$jN, {})
  })
}
class $ extends(r = Chunk73800.PureComponent) {
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
    module && !exports ? (0, Chunk899742.is)() : exports && this.loginOrSSO(exports, Chunk255367, true), Chunk626135.default.track(Chunk981631.rMx.LOGIN_VIEWED, X(J({
      location: null != r ? "Invite Login Page" : "Non-Invite Login Page",
      login_source: this.loginSource,
      authenticated: exports
    }, null != require ? (0, Chunk100159.Z)(require, false, false) : {}), {
      source: (0, Chunk703656.At)()
    }), {
      flush: true
    }), null != Chunk579806.Z || null == window.PublicKeyCredential || null == PublicKeyCredential.isConditionalMediationAvailable || exports || PublicKeyCredential.isConditionalMediationAvailable().then(e => {
      e && (0, R.us)().then(e => {
        let {
          challenge: t,
          ticket: n
        } = e, r = (0, o.wz)(JSON.parse(t));
        return r.signal = this.state.conditionalMediationAbortController.signal, (0, o.U2)(r).then(e => (this.setState({
          errors: {}
        }), p.Z.dispatch({
          type: "PASSWORDLESS_START"
        }), k.default.track(V.rMx.LOGIN_ATTEMPTED, {
          source: V.uRl.PASSWORDLESS_CONDITIONAL_UI,
          login_method: "passwordless",
          login_source: this.loginSource,
          gift_code_sku_id: this.giftCodeSKUId
        }), f.Z.loginWebAuthn({
          ticket: n,
          credential: JSON.stringify(e),
          source: this.loginSource,
          giftCodeSKUId: this.giftCodeSKUId
        }).catch(e => {
          throw this.setState({
            errors: (0, x.F)(e)
          }), e
        }))).catch(e => {
          if ("AbortError" !== e.name) throw e
        })
      }).catch(() => {})
    }), Chunk893776.Z.getLocationMetadata(), (0, Chunk108427.e)("login")
  }
  componentDidUpdate(e, t) {
    let {
      authenticated: n,
      location: r,
      handoffAvailable: i
    } = this.props, {
      checkingHandoff: l,
      redirecting: o
    } = this.state;
    if (!n || e.authenticated || l && (i || o) || (this.state.conditionalMediationAbortController.abort(), this.loginOrSSO(n, r)), t.errors !== this.state.errors) {
      var s, a, c;
      this.hasError("password") ? null == (s = this.passwordRef) || s.focus() : this.hasError("email") || this.hasError("login") ? null == (a = this.loginRef) || a.focus() : this.hasError("code") && (null == (c = this.codeRef) || c.focus())
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
    return null != Chunk255367 ? (0, Chunk743142.L)(Chunk255367) : null
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
    }), n ? f.Z.verifySSOToken("login").then(() => this.transitionSSO(t)) : this.transitionSSO(t))
  }
  transitionSSO(e) {
    let {
      transitionTo: t,
      redirectTo: n,
      replaceWith: r
    } = this.props, i = null != e ? (0, c.parse)(e.search) : {};
    if (delete i.redirect_to, null != n) null != r ? r(n) : t(n);
    else if (null == i.service) t(V.Z5c.APP);
    else {
      let e = window.location.protocol + window.GLOBAL_ENV.API_ENDPOINT + V.ANM.SSO,
        t = X(J({}, i), {
          token: w.default.getToken()
        });
      window.location = "".concat(e, "?").concat((0, c.stringify)(t))
    }
  }
  hasError(e) {
    return null != this.state.errors[e]
  }
  renderHandOffAvailable() {
    let {
      authBoxClassName: e
    } = this.props;
    return (0, Chunk255367.jsxs)(Chunk388905.ZP, {
      className: module,
      children: [(0, Chunk255367.jsx)(Chunk388905.Hh, {}), (0, Chunk255367.jsx)(Chunk388905.Dx, {
        className: Chunk20493.marginBottom8,
        children: Chunk388032.intl.string(Chunk388032.t.S6RMND)
      }), (0, Chunk255367.jsx)(Chunk388905.DK, {
        children: Chunk388032.intl.string(Chunk388032.t.YZiJbm)
      })]
    })
  }
  renderHandOffContinue() {
    let {
      user: e,
      transitionTo: t,
      authBoxClassName: n
    } = this.props;
    return null == module ? null : (0, Chunk255367.jsxs)(Chunk388905.ZP, {
      className: require,
      children: [(0, Chunk255367.jsx)(Chunk388905.qE, {
        src: module.getAvatarURL(true, 100),
        size: Chunk481060.EFr.DEPRECATED_SIZE_100,
        className: Chunk20493.marginBottom20
      }), (0, Chunk255367.jsx)(Chunk388905.Dx, {
        className: Chunk20493.marginBottom8,
        children: Chunk388032.intl.format(Chunk388032.t.ot19ho, {
          name: module.toString()
        })
      }), (0, Chunk255367.jsx)(Chunk388905.DK, {
        className: Chunk20493.marginBottom40,
        children: Chunk388032.intl.string(Chunk388032.t["2xkqzc"])
      }), (0, Chunk255367.jsxs)(Chunk388905.gO, {
        children: [(0, Chunk255367.jsx)(Chunk388905.zx, {
          onClick: () => exports(Chunk981631.Z5c.APP),
          className: Chunk20493.marginBottom8,
          children: Chunk388032.intl.format(Chunk388032.t.fohtv7, {
            name: module.toString()
          })
        }), (0, Chunk255367.jsx)(Chunk388905.zx, {
          look: Chunk388905.zx.Looks.LINK,
          color: Chunk388905.zx.Colors.LINK,
          onClick: this.handleReset,
          children: Chunk388032.intl.string(Chunk388032.t.nO564e)
        })]
      })]
    })
  }
  renderDisabledAccount() {
    let {
      authBoxClassName: e
    } = this.props, t = this.props.loginStatus === Chunk981631.u34.ACCOUNT_DISABLED, n = exports ? Chunk388032.intl.string(Chunk388032.t["j3rC+f"]) : Chunk388032.intl.string(Chunk388032.t.ZFWofn), r = exports ? Chunk388032.intl.string(Chunk388032.t["6eNTWV"]) : Chunk388032.intl.string(Chunk388032.t.pCBti4);
    return (0, Chunk255367.jsx)(Chunk388905.ZP, {
      tag: "form",
      onSubmit: this.handleReset,
      className: module,
      children: (0, Chunk255367.jsxs)(Chunk481060.y5t, {
        component: (0, Chunk255367.jsx)(Chunk388905.Dx, {
          className: Chunk20493.marginBottom8,
          children: require
        }),
        children: [(0, Chunk255367.jsx)(Chunk388905.DK, {
          className: Chunk20493.marginBottom20,
          children: r
        }), (0, Chunk255367.jsxs)(Chunk388905.gO, {
          children: [(0, Chunk255367.jsx)(Chunk388905.zx, {
            color: Chunk388905.zx.Colors.BRAND,
            type: "submit",
            children: Chunk388032.intl.string(Chunk388032.t.JhDw5u)
          }), (0, Chunk255367.jsx)("div", {
            className: a()(Chunk20493.marginTop8, Chunk555763.needAccount),
            children: Chunk388032.intl.format(Chunk388032.t.js2rr6, {
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
    return (0, Chunk255367.jsxs)(Chunk388905.ZP, {
      className: module,
      children: [(0, Chunk255367.jsx)(Chunk588705.R, {}), (0, Chunk255367.jsxs)(Chunk388905.gO, {
        className: Chunk20493.marginTop20,
        children: [(0, Chunk255367.jsx)(Chunk952802.Z, {
          className: Chunk20493.marginBottom20,
          alpha2: exports.alpha2,
          countryCode: exports.code.split(" ")[0],
          label: Chunk388032.intl.string(Chunk388032.t.tUjnxs),
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
        }), (0, Chunk255367.jsx)(Chunk388905.II, {
          className: Chunk20493.marginBottom20,
          label: Chunk388032.intl.string(Chunk388032.t["CIGa+/"]),
          onChange: e => this.setState({
            password: e
          }),
          type: "password",
          setRef: this.setPasswordRef,
          autoComplete: "current-password",
          spellCheck: "false",
          value: this.state.password,
          required: true
        }), (0, Chunk255367.jsx)(Chunk388905.zx, {
          className: Chunk20493.marginBottom8,
          type: "submit",
          disabled: true,
          children: Chunk388032.intl.string(Chunk388032.t.dKhVQE)
        }), (0, Chunk255367.jsx)(Chunk388905.zx, {
          disabled: true,
          look: Chunk388905.zx.Looks.LINK,
          color: Chunk388905.zx.Colors.LINK,
          children: Chunk388032.intl.string(Chunk388032.t.wWIufn)
        }), (0, Chunk255367.jsx)(Chunk388905.zx, {
          disabled: true,
          className: Chunk20493.marginTop4,
          look: Chunk388905.zx.Looks.LINK,
          color: Chunk388905.zx.Colors.LINK,
          children: Chunk388032.intl.string(Chunk388032.t.tmE73t)
        })]
      })]
    })
  }
  renderDefaultForm(e) {
    var t;
    let n, {
        invite: r,
        giftCode: l,
        loginStatus: o,
        country: s,
        showMobileWebHandoff: c,
        disableAutofocusOnDefaultForm: u
      } = this.props,
      d = !this.hasError("email") && this.hasError("password"),
      p = (null == r ? true : r.stage_instance) != null;
    return n = null == r || p ? null != l ? (0, i.jsx)(U.Z, {
      giftCode: l
    }) : (0, i.jsxs)("div", {
      className: W.header,
      children: [(0, i.jsx)(b.Dx, {
        className: q.marginBottom8,
        children: K.intl.string(K.t["7fNJgI"])
      }, "title"), false === (0, M.isAndroidWeb)() ? (0, i.jsx)(b.DK, {
        children: K.intl.string(K.t.euS7r6)
      }, "subtitle") : null]
    }) : (0, i.jsx)(G.Z, {
      invite: r
    }), (0, i.jsxs)(v.Z, {
      direction: v.Z.Direction.HORIZONTAL,
      align: v.Z.Align.CENTER,
      children: [(0, i.jsxs)("div", {
        className: W.mainLoginContainer,
        children: [this.canShowChooseAccount && this.state.dismissedChooseAccount && (0, i.jsx)(b.zx, {
          onClick: () => {
            this.setState(e => X(J({}, e), {
              dismissedChooseAccount: false
            }))
          },
          look: b.zx.Looks.LINK,
          color: b.zx.Colors.PRIMARY,
          className: W.goBackButton,
          children: (0, i.jsxs)("div", {
            className: W.content,
            children: [(0, i.jsx)(h.V7D, {
              size: "xs",
              color: "currentColor",
              className: W.caret
            }), (0, i.jsx)(h.Text, {
              variant: "text-md/normal",
              children: K.intl.string(K.t["1MrpWF"])
            })]
          })
        }), n, (0, i.jsx)(h.y5t, {
          children: (0, i.jsxs)(b.gO, {
            className: q.marginTop20,
            children: [(0, i.jsx)(T.Z, {
              alpha2: s.alpha2,
              countryCode: s.code.split(" ")[0],
              className: q.marginBottom20,
              label: K.intl.string(K.t.tUjnxs),
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
            }), (0, i.jsx)(b.II, {
              label: K.intl.string(K.t["CIGa+/"]),
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
            }), (0, i.jsx)(b.zx, {
              onClick: this.handleForgotPassword,
              look: b.zx.Looks.LINK,
              color: b.zx.Colors.LINK,
              className: a()(q.marginBottom20, q.marginTop4),
              children: K.intl.string(K.t.wWIufn)
            }), (0, i.jsx)(b.zx, {
              type: "submit",
              submitting: o === V.u34.LOGGING_IN,
              color: p ? b.zx.Colors.GREEN : b.zx.Colors.BRAND,
              className: q.marginBottom8,
              children: p ? K.intl.string(K.t.wvVThI) : K.intl.string(K.t.dKhVQE)
            }), (0, i.jsxs)("div", {
              className: q.marginTop4,
              children: [(0, i.jsx)("span", {
                className: W.needAccount,
                children: K.intl.string(K.t.tmE73t)
              }), (0, i.jsx)(b.zx, {
                onClick: this.handleGotoRegister,
                look: b.zx.Looks.LINK,
                color: b.zx.Colors.LINK,
                className: W.smallRegisterLink,
                children: K.intl.string(K.t.pV8xeX)
              })]
            })]
          })
        })]
      }), (0, i.jsx)(h.y5t, {
        children: e ? (0, i.jsx)(F.Z, {
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
    return (0, Chunk255367.jsxs)("div", {
      className: Chunk555763.__invalid_pageContainer,
      children: [(0, Chunk255367.jsx)(Chunk388905.ZP, {
        onSubmit: this.handleLogin,
        tag: "form",
        className: module,
        expanded: true,
        children: this.renderDefaultForm(true)
      }), exports && (0, Chunk255367.jsx)(Chunk86779.Z, {})]
    })
  }
  renderGuildTemplate(e) {
    return (0, i.jsx)(z.Z, {
      onSubmit: this.handleLogin,
      tag: "form",
      className: a()(this.props.authBoxClassName, W.horizontalAuthBox),
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
    return (0, Chunk255367.jsx)(Chunk388905.ZP, {
      style: {
        padding: 0
      },
      children: (0, Chunk255367.jsx)(Chunk124860.Cd, {
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
    return (0, Chunk255367.jsx)(Chunk388905.ZP, {
      tag: "form",
      className: module,
      children: (0, Chunk255367.jsx)(Chunk379760.Z, {
        title: Chunk388032.intl.string(Chunk388032.t.w55Ocn),
        subtitle: Chunk388032.intl.format(Chunk388032.t.CfRZBg, {
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
    return (0, Chunk255367.jsx)(Chunk388905.ZP, {
      tag: "form",
      className: module,
      children: (0, Chunk255367.jsx)(Chunk379760.Z, {
        title: Chunk388032.intl.string(Chunk388032.t["+xqy3d"]),
        subtitle: Chunk388032.intl.format(Chunk388032.t.ef4uZ2, {
          onResendClick: this.handleResendCode
        }),
        error: exports,
        onSubmit: this.handlePasswordReset,
        onCancel: this.loginReset
      })
    })
  }
  renderChooseAccount() {
    return (0, Chunk255367.jsx)(Chunk913583.Z, {
      onDismiss: () => {
        this.setState(e => X(J({}, e), {
          dismissedChooseAccount: true
        }))
      }
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
      checkingHandoff: o,
      redirecting: s
    } = this.state;
    if (Chunk120356 || Chunk533126) return (0, Chunk255367.jsx)(Q, {});
    if (Chunk73800) return this.renderHandOffAvailable();
    if (module && Chunk533126) return this.renderHandOffContinue();
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
    super(e), Y(this, "loginRef", true), Y(this, "passwordRef", true), Y(this, "codeRef", true), Y(this, "handleAuthToken", async e => {
      this.setState({
        errors: {}
      }), await f.Z.loginToken(e, false), k.default.track(V.rMx.LOGIN_SUCCESSFUL, {
        source: V.uRl.QR_CODE,
        login_source: this.loginSource,
        gift_code_sku_id: this.giftCodeSKUId,
        is_new_user: false,
        login_method: "remote_auth"
      })
    }), Y(this, "loginReset", () => {
      this.setState({
        errors: {}
      }), f.Z.loginReset()
    }), Y(this, "setLoginRef", e => {
      this.loginRef = e
    }), Y(this, "setPasswordRef", e => {
      this.passwordRef = e
    }), Y(this, "setCodeRef", e => {
      this.codeRef = e
    }), Y(this, "getFullLogin", () => {
      let {
        loginPrefix: e,
        login: t
      } = this.state;
      return e + t
    }), Y(this, "renderError", e => {
      let {
        errors: t
      } = this.state;
      if (this.hasError(e)) {
        let n = t[e];
        return Array.isArray(n) ? n[0] : n
      }
      return null
    }), Y(this, "handleLogin", async e => {
      let {
        password: t,
        undelete: n
      } = this.state;
      null == e || e.preventDefault(), B.S.dispatch(V.CkL.WAVE_EMPHASIZE), this.setState({
        errors: {}
      });
      try {
        await f.Z.login({
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
    }), Y(this, "handleIPAuthorize", async e => {
      let t = this.getFullLogin();
      this.setState({
        errors: {}
      });
      try {
        let {
          token: n
        } = await C.Z.verifyPhone(t, e, false);
        await f.Z.authorizeIPAddress(n), this.handleLogin()
      } catch (e) {
        null != e.body && null != e.body.message && this.setState({
          phoneVerifyError: e.body.message
        })
      }
    }), Y(this, "handlePasswordReset", async e => {
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
        t(V.Z5c.RESET, {
          search: (0, c.stringify)({
            token: n,
            from_login: "true"
          })
        })
      } catch (e) {
        null != e.body && null != e.body.message && this.setState({
          phoneVerifyError: e.body.message
        })
      }
    }), Y(this, "handleTokenSubmitMFA", e => {
      let {
        mfaType: t,
        data: n,
        ticket: r
      } = e;
      return B.S.dispatch(V.CkL.WAVE_EMPHASIZE), f.Z.loginMFAv2({
        code: n,
        ticket: r,
        mfaType: t,
        source: this.loginSource,
        giftCodeSKUId: this.giftCodeSKUId
      })
    }), Y(this, "handleForgotPassword", async e => {
      null != e && e.preventDefault(), null != this.loginRef && this.loginRef.focus();
      let t = this.getFullLogin();
      this.setState({
        errors: {}
      });
      try {
        if (B.S.dispatch(V.CkL.WAVE_EMPHASIZE), !await f.Z.forgotPassword(t)) return;
        (0, h.h7j)(e => (0, i.jsx)(h.ConfirmModal, X(J({
          header: K.intl.string(K.t.f5Pi7O),
          confirmText: K.intl.string(K.t.BddRzc),
          confirmButtonColor: b.zx.Colors.BRAND,
          className: u.tq ? W.mobile : ""
        }, e), {
          children: (0, i.jsx)(h.Text, {
            variant: "text-md/normal",
            children: K.intl.format(K.t["6u5hQ0"], {
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
    }), Y(this, "handleResendCode", () => {
      C.Z.resendCode(this.getFullLogin())
    }), Y(this, "handleReset", e => {
      null != e && e.preventDefault(), f.Z.loginReset(), this.setState({
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
    }), Y(this, "handleCancelAccountDeletion", () => {
      this.setState({
        undelete: true
      }, this.handleLogin)
    }), Y(this, "handleGotoRegister", () => {
      let e, {
          login: t
        } = this.state,
        {
          invite: n,
          giftCode: r,
          guildTemplate: i,
          location: l,
          transitionTo: o,
          redirectTo: s
        } = this.props,
        a = null != l ? (0, c.parse)(l.search) : {};
      "" !== t && (a.email = t), null != n ? (a.mode = "register", e = V.Z5c.INVITE(n.code)) : null != r ? (a.mode = "register", e = V.Z5c.GIFT_CODE(r.code)) : null != i ? e = V.Z5c.GUILD_TEMPLATE(i.code) : null != s ? (e = V.Z5c.REGISTER, a.redirect_to = s) : e = V.Z5c.REGISTER, this.loginReset(), o(e, {
        search: (0, c.stringify)(a)
      }), B.S.dispatch(V.CkL.WAVE_EMPHASIZE)
    });
    let r = null != e.location ? (0, c.parse)(e.location.search) : {};
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
Y($, "defaultProps", {
  transitionTo: e => n.g.location.assign(e)
});
let ee = function(e) {
  let t = (0, d.cj)([L.Z, D.Z, w.default, N.Z, A.Z], () => ({
    authenticated: w.default.isAuthenticated(),
    handoffAvailable: L.Z.isHandoffAvailable(),
    user: L.Z.user,
    loginStatus: w.default.getLoginStatus(),
    mfaTicket: w.default.getMFATicket(),
    mfaMethods: w.default.getMFAMethods(),
    defaultRoute: D.Z.defaultRoute,
    country: A.Z.getCountryCode(),
    hasLoggedInAccounts: N.Z.getHasLoggedInAccounts()
  }));
  return (0, i.jsx)($, J({}, e, t))
}