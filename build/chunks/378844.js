/** Chunk was on 30829 **/
n.d(t, {
  R: () => y,
  Z: () => v
});
var r, i = n(200651);
n(192379);
var l = n(442837),
  o = n(481060),
  a = n(893776),
  s = n(391650),
  c = n(313201),
  u = n(144114),
  d = n(607744),
  p = n(594174),
  h = n(981631),
  f = n(815660),
  g = n(388032),
  m = n(155715);

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}
var y = ((r = {})[r.VOICE = 0] = "VOICE", r);
let v = e => {
  let {
    type: t,
    guildId: r,
    closePopout: y
  } = e, v = (0, c.Dt)(), {
    notClaimed: O,
    notEmailVerified: j,
    notPhoneVerified: _,
    newAccount: C,
    newMember: x
  } = (0, l.e7)([d.Z], () => d.Z.getCheck(r), [r]), P = 0 === t ? g.NW.string(g.t["6zY8BA"]) : null, N = null, S = null;
  return (0 === t && (O ? (N = g.NW.string(g.t.IRxUlJ), S = g.NW.string(g.t.fiNVio)) : _ ? (N = g.NW.string(g.t.vW8iUF), S = g.NW.string(g.t["50gfOj"])) : j ? (N = g.NW.string(g.t.vdSOp6), S = g.NW.string(g.t.lm1UKi)) : x ? (N = g.NW.formatToPlainString(g.t.v1ktYW, {
    min: h.YeM.MEMBER_AGE
  }), S = g.NW.string(g.t.BddRzc)) : C && (N = g.NW.formatToPlainString(g.t["sncw4+"], {
    min: h.YeM.ACCOUNT_AGE
  }), S = g.NW.string(g.t.BddRzc))), null == P || null == N) ? null : (0, i.jsxs)(o.VqE, {
    className: m.container,
    "aria-labelledby": v,
    children: [(0, i.jsx)("img", {
      alt: "",
      className: m.image,
      src: n(64395)
    }), (0, i.jsxs)("div", {
      className: m.content,
      children: [(0, i.jsx)(o.X6q, {
        variant: "heading-md/semibold",
        id: v,
        children: P
      }), (0, i.jsx)(o.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: N
      }), (0, i.jsxs)("div", {
        className: m.buttonContainer,
        children: [null != S ? (0, i.jsx)(o.zxk, {
          onClick: () => {
            O ? s.j() : _ ? (0, o.ZDy)(async () => {
              let {
                default: e
              } = await Promise.all([n.e("76540"), n.e("42936")]).then(n.bind(n, 607018));
              return t => (0, i.jsx)(e, b({
                reason: u.L.GUILD_PHONE_REQUIRED
              }, t))
            }, {
              modalKey: f.M
            }) : j && (a.Z.verifyResend(), (0, o.h7j)(e => {
              var t, n, r;
              return (0, i.jsx)(o.ConfirmModal, (n = b({
                header: g.NW.string(g.t.LykQYm),
                confirmText: g.NW.string(g.t.BddRzc),
                confirmButtonColor: o.zxk.Colors.BRAND
              }, e), r = r = {
                children: (0, i.jsx)(o.Text, {
                  variant: "text-md/normal",
                  children: g.NW.format(g.t.azKEPz, {
                    email: null === (t = p.default.getCurrentUser()) || void 0 === t ? void 0 : t.email
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
            })), y()
          },
          className: m.primaryButton,
          children: S
        }) : null, O || _ || j ? (0, i.jsx)(o.zxk, {
          onClick: y,
          look: o.zxk.Looks.BLANK,
          className: m.cancel,
          children: g.NW.string(g.t.oEAioK)
        }) : null]
      })]
    })]
  })
}