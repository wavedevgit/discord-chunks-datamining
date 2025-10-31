/** Chunk was on 93426 **/
/** chunk id: 721751, original params: e,t,r (module,exports,require) **/
let n;
require.d(exports, {
  Z: () => B
}), require("./388685.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk843611 = require("./843611.js"),
  Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk980591 = require("./980591.js"),
  Chunk605782 = require("./605782.jsx"),
  Chunk133853 = require("./133853.jsx"),
  Chunk568154 = require("./568154.jsx"),
  Chunk353926 = require("./353926.js"),
  Chunk703656 = require("./703656.js"),
  Chunk546247 = require("./546247.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk816282 = require("./816282.js");
let Chunk575703 = require("./575703.js"),
  Chunk2984 = require("./2984.js"),
  m = [Chunk981631.Z5c.LOGIN, Chunk981631.Z5c.LOGIN_HANDOFF, Chunk981631.Z5c.LOGIN_ONE_TIME, Chunk981631.Z5c.REGISTER, Chunk981631.Z5c.INVITE(""), Chunk981631.Z5c.GIFT_CODE(""), Chunk981631.Z5c.GUILD_TEMPLATE_LOGIN(""), Chunk981631.Z5c.GUILD_TEMPLATE(""), Chunk981631.Z5c.DISABLE_EMAIL_NOTIFICATIONS, Chunk981631.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS, Chunk981631.Z5c.BILLING_PREMIUM_SUBSCRIBE, Chunk981631.Z5c.BILLING_PAYMENT_SOURCES_CREATE, Chunk981631.Z5c.BILLING_PAYMENTS, Chunk981631.Z5c.BILLING_PREMIUM_SWITCH_PLAN, Chunk981631.Z5c.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE, Chunk981631.Z5c.VERIFY, Chunk981631.Z5c.VERIFY_HUB_EMAIL, Chunk981631.Z5c.REJECT_IP, Chunk981631.Z5c.REJECT_MFA, Chunk981631.Z5c.AUTHORIZE_IP, Chunk981631.Z5c.AUTHORIZE_PAYMENT, Chunk981631.Z5c.RESET, Chunk981631.Z5c.HANDOFF, Chunk981631.Z5c.REPORT, Chunk981631.Z5c.REPORT_SECOND_LOOK, Chunk981631.Z5c.ACCOUNT_REVERT("")];

function b(e) {
  return m.some(t => e.startsWith(t))
}
let _ = e => (n = e, e),
  Z = [Chunk981631.Z5c.VERIFY, Chunk981631.Z5c.VERIFY_HUB_EMAIL];

function w(e) {
  let {
    children: t
  } = e, r = function() {
    let [e, t] = l.useState(false), [r, i] = l.useState(true), s = (0, c.e7)([p.Z], () => p.Z.hasLoadedExperiments);
    return ((0, u.Z)(() => {}, 300), true !== n) ? n : !r && s ? (e || t(true), _("default")) : r ? _("default") : "loading"
  }(), o = (0, s.TH)(), a = Z.includes(o.pathname);
  switch (r) {
    case "default":
      return (0, i.jsxs)(i.Fragment, {
        children: [a ? (0, i.jsx)(g.Z, {}) : (0, i.jsx)("img", {
          className: E.artwork,
          src: I,
          alt: ""
        }), (0, i.jsx)("img", {
          className: E.logoWithText,
          src: O,
          alt: ""
        }), t]
      });
    case "experimental":
    case "loading":
      return null
  }
}
class y extends Chunk647438.Component {
  componentDidMount() {
    window.addEventListener("resize", this.handleResize)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize)
  }
  mobileTransitionTo(e, t) {
    if (b(e))(0, x.uL)(e, t);
    else {
      let r = null != t && null != t.search ? t.search : null;
      window.location = null == r ? e : "".concat(e, "?").concat(r)
    }
  }
  mobileReplaceWith(e) {
    b(e) ? (0, x.dL)(e) : window.location = e
  }
  renderDefault() {
    let {
      splash: e
    } = this.props, t = (0, Chunk951288.jsx)(Chunk605782.Z, {
      component: Chunk647438.Fragment,
      children: Chunk647438.Children.map(this.props.children, e => l.cloneElement(e, {
        transitionTo: x.uL,
        replaceWith: x.dL
      }))
    });
    return (0, Chunk951288.jsx)("div", {
      className: Chunk816282.characterBackground,
      children: (0, Chunk951288.jsx)(Chunk481060.y5t, {
        forceLevel: 1,
        children: null != module ? (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
          children: [(0, Chunk951288.jsx)(Chunk133853.Z, {
            show: true,
            className: Chunk816282.logo
          }), (0, Chunk951288.jsx)(Chunk568154.h, {
            splash: module,
            children: exports
          })]
        }) : (0, Chunk951288.jsx)(w, {
          children: exports
        })
      })
    })
  }
  renderMobile() {
    return (0, Chunk951288.jsx)(Chunk605782.Z, {
      component: Chunk647438.Fragment,
      children: Chunk647438.Children.map(this.props.children, e => l.cloneElement(e, {
        transitionTo: this.mobileTransitionTo,
        replaceWith: this.mobileReplaceWith
      }))
    })
  }
  render() {
    let {
      isMobileWidth: e
    } = this.state, t = navigator.userAgent.includes("GameLauncher");
    return module || Chunk873546.tq || Chunk873546.Em || exports ? this.renderMobile() : this.renderDefault()
  }
  constructor(e) {
    super(e),
      function(e, t, r) {
        t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = r
      }(this, "handleResize", () => {
        this.setState({
          isMobileWidth: window.innerWidth <= 485
        })
      }), this.state = {
        isMobileWidth: window.innerWidth <= 485
      }
  }
}
let B = y