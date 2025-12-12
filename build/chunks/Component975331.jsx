/** Chunk was on 9536 **/
/** chunk id: 975331, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk199849 = require("./199849.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk584825 = require("./584825.js"),
  Chunk723047 = require("./723047.js"),
  Chunk727843 = require("./727843.jsx"),
  Chunk290348 = require("./290348.js"),
  Chunk518470 = require("./518470.js"),
  Chunk22902 = require("./22902.js"),
  Chunk783454 = require("./783454.jsx"),
  Chunk388032 = require("./388032.jsx");

function x() {
  var e;
  let {
    editStateId: t
  } = (0, Chunk727843.N)(), [n, l] = Chunk290348.TT(exports), [x, j] = Chunk290348.F2(exports), v = (0, Chunk584825.oC)(exports), {
    options: O
  } = (0, Chunk22902.Z)(null != (e = null == v ? true : v.active_trial) ? module : null), C = (0, Chunk518470.Z)(), y = null != require, N = Chunk473749.useCallback(e => {
    let t = O.find(e => e.isDefault);
    a()(null != t, "Missing default trial duartion option"), l(e ? t.value : null)
  }, [Chunk512722, O]), E = (0, Chunk723047.mY)(), I = (0, Chunk313201.Dt)(), S = (0, Chunk313201.Dt)();
  return (0, Chunk54381.jsxs)(Chunk783454.Z, {
    title: Chunk388032.intl.string(Chunk388032.t["6anton"]),
    description: Chunk388032.intl.string(Chunk388032.t.urVijS),
    children: [(0, Chunk54381.jsx)(Chunk481060.rsf, {
      label: Chunk388032.intl.string(Chunk388032.t["+hTmdb"]),
      checked: y,
      onChange: e => N(e),
      disabled: E
    }), (0, Chunk54381.jsx)(Chunk199849.y6, {
      label: Chunk388032.intl.string(Chunk388032.t.m1KuWd),
      description: Chunk388032.intl.string(Chunk388032.t.NB9NLF),
      "aria-labelledby": I,
      options: O,
      placeholder: Chunk388032.intl.string(Chunk388032.t.WZG1BU),
      value: require,
      onChange: Chunk512722,
      maxVisibleItems: 5,
      isDisabled: !y || E
    }), (0, Chunk54381.jsx)(Chunk481060.LZC, {
      size: 24
    }), (0, Chunk54381.jsx)(Chunk199849.y6, {
      label: Chunk388032.intl.string(Chunk388032.t["/JD9oe"]),
      description: Chunk388032.intl.string(Chunk388032.t.Cg5eBm),
      "aria-labelledby": S,
      options: C,
      value: x,
      onChange: j,
      maxVisibleItems: 5,
      isDisabled: !y || E
    })]
  })
}