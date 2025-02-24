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
  _ = n(388032),
  m = n(968693),
  f = n(455812);
let b = () => {
  let [e, t] = i.useState(""), [o, b] = i.useState(""), [N, x] = i.useState(!1), [v, E] = i.useState(!1), [I, O] = i.useState(null), [C, S] = i.useState(null), j = (0, l.e7)([d.Z], () => d.Z.getCountryCode()), y = j.code.split(" ")[0], T = async () => {
    try {
      await c.Z.resendCode(e)
    } catch (e) {
      S(e.body.message)
    }
  }, A = async () => {
    x(!0);
    try {
      let {
        token: t
      } = await c.Z.verifyPhone(y + e, o);
      O(null), S(null), E(!0), c.Z.validatePhoneForSupport(t)
    } catch (e) {
      e.body.message ? (O(null), S(e.body.message)) : (O(e.body.phone), S(e.body.code))
    } finally {
      x(!1)
    }
  }, P = (0, r.jsxs)(p.ZP, {
    children: [(0, r.jsx)(p.Ee, {
      src: n(292824)
    }), (0, r.jsxs)(p.Dx, {
      className: a()(f.marginTop20, m.flex, m.justifyCenter, m.alignCenter),
      children: [_.NW.string(_.t.WWzQtb), (0, r.jsx)(s.owK, {
        size: "md",
        color: "currentColor",
        className: f.marginLeft8
      })]
    })]
  });
  return v ? P : (0, r.jsxs)(p.ZP, {
    children: [(0, r.jsx)(p.Dx, {
      children: _.NW.string(_.t.o4JNrK)
    }), (0, r.jsx)(p.DK, {
      className: f.marginTop8,
      children: _.NW.string(_.t.y0tVbm)
    }), (0, r.jsxs)(p.gO, {
      className: f.marginTop20,
      children: [(0, r.jsx)(h.Z, {
        label: _.NW.string(_.t.eJnn09),
        alpha2: j.alpha2,
        countryCode: y,
        value: e,
        autoComplete: "off",
        spellCheck: "false",
        onChange: t,
        forceMode: u.Nz.PHONE,
        error: I
      }), (0, r.jsx)(p.II, {
        className: f.marginTop20,
        label: _.NW.string(_.t.OdzNbm),
        value: o,
        onChange: b,
        maxLength: g.z,
        error: C
      }), (0, r.jsx)(p.zx, {
        size: p.zx.Sizes.SMALL,
        look: p.zx.Looks.LINK,
        onClick: T,
        children: _.NW.string(_.t["5b60go"])
      }), (0, r.jsx)(p.zx, {
        className: f.marginTop20,
        onClick: A,
        submitting: N,
        children: _.NW.string(_.t.i4jeWV)
      })]
    })]
  })
}