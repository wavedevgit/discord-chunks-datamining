/** Chunk was on 27978 **/
/** chunk id: 781428, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Q,
  q: () => J
}), require("./35282.js");
var r, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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

function W(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function q(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      W(e, t, n[t])
    })
  }
  return e
}

function Y(e, t) {
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

function J() {
  return (0, Chunk255367.jsx)(Chunk388905.ZP, {
    children: (0, Chunk255367.jsx)(Chunk481060.$jN, {})
  })
}
class X extends(r = Chunk73800.PureComponent) {
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
    module && !exports ? (0, Chunk899742.is)() : exports && this.loginOrSSO(exports, Chunk255367, true), Chunk626135.default.track(Chunk981631.rMx.LOGIN_VIEWED, Y(q({
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
      redirecting: a
    } = this.state;
    if (!n || e.authenticated || l && (i || a) || (this.state.conditionalMediationAbortController.abort(), this.loginOrSSO(n, r)), t.errors !== this.state.errors) {
      var s, o, c;
      this.hasError("password") ? null == (s = this.passwordRef) || s.focus() : this.hasError("email") || this.hasError("login") ? null == (o = this.loginRef) || o.focus() : this.hasError("code") && (null == (c = this.codeRef) || c.focus())
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
    }), n ? p.Z.verifySSOToken("login").then(() => this.transitionSSO(t)) : this.transitionSSO(t))
  }
  transitionSSO(e) {
    let {
      transitionTo: t,
      redirectTo: n,
      replaceWith: r
    } = this.props, i = null != e ? (0, o.parse)(e.search) : {};
    if (delete i.redirect_to, null != n) null != r ? r(n) : t(n);
    else if (null == i.service) t(G.Z5c.APP);
    else {
      let e = window.location.protocol + window.GLOBAL_ENV.API_ENDPOINT + G.ANM.SSO,
        t = Y(q({}, i), {
          token: P.default.getToken()
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
    return (0, Chunk255367.jsxs)(Chunk388905.ZP, {
      className: module,
      children: [(0, Chunk255367.jsx)(Chunk388905.Hh, {}), (0, Chunk255367.jsx)(Chunk388905.Dx, {
        className: Chunk197571.marginBottom8,
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
        className: Chunk197571.marginBottom20
      }), (0, Chunk255367.jsx)(Chunk388905.Dx, {
        className: Chunk197571.marginBottom8,
        children: Chunk388032.intl.format(Chunk388032.t.ot19ho, {
          name: module.toString()
        })
      }), (0, Chunk255367.jsx)(Chunk388905.DK, {
        className: Chunk197571.marginBottom40,
        children: Chunk388032.intl.string(Chunk388032.t["2xkqzc"])
      }), (0, Chunk255367.jsxs)(Chunk388905.gO, {
        children: [(0, Chunk255367.jsx)(Chunk388905.zx, {
          onClick: () => exports(Chunk981631.Z5c.APP),
          className: Chunk197571.marginBottom8,
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
          className: Chunk197571.marginBottom8,
          children: require
        }),
        children: [(0, Chunk255367.jsx)(Chunk388905.DK, {
          className: Chunk197571.marginBottom20,
          children: r
        }), (0, Chunk255367.jsxs)(Chunk388905.gO, {
          children: [(0, Chunk255367.jsx)(Chunk388905.zx, {
            color: Chunk388905.zx.Colors.BRAND,
            type: "submit",
            children: Chunk388032.intl.string(Chunk388032.t.JhDw5u)
          }), (0, Chunk255367.jsx)("div", {
            className: s()(Chunk197571.marginTop8, Chunk132825.needAccount),
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
        className: Chunk197571.marginTop20,
        children: [(0, Chunk255367.jsx)(Chunk952802.Z, {
          className: Chunk197571.marginBottom20,
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
          className: Chunk197571.marginBottom20,
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
          className: Chunk197571.marginBottom8,
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
          className: Chunk197571.marginTop4,
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
        loginStatus: a,
        country: o,
        showMobileWebHandoff: c,
        disableAutofocusOnDefaultForm: u
      } = this.props,
      h = !this.hasError("email") && this.hasError("password"),
      p = (null == r ? true : r.stage_instance) != null;
    return n = null == r || p ? null != l ? (0, i.jsx)(M.Z, {
      giftCode: l
    }) : (0, i.jsxs)("div", {
      className: H.header,
      children: [(0, i.jsx)(_.Dx, {
        className: K.marginBottom8,
        children: V.intl.string(V.t["7fNJgI"])
      }, "title"), false === (0, k.isAndroidWeb)() ? (0, i.jsx)(_.DK, {
        children: V.intl.string(V.t.euS7r6)
      }, "subtitle") : null]
    }) : (0, i.jsx)(B.Z, {
      invite: r
    }), (0, i.jsxs)(b.Z, {
      direction: b.Z.Direction.HORIZONTAL,
      align: b.Z.Align.CENTER,
      children: [(0, i.jsxs)("div", {
        className: H.mainLoginContainer,
        children: [this.canShowChooseAccount && this.state.dismissedChooseAccount && (0, i.jsx)(_.zx, {
          onClick: () => {
            this.setState(e => Y(q({}, e), {
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
              children: V.intl.string(V.t["1MrpWF"])
            })]
          })
        }), n, (0, i.jsx)(d.y5t, {
          children: (0, i.jsxs)(_.gO, {
            className: K.marginTop20,
            children: [(0, i.jsx)(C.Z, {
              alpha2: o.alpha2,
              countryCode: o.code.split(" ")[0],
              className: K.marginBottom20,
              label: V.intl.string(V.t.tUjnxs),
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
              label: V.intl.string(V.t["CIGa+/"]),
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
              className: s()(K.marginBottom20, K.marginTop4),
              children: V.intl.string(V.t.wWIufn)
            }), (0, i.jsx)(_.zx, {
              type: "submit",
              submitting: a === G.u34.LOGGING_IN,
              color: p ? _.zx.Colors.GREEN : _.zx.Colors.BRAND,
              className: K.marginBottom8,
              children: p ? V.intl.string(V.t.wvVThI) : V.intl.string(V.t.dKhVQE)
            }), (0, i.jsxs)("div", {
              className: K.marginTop4,
              children: [(0, i.jsx)("span", {
                className: H.needAccount,
                children: V.intl.string(V.t.tmE73t)
              }), (0, i.jsx)(_.zx, {
                onClick: this.handleGotoRegister,
                look: _.zx.Looks.LINK,
                color: _.zx.Colors.LINK,
                className: H.smallRegisterLink,
                children: V.intl.string(V.t.pV8xeX)
              })]
            })]
          })
        })]
      }), (0, i.jsx)(d.y5t, {
        children: e ? (0, i.jsx)(U.Z, {
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
      className: Chunk132825.__invalid_pageContainer,
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
    return (0, i.jsx)(F.Z, {
      onSubmit: this.handleLogin,
      tag: "form",
      className: s()(this.props.authBoxClassName, H.horizontalAuthBox),
      children: () => [(0, i.jsx)(E.Z, {
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
    let e = () => {
      this.setState(e => Y(q({}, e), {
        dismissedChooseAccount: true
      }))
    };
    return (0, Chunk255367.jsx)(Chunk913583.Z, {
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
      checkingHandoff: a,
      redirecting: s
    } = this.state;
    if (s || Chunk120356) return (0, Chunk255367.jsx)(J, {});
    if (Chunk73800) return this.renderHandOffAvailable();
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
    super(e), W(this, "loginRef", true), W(this, "passwordRef", true), W(this, "codeRef", true), W(this, "handleAuthToken", async e => {
      this.setState({
        errors: {}
      }), await p.Z.loginToken(e, false), L.default.track(G.rMx.LOGIN_SUCCESSFUL, {
        source: G.uRl.QR_CODE,
        login_source: this.loginSource,
        gift_code_sku_id: this.giftCodeSKUId,
        is_new_user: false,
        login_method: "remote_auth"
      })
    }), W(this, "loginReset", () => {
      this.setState({
        errors: {}
      }), p.Z.loginReset()
    }), W(this, "setLoginRef", e => {
      this.loginRef = e
    }), W(this, "setPasswordRef", e => {
      this.passwordRef = e
    }), W(this, "setCodeRef", e => {
      this.codeRef = e
    }), W(this, "getFullLogin", () => {
      let {
        loginPrefix: e,
        login: t
      } = this.state;
      return e + t
    }), W(this, "renderError", e => {
      let {
        errors: t
      } = this.state;
      if (this.hasError(e)) {
        let n = t[e];
        return Array.isArray(n) ? n[0] : n
      }
      return null
    }), W(this, "handleLogin", async e => {
      let {
        password: t,
        undelete: n
      } = this.state;
      null == e || e.preventDefault(), D.S.dispatch(G.CkL.WAVE_EMPHASIZE), this.setState({
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
        let e = (0, f.p)(t);
        this.setState({
          errors: e
        })
      }
    }), W(this, "handleIPAuthorize", async e => {
      let t = this.getFullLogin();
      this.setState({
        errors: {}
      });
      try {
        let {
          token: n
        } = await N.Z.verifyPhone(t, e, false);
        await p.Z.authorizeIPAddress(n), this.handleLogin()
      } catch (e) {
        null != e.body && null != e.body.message && this.setState({
          phoneVerifyError: e.body.message
        })
      }
    }), W(this, "handlePasswordReset", async e => {
      let {
        transitionTo: t
      } = this.props;
      this.setState({
        phoneVerifyError: null
      });
      try {
        let {
          token: n
        } = await N.Z.verifyPhone(this.getFullLogin(), e, false);
        t(G.Z5c.RESET, {
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
    }), W(this, "handleTokenSubmitMFA", e => {
      let {
        mfaType: t,
        data: n,
        ticket: r
      } = e;
      return D.S.dispatch(G.CkL.WAVE_EMPHASIZE), p.Z.loginMFAv2({
        code: n,
        ticket: r,
        mfaType: t,
        source: this.loginSource,
        giftCodeSKUId: this.giftCodeSKUId
      })
    }), W(this, "handleForgotPassword", async e => {
      null != e && e.preventDefault(), null != this.loginRef && this.loginRef.focus();
      let t = this.getFullLogin();
      this.setState({
        errors: {}
      });
      try {
        if (D.S.dispatch(G.CkL.WAVE_EMPHASIZE), !await p.Z.forgotPassword(t)) return;
        (0, d.h7j)(e => (0, i.jsx)(d.ConfirmModal, Y(q({
          header: V.intl.string(V.t.f5Pi7O),
          confirmText: V.intl.string(V.t.BddRzc),
          confirmButtonColor: _.zx.Colors.BRAND,
          className: c.tq ? H.mobile : ""
        }, e), {
          children: (0, i.jsx)(d.Text, {
            variant: "text-md/normal",
            children: V.intl.format(V.t["6u5hQ0"], {
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
    }), W(this, "handleResendCode", () => {
      N.Z.resendCode(this.getFullLogin())
    }), W(this, "handleReset", e => {
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
    }), W(this, "handleCancelAccountDeletion", () => {
      this.setState({
        undelete: true
      }, this.handleLogin)
    }), W(this, "handleGotoRegister", () => {
      let e, {
          login: t
        } = this.state,
        {
          invite: n,
          giftCode: r,
          guildTemplate: i,
          location: l,
          transitionTo: a,
          redirectTo: s
        } = this.props,
        c = null != l ? (0, o.parse)(l.search) : {};
      "" !== t && (c.email = t), null != n ? (c.mode = "register", e = G.Z5c.INVITE(n.code)) : null != r ? (c.mode = "register", e = G.Z5c.GIFT_CODE(r.code)) : null != i ? e = G.Z5c.GUILD_TEMPLATE(i.code) : null != s ? (e = G.Z5c.REGISTER, c.redirect_to = s) : e = G.Z5c.REGISTER, this.loginReset(), a(e, {
        search: (0, o.stringify)(c)
      }), D.S.dispatch(G.CkL.WAVE_EMPHASIZE)
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
W(X, "defaultProps", {
  transitionTo: e => n.g.location.assign(e)
});
let Q = function(e) {
  let t = (0, u.cj)([R.Z, w.Z, P.default, y.Z, S.Z], () => ({
    authenticated: P.default.isAuthenticated(),
    handoffAvailable: R.Z.isHandoffAvailable(),
    user: R.Z.user,
    loginStatus: P.default.getLoginStatus(),
    mfaTicket: P.default.getMFATicket(),
    mfaMethods: P.default.getMFAMethods(),
    defaultRoute: w.Z.defaultRoute,
    country: S.Z.getCountryCode(),
    hasLoggedInAccounts: y.Z.getHasLoggedInAccounts()
  }));
  return (0, i.jsx)(X, q({}, e, t))
}