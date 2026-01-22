/** Chunk was on 47841 **/
/** chunk id: 964758, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => x
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
  Chunk397927 = require("./397927.js"),
  Chunk915089 = require("./915089.js"),
  Chunk599941 = require("./599941.js"),
  Chunk11351 = require("./11351.js"),
  Chunk306444 = require("./306444.jsx"),
  Chunk922975 = require("./922975.js"),
  Chunk67097 = require("./67097.js"),
  Chunk244912 = require("./244912.js"),
  Chunk963175 = require("./963175.jsx"),
  Chunk985018 = require("./985018.jsx");

function x() {
  var e;
  let {
    editStateId: t
  } = (0, u.O)(), [n, l] = f.V_(t), [x, h] = f.hh(t), j = (0, o.dL)(t), {
    options: O
  } = (0, b.A)(null != (e = null == j ? true : j.active_trial) ? e : null), y = (0, g.A)(), v = null != n, A = i.useCallback(e => {
    let t = O.find(e => e.isDefault);
    s()(null != t, "Missing default trial duartion option"), l(e ? t.value : null)
  }, [l, O]), E = (0, d.gN)(), N = (0, c.GV)(), _ = (0, c.GV)();
  return (0, r.jsxs)(m.A, {
    title: p.intl.string(p.t["6anton"]),
    description: p.intl.string(p.t.urVijS),
    children: [(0, r.jsx)(a.dOG, {
      label: p.intl.string(p.t["+hTmdb"]),
      checked: v,
      onChange: e => A(e),
      disabled: E
    }), (0, r.jsx)(a.l6P, {
      selectionMode: "single",
      label: p.intl.string(p.t.m1KuWd),
      description: p.intl.string(p.t.NB9NLF),
      "aria-labelledby": N,
      options: O,
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
      disabled: !v || E
    }), (0, r.jsx)(a.hKd, {
      size: 24
    }), (0, r.jsx)(a.l6P, {
      selectionMode: "single",
      label: p.intl.string(p.t["/JD9oe"]),
      description: p.intl.string(p.t.Cg5eBm),
      "aria-labelledby": _,
      options: y,
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
      value: x,
      onSelectionChange: h,
      maxOptionsVisible: 5,
      disabled: !v || E
    })]
  })
}