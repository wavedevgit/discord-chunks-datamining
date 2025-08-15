/** Chunk was on 25761 **/
/** chunk id: 479495, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./35282.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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
  Chunk197571 = require("./197571.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
Chunk442837.ZP.initialize();
class P extends(r = Chunk647438.PureComponent) {
  componentDidMount() {
    (0, Chunk108427.e)("reset_password")
  }
  renderPasswordReset() {
    let {
      password: e,
      error: t,
      hasCancel: r,
      working: i
    } = this.state, {
      theme: a,
      authBoxClassName: l
    } = this.props, o = null != exports ? exports : this.renderError("password");
    return (0, Chunk951288.jsxs)(Chunk388905.ZP, {
      onSubmit: this.handleSubmit,
      tag: "form",
      theme: Chunk120356,
      className: l,
      children: [(0, Chunk951288.jsx)("img", {
        alt: "",
        src: null == Chunk593473 ? require("./26230.js") : require("./935227.js"),
        className: Chunk197571.marginBottom20
      }), (0, Chunk951288.jsx)(Chunk388905.Dx, {
        children: Chunk388032.intl.string(Chunk388032.t["1LV6Ki"])
      }), (0, Chunk951288.jsxs)(Chunk388905.gO, {
        className: Chunk197571.marginTop20,
        children: [(0, Chunk951288.jsx)(Chunk388905.II, {
          label: Chunk388032.intl.string(Chunk388032.t["8dM4FB"]),
          className: Chunk197571.marginBottom20,
          name: "password",
          value: module,
          onChange: e => this.setState({
            password: e
          }),
          error: Chunk593473,
          type: "password",
          autoComplete: "new-password",
          required: true
        }), (0, Chunk951288.jsx)(Chunk388905.zx, {
          type: "submit",
          submitting: Chunk647438,
          children: Chunk388032.intl.string(Chunk388032.t["FRep5+"])
        }), r ? (0, Chunk951288.jsx)(Chunk388905.zx, {
          className: Chunk197571.marginTop8,
          onClick: this.handleGoToLogin,
          submitting: Chunk647438,
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
      theme: n,
      authBoxClassName: r,
      width: i
    } = this.props, a = e => {
      let {
        mfaType: t,
        data: n
      } = e;
      return this.handleTokenSubmitMFAv2(t, n)
    };
    return (0, Chunk951288.jsx)(Chunk388905.ZP, {
      style: {
        padding: 0
      },
      theme: require,
      className: r,
      children: (0, Chunk951288.jsx)(Chunk124860.Cd, {
        mfaFinish: Chunk120356,
        mfaChallenge: {
          ticket: module,
          methods: exports
        },
        onEarlyClose: () => {
          Chunk570140.Z.dispatch({
            type: "LOGIN_RESET"
          })
        },
        width: null != Chunk647438 ? Chunk647438 : 480
      })
    })
  }
  renderSucceeded() {
    let {
      theme: e,
      authBoxClassName: t
    } = this.props;
    return (0, Chunk951288.jsxs)(Chunk388905.ZP, {
      theme: module,
      className: exports,
      children: [(0, Chunk951288.jsx)("img", {
        alt: "",
        src: require("./26230.js"),
        className: l()(Chunk197571.marginBottom20, Chunk873546.tq ? Chunk197571.marginTop20 : "")
      }), (0, Chunk951288.jsx)(Chunk388905.Dx, {
        className: Chunk197571.marginBottom40,
        children: Chunk388032.intl.string(Chunk388032.t.WAUOoK)
      }), (0, Chunk951288.jsx)(Chunk388905.zx, {
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
    super(e), v(this, "handleSubmit", async e => {
      let {
        location: t,
        onLoginSuccess: n,
        source: r,
        resetToken: s
      } = this.props, {
        password: i,
        error: a
      } = this.state;
      if (e.preventDefault(), 0 === i.length) {
        this.setState({
          error: x.intl.string(x.t.R98xDw)
        }), O.S.dispatch(C.CkL.WAVE_EMPHASIZE);
        return
      }
      null != a && this.setState({
        error: null
      });
      let l = s;
      if (null != t && (l = (0, h.Z)(t)), null != l) {
        this.setState({
          working: true
        });
        try {
          let {
            result: e,
            sms: t,
            webauthn: s,
            ticket: a,
            token: o,
            totp: c,
            backup: u
          } = await p.Z.resetPassword(l, i, r);
          e === p.c.MFA ? d.Z.dispatch({
            type: "LOGIN_MFA_STEP",
            ticket: a,
            sms: t,
            webauthn: s,
            totp: c,
            backup: u
          }) : null != n ? n(o) : (d.Z.dispatch({
            type: "LOGIN_SUCCESS",
            token: o
          }), this.handlePasswordChangeSuccess())
        } catch (e) {
          this.setState({
            apiErrors: (0, f.p)(e)
          })
        }
        this.setState({
          working: false
        })
      }
    }), v(this, "handleTokenSubmitMFAv2", async (e, t) => {
      let {
        location: n,
        mfaTicket: r,
        onLoginSuccess: s,
        resetToken: i,
        source: a
      } = this.props, {
        password: l
      } = this.state;
      if (0 === l.length) return d.Z.dispatch({
        type: "LOGIN_RESET"
      }), Promise.reject();
      let o = i;
      if (null != n && (o = (0, h.Z)(n)), null == o) return d.Z.dispatch({
        type: "LOGIN_RESET"
      }), Promise.reject();
      this.setState({
        working: true
      });
      try {
        let n = await p.Z.resetPasswordMFAv2({
          method: e,
          code: t,
          ticket: r,
          password: l,
          token: o,
          source: a
        });
        if (null != s) return void s(n);
        d.Z.dispatch({
          type: "LOGIN_SUCCESS",
          token: n
        }), this.handlePasswordChangeSuccess()
      } finally {
        this.setState({
          working: false
        })
      }
    }), v(this, "handlePasswordChangeSuccess", () => {
      let {
        replaceWith: e
      } = this.props;
      if (c.Em || c.tq) return void this.setState({
        success: true
      });
      e(C.Z5c.APP)
    }), v(this, "handleGoToLogin", () => {
      let {
        transitionTo: e
      } = this.props;
      p.Z.loginReset(), e(C.Z5c.LOGIN, {
        source: "reset_password"
      })
    }), v(this, "handleOpenApp", () => {
      (0, g.Z)("password_reset")
    }), v(this, "hasError", e => null != this.state.apiErrors[e] || null != this.state.error), v(this, "renderError", e => {
      let {
        apiErrors: t
      } = this.state;
      if (this.hasError(e)) {
        let n = t[e];
        return Array.isArray(n) ? n[0] : n
      }
      return null
    });
    let n = (null == (t = this.props.location) ? true : t.search) != null && "" !== this.props.location.search ? (0, o.parse)(this.props.location.search) : null;
    this.state = {
      method: "",
      password: "",
      code: "",
      apiErrors: {},
      error: null,
      hasCancel: null != n && null != n.from_login,
      working: false,
      success: false
    }
  }
}
v(P, "defaultProps", {
  transitionTo: Chunk703656.uL,
  replaceWith: Chunk703656.dL
});
let E = function(e) {
  let t = (0, u.cj)([S.default], () => ({
    mfaTicket: S.default.getMFATicket(),
    mfaMethods: S.default.getMFAMethods()
  }));
  return (0, s.jsx)(P, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        v(e, t, n[t])
      })
    }
    return e
  }({}, e, t))
}