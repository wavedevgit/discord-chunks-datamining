/** Chunk was on 27978 **/
/** chunk id: 698177, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk144114 = require("./144114.js"),
  Chunk742458 = require("./742458.js"),
  Chunk541692 = require("./541692.js"),
  Chunk952802 = require("./952802.jsx"),
  Chunk388905 = require("./388905.jsx"),
  Chunk815660 = require("./815660.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk727829 = require("./727829.js"),
  Chunk478411 = require("./478411.js");
let _ = () => {
  let [e, t] = i.useState(""), [s, _] = i.useState(""), [E, v] = i.useState(false), [b, j] = i.useState(false), [I, N] = i.useState(null), [y, S] = i.useState(null), C = (0, l.e7)([d.Z], () => d.Z.getCountryCode()), O = C.code.split(" ")[0], T = async () => {
    try {
      await c.Z.resendCode(e)
    } catch (e) {
      S(e.body.message)
    }
  }, A = async () => {
    v(true);
    try {
      let {
        token: t
      } = await c.Z.verifyPhone(O + e, s);
      N(null), S(null), j(true), c.Z.validatePhoneForSupport(t)
    } catch (e) {
      e.body.message ? (N(null), S(e.body.message)) : (N(e.body.phone), S(e.body.code))
    } finally {
      v(false)
    }
  }, Z = (0, r.jsxs)(f.ZP, {
    children: [(0, r.jsx)(f.Ee, {
      src: n(292824)
    }), (0, r.jsxs)(f.Dx, {
      className: a()(x.marginTop20, p.flex, p.justifyCenter, p.alignCenter),
      children: [m.intl.string(m.t.WWzQta), (0, r.jsx)(o.owK, {
        size: "md",
        color: "currentColor",
        className: x.marginLeft8
      })]
    })]
  });
  return b ? Z : (0, r.jsxs)(f.ZP, {
    children: [(0, r.jsx)(f.Dx, {
      children: m.intl.string(m.t.o4JNrO)
    }), (0, r.jsx)(f.DK, {
      className: x.marginTop8,
      children: m.intl.string(m.t.y0tVbq)
    }), (0, r.jsxs)(f.gO, {
      className: x.marginTop20,
      children: [(0, r.jsx)(h.Z, {
        label: m.intl.string(m.t["eJnn0+"]),
        alpha2: C.alpha2,
        countryCode: O,
        value: e,
        autoComplete: "off",
        spellCheck: "false",
        onChange: t,
        forceMode: u.Nz.PHONE,
        error: I
      }), (0, r.jsx)(f.II, {
        className: x.marginTop20,
        label: m.intl.string(m.t.OdzNbm),
        value: s,
        onChange: _,
        maxLength: g.z,
        error: y
      }), (0, r.jsx)(o.Avr, {
        text: m.intl.string(m.t["5b60gi"]),
        onClick: T
      }), (0, r.jsx)("div", {
        className: x.marginTop20,
        children: (0, r.jsx)(o.Button, {
          text: m.intl.string(m.t.i4jeWR),
          fullWidth: true,
          onClick: A,
          loading: E
        })
      })]
    })]
  })
}