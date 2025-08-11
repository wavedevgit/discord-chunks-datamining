/** Chunk was on 96858 **/
/** chunk id: 721751, original params: e,t,n (module,exports,require) **/
let r;
require.d(exports, {
  Z: () => j
}), require("./388685.js"), require("./35282.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk980591 = require("./980591.js"),
  Chunk605782 = require("./605782.jsx"),
  Chunk133853 = require("./133853.jsx"),
  Chunk568154 = require("./568154.jsx"),
  Chunk353926 = require("./353926.js"),
  Chunk703656 = require("./703656.js"),
  Chunk981631 = require("./981631.js"),
  Chunk963865 = require("./963865.js");
let Chunk575703 = require("./575703.js"),
  Chunk2984 = require("./2984.js"),
  O = [Chunk981631.Z5c.LOGIN, Chunk981631.Z5c.LOGIN_HANDOFF, Chunk981631.Z5c.REGISTER, Chunk981631.Z5c.INVITE(""), Chunk981631.Z5c.GIFT_CODE(""), Chunk981631.Z5c.GUILD_TEMPLATE_LOGIN(""), Chunk981631.Z5c.GUILD_TEMPLATE(""), Chunk981631.Z5c.DISABLE_EMAIL_NOTIFICATIONS, Chunk981631.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS, Chunk981631.Z5c.BILLING_PREMIUM_SUBSCRIBE, Chunk981631.Z5c.BILLING_PAYMENT_SOURCES_CREATE, Chunk981631.Z5c.BILLING_PAYMENTS, Chunk981631.Z5c.BILLING_PREMIUM_SWITCH_PLAN, Chunk981631.Z5c.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE, Chunk981631.Z5c.VERIFY, Chunk981631.Z5c.VERIFY_HUB_EMAIL, Chunk981631.Z5c.REJECT_IP, Chunk981631.Z5c.REJECT_MFA, Chunk981631.Z5c.AUTHORIZE_IP, Chunk981631.Z5c.AUTHORIZE_PAYMENT, Chunk981631.Z5c.RESET, Chunk981631.Z5c.HANDOFF, Chunk981631.Z5c.REPORT, Chunk981631.Z5c.REPORT_SECOND_LOOK, Chunk981631.Z5c.ACCOUNT_REVERT("")];

function g(e) {
  return O.some(t => e.startsWith(t))
}
let I = e => (r = e, e);

function T(e) {
  let {
    children: t
  } = e;
  switch (function() {
      var e;
      let [t, n] = i.useState(false), [o, l] = i.useState(true), s = (0, c.e7)([p.Z], () => p.Z.hasLoadedExperiments);
      return ((0, a.Z)(() => {}, 300), true !== r) ? r : !o && s ? (t || n(true), I((e = 0, "default"))) : o ? I("default") : "loading"
    }()) {
    case "default":
      return <o.Fragment>{<img className={m.artwork} src={_} alt={""} />}{<img className={m.logoWithText} src={E} alt={""} />}{t}</o.Fragment>;
    case "experimental":
    case "loading":
      return null
  }
}
class Z extends Chunk73800.Component {
  componentDidMount() {
    window.addEventListener("resize", this.handleResize)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize)
  }
  mobileTransitionTo(e, t) {
    if (g(e))(0, f.uL)(e, t);
    else {
      let n = null != t && null != t.search ? t.search : null;
      window.location = null == n ? e : "".concat(e, "?").concat(n)
    }
  }
  mobileReplaceWith(e) {
    g(e) ? (0, f.dL)(e) : window.location = e
  }
  renderDefault() {
    let {
      splash: e
    } = this.props, t = <Chunk605782.Z component={Chunk73800.Fragment}>{Chunk73800.Children.map(this.props.children, e => i.cloneElement(e, {
        transitionTo: f.uL,
        replaceWith: f.dL
      }))}</Chunk605782.Z>;
    return <div className={Chunk963865.characterBackground}><Chunk481060.y5t forceLevel={1}>{null != module ? (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
          children: [(0, Chunk255367.jsx)(Chunk133853.Z, {
            show: true,
            className: Chunk963865.logo
          }), (0, Chunk255367.jsx)(Chunk568154.h, {
            splash: module,
            children: exports
          })]
        }) : (0, Chunk255367.jsx)(T, {
          children: exports
        })}</Chunk481060.y5t></div>
  }
  renderMobile() {
    return <Chunk605782.Z component={Chunk73800.Fragment}>{Chunk73800.Children.map(this.props.children, e => i.cloneElement(e, {
        transitionTo: this.mobileTransitionTo,
        replaceWith: this.mobileReplaceWith
      }))}</Chunk605782.Z>
  }
  render() {
    let {
      isMobileWidth: e
    } = this.state, t = navigator.userAgent.includes("GameLauncher");
    return module || Chunk873546.tq || Chunk873546.Em || exports ? this.renderMobile() : this.renderDefault()
  }
  constructor(e) {
    var t, n;
    super(e), t = "handleResize", n = () => {
      this.setState({
        isMobileWidth: window.innerWidth <= 485
      })
    }, t in this ? Object.defineProperty(this, t, {
      value: n,
      enumerable: true,
      configurable: true,
      writable: true
    }) : this[t] = n, this.state = {
      isMobileWidth: window.innerWidth <= 485
    }
  }
}
let j = Z