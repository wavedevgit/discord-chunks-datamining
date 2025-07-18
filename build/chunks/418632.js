/** Chunk was on 20102 **/
n.d(t, {
  Z: () => j
}), n(388685);
var r, i = n(255367),
  s = n(73800),
  o = n(512722),
  l = n.n(o),
  a = n(442837),
  c = n(755721),
  u = n(481060),
  d = n(893776),
  f = n(468026),
  m = n(594174),
  p = n(388032);

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}
class h extends(r = s.Component) {
  render() {
    let {
      color: e,
      look: t,
      size: n
    } = this.props;
    return (0, i.jsx)(c.zx, {
      look: t,
      size: n,
      color: e,
      disabled: this.state.isSendingVerificationEmail,
      onClick: this.handleResendVerification,
      children: p.intl.string(p.t.lm1UKi)
    })
  }
  constructor(...e) {
    super(...e), b(this, "state", {
      isSendingVerificationEmail: !1
    }), b(this, "handleResendVerification", () => {
      let {
        currentUser: e,
        onClick: t
      } = this.props;
      null == t || t(), this.setState({
        isSendingVerificationEmail: !0
      }, () => {
        d.Z.verifyResend().then(() => (0, u.h7j)(t => {
          var n, r;
          return (0, i.jsx)(u.ConfirmModal, (n = g({
            header: p.intl.string(p.t.LykQYm),
            confirmText: p.intl.string(p.t.BddRzc),
            confirmButtonColor: c.zx.Colors.BRAND
          }, t), r = r = {
            children: (0, i.jsx)(u.Text, {
              variant: "text-md/normal",
              children: p.intl.format(p.t.azKEPz, {
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
        })).catch(e => {
          let {
            body: t
          } = e, n = p.intl.string(p.t.XcrQNz);
          null != t && t.email && (n = t.email), (0, u.h7j)(e => (0, i.jsx)(f.default, g({
            title: p.intl.string(p.t.VbTh0N),
            body: n
          }, e)))
        }).then(() => this.setState({
          isSendingVerificationEmail: !1
        }))
      })
    })
  }
}
b(h, "defaultProps", {
  size: c.zx.Sizes.MEDIUM,
  color: c.zx.Colors.BRAND
});
let j = a.ZP.connectStores([m.default], () => {
  let e = m.default.getCurrentUser();
  return l()(null != e, "ResendEmailVerificationButton: currentUser cannot be undefined"), {
    currentUser: e
  }
})(h)