/** Chunk was on 27978 **/
/** chunk id: 423527, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => ed
}), require("./704826.js"), require("./35282.js"), require("./781311.js"), require("./388685.js"), require("./314940.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk853268 = require("./853268.jsx"),
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
  Chunk33724 = require("./33724.js"),
  Chunk197571 = require("./197571.js");

function el(e, t, n) {
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
      el(e, t, n[t])
    })
  }
  return e
}
Chunk442837.ZP.initialize();
let eo = /\.$/,
  ec = e => Array.isArray(e) ? e.map(e => e.replace(eo, "")).join(". ").trim() : e;
class eu extends(r = Chunk473749.PureComponent) {
  get registrationSource() {
    let {
      giftCode: e,
      guildTemplate: t,
      invite: n
    } = this.props;
    if (null != module) return "gift";
    if (null != exports) return "guild_template";
    if (null != require) {
      if (null != require.guild) return "guild_invite";
      else if (null != require.channel) return "dm_invite";
      else if (null != require.inviter) return "friend_invite"
    }
    return null
  }
  hasConsent() {
    let {
      consentRequired: e
    } = this.props, {
      consent: t
    } = this.state;
    return null != module && exports
  }
  componentDidMount() {
    this.redirectIfAuthenticated();
    let {
      giftCodeSKU: e,
      invite: t
    } = this.props;
    Chunk626135.default.track(Chunk981631.rMx.REGISTER_VIEWED, ea({
      location: null != exports ? "Invite Register Page" : "Non-Invite Register Page",
      registration_source: this.registrationSource
    }, null != module ? (0, Chunk100159.Z)(module, false, false) : {}), {
      flush: true
    }), null == this.props.consentRequired && Chunk893776.Z.getLocationMetadata(), (0, Chunk108427.e)("register")
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
      parsedDateOfBirth: l
    } = this.state;
    (t.apiErrors !== s || t.parsedDateOfBirth !== l) && (this.hasError("email") || this.hasError("phone") ? null != this.emailRef && this.emailRef.focus() : this.hasError("username") ? null != this.usernameRef && this.usernameRef.focus() : this.hasError("global_name") ? null != this.globalNameRef && this.globalNameRef.focus() : this.hasError("password") ? null != this.passwordRef && this.passwordRef.focus() : null == this.state.parsedDateOfBirth ? null != this.dateOfBirthRef.current && this.dateOfBirthRef.current.focus() : this.hasError("retry_after") && "number" == typeof s.retry_after && (this.setState({
      isRateLimited: true
    }), this._retryTimer.start(s.retry_after * z.Z.Millis.SECOND, () => {
      this.setState({
        isRateLimited: false
      })
    }))), n && !e.authenticated && ((0, R.c)(et.M5.ORGANIC_REGISTERED), this.redirectIfAuthenticated());
    let a = $.EW.FULL;
    r || this.hasError("date_of_birth") ? a = $.EW.AGE_GATE : this.inGuildOrChannelInviteFlow() && (a = $.EW.INVITE), i(a)
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
    module && exports(null != require ? require : Chunk896797.Z.defaultRoute)
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
      invite: l,
      guildTemplate: a,
      giftCode: o,
      onRegister: c,
      usernameSuggestion: u
    } = this.props, d = null != Chunk120356 ? Chunk120356.code : null, h = null != Chunk593473 ? Chunk593473.skuId : null, g = Chunk882037.MD.getState(), m = (0, Chunk624138.Ew)(Chunk990547) ? null : exports === Chunk990547, p = Chunk188785.a ? await (0, Chunk692483.K)(exports) : exports, _ = Chunk188785.a ? await (0, Chunk692483.K)(require) : require;
    Chunk585483.S.dispatch(Chunk981631.CkL.WAVE_EMPHASIZE), this.setState({
      registering: true,
      apiErrors: {}
    });
    try {
      this.inGuildOrChannelInviteFlow() ? await (0, Chunk481230.ZP)({
        consent: Chunk54381,
        invite: Chunk442837,
        giftCodeSKUId: Chunk846519,
        usedUsernameSuggestion: Chunk481060,
        globalName: Chunk899370,
        birthday: Chunk473749
      }) : await (0, Chunk481230.R$)({
        email: module,
        username: Chunk893776,
        globalName: Chunk899370,
        consent: Chunk54381,
        password: r,
        invite: Chunk442837,
        usedUsernameSuggestion: Chunk481060,
        guildTemplateCode: null == a ? true : a.code,
        giftCodeSKUId: Chunk846519,
        birthday: Chunk473749,
        promoEmailConsent: Chunk28664.required ? Chunk28664 : null
      }), null == Chunk278074 || Chunk278074()
    } catch (t) {
      if (this.setState({
          registering: false
        }), !(exports instanceof Chunk881052.Hx)) return;
      let e = (0, Chunk254942.F)(exports);
      this.setState({
        apiErrors: module
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
    return exports ? (0, Chunk54381.jsx)(Chunk853268.default, {
      value: module,
      onChange: e => this.setState({
        consent: e
      }),
      subText: Chunk388032.intl.format(Chunk388032.t.qMDAP0, {
        termsURL: Chunk981631.EYA.TERMS,
        privacyURL: Chunk981631.EYA.PRIVACY
      }),
      marginTopStyle: Chunk33724.consentBox,
      subtextClassName: Chunk33724.consentSubText
    }) : (0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-sm/normal",
      color: "text-subtle",
      className: a()(Chunk197571.marginTop8, Chunk33724.consentSubText),
      children: Chunk388032.intl.format(Chunk388032.t["KI+BSb"], {
        termsURL: Chunk981631.EYA.TERMS,
        privacyURL: Chunk981631.EYA.PRIVACY
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
    return (0, Chunk54381.jsxs)(Chunk388905.ZP, {
      className: module,
      children: [(0, Chunk54381.jsx)(Chunk588705.R, {}), (0, Chunk54381.jsxs)(Chunk388905.gO, {
        className: Chunk33724.authBlock,
        children: [(0, Chunk54381.jsx)(Chunk28664.u, {
          text: Chunk388032.intl.string(Chunk388032.t["hBB85/"]),
          position: "right",
          children: (0, Chunk54381.jsx)(Chunk388905.II, {
            label: Chunk388032.intl.string(Chunk388032.t["9AjdkD"]),
            autoFocus: true,
            className: Chunk197571.marginBottom8,
            name: "username",
            value: require,
            placeholder: Chunk388032.intl.string(Chunk388032.t["09Q8yp"]),
            onChange: exports,
            onFocus: () => this.trackInputFocus("username"),
            onBlur: () => this.trackInputBlur("username")
          })
        }), (0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-sm/normal",
          color: "text-subtle",
          className: a()(Chunk197571.marginTop20, Chunk33724.consentSubText),
          children: Chunk388032.intl.format(Chunk388032.t["KI+BSb"], {
            termsURL: Chunk981631.EYA.TERMS,
            privacyURL: Chunk981631.EYA.PRIVACY
          })
        }), (0, Chunk54381.jsx)("div", {
          className: Chunk197571.marginTop8,
          children: (0, Chunk54381.jsx)(Chunk481060.Button, {
            text: Chunk388032.intl.string(Chunk388032.t["825cFy"]),
            variant: "primary",
            fullWidth: true,
            disabled: true
          })
        }), Chunk188785.a ? null : (0, Chunk54381.jsx)("div", {
          className: Chunk197571.marginTop20,
          children: (0, Chunk54381.jsx)(Chunk481060.Avr, {
            text: Chunk388032.intl.string(Chunk388032.t["1lWxux"]),
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
    return (null == module ? true : module.guild_scheduled_event) != null ? (0, Chunk54381.jsx)(Chunk639946.r, {
      channel: module.channel,
      guildScheduledEvent: module.guild_scheduled_event
    }) : (0, Chunk54381.jsx)(Chunk588705.Z, {
      invite: module,
      inUnclaimedFlow: true
    })
  }
  renderInviteButton() {
    let {
      consentRequired: e
    } = this.props, {
      consent: t,
      registering: n
    } = this.state, r = Chunk388032.intl.string(Chunk388032.t["825cFy"]);
    return (0, Chunk54381.jsx)(Chunk28664.u, {
      text: !exports && module ? Chunk388032.intl.string(Chunk388032.t.AY4IVA) : null,
      children: (0, Chunk54381.jsx)("div", {
        className: Chunk197571.marginTop8,
        children: (0, Chunk54381.jsx)(Chunk481060.Button, {
          text: r,
          variant: "primary",
          fullWidth: true,
          type: "submit",
          loading: require,
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
      globalName: l,
      globalNameClientError: a,
      dateOfBirthClientError: o,
      parsedDateOfBirth: c
    } = this.state, u = (null == module ? true : module.guild_scheduled_event) != null, d = e => {
      this.setState({
        globalName: e
      })
    };
    return (0, Chunk54381.jsxs)("div", {
      children: [(0, Chunk54381.jsxs)(Chunk388905.ZP, {
        onSubmit: this.handleSubmit,
        tag: "form",
        className: exports,
        children: [this.renderInviteHeader(), Chunk990547 ? (0, Chunk54381.jsx)("div", {
          className: Chunk33724.divider
        }) : null, (0, Chunk54381.jsxs)(Chunk388905.gO, {
          className: Chunk990547 ? true : Chunk33724.authBlock,
          children: [(0, Chunk54381.jsx)(Chunk481060.oil, {
            helperText: Chunk388032.intl.string(Chunk388032.t["330TCc"]),
            label: Chunk388032.intl.string(Chunk388032.t["9AjdkD"]),
            error: null != a ? a : ec(null != r ? r : require),
            autoFocus: true,
            name: "global_name",
            value: Chunk120356,
            placeholder: Chunk388032.intl.string(Chunk388032.t["09Q8yp"]),
            onChange: Chunk442837,
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
          }), Chunk188785.a ? null : (0, Chunk54381.jsx)(Chunk13430.Z, {
            label: Chunk388032.intl.string(Chunk388032.t.rhBeKe),
            wrapperClassName: Chunk33724.inviteBirthdayInput,
            name: "date_of_birth",
            onChange: this.handleBirthdayChange,
            ref: this.dateOfBirthRef,
            error: null != Chunk593473 ? Chunk593473 : ec(Chunk473749),
            value: Chunk278074
          }), this.renderConsentComponent(), this.renderInviteButton(), Chunk188785.a ? null : (0, Chunk54381.jsx)("div", {
            className: Chunk197571.marginTop20,
            children: (0, Chunk54381.jsx)(Chunk481060.Avr, {
              text: Chunk388032.intl.string(Chunk388032.t["1lWxux"]),
              textVariant: "text-sm/normal",
              onClick: this.handleGotoLogin
            })
          })]
        })]
      }), null != module && Chunk990547 ? (0, Chunk54381.jsx)(Chunk388905.ZP, {
        className: Chunk197571.marginTop20,
        children: (0, Chunk54381.jsx)(Chunk792766.y, {
          guild: module.guild,
          onlineCount: module.approximate_presence_count
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
    return "string" != typeof module ? null : (0, Chunk54381.jsx)(Chunk388905.i_, {
      className: a()(Chunk197571.marginTop20, Chunk33724.errorMessage),
      children: module
    })
  }
  renderFull(e, t) {
    let {
      email: n,
      username: r,
      globalName: l,
      password: o,
      consent: c,
      parsedDateOfBirth: u,
      globalNameFocused: d,
      emailClientError: h,
      usernameClientError: p,
      passwordClientError: f,
      dateOfBirthClientError: _,
      registering: x,
      apiErrors: {
        email: v,
        username: j,
        global_name: b,
        password: I,
        date_of_birth: y
      } = {}
    } = this.state, {
      consentRequired: S,
      authBoxClassName: O,
      hasLoggedInAccounts: T
    } = this.props, A = this.renderErrorMessage(), Z = (0, i.jsx)(g.u, {
      text: !c && S ? er.intl.string(er.t.AY4IVA) : null,
      children: (0, i.jsx)("div", {
        className: es.marginTop20,
        children: (0, i.jsx)(m.Button, {
          text: er.intl.string(er.t["825cFy"]),
          variant: "primary",
          fullWidth: true,
          type: "submit",
          loading: x,
          disabled: !this.hasConsent() || this.state.isRateLimited
        })
      })
    }), P = async () => {
      this.setState({
        usernameFocused: true
      }), l.length > 0 && !D.Z.wasRegistrationSuggestionFetched(l) && await w.Z.fetchSuggestionsRegistration(l)
    }, R = e => {
      this.setState({
        username: e.toLocaleLowerCase(),
        usernameClientError: 0 === e.length ? er.intl.string(er.t.EkokLy) : null
      })
    }, L = null != e ? (0, i.jsx)(s.Fragment, {
      children: e()
    }, "custom-header") : (0, i.jsx)(N.Dx, {
      children: er.intl.string(er.t.wC4TlR)
    }, "title"), k = (0, i.jsxs)(N.gO, {
      className: es.marginTop20,
      children: [(0, i.jsx)(N.II, {
        autoFocus: true,
        className: es.marginBottom20,
        label: er.intl.string(er.t.dI4d4S),
        name: "email",
        value: n,
        onChange: e => this.setState({
          email: e,
          emailClientError: 0 === e.length ? er.intl.string(er.t.EkokLy) : null
        }),
        error: null != h ? h : ec(v),
        type: "email",
        autoComplete: "username",
        setRef: e => {
          this.emailRef = e
        },
        required: true,
        onFocus: () => this.trackInputFocus("email"),
        onBlur: () => this.trackInputBlur("email")
      }), (0, i.jsx)(N.II, {
        label: er.intl.string(er.t["9AjdkD"]),
        className: es.marginBottom20,
        name: "global_name",
        value: l,
        onChange: e => this.setState({
          globalName: e
        }),
        error: ec(b),
        maxLength: en.hy,
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
      }), (0, i.jsx)(B.Z, {
        show: d,
        top: false,
        bottom: 20,
        children: (0, i.jsx)(m.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: er.intl.string(er.t["330TCc"])
        })
      }), (0, i.jsxs)("div", {
        onBlur: () => this.setState({
          usernameFocused: false
        }),
        onFocus: P,
        tabIndex: false,
        children: [(0, i.jsx)(N.II, {
          label: er.intl.string(er.t.TWzdWj),
          className: es.marginBottom20,
          name: "username",
          value: r,
          onChange: R,
          error: null != p ? p : ec(j),
          autoComplete: "off",
          setRef: e => {
            this.usernameRef = e
          },
          required: true,
          onFocus: () => this.trackInputFocus("username"),
          onBlur: () => this.trackInputBlur("username")
        }), this.renderUsernameValidation()]
      }), (0, i.jsx)(N.II, {
        label: er.intl.string(er.t["CIGa+7"]),
        name: "password",
        value: o,
        onChange: e => this.setState({
          password: e,
          passwordClientError: 0 === e.length ? er.intl.string(er.t.EkokLy) : null
        }),
        error: null != f ? f : ec(I),
        type: "password",
        autoComplete: "new-password",
        setRef: e => {
          this.passwordRef = e
        },
        required: true,
        onFocus: () => this.trackInputFocus("password"),
        onBlur: () => this.trackInputBlur("password")
      }), (0, i.jsx)(E.Z, {
        label: er.intl.string(er.t.rhBeKe),
        wrapperClassName: ei.birthdayInput,
        name: "date_of_birth",
        onChange: this.handleBirthdayChange,
        ref: this.dateOfBirthRef,
        error: null != _ ? _ : ec(y),
        value: u,
        required: true,
        onFocus: this.trackInputFocus,
        onBlur: this.trackInputBlur
      }), (0, i.jsx)(C.Z, {}), this.renderConsentComponent(), Z, A, ee.a ? null : (0, i.jsx)("div", {
        className: es.marginTop20,
        children: (0, i.jsx)(m.Avr, {
          text: er.intl.string(er.t["1lWxux"]),
          textVariant: "text-sm/normal",
          onClick: this.handleGotoLogin
        })
      })]
    });
    return t ? (0, i.jsx)(Q.Z, {
      onSubmit: this.handleSubmit,
      tag: "form",
      className: a()(O, ei.horizontalAuthBox),
      children: () => [L, (0, i.jsxs)("div", {
        className: ei.flex,
        children: [(0, i.jsx)(N.Dx, {
          className: ei.createAccountTemplateHeader,
          children: er.intl.string(er.t.wC4TlR)
        }), k]
      }, "register-title")]
    }) : (0, i.jsxs)(N.ZP, {
      onSubmit: this.handleSubmit,
      tag: "form",
      className: O,
      children: [T ? (0, i.jsx)("div", {
        className: ei.goBackButton,
        children: (0, i.jsx)(m.Button, {
          onClick: this.handleGotoLogin,
          variant: "secondary",
          text: er.intl.string(er.t["1MrpWO"]),
          icon: m.V7D,
          iconPosition: "start"
        })
      }) : null, L, k]
    })
  }
  render() {
    let {
      isUnderage: e
    } = this.props, t = this.inGuildOrChannelInviteFlow();
    if (module || this.hasError("date_of_birth")) return (0, Chunk54381.jsx)(Chunk224841.Z, {});
    let {
      giftCode: n,
      invite: r,
      guildTemplate: s
    } = this.props, l = null != r && null == r.guild && null == r.channel && null != r.inviter;
    return null != r && exports ? r.state === Chunk981631.r2o.RESOLVING ? this.renderInviteResolving() : this.renderInvite() : null != Chunk473749 ? this.renderFull(() => (0, Chunk54381.jsx)(Chunk473855.Z, {
      guildTemplate: Chunk473749
    }), true) : null != require ? this.renderFull(() => (0, Chunk54381.jsx)(Chunk481153.Z, {
      giftCode: require
    })) : null != r && Chunk120356 && r.state === Chunk981631.r2o.RESOLVED ? this.renderFull(() => (0, Chunk54381.jsx)(Chunk588705.Z, {
      invite: r,
      isRegister: true
    })) : this.renderFull()
  }
  constructor(e) {
    var t;
    super(e), el(this, "emailRef", true), el(this, "usernameRef", true), el(this, "globalNameRef", true), el(this, "passwordRef", true), el(this, "dateOfBirthRef", s.createRef()), el(this, "_retryTimer", new h.V7), el(this, "handleGotoLogin", e => {
      let t, {
          email: n
        } = this.state,
        {
          giftCode: r,
          guildTemplate: i,
          invite: s,
          location: l,
          onLoginStart: a,
          redirectTo: c,
          transitionTo: u
        } = this.props,
        d = null != l ? (0, o.parse)(l.search) : {};
      null != s ? t = X.Z5c.INVITE_LOGIN(s.code) : null != r ? t = X.Z5c.GIFT_CODE_LOGIN(r.code) : null != i ? t = X.Z5c.GUILD_TEMPLATE_LOGIN(i.code) : null != c ? (t = X.Z5c.LOGIN, d.redirect_to = c) : (t = X.Z5c.LOGIN, "" !== n && (d = {
        email: n
      })), p.Z.loginReset(), u(t, {
        search: (0, o.stringify)(d),
        source: "register"
      }), null == a || a(e), K.S.dispatch(X.CkL.WAVE_EMPHASIZE)
    }), el(this, "handleSubmit", e => {
      null == e || e.preventDefault();
      let {
        email: t,
        username: n,
        password: r,
        parsedDateOfBirth: i,
        globalName: s
      } = this.state, {
        consentRequired: l
      } = this.props;
      if (null === l) return;
      let a = this.inGuildOrChannelInviteFlow(),
        o = false;
      a ? (0 === s.length && (this.setState({
        globalNameClientError: er.intl.string(er.t.EkokLy)
      }), o = true), null != i || ee.a || (this.setState({
        dateOfBirthClientError: er.intl.string(er.t.EkokLy)
      }), o = true)) : (0 === t.length && (this.setState({
        emailClientError: er.intl.string(er.t.EkokLy)
      }), o = true), 0 === n.length && (this.setState({
        usernameClientError: er.intl.string(er.t.EkokLy)
      }), o = true), 0 === r.length && (this.setState({
        passwordClientError: er.intl.string(er.t.EkokLy)
      }), o = true), null == i && (this.setState({
        dateOfBirthClientError: er.intl.string(er.t.EkokLy)
      }), o = true)), o || this.handleRegister()
    }), el(this, "trackInputFocus", e => {
      H.default.track(X.rMx.REGISTER_INPUT_FOCUS, {
        field: e
      })
    }), el(this, "trackInputBlur", e => {
      H.default.track(X.rMx.REGISTER_INPUT_BLUR, {
        field: e
      })
    }), el(this, "handleBirthdayChange", e => {
      this.setState({
        parsedDateOfBirth: e
      }), null != e && this.setState({
        dateOfBirthClientError: null
      })
    }), el(this, "renderUsernameValidation", () => {
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
      return (0, i.jsx)(eh, {
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

function ed(e) {
  let t = (0, d.cj)([V.Z, F.default, _.Z, L.Z, P.Z], () => ({
      consentRequired: V.Z.getAuthenticationConsentRequired(),
      authenticated: F.default.isAuthenticated(),
      isUnderage: _.Z.isUnderageAnonymous(),
      country: L.Z.getCountryCode(),
      hasLoggedInAccounts: P.Z.getHasLoggedInAccounts()
    })),
    n = (0, d.e7)([D.Z], () => D.Z.registrationUsernameSuggestion()),
    [r, l] = s.useState($.EW.FULL);
  return (0, v.Z)({
    type: u.ImpressionTypes.VIEW,
    name: u.ImpressionNames.USER_REGISTRATION,
    properties: {
      impression_group: u.ImpressionGroups.USER_REGISTRATION_FLOW,
      step: r
    }
  }, {}, [r]), (0, i.jsx)(eu, ea({
    onChangeStep: e => l(e),
    usernameSuggestion: n
  }, e, t))
}

function eh(e) {
  let t, {
      username: n,
      suggestion: r,
      globalName: s,
      isUsernameFocused: l,
      onClickSuggestion: a
    } = e,
    o = (0, M.a)(n, true, true),
    u = n.length > 0;
  return t = u ? (0, c.EQ)(o).with({
    type: k.K.ERROR,
    message: c.P.select()
  }, e => (0, i.jsx)(m.Text, {
    className: ei.messageNegative,
    variant: "text-sm/normal",
    children: e
  })).with({
    type: k.K.AVAILABLE,
    message: c.P.select()
  }, e => (0, i.jsx)(m.Text, {
    className: ei.messagePositive,
    variant: "text-sm/normal",
    children: e
  })).otherwise(() => (0, i.jsx)(m.Text, {
    variant: "text-sm/normal",
    color: "text-default",
    children: er.intl.string(er.t.z7c4bP)
  })) : null != r && r.length > 0 && s.length > 0 ? (0, i.jsx)(m.Text, {
    variant: "text-sm/normal",
    color: "text-default",
    children: er.intl.format(er.t.nDGqqq, {
      suggestion: r,
      nameOnClick: a
    })
  }) : (0, i.jsx)(m.Text, {
    variant: "text-sm/normal",
    color: "text-default",
    children: er.intl.string(er.t.z7c4bP)
  }), (0, i.jsx)(B.Z, {
    show: u && (null == o ? true : o.type) === k.K.ERROR || l,
    top: false,
    bottom: 20,
    children: t
  })
}
el(eu, "defaultProps", {
  giftCodeResolved: false,
  transitionTo: Chunk703656.uL
})