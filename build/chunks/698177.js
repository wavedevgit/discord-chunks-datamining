/** Chunk was on 27978 **/
n.d(t, {
  Z: () => b
}), n(47120), n(301563);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  l = n(442837),
  s = n(481060),
  c = n(144114),
  u = n(742458),
  d = n(541692),
  h = n(952802),
  p = n(388905),
  g = n(815660),
  f = n(388032),
  _ = n(612064),
  m = n(802138);
let b = () => {
  let [e, t] = i.useState(""), [o, b] = i.useState(""), [x, N] = i.useState(!1), [v, I] = i.useState(!1), [E, C] = i.useState(null), [j, O] = i.useState(null), S = (0, l.e7)([d.Z], () => d.Z.getCountryCode()), y = S.code.split(" ")[0], T = async () => {
    try {
      await c.Z.resendCode(e)
    } catch (e) {
      O(e.body.message)
    }
  }, P = async () => {
    N(!0);
    try {
      let {
        token: t
      } = await c.Z.verifyPhone(y + e, o);
      C(null), O(null), I(!0), c.Z.validatePhoneForSupport(t)
    } catch (e) {
      e.body.message ? (C(null), O(e.body.message)) : (C(e.body.phone), O(e.body.code))
    } finally {
      N(!1)
    }
  }, A = (0, r.jsxs)(p.ZP, {
    children: [(0, r.jsx)(p.Ee, {
      src: n(292824)
    }), (0, r.jsxs)(p.Dx, {
      className: a()(m.marginTop20, _.flex, _.justifyCenter, _.alignCenter),
      children: [f.NW.string(f.t.WWzQtb), (0, r.jsx)(s.owK, {
        size: "md",
        color: "currentColor",
        className: m.marginLeft8
      })]
    })]
  });
  return v ? A : (0, r.jsxs)(p.ZP, {
    children: [(0, r.jsx)(p.Dx, {
      children: f.NW.string(f.t.o4JNrK)
    }), (0, r.jsx)(p.DK, {
      className: m.marginTop8,
      children: f.NW.string(f.t.y0tVbm)
    }), (0, r.jsxs)(p.gO, {
      className: m.marginTop20,
      children: [(0, r.jsx)(h.Z, {
        label: f.NW.string(f.t.eJnn09),
        alpha2: S.alpha2,
        countryCode: y,
        value: e,
        autoComplete: "off",
        spellCheck: "false",
        onChange: t,
        forceMode: u.Nz.PHONE,
        error: E
      }), (0, r.jsx)(p.II, {
        className: m.marginTop20,
        label: f.NW.string(f.t.OdzNbm),
        value: o,
        onChange: b,
        maxLength: g.z,
        error: j
      }), (0, r.jsx)(p.zx, {
        size: p.zx.Sizes.SMALL,
        look: p.zx.Looks.LINK,
        onClick: T,
        children: f.NW.string(f.t["5b60go"])
      }), (0, r.jsx)(p.zx, {
        className: m.marginTop20,
        onClick: P,
        submitting: x,
        children: f.NW.string(f.t.i4jeWV)
      })]
    })]
  })
}