/** Chunk was on 52721 **/
/** chunk id: 975331, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
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
  Chunk388032 = require("./388032.jsx"),
  Chunk605041 = require("./605041.js");

function x() {
  var e;
  let {
    editStateId: t
  } = (0, Chunk727843.N)(), [n, l] = Chunk290348.TT(exports), [x, j] = Chunk290348.F2(exports), v = (0, Chunk584825.oC)(exports), {
    options: _
  } = (0, Chunk22902.Z)(null != (e = null == v ? true : v.active_trial) ? module : null), O = (0, Chunk518470.Z)(), y = null != require, C = Chunk647438.useCallback(e => {
    let t = _.find(e => e.isDefault);
    a()(null != t, "Missing default trial duartion option"), l(e ? t.value : null)
  }, [Chunk512722, _]), N = (0, Chunk723047.mY)(), E = (0, Chunk313201.Dt)(), I = (0, Chunk313201.Dt)();
  return (0, Chunk951288.jsxs)(Chunk783454.Z, {
    title: Chunk388032.intl.string(Chunk388032.t["6antoq"]),
    description: Chunk388032.intl.string(Chunk388032.t.urVijY),
    children: [(0, Chunk951288.jsx)(Chunk481060.j7V, {
      onChange: (e, t) => C(e),
      value: y,
      disabled: N,
      hideBorder: true,
      children: Chunk388032.intl.string(Chunk388032.t["+hTmdX"])
    }), (0, Chunk951288.jsxs)(Chunk481060.hjN, {
      title: Chunk388032.intl.string(Chunk388032.t.m1KuWV),
      titleId: E,
      disabled: !y || N,
      children: [(0, Chunk951288.jsx)(Chunk481060.R94, {
        type: Chunk481060.R94.Types.DESCRIPTION,
        className: Chunk605041.formDescription,
        disabled: !y || N,
        children: Chunk388032.intl.string(Chunk388032.t.NB9NLC)
      }), (0, Chunk951288.jsx)(Chunk481060.LZC, {
        size: 8
      }), (0, Chunk951288.jsx)(Chunk481060.q4e, {
        "aria-labelledby": E,
        options: _,
        className: Chunk605041.formInput,
        placeholder: Chunk388032.intl.string(Chunk388032.t.WZG1BQ),
        value: require,
        onChange: Chunk512722,
        maxVisibleItems: 5,
        isDisabled: !y || N,
        look: Chunk481060.qQH.CUSTOM
      })]
    }), (0, Chunk951288.jsx)(Chunk481060.LZC, {
      size: 24
    }), (0, Chunk951288.jsxs)(Chunk481060.hjN, {
      title: Chunk388032.intl.string(Chunk388032.t["/JD9oa"]),
      titleId: I,
      disabled: !y || N,
      children: [(0, Chunk951288.jsx)(Chunk481060.R94, {
        type: Chunk481060.R94.Types.DESCRIPTION,
        className: Chunk605041.formDescription,
        disabled: !y || N,
        children: Chunk388032.intl.string(Chunk388032.t.Cg5eBg)
      }), (0, Chunk951288.jsx)(Chunk481060.q4e, {
        "aria-labelledby": I,
        options: O,
        className: Chunk605041.formInput,
        value: x,
        onChange: j,
        maxVisibleItems: 5,
        isDisabled: !y || N,
        look: Chunk481060.qQH.CUSTOM
      })]
    })]
  })
}