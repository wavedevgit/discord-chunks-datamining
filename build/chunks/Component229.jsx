/** Chunk was on 86142 **/
/** chunk id: 229, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => ea
}), require("./747238.js"), require("./812715.js"), require("./733351.js"), require("./896048.js"), require("./801541.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk492462 = require("./492462.js"),
  Chunk889137 = require("./889137.js"),
  Chunk110259 = require("./110259.js"),
  Chunk311907 = require("./311907.js"),
  Chunk451988 = require("./451988.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk830215 = require("./830215.js"),
  Chunk198982 = require("./198982.js"),
  Chunk17841 = require("./17841.js"),
  Chunk965252 = require("./965252.jsx"),
  Chunk201505 = require("./201505.jsx"),
  Chunk139286 = require("./139286.js"),
  Chunk934337 = require("./934337.js"),
  Chunk15552 = require("./15552.js"),
  Chunk906564 = require("./906564.js"),
  Chunk854378 = require("./854378.jsx"),
  Chunk359438 = require("./359438.jsx"),
  Chunk442184 = require("./442184.jsx"),
  Chunk383302 = require("./383302.jsx");
require("./829926.js");
var Chunk491509 = require("./491509.js"),
  Chunk895600 = require("./895600.jsx"),
  Chunk274303 = require("./274303.js"),
  Chunk942614 = require("./942614.js"),
  Chunk148864 = require("./148864.js"),
  Chunk32120 = require("./32120.js"),
  Chunk574454 = require("./574454.js"),
  Chunk963334 = require("./963334.js"),
  Chunk781436 = require("./781436.js"),
  Chunk926451 = require("./926451.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk210714 = require("./210714.js"),
  Chunk961350 = require("./961350.js"),
  Chunk153488 = require("./153488.js"),
  Chunk650048 = require("./650048.js"),
  Chunk954571 = require("./954571.js"),
  Chunk203982 = require("./203982.js"),
  Chunk927813 = require("./927813.js"),
  Chunk240248 = require("./240248.js"),
  Chunk161928 = require("./161928.jsx"),
  Chunk890698 = require("./890698.jsx"),
  Chunk538796 = require("./538796.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk68729 = require("./68729.js");
require("./436317.js");
var Chunk771016 = require("./771016.js");
require("./789622.js");
var Chunk985018 = require("./985018.jsx"),
  Chunk246313 = require("./246313.js"),
  Chunk473169 = require("./473169.js");

function en(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function er(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      en(e, t, n[t])
    })
  }
  return e
}
Chunk311907.Ay.initialize();
let ei = /\.$/,
  es = e => Array.isArray(e) ? e.map(e => e.replace(ei, "")).join(". ").trim() : e;
class el extends(r = Chunk64700.PureComponent) {
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
    W.default.track(J.HAw.REGISTER_VIEWED, er({
      location: null != t ? "Invite Register Page" : "Non-Invite Register Page",
      registration_source: this.registrationSource
    }, null != e ? (0, N.A)(e, false, false) : {}), {
      flush: true
    }), null == this.props.consentRequired && _.A.getLocationMetadata(), (0, G.d)("register")
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
    }), this._retryTimer.start(s.retry_after * K.A.Millis.SECOND, () => {
      this.setState({
        isRateLimited: false
      })
    }))), n && !e.authenticated && ((0, R.C)(Z.zY.ORGANIC_REGISTERED), this.redirectIfAuthenticated());
    let a = X.ju.FULL;
    r || this.hasError("date_of_birth") ? a = X.ju.AGE_GATE : this.inGuildOrChannelInviteFlow() && (a = X.ju.INVITE), i(a)
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
    e && t(null != n ? n : V.A.defaultRoute)
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
      usernameSuggestion: d
    } = this.props, u = null != l ? l.code : null, h = null != o ? o.skuId : null, p = v.mZ.getState(), g = (0, z.uJ)(d) ? null : t === d;
    H._.dispatch(J.jej.WAVE_EMPHASIZE), this.setState({
      registering: true,
      apiErrors: {}
    });
    try {
      this.inGuildOrChannelInviteFlow() ? await (0, y.Ay)({
        consent: i,
        invite: u,
        giftCodeSKUId: h,
        usedUsernameSuggestion: g,
        globalName: n,
        birthday: s
      }) : await (0, y.pG)({
        email: e,
        username: t,
        globalName: n,
        consent: i,
        password: r,
        invite: u,
        usedUsernameSuggestion: g,
        guildTemplateCode: null == a ? true : a.code,
        giftCodeSKUId: h,
        birthday: s,
        promoEmailConsent: p.required ? p : null
      }), null == c || c()
    } catch (t) {
      if (this.setState({
          registering: false
        }), !(t instanceof f.LG)) return;
      let e = (0, b.W)(t);
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
      className: ee.IQ,
      children: (0, i.jsx)(g.JuY, {
        label: $.intl.format($.t.qMDAP0, {
          termsURL: J.X7G.TERMS,
          privacyURL: J.X7G.PRIVACY
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
      className: a()(et.Ot, ee.E2),
      children: $.intl.format($.t["KI+BSb"], {
        termsURL: J.X7G.TERMS,
        privacyURL: J.X7G.PRIVACY
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
    return (0, i.jsxs)(j.Ay, {
      className: e,
      children: [(0, i.jsx)(q.M, {}), (0, i.jsxs)(j.eB, {
        className: ee.y0,
        children: [(0, i.jsx)(p.m, {
          text: $.intl.string($.t["hBB85/"]),
          position: "right",
          children: (0, i.jsx)(j.pd, {
            label: $.intl.string($.t["9AjdkD"]),
            autoFocus: true,
            className: et.QB,
            name: "username",
            value: n,
            placeholder: $.intl.string($.t["09Q8yp"]),
            onChange: t,
            onFocus: () => this.trackInputFocus("username"),
            onBlur: () => this.trackInputBlur("username")
          })
        }), (0, i.jsx)(g.Text, {
          variant: "text-sm/normal",
          color: "text-subtle",
          className: a()(et.QX, ee.E2),
          children: $.intl.format($.t["KI+BSb"], {
            termsURL: J.X7G.TERMS,
            privacyURL: J.X7G.PRIVACY
          })
        }), (0, i.jsx)("div", {
          className: et.Ot,
          children: (0, i.jsx)(g.Button, {
            text: $.intl.string($.t["825cFy"]),
            variant: "primary",
            fullWidth: true,
            disabled: true
          })
        }), (0, i.jsx)("div", {
          className: et.QX,
          children: (0, i.jsx)(g.QWc, {
            text: $.intl.string($.t["1lWxux"]),
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
    return (null == e ? true : e.guild_scheduled_event) != null ? (0, i.jsx)(I.X, {
      channel: e.channel,
      guildScheduledEvent: e.guild_scheduled_event
    }) : (0, i.jsx)("div", {
      className: et.S3,
      children: (0, i.jsx)(q.A, {
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
    } = this.state, r = $.intl.string($.t["825cFy"]);
    return (0, i.jsx)(p.m, {
      text: !t && e ? $.intl.string($.t.AY4IVA) : null,
      children: (0, i.jsx)("div", {
        className: et.Ot,
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
      globalName: l,
      globalNameClientError: a,
      dateOfBirthClientError: o,
      parsedDateOfBirth: c
    } = this.state, d = (null == e ? true : e.guild_scheduled_event) != null, u = e => {
      this.setState({
        globalName: e
      })
    };
    return (0, i.jsxs)("div", {
      children: [(0, i.jsxs)(j.Ay, {
        onSubmit: this.handleSubmit,
        tag: "form",
        className: t,
        children: [this.renderInviteHeader(), d ? (0, i.jsx)("div", {
          className: ee.yF
        }) : null, (0, i.jsxs)(j.eB, {
          className: d ? true : ee.y0,
          children: [(0, i.jsx)(g.ksK, {
            helperText: $.intl.string($.t["330TCc"]),
            label: $.intl.string($.t["9AjdkD"]),
            error: null != a ? a : es(null != r ? r : n),
            autoFocus: true,
            name: "global_name",
            value: l,
            placeholder: $.intl.string($.t["09Q8yp"]),
            onChange: u,
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
          }), (0, i.jsx)(x.A, {
            label: $.intl.string($.t.rhBeKe),
            wrapperClassName: ee.DC,
            name: "date_of_birth",
            onChange: this.handleBirthdayChange,
            ref: this.dateOfBirthRef,
            error: null != o ? o : es(s),
            value: c
          }), this.renderConsentComponent(), this.renderInviteButton(), (0, i.jsx)("div", {
            className: et.QX,
            children: (0, i.jsx)(g.QWc, {
              text: $.intl.string($.t["1lWxux"]),
              textVariant: "text-sm/normal",
              onClick: this.handleGotoLogin
            })
          })]
        })]
      }), null != e && d ? (0, i.jsx)(j.Ay, {
        className: et.QX,
        children: (0, i.jsx)(S.N, {
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
    return "string" != typeof e ? null : (0, i.jsx)(j.ME, {
      className: a()(et.QX, ee.gJ),
      children: e
    })
  }
  renderFull(e, t) {
    let {
      email: n,
      username: r,
      globalName: l,
      password: o,
      consent: c,
      parsedDateOfBirth: d,
      globalNameFocused: u,
      emailClientError: h,
      usernameClientError: _,
      passwordClientError: f,
      dateOfBirthClientError: m,
      registering: A,
      apiErrors: {
        email: E,
        username: v,
        global_name: b,
        password: y,
        date_of_birth: I
      } = {}
    } = this.state, {
      consentRequired: S,
      authBoxClassName: N,
      hasLoggedInAccounts: C
    } = this.props, T = this.renderErrorMessage(), R = (0, i.jsx)(p.m, {
      text: !c && S ? $.intl.string($.t.AY4IVA) : null,
      children: (0, i.jsx)("div", {
        className: et.QX,
        children: (0, i.jsx)(g.Button, {
          text: $.intl.string($.t["825cFy"]),
          variant: "primary",
          fullWidth: true,
          type: "submit",
          loading: A,
          disabled: !this.hasConsent() || this.state.isRateLimited
        })
      })
    }), w = async () => {
      this.setState({
        usernameFocused: true
      }), l.length > 0 && !k.A.wasRegistrationSuggestionFetched(l) && await P.A.fetchSuggestionsRegistration(l)
    }, L = e => {
      this.setState({
        username: e.toLocaleLowerCase(),
        usernameClientError: 0 === e.length ? $.intl.string($.t.EkokLy) : null
      })
    }, D = null != e ? (0, i.jsx)(s.Fragment, {
      children: e()
    }, "custom-header") : (0, i.jsx)(j.hE, {
      children: $.intl.string($.t.wC4TlR)
    }, "title"), U = (0, i.jsxs)(j.eB, {
      className: et.QX,
      children: [(0, i.jsx)(j.pd, {
        autoFocus: true,
        className: et.SX,
        label: $.intl.string($.t.dI4d4S),
        name: "email",
        value: n,
        onChange: e => this.setState({
          email: e,
          emailClientError: 0 === e.length ? $.intl.string($.t.EkokLy) : null
        }),
        error: null != h ? h : es(E),
        type: "email",
        autoComplete: "username",
        setRef: e => {
          this.emailRef = e
        },
        required: true,
        onFocus: () => this.trackInputFocus("email"),
        onBlur: () => this.trackInputBlur("email")
      }), (0, i.jsx)(j.pd, {
        label: $.intl.string($.t["9AjdkD"]),
        className: et.SX,
        name: "global_name",
        value: l,
        onChange: e => this.setState({
          globalName: e
        }),
        error: es(b),
        maxLength: 32,
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
      }), (0, i.jsx)(B.A, {
        show: u,
        top: false,
        bottom: 20,
        children: (0, i.jsx)(g.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: $.intl.string($.t["330TCc"])
        })
      }), (0, i.jsxs)("div", {
        onBlur: () => this.setState({
          usernameFocused: false
        }),
        onFocus: w,
        tabIndex: false,
        children: [(0, i.jsx)(j.pd, {
          label: $.intl.string($.t.TWzdWj),
          className: et.SX,
          name: "username",
          value: r,
          onChange: L,
          error: null != _ ? _ : es(v),
          autoComplete: "off",
          setRef: e => {
            this.usernameRef = e
          },
          required: true,
          onFocus: () => this.trackInputFocus("username"),
          onBlur: () => this.trackInputBlur("username")
        }), this.renderUsernameValidation()]
      }), (0, i.jsx)(j.pd, {
        label: $.intl.string($.t["CIGa+7"]),
        name: "password",
        value: o,
        onChange: e => this.setState({
          password: e,
          passwordClientError: 0 === e.length ? $.intl.string($.t.EkokLy) : null
        }),
        error: null != f ? f : es(y),
        type: "password",
        autoComplete: "new-password",
        setRef: e => {
          this.passwordRef = e
        },
        required: true,
        onFocus: () => this.trackInputFocus("password"),
        onBlur: () => this.trackInputBlur("password")
      }), (0, i.jsx)(x.A, {
        label: $.intl.string($.t.rhBeKe),
        wrapperClassName: ee.UJ,
        name: "date_of_birth",
        onChange: this.handleBirthdayChange,
        ref: this.dateOfBirthRef,
        error: null != m ? m : es(I),
        value: d,
        required: true,
        onFocus: this.trackInputFocus,
        onBlur: this.trackInputBlur
      }), (0, i.jsx)(O.A, {}), this.renderConsentComponent(), R, T, (0, i.jsx)("div", {
        className: et.QX,
        children: (0, i.jsx)(g.QWc, {
          text: $.intl.string($.t["1lWxux"]),
          textVariant: "text-sm/normal",
          onClick: this.handleGotoLogin
        })
      })]
    });
    return t ? (0, i.jsx)(Y.A, {
      onSubmit: this.handleSubmit,
      tag: "form",
      className: a()(N, ee.Sy),
      children: () => [D, (0, i.jsxs)("div", {
        className: ee.Uu,
        children: [(0, i.jsx)(j.hE, {
          className: ee.lR,
          children: $.intl.string($.t.wC4TlR)
        }), U]
      }, "register-title")]
    }) : (0, i.jsxs)(j.Ay, {
      onSubmit: this.handleSubmit,
      tag: "form",
      className: N,
      children: [C ? (0, i.jsx)("div", {
        className: ee.AX,
        children: (0, i.jsx)(g.Button, {
          onClick: this.handleGotoLogin,
          variant: "secondary",
          text: $.intl.string($.t["1MrpWO"]),
          icon: g.n2b,
          iconPosition: "start"
        })
      }) : null, D, U]
    })
  }
  render() {
    let {
      isUnderage: e
    } = this.props, t = this.inGuildOrChannelInviteFlow();
    if (e || this.hasError("date_of_birth")) return (0, i.jsx)(A.A, {});
    let {
      giftCode: n,
      invite: r,
      guildTemplate: s
    } = this.props, l = null != r && null == r.guild && null == r.channel && null != r.inviter;
    return null != r && t ? r.state === J.elq.RESOLVING ? this.renderInviteResolving() : this.renderInvite() : null != s ? this.renderFull(() => (0, i.jsx)(C.A, {
      guildTemplate: s
    }), true) : null != n ? this.renderFull(() => (0, i.jsx)(Q.A, {
      giftCode: n
    })) : null != r && l && r.state === J.elq.RESOLVED ? this.renderFull(() => (0, i.jsx)("div", {
      className: et.S3,
      children: (0, i.jsx)(q.A, {
        invite: r,
        isRegister: true
      })
    })) : this.renderFull()
  }
  constructor(e) {
    var t;
    super(e), en(this, "emailRef", true), en(this, "usernameRef", true), en(this, "globalNameRef", true), en(this, "passwordRef", true), en(this, "dateOfBirthRef", s.createRef()), en(this, "_retryTimer", new h.Ep), en(this, "handleGotoLogin", e => {
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
          transitionTo: d
        } = this.props,
        u = null != l ? (0, o.parse)(l.search) : {};
      null != s ? t = J.BVt.INVITE_LOGIN(s.code) : null != r ? t = J.BVt.GIFT_CODE_LOGIN(r.code) : null != i ? t = J.BVt.GUILD_TEMPLATE_LOGIN(i.code) : null != c ? (t = J.BVt.LOGIN, u.redirect_to = c) : (t = J.BVt.LOGIN, "" !== n && (u = {
        email: n
      })), _.A.loginReset(), d(t, {
        search: (0, o.stringify)(u),
        source: "register"
      }), null == a || a(e), H._.dispatch(J.jej.WAVE_EMPHASIZE)
    }), en(this, "handleSubmit", e => {
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
      a ? 0 === s.length && (this.setState({
        globalNameClientError: $.intl.string($.t.EkokLy)
      }), o = true) : (0 === t.length && (this.setState({
        emailClientError: $.intl.string($.t.EkokLy)
      }), o = true), 0 === n.length && (this.setState({
        usernameClientError: $.intl.string($.t.EkokLy)
      }), o = true), 0 === r.length && (this.setState({
        passwordClientError: $.intl.string($.t.EkokLy)
      }), o = true)), null == i && (this.setState({
        dateOfBirthClientError: $.intl.string($.t.EkokLy)
      }), o = true), o || this.handleRegister()
    }), en(this, "trackInputFocus", e => {
      W.default.track(J.HAw.REGISTER_INPUT_FOCUS, {
        field: e
      })
    }), en(this, "trackInputBlur", e => {
      W.default.track(J.HAw.REGISTER_INPUT_BLUR, {
        field: e
      })
    }), en(this, "handleBirthdayChange", e => {
      this.setState({
        parsedDateOfBirth: e
      }), null != e && this.setState({
        dateOfBirthClientError: null
      })
    }), en(this, "renderUsernameValidation", () => {
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
      return (0, i.jsx)(eo, {
        username: e,
        suggestion: r,
        globalName: t,
        isUsernameFocused: n,
        onClickSuggestion: s
      })
    });
    const n = null != e.location ? (0, o.parse)(e.location.search) : {};
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

function ea(e) {
  let t = (0, u.cf)([F.A, M.default, m.A, w.A, T.A], () => ({
      consentRequired: F.A.getAuthenticationConsentRequired(),
      authenticated: M.default.isAuthenticated(),
      isUnderage: m.A.isUnderageAnonymous(),
      country: w.A.getCountryCode(),
      hasLoggedInAccounts: T.A.getHasLoggedInAccounts()
    })),
    n = (0, u.bG)([k.A], () => k.A.registrationUsernameSuggestion()),
    [r, l] = s.useState(X.ju.FULL);
  return (0, E.A)({
    type: d.ImpressionTypes.VIEW,
    name: d.ImpressionNames.USER_REGISTRATION,
    properties: {
      impression_group: d.ImpressionGroups.USER_REGISTRATION_FLOW,
      step: r
    }
  }, {}, [r]), (0, i.jsx)(el, er({
    onChangeStep: e => l(e),
    usernameSuggestion: n
  }, e, t))
}

function eo(e) {
  let t, {
      username: n,
      suggestion: r,
      globalName: s,
      isUsernameFocused: l,
      onClickSuggestion: a
    } = e,
    o = (0, D.i)(n, true, true),
    d = n.length > 0;
  return t = d ? (0, c.YW)(o).with({
    type: L.q.ERROR,
    message: c.P.select()
  }, e => (0, i.jsx)(g.Text, {
    className: ee.vU,
    variant: "text-sm/normal",
    children: e
  })).with({
    type: L.q.AVAILABLE,
    message: c.P.select()
  }, e => (0, i.jsx)(g.Text, {
    className: ee.vq,
    variant: "text-sm/normal",
    children: e
  })).otherwise(() => (0, i.jsx)(g.Text, {
    variant: "text-sm/normal",
    color: "text-default",
    children: $.intl.string($.t.z7c4bP)
  })) : null != r && r.length > 0 && s.length > 0 ? (0, i.jsx)(g.Text, {
    variant: "text-sm/normal",
    color: "text-default",
    children: $.intl.format($.t.nDGqqq, {
      suggestion: r,
      nameOnClick: a
    })
  }) : (0, i.jsx)(g.Text, {
    variant: "text-sm/normal",
    color: "text-default",
    children: $.intl.string($.t.z7c4bP)
  }), (0, i.jsx)(B.A, {
    show: d && (null == o ? true : o.type) === L.q.ERROR || l,
    top: false,
    bottom: 20,
    children: t
  })
}
en(el, "defaultProps", {
  giftCodeResolved: false,
  transitionTo: Chunk976860.pX
})