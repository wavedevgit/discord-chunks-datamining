/** Chunk was on 99673 **/
/** chunk id: 603647, original params: t,e,i (module,exports,require) **/
let s;
require.d(exports, {
  A: () => P
}), require("./896048.js"), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk960488 = require("./960488.js"),
  Chunk607399 = require("./607399.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk220839 = require("./220839.js"),
  Chunk897479 = require("./897479.jsx"),
  Chunk942156 = require("./942156.jsx"),
  Chunk25485 = require("./25485.jsx"),
  Chunk49463 = require("./49463.js"),
  Chunk976860 = require("./976860.js"),
  Chunk426660 = require("./426660.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk811431 = require("./811431.js");
let Chunk843020 = require("./843020.js"),
  Chunk545044 = require("./545044.js"),
  x = [Chunk652215.BVt.LOGIN, Chunk652215.BVt.LOGIN_HANDOFF, Chunk652215.BVt.LOGIN_ONE_TIME, Chunk652215.BVt.REGISTER, Chunk652215.BVt.INVITE(""), Chunk652215.BVt.GIFT_CODE(""), Chunk652215.BVt.GUILD_TEMPLATE_LOGIN(""), Chunk652215.BVt.GUILD_TEMPLATE(""), Chunk652215.BVt.DISABLE_EMAIL_NOTIFICATIONS, Chunk652215.BVt.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS, Chunk652215.BVt.BILLING_PREMIUM_SUBSCRIBE, Chunk652215.BVt.BILLING_PAYMENT_SOURCES_CREATE, Chunk652215.BVt.BILLING_PAYMENTS, Chunk652215.BVt.BILLING_PREMIUM_SWITCH_PLAN, Chunk652215.BVt.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE, Chunk652215.BVt.VERIFY, Chunk652215.BVt.VERIFY_HUB_EMAIL, Chunk652215.BVt.REJECT_IP, Chunk652215.BVt.REJECT_MFA, Chunk652215.BVt.AUTHORIZE_IP, Chunk652215.BVt.AUTHORIZE_PAYMENT, Chunk652215.BVt.RESET, Chunk652215.BVt.HANDOFF, Chunk652215.BVt.REPORT, Chunk652215.BVt.REPORT_SECOND_LOOK, Chunk652215.BVt.ACCOUNT_REVERT("")];

function E(t) {
  return x.some(e => t.startsWith(e))
}
let O = t => (s = t, t),
  j = [Chunk652215.BVt.VERIFY, Chunk652215.BVt.VERIFY_HUB_EMAIL];

function I(t) {
  let {
    children: e
  } = t, i = function() {
    let [t, e] = r.useState(false), [i, n] = r.useState(true), a = (0, l.bG)([f.A], () => f.A.hasLoadedExperiments);
    return ((0, c.A)(() => {}, 300), true !== s) ? s : !i && a ? (t || e(true), O("default")) : i ? O("default") : "loading"
  }(), h = (0, a.zy)(), o = j.includes(h.pathname);
  switch (i) {
    case "default":
      return (0, n.jsxs)(n.Fragment, {
        children: [o ? (0, n.jsx)(g.A, {}) : (0, n.jsx)("img", {
          className: w.xX,
          src: b,
          alt: ""
        }), (0, n.jsx)("img", {
          className: w.F,
          src: y,
          alt: ""
        }), e]
      });
    case "experimental":
    case "loading":
      return null
  }
}
class A extends Chunk64700.Component {
  componentDidMount() {
    window.addEventListener("resize", this.handleResize)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize)
  }
  mobileTransitionTo(t, e) {
    if (E(t))(0, m.pX)(t, e);
    else {
      let i = null != e && null != e.search ? e.search : null;
      window.location = null == i ? t : "".concat(t, "?").concat(i)
    }
  }
  mobileReplaceWith(t) {
    E(t) ? (0, m.bG)(t) : window.location = t
  }
  renderDefault() {
    let {
      splash: t
    } = this.props, e = (0, n.jsx)(d.A, {
      component: r.Fragment,
      children: r.Children.map(this.props.children, t => r.cloneElement(t, {
        transitionTo: m.pX,
        replaceWith: m.bG
      }))
    });
    return (0, n.jsx)("div", {
      className: w.WA,
      children: (0, n.jsx)(o.Fmo, {
        forceLevel: 1,
        children: null != t ? (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(u.A, {
            show: true,
            className: w.wm
          }), (0, n.jsx)(p.g, {
            splash: t,
            children: e
          })]
        }) : (0, n.jsx)(I, {
          children: e
        })
      })
    })
  }
  renderMobile() {
    return (0, n.jsx)(d.A, {
      component: r.Fragment,
      children: r.Children.map(this.props.children, t => r.cloneElement(t, {
        transitionTo: this.mobileTransitionTo,
        replaceWith: this.mobileReplaceWith
      }))
    })
  }
  render() {
    let {
      isMobileWidth: t
    } = this.state, e = navigator.userAgent.includes("GameLauncher");
    return t || h.Fr || h.v1 || e ? this.renderMobile() : this.renderDefault()
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
let P = A