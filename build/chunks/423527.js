/** Chunk was on 27978 **/
n.d(t, {
  Z: () => ed
}), n(757143), n(301563), n(566702), n(47120), n(627341);
var r, i = n(200651),
  o = n(192379),
  a = n(120356),
  l = n.n(a),
  s = n(593473),
  c = n(278074),
  u = n(990547),
  d = n(442837),
  h = n(846519),
  p = n(481060),
  g = n(893776),
  m = n(881052),
  f = n(899370),
  _ = n(224841),
  b = n(13430),
  N = n(213609),
  x = n(882037),
  v = n(254942),
  I = n(481230),
  E = n(388905),
  O = n(853268),
  j = n(639946),
  C = n(616952),
  S = n(792766),
  y = n(692483),
  T = n(100159),
  A = n(473855),
  P = n(726745),
  Z = n(929809),
  R = n(541692),
  w = n(986197),
  L = n(135200),
  D = n(219496),
  k = n(794099),
  W = n(807369),
  B = n(180529),
  M = n(108427),
  G = n(314897),
  U = n(480294),
  F = n(896797),
  z = n(626135),
  V = n(585483),
  H = n(70956),
  K = n(624138),
  q = n(481153),
  Y = n(588705),
  J = n(163671),
  Q = n(981631),
  X = n(355142),
  $ = n(188785),
  ee = n(701476),
  et = n(801461),
  en = n(388032),
  er = n(305616),
  ei = n(455812);

function eo(e, t, n) {
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
      eo(e, t, n[t])
    })
  }
  return e
}

function el(e, t) {
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
let es = /\.$/,
  ec = e => Array.isArray(e) ? e.map(e => e.replace(es, "")).join(". ").trim() : e;
class eu extends(r = o.PureComponent) {
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
      if (null != n.channel) return "dm_invite";
      if (null != n.inviter) return "friend_invite"
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
    z.default.track(Q.rMx.REGISTER_VIEWED, ea({
      location: null != t ? "Invite Register Page" : "Non-Invite Register Page",
      registration_source: this.registrationSource
    }, null != e ? (0, T.Z)(e, !1, !1) : {}), {
      flush: !0
    }), null == this.props.consentRequired && g.Z.getLocationMetadata(), (0, M.e)("register")
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
      invite: i,
      onChangeStep: o
    } = this.props, {
      apiErrors: a,
      parsedDateOfBirth: l
    } = this.state;
    (t.apiErrors !== a || t.parsedDateOfBirth !== l) && (this.hasError("email") || this.hasError("phone") ? null != this.emailRef && this.emailRef.focus() : this.hasError("username") ? null != this.usernameRef && this.usernameRef.focus() : this.hasError("global_name") ? null != this.globalNameRef && this.globalNameRef.focus() : this.hasError("password") ? null != this.passwordRef && this.passwordRef.focus() : null == this.state.parsedDateOfBirth ? null != this.dateOfBirthRef.current && this.dateOfBirthRef.current.focus() : this.hasError("retry_after") && "number" == typeof a.retry_after && (this.setState({
      isRateLimited: !0
    }), this._retryTimer.start(a.retry_after * H.Z.Millis.SECOND, () => {
      this.setState({
        isRateLimited: !1
      })
    }))), n && !e.authenticated && ((0, Z.c)(ee.M5.ORGANIC_REGISTERED), this.redirectIfAuthenticated());
    let s = X.EW.FULL;
    r || this.hasError("date_of_birth") ? s = X.EW.AGE_GATE : null != i && (null != i.guild || null != i.channel) && (s = X.EW.INVITE), o(s)
  }
  redirectIfAuthenticated() {
    let {
      authenticated: e,
      transitionTo: t,
      redirectTo: n
    } = this.props;
    e && t(null != n ? n : F.Z.defaultRoute)
  }
  async handleRegister() {
    let {
      email: e,
      username: t,
      globalName: n,
      password: r,
      consent: i,
      parsedDateOfBirth: o
    } = this.state, {
      invite: a,
      guildTemplate: l,
      giftCode: s,
      onRegister: c,
      usernameSuggestion: u,
      isMobileWebInviteRegistration: d
    } = this.props, h = null != a ? a.code : null, p = null != s ? s.skuId : null, g = x.MD.getState(), f = (0, K.Ew)(u) ? null : t === u, _ = $.a ? await (0, y.K)(t) : t, b = $.a ? await (0, y.K)(n) : n;
    V.S.dispatch(Q.CkL.WAVE_EMPHASIZE), this.setState({
      registering: !0,
      apiErrors: {}
    });
    try {
      d || null == a ? await (0, I.R$)({
        email: e,
        username: _,
        globalName: b,
        consent: i,
        password: r,
        invite: h,
        usedUsernameSuggestion: f,
        guildTemplateCode: null == l ? void 0 : l.code,
        giftCodeSKUId: p,
        birthday: o,
        promoEmailConsent: g.required ? g : null
      }) : await (0, I.ZP)({
        consent: i,
        invite: h,
        giftCodeSKUId: p,
        usedUsernameSuggestion: f,
        globalName: b
      }), null == c || c()
    } catch (t) {
      if (this.setState({
          registering: !1
        }), !(t instanceof m.Hx)) return;
      let e = (0, v.F)(t);
      this.setState({
        apiErrors: e
      })
    }
  }
  hasError(e) {
    return null != this.state.apiErrors[e]
  }
  renderConsentComponents() {
    let {
      consent: e
    } = this.state, {
      consentRequired: t
    } = this.props, n = null, r = null;
    return t ? r = (0, i.jsx)(O.Z, {
      value: e,
      onChange: e => this.setState({
        consent: e
      }),
      subText: en.NW.format(en.t.qMDAPz, {
        termsURL: Q.EYA.TERMS,
        privacyURL: Q.EYA.PRIVACY
      })
    }) : n = (0, i.jsx)(E.i_, {
      className: ei.marginTop8,
      children: en.NW.format(en.t["F+0zT0"], {
        termsURL: Q.EYA.TERMS,
        privacyURL: Q.EYA.PRIVACY
      })
    }), {
      subText: n,
      consentText: r
    }
  }
  renderInviteResolving() {
    let {
      authBoxClassName: e
    } = this.props, t = e => {
      this.setState({
        globalName: e
      })
    }, n = this.state.globalName;
    return (0, i.jsxs)(E.ZP, {
      className: e,
      children: [(0, i.jsx)(Y.R, {}), (0, i.jsxs)(E.gO, {
        className: ei.marginTop40,
        children: [(0, i.jsx)(p.vwX, {
          children: en.NW.string(en.t.TWzdWl)
        }), (0, i.jsx)(p.ua7, {
          text: en.NW.string(en.t["hBB85+"]),
          position: "right",
          color: p.ua7.Colors.BRAND,
          children: e => {
            let {
              onMouseEnter: r,
              onMouseLeave: o
            } = e;
            return (0, i.jsx)(E.II, {
              autoFocus: !0,
              className: ei.marginBottom8,
              name: "username",
              value: n,
              placeholder: en.NW.string(en.t["09Q8ys"]),
              onChange: t,
              onMouseEnter: r,
              onMouseLeave: o
            })
          }
        }), (0, i.jsx)(E.zx, {
          className: ei.marginTop20,
          disabled: !0,
          children: en.NW.string(en.t["3PatS0"])
        }), (0, i.jsx)(E.i_, {
          disabled: !0,
          className: ei.marginTop8,
          children: en.NW.format(en.t["F+0zT0"], {
            termsURL: Q.EYA.TERMS,
            privacyURL: Q.EYA.PRIVACY
          })
        }), $.a ? null : (0, i.jsx)(E.zx, {
          look: E.zx.Looks.LINK,
          color: E.zx.Colors.LINK,
          disabled: !0,
          className: ei.marginTop20,
          children: en.NW.string(en.t["r/jzu7"])
        })]
      })]
    })
  }
  renderInviteHeader() {
    let {
      invite: e
    } = this.props;
    return (null == e ? void 0 : e.stage_instance) != null && null != e.guild ? (0, i.jsx)(S.Z, {
      stageInstance: e.stage_instance,
      guild: e.guild
    }) : (null == e ? void 0 : e.guild_scheduled_event) != null ? (0, i.jsx)(j.r, {
      channel: e.channel,
      guildScheduledEvent: e.guild_scheduled_event
    }) : (0, i.jsx)(Y.Z, {
      invite: e
    })
  }
  renderInviteButton() {
    let {
      invite: e,
      consentRequired: t
    } = this.props, {
      consent: n,
      registering: r
    } = this.state, o = E.zx.Colors.BRAND, a = en.NW.string(en.t["3PatS0"]);
    return (null == e ? void 0 : e.stage_instance) != null && (o = E.zx.Colors.GREEN, a = en.NW.string(en.t["5UKyUl"])), (0, i.jsx)(p.ua7, {
      text: !n && t ? en.NW.string(en.t.AY4IVF) : null,
      children: e => (0, i.jsx)("div", el(ea({
        className: ei.marginTop20
      }, e), {
        children: (0, i.jsx)(E.zx, {
          type: "submit",
          submitting: r,
          disabled: !this.hasConsent(),
          color: o,
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
        global_name: r
      },
      globalName: o
    } = this.state, {
      subText: a,
      consentText: l
    } = this.renderConsentComponents(), s = (null == e ? void 0 : e.stage_instance) != null || (null == e ? void 0 : e.guild_scheduled_event) != null, c = e => {
      this.setState({
        globalName: e
      })
    };
    return (0, i.jsxs)("div", {
      children: [(0, i.jsxs)(E.ZP, {
        onSubmit: this.handleSubmit,
        tag: "form",
        className: t,
        children: [this.renderInviteHeader(), s ? (0, i.jsx)("div", {
          className: er.divider
        }) : null, (0, i.jsxs)(E.gO, {
          className: s ? void 0 : ei.marginTop40,
          children: [(0, i.jsx)(p.vwX, {
            error: ec(null != r ? r : n),
            children: en.NW.string(en.t["9AjdkJ"])
          }), (0, i.jsx)(p.ua7, {
            text: en.NW.string(en.t["hBB85+"]),
            position: "right",
            color: p.ua7.Colors.BRAND,
            children: e => {
              let {
                onMouseEnter: t,
                onMouseLeave: a
              } = e;
              return (0, i.jsx)(E.II, {
                autoFocus: !0,
                className: ei.marginBottom8,
                name: "global_name",
                value: o,
                placeholder: en.NW.string(en.t["09Q8ys"]),
                onChange: c,
                error: null != n || null != r ? "" : null,
                onMouseEnter: t,
                onMouseLeave: a
              })
            }
          }), (0, i.jsx)(p.Text, {
            variant: "text-sm/normal",
            color: "header-secondary",
            children: en.NW.string(en.t["330TCQ"])
          }), this.renderInviteButton(), a, l, $.a ? null : (0, i.jsx)(E.zx, {
            look: E.zx.Looks.LINK,
            color: E.zx.Colors.LINK,
            onClick: this.handleGotoLogin,
            className: ei.marginTop20,
            children: en.NW.string(en.t["r/jzu7"])
          })]
        })]
      }), null != e && s ? (0, i.jsx)(E.ZP, {
        className: ei.marginTop20,
        children: (0, i.jsx)(S.y, {
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
    return "string" != typeof e ? null : (0, i.jsx)(E.i_, {
      className: l()(ei.marginTop20, er.errorMessage),
      children: e
    })
  }
  renderFull(e, t) {
    let {
      email: n,
      username: r,
      globalName: a,
      password: s,
      consent: c,
      parsedDateOfBirth: u,
      globalNameFocused: d,
      emailClientError: h,
      usernameClientError: g,
      passwordClientError: m,
      dateOfBirthClientError: f,
      registering: _,
      apiErrors: {
        email: N,
        username: x,
        global_name: v,
        password: I,
        date_of_birth: O
      } = {}
    } = this.state, {
      consentRequired: j,
      isMobileWebInviteRegistration: S,
      uniqueUsernameRegistrationConfig: {
        suggestions: y
      },
      authBoxClassName: T,
      hasLoggedInAccounts: A
    } = this.props, {
      subText: P,
      consentText: Z
    } = this.renderConsentComponents(), R = this.renderErrorMessage(), D = (0, i.jsx)(p.ua7, {
      text: !c && j ? en.NW.string(en.t.AY4IVF) : null,
      children: e => (0, i.jsx)("div", el(ea({
        className: ei.marginTop20
      }, e), {
        children: (0, i.jsx)(E.zx, {
          type: "submit",
          submitting: _,
          disabled: !this.hasConsent() || this.state.isRateLimited,
          children: en.NW.string(en.t["3PatS0"])
        })
      }))
    }), k = async () => {
      this.setState({
        usernameFocused: !0
      }), y && a.length > 0 && !L.Z.wasRegistrationSuggestionFetched(a) && await w.Z.fetchSuggestionsRegistration(a)
    }, W = null != e ? (0, i.jsx)(o.Fragment, {
      children: e()
    }, "custom-header") : (0, i.jsx)(E.Dx, {
      children: en.NW.string(en.t.wC4TlZ)
    }, "title"), M = (0, i.jsxs)(E.gO, {
      className: ei.marginTop20,
      children: [(0, i.jsx)(E.II, {
        autoFocus: !0,
        className: ei.marginBottom20,
        label: en.NW.string(en.t.dI4d4e),
        name: "email",
        value: n,
        onChange: e => this.setState({
          email: e,
          emailClientError: 0 === e.length ? en.NW.string(en.t.EkokLy) : null
        }),
        error: null != h ? h : ec(N),
        type: "email",
        setRef: e => {
          this.emailRef = e
        },
        required: !0
      }), (0, i.jsx)(E.II, {
        label: en.NW.string(en.t["9AjdkJ"]),
        className: ei.marginBottom20,
        name: "global_name",
        value: a,
        onChange: e => this.setState({
          globalName: e
        }),
        error: ec(v),
        maxLength: et.hy,
        setRef: e => {
          this.globalNameRef = e
        },
        onFocus: () => this.setState({
          globalNameFocused: !0
        }),
        onBlur: () => this.setState({
          globalNameFocused: !1
        })
      }), (0, i.jsx)(B.Z, {
        show: d,
        top: -12,
        bottom: 20,
        children: (0, i.jsx)(p.Text, {
          variant: "text-sm/normal",
          color: "text-normal",
          children: en.NW.string(en.t["330TCQ"])
        })
      }), (0, i.jsxs)("div", {
        onBlur: () => this.setState({
          usernameFocused: !1
        }),
        onFocus: k,
        tabIndex: -1,
        children: [(0, i.jsx)(E.II, {
          label: en.NW.string(en.t.TWzdWl),
          className: ei.marginBottom20,
          name: "username",
          value: r,
          onChange: e => {
            this.setState({
              username: e.toLocaleLowerCase(),
              usernameClientError: 0 === e.length ? en.NW.string(en.t.EkokLy) : null
            })
          },
          error: null != g ? g : ec(x),
          setRef: e => {
            this.usernameRef = e
          },
          required: !0
        }), this.renderUsernameValidation()]
      }), (0, i.jsx)(E.II, {
        label: en.NW.string(en.t["CIGa+/"]),
        name: "password",
        value: s,
        onChange: e => this.setState({
          password: e,
          passwordClientError: 0 === e.length ? en.NW.string(en.t.EkokLy) : null
        }),
        error: null != m ? m : ec(I),
        type: "password",
        setRef: e => {
          this.passwordRef = e
        },
        required: !0
      }), (0, i.jsx)(b.Z, {
        label: en.NW.string(en.t.rhBeKS),
        wrapperClassName: ei.marginTop20,
        name: "date_of_birth",
        onChange: this.handleBirthdayChange,
        ref: this.dateOfBirthRef,
        error: null != f ? f : ec(O),
        value: u,
        required: !0
      }), (0, i.jsx)(C.Z, {}), D, R, Z, P, $.a ? null : (0, i.jsx)(E.zx, {
        look: S ? E.zx.Looks.FILLED : E.zx.Looks.LINK,
        color: S ? E.zx.Colors.PRIMARY : E.zx.Colors.LINK,
        onClick: this.handleGotoLogin,
        className: ei.marginTop20,
        children: en.NW.string(en.t["r/jzu7"])
      })]
    });
    return t ? (0, i.jsx)(J.Z, {
      onSubmit: this.handleSubmit,
      tag: "form",
      className: l()(T, er.horizontalAuthBox),
      children: () => [W, (0, i.jsxs)("div", {
        className: er.flex,
        children: [(0, i.jsx)(E.Dx, {
          className: er.createAccountTemplateHeader,
          children: en.NW.string(en.t.wC4TlZ)
        }), M]
      }, "register-title")]
    }) : (0, i.jsxs)(E.ZP, {
      onSubmit: this.handleSubmit,
      tag: "form",
      className: T,
      children: [A && !S ? (0, i.jsx)(E.zx, {
        onClick: this.handleGotoLogin,
        look: E.zx.Looks.LINK,
        color: E.zx.Colors.PRIMARY,
        className: er.goBackButton,
        children: (0, i.jsxs)("div", {
          className: er.content,
          children: [(0, i.jsx)(p.V7D, {
            size: "xs",
            color: "currentColor",
            className: er.caret
          }), (0, i.jsx)(p.Text, {
            variant: "text-md/normal",
            children: en.NW.string(en.t["1MrpWF"])
          })]
        })
      }) : null, W, M]
    })
  }
  render() {
    let {
      isUnderage: e,
      isMobileWebInviteRegistration: t
    } = this.props;
    if (e || this.hasError("date_of_birth")) return (0, i.jsx)(_.Z, {});
    let {
      invite: n,
      giftCode: r,
      guildTemplate: o
    } = this.props, a = null != n && null == n.guild && null == n.channel && null != n.inviter;
    return null == n || a || t ? null != o ? this.renderFull(() => (0, i.jsx)(A.Z, {
      guildTemplate: o
    }), !0) : null != r ? this.renderFull(() => (0, i.jsx)(q.Z, {
      giftCode: r
    })) : null != n && a && n.state === Q.r2o.RESOLVED && !t ? this.renderFull(() => (0, i.jsx)(Y.Z, {
      invite: n,
      isRegister: !0
    })) : this.renderFull() : n.state === Q.r2o.RESOLVING ? this.renderInviteResolving() : this.renderInvite()
  }
  constructor(e) {
    var t;
    super(e), eo(this, "emailRef", void 0), eo(this, "usernameRef", void 0), eo(this, "globalNameRef", void 0), eo(this, "passwordRef", void 0), eo(this, "dateOfBirthRef", o.createRef()), eo(this, "_retryTimer", new h.V7), eo(this, "handleGotoLogin", e => {
      let t;
      let {
        email: n
      } = this.state, {
        giftCode: r,
        guildTemplate: i,
        invite: o,
        location: a,
        onLoginStart: l,
        redirectTo: c,
        transitionTo: u,
        isMobileWebInviteRegistration: d
      } = this.props;
      if (d) {
        null == l || l(e);
        return
      }
      let h = null != a ? (0, s.parse)(a.search) : {};
      null != o ? t = Q.Z5c.INVITE_LOGIN(o.code) : null != r ? t = Q.Z5c.GIFT_CODE_LOGIN(r.code) : null != i ? t = Q.Z5c.GUILD_TEMPLATE_LOGIN(i.code) : null != c ? (t = Q.Z5c.LOGIN, h.redirect_to = c) : (t = Q.Z5c.LOGIN, "" !== n && (h = {
        email: n
      })), g.Z.loginReset(), u(t, {
        search: (0, s.stringify)(h)
      }), null == l || l(e), V.S.dispatch(Q.CkL.WAVE_EMPHASIZE)
    }), eo(this, "handleSubmit", e => {
      null == e || e.preventDefault();
      let {
        email: t,
        username: n,
        password: r,
        parsedDateOfBirth: i
      } = this.state, {
        invite: o,
        consentRequired: a
      } = this.props;
      if (null !== a) {
        if (null == o) {
          let e = !1;
          if (0 === t.length && (this.setState({
              emailClientError: en.NW.string(en.t.EkokLy)
            }), e = !0), 0 === n.length && (this.setState({
              usernameClientError: en.NW.string(en.t.EkokLy)
            }), e = !0), 0 === r.length && (this.setState({
              passwordClientError: en.NW.string(en.t.EkokLy)
            }), e = !0), null == i && (this.setState({
              dateOfBirthClientError: en.NW.string(en.t.EkokLy)
            }), e = !0), e) return
        }
        this.handleRegister()
      }
    }), eo(this, "handleBirthdayChange", e => {
      this.setState({
        parsedDateOfBirth: e
      }), null != e && this.setState({
        dateOfBirthClientError: null
      })
    }), eo(this, "renderUsernameValidation", () => {
      let {
        username: e,
        globalName: t,
        usernameFocused: n
      } = this.state, {
        usernameSuggestion: r,
        uniqueUsernameRegistrationConfig: {
          livecheckEnabled: o
        }
      } = this.props;
      return (0, i.jsx)(eh, {
        username: e,
        suggestion: r,
        livecheckEnabled: o,
        globalName: t,
        isUsernameFocused: n,
        onClickSuggestion: () => {
          null != this.usernameRef && this.usernameRef.focus(), null != r && r.length > 0 && this.setState({
            username: r
          })
        }
      })
    });
    let n = null != e.location ? (0, s.parse)(e.location.search) : {};
    this.state = {
      email: null !== (t = n.email) && void 0 !== t ? t : "",
      username: "",
      globalName: "",
      password: "",
      parsedDateOfBirth: null,
      emailClientError: null,
      usernameClientError: null,
      passwordClientError: null,
      dateOfBirthClientError: null,
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

function ed(e) {
  let t = (0, d.cj)([U.Z, G.default, f.Z, R.Z, P.Z], () => ({
      consentRequired: U.Z.getAuthenticationConsentRequired(),
      authenticated: G.default.isAuthenticated(),
      isUnderage: f.Z.isUnderageAnonymous(),
      country: R.Z.getCountryCode(),
      hasLoggedInAccounts: P.Z.getHasLoggedInAccounts()
    })),
    n = (0, k.F4)(),
    r = (0, d.e7)([L.Z], () => L.Z.registrationUsernameSuggestion()),
    [a, l] = o.useState(X.EW.FULL);
  return (0, N.Z)({
    type: u.ImpressionTypes.VIEW,
    name: u.ImpressionNames.USER_REGISTRATION,
    properties: {
      impression_group: u.ImpressionGroups.USER_REGISTRATION_FLOW,
      step: a
    }
  }, {}, [a]), (0, i.jsx)(eu, ea({
    onChangeStep: e => l(e),
    uniqueUsernameRegistrationConfig: n,
    usernameSuggestion: r
  }, e, t))
}

function eh(e) {
  let t, {
      username: n,
      suggestion: r,
      globalName: o,
      livecheckEnabled: a,
      isUsernameFocused: l,
      onClickSuggestion: s
    } = e,
    u = (0, W.a)(n, a, !0),
    d = a && n.length > 0;
  return t = d ? (0, c.EQ)(u).with({
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
    color: "text-normal",
    children: en.NW.string(en.t.z7c4bG)
  })) : null != r && r.length > 0 && o.length > 0 ? (0, i.jsx)(p.Text, {
    variant: "text-sm/normal",
    color: "text-normal",
    children: en.NW.format(en.t.nDGqqq, {
      suggestion: r,
      nameOnClick: s
    })
  }) : (0, i.jsx)(p.Text, {
    variant: "text-sm/normal",
    color: "text-normal",
    children: en.NW.string(en.t.z7c4bG)
  }), (0, i.jsx)(B.Z, {
    show: d && (null == u ? void 0 : u.type) === D.K.ERROR || l,
    top: -12,
    bottom: 20,
    children: t
  })
}
eo(eu, "defaultProps", {
  giftCodeResolved: !1,
  transitionTo: e => n.g.location.assign(e)
})