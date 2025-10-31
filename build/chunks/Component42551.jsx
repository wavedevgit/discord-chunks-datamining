/** Chunk was on 6850 **/
/** chunk id: 42551, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => H
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk658722 = require("./658722.js"),
  s = require.n(Chunk658722),
  Chunk954955 = require("./954955.js"),
  u = require.n(Chunk954955),
  Chunk498607 = require("./498607.js"),
  C = require.n(Chunk498607),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk563115 = require("./563115.jsx"),
  Chunk910693 = require("./910693.js"),
  Chunk893966 = require("./893966.js"),
  Chunk527379 = require("./527379.js"),
  Chunk285173 = require("./285173.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk115491 = require("./115491.js"),
  Chunk266631 = require("./266631.js");
let O = new Set;

function H(e) {
  let {
    guildId: t,
    onClose: n
  } = e, i = (0, f.BG)(t), a = (0, m.e7)([h.Z], () => h.Z.getSearchStateByGuildId(t), [t], C()), [c, d] = l.useState(a.selectedRoleIds), H = (0, p.h)(t, O, true), _ = (e, n) => {
    let {
      record: l
    } = e;
    return (0, r.jsx)(b.lo1, {
      value: l.id,
      children: (0, r.jsxs)("div", {
        className: v.roleNameContainer,
        children: [(0, r.jsxs)("div", {
          className: v.roleLabel,
          children: [(0, r.jsx)("div", {
            className: o()(v.labelBackground, n && v.selected)
          }), (0, r.jsx)(b.lo1.Label, {
            children: (0, r.jsx)(j.Z, {
              className: y.roleTooltipItem,
              role: l,
              guildId: t
            }, l.id)
          })]
        }), (0, r.jsx)("div", {
          className: v.checkboxContainer,
          children: (0, r.jsx)(b.lo1.Checkbox, {
            checked: n
          })
        })]
      })
    }, l.id)
  }, w = l.useCallback(e => {
    (0, g.Dr)(t, {
      selectedRoleIds: e
    }), i(e)
  }, [t, i]), S = l.useMemo(() => u()(w, 300), [w]), Z = l.useCallback(e => {
    let t;
    d(t = new Set(c.has(e) ? [...c].filter(t => t !== e) : [...c, e])), S(t)
  }, [c, S]);
  return (0, r.jsx)(b.DBG, {
    className: v.rolePopout,
    placeholder: x.intl.string(x.t.ZveC7e),
    value: c,
    onChange: Z,
    onClose: () => {
      n()
    },
    multiSelect: true,
    autoFocus: true,
    children: e => H.reduce((t, n) => {
      let {
        record: r
      } = n, l = c.has(r.id);
      return s()(e.toLowerCase(), r.name.toLowerCase()) ? t.push(_(n, l)) : l && t.push(_(n, l)), t
    }, [])
  })
}