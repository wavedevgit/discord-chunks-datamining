/** Chunk was on 27978 **/
/** chunk id: 698177, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js"), require("./35282.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk144114 = require("./144114.js"),
  Chunk742458 = require("./742458.js"),
  Chunk541692 = require("./541692.js"),
  Chunk952802 = require("./952802.jsx"),
  Chunk388905 = require("./388905.jsx"),
  Chunk815660 = require("./815660.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk794287 = require("./794287.js"),
  Chunk881488 = require("./881488.js");
let x = () => {
  let [e, t] = Chunk73800.useState(""), [l, x] = Chunk73800.useState(""), [b, E] = Chunk73800.useState(false), [v, j] = Chunk73800.useState(false), [I, O] = Chunk73800.useState(null), [S, N] = Chunk73800.useState(null), y = (0, Chunk442837.e7)([Chunk541692.Z], () => Chunk541692.Z.getCountryCode()), C = y.code.split(" ")[0], A = async () => {
    try {
      await Chunk144114.Z.resendCode(module)
    } catch (e) {
      N(module.body.message)
    }
  }, T = async () => {
    E(true);
    try {
      let {
        token: t
      } = await Chunk144114.Z.verifyPhone(C + module, Chunk120356);
      O(null), N(null), j(true), Chunk144114.Z.validatePhoneForSupport(exports)
    } catch (e) {
      module.body.message ? (O(null), N(module.body.message)) : (O(module.body.phone), N(module.body.code))
    } finally {
      E(false)
    }
  }, Z = (0, Chunk255367.jsxs)(Chunk388905.ZP, {
    children: [(0, Chunk255367.jsx)(Chunk388905.Ee, {
      src: require("./292824.js")
    }), (0, Chunk255367.jsxs)(Chunk388905.Dx, {
      className: o()(Chunk881488.marginTop20, Chunk794287.flex, Chunk794287.justifyCenter, Chunk794287.alignCenter),
      children: [Chunk388032.intl.string(Chunk388032.t.WWzQtb), (0, Chunk255367.jsx)(Chunk481060.owK, {
        size: "md",
        color: "currentColor",
        className: Chunk881488.marginLeft8
      })]
    })]
  });
  return v ? Z : (0, Chunk255367.jsxs)(Chunk388905.ZP, {
    children: [(0, Chunk255367.jsx)(Chunk388905.Dx, {
      children: Chunk388032.intl.string(Chunk388032.t.o4JNrK)
    }), (0, Chunk255367.jsx)(Chunk388905.DK, {
      className: Chunk881488.marginTop8,
      children: Chunk388032.intl.string(Chunk388032.t.y0tVbm)
    }), (0, Chunk255367.jsxs)(Chunk388905.gO, {
      className: Chunk881488.marginTop20,
      children: [(0, Chunk255367.jsx)(Chunk952802.Z, {
        label: Chunk388032.intl.string(Chunk388032.t.eJnn09),
        alpha2: y.alpha2,
        countryCode: C,
        value: module,
        autoComplete: "off",
        spellCheck: "false",
        onChange: exports,
        forceMode: Chunk742458.Nz.PHONE,
        error: I
      }), (0, Chunk255367.jsx)(Chunk388905.II, {
        className: Chunk881488.marginTop20,
        label: Chunk388032.intl.string(Chunk388032.t.OdzNbm),
        value: Chunk120356,
        onChange: x,
        maxLength: Chunk815660.z,
        error: S
      }), (0, Chunk255367.jsx)(Chunk388905.zx, {
        size: Chunk388905.zx.Sizes.SMALL,
        look: Chunk388905.zx.Looks.LINK,
        onClick: A,
        children: Chunk388032.intl.string(Chunk388032.t["5b60go"])
      }), (0, Chunk255367.jsx)(Chunk388905.zx, {
        className: Chunk881488.marginTop20,
        onClick: T,
        submitting: b,
        children: Chunk388032.intl.string(Chunk388032.t.i4jeWV)
      })]
    })]
  })
}