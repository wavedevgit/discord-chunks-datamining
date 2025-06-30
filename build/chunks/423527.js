/** Chunk was on 27978 **/
n.d(t, {
  Z: () => eh
}), n(704826), n(35282), n(781311), n(388685), n(314940);
var r, i = n(255367),
  l = n(73800),
  s = n(120356),
  a = n.n(s),
  o = n(593473),
  c = n(278074),
  u = n(990547),
  d = n(442837),
  h = n(846519),
  p = n(481060),
  g = n(893776),
  m = n(881052),
  f = n(899370),
  _ = n(224841),
  x = n(13430),
  E = n(213609),
  b = n(882037),
  v = n(8184),
  I = n(254942),
  j = n(481230),
  O = n(388905),
  S = n(853268),
  y = n(639946),
  N = n(616952),
  C = n(792766),
  A = n(692483),
  T = n(100159),
  P = n(473855),
  Z = n(726745),
  R = n(929809),
  w = n(541692),
  L = n(986197),
  D = n(135200),
  k = n(219496),
  M = n(807369),
  B = n(180529),
  G = n(703656),
  F = n(108427),
  U = n(314897),
  z = n(480294),
  V = n(896797),
  K = n(626135),
  H = n(585483),
  W = n(70956),
  q = n(624138),
  Y = n(481153),
  J = n(588705),
  X = n(163671),
  Q = n(981631),
  $ = n(355142),
  ee = n(188785),
  et = n(701476),
  en = n(801461),
  er = n(388032),
  ei = n(840368),
  el = n(20493);

function es(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
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

function eo(e, t) {
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
d.ZP.initialize();
let ec = /\.$/,
  eu = e => Array.isArray(e) ? e.map(e => e.replace(ec, "")).join(". ").trim() : e;
class ed extends(r = l.PureComponent) {
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
    K.default.track(Q.rMx.REGISTER_VIEWED, ea({
      location: null != t ? "Invite Register Page" : "Non-Invite Register Page",
      registration_source: this.registrationSource
    }, null != e ? (0, T.Z)(e, !1, !1) : {}), {
      flush: !0
    }), null == this.props.consentRequired && g.Z.getLocationMetadata(), (0, F.e)("register")
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
      parsedDateOfBirth: s
    } = this.state;
    (t.apiErrors !== l || t.parsedDateOfBirth !== s) && (this.hasError("email") || this.hasError("phone") ? null != this.emailRef && this.emailRef.focus() : this.hasError("username") ? null != this.usernameRef && this.usernameRef.focus() : this.hasError("global_name") ? null != this.globalNameRef && this.globalNameRef.focus() : this.hasError("password") ? null != this.passwordRef && this.passwordRef.focus() : null == this.state.parsedDateOfBirth ? null != this.dateOfBirthRef.current && this.dateOfBirthRef.current.focus() : this.hasError("retry_after") && "number" == typeof l.retry_after && (this.setState({
      isRateLimited: !0
    }), this._retryTimer.start(l.retry_after * W.Z.Millis.SECOND, () => {
      this.setState({
        isRateLimited: !1
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
    e && t(null != n ? n : V.Z.defaultRoute)
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
      invite: s,
      guildTemplate: a,
      giftCode: o,
      onRegister: c,
      usernameSuggestion: u,
      inUnclaimedFlowExperiment: d
    } = this.props, h = null != s ? s.code : null, p = null != o ? o.skuId : null, g = b.MD.getState(), f = (0, q.Ew)(u) ? null : t === u, _ = ee.a ? await (0, A.K)(t) : t, x = ee.a ? await (0, A.K)(n) : n;
    H.S.dispatch(Q.CkL.WAVE_EMPHASIZE), this.setState({
      registering: !0,
      apiErrors: {}
    });
    try {
      this.inGuildOrChannelInviteFlow() ? await (0, j.ZP)({
        consent: i,
        invite: h,
        giftCodeSKUId: p,
        usedUsernameSuggestion: f,
        globalName: x,
        birthday: d ? l : void 0
      }) : await (0, j.R$)({
        email: e,
        username: _,
        globalName: x,
        consent: i,
        password: r,
        invite: h,
        usedUsernameSuggestion: f,
        guildTemplateCode: null == a ? void 0 : a.code,
        giftCodeSKUId: p,
        birthday: l,
        promoEmailConsent: g.required ? g : null
      }), null == c || c()
    } catch (t) {
      if (this.setState({
          registering: !1
        }), !(t instanceof m.Hx)) return;
      let e = (0, I.F)(t);
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
      consentRequired: t,
      inUnclaimedFlowExperiment: n
    } = this.props;
    return t ? (0, i.jsx)(S.Z, {
      value: e,
      onChange: e => this.setState({
        consent: e
      }),
      subText: er.intl.format(er.t.qMDAPz, {
        termsURL: Q.EYA.TERMS,
        privacyURL: Q.EYA.PRIVACY
      }),
      marginTopStyle: ei.consentBox,
      subtextClassName: ei.consentSubText
    }) : n ? (0, i.jsx)(p.Text, {
      variant: "text-sm/normal",
      color: "text-secondary",
      className: a()(el.marginTop8, ei.consentSubText),
      children: er.intl.format(er.t["KI+BSU"], {
        termsURL: Q.EYA.TERMS,
        privacyURL: Q.EYA.PRIVACY
      })
    }) : (0, i.jsx)(O.i_, {
      className: el.marginTop8,
      children: er.intl.format(er.t["F+0zT0"], {
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
    return (0, i.jsxs)(O.ZP, {
      className: e,
      children: [(0, i.jsx)(J.R, {}), (0, i.jsxs)(O.gO, {
        className: ei.authBlock,
        children: [(0, i.jsx)(p.vwX, {
          children: er.intl.string(er.t.TWzdWl)
        }), (0, i.jsx)(p.ua7, {
          text: er.intl.string(er.t["hBB85+"]),
          position: "right",
          color: p.ua7.Colors.BRAND,
          children: e => {
            let {
              onMouseEnter: r,
              onMouseLeave: l
            } = e;
            return (0, i.jsx)(O.II, {
              autoFocus: !0,
              className: el.marginBottom8,
              name: "username",
              value: n,
              placeholder: er.intl.string(er.t["09Q8ys"]),
              onChange: t,
              onMouseEnter: r,
              onMouseLeave: l,
              onFocus: () => this.trackInputFocus("username"),
              onBlur: () => this.trackInputBlur("username")
            })
          }
        }), (0, i.jsx)(O.zx, {
          className: el.marginTop20,
          disabled: !0,
          children: er.intl.string(er.t["3PatS0"])
        }), (0, i.jsx)(O.i_, {
          disabled: !0,
          className: el.marginTop8,
          children: er.intl.format(er.t["F+0zT0"], {
            termsURL: Q.EYA.TERMS,
            privacyURL: Q.EYA.PRIVACY
          })
        }), ee.a ? null : (0, i.jsx)(O.zx, {
          look: O.zx.Looks.LINK,
          color: O.zx.Colors.LINK,
          disabled: !0,
          className: el.marginTop20,
          children: er.intl.string(er.t["r/jzu7"])
        })]
      })]
    })
  }
  renderInviteHeader() {
    let {
      invite: e,
      inUnclaimedFlowExperiment: t
    } = this.props;
    return (null == e ? void 0 : e.stage_instance) != null && null != e.guild ? (0, i.jsx)(C.Z, {
      stageInstance: e.stage_instance,
      guild: e.guild
    }) : (null == e ? void 0 : e.guild_scheduled_event) != null ? (0, i.jsx)(y.r, {
      channel: e.channel,
      guildScheduledEvent: e.guild_scheduled_event
    }) : (0, i.jsx)(J.Z, {
      invite: e,
      inUnclaimedFlowExperiment: t
    })
  }
  renderInviteButton() {
    let {
      invite: e,
      consentRequired: t,
      inUnclaimedFlowExperiment: n
    } = this.props, {
      consent: r,
      registering: l
    } = this.state, s = O.zx.Colors.BRAND, a = n ? er.intl.string(er.t["825cFx"]) : er.intl.string(er.t["3PatS0"]);
    return (null == e ? void 0 : e.stage_instance) != null && (s = O.zx.Colors.GREEN, a = er.intl.string(er.t["5UKyUl"])), (0, i.jsx)(p.ua7, {
      text: !r && t ? er.intl.string(er.t.AY4IVF) : null,
      children: e => (0, i.jsx)("div", eo(ea({
        className: n ? el.marginTop8 : el.marginTop20
      }, e), {
        children: (0, i.jsx)(O.zx, {
          type: "submit",
          submitting: l,
          disabled: !this.hasConsent(),
          color: s,
          children: a
        })
      }))
    })
  }
  renderInvite() {
    let {
      invite: e,
      authBoxClassName: t,
      inUnclaimedFlowExperiment: n
    } = this.props, {
      apiErrors: {
        username: r,
        global_name: l,
        date_of_birth: s
      },
      globalName: a,
      globalNameClientError: o,
      dateOfBirthClientError: c,
      parsedDateOfBirth: u,
      globalNameFocused: d
    } = this.state, h = (null == e ? void 0 : e.stage_instance) != null || (null == e ? void 0 : e.guild_scheduled_event) != null, g = e => {
      this.setState({
        globalName: e
      })
    };
    return (0, i.jsxs)("div", {
      children: [(0, i.jsxs)(O.ZP, {
        onSubmit: this.handleSubmit,
        tag: "form",
        className: t,
        children: [this.renderInviteHeader(), h ? (0, i.jsx)("div", {
          className: ei.divider
        }) : null, (0, i.jsxs)(O.gO, {
          className: h ? void 0 : ei.authBlock,
          children: [(0, i.jsx)(p.vwX, {
            error: null != o ? o : eu(null != l ? l : r),
            children: er.intl.string(er.t["9AjdkJ"])
          }), (0, i.jsx)(p.ua7, {
            text: er.intl.string(er.t["hBB85+"]),
            position: "right",
            color: p.ua7.Colors.BRAND,
            children: e => {
              let {
                onMouseEnter: t,
                onMouseLeave: n
              } = e;
              return (0, i.jsx)(O.II, {
                autoFocus: !0,
                className: el.marginBottom8,
                name: "global_name",
                value: a,
                placeholder: er.intl.string(er.t["09Q8ys"]),
                onChange: g,
                error: null != r || null != l ? "" : null,
                onMouseEnter: t,
                onMouseLeave: n,
                onFocus: () => {
                  this.setState({
                    globalNameFocused: !0
                  }), this.trackInputFocus("global_name")
                },
                onBlur: () => {
                  this.setState({
                    globalNameFocused: !1
                  }), this.trackInputBlur("global_name")
                }
              })
            }
          }), (0, i.jsx)(B.Z, {
            show: !n || d,
            children: (0, i.jsx)(p.Text, {
              variant: "text-sm/normal",
              color: "text-secondary",
              children: er.intl.string(er.t["330TCQ"])
            })
          }), n ? (0, i.jsx)(x.Z, {
            label: er.intl.string(er.t.rhBeKS),
            labelTag: p.RB0.H3,
            wrapperClassName: ei.inviteBirthdayInput,
            name: "date_of_birth",
            onChange: this.handleBirthdayChange,
            ref: this.dateOfBirthRef,
            error: null != c ? c : eu(s),
            value: u
          }) : null, n ? this.renderConsentComponent() : null, this.renderInviteButton(), n ? null : this.renderConsentComponent(), ee.a ? null : (0, i.jsx)("div", {
            children: (0, i.jsx)(O.zx, {
              look: O.zx.Looks.LINK,
              color: O.zx.Colors.LINK,
              onClick: this.handleGotoLogin,
              className: el.marginTop20,
              children: n ? er.intl.string(er.t["1lWxu7"]) : er.intl.string(er.t["r/jzu7"])
            })
          })]
        })]
      }), null != e && h ? (0, i.jsx)(O.ZP, {
        className: el.marginTop20,
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
    return "string" != typeof e ? null : (0, i.jsx)(O.i_, {
      className: a()(el.marginTop20, ei.errorMessage),
      children: e
    })
  }
  renderFull(e, t) {
    let {
      email: n,
      username: r,
      globalName: s,
      password: o,
      consent: c,
      parsedDateOfBirth: u,
      globalNameFocused: d,
      emailClientError: h,
      usernameClientError: g,
      passwordClientError: m,
      dateOfBirthClientError: f,
      registering: _,
      apiErrors: {
        email: E,
        username: b,
        global_name: v,
        password: I,
        date_of_birth: j
      } = {}
    } = this.state, {
      consentRequired: S,
      authBoxClassName: y,
      hasLoggedInAccounts: C,
      inUnclaimedFlowExperiment: A
    } = this.props, T = this.renderErrorMessage(), P = (0, i.jsx)(p.ua7, {
      text: !c && S ? er.intl.string(er.t.AY4IVF) : null,
      children: e => (0, i.jsx)("div", eo(ea({
        className: A ? el.marginTop8 : el.marginTop20
      }, e), {
        children: (0, i.jsx)(O.zx, {
          type: "submit",
          submitting: _,
          disabled: !this.hasConsent() || this.state.isRateLimited,
          children: A ? er.intl.string(er.t["825cFx"]) : er.intl.string(er.t["3PatS0"])
        })
      }))
    }), Z = async () => {
      this.setState({
        usernameFocused: !0
      }), s.length > 0 && !D.Z.wasRegistrationSuggestionFetched(s) && await L.Z.fetchSuggestionsRegistration(s)
    }, R = null != e ? (0, i.jsx)(l.Fragment, {
      children: e()
    }, "custom-header") : (0, i.jsx)(O.Dx, {
      children: er.intl.string(er.t.wC4TlZ)
    }, "title"), w = (0, i.jsxs)(O.gO, {
      className: el.marginTop20,
      children: [(0, i.jsx)(O.II, {
        autoFocus: !0,
        className: el.marginBottom20,
        label: er.intl.string(er.t.dI4d4e),
        name: "email",
        value: n,
        onChange: e => this.setState({
          email: e,
          emailClientError: 0 === e.length ? er.intl.string(er.t.EkokLy) : null
        }),
        error: null != h ? h : eu(E),
        type: "email",
        autoComplete: "username",
        setRef: e => {
          this.emailRef = e
        },
        required: !0,
        onFocus: () => this.trackInputFocus("email"),
        onBlur: () => this.trackInputBlur("email")
      }), (0, i.jsx)(O.II, {
        label: er.intl.string(er.t["9AjdkJ"]),
        className: el.marginBottom20,
        name: "global_name",
        value: s,
        onChange: e => this.setState({
          globalName: e
        }),
        error: eu(v),
        maxLength: en.hy,
        autoComplete: "off",
        setRef: e => {
          this.globalNameRef = e
        },
        onFocus: () => {
          this.setState({
            globalNameFocused: !0
          }), this.trackInputFocus("global_name")
        },
        onBlur: () => {
          this.setState({
            globalNameFocused: !1
          }), this.trackInputBlur("global_name")
        }
      }), (0, i.jsx)(B.Z, {
        show: d,
        top: -12,
        bottom: 20,
        children: (0, i.jsx)(p.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: er.intl.string(er.t["330TCQ"])
        })
      }), (0, i.jsxs)("div", {
        onBlur: () => this.setState({
          usernameFocused: !1
        }),
        onFocus: Z,
        tabIndex: -1,
        children: [(0, i.jsx)(O.II, {
          label: er.intl.string(er.t.TWzdWl),
          className: el.marginBottom20,
          name: "username",
          value: r,
          onChange: e => {
            this.setState({
              username: e.toLocaleLowerCase(),
              usernameClientError: 0 === e.length ? er.intl.string(er.t.EkokLy) : null
            })
          },
          error: null != g ? g : eu(b),
          autoComplete: "off",
          setRef: e => {
            this.usernameRef = e
          },
          required: !0,
          onFocus: () => this.trackInputFocus("username"),
          onBlur: () => this.trackInputBlur("username")
        }), this.renderUsernameValidation()]
      }), (0, i.jsx)(O.II, {
        label: er.intl.string(er.t["CIGa+/"]),
        name: "password",
        value: o,
        onChange: e => this.setState({
          password: e,
          passwordClientError: 0 === e.length ? er.intl.string(er.t.EkokLy) : null
        }),
        error: null != m ? m : eu(I),
        type: "password",
        autoComplete: "new-password",
        setRef: e => {
          this.passwordRef = e
        },
        required: !0,
        onFocus: () => this.trackInputFocus("password"),
        onBlur: () => this.trackInputBlur("password")
      }), (0, i.jsx)(x.Z, {
        label: er.intl.string(er.t.rhBeKS),
        wrapperClassName: A ? ei.birthdayInput : el.marginTop20,
        name: "date_of_birth",
        onChange: this.handleBirthdayChange,
        ref: this.dateOfBirthRef,
        error: null != f ? f : eu(j),
        value: u,
        required: !0,
        onFocus: this.trackInputFocus,
        onBlur: this.trackInputBlur
      }), (0, i.jsx)(N.Z, {}), A ? this.renderConsentComponent() : null, P, T, A ? null : this.renderConsentComponent(), ee.a ? null : (0, i.jsx)(O.zx, {
        look: O.zx.Looks.LINK,
        color: O.zx.Colors.LINK,
        onClick: this.handleGotoLogin,
        className: el.marginTop20,
        children: A ? er.intl.string(er.t["1lWxu7"]) : er.intl.string(er.t["r/jzu7"])
      })]
    });
    return t ? (0, i.jsx)(X.Z, {
      onSubmit: this.handleSubmit,
      tag: "form",
      className: a()(y, ei.horizontalAuthBox),
      children: () => [R, (0, i.jsxs)("div", {
        className: ei.flex,
        children: [(0, i.jsx)(O.Dx, {
          className: ei.createAccountTemplateHeader,
          children: er.intl.string(er.t.wC4TlZ)
        }), w]
      }, "register-title")]
    }) : (0, i.jsxs)(O.ZP, {
      onSubmit: this.handleSubmit,
      tag: "form",
      className: y,
      children: [C ? (0, i.jsx)(O.zx, {
        onClick: this.handleGotoLogin,
        look: O.zx.Looks.LINK,
        color: O.zx.Colors.PRIMARY,
        className: ei.goBackButton,
        children: (0, i.jsxs)("div", {
          className: ei.content,
          children: [(0, i.jsx)(p.V7D, {
            size: "xs",
            color: "currentColor",
            className: ei.caret
          }), (0, i.jsx)(p.Text, {
            variant: "text-md/normal",
            children: er.intl.string(er.t["1MrpWF"])
          })]
        })
      }) : null, R, w]
    })
  }
  render() {
    let {
      isUnderage: e,
      inUnclaimedFlowExperiment: t
    } = this.props, n = this.inGuildOrChannelInviteFlow();
    if (e || this.hasError("date_of_birth")) return (0, i.jsx)(_.Z, {
      inUnclaimedFlowExperiment: t
    });
    let {
      giftCode: r,
      invite: l,
      guildTemplate: s
    } = this.props, a = null != l && null == l.guild && null == l.channel && null != l.inviter;
    return null != l && n ? l.state === Q.r2o.RESOLVING ? this.renderInviteResolving() : this.renderInvite() : null != s ? this.renderFull(() => (0, i.jsx)(P.Z, {
      guildTemplate: s
    }), !0) : null != r ? this.renderFull(() => (0, i.jsx)(Y.Z, {
      giftCode: r
    })) : null != l && a && l.state === Q.r2o.RESOLVED ? this.renderFull(() => (0, i.jsx)(J.Z, {
      invite: l,
      isRegister: !0
    })) : this.renderFull()
  }
  constructor(e) {
    var t;
    super(e), es(this, "emailRef", void 0), es(this, "usernameRef", void 0), es(this, "globalNameRef", void 0), es(this, "passwordRef", void 0), es(this, "dateOfBirthRef", l.createRef()), es(this, "_retryTimer", new h.V7), es(this, "handleGotoLogin", e => {
      let t, {
          email: n
        } = this.state,
        {
          giftCode: r,
          guildTemplate: i,
          invite: l,
          location: s,
          onLoginStart: a,
          redirectTo: c,
          transitionTo: u
        } = this.props,
        d = null != s ? (0, o.parse)(s.search) : {};
      null != l ? t = Q.Z5c.INVITE_LOGIN(l.code) : null != r ? t = Q.Z5c.GIFT_CODE_LOGIN(r.code) : null != i ? t = Q.Z5c.GUILD_TEMPLATE_LOGIN(i.code) : null != c ? (t = Q.Z5c.LOGIN, d.redirect_to = c) : (t = Q.Z5c.LOGIN, "" !== n && (d = {
        email: n
      })), g.Z.loginReset(), u(t, {
        search: (0, o.stringify)(d),
        source: "register"
      }), null == a || a(e), H.S.dispatch(Q.CkL.WAVE_EMPHASIZE)
    }), es(this, "handleSubmit", e => {
      null == e || e.preventDefault();
      let {
        email: t,
        username: n,
        password: r,
        parsedDateOfBirth: i,
        globalName: l
      } = this.state, {
        consentRequired: s,
        inUnclaimedFlowExperiment: a
      } = this.props;
      if (null === s) return;
      let o = this.inGuildOrChannelInviteFlow(),
        c = !1;
      o || (0 === t.length && (this.setState({
        emailClientError: er.intl.string(er.t.EkokLy)
      }), c = !0), 0 === n.length && (this.setState({
        usernameClientError: er.intl.string(er.t.EkokLy)
      }), c = !0), 0 === r.length && (this.setState({
        passwordClientError: er.intl.string(er.t.EkokLy)
      }), c = !0), null == i && (this.setState({
        dateOfBirthClientError: er.intl.string(er.t.EkokLy)
      }), c = !0)), o && a && (0 === l.length && (this.setState({
        globalNameClientError: er.intl.string(er.t.EkokLy)
      }), c = !0), null == i && (this.setState({
        dateOfBirthClientError: er.intl.string(er.t.EkokLy)
      }), c = !0)), c || this.handleRegister()
    }), es(this, "trackInputFocus", e => {
      K.default.track(Q.rMx.REGISTER_INPUT_FOCUS, {
        field: e
      })
    }), es(this, "trackInputBlur", e => {
      K.default.track(Q.rMx.REGISTER_INPUT_BLUR, {
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
      } = this.props;
      return (0, i.jsx)(ep, {
        username: e,
        suggestion: r,
        globalName: t,
        isUsernameFocused: n,
        onClickSuggestion: () => {
          null != this.usernameRef && this.usernameRef.focus(), null != r && r.length > 0 && this.setState({
            username: r
          })
        }
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
      isRateLimited: !1,
      globalNameFocused: !1,
      usernameFocused: !1,
      registering: !1,
      apiErrors: {}
    }
  }
}

function eh(e) {
  let t = (0, d.cj)([z.Z, U.default, f.Z, w.Z, Z.Z], () => ({
      consentRequired: z.Z.getAuthenticationConsentRequired(),
      authenticated: U.default.isAuthenticated(),
      isUnderage: f.Z.isUnderageAnonymous(),
      country: w.Z.getCountryCode(),
      hasLoggedInAccounts: Z.Z.getHasLoggedInAccounts()
    })),
    n = (0, d.e7)([D.Z], () => D.Z.registrationUsernameSuggestion()),
    [r, s] = l.useState($.EW.FULL);
  (0, E.Z)({
    type: u.ImpressionTypes.VIEW,
    name: u.ImpressionNames.USER_REGISTRATION,
    properties: {
      impression_group: u.ImpressionGroups.USER_REGISTRATION_FLOW,
      step: r
    }
  }, {}, [r]);
  let {
    enabled: a
  } = v.Z.useExperiment({
    location: "register"
  }, {
    autoTrackExposure: r === $.EW.INVITE
  });
  return (0, i.jsx)(ed, ea({
    onChangeStep: e => s(e),
    usernameSuggestion: n,
    inUnclaimedFlowExperiment: a
  }, e, t))
}

function ep(e) {
  let t, {
      username: n,
      suggestion: r,
      globalName: l,
      isUsernameFocused: s,
      onClickSuggestion: a
    } = e,
    o = (0, M.a)(n, !0, !0),
    u = n.length > 0;
  return t = u ? (0, c.EQ)(o).with({
    type: k.K.ERROR,
    message: c.P.select()
  }, e => (0, i.jsx)(p.Text, {
    className: ei.messageNegative,
    variant: "text-sm/normal",
    children: e
  })).with({
    type: k.K.AVAILABLE,
    message: c.P.select()
  }, e => (0, i.jsx)(p.Text, {
    className: ei.messagePositive,
    variant: "text-sm/normal",
    children: e
  })).otherwise(() => (0, i.jsx)(p.Text, {
    variant: "text-sm/normal",
    color: "text-default",
    children: er.intl.string(er.t.z7c4bG)
  })) : null != r && r.length > 0 && l.length > 0 ? (0, i.jsx)(p.Text, {
    variant: "text-sm/normal",
    color: "text-default",
    children: er.intl.format(er.t.nDGqqq, {
      suggestion: r,
      nameOnClick: a
    })
  }) : (0, i.jsx)(p.Text, {
    variant: "text-sm/normal",
    color: "text-default",
    children: er.intl.string(er.t.z7c4bG)
  }), (0, i.jsx)(B.Z, {
    show: u && (null == o ? void 0 : o.type) === k.K.ERROR || s,
    top: -12,
    bottom: 20,
    children: t
  })
}
es(ed, "defaultProps", {
  giftCodeResolved: !1,
  transitionTo: G.uL
})