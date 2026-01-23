/** Chunk was on 86142 **/
/** chunk id: 170159, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => L
}), require("./747238.js"), require("./896048.js"), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk830215 = require("./830215.js"),
  Chunk869038 = require("./869038.js"),
  Chunk110782 = require("./110782.js"),
  Chunk803306 = require("./803306.js"),
  Chunk854378 = require("./854378.jsx"),
  Chunk10088 = require("./10088.js"),
  Chunk871123 = require("./871123.js"),
  Chunk210714 = require("./210714.js"),
  Chunk961350 = require("./961350.js"),
  Chunk650048 = require("./650048.js"),
  Chunk30793 = require("./30793.js"),
  Chunk189081 = require("./189081.js"),
  Chunk67480 = require("./67480.js"),
  Chunk45938 = require("./45938.js"),
  Chunk975571 = require("./975571.js"),
  Chunk427262 = require("./427262.js"),
  Chunk161928 = require("./161928.jsx"),
  Chunk129851 = require("./129851.jsx"),
  Chunk229 = require("./229.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk473169 = require("./473169.js");

function w(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
Chunk311907.Ay.initialize();
class P extends Chunk64700.PureComponent {
  componentDidMount() {
    let {
      authenticated: e,
      isResolved: t
    } = this.props;
    e && this.handleAuthenticated(), t || this.resolveGiftCode(), (0, _.d)("gift_code")
  }
  componentDidUpdate(e) {
    let {
      authenticated: t,
      isResolved: n
    } = this.props;
    n || c.h.wait(() => {
      this.resolveGiftCode()
    }), t && !e.authenticated && this.handleAuthenticated(), !t && e.authenticated && this.setState({
      currentUser: null
    })
  }
  handleAuthenticated() {
    let {
      currentUser: e
    } = this.state;
    h.Yq(), null == e && this.refreshUser()
  }
  get requiresVerification() {
    let {
      currentUser: e
    } = this.state;
    return null != e && !e.verified
  }
  getCode() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : this.props;
    return e.match.params.giftCode
  }
  getMode() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : this.props;
    return e.login ? "login" : "register"
  }
  getErrorMessage(e) {
    let {
      libraryApplication: t,
      sku: n
    } = this.props, {
      error: r
    } = this.state, i = null != r ? r.code : null;
    return i === C.t02.INVALID_GIFT_SELF_REDEMPTION ? T.intl.string(T.t.wa9h7F) : i === C.t02.INVALID_GIFT_REDEMPTION_OWNED && (null == n ? true : n.productLine) === C.EZt.COLLECTIBLES ? T.intl.string(T.t.mdLtb5) : null != t || i === C.t02.INVALID_GIFT_REDEMPTION_OWNED ? T.intl.format(T.t.PIdmg3, {
      libraryLink: C.BVt.APPLICATION_LIBRARY
    }) : e.isClaimed || i === C.t02.INVALID_GIFT_REDEMPTION_EXHAUSTED ? T.intl.string(T.t.ilcBeX) : i === C.t02.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED ? T.intl.string(T.t.ypuSd8) : true
  }
  renderSpinner(e) {
    return (0, r.jsxs)(g.Ay, {
      children: [(0, r.jsx)(g.hE, {
        children: e
      }), (0, r.jsx)(g.CK, {})]
    })
  }
  renderExpiredInvite() {
    let {
      defaultRoute: e,
      transitionTo: t
    } = this.props;
    return (0, r.jsxs)(g.Ay, {
      children: [(0, r.jsx)(g._V, {
        src: n(428721),
        className: R.QB
      }), (0, r.jsx)(g.hE, {
        className: l()(R.Ot, R.QB),
        children: T.intl.string(T.t.KPowgn)
      }), (0, r.jsx)(g.tK, {
        children: T.intl.string(T.t.j8734b)
      }), (0, r.jsx)("div", {
        className: l()(R.eT, R.QB),
        children: (0, r.jsx)(o.Button, {
          text: T.intl.string(T.t.fIv16B),
          fullWidth: true,
          onClick: () => t(e)
        })
      }), (0, r.jsx)(o.QWc, {
        text: T.intl.string(T.t["/CjuXF"]),
        textVariant: "text-sm/normal",
        onClick: () => window.open(b.A.getArticleURL(C.MVz.GIFTING), "_blank")
      })]
    })
  }
  renderAppOpened() {
    return (0, r.jsxs)(g.Ay, {
      children: [(0, r.jsx)(g.hE, {
        className: R.QB,
        children: T.intl.string(T.t.csrAMJ)
      }), (0, r.jsx)(g.tK, {
        children: T.intl.string(T.t["m1+IBn"])
      }), (0, r.jsx)("div", {
        className: R.eT,
        children: (0, r.jsx)(o.Button, {
          text: T.intl.string(T.t["qsI+EH"]),
          fullWidth: true,
          onClick: () => this.setState({
            continueOnWeb: true
          })
        })
      })]
    })
  }
  renderVerification(e) {
    let {
      sentVerification: t
    } = this.state;
    return (0, r.jsxs)(g.Ay, {
      children: [(0, r.jsx)(g._V, {
        src: n(792525),
        className: R.QB
      }), (0, r.jsx)(g.hE, {
        children: T.intl.format(T.t["ivLUf/"], {
          username: e.username
        })
      }), (0, r.jsx)(g.tK, {
        className: R.QX,
        children: T.intl.string(T.t["8Su18+"])
      }), (0, r.jsx)("div", {
        className: R.eT,
        children: (0, r.jsx)(o.Button, {
          text: t ? T.intl.string(T.t.CMa9Rv) : T.intl.string(T.t.lm1UKt),
          fullWidth: true,
          disabled: t,
          onClick: this.handleResendVerification
        })
      }), (0, r.jsx)("div", {
        className: R.Ot,
        children: (0, r.jsx)(o.QWc, {
          text: T.intl.string(T.t.Po9eBQ),
          textVariant: "text-sm/normal",
          onClick: this.refreshUser
        })
      })]
    })
  }
  renderAuthenticated(e, t, n) {
    let {
      transitionTo: i
    } = this.props, s = this.getErrorMessage(e);
    return (0, r.jsx)(k, {
      sku: n,
      giftCodeCode: e.code,
      transitionTo: i,
      children: (0, r.jsxs)(g.Ay, {
        children: [(0, r.jsx)(I.A, {
          giftCode: e
        }), (0, r.jsx)("div", {
          className: R.eT,
          children: (0, r.jsx)(o.Button, {
            text: T.intl.string(T.t.n6I6k4),
            fullWidth: true,
            disabled: null != s,
            onClick: this.handleAccept
          })
        }), null != s ? (0, r.jsx)(g.tK, {
          className: R.QX,
          children: s
        }) : (0, r.jsx)(g.ME, {
          className: R.QX,
          children: T.intl.format(T.t.NYM08s, {
            userTag: S.Ay.getUserTag(t),
            onLogoutClick: this.handleLogout
          })
        })]
      })
    })
  }
  render() {
    let {
      nativeAppState: e,
      sku: t,
      authenticated: n,
      giftCode: i,
      isResolved: s,
      isAccepting: l,
      transitionTo: a,
      location: o
    } = this.props, {
      fetchingUser: c,
      continueOnWeb: u
    } = this.state;
    if (e === C.fAW.OPEN && !u) return this.renderAppOpened();
    if (e === C.fAW.OPENING) return this.renderSpinner(T.intl.string(T.t["Z+hCVU"]));
    if (l) return this.renderSpinner(T.intl.string(T.t.bhJseN));
    if (null == i) return s ? this.renderExpiredInvite() : this.renderSpinner(T.intl.string(T.t.b3lf1c));
    if (s) {
      if (n) {
        let e = this.state.currentUser;
        return c || null == e ? this.renderSpinner(T.intl.string(T.t.bYb2nS)) : this.requiresVerification && null != e ? this.renderVerification(e) : this.renderAuthenticated(i, e, t)
      }
      return "login" === this.getMode() ? (0, r.jsx)(N.A, {
        giftCodeSKU: t,
        giftCode: i,
        transitionTo: a,
        location: o
      }) : (0, r.jsx)(O.A, {
        giftCodeSKU: t,
        giftCode: i,
        transitionTo: a,
        location: o
      })
    }
    return null
  }
  constructor(...e) {
    super(...e), w(this, "state", {
      error: null,
      continueOnWeb: false,
      currentUser: null,
      sentVerification: false,
      fetchingUser: false
    }), w(this, "refreshUser", () => {
      this.setState({
        fetchingUser: true
      }), p.rQ({
        withAnalyticsToken: true
      }).then(e => this.setState({
        currentUser: e,
        fetchingUser: false
      })).catch(() => this.setState({
        fetchingUser: false
      }))
    }), w(this, "handleLogout", () => {
      let e = this.props.match.params.giftCode;
      u.A.logout("gift_code", C.BVt.GIFT_CODE_LOGIN(e))
    }), w(this, "handleResendVerification", () => {
      u.A.verifyResend(), this.setState({
        sentVerification: true
      })
    }), w(this, "handleAccept", async () => {
      let {
        transitionTo: e,
        giftCode: t
      } = this.props;
      if (null == t) throw Error("Trying to accept gift before resolve");
      let n = this.getCode();
      try {
        this.setState({
          error: null
        }), await d.A.redeemGiftCode({
          code: n
        }), e(C.BVt.APP)
      } catch (e) {
        this.setState({
          error: e
        })
      }
    }), w(this, "resolveGiftCode", () => {
      let {
        transitionTo: e
      } = this.props, t = this.getCode();
      d.A.resolveGiftCode(t, true, true).then(n => {
        null != n && null != n.giftCode.promotion && e(C.BVt.BILLING_PROMOTION_REDEMPTION(t))
      })
    })
  }
}
let L = Chunk311907.Ay.connectStores([Chunk30793.A, Chunk189081.A, Chunk961350.default, Chunk67480.A, Chunk650048.A, Chunk10088.A], e => {
    let t = e.match.params.giftCode,
      n = E.A.get(t),
      r = null != n ? j.A.get(n.skuId) : null;
    return {
      giftCode: n,
      sku: r,
      libraryApplication: null != r && (null == n ? true : n.entitlementBranches) != null ? y.YI(n.entitlementBranches, r, v.A) : null,
      authenticated: A.default.isAuthenticated(),
      defaultRoute: x.A.defaultRoute,
      isResolved: E.A.getIsResolved(t),
      isAccepting: E.A.getIsAccepting(t),
      libraryApplicationsFetched: v.A.fetched,
      nativeAppState: m.A.getState(t)
    }
  })(P),
  k = e => {
    let {
      sku: t,
      children: n,
      giftCodeCode: s,
      transitionTo: l
    } = e, a = (0, f.bF)(t);
    return (i.useEffect(() => {
      null != s && a && l(C.BVt.APP_WITH_GIFT_CODE(s))
    }, [a, s, l]), a) ? (0, r.jsxs)(g.Ay, {
      children: [(0, r.jsx)(g.hE, {
        children: T.intl.string(T.t.b3lf1c)
      }), (0, r.jsx)(g.CK, {})]
    }) : n
  }