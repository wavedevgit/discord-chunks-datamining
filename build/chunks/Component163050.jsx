/** Chunk was on 34078 **/
/** chunk id: 163050, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => P
}), require("./747238.js");
var n, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk492462 = require("./492462.js"),
  Chunk607399 = require("./607399.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk830215 = require("./830215.js"),
  Chunk396681 = require("./396681.js"),
  Chunk15552 = require("./15552.js"),
  Chunk854378 = require("./854378.jsx"),
  Chunk701273 = require("./701273.js"),
  Chunk720353 = require("./720353.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk210714 = require("./210714.js"),
  Chunk961350 = require("./961350.js"),
  Chunk203982 = require("./203982.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk473169 = require("./473169.js");

function E(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = r, e
}
Chunk311907.Ay.initialize();
class x extends(n = Chunk64700.PureComponent) {
  componentDidMount() {
    (0, j.d)("reset_password")
  }
  renderPasswordReset() {
    let {
      password: e,
      error: t,
      hasCancel: n,
      working: i
    } = this.state, {
      theme: a,
      authBoxClassName: l
    } = this.props, o = null != t ? t : this.renderError("password");
    return (0, s.jsxs)(m.Ay, {
      onSubmit: this.handleSubmit,
      tag: "form",
      theme: a,
      className: l,
      children: [(0, s.jsx)("img", {
        alt: "",
        src: null == o ? r(79418) : r(579656),
        className: A.SX
      }), (0, s.jsx)(m.hE, {
        children: v.intl.string(v.t["1LV6Kq"])
      }), (0, s.jsxs)(m.eB, {
        className: A.QX,
        children: [(0, s.jsx)(m.pd, {
          label: v.intl.string(v.t["8dM4FO"]),
          className: A.SX,
          name: "password",
          value: e,
          onChange: e => this.setState({
            password: e
          }),
          error: o,
          type: "password",
          autoComplete: "new-password",
          required: true
        }), (0, s.jsxs)(d.ButtonGroup, {
          direction: "vertical",
          fullWidth: true,
          children: [(0, s.jsx)(d.Button, {
            text: v.intl.string(v.t["FRep5/"]),
            type: "submit",
            loading: i
          }), n && (0, s.jsx)(d.Button, {
            text: v.intl.string(v.t["ETE/oC"]),
            variant: "secondary",
            onClick: this.handleGoToLogin,
            loading: i
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
    return (0, s.jsx)(m.Ay, {
      style: {
        padding: 0
      },
      theme: r,
      className: n,
      children: (0, s.jsx)(O.t, {
        mfaFinish: a,
        mfaChallenge: {
          ticket: e,
          methods: t
        },
        onEarlyClose: () => {
          h.h.dispatch({
            type: "LOGIN_RESET"
          })
        },
        width: null != i ? i : 480
      })
    })
  }
  renderSucceeded() {
    let {
      theme: e,
      authBoxClassName: t
    } = this.props;
    return (0, s.jsxs)(m.Ay, {
      theme: e,
      className: t,
      children: [(0, s.jsx)("img", {
        alt: "",
        src: r(79418),
        className: l()(A.SX, c.Fr ? A.QX : "")
      }), (0, s.jsx)(m.hE, {
        className: A.C2,
        children: v.intl.string(v.t.WAUOoK)
      }), (0, s.jsx)(d.Button, {
        text: v.intl.string(v.t["uJWIj/"]),
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
    super(e), E(this, "handleSubmit", async e => {
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
          error: v.intl.string(v.t.R98xD5)
        }), C._.dispatch(S.jej.WAVE_EMPHASIZE);
        return
      }
      null != a && this.setState({
        error: null
      });
      let l = s;
      if (null != t && (l = (0, f.A)(t)), null != l) {
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
          } = await p.A.resetPassword(l, i, n);
          e === p.W.MFA ? h.h.dispatch({
            type: "LOGIN_MFA_STEP",
            ticket: a,
            sms: t,
            webauthn: s,
            totp: c,
            backup: u
          }) : null != r ? r(o) : (h.h.dispatch({
            type: "LOGIN_SUCCESS",
            token: o
          }), this.handlePasswordChangeSuccess())
        } catch (e) {
          this.setState({
            apiErrors: (0, y.p)(e)
          })
        }
        this.setState({
          working: false
        })
      }
    }), E(this, "handleTokenSubmitMFAv2", async (e, t) => {
      let {
        location: r,
        mfaTicket: n,
        onLoginSuccess: s,
        resetToken: i,
        source: a
      } = this.props, {
        password: l
      } = this.state;
      if (0 === l.length) return h.h.dispatch({
        type: "LOGIN_RESET"
      }), Promise.reject();
      let o = i;
      if (null != r && (o = (0, f.A)(r)), null == o) return h.h.dispatch({
        type: "LOGIN_RESET"
      }), Promise.reject();
      this.setState({
        working: true
      });
      try {
        let r = await p.A.resetPasswordMFAv2({
          method: e,
          code: t,
          ticket: n,
          password: l,
          token: o,
          source: a
        });
        if (null != s) return void s(r);
        h.h.dispatch({
          type: "LOGIN_SUCCESS",
          token: r
        }), this.handlePasswordChangeSuccess()
      } finally {
        this.setState({
          working: false
        })
      }
    }), E(this, "handlePasswordChangeSuccess", () => {
      let {
        replaceWith: e
      } = this.props;
      c.v1 || c.Fr ? this.setState({
        success: true
      }) : e(S.BVt.APP)
    }), E(this, "handleGoToLogin", () => {
      let {
        transitionTo: e
      } = this.props;
      p.A.loginReset(), e(S.BVt.LOGIN, {
        source: "reset_password"
      })
    }), E(this, "handleOpenApp", () => {
      (0, g.A)("password_reset")
    }), E(this, "hasError", e => null != this.state.apiErrors[e] || null != this.state.error), E(this, "renderError", e => {
      let {
        apiErrors: t
      } = this.state;
      if (this.hasError(e)) {
        let r = t[e];
        return Array.isArray(r) ? r[0] : r
      }
      return null
    });
    const r = (null == (t = this.props.location) ? true : t.search) != null && "" !== this.props.location.search ? (0, o.parse)(this.props.location.search) : null;
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
E(x, "defaultProps", {
  transitionTo: Chunk976860.pX,
  replaceWith: Chunk976860.bG
});
let P = function(e) {
  let t = (0, u.cf)([w.default], () => ({
    mfaTicket: w.default.getMFATicket(),
    mfaMethods: w.default.getMFAMethods()
  }));
  return (0, s.jsx)(x, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable
      }))), n.forEach(function(t) {
        E(e, t, r[t])
      })
    }
    return e
  }({}, e, t))
}