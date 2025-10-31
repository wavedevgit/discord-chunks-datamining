/** Chunk was on 41619 **/
/** chunk id: 479495, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => N
}), require("./35282.js");
var n, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk593473 = require("./593473.js"),
  Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
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

function P(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = r, e
}
Chunk442837.ZP.initialize();
class E extends(n = Chunk647438.PureComponent) {
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
      theme: a,
      authBoxClassName: o
    } = this.props, l = null != exports ? exports : this.renderError("password");
    return (0, Chunk951288.jsxs)(Chunk388905.ZP, {
      onSubmit: this.handleSubmit,
      tag: "form",
      theme: Chunk120356,
      className: o,
      children: [(0, Chunk951288.jsx)("img", {
        alt: "",
        src: null == Chunk593473 ? require("./26230.js") : require("./935227.js"),
        className: Chunk197571.marginBottom20
      }), (0, Chunk951288.jsx)(Chunk388905.Dx, {
        children: Chunk388032.intl.string(Chunk388032.t["1LV6Kq"])
      }), (0, Chunk951288.jsxs)(Chunk388905.gO, {
        className: Chunk197571.marginTop20,
        children: [(0, Chunk951288.jsx)(Chunk388905.II, {
          label: Chunk388032.intl.string(Chunk388032.t["8dM4FO"]),
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
        }), (0, Chunk951288.jsxs)(Chunk481060.ButtonGroup, {
          direction: "vertical",
          fullWidth: true,
          children: [(0, Chunk951288.jsx)(Chunk481060.Button, {
            text: Chunk388032.intl.string(Chunk388032.t["FRep5/"]),
            type: "submit",
            loading: Chunk647438
          }), n && (0, Chunk951288.jsx)(Chunk481060.Button, {
            text: Chunk388032.intl.string(Chunk388032.t["ETE/oC"]),
            variant: "secondary",
            onClick: this.handleGoToLogin,
            loading: Chunk647438
          })]
        })]
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
    } = this.props, a = e => {
      let {
        mfaType: t,
        data: r
      } = e;
      return this.handleTokenSubmitMFAv2(t, r)
    };
    return (0, Chunk951288.jsx)(Chunk388905.ZP, {
      style: {
        padding: 0
      },
      theme: require,
      className: n,
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
        className: o()(Chunk197571.marginBottom20, Chunk873546.tq ? Chunk197571.marginTop20 : "")
      }), (0, Chunk951288.jsx)(Chunk388905.Dx, {
        className: Chunk197571.marginBottom40,
        children: Chunk388032.intl.string(Chunk388032.t.WAUOoK)
      }), (0, Chunk951288.jsx)(Chunk481060.Button, {
        text: Chunk388032.intl.string(Chunk388032.t["uJWIj/"]),
        fullWidth: true,
        onClick: this.handleOpenApp
      })]
    })
  }
  render() {
    return this.state.success ? this.renderSucceeded() : null != this.props.mfaTicket && "" !== this.props.mfaTicket ? this.renderMFA() : this.renderPasswordReset()
  }
  constructor(e) {
    var t;
    super(e), P(this, "handleSubmit", async e => {
      let {
        location: t,
        onLoginSuccess: r,
        source: n,
        resetToken: s
      } = this.props, {
        password: i,
        error: a
      } = this.state;
      if (e.preventDefault(), 0 === i.length) {
        this.setState({
          error: S.intl.string(S.t.R98xD5)
        }), w.S.dispatch(v.CkL.WAVE_EMPHASIZE);
        return
      }
      null != a && this.setState({
        error: null
      });
      let o = s;
      if (null != t && (o = (0, f.Z)(t)), null != o) {
        this.setState({
          working: true
        });
        try {
          let {
            result: e,
            sms: t,
            webauthn: s,
            ticket: a,
            token: l,
            totp: c,
            backup: u
          } = await p.Z.resetPassword(o, i, n);
          e === p.c.MFA ? h.Z.dispatch({
            type: "LOGIN_MFA_STEP",
            ticket: a,
            sms: t,
            webauthn: s,
            totp: c,
            backup: u
          }) : null != r ? r(l) : (h.Z.dispatch({
            type: "LOGIN_SUCCESS",
            token: l
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
    }), P(this, "handleTokenSubmitMFAv2", async (e, t) => {
      let {
        location: r,
        mfaTicket: n,
        onLoginSuccess: s,
        resetToken: i,
        source: a
      } = this.props, {
        password: o
      } = this.state;
      if (0 === o.length) return h.Z.dispatch({
        type: "LOGIN_RESET"
      }), Promise.reject();
      let l = i;
      if (null != r && (l = (0, f.Z)(r)), null == l) return h.Z.dispatch({
        type: "LOGIN_RESET"
      }), Promise.reject();
      this.setState({
        working: true
      });
      try {
        let r = await p.Z.resetPasswordMFAv2({
          method: e,
          code: t,
          ticket: n,
          password: o,
          token: l,
          source: a
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
    }), P(this, "handlePasswordChangeSuccess", () => {
      let {
        replaceWith: e
      } = this.props;
      if (c.Em || c.tq) return void this.setState({
        success: true
      });
      e(v.Z5c.APP)
    }), P(this, "handleGoToLogin", () => {
      let {
        transitionTo: e
      } = this.props;
      p.Z.loginReset(), e(v.Z5c.LOGIN, {
        source: "reset_password"
      })
    }), P(this, "handleOpenApp", () => {
      (0, y.Z)("password_reset")
    }), P(this, "hasError", e => null != this.state.apiErrors[e] || null != this.state.error), P(this, "renderError", e => {
      let {
        apiErrors: t
      } = this.state;
      if (this.hasError(e)) {
        let r = t[e];
        return Array.isArray(r) ? r[0] : r
      }
      return null
    });
    let r = (null == (t = this.props.location) ? true : t.search) != null && "" !== this.props.location.search ? (0, l.parse)(this.props.location.search) : null;
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
P(E, "defaultProps", {
  transitionTo: Chunk703656.uL,
  replaceWith: Chunk703656.dL
});
let N = function(e) {
  let t = (0, u.cj)([j.default], () => ({
    mfaTicket: j.default.getMFATicket(),
    mfaMethods: j.default.getMFAMethods()
  }));
  return (0, s.jsx)(E, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable
      }))), n.forEach(function(t) {
        P(e, t, r[t])
      })
    }
    return e
  }({}, e, t))
}