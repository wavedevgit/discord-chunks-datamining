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
  } = (0, g.N)(), [n, l] = f.TT(t), [x, j] = f.F2(t), v = (0, d.oC)(t), {
    options: O
  } = (0, b.Z)(null != (e = null == v ? true : v.active_trial) ? e : null), C = (0, m.Z)(), y = null != n, N = i.useCallback(e => {
    let t = O.find(e => e.isDefault);
    a()(null != t, "Missing default trial duartion option"), l(e ? t.value : null)
  }, [l, O]), E = (0, u.mY)(), I = (0, c.Dt)(), S = (0, c.Dt)();
  return (0, r.jsxs)(p.Z, {
    title: h.intl.string(h.t["6anton"]),
    description: h.intl.string(h.t.urVijS),
    children: [(0, r.jsx)(o.rsf, {
      label: h.intl.string(h.t["+hTmdb"]),
      checked: y,
      onChange: e => N(e),
      disabled: E
    }), (0, r.jsx)(s.y6, {
      label: h.intl.string(h.t.m1KuWd),
      description: h.intl.string(h.t.NB9NLF),
      "aria-labelledby": I,
      options: O,
      placeholder: h.intl.string(h.t.WZG1BU),
      value: n,
      onChange: l,
      maxVisibleItems: 5,
      isDisabled: !y || E
    }), (0, r.jsx)(o.LZC, {
      size: 24
    }), (0, r.jsx)(s.y6, {
      label: h.intl.string(h.t["/JD9oe"]),
      description: h.intl.string(h.t.Cg5eBm),
      "aria-labelledby": S,
      options: C,
      value: x,
      onChange: j,
      maxVisibleItems: 5,
      isDisabled: !y || E
    })]
  })
}