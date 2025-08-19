/** Chunk was on 66181 **/
/** chunk id: 418632, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _,
  s: () => b
}), require("./388685.js");
var i, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk893776 = require("./893776.js"),
  Chunk468026 = require("./468026.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk388032 = require("./388032.jsx");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function b(e) {
  return u.Z.verifyResend().then(() => {
    (0, d.h7j)(t => {
      var n, i;
      return (0, r.jsx)(d.ConfirmModal, (n = f({
        header: g.intl.string(g.t.LykQYm),
        confirmText: g.intl.string(g.t.BddRzc),
        confirmButtonColor: c.zx.Colors.BRAND
      }, t), i = i = {
        children: (0, r.jsx)(d.Text, {
          variant: "text-md/normal",
          children: g.intl.format(g.t.azKEPz, {
            email: e.email
          })
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
      }), n))
    })
  }).catch(e => {
    let {
      body: t
    } = e, n = g.intl.string(g.t.XcrQNz);
    null != t && t.email && (n = t.email), (0, d.h7j)(e => (0, r.jsx)(m.default, f({
      title: g.intl.string(g.t.VbTh0N),
      body: n
    }, e)))
  })
}
class x extends(i = Chunk647438.Component) {
  render() {
    let {
      color: e,
      look: t,
      size: n
    } = this.props;
    return (0, Chunk951288.jsx)(Chunk755721.zx, {
      look: exports,
      size: require,
      color: module,
      disabled: this.state.isSendingVerificationEmail,
      onClick: this.handleResendVerification,
      children: Chunk388032.intl.string(Chunk388032.t.lm1UKi)
    })
  }
  constructor(...e) {
    super(...e), h(this, "state", {
      isSendingVerificationEmail: false
    }), h(this, "handleResendVerification", () => {
      let {
        currentUser: e,
        onClick: t
      } = this.props;
      null == t || t(), this.setState({
        isSendingVerificationEmail: true
      }, () => {
        b(e).then(() => this.setState({
          isSendingVerificationEmail: false
        }))
      })
    })
  }
}
h(x, "defaultProps", {
  size: Chunk755721.zx.Sizes.MEDIUM,
  color: Chunk755721.zx.Colors.BRAND
});
let _ = Chunk442837.ZP.connectStores([Chunk594174.default], () => {
  let e = Chunk594174.default.getCurrentUser();
  return l()(null != module, "ResendEmailVerificationButton: currentUser cannot be undefined"), {
    currentUser: module
  }
})(x)