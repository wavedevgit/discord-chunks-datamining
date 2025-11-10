/** Chunk was on 12581 **/
/** chunk id: 721751, original params: t,e,i (module,exports,require) **/
let s;
require.d(exports, {
  Z: () => P
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
  x = [Chunk981631.Z5c.LOGIN, Chunk981631.Z5c.LOGIN_HANDOFF, Chunk981631.Z5c.LOGIN_ONE_TIME, Chunk981631.Z5c.REGISTER, Chunk981631.Z5c.INVITE(""), Chunk981631.Z5c.GIFT_CODE(""), Chunk981631.Z5c.GUILD_TEMPLATE_LOGIN(""), Chunk981631.Z5c.GUILD_TEMPLATE(""), Chunk981631.Z5c.DISABLE_EMAIL_NOTIFICATIONS, Chunk981631.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS, Chunk981631.Z5c.BILLING_PREMIUM_SUBSCRIBE, Chunk981631.Z5c.BILLING_PAYMENT_SOURCES_CREATE, Chunk981631.Z5c.BILLING_PAYMENTS, Chunk981631.Z5c.BILLING_PREMIUM_SWITCH_PLAN, Chunk981631.Z5c.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE, Chunk981631.Z5c.VERIFY, Chunk981631.Z5c.VERIFY_HUB_EMAIL, Chunk981631.Z5c.REJECT_IP, Chunk981631.Z5c.REJECT_MFA, Chunk981631.Z5c.AUTHORIZE_IP, Chunk981631.Z5c.AUTHORIZE_PAYMENT, Chunk981631.Z5c.RESET, Chunk981631.Z5c.HANDOFF, Chunk981631.Z5c.REPORT, Chunk981631.Z5c.REPORT_SECOND_LOOK, Chunk981631.Z5c.ACCOUNT_REVERT("")];

function E(t) {
  return x.some(e => t.startsWith(e))
}
let O = t => (s = t, t),
  j = [Chunk981631.Z5c.VERIFY, Chunk981631.Z5c.VERIFY_HUB_EMAIL];

function I(t) {
  let {
    children: e
  } = t, i = function() {
    let [t, e] = r.useState(false), [i, n] = r.useState(true), a = (0, l.e7)([f.Z], () => f.Z.hasLoadedExperiments);
    return ((0, c.Z)(() => {}, 300), true !== s) ? s : !i && a ? (t || e(true), O("default")) : i ? O("default") : "loading"
  }(), h = (0, a.TH)(), o = j.includes(h.pathname);
  switch (i) {
    case "default":
      return (0, n.jsxs)(n.Fragment, {
        children: [o ? (0, n.jsx)(g.Z, {}) : (0, n.jsx)("img", {
          className: w.artwork,
          src: b,
          alt: ""
        }), (0, n.jsx)("img", {
          className: w.logoWithText,
          src: y,
          alt: ""
        }), e]
      });
    case "experimental":
    case "loading":
      return null
  }
}
class S extends Chunk647438.Component {
  componentDidMount() {
    window.addEventListener("resize", this.handleResize)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize)
  }
  mobileTransitionTo(t, e) {
    if (E(t))(0, m.uL)(t, e);
    else {
      let i = null != e && null != e.search ? e.search : null;
      window.location = null == i ? t : "".concat(t, "?").concat(i)
    }
  }
  mobileReplaceWith(t) {
    E(t) ? (0, m.dL)(t) : window.location = t
  }
  renderDefault() {
    let {
      splash: t
    } = this.props, e = (0, Chunk951288.jsx)(Chunk605782.Z, {
      component: Chunk647438.Fragment,
      children: Chunk647438.Children.map(this.props.children, t => r.cloneElement(t, {
        transitionTo: m.uL,
        replaceWith: m.dL
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
        }) : (0, Chunk951288.jsx)(I, {
          children: exports
        })
      })
    })
  }
  renderMobile() {
    return (0, Chunk951288.jsx)(Chunk605782.Z, {
      component: Chunk647438.Fragment,
      children: Chunk647438.Children.map(this.props.children, t => r.cloneElement(t, {
        transitionTo: this.mobileTransitionTo,
        replaceWith: this.mobileReplaceWith
      }))
    })
  }
  render() {
    let {
      isMobileWidth: t
    } = this.state, e = navigator.userAgent.includes("GameLauncher");
    return module || Chunk873546.tq || Chunk873546.Em || exports ? this.renderMobile() : this.renderDefault()
  }
  constructor(t) {
    super(t),
      function(t, e, i) {
        e in t ? Object.defineProperty(t, e, {
          value: i,
          enumerable: true,
          configurable: true,
          writable: true
        }) : t[e] = i
      }(this, "handleResize", () => {
        this.setState({
          isMobileWidth: window.innerWidth <= 485
        })
      }), this.state = {
        isMobileWidth: window.innerWidth <= 485
      }
  }
}
let P = S