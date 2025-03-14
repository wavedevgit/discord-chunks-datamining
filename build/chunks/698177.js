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
  f = n(815660),
  g = n(388032),
  _ = n(612064),
  m = n(802138);
let b = () => {
  let [e, t] = i.useState(""), [o, b] = i.useState(""), [x, N] = i.useState(!1), [v, I] = i.useState(!1), [E, j] = i.useState(null), [C, O] = i.useState(null), S = (0, l.e7)([d.Z], () => d.Z.getCountryCode()), y = S.code.split(" ")[0], T = async () => {
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
      j(null), O(null), I(!0), c.Z.validatePhoneForSupport(t)
    } catch (e) {
      e.body.message ? (j(null), O(e.body.message)) : (j(e.body.phone), O(e.body.code))
    } finally {
      N(!1)
    }
  }, A = (0, r.jsxs)(p.ZP, {
    children: [(0, r.jsx)(p.Ee, {
      src: n(292824)
    }), (0, r.jsxs)(p.Dx, {
      className: a()(m.marginTop20, _.flex, _.justifyCenter, _.alignCenter),
      children: [g.NW.string(g.t.WWzQtb), (0, r.jsx)(s.owK, {
        size: "md",
        color: "currentColor",
        className: m.marginLeft8
      })]
    })]
  });
  return v ? A : (0, r.jsxs)(p.ZP, {
    children: [(0, r.jsx)(p.Dx, {
      children: g.NW.string(g.t.o4JNrK)
    }), (0, r.jsx)(p.DK, {
      className: m.marginTop8,
      children: g.NW.string(g.t.y0tVbm)
    }), (0, r.jsxs)(p.gO, {
      className: m.marginTop20,
      children: [(0, r.jsx)(h.Z, {
        label: g.NW.string(g.t.eJnn09),
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
        label: g.NW.string(g.t.OdzNbm),
        value: o,
        onChange: b,
        maxLength: f.z,
        error: C
      }), (0, r.jsx)(p.zx, {
        size: p.zx.Sizes.SMALL,
        look: p.zx.Looks.LINK,
        onClick: T,
        children: g.NW.string(g.t["5b60go"])
      }), (0, r.jsx)(p.zx, {
        className: m.marginTop20,
        onClick: P,
        submitting: x,
        children: g.NW.string(g.t.i4jeWV)
      })]
    })]
  })
}