/** Chunk was on web.js **/
/** chunk id: 418632, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O,
  s: () => b
}), require("./388685.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
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

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function b(e) {
  return d.Z.verifyResend().then(() => {
    (0, u.h7j)(t => (0, i.jsx)(u.ConfirmModal, E(m({
      header: p.intl.string(p.t.LykQYm),
      confirmText: p.intl.string(p.t.BddRzc),
      confirmButtonColor: c.zx.Colors.BRAND
    }, t), {
      children: (0, i.jsx)(u.Text, {
        variant: "text-md/normal",
        children: p.intl.format(p.t.azKEPz, {
          email: e.email
        })
      })
    })))
  }).catch(e => {
    let {
      body: t
    } = e, n = p.intl.string(p.t.XcrQNz);
    null != t && t.email && (n = t.email), (0, u.h7j)(e => (0, i.jsx)(f.default, m({
      title: p.intl.string(p.t.VbTh0N),
      body: n
    }, e)))
  })
}
class y extends(r = Chunk647438.Component) {
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
h(y, "defaultProps", {
  size: Chunk755721.zx.Sizes.MEDIUM,
  color: Chunk755721.zx.Colors.BRAND
});
let O = Chunk442837.ZP.connectStores([Chunk594174.default], () => {
  let e = Chunk594174.default.getCurrentUser();
  return s()(null != module, "ResendEmailVerificationButton: currentUser cannot be undefined"), {
    currentUser: module
  }
})(y)