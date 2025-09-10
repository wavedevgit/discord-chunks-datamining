/** Chunk was on 27978 **/
/** chunk id: 39514, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
}), require("./35282.js"), require("./388685.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk893776 = require("./893776.js"),
  Chunk533307 = require("./533307.js"),
  Chunk978085 = require("./978085.js"),
  Chunk232567 = require("./232567.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk362762 = require("./362762.js"),
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
  Chunk197571 = require("./197571.js");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
Chunk442837.ZP.initialize();
class Z extends Chunk647438.PureComponent {
  componentDidMount() {
    let {
      authenticated: e,
      isResolved: t
    } = this.props;
    module && this.handleAuthenticated(), exports || this.resolveGiftCode(), (0, Chunk108427.e)("gift_code")
  }
  componentDidUpdate(e) {
    let {
      authenticated: t,
      isResolved: n
    } = this.props;
    n || o.Z.wait(() => {
      this.resolveGiftCode()
    }), t && !e.authenticated && this.handleAuthenticated(), !t && e.authenticated && this.setState({
      currentUser: null
    })
  }
  handleAuthenticated() {
    let {
      currentUser: e
    } = this.state;
    Chunk978085.b8(), null == module && this.refreshUser()
  }
  get requiresVerification() {
    let {
      currentUser: e
    } = this.state;
    return null != module && !module.verified
  }
  getCode() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : this.props;
    return module.match.params.giftCode
  }
  getMode() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : this.props;
    return module.login ? "login" : "register"
  }
  getErrorMessage(e) {
    let {
      libraryApplication: t,
      sku: n
    } = this.props, {
      error: r
    } = this.state, i = null != r ? r.code : null;
    return i === y.evJ.INVALID_GIFT_SELF_REDEMPTION ? C.intl.string(C.t.wa9h7O) : i === y.evJ.INVALID_GIFT_REDEMPTION_OWNED && (null == n ? true : n.productLine) === y.POd.COLLECTIBLES ? C.intl.string(C.t.mdLtb2) : null != t || i === y.evJ.INVALID_GIFT_REDEMPTION_OWNED ? C.intl.format(C.t.PIdmg4, {
      libraryLink: y.Z5c.APPLICATION_LIBRARY
    }) : e.isClaimed || i === y.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED ? C.intl.string(C.t.ilcBeX) : i === y.evJ.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED ? C.intl.string(C.t.ypuSd3) : true
  }
  renderSpinner(e) {
    return (0, r.jsxs)(p.ZP, {
      children: [(0, r.jsx)(p.Dx, {
        children: e
      }), (0, r.jsx)(p.Hh, {})]
    })
  }
  renderExpiredInvite() {
    let {
      defaultRoute: e,
      transitionTo: t
    } = this.props;
    return (0, Chunk951288.jsxs)(Chunk388905.ZP, {
      children: [(0, Chunk951288.jsx)(Chunk388905.Ee, {
        src: require("./167969.js"),
        className: Chunk197571.marginBottom8
      }), (0, Chunk951288.jsx)(Chunk388905.Dx, {
        className: s()(Chunk197571.marginTop8, Chunk197571.marginBottom8),
        children: Chunk388032.intl.string(Chunk388032.t.KPowgo)
      }), (0, Chunk951288.jsx)(Chunk388905.DK, {
        children: Chunk388032.intl.string(Chunk388032.t.j8734e)
      }), (0, Chunk951288.jsx)(Chunk388905.zx, {
        className: s()(Chunk197571.marginTop40, Chunk197571.marginBottom8),
        onClick: () => exports(module),
        children: Chunk388032.intl.string(Chunk388032.t.fIv16O)
      }), (0, Chunk951288.jsx)(Chunk388905.zx, {
        onClick: () => window.open(Chunk63063.Z.getArticleURL(Chunk981631.BhN.GIFTING), "_blank"),
        look: Chunk388905.zx.Looks.LINK,
        color: Chunk388905.zx.Colors.LINK,
        children: Chunk388032.intl.string(Chunk388032.t["/CjuXF"])
      })]
    })
  }
  renderAppOpened() {
    return (0, Chunk951288.jsxs)(Chunk388905.ZP, {
      children: [(0, Chunk951288.jsx)(Chunk388905.Dx, {
        className: Chunk197571.marginBottom8,
        children: Chunk388032.intl.string(Chunk388032.t.csrAMD)
      }), (0, Chunk951288.jsx)(Chunk388905.DK, {
        children: Chunk388032.intl.string(Chunk388032.t["m1+IBg"])
      }), (0, Chunk951288.jsx)(Chunk388905.zx, {
        className: Chunk197571.marginTop40,
        onClick: () => this.setState({
          continueOnWeb: true
        }),
        children: Chunk388032.intl.string(Chunk388032.t["qsI+EB"])
      })]
    })
  }
  renderVerification(e) {
    let {
      sentVerification: t
    } = this.state;
    return (0, r.jsxs)(p.ZP, {
      children: [(0, r.jsx)(p.Ee, {
        src: n(892235),
        className: A.marginBottom8
      }), (0, r.jsx)(p.Dx, {
        children: C.intl.format(C.t.ivLUf3, {
          username: e.username
        })
      }), (0, r.jsx)(p.DK, {
        className: A.marginTop20,
        children: C.intl.string(C.t["8Su18/"])
      }), (0, r.jsx)(p.zx, {
        disabled: t,
        className: A.marginTop40,
        onClick: this.handleResendVerification,
        children: t ? C.intl.string(C.t.CMa9Rk) : C.intl.string(C.t.lm1UKi)
      }), (0, r.jsx)(p.zx, {
        look: p.zx.Looks.LINK,
        color: p.zx.Colors.LINK,
        onClick: this.refreshUser,
        className: A.marginTop8,
        children: C.intl.string(C.t.Po9eBQ)
      })]
    })
  }
  renderAuthenticated(e, t) {
    let n = this.getErrorMessage(e);
    return (0, r.jsxs)(p.ZP, {
      children: [(0, r.jsx)(N.Z, {
        giftCode: e
      }), (0, r.jsx)(p.zx, {
        disabled: null != n,
        className: A.marginTop40,
        onClick: this.handleAccept,
        children: C.intl.string(C.t.n6I6k5)
      }), null != n ? (0, r.jsx)(p.DK, {
        className: A.marginTop20,
        children: n
      }) : (0, r.jsx)(p.i_, {
        className: A.marginTop20,
        children: C.intl.format(C.t.NYM08v, {
          userTag: I.ZP.getUserTag(t),
          onLogoutClick: this.handleLogout
        })
      })]
    })
  }
  render() {
    let {
      nativeAppState: e,
      sku: t,
      authenticated: n,
      giftCode: i,
      isResolved: l,
      isAccepting: s,
      transitionTo: a,
      location: o
    } = this.props, {
      fetchingUser: c,
      continueOnWeb: u
    } = this.state;
    if (module === Chunk981631.kEZ.OPEN && !Chunk533307) return this.renderAppOpened();
    if (module === Chunk981631.kEZ.OPENING) return this.renderSpinner(Chunk388032.intl.string(Chunk388032.t["Z+hCVV"]));
    if (s) return this.renderSpinner(Chunk388032.intl.string(Chunk388032.t.bhJseH));
    if (null == Chunk647438) return Chunk120356 ? this.renderExpiredInvite() : this.renderSpinner(Chunk388032.intl.string(Chunk388032.t.b3lf1d));
    if (Chunk120356) {
      if (require) {
        let e = this.state.currentUser;
        return Chunk893776 || null == module ? this.renderSpinner(Chunk388032.intl.string(Chunk388032.t.bYb2nZ)) : this.requiresVerification && null != module ? this.renderVerification(module) : this.renderAuthenticated(Chunk647438, module)
      }
      return "login" === this.getMode() ? (0, Chunk951288.jsx)(Chunk781428.Z, {
        giftCodeSKU: exports,
        giftCode: Chunk647438,
        transitionTo: Chunk442837,
        location: Chunk570140
      }) : (0, Chunk951288.jsx)(Chunk423527.Z, {
        giftCodeSKU: exports,
        giftCode: Chunk647438,
        transitionTo: Chunk442837,
        location: Chunk570140
      })
    }
    return null
  }
  constructor(...e) {
    super(...e), T(this, "state", {
      error: null,
      continueOnWeb: false,
      currentUser: null,
      sentVerification: false,
      fetchingUser: false
    }), T(this, "refreshUser", () => {
      this.setState({
        fetchingUser: true
      }), h.k({
        withAnalyticsToken: true
      }).then(e => this.setState({
        currentUser: e,
        fetchingUser: false
      })).catch(() => this.setState({
        fetchingUser: false
      }))
    }), T(this, "handleLogout", () => {
      let e = this.props.match.params.giftCode;
      c.Z.logout("gift_code", y.Z5c.GIFT_CODE_LOGIN(e))
    }), T(this, "handleResendVerification", () => {
      c.Z.verifyResend(), this.setState({
        sentVerification: true
      })
    }), T(this, "handleAccept", async () => {
      let {
        transitionTo: e,
        giftCode: t
      } = this.props;
      if (null == t) throw Error("Trying to accept gift before resolve");
      let n = this.getCode();
      try {
        this.setState({
          error: null
        }), await u.Z.redeemGiftCode({
          code: n
        }), e(y.Z5c.APP)
      } catch (e) {
        this.setState({
          error: e
        })
      }
    }), T(this, "resolveGiftCode", () => {
      let {
        transitionTo: e
      } = this.props, t = this.getCode();
      u.Z.resolveGiftCode(t, true, true).then(n => {
        null != n && null != n.giftCode.promotion && e(y.Z5c.BILLING_PROMOTION_REDEMPTION(t))
      })
    })
  }
}
let P = Chunk442837.ZP.connectStores([Chunk82142.Z, Chunk283595.Z, Chunk314897.default, Chunk55563.Z, Chunk896797.Z, Chunk362762.Z], e => {
  let t = e.match.params.giftCode,
    n = x.Z.get(t),
    r = null != n ? v.Z.get(n.skuId) : null;
  return {
    giftCode: n,
    sku: r,
    libraryApplication: null != r && (null == n ? true : n.entitlementBranches) != null ? j.z2(n.entitlementBranches, r, E.Z) : null,
    authenticated: f.default.isAuthenticated(),
    defaultRoute: _.Z.defaultRoute,
    isResolved: x.Z.getIsResolved(t),
    isAccepting: x.Z.getIsAccepting(t),
    libraryApplicationsFetched: E.Z.fetched,
    nativeAppState: g.Z.getState(t)
  }
})(Z)