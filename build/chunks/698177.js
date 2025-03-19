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
  p = n(952802),
  h = n(388905),
  g = n(815660),
  _ = n(388032),
  m = n(612064),
  f = n(802138);
let b = () => {
  let [e, t] = i.useState(""), [o, b] = i.useState(""), [x, N] = i.useState(!1), [v, E] = i.useState(!1), [I, j] = i.useState(null), [S, C] = i.useState(null), O = (0, s.e7)([d.Z], () => d.Z.getCountryCode()), y = O.code.split(" ")[0], T = async () => {
    try {
      await c.Z.resendCode(e)
    } catch (e) {
      C(e.body.message)
    }
  }, P = async () => {
    N(!0);
    try {
      let {
        token: t
      } = await c.Z.verifyPhone(y + e, o);
      j(null), C(null), E(!0), c.Z.validatePhoneForSupport(t)
    } catch (e) {
      e.body.message ? (j(null), C(e.body.message)) : (j(e.body.phone), C(e.body.code))
    } finally {
      N(!1)
    }
  }, A = (0, r.jsxs)(h.ZP, {
    children: [(0, r.jsx)(h.Ee, {
      src: n(292824)
    }), (0, r.jsxs)(h.Dx, {
      className: a()(f.marginTop20, m.flex, m.justifyCenter, m.alignCenter),
      children: [_.NW.string(_.t.WWzQtb), (0, r.jsx)(l.owK, {
        size: "md",
        color: "currentColor",
        className: f.marginLeft8
      })]
    })]
  });
  return v ? A : (0, r.jsxs)(h.ZP, {
    children: [(0, r.jsx)(h.Dx, {
      children: _.NW.string(_.t.o4JNrK)
    }), (0, r.jsx)(h.DK, {
      className: f.marginTop8,
      children: _.NW.string(_.t.y0tVbm)
    }), (0, r.jsxs)(h.gO, {
      className: f.marginTop20,
      children: [(0, r.jsx)(p.Z, {
        label: _.NW.string(_.t.eJnn09),
        alpha2: O.alpha2,
        countryCode: y,
        value: e,
        autoComplete: "off",
        spellCheck: "false",
        onChange: t,
        forceMode: u.Nz.PHONE,
        error: I
      }), (0, r.jsx)(h.II, {
        className: f.marginTop20,
        label: _.NW.string(_.t.OdzNbm),
        value: o,
        onChange: b,
        maxLength: g.z,
        error: S
      }), (0, r.jsx)(h.zx, {
        size: h.zx.Sizes.SMALL,
        look: h.zx.Looks.LINK,
        onClick: T,
        children: _.NW.string(_.t["5b60go"])
      }), (0, r.jsx)(h.zx, {
        className: f.marginTop20,
        onClick: P,
        submitting: x,
        children: _.NW.string(_.t.i4jeWV)
      })]
    })]
  })
}