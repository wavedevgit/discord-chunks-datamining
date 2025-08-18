/** Chunk was on 27978 **/
/** chunk id: 423527, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => ed
}), require("./704826.js"), require("./35282.js"), require("./781311.js"), require("./388685.js"), require("./314940.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk593473 = require("./593473.js"),
  Chunk278074 = require("./278074.js"),
  Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk846519 = require("./846519.js"),
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

function es(e, t) {
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
Chunk442837.ZP.initialize();
let eo = /\.$/,
  ec = e => Array.isArray(e) ? e.map(e => e.replace(eo, "")).join(". ").trim() : e;
class eu extends(r = Chunk647438.PureComponent) {
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
      apiErrors: l,
      parsedDateOfBirth: a
    } = this.state;
    (t.apiErrors !== l || t.parsedDateOfBirth !== a) && (this.hasError("email") || this.hasError("phone") ? null != this.emailRef && this.emailRef.focus() : this.hasError("username") ? null != this.usernameRef && this.usernameRef.focus() : this.hasError("global_name") ? null != this.globalNameRef && this.globalNameRef.focus() : this.hasError("password") ? null != this.passwordRef && this.passwordRef.focus() : null == this.state.parsedDateOfBirth ? null != this.dateOfBirthRef.current && this.dateOfBirthRef.current.focus() : this.hasError("retry_after") && "number" == typeof l.retry_after && (this.setState({
      isRateLimited: true
    }), this._retryTimer.start(l.retry_after * K.Z.Millis.SECOND, () => {
      this.setState({
        isRateLimited: false
      })
    }))), n && !e.authenticated && ((0, P.c)(ee.M5.ORGANIC_REGISTERED), this.redirectIfAuthenticated());
    let s = Q.EW.FULL;
    r || this.hasError("date_of_birth") ? s = Q.EW.AGE_GATE : this.inGuildOrChannelInviteFlow() && (s = Q.EW.INVITE), i(s)
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
      parsedDateOfBirth: l
    } = this.state, {
      invite: a,
      guildTemplate: s,
      giftCode: o,
      onRegister: c,
      usernameSuggestion: u
    } = this.props, d = null != Chunk120356 ? Chunk120356.code : null, h = null != Chunk593473 ? Chunk593473.skuId : null, p = Chunk882037.MD.getState(), m = (0, Chunk624138.Ew)(Chunk990547) ? null : exports === Chunk990547, f = Chunk188785.a ? await (0, Chunk692483.K)(exports) : exports, _ = Chunk188785.a ? await (0, Chunk692483.K)(require) : require;
    Chunk585483.S.dispatch(Chunk981631.CkL.WAVE_EMPHASIZE), this.setState({
      registering: true,
      apiErrors: {}
    });
    try {
      this.inGuildOrChannelInviteFlow() ? await (0, Chunk481230.ZP)({
        consent: Chunk951288,
        invite: Chunk442837,
        giftCodeSKUId: Chunk846519,
        usedUsernameSuggestion: Chunk893776,
        globalName: Chunk224841,
        birthday: Chunk647438
      }) : await (0, Chunk481230.R$)({
        email: module,
        username: Chunk899370,
        globalName: Chunk224841,
        consent: Chunk951288,
        password: r,
        invite: Chunk442837,
        usedUsernameSuggestion: Chunk893776,
        guildTemplateCode: null == s ? true : s.code,
        giftCodeSKUId: Chunk846519,
        birthday: Chunk647438,
        promoEmailConsent: Chunk481060.required ? Chunk481060 : null
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
    return exports ? (0, Chunk951288.jsx)(Chunk853268.Z, {
      value: module,
      onChange: e => this.setState({
        consent: e
      }),
      subText: Chunk388032.intl.format(Chunk388032.t.qMDAPz, {
        termsURL: Chunk981631.EYA.TERMS,
        privacyURL: Chunk981631.EYA.PRIVACY
      }),
      marginTopStyle: Chunk33724.consentBox,
      subtextClassName: Chunk33724.consentSubText
    }) : (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-sm/normal",
      color: "text-secondary",
      className: s()(Chunk197571.marginTop8, Chunk33724.consentSubText),
      children: Chunk388032.intl.format(Chunk388032.t["KI+BSU"], {
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
    return (0, Chunk951288.jsxs)(Chunk388905.ZP, {
      className: module,
      children: [(0, Chunk951288.jsx)(Chunk588705.R, {}), (0, Chunk951288.jsxs)(Chunk388905.gO, {
        className: Chunk33724.authBlock,
        children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
          children: Chunk388032.intl.string(Chunk388032.t["9AjdkJ"])
        }), (0, Chunk951288.jsx)(Chunk481060.ua7, {
          text: Chunk388032.intl.string(Chunk388032.t["hBB85+"]),
          position: "right",
          color: Chunk481060.ua7.Colors.BRAND,
          children: e => {
            let {
              onMouseEnter: r,
              onMouseLeave: l
            } = e;
            return (0, i.jsx)(I.II, {
              autoFocus: true,
              className: ei.marginBottom8,
              name: "username",
              value: n,
              placeholder: en.intl.string(en.t["09Q8ys"]),
              onChange: t,
              onMouseEnter: r,
              onMouseLeave: l,
              onFocus: () => this.trackInputFocus("username"),
              onBlur: () => this.trackInputBlur("username")
            })
          }
        }), (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-sm/normal",
          color: "text-secondary",
          className: s()(Chunk197571.marginTop20, Chunk33724.consentSubText),
          children: Chunk388032.intl.format(Chunk388032.t["KI+BSU"], {
            termsURL: Chunk981631.EYA.TERMS,
            privacyURL: Chunk981631.EYA.PRIVACY
          })
        }), (0, Chunk951288.jsx)(Chunk388905.zx, {
          className: Chunk197571.marginTop8,
          disabled: true,
          children: Chunk388032.intl.string(Chunk388032.t["825cFx"])
        }), Chunk188785.a ? null : (0, Chunk951288.jsx)(Chunk388905.zx, {
          look: Chunk388905.zx.Looks.LINK,
          color: Chunk388905.zx.Colors.LINK,
          disabled: true,
          className: Chunk197571.marginTop20,
          children: Chunk388032.intl.string(Chunk388032.t["1lWxu7"])
        })]
      })]
    })
  }
  renderInviteHeader() {
    let {
      invite: e
    } = this.props;
    return (null == module ? true : module.guild_scheduled_event) != null ? (0, Chunk951288.jsx)(Chunk639946.r, {
      channel: module.channel,
      guildScheduledEvent: module.guild_scheduled_event
    }) : (0, Chunk951288.jsx)(Chunk588705.Z, {
      invite: module,
      inUnclaimedFlow: true
    })
  }
  renderInviteButton() {
    let {
      invite: e,
      consentRequired: t
    } = this.props, {
      consent: n,
      registering: r
    } = this.state, l = Chunk388905.zx.Colors.BRAND, a = Chunk388032.intl.string(Chunk388032.t["825cFx"]);
    return (null == module ? true : module.stage_instance) != null && (l = Chunk388905.zx.Colors.GREEN, a = Chunk388032.intl.string(Chunk388032.t["5UKyUl"])), (0, Chunk951288.jsx)(Chunk481060.ua7, {
      text: !require && exports ? Chunk388032.intl.string(Chunk388032.t.AY4IVF) : null,
      children: e => (0, i.jsx)("div", es(ea({
        className: ei.marginTop8
      }, e), {
        children: (0, i.jsx)(I.zx, {
          type: "submit",
          submitting: r,
          disabled: !this.hasConsent(),
          color: l,
          children: a
        })
      }))
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
        date_of_birth: l
      },
      globalName: a,
      globalNameClientError: s,
      dateOfBirthClientError: o,
      parsedDateOfBirth: c,
      globalNameFocused: u
    } = this.state, d = (null == module ? true : module.stage_instance) != null || (null == module ? true : module.guild_scheduled_event) != null, h = e => {
      this.setState({
        globalName: e
      })
    };
    return (0, Chunk951288.jsxs)("div", {
      children: [(0, Chunk951288.jsxs)(Chunk388905.ZP, {
        onSubmit: this.handleSubmit,
        tag: "form",
        className: exports,
        children: [this.renderInviteHeader(), Chunk442837 ? (0, Chunk951288.jsx)("div", {
          className: Chunk33724.divider
        }) : null, (0, Chunk951288.jsxs)(Chunk388905.gO, {
          className: Chunk442837 ? true : Chunk33724.authBlock,
          children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
            error: null != s ? s : ec(null != r ? r : require),
            children: Chunk388032.intl.string(Chunk388032.t["9AjdkJ"])
          }), (0, Chunk951288.jsx)(Chunk481060.ua7, {
            text: Chunk388032.intl.string(Chunk388032.t["hBB85+"]),
            position: "right",
            color: Chunk481060.ua7.Colors.BRAND,
            children: e => {
              let {
                onMouseEnter: t,
                onMouseLeave: l
              } = e;
              return (0, i.jsx)(I.II, {
                autoFocus: true,
                className: ei.marginBottom8,
                name: "global_name",
                value: a,
                placeholder: en.intl.string(en.t["09Q8ys"]),
                onChange: h,
                error: null != n || null != r ? "" : null,
                onMouseEnter: t,
                onMouseLeave: l,
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
              })
            }
          }), (0, Chunk951288.jsx)(Chunk180529.Z, {
            show: Chunk990547,
            children: (0, Chunk951288.jsx)(Chunk481060.Text, {
              variant: "text-sm/normal",
              color: "text-secondary",
              children: Chunk388032.intl.string(Chunk388032.t["330TCQ"])
            })
          }), (0, Chunk951288.jsx)(Chunk13430.Z, {
            label: Chunk388032.intl.string(Chunk388032.t.rhBeKS),
            labelTag: Chunk481060.RB0.H3,
            wrapperClassName: Chunk33724.inviteBirthdayInput,
            name: "date_of_birth",
            onChange: this.handleBirthdayChange,
            ref: this.dateOfBirthRef,
            error: null != Chunk593473 ? Chunk593473 : ec(Chunk647438),
            value: Chunk278074
          }), this.renderConsentComponent(), this.renderInviteButton(), Chunk188785.a ? null : (0, Chunk951288.jsx)("div", {
            children: (0, Chunk951288.jsx)(Chunk388905.zx, {
              look: Chunk388905.zx.Looks.LINK,
              color: Chunk388905.zx.Colors.LINK,
              onClick: this.handleGotoLogin,
              className: Chunk197571.marginTop20,
              children: Chunk388032.intl.string(Chunk388032.t["1lWxu7"])
            })
          })]
        })]
      }), null != module && Chunk442837 ? (0, Chunk951288.jsx)(Chunk388905.ZP, {
        className: Chunk197571.marginTop20,
        children: (0, Chunk951288.jsx)(Chunk792766.y, {
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
    return "string" != typeof module ? null : (0, Chunk951288.jsx)(Chunk388905.i_, {
      className: s()(Chunk197571.marginTop20, Chunk33724.errorMessage),
      children: module
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
      passwordClientError: g,
      dateOfBirthClientError: f,
      registering: _,
      apiErrors: {
        email: b,
        username: v,
        global_name: E,
        password: j,
        date_of_birth: y
      } = {}
    } = this.state, {
      consentRequired: O,
      authBoxClassName: S,
      hasLoggedInAccounts: C
    } = this.props, T = this.renderErrorMessage(), A = (0, i.jsx)(p.ua7, {
      text: !c && O ? en.intl.string(en.t.AY4IVF) : null,
      children: e => (0, i.jsx)("div", es(ea({
        className: ei.marginTop20
      }, e), {
        children: (0, i.jsx)(I.zx, {
          type: "submit",
          submitting: _,
          disabled: !this.hasConsent() || this.state.isRateLimited,
          children: en.intl.string(en.t["825cFx"])
        })
      }))
    }), Z = async () => {
      this.setState({
        usernameFocused: true
      }), a.length > 0 && !L.Z.wasRegistrationSuggestionFetched(a) && await w.Z.fetchSuggestionsRegistration(a)
    }, P = e => {
      this.setState({
        username: e.toLocaleLowerCase(),
        usernameClientError: 0 === e.length ? en.intl.string(en.t.EkokLy) : null
      })
    }, R = null != e ? (0, i.jsx)(l.Fragment, {
      children: e()
    }, "custom-header") : (0, i.jsx)(I.Dx, {
      children: en.intl.string(en.t.wC4TlZ)
    }, "title"), D = (0, i.jsxs)(I.gO, {
      className: ei.marginTop20,
      children: [(0, i.jsx)(I.II, {
        autoFocus: true,
        className: ei.marginBottom20,
        label: en.intl.string(en.t.dI4d4e),
        name: "email",
        value: n,
        onChange: e => this.setState({
          email: e,
          emailClientError: 0 === e.length ? en.intl.string(en.t.EkokLy) : null
        }),
        error: null != h ? h : ec(b),
        type: "email",
        autoComplete: "username",
        setRef: e => {
          this.emailRef = e
        },
        required: true,
        onFocus: () => this.trackInputFocus("email"),
        onBlur: () => this.trackInputBlur("email")
      }), (0, i.jsx)(I.II, {
        label: en.intl.string(en.t["9AjdkJ"]),
        className: ei.marginBottom20,
        name: "global_name",
        value: a,
        onChange: e => this.setState({
          globalName: e
        }),
        error: ec(E),
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
        children: (0, i.jsx)(p.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: en.intl.string(en.t["330TCQ"])
        })
      }), (0, i.jsxs)("div", {
        onBlur: () => this.setState({
          usernameFocused: false
        }),
        onFocus: Z,
        tabIndex: false,
        children: [(0, i.jsx)(I.II, {
          label: en.intl.string(en.t.TWzdWl),
          className: ei.marginBottom20,
          name: "username",
          value: r,
          onChange: P,
          error: null != m ? m : ec(v),
          autoComplete: "off",
          setRef: e => {
            this.usernameRef = e
          },
          required: true,
          onFocus: () => this.trackInputFocus("username"),
          onBlur: () => this.trackInputBlur("username")
        }), this.renderUsernameValidation()]
      }), (0, i.jsx)(I.II, {
        label: en.intl.string(en.t["CIGa+/"]),
        name: "password",
        value: o,
        onChange: e => this.setState({
          password: e,
          passwordClientError: 0 === e.length ? en.intl.string(en.t.EkokLy) : null
        }),
        error: null != g ? g : ec(j),
        type: "password",
        autoComplete: "new-password",
        setRef: e => {
          this.passwordRef = e
        },
        required: true,
        onFocus: () => this.trackInputFocus("password"),
        onBlur: () => this.trackInputBlur("password")
      }), (0, i.jsx)(x.Z, {
        label: en.intl.string(en.t.rhBeKS),
        wrapperClassName: er.birthdayInput,
        name: "date_of_birth",
        onChange: this.handleBirthdayChange,
        ref: this.dateOfBirthRef,
        error: null != f ? f : ec(y),
        value: u,
        required: true,
        onFocus: this.trackInputFocus,
        onBlur: this.trackInputBlur
      }), (0, i.jsx)(N.Z, {}), this.renderConsentComponent(), A, T, $.a ? null : (0, i.jsx)(I.zx, {
        look: I.zx.Looks.LINK,
        color: I.zx.Colors.LINK,
        onClick: this.handleGotoLogin,
        className: ei.marginTop20,
        children: en.intl.string(en.t["1lWxu7"])
      })]
    });
    return t ? (0, i.jsx)(J.Z, {
      onSubmit: this.handleSubmit,
      tag: "form",
      className: s()(S, er.horizontalAuthBox),
      children: () => [R, (0, i.jsxs)("div", {
        className: er.flex,
        children: [(0, i.jsx)(I.Dx, {
          className: er.createAccountTemplateHeader,
          children: en.intl.string(en.t.wC4TlZ)
        }), D]
      }, "register-title")]
    }) : (0, i.jsxs)(I.ZP, {
      onSubmit: this.handleSubmit,
      tag: "form",
      className: S,
      children: [C ? (0, i.jsx)(I.zx, {
        onClick: this.handleGotoLogin,
        look: I.zx.Looks.LINK,
        color: I.zx.Colors.PRIMARY,
        className: er.goBackButton,
        children: (0, i.jsxs)("div", {
          className: er.content,
          children: [(0, i.jsx)(p.V7D, {
            size: "xs",
            color: "currentColor",
            className: er.caret
          }), (0, i.jsx)(p.Text, {
            variant: "text-md/normal",
            children: en.intl.string(en.t["1MrpWF"])
          })]
        })
      }) : null, R, D]
    })
  }
  render() {
    let {
      isUnderage: e
    } = this.props, t = this.inGuildOrChannelInviteFlow();
    if (module || this.hasError("date_of_birth")) return (0, Chunk951288.jsx)(Chunk224841.Z, {});
    let {
      giftCode: n,
      invite: r,
      guildTemplate: l
    } = this.props, a = null != r && null == r.guild && null == r.channel && null != r.inviter;
    return null != r && exports ? r.state === Chunk981631.r2o.RESOLVING ? this.renderInviteResolving() : this.renderInvite() : null != Chunk647438 ? this.renderFull(() => (0, Chunk951288.jsx)(Chunk473855.Z, {
      guildTemplate: Chunk647438
    }), true) : null != require ? this.renderFull(() => (0, Chunk951288.jsx)(Chunk481153.Z, {
      giftCode: require
    })) : null != r && Chunk120356 && r.state === Chunk981631.r2o.RESOLVED ? this.renderFull(() => (0, Chunk951288.jsx)(Chunk588705.Z, {
      invite: r,
      isRegister: true
    })) : this.renderFull()
  }
  constructor(e) {
    var t;
    super(e), el(this, "emailRef", true), el(this, "usernameRef", true), el(this, "globalNameRef", true), el(this, "passwordRef", true), el(this, "dateOfBirthRef", l.createRef()), el(this, "_retryTimer", new h.V7), el(this, "handleGotoLogin", e => {
      let t, {
          email: n
        } = this.state,
        {
          giftCode: r,
          guildTemplate: i,
          invite: l,
          location: a,
          onLoginStart: s,
          redirectTo: c,
          transitionTo: u
        } = this.props,
        d = null != a ? (0, o.parse)(a.search) : {};
      null != l ? t = X.Z5c.INVITE_LOGIN(l.code) : null != r ? t = X.Z5c.GIFT_CODE_LOGIN(r.code) : null != i ? t = X.Z5c.GUILD_TEMPLATE_LOGIN(i.code) : null != c ? (t = X.Z5c.LOGIN, d.redirect_to = c) : (t = X.Z5c.LOGIN, "" !== n && (d = {
        email: n
      })), m.Z.loginReset(), u(t, {
        search: (0, o.stringify)(d),
        source: "register"
      }), null == s || s(e), H.S.dispatch(X.CkL.WAVE_EMPHASIZE)
    }), el(this, "handleSubmit", e => {
      null == e || e.preventDefault();
      let {
        email: t,
        username: n,
        password: r,
        parsedDateOfBirth: i,
        globalName: l
      } = this.state, {
        consentRequired: a
      } = this.props;
      if (null === a) return;
      let s = this.inGuildOrChannelInviteFlow(),
        o = false;
      s ? 0 === l.length && (this.setState({
        globalNameClientError: en.intl.string(en.t.EkokLy)
      }), o = true) : (0 === t.length && (this.setState({
        emailClientError: en.intl.string(en.t.EkokLy)
      }), o = true), 0 === n.length && (this.setState({
        usernameClientError: en.intl.string(en.t.EkokLy)
      }), o = true), 0 === r.length && (this.setState({
        passwordClientError: en.intl.string(en.t.EkokLy)
      }), o = true)), null == i && (this.setState({
        dateOfBirthClientError: en.intl.string(en.t.EkokLy)
      }), o = true), o || this.handleRegister()
    }), el(this, "trackInputFocus", e => {
      V.default.track(X.rMx.REGISTER_INPUT_FOCUS, {
        field: e
      })
    }), el(this, "trackInputBlur", e => {
      V.default.track(X.rMx.REGISTER_INPUT_BLUR, {
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
      } = this.props, l = () => {
        null != this.usernameRef && this.usernameRef.focus(), null != r && r.length > 0 && this.setState({
          username: r
        })
      };
      return (0, i.jsx)(eh, {
        username: e,
        suggestion: r,
        globalName: t,
        isUsernameFocused: n,
        onClickSuggestion: l
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
  let t = (0, d.cj)([G.Z, F.default, f.Z, R.Z, Z.Z], () => ({
      consentRequired: G.Z.getAuthenticationConsentRequired(),
      authenticated: F.default.isAuthenticated(),
      isUnderage: f.Z.isUnderageAnonymous(),
      country: R.Z.getCountryCode(),
      hasLoggedInAccounts: Z.Z.getHasLoggedInAccounts()
    })),
    n = (0, d.e7)([L.Z], () => L.Z.registrationUsernameSuggestion()),
    [r, a] = l.useState(Q.EW.FULL);
  return (0, b.Z)({
    type: u.ImpressionTypes.VIEW,
    name: u.ImpressionNames.USER_REGISTRATION,
    properties: {
      impression_group: u.ImpressionGroups.USER_REGISTRATION_FLOW,
      step: r
    }
  }, {}, [r]), (0, i.jsx)(eu, ea({
    onChangeStep: e => a(e),
    usernameSuggestion: n
  }, e, t))
}

function eh(e) {
  let t, {
      username: n,
      suggestion: r,
      globalName: l,
      isUsernameFocused: a,
      onClickSuggestion: s
    } = e,
    o = (0, k.a)(n, true, true),
    u = n.length > 0;
  return t = u ? (0, c.EQ)(o).with({
    type: D.K.ERROR,
    message: c.P.select()
  }, e => (0, i.jsx)(p.Text, {
    className: er.messageNegative,
    variant: "text-sm/normal",
    children: e
  })).with({
    type: D.K.AVAILABLE,
    message: c.P.select()
  }, e => (0, i.jsx)(p.Text, {
    className: er.messagePositive,
    variant: "text-sm/normal",
    children: e
  })).otherwise(() => (0, i.jsx)(p.Text, {
    variant: "text-sm/normal",
    color: "text-default",
    children: en.intl.string(en.t.z7c4bG)
  })) : null != r && r.length > 0 && l.length > 0 ? (0, i.jsx)(p.Text, {
    variant: "text-sm/normal",
    color: "text-default",
    children: en.intl.format(en.t.nDGqqq, {
      suggestion: r,
      nameOnClick: s
    })
  }) : (0, i.jsx)(p.Text, {
    variant: "text-sm/normal",
    color: "text-default",
    children: en.intl.string(en.t.z7c4bG)
  }), (0, i.jsx)(M.Z, {
    show: u && (null == o ? true : o.type) === D.K.ERROR || a,
    top: false,
    bottom: 20,
    children: t
  })
}
el(eu, "defaultProps", {
  giftCodeResolved: false,
  transitionTo: Chunk703656.uL
})