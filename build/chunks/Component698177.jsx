/** Chunk was on 27978 **/
/** chunk id: 698177, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => x
}), require("./388685.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk144114 = require("./144114.js"),
  Chunk742458 = require("./742458.js"),
  Chunk541692 = require("./541692.js"),
  Chunk952802 = require("./952802.jsx"),
  Chunk388905 = require("./388905.jsx"),
  Chunk815660 = require("./815660.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk149715 = require("./149715.js"),
  Chunk197571 = require("./197571.js");
let x = () => {
  let [e, t] = Chunk473749.useState(""), [s, x] = Chunk473749.useState(""), [E, v] = Chunk473749.useState(false), [j, b] = Chunk473749.useState(false), [I, S] = Chunk473749.useState(null), [y, N] = Chunk473749.useState(null), O = (0, Chunk442837.e7)([Chunk541692.Z], () => Chunk541692.Z.getCountryCode()), C = O.code.split(" ")[0], T = async () => {
    try {
      await Chunk144114.Z.resendCode(module)
    } catch (e) {
      N(module.body.message)
    }
  }, A = async () => {
    v(true);
    try {
      let {
        token: t
      } = await Chunk144114.Z.verifyPhone(C + module, Chunk120356);
      S(null), N(null), b(true), Chunk144114.Z.validatePhoneForSupport(exports)
    } catch (e) {
      module.body.message ? (S(null), N(module.body.message)) : (S(module.body.phone), N(module.body.code))
    } finally {
      v(false)
    }
  }, Z = (0, Chunk54381.jsxs)(Chunk388905.ZP, {
    children: [(0, Chunk54381.jsx)(Chunk388905.Ee, {
      src: require("./292824.js")
    }), (0, Chunk54381.jsxs)(Chunk388905.Dx, {
      className: l()(Chunk197571.marginTop20, Chunk149715.flex, Chunk149715.justifyCenter, Chunk149715.alignCenter),
      children: [Chunk388032.intl.string(Chunk388032.t.WWzQta), (0, Chunk54381.jsx)(Chunk481060.owK, {
        size: "md",
        color: "currentColor",
        className: Chunk197571.marginLeft8
      })]
    })]
  });
  return j ? Z : (0, Chunk54381.jsxs)(Chunk388905.ZP, {
    children: [(0, Chunk54381.jsx)(Chunk388905.Dx, {
      children: Chunk388032.intl.string(Chunk388032.t.o4JNrO)
    }), (0, Chunk54381.jsx)(Chunk388905.DK, {
      className: Chunk197571.marginTop8,
      children: Chunk388032.intl.string(Chunk388032.t.y0tVbq)
    }), (0, Chunk54381.jsxs)(Chunk388905.gO, {
      className: Chunk197571.marginTop20,
      children: [(0, Chunk54381.jsx)(Chunk952802.Z, {
        label: Chunk388032.intl.string(Chunk388032.t["eJnn0+"]),
        alpha2: O.alpha2,
        countryCode: C,
        value: module,
        autoComplete: "off",
        spellCheck: "false",
        onChange: exports,
        forceMode: Chunk742458.Nz.PHONE,
        error: I
      }), (0, Chunk54381.jsx)(Chunk388905.II, {
        className: Chunk197571.marginTop20,
        label: Chunk388032.intl.string(Chunk388032.t.OdzNbm),
        value: Chunk120356,
        onChange: x,
        maxLength: Chunk815660.z,
        error: y
      }), (0, Chunk54381.jsx)(Chunk481060.Avr, {
        text: Chunk388032.intl.string(Chunk388032.t["5b60gi"]),
        onClick: T
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk197571.marginTop20,
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