/** Chunk was on 20102 **/
/** chunk id: 418632, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O,
  s: () => y
}), require("./388685.js");
var r, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk893776 = require("./893776.js"),
  Chunk468026 = require("./468026.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk388032 = require("./388032.jsx");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function y(e) {
  return d.Z.verifyResend().then(() => {
    (0, u.h7j)(t => {
      var n, r;
      return (0, i.jsx)(u.ConfirmModal, (n = g({
        header: b.intl.string(b.t.LykQYm),
        confirmText: b.intl.string(b.t.BddRzc),
        confirmButtonColor: c.zx.Colors.BRAND
      }, t), r = r = {
        children: (0, i.jsx)(u.Text, {
          variant: "text-md/normal",
          children: b.intl.format(b.t.azKEPz, {
            email: e.email
          })
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
      }), n))
    })
  }).catch(e => {
    let {
      body: t
    } = e, n = b.intl.string(b.t.XcrQNz);
    null != t && t.email && (n = t.email), (0, u.h7j)(e => (0, i.jsx)(f.default, g({
      title: b.intl.string(b.t.VbTh0N),
      body: n
    }, e)))
  })
}
class h extends(r = Chunk73800.Component) {
  render() {
    let {
      color: e,
      look: t,
      size: n
    } = this.props;
    return (0, Chunk255367.jsx)(Chunk755721.zx, {
      look: exports,
      size: require,
      color: module,
      disabled: this.state.isSendingVerificationEmail,
      onClick: this.handleResendVerification,
      children: Chunk388032.intl.string(Chunk388032.t.lm1UKi)
    })
  }
  constructor(...e) {
    super(...e), p(this, "state", {
      isSendingVerificationEmail: false
    }), p(this, "handleResendVerification", () => {
      let {
        currentUser: e,
        onClick: t
      } = this.props;
      null == t || t(), this.setState({
        isSendingVerificationEmail: true
      }, () => {
        y(e).then(() => this.setState({
          isSendingVerificationEmail: false
        }))
      })
    })
  }
}
p(h, "defaultProps", {
  size: Chunk755721.zx.Sizes.MEDIUM,
  color: Chunk755721.zx.Colors.BRAND
});
let O = Chunk442837.ZP.connectStores([Chunk594174.default], () => {
  let e = Chunk594174.default.getCurrentUser();
  return o()(null != module, "ResendEmailVerificationButton: currentUser cannot be undefined"), {
    currentUser: module
  }
})(h)