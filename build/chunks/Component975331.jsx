/** Chunk was on 9536 **/
/** chunk id: 975331, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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

function h() {
  var e;
  let {
    editStateId: t
  } = (0, u.N)(), [n, l] = g.TT(t), [h, x] = g.F2(t), j = (0, c.oC)(t), {
    options: v
  } = (0, m.Z)(null != (e = null == j ? true : j.active_trial) ? e : null), O = (0, f.Z)(), y = null != n, C = i.useCallback(e => {
    let t = v.find(e => e.isDefault);
    a()(null != t, "Missing default trial duartion option"), l(e ? t.value : null)
  }, [l, v]), N = (0, d.mY)(), E = (0, o.Dt)(), I = (0, o.Dt)();
  return (0, r.jsxs)(b.Z, {
    title: p.intl.string(p.t["6anton"]),
    description: p.intl.string(p.t.urVijS),
    children: [(0, r.jsx)(s.rsf, {
      label: p.intl.string(p.t["+hTmdb"]),
      checked: y,
      onChange: e => C(e),
      disabled: N
    }), (0, r.jsx)(s.PhF, {
      selectionMode: "single",
      label: p.intl.string(p.t.m1KuWd),
      description: p.intl.string(p.t.NB9NLF),
      "aria-labelledby": E,
      options: v,
      formatOption: e => {
        let {
          value: t,
          label: n
        } = e;
        return {
          id: t.interval.toString(),
          value: t,
          label: n
        }
      },
      placeholder: p.intl.string(p.t.WZG1BU),
      value: n,
      onSelectionChange: l,
      maxOptionsVisible: 5,
      disabled: !y || N
    }), (0, r.jsx)(s.LZC, {
      size: 24
    }), (0, r.jsx)(s.PhF, {
      selectionMode: "single",
      label: p.intl.string(p.t["/JD9oe"]),
      description: p.intl.string(p.t.Cg5eBm),
      "aria-labelledby": I,
      options: O,
      formatOption: e => {
        let {
          value: t,
          label: n
        } = e;
        return {
          id: t.toString(),
          value: t,
          label: n
        }
      },
      value: h,
      onSelectionChange: x,
      maxOptionsVisible: 5,
      disabled: !y || N
    })]
  })
}