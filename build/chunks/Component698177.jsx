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
  let [e, t] = Chunk473749.useState(""), [s, _] = Chunk473749.useState(""), [E, v] = Chunk473749.useState(false), [b, j] = Chunk473749.useState(false), [I, N] = Chunk473749.useState(null), [y, S] = Chunk473749.useState(null), C = (0, Chunk442837.e7)([Chunk541692.Z], () => Chunk541692.Z.getCountryCode()), O = C.code.split(" ")[0], T = async () => {
    try {
      await Chunk144114.Z.resendCode(module)
    } catch (e) {
      S(module.body.message)
    }
  }, A = async () => {
    v(true);
    try {
      let {
        token: t
      } = await Chunk144114.Z.verifyPhone(O + module, Chunk120356);
      N(null), S(null), j(true), Chunk144114.Z.validatePhoneForSupport(exports)
    } catch (e) {
      module.body.message ? (N(null), S(module.body.message)) : (N(module.body.phone), S(module.body.code))
    } finally {
      v(false)
    }
  }, Z = (0, Chunk54381.jsxs)(Chunk388905.ZP, {
    children: [(0, Chunk54381.jsx)(Chunk388905.Ee, {
      src: require("./292824.js")
    }), (0, Chunk54381.jsxs)(Chunk388905.Dx, {
      className: a()(Chunk478411.marginTop20, Chunk727829.flex, Chunk727829.justifyCenter, Chunk727829.alignCenter),
      children: [Chunk388032.intl.string(Chunk388032.t.WWzQta), (0, Chunk54381.jsx)(Chunk481060.owK, {
        size: "md",
        color: "currentColor",
        className: Chunk478411.marginLeft8
      })]
    })]
  });
  return b ? Z : (0, Chunk54381.jsxs)(Chunk388905.ZP, {
    children: [(0, Chunk54381.jsx)(Chunk388905.Dx, {
      children: Chunk388032.intl.string(Chunk388032.t.o4JNrO)
    }), (0, Chunk54381.jsx)(Chunk388905.DK, {
      className: Chunk478411.marginTop8,
      children: Chunk388032.intl.string(Chunk388032.t.y0tVbq)
    }), (0, Chunk54381.jsxs)(Chunk388905.gO, {
      className: Chunk478411.marginTop20,
      children: [(0, Chunk54381.jsx)(Chunk952802.Z, {
        label: Chunk388032.intl.string(Chunk388032.t["eJnn0+"]),
        alpha2: C.alpha2,
        countryCode: O,
        value: module,
        autoComplete: "off",
        spellCheck: "false",
        onChange: exports,
        forceMode: Chunk742458.Nz.PHONE,
        error: I
      }), (0, Chunk54381.jsx)(Chunk388905.II, {
        className: Chunk478411.marginTop20,
        label: Chunk388032.intl.string(Chunk388032.t.OdzNbm),
        value: Chunk120356,
        onChange: _,
        maxLength: Chunk815660.z,
        error: y
      }), (0, Chunk54381.jsx)(Chunk481060.Avr, {
        text: Chunk388032.intl.string(Chunk388032.t["5b60gi"]),
        onClick: T
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk478411.marginTop20,
        children: (0, Chunk54381.jsx)(Chunk481060.Button, {
          text: Chunk388032.intl.string(Chunk388032.t.i4jeWR),
          fullWidth: true,
          onClick: A,
          loading: E
        })
      })]
    })]
  })
}