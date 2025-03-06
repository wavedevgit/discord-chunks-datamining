/** Chunk was on 51724 **/
n.d(t, {
  Z: () => x
}), n(47120);
var r, i = n(200651),
  s = n(192379),
  a = n(512722),
  l = n.n(a),
  o = n(442837),
  c = n(481060),
  d = n(893776),
  u = n(468026),
  m = n(594174),
  p = n(388032);

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}
class f extends(r = s.Component) {
  render() {
    let {
      color: e,
      look: t,
      size: n
    } = this.props;
    return (0, i.jsx)(c.zxk, {
      look: t,
      size: n,
      color: e,
      disabled: this.state.isSendingVerificationEmail,
      onClick: this.handleResendVerification,
      children: p.NW.string(p.t.lm1UKi)
    })
  }
  constructor(...e) {
    super(...e), g(this, "state", {
      isSendingVerificationEmail: !1
    }), g(this, "handleResendVerification", () => {
      let {
        currentUser: e,
        onClick: t
      } = this.props;
      null == t || t(), this.setState({
        isSendingVerificationEmail: !0
      }, () => {
        d.Z.verifyResend().then(() => (0, c.h7j)(t => {
          var n, r;
          return (0, i.jsx)(c.ConfirmModal, (n = h({
            header: p.NW.string(p.t.LykQYm),
            confirmText: p.NW.string(p.t.BddRzc),
            confirmButtonColor: c.zxk.Colors.BRAND
          }, t), r = r = {
            children: (0, i.jsx)(c.Text, {
              variant: "text-md/normal",
              children: p.NW.format(p.t.azKEPz, {
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
          } = e, n = p.NW.string(p.t.XcrQNz);
          null != t && t.email && (n = t.email), (0, c.h7j)(e => (0, i.jsx)(u.default, h({
            title: p.NW.string(p.t.VbTh0N),
            body: n
          }, e)))
        }).then(() => this.setState({
          isSendingVerificationEmail: !1
        }))
      })
    })
  }
}
g(f, "defaultProps", {
  size: c.zxk.Sizes.MEDIUM,
  color: c.zxk.Colors.BRAND
});
let x = o.ZP.connectStores([m.default], () => {
  let e = m.default.getCurrentUser();
  return l()(null != e, "ResendEmailVerificationButton: currentUser cannot be undefined"), {
    currentUser: e
  }
})(f)