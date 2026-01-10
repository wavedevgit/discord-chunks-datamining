/** Chunk was on 27978 **/
/** chunk id: 423527, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => eu
}), require("./704826.js"), require("./35282.js"), require("./781311.js"), require("./388685.js"), require("./314940.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk593473 = require("./593473.js"),
  Chunk278074 = require("./278074.js"),
  Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk846519 = require("./846519.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk893776 = require("./893776.js"),
  Chunk881052 = require("./881052.js"),
  Chunk899370 = require("./899370.js"),
  Chunk224841 = require("./224841.jsx"),
  Chunk13430 = require("./13430.jsx"),
  Chunk213609 = require("./213609.js"),
  Chunk882037 = require("./882037.js"),
  Chunk254942 = require("./254942.js"),
  Chunk481230 = require("./481230.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk639946 = require("./639946.jsx"),
  Chunk616952 = require("./616952.jsx"),
  Chunk792766 = require("./792766.jsx"),
  Chunk692483 = require("./692483.js"),
  Chunk100159 = require("./100159.js"),
  Chunk473855 = require("./473855.jsx"),
  Chunk726745 = require("./726745.js"),
  Chunk929809 = require("./929809.js"),
  Chunk541692 = require("./541692.js"),
  Chunk986197 = require("./986197.js"),
  Chunk135200 = require("./135200.js"),
  Chunk219496 = require("./219496.js"),
  Chunk807369 = require("./807369.js"),
  Chunk180529 = require("./180529.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk108427 = require("./108427.js"),
  Chunk314897 = require("./314897.js"),
  Chunk480294 = require("./480294.js"),
  Chunk896797 = require("./896797.js"),
  Chunk626135 = require("./626135.js"),
  Chunk585483 = require("./585483.js"),
  Chunk70956 = require("./70956.js"),
  Chunk624138 = require("./624138.js"),
  Chunk481153 = require("./481153.jsx"),
  Chunk588705 = require("./588705.jsx"),
  Chunk163671 = require("./163671.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk355142 = require("./355142.js"),
  Chunk188785 = require("./188785.js"),
  Chunk701476 = require("./701476.js"),
  Chunk801461 = require("./801461.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk910388 = require("./910388.js"),
  Chunk478411 = require("./478411.js");

function es(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function ea(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      es(e, t, n[t])
    })
  }
  return e
}
Chunk442837.ZP.initialize();
let el = /\.$/,
  eo = e => Array.isArray(e) ? e.map(e => e.replace(el, "")).join(". ").trim() : e;
class ec extends(r = Chunk473749.PureComponent) {
  get registrationSource() {
    let {
      giftCode: e,
      guildTemplate: t,
      invite: n
    } = this.props;
    if (null != e) return "gift";
    if (null != t) return "guild_template";
    if (null != n) {
      if (null != n.guild) return "guild_invite";
      else if (null != n.channel) return "dm_invite";
      else if (null != n.inviter) return "friend_invite"
    }
    return null
  }
  hasConsent() {
    let {
      consentRequired: e
    } = this.props, {
      consent: t
    } = this.state;
    return null != e && t
  }
  componentDidMount() {
    this.redirectIfAuthenticated();
    let {
      giftCodeSKU: e,
      invite: t
    } = this.props;
    W.default.track(Q.rMx.REGISTER_VIEWED, ea({
      location: null != t ? "Invite Register Page" : "Non-Invite Register Page",
      registration_source: this.registrationSource
    }, null != e ? (0, T.Z)(e, false, false) : {}), {
      flush: true
    }), null == this.props.consentRequired && m.Z.getLocationMetadata(), (0, U.e)("register")
  }
  componentWillUnmount() {
    this._retryTimer.stop()
  }
  static getDerivedStateFromProps(e, t) {
    let {
      consentRequired: n
    } = e, {
      consentRequiredProp: r
    } = t;
    return null == r && null != n ? {
      consent: !n,
      consentRequiredProp: n
    } : {
      consentRequiredProp: n
    }
  }
  componentDidUpdate(e, t) {
    let {
      authenticated: n,
      isUnderage: r,
      onChangeStep: i
    } = this.props, {
      apiErrors: s,
      parsedDateOfBirth: a
    } = this.state;
    (t.apiErrors !== s || t.parsedDateOfBirth !== a) && (this.hasError("email") || this.hasError("phone") ? null != this.emailRef && this.emailRef.focus() : this.hasError("username") ? null != this.usernameRef && this.usernameRef.focus() : this.hasError("global_name") ? null != this.globalNameRef && this.globalNameRef.focus() : this.hasError("password") ? null != this.passwordRef && this.passwordRef.focus() : null == this.state.parsedDateOfBirth ? null != this.dateOfBirthRef.current && this.dateOfBirthRef.current.focus() : this.hasError("retry_after") && "number" == typeof s.retry_after && (this.setState({
      isRateLimited: true
    }), this._retryTimer.start(s.retry_after * K.Z.Millis.SECOND, () => {
      this.setState({
        isRateLimited: false
      })
    }))), n && !e.authenticated && ((0, P.c)(ee.M5.ORGANIC_REGISTERED), this.redirectIfAuthenticated());
    let l = X.EW.FULL;
    r || this.hasError("date_of_birth") ? l = X.EW.AGE_GATE : this.inGuildOrChannelInviteFlow() && (l = X.EW.INVITE), i(l)
  }
  inGuildOrChannelInviteFlow() {
    return null != this.props.invite && (null != this.props.invite.guild || null != this.props.invite.channel)
  }
  redirectIfAuthenticated() {
    let {
      authenticated: e,
      transitionTo: t,
      redirectTo: n
    } = this.props;
    e && t(null != n ? n : V.Z.defaultRoute)
  }
  async handleRegister() {
    let {
      email: e,
      username: t,
      globalName: n,
      password: r,
      consent: i,
      parsedDateOfBirth: s
    } = this.state, {
      invite: a,
      guildTemplate: l,
      giftCode: o,
      onRegister: c,
      usernameSuggestion: u
    } = this.props, d = null != a ? a.code : null, h = null != o ? o.skuId : null, f = b.MD.getState(), g = (0, z.Ew)(u) ? null : t === u, m = $.a ? await (0, O.K)(t) : t, x = $.a ? await (0, O.K)(n) : n;
    H.S.dispatch(Q.CkL.WAVE_EMPHASIZE), this.setState({
      registering: true,
      apiErrors: {}
    });
    try {
      this.inGuildOrChannelInviteFlow() ? await (0, I.ZP)({
        consent: i,
        invite: d,
        giftCodeSKUId: h,
        usedUsernameSuggestion: g,
        globalName: x,
        birthday: s
      }) : await (0, I.R$)({
        email: e,
        username: m,
        globalName: x,
        consent: i,
        password: r,
        invite: d,
        usedUsernameSuggestion: g,
        guildTemplateCode: null == l ? true : l.code,
        giftCodeSKUId: h,
        birthday: s,
        promoEmailConsent: f.required ? f : null
      }), null == c || c()
    } catch (t) {
      if (this.setState({
          registering: false
        }), !(t instanceof p.Hx)) return;
      let e = (0, j.F)(t);
      this.setState({
        apiErrors: e
      })
    }
  }
  hasError(e) {
    return null != this.state.apiErrors[e]
  }
  renderConsentComponent() {
    let {
      consent: e
    } = this.state, {
      consentRequired: t
    } = this.props;
    return t ? (0, i.jsx)("div", {
      className: er.consentBox,
      children: (0, i.jsx)(g.Cnq, {
        label: en.intl.format(en.t.qMDAP0, {
          termsURL: Q.EYA.TERMS,
          privacyURL: Q.EYA.PRIVACY
        }),
        checked: e,
        onChange: e => this.setState({
          consent: e
        }),
        labelType: "secondary"
      })
    }) : (0, i.jsx)(g.Text, {
      variant: "text-sm/normal",
      color: "text-subtle",
      className: l()(ei.marginTop8, er.consentSubText),
      children: en.intl.format(en.t["KI+BSb"], {
        termsURL: Q.EYA.TERMS,
        privacyURL: Q.EYA.PRIVACY
      })
    })
  }
  renderInviteResolving() {
    let {
      authBoxClassName: e
    } = this.props, t = e => {
      this.setState({
        globalName: e
      })
    }, n = this.state.globalName;
    return (0, i.jsxs)(N.ZP, {
      className: e,
      children: [(0, i.jsx)(Y.R, {}), (0, i.jsxs)(N.gO, {
        className: er.authBlock,
        children: [(0, i.jsx)(f.u, {
          text: en.intl.string(en.t["hBB85/"]),
          position: "right",
          children: (0, i.jsx)(N.II, {
            label: en.intl.string(en.t["9AjdkD"]),
            autoFocus: true,
            className: ei.marginBottom8,
            name: "username",
            value: n,
            placeholder: en.intl.string(en.t["09Q8yp"]),
            onChange: t,
            onFocus: () => this.trackInputFocus("username"),
            onBlur: () => this.trackInputBlur("username")
          })
        }), (0, i.jsx)(g.Text, {
          variant: "text-sm/normal",
          color: "text-subtle",
          className: l()(ei.marginTop20, er.consentSubText),
          children: en.intl.format(en.t["KI+BSb"], {
            termsURL: Q.EYA.TERMS,
            privacyURL: Q.EYA.PRIVACY
          })
        }), (0, i.jsx)("div", {
          className: ei.marginTop8,
          children: (0, i.jsx)(g.Button, {
            text: en.intl.string(en.t["825cFy"]),
            variant: "primary",
            fullWidth: true,
            disabled: true
          })
        }), $.a ? null : (0, i.jsx)("div", {
          className: ei.marginTop20,
          children: (0, i.jsx)(g.Avr, {
            text: en.intl.string(en.t["1lWxux"]),
            textVariant: "text-sm/normal",
            disabled: true
          })
        })]
      })]
    })
  }
  renderInviteHeader() {
    let {
      invite: e
    } = this.props;
    return (null == e ? true : e.guild_scheduled_event) != null ? (0, i.jsx)(y.r, {
      channel: e.channel,
      guildScheduledEvent: e.guild_scheduled_event
    }) : (0, i.jsx)("div", {
      className: ei.marginBottom24,
      children: (0, i.jsx)(Y.Z, {
        invite: e,
        inUnclaimedFlow: true
      })
    })
  }
  renderInviteButton() {
    let {
      consentRequired: e
    } = this.props, {
      consent: t,
      registering: n
    } = this.state, r = en.intl.string(en.t["825cFy"]);
    return (0, i.jsx)(f.u, {
      text: !t && e ? en.intl.string(en.t.AY4IVA) : null,
      children: (0, i.jsx)("div", {
        className: ei.marginTop8,
        children: (0, i.jsx)(g.Button, {
          text: r,
          variant: "primary",
          fullWidth: true,
          type: "submit",
          loading: n,
          disabled: !this.hasConsent()
        })
      })
    })
  }
  renderInvite() {
    let {
      invite: e,
      authBoxClassName: t
    } = this.props, {
      apiErrors: {
        username: n,
        global_name: r,
        date_of_birth: s
      },
      globalName: a,
      globalNameClientError: l,
      dateOfBirthClientError: o,
      parsedDateOfBirth: c
    } = this.state, u = (null == e ? true : e.guild_scheduled_event) != null, d = e => {
      this.setState({
        globalName: e
      })
    };
    return (0, i.jsxs)("div", {
      children: [(0, i.jsxs)(N.ZP, {
        onSubmit: this.handleSubmit,
        tag: "form",
        className: t,
        children: [this.renderInviteHeader(), u ? (0, i.jsx)("div", {
          className: er.divider
        }) : null, (0, i.jsxs)(N.gO, {
          className: u ? true : er.authBlock,
          children: [(0, i.jsx)(g.oil, {
            helperText: en.intl.string(en.t["330TCc"]),
            label: en.intl.string(en.t["9AjdkD"]),
            error: null != l ? l : eo(null != r ? r : n),
            autoFocus: true,
            name: "global_name",
            value: a,
            placeholder: en.intl.string(en.t["09Q8yp"]),
            onChange: d,
            onFocus: () => {
              this.setState({
                globalNameFocused: true
              }), this.trackInputFocus("global_name")
            },
            onBlur: () => {
              this.setState({
                globalNameFocused: false
              }), this.trackInputBlur("global_name")
            }
          }), $.a ? null : (0, i.jsx)(E.Z, {
            label: en.intl.string(en.t.rhBeKe),
            wrapperClassName: er.inviteBirthdayInput,
            name: "date_of_birth",
            onChange: this.handleBirthdayChange,
            ref: this.dateOfBirthRef,
            error: null != o ? o : eo(s),
            value: c
          }), this.renderConsentComponent(), this.renderInviteButton(), $.a ? null : (0, i.jsx)("div", {
            className: ei.marginTop20,
            children: (0, i.jsx)(g.Avr, {
              text: en.intl.string(en.t["1lWxux"]),
              textVariant: "text-sm/normal",
              onClick: this.handleGotoLogin
            })
          })]
        })]
      }), null != e && u ? (0, i.jsx)(N.ZP, {
        className: ei.marginTop20,
        children: (0, i.jsx)(C.y, {
          guild: e.guild,
          onlineCount: e.approximate_presence_count
        })
      }) : null]
    })
  }
  renderErrorMessage() {
    let {
      apiErrors: {
        message: e
      }
    } = this.state;
    return "string" != typeof e ? null : (0, i.jsx)(N.i_, {
      className: l()(ei.marginTop20, er.errorMessage),
      children: e
    })
  }
  renderFull(e, t) {
    let {
      email: n,
      username: r,
      globalName: a,
      password: o,
      consent: c,
      parsedDateOfBirth: u,
      globalNameFocused: d,
      emailClientError: h,
      usernameClientError: m,
      passwordClientError: p,
      dateOfBirthClientError: x,
      registering: _,
      apiErrors: {
        email: v,
        username: b,
        global_name: j,
        password: I,
        date_of_birth: y
      } = {}
    } = this.state, {
      consentRequired: C,
      authBoxClassName: O,
      hasLoggedInAccounts: T
    } = this.props, A = this.renderErrorMessage(), Z = (0, i.jsx)(f.u, {
      text: !c && C ? en.intl.string(en.t.AY4IVA) : null,
      children: (0, i.jsx)("div", {
        className: ei.marginTop20,
        children: (0, i.jsx)(g.Button, {
          text: en.intl.string(en.t["825cFy"]),
          variant: "primary",
          fullWidth: true,
          type: "submit",
          loading: _,
          disabled: !this.hasConsent() || this.state.isRateLimited
        })
      })
    }), P = async () => {
      this.setState({
        usernameFocused: true
      }), a.length > 0 && !D.Z.wasRegistrationSuggestionFetched(a) && await L.Z.fetchSuggestionsRegistration(a)
    }, R = e => {
      this.setState({
        username: e.toLocaleLowerCase(),
        usernameClientError: 0 === e.length ? en.intl.string(en.t.EkokLy) : null
      })
    }, k = null != e ? (0, i.jsx)(s.Fragment, {
      children: e()
    }, "custom-header") : (0, i.jsx)(N.Dx, {
      children: en.intl.string(en.t.wC4TlR)
    }, "title"), w = (0, i.jsxs)(N.gO, {
      className: ei.marginTop20,
      children: [(0, i.jsx)(N.II, {
        autoFocus: true,
        className: ei.marginBottom20,
        label: en.intl.string(en.t.dI4d4S),
        name: "email",
        value: n,
        onChange: e => this.setState({
          email: e,
          emailClientError: 0 === e.length ? en.intl.string(en.t.EkokLy) : null
        }),
        error: null != h ? h : eo(v),
        type: "email",
        autoComplete: "username",
        setRef: e => {
          this.emailRef = e
        },
        required: true,
        onFocus: () => this.trackInputFocus("email"),
        onBlur: () => this.trackInputBlur("email")
      }), (0, i.jsx)(N.II, {
        label: en.intl.string(en.t["9AjdkD"]),
        className: ei.marginBottom20,
        name: "global_name",
        value: a,
        onChange: e => this.setState({
          globalName: e
        }),
        error: eo(j),
        maxLength: et.hy,
        autoComplete: "off",
        setRef: e => {
          this.globalNameRef = e
        },
        onFocus: () => {
          this.setState({
            globalNameFocused: true
          }), this.trackInputFocus("global_name")
        },
        onBlur: () => {
          this.setState({
            globalNameFocused: false
          }), this.trackInputBlur("global_name")
        }
      }), (0, i.jsx)(M.Z, {
        show: d,
        top: false,
        bottom: 20,
        children: (0, i.jsx)(g.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: en.intl.string(en.t["330TCc"])
        })
      }), (0, i.jsxs)("div", {
        onBlur: () => this.setState({
          usernameFocused: false
        }),
        onFocus: P,
        tabIndex: false,
        children: [(0, i.jsx)(N.II, {
          label: en.intl.string(en.t.TWzdWj),
          className: ei.marginBottom20,
          name: "username",
          value: r,
          onChange: R,
          error: null != m ? m : eo(b),
          autoComplete: "off",
          setRef: e => {
            this.usernameRef = e
          },
          required: true,
          onFocus: () => this.trackInputFocus("username"),
          onBlur: () => this.trackInputBlur("username")
        }), this.renderUsernameValidation()]
      }), (0, i.jsx)(N.II, {
        label: en.intl.string(en.t["CIGa+7"]),
        name: "password",
        value: o,
        onChange: e => this.setState({
          password: e,
          passwordClientError: 0 === e.length ? en.intl.string(en.t.EkokLy) : null
        }),
        error: null != p ? p : eo(I),
        type: "password",
        autoComplete: "new-password",
        setRef: e => {
          this.passwordRef = e
        },
        required: true,
        onFocus: () => this.trackInputFocus("password"),
        onBlur: () => this.trackInputBlur("password")
      }), (0, i.jsx)(E.Z, {
        label: en.intl.string(en.t.rhBeKe),
        wrapperClassName: er.birthdayInput,
        name: "date_of_birth",
        onChange: this.handleBirthdayChange,
        ref: this.dateOfBirthRef,
        error: null != x ? x : eo(y),
        value: u,
        required: true,
        onFocus: this.trackInputFocus,
        onBlur: this.trackInputBlur
      }), (0, i.jsx)(S.Z, {}), this.renderConsentComponent(), Z, A, $.a ? null : (0, i.jsx)("div", {
        className: ei.marginTop20,
        children: (0, i.jsx)(g.Avr, {
          text: en.intl.string(en.t["1lWxux"]),
          textVariant: "text-sm/normal",
          onClick: this.handleGotoLogin
        })
      })]
    });
    return t ? (0, i.jsx)(J.Z, {
      onSubmit: this.handleSubmit,
      tag: "form",
      className: l()(O, er.horizontalAuthBox),
      children: () => [k, (0, i.jsxs)("div", {
        className: er.flex,
        children: [(0, i.jsx)(N.Dx, {
          className: er.createAccountTemplateHeader,
          children: en.intl.string(en.t.wC4TlR)
        }), w]
      }, "register-title")]
    }) : (0, i.jsxs)(N.ZP, {
      onSubmit: this.handleSubmit,
      tag: "form",
      className: O,
      children: [T ? (0, i.jsx)("div", {
        className: er.goBackButton,
        children: (0, i.jsx)(g.Button, {
          onClick: this.handleGotoLogin,
          variant: "secondary",
          text: en.intl.string(en.t["1MrpWO"]),
          icon: g.V7D,
          iconPosition: "start"
        })
      }) : null, k, w]
    })
  }
  render() {
    let {
      isUnderage: e
    } = this.props, t = this.inGuildOrChannelInviteFlow();
    if (e || this.hasError("date_of_birth")) return (0, i.jsx)(_.Z, {});
    let {
      giftCode: n,
      invite: r,
      guildTemplate: s
    } = this.props, a = null != r && null == r.guild && null == r.channel && null != r.inviter;
    return null != r && t ? r.state === Q.r2o.RESOLVING ? this.renderInviteResolving() : this.renderInvite() : null != s ? this.renderFull(() => (0, i.jsx)(A.Z, {
      guildTemplate: s
    }), true) : null != n ? this.renderFull(() => (0, i.jsx)(q.Z, {
      giftCode: n
    })) : null != r && a && r.state === Q.r2o.RESOLVED ? this.renderFull(() => (0, i.jsx)("div", {
      className: ei.marginBottom24,
      children: (0, i.jsx)(Y.Z, {
        invite: r,
        isRegister: true
      })
    })) : this.renderFull()
  }
  constructor(e) {
    var t;
    super(e), es(this, "emailRef", true), es(this, "usernameRef", true), es(this, "globalNameRef", true), es(this, "passwordRef", true), es(this, "dateOfBirthRef", s.createRef()), es(this, "_retryTimer", new h.V7), es(this, "handleGotoLogin", e => {
      let t, {
          email: n
        } = this.state,
        {
          giftCode: r,
          guildTemplate: i,
          invite: s,
          location: a,
          onLoginStart: l,
          redirectTo: c,
          transitionTo: u
        } = this.props,
        d = null != a ? (0, o.parse)(a.search) : {};
      null != s ? t = Q.Z5c.INVITE_LOGIN(s.code) : null != r ? t = Q.Z5c.GIFT_CODE_LOGIN(r.code) : null != i ? t = Q.Z5c.GUILD_TEMPLATE_LOGIN(i.code) : null != c ? (t = Q.Z5c.LOGIN, d.redirect_to = c) : (t = Q.Z5c.LOGIN, "" !== n && (d = {
        email: n
      })), m.Z.loginReset(), u(t, {
        search: (0, o.stringify)(d),
        source: "register"
      }), null == l || l(e), H.S.dispatch(Q.CkL.WAVE_EMPHASIZE)
    }), es(this, "handleSubmit", e => {
      null == e || e.preventDefault();
      let {
        email: t,
        username: n,
        password: r,
        parsedDateOfBirth: i,
        globalName: s
      } = this.state, {
        consentRequired: a
      } = this.props;
      if (null === a) return;
      let l = this.inGuildOrChannelInviteFlow(),
        o = false;
      l ? (0 === s.length && (this.setState({
        globalNameClientError: en.intl.string(en.t.EkokLy)
      }), o = true), null != i || $.a || (this.setState({
        dateOfBirthClientError: en.intl.string(en.t.EkokLy)
      }), o = true)) : (0 === t.length && (this.setState({
        emailClientError: en.intl.string(en.t.EkokLy)
      }), o = true), 0 === n.length && (this.setState({
        usernameClientError: en.intl.string(en.t.EkokLy)
      }), o = true), 0 === r.length && (this.setState({
        passwordClientError: en.intl.string(en.t.EkokLy)
      }), o = true), null == i && (this.setState({
        dateOfBirthClientError: en.intl.string(en.t.EkokLy)
      }), o = true)), o || this.handleRegister()
    }), es(this, "trackInputFocus", e => {
      W.default.track(Q.rMx.REGISTER_INPUT_FOCUS, {
        field: e
      })
    }), es(this, "trackInputBlur", e => {
      W.default.track(Q.rMx.REGISTER_INPUT_BLUR, {
        field: e
      })
    }), es(this, "handleBirthdayChange", e => {
      this.setState({
        parsedDateOfBirth: e
      }), null != e && this.setState({
        dateOfBirthClientError: null
      })
    }), es(this, "renderUsernameValidation", () => {
      let {
        username: e,
        globalName: t,
        usernameFocused: n
      } = this.state, {
        usernameSuggestion: r
      } = this.props, s = () => {
        null != this.usernameRef && this.usernameRef.focus(), null != r && r.length > 0 && this.setState({
          username: r
        })
      };
      return (0, i.jsx)(ed, {
        username: e,
        suggestion: r,
        globalName: t,
        isUsernameFocused: n,
        onClickSuggestion: s
      })
    });
    let n = null != e.location ? (0, o.parse)(e.location.search) : {};
    this.state = {
      email: null != (t = n.email) ? t : "",
      username: "",
      globalName: "",
      password: "",
      parsedDateOfBirth: null,
      emailClientError: null,
      usernameClientError: null,
      passwordClientError: null,
      dateOfBirthClientError: null,
      globalNameClientError: null,
      consent: !e.consentRequired,
      consentRequiredProp: e.consentRequired,
      isRateLimited: false,
      globalNameFocused: false,
      usernameFocused: false,
      registering: false,
      apiErrors: {}
    }
  }
}

function eu(e) {
  let t = (0, d.cj)([F.Z, G.default, x.Z, R.Z, Z.Z], () => ({
      consentRequired: F.Z.getAuthenticationConsentRequired(),
      authenticated: G.default.isAuthenticated(),
      isUnderage: x.Z.isUnderageAnonymous(),
      country: R.Z.getCountryCode(),
      hasLoggedInAccounts: Z.Z.getHasLoggedInAccounts()
    })),
    n = (0, d.e7)([D.Z], () => D.Z.registrationUsernameSuggestion()),
    [r, a] = s.useState(X.EW.FULL);
  return (0, v.Z)({
    type: u.ImpressionTypes.VIEW,
    name: u.ImpressionNames.USER_REGISTRATION,
    properties: {
      impression_group: u.ImpressionGroups.USER_REGISTRATION_FLOW,
      step: r
    }
  }, {}, [r]), (0, i.jsx)(ec, ea({
    onChangeStep: e => a(e),
    usernameSuggestion: n
  }, e, t))
}

function ed(e) {
  let t, {
      username: n,
      suggestion: r,
      globalName: s,
      isUsernameFocused: a,
      onClickSuggestion: l
    } = e,
    o = (0, w.a)(n, true, true),
    u = n.length > 0;
  return t = u ? (0, c.EQ)(o).with({
    type: k.K.ERROR,
    message: c.P.select()
  }, e => (0, i.jsx)(g.Text, {
    className: er.messageNegative,
    variant: "text-sm/normal",
    children: e
  })).with({
    type: k.K.AVAILABLE,
    message: c.P.select()
  }, e => (0, i.jsx)(g.Text, {
    className: er.messagePositive,
    variant: "text-sm/normal",
    children: e
  })).otherwise(() => (0, i.jsx)(g.Text, {
    variant: "text-sm/normal",
    color: "text-default",
    children: en.intl.string(en.t.z7c4bP)
  })) : null != r && r.length > 0 && s.length > 0 ? (0, i.jsx)(g.Text, {
    variant: "text-sm/normal",
    color: "text-default",
    children: en.intl.format(en.t.nDGqqq, {
      suggestion: r,
      nameOnClick: l
    })
  }) : (0, i.jsx)(g.Text, {
    variant: "text-sm/normal",
    color: "text-default",
    children: en.intl.string(en.t.z7c4bP)
  }), (0, i.jsx)(M.Z, {
    show: u && (null == o ? true : o.type) === k.K.ERROR || a,
    top: false,
    bottom: 20,
    children: t
  })
}
es(ec, "defaultProps", {
  giftCodeResolved: false,
  transitionTo: Chunk703656.uL
})