/** Chunk was on 29679 **/
/** chunk id: 975331, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
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

function b() {
  var e;
  let {
    editStateId: t
  } = (0, Chunk727843.N)(), [n, l] = Chunk290348.TT(exports), [b, x] = Chunk290348.F2(exports), j = (0, Chunk584825.oC)(exports), {
    options: v
  } = (0, Chunk22902.Z)(null != (e = null == j ? true : j.active_trial) ? module : null), _ = (0, Chunk518470.Z)(), C = null != require, O = Chunk647438.useCallback(e => {
    let t = v.find(e => e.isDefault);
    a()(null != t, "Missing default trial duartion option"), l(e ? t.value : null)
  }, [Chunk512722, v]), y = (0, Chunk723047.mY)(), E = (0, Chunk313201.Dt)(), N = (0, Chunk313201.Dt)();
  return (0, Chunk951288.jsxs)(Chunk783454.Z, {
    title: Chunk388032.intl.string(Chunk388032.t["6anton"]),
    description: Chunk388032.intl.string(Chunk388032.t.urVijS),
    children: [(0, Chunk951288.jsx)(Chunk481060.rsf, {
      label: Chunk388032.intl.string(Chunk388032.t["+hTmdb"]),
      checked: C,
      onChange: e => O(e),
      disabled: y
    }), (0, Chunk951288.jsx)(Chunk481060.q4e, {
      label: Chunk388032.intl.string(Chunk388032.t.m1KuWd),
      description: Chunk388032.intl.string(Chunk388032.t.NB9NLF),
      "aria-labelledby": E,
      options: v,
      placeholder: Chunk388032.intl.string(Chunk388032.t.WZG1BU),
      value: require,
      onChange: Chunk512722,
      maxVisibleItems: 5,
      isDisabled: !C || y
    }), (0, Chunk951288.jsx)(Chunk481060.LZC, {
      size: 24
    }), (0, Chunk951288.jsx)(Chunk481060.q4e, {
      label: Chunk388032.intl.string(Chunk388032.t["/JD9oe"]),
      description: Chunk388032.intl.string(Chunk388032.t.Cg5eBm),
      "aria-labelledby": N,
      options: _,
      value: b,
      onChange: x,
      maxVisibleItems: 5,
      isDisabled: !C || y
    })]
  })
}