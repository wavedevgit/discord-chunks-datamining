/** Chunk was on 27978 **/
/** chunk id: 39514, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => L
}), require("./35282.js"), require("./388685.js"), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk893776 = require("./893776.js"),
  Chunk533307 = require("./533307.js"),
  Chunk978085 = require("./978085.js"),
  Chunk232567 = require("./232567.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk362762 = require("./362762.js"),
  Chunk164670 = require("./164670.js"),
  Chunk108427 = require("./108427.js"),
  Chunk314897 = require("./314897.js"),
  Chunk896797 = require("./896797.js"),
  Chunk82142 = require("./82142.js"),
  Chunk283595 = require("./283595.js"),
  Chunk55563 = require("./55563.js"),
  Chunk669079 = require("./669079.js"),
  Chunk63063 = require("./63063.js"),
  Chunk51144 = require("./51144.js"),
  Chunk481153 = require("./481153.jsx"),
  Chunk781428 = require("./781428.jsx"),
  Chunk423527 = require("./423527.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk478411 = require("./478411.js");

function P(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
Chunk442837.ZP.initialize();
class R extends Chunk473749.PureComponent {
  componentDidMount() {
    let {
      authenticated: e,
      isResolved: t
    } = this.props;
    e && this.handleAuthenticated(), t || this.resolveGiftCode(), (0, x.e)("gift_code")
  }
  componentDidUpdate(e) {
    let {
      authenticated: t,
      isResolved: n
    } = this.props;
    n || c.Z.wait(() => {
      this.resolveGiftCode()
    }), t && !e.authenticated && this.handleAuthenticated(), !t && e.authenticated && this.setState({
      currentUser: null
    })
  }
  handleAuthenticated() {
    let {
      currentUser: e
    } = this.state;
    h.b8(), null == e && this.refreshUser()
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
    return i === T.evJ.INVALID_GIFT_SELF_REDEMPTION ? A.intl.string(A.t.wa9h7F) : i === T.evJ.INVALID_GIFT_REDEMPTION_OWNED && (null == n ? true : n.productLine) === T.POd.COLLECTIBLES ? A.intl.string(A.t.mdLtb5) : null != t || i === T.evJ.INVALID_GIFT_REDEMPTION_OWNED ? A.intl.format(A.t.PIdmg3, {
      libraryLink: T.Z5c.APPLICATION_LIBRARY
    }) : e.isClaimed || i === T.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED ? A.intl.string(A.t.ilcBeX) : i === T.evJ.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED ? A.intl.string(A.t.ypuSd8) : true
  }
  renderSpinner(e) {
    return (0, r.jsxs)(g.ZP, {
      children: [(0, r.jsx)(g.Dx, {
        children: e
      }), (0, r.jsx)(g.Hh, {})]
    })
  }
  renderExpiredInvite() {
    let {
      defaultRoute: e,
      transitionTo: t
    } = this.props;
    return (0, r.jsxs)(g.ZP, {
      children: [(0, r.jsx)(g.Ee, {
        src: n(167969),
        className: Z.marginBottom8
      }), (0, r.jsx)(g.Dx, {
        className: a()(Z.marginTop8, Z.marginBottom8),
        children: A.intl.string(A.t.KPowgn)
      }), (0, r.jsx)(g.DK, {
        children: A.intl.string(A.t.j8734b)
      }), (0, r.jsx)("div", {
        className: a()(Z.marginTop40, Z.marginBottom8),
        children: (0, r.jsx)(o.Button, {
          text: A.intl.string(A.t.fIv16B),
          fullWidth: true,
          onClick: () => t(e)
        })
      }), (0, r.jsx)(o.Avr, {
        text: A.intl.string(A.t["/CjuXF"]),
        textVariant: "text-sm/normal",
        onClick: () => window.open(N.Z.getArticleURL(T.BhN.GIFTING), "_blank")
      })]
    })
  }
  renderAppOpened() {
    return (0, r.jsxs)(g.ZP, {
      children: [(0, r.jsx)(g.Dx, {
        className: Z.marginBottom8,
        children: A.intl.string(A.t.csrAMJ)
      }), (0, r.jsx)(g.DK, {
        children: A.intl.string(A.t["m1+IBn"])
      }), (0, r.jsx)("div", {
        className: Z.marginTop40,
        children: (0, r.jsx)(o.Button, {
          text: A.intl.string(A.t["qsI+EH"]),
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
    return (0, r.jsxs)(g.ZP, {
      children: [(0, r.jsx)(g.Ee, {
        src: n(892235),
        className: Z.marginBottom8
      }), (0, r.jsx)(g.Dx, {
        children: A.intl.format(A.t["ivLUf/"], {
          username: e.username
        })
      }), (0, r.jsx)(g.DK, {
        className: Z.marginTop20,
        children: A.intl.string(A.t["8Su18+"])
      }), (0, r.jsx)("div", {
        className: Z.marginTop40,
        children: (0, r.jsx)(o.Button, {
          text: t ? A.intl.string(A.t.CMa9Rv) : A.intl.string(A.t.lm1UKt),
          fullWidth: true,
          disabled: t,
          onClick: this.handleResendVerification
        })
      }), (0, r.jsx)("div", {
        className: Z.marginTop8,
        children: (0, r.jsx)(o.Avr, {
          text: A.intl.string(A.t.Po9eBQ),
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
    return (0, r.jsx)(D, {
      sku: n,
      giftCodeCode: e.code,
      transitionTo: i,
      children: (0, r.jsxs)(g.ZP, {
        children: [(0, r.jsx)(S.Z, {
          giftCode: e
        }), (0, r.jsx)("div", {
          className: Z.marginTop40,
          children: (0, r.jsx)(o.Button, {
            text: A.intl.string(A.t.n6I6k4),
            fullWidth: true,
            disabled: null != s,
            onClick: this.handleAccept
          })
        }), null != s ? (0, r.jsx)(g.DK, {
          className: Z.marginTop20,
          children: s
        }) : (0, r.jsx)(g.i_, {
          className: Z.marginTop20,
          children: A.intl.format(A.t.NYM08s, {
            userTag: y.ZP.getUserTag(t),
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
      isAccepting: a,
      transitionTo: l,
      location: o
    } = this.props, {
      fetchingUser: c,
      continueOnWeb: u
    } = this.state;
    if (e === T.kEZ.OPEN && !u) return this.renderAppOpened();
    if (e === T.kEZ.OPENING) return this.renderSpinner(A.intl.string(A.t["Z+hCVU"]));
    if (a) return this.renderSpinner(A.intl.string(A.t.bhJseN));
    if (null == i) return s ? this.renderExpiredInvite() : this.renderSpinner(A.intl.string(A.t.b3lf1c));
    if (s) {
      if (n) {
        let e = this.state.currentUser;
        return c || null == e ? this.renderSpinner(A.intl.string(A.t.bYb2nS)) : this.requiresVerification && null != e ? this.renderVerification(e) : this.renderAuthenticated(i, e, t)
      }
      return "login" === this.getMode() ? (0, r.jsx)(C.Z, {
        giftCodeSKU: t,
        giftCode: i,
        transitionTo: l,
        location: o
      }) : (0, r.jsx)(O.Z, {
        giftCodeSKU: t,
        giftCode: i,
        transitionTo: l,
        location: o
      })
    }
    return null
  }
  constructor(...e) {
    super(...e), P(this, "state", {
      error: null,
      continueOnWeb: false,
      currentUser: null,
      sentVerification: false,
      fetchingUser: false
    }), P(this, "refreshUser", () => {
      this.setState({
        fetchingUser: true
      }), f.k({
        withAnalyticsToken: true
      }).then(e => this.setState({
        currentUser: e,
        fetchingUser: false
      })).catch(() => this.setState({
        fetchingUser: false
      }))
    }), P(this, "handleLogout", () => {
      let e = this.props.match.params.giftCode;
      u.Z.logout("gift_code", T.Z5c.GIFT_CODE_LOGIN(e))
    }), P(this, "handleResendVerification", () => {
      u.Z.verifyResend(), this.setState({
        sentVerification: true
      })
    }), P(this, "handleAccept", async () => {
      let {
        transitionTo: e,
        giftCode: t
      } = this.props;
      if (null == t) throw Error("Trying to accept gift before resolve");
      let n = this.getCode();
      try {
        this.setState({
          error: null
        }), await d.Z.redeemGiftCode({
          code: n
        }), e(T.Z5c.APP)
      } catch (e) {
        this.setState({
          error: e
        })
      }
    }), P(this, "resolveGiftCode", () => {
      let {
        transitionTo: e
      } = this.props, t = this.getCode();
      d.Z.resolveGiftCode(t, true, true).then(n => {
        null != n && null != n.giftCode.promotion && e(T.Z5c.BILLING_PROMOTION_REDEMPTION(t))
      })
    })
  }
}
let L = Chunk442837.ZP.connectStores([Chunk82142.Z, Chunk283595.Z, Chunk314897.default, Chunk55563.Z, Chunk896797.Z, Chunk362762.Z], e => {
    let t = e.match.params.giftCode,
      n = v.Z.get(t),
      r = null != n ? j.Z.get(n.skuId) : null;
    return {
      giftCode: n,
      sku: r,
      libraryApplication: null != r && (null == n ? true : n.entitlementBranches) != null ? I.z2(n.entitlementBranches, r, b.Z) : null,
      authenticated: _.default.isAuthenticated(),
      defaultRoute: E.Z.defaultRoute,
      isResolved: v.Z.getIsResolved(t),
      isAccepting: v.Z.getIsAccepting(t),
      libraryApplicationsFetched: b.Z.fetched,
      nativeAppState: m.Z.getState(t)
    }
  })(R),
  D = e => {
    let {
      sku: t,
      children: n,
      giftCodeCode: s,
      transitionTo: a
    } = e, l = (0, p.K$)(t);
    return (i.useEffect(() => {
      null != s && l && a(T.Z5c.APP_WITH_GIFT_CODE(s))
    }, [l, s, a]), l) ? (0, r.jsxs)(g.ZP, {
      children: [(0, r.jsx)(g.Dx, {
        children: A.intl.string(A.t.b3lf1c)
      }), (0, r.jsx)(g.Hh, {})]
    }) : n
  }