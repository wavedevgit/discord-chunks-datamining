/** Chunk was on 39048 **/
/** chunk id: 964758, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => b
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

function b() {
  var e;
  let {
    editStateId: t
  } = (0, u.O)(), [n, l] = g.V_(t), [b, x] = g.hh(t), j = (0, c.dL)(t), {
    options: _
  } = (0, p.A)(null != (e = null == j ? true : j.active_trial) ? e : null), O = (0, m.A)(), v = null != n, y = i.useCallback(e => {
    let t = _.find(e => e.isDefault);
    s()(null != t, "Missing default trial duartion option"), l(e ? t.value : null)
  }, [l, _]), A = (0, d.gN)(), E = (0, o.GV)(), N = (0, o.GV)();
  return (0, r.jsxs)(f.A, {
    title: h.intl.string(h.t["6anton"]),
    description: h.intl.string(h.t.urVijS),
    children: [(0, r.jsx)(a.dOG, {
      label: h.intl.string(h.t["+hTmdb"]),
      checked: v,
      onChange: e => y(e),
      disabled: A
    }), (0, r.jsx)(a.l6P, {
      selectionMode: "single",
      label: h.intl.string(h.t.m1KuWd),
      description: h.intl.string(h.t.NB9NLF),
      "aria-labelledby": E,
      options: _,
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
      placeholder: h.intl.string(h.t.WZG1BU),
      value: n,
      onSelectionChange: l,
      maxOptionsVisible: 5,
      disabled: !v || A
    }), (0, r.jsx)(a.hKd, {
      size: 24
    }), (0, r.jsx)(a.l6P, {
      selectionMode: "single",
      label: h.intl.string(h.t["/JD9oe"]),
      description: h.intl.string(h.t.Cg5eBm),
      "aria-labelledby": N,
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
      value: b,
      onSelectionChange: x,
      maxOptionsVisible: 5,
      disabled: !v || A
    })]
  })
}