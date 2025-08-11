/** Chunk was on 74941 **/
/** chunk id: 479495, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./35282.js");
var n, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk593473 = require("./593473.js"),
  Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk893776 = require("./893776.js"),
  Chunk129293 = require("./129293.js"),
  Chunk254942 = require("./254942.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk17894 = require("./17894.js"),
  Chunk124860 = require("./124860.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk108427 = require("./108427.js"),
  Chunk314897 = require("./314897.js"),
  Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk20493 = require("./20493.js");

function C(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = r, e
}
Chunk442837.ZP.initialize();
class P extends(n = Chunk73800.PureComponent) {
  componentDidMount() {
    (0, Chunk108427.e)("reset_password")
  }
  renderPasswordReset() {
    let {
      password: e,
      error: t,
      hasCancel: n,
      working: i
    } = this.state, {
      theme: l,
      authBoxClassName: o
    } = this.props, a = null != exports ? exports : this.renderError("password");
    return (0, Chunk255367.jsxs)(Chunk388905.ZP, {
      onSubmit: this.handleSubmit,
      tag: "form",
      theme: Chunk120356,
      className: o,
      children: [(0, Chunk255367.jsx)("img", {
        alt: "",
        src: null == Chunk593473 ? require("./26230.js") : require("./935227.js"),
        className: Chunk20493.marginBottom20
      }), (0, Chunk255367.jsx)(Chunk388905.Dx, {
        children: Chunk388032.intl.string(Chunk388032.t["1LV6Ki"])
      }), (0, Chunk255367.jsxs)(Chunk388905.gO, {
        className: Chunk20493.marginTop20,
        children: [(0, Chunk255367.jsx)(Chunk388905.II, {
          label: Chunk388032.intl.string(Chunk388032.t["8dM4FB"]),
          className: Chunk20493.marginBottom20,
          name: "password",
          value: module,
          onChange: e => this.setState({
            password: e
          }),
          error: Chunk593473,
          type: "password"
        }), (0, Chunk255367.jsx)(Chunk388905.zx, {
          type: "submit",
          submitting: Chunk73800,
          children: Chunk388032.intl.string(Chunk388032.t["FRep5+"])
        }), n ? (0, Chunk255367.jsx)(Chunk388905.zx, {
          className: Chunk20493.marginTop8,
          onClick: this.handleGoToLogin,
          submitting: Chunk73800,
          color: Chunk388905.zx.Colors.PRIMARY,
          children: Chunk388032.intl.string(Chunk388032.t["ETE/oK"])
        }) : null]
      })]
    })
  }
  renderMFA() {
    let {
      mfaTicket: e,
      mfaMethods: t,
      theme: r,
      authBoxClassName: n,
      width: i
    } = this.props;
    return (0, Chunk255367.jsx)(Chunk388905.ZP, {
      style: {
        padding: 0
      },
      theme: require,
      className: n,
      children: (0, Chunk255367.jsx)(Chunk124860.Cd, {
        mfaFinish: e => {
          let {
            mfaType: t,
            data: r
          } = e;
          return this.handleTokenSubmitMFAv2(t, r)
        },
        mfaChallenge: {
          ticket: module,
          methods: exports
        },
        onEarlyClose: () => {
          Chunk570140.Z.dispatch({
            type: "LOGIN_RESET"
          })
        },
        width: null != Chunk73800 ? Chunk73800 : 480
      })
    })
  }
  renderSucceeded() {
    let {
      theme: e,
      authBoxClassName: t
    } = this.props;
    return (0, Chunk255367.jsxs)(Chunk388905.ZP, {
      theme: module,
      className: exports,
      children: [(0, Chunk255367.jsx)("img", {
        alt: "",
        src: require("./26230.js"),
        className: o()(Chunk20493.marginBottom20, Chunk873546.tq ? Chunk20493.marginTop20 : "")
      }), (0, Chunk255367.jsx)(Chunk388905.Dx, {
        className: Chunk20493.marginBottom40,
        children: Chunk388032.intl.string(Chunk388032.t.WAUOoK)
      }), (0, Chunk255367.jsx)(Chunk388905.zx, {
        onClick: this.handleOpenApp,
        children: Chunk388032.intl.string(Chunk388032.t.uJWIj4)
      })]
    })
  }
  render() {
    return this.state.success ? this.renderSucceeded() : null != this.props.mfaTicket && "" !== this.props.mfaTicket ? this.renderMFA() : this.renderPasswordReset()
  }
  constructor(e) {
    var t;
    super(e), C(this, "handleSubmit", async e => {
      let {
        location: t,
        onLoginSuccess: r,
        source: n,
        resetToken: s
      } = this.props, {
        password: i,
        error: l
      } = this.state;
      if (e.preventDefault(), 0 === i.length) {
        this.setState({
          error: v.intl.string(v.t.R98xDw)
        }), O.S.dispatch(S.CkL.WAVE_EMPHASIZE);
        return
      }
      null != l && this.setState({
        error: null
      });
      let o = s;
      if (null != t && (o = (0, p.Z)(t)), null != o) {
        this.setState({
          working: true
        });
        try {
          let {
            result: e,
            sms: t,
            webauthn: s,
            ticket: l,
            token: a,
            totp: c,
            backup: u
          } = await d.Z.resetPassword(o, i, n);
          e === d.c.MFA ? h.Z.dispatch({
            type: "LOGIN_MFA_STEP",
            ticket: l,
            sms: t,
            webauthn: s,
            totp: c,
            backup: u
          }) : null != r ? r(a) : (h.Z.dispatch({
            type: "LOGIN_SUCCESS",
            token: a
          }), this.handlePasswordChangeSuccess())
        } catch (e) {
          this.setState({
            apiErrors: (0, m.p)(e)
          })
        }
        this.setState({
          working: false
        })
      }
    }), C(this, "handleTokenSubmitMFAv2", async (e, t) => {
      let {
        location: r,
        mfaTicket: n,
        onLoginSuccess: s,
        resetToken: i,
        source: l
      } = this.props, {
        password: o
      } = this.state;
      if (0 === o.length) return h.Z.dispatch({
        type: "LOGIN_RESET"
      }), Promise.reject();
      let a = i;
      if (null != r && (a = (0, p.Z)(r)), null == a) return h.Z.dispatch({
        type: "LOGIN_RESET"
      }), Promise.reject();
      this.setState({
        working: true
      });
      try {
        let r = await d.Z.resetPasswordMFAv2({
          method: e,
          code: t,
          ticket: n,
          password: o,
          token: a,
          source: l
        });
        if (null != s) return void s(r);
        h.Z.dispatch({
          type: "LOGIN_SUCCESS",
          token: r
        }), this.handlePasswordChangeSuccess()
      } finally {
        this.setState({
          working: false
        })
      }
    }), C(this, "handlePasswordChangeSuccess", () => {
      let {
        replaceWith: e
      } = this.props;
      if (c.Em || c.tq) return void this.setState({
        success: true
      });
      e(S.Z5c.APP)
    }), C(this, "handleGoToLogin", () => {
      let {
        transitionTo: e
      } = this.props;
      d.Z.loginReset(), e(S.Z5c.LOGIN, {
        source: "reset_password"
      })
    }), C(this, "handleOpenApp", () => {
      (0, g.Z)("password_reset")
    }), C(this, "hasError", e => null != this.state.apiErrors[e] || null != this.state.error), C(this, "renderError", e => {
      let {
        apiErrors: t
      } = this.state;
      if (this.hasError(e)) {
        let r = t[e];
        return Array.isArray(r) ? r[0] : r
      }
      return null
    });
    let r = (null == (t = this.props.location) ? true : t.search) != null && "" !== this.props.location.search ? (0, a.parse)(this.props.location.search) : null;
    this.state = {
      method: "",
      password: "",
      code: "",
      apiErrors: {},
      error: null,
      hasCancel: null != r && null != r.from_login,
      working: false,
      success: false
    }
  }
}
C(P, "defaultProps", {
  transitionTo: Chunk703656.uL,
  replaceWith: Chunk703656.dL
});
let E = function(e) {
  let t = (0, u.cj)([x.default], () => ({
    mfaTicket: x.default.getMFATicket(),
    mfaMethods: x.default.getMFAMethods()
  }));
  return (0, s.jsx)(P, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable
      }))), n.forEach(function(t) {
        C(e, t, r[t])
      })
    }
    return e
  }({}, e, t))
}