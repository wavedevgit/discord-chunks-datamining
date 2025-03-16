/** Chunk was on 27978 **/
n.d(t, {
  Z: () => b
}), n(47120), n(301563);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(442837),
  l = n(481060),
  c = n(144114),
  u = n(742458),
  d = n(541692),
  h = n(952802),
  p = n(388905),
  g = n(815660),
  m = n(388032),
  _ = n(612064),
  f = n(802138);
let b = () => {
  let [e, t] = i.useState(""), [o, b] = i.useState(""), [x, N] = i.useState(!1), [v, E] = i.useState(!1), [I, j] = i.useState(null), [C, S] = i.useState(null), O = (0, s.e7)([d.Z], () => d.Z.getCountryCode()), y = O.code.split(" ")[0], T = async () => {
    try {
      await c.Z.resendCode(e)
    } catch (e) {
      S(e.body.message)
    }
  }, P = async () => {
    N(!0);
    try {
      let {
        token: t
      } = await c.Z.verifyPhone(y + e, o);
      j(null), S(null), E(!0), c.Z.validatePhoneForSupport(t)
    } catch (e) {
      e.body.message ? (j(null), S(e.body.message)) : (j(e.body.phone), S(e.body.code))
    } finally {
      N(!1)
    }
  }, A = (0, r.jsxs)(p.ZP, {
    children: [(0, r.jsx)(p.Ee, {
      src: n(292824)
    }), (0, r.jsxs)(p.Dx, {
      className: a()(f.marginTop20, _.flex, _.justifyCenter, _.alignCenter),
      children: [m.NW.string(m.t.WWzQtb), (0, r.jsx)(l.owK, {
        size: "md",
        color: "currentColor",
        className: f.marginLeft8
      })]
    })]
  });
  return v ? A : (0, r.jsxs)(p.ZP, {
    children: [(0, r.jsx)(p.Dx, {
      children: m.NW.string(m.t.o4JNrK)
    }), (0, r.jsx)(p.DK, {
      className: f.marginTop8,
      children: m.NW.string(m.t.y0tVbm)
    }), (0, r.jsxs)(p.gO, {
      className: f.marginTop20,
      children: [(0, r.jsx)(h.Z, {
        label: m.NW.string(m.t.eJnn09),
        alpha2: O.alpha2,
        countryCode: y,
        value: e,
        autoComplete: "off",
        spellCheck: "false",
        onChange: t,
        forceMode: u.Nz.PHONE,
        error: I
      }), (0, r.jsx)(p.II, {
        className: f.marginTop20,
        label: m.NW.string(m.t.OdzNbm),
        value: o,
        onChange: b,
        maxLength: g.z,
        error: C
      }), (0, r.jsx)(p.zx, {
        size: p.zx.Sizes.SMALL,
        look: p.zx.Looks.LINK,
        onClick: T,
        children: m.NW.string(m.t["5b60go"])
      }), (0, r.jsx)(p.zx, {
        className: f.marginTop20,
        onClick: P,
        submitting: x,
        children: m.NW.string(m.t.i4jeWV)
      })]
    })]
  })
}