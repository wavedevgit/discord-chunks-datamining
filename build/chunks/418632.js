/** Chunk was on 20102 **/
n.d(t, {
  Z: () => g
}), n(388685);
var r, i = n(255367),
  o = n(73800),
  s = n(512722),
  l = n.n(s),
  c = n(442837),
  a = n(481060),
  u = n(893776),
  d = n(468026),
  f = n(594174),
  m = n(388032);

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function b(e) {
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
class h extends(r = o.Component) {
  render() {
    let {
      color: e,
      look: t,
      size: n
    } = this.props;
    return (0, i.jsx)(a.zxk, {
      look: t,
      size: n,
      color: e,
      disabled: this.state.isSendingVerificationEmail,
      onClick: this.handleResendVerification,
      children: m.intl.string(m.t.lm1UKi)
    })
  }
  constructor(...e) {
    super(...e), p(this, "state", {
      isSendingVerificationEmail: !1
    }), p(this, "handleResendVerification", () => {
      let {
        currentUser: e,
        onClick: t
      } = this.props;
      null == t || t(), this.setState({
        isSendingVerificationEmail: !0
      }, () => {
        u.Z.verifyResend().then(() => (0, a.h7j)(t => {
          var n, r;
          return (0, i.jsx)(a.ConfirmModal, (n = b({
            header: m.intl.string(m.t.LykQYm),
            confirmText: m.intl.string(m.t.BddRzc),
            confirmButtonColor: a.zxk.Colors.BRAND
          }, t), r = r = {
            children: (0, i.jsx)(a.Text, {
              variant: "text-md/normal",
              children: m.intl.format(m.t.azKEPz, {
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
          } = e, n = m.intl.string(m.t.XcrQNz);
          null != t && t.email && (n = t.email), (0, a.h7j)(e => (0, i.jsx)(d.default, b({
            title: m.intl.string(m.t.VbTh0N),
            body: n
          }, e)))
        }).then(() => this.setState({
          isSendingVerificationEmail: !1
        }))
      })
    })
  }
}
p(h, "defaultProps", {
  size: a.zxk.Sizes.MEDIUM,
  color: a.zxk.Colors.BRAND
});
let g = c.ZP.connectStores([f.default], () => {
  let e = f.default.getCurrentUser();
  return l()(null != e, "ResendEmailVerificationButton: currentUser cannot be undefined"), {
    currentUser: e
  }
})(h)