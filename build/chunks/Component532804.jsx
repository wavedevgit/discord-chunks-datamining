/** Chunk was on 29679 **/
/** chunk id: 532804, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk186523 = require("./186523.jsx"),
  Chunk553826 = require("./553826.jsx"),
  Chunk137510 = require("./137510.js"),
  Chunk220980 = require("./220980.jsx"),
  Chunk28997 = require("./28997.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk205534 = require("./205534.js");

function f(e) {
  var t, n, l;
  let {
    changeTitle: f,
    value: h,
    options: b,
    className: x,
    onChange: j
  } = e, [v, _] = i.useState(h), [C, O] = i.useState(false), [y, E] = i.useState(false), N = i.useRef(null);
  i.useEffect(() => {
    _(h)
  }, [h]), i.useEffect(() => () => {
    clearTimeout(N.current)
  }, []);
  let I = b.find(e => e.value === v);
  return (0, r.jsx)(u.Z, {
    title: C ? f : null != (t = null == I ? true : I.title) ? t : f,
    description: C ? "(".concat(null != (n = null == I ? true : I.title) ? n : m.intl.string(m.t.PoWNfe), ")") : null != (l = null == I ? true : I.description) ? l : "",
    highlightColor: C ? d.q.NONE : null == I ? true : I.highlightColor,
    action: (0, r.jsx)(s.zx, {
      look: s.zx.Looks.LINK,
      size: s.zx.Sizes.MIN,
      color: s.zx.Colors.LINK,
      children: m.intl.string(m.t.GEgsA4)
    }),
    loading: y,
    className: x,
    children: b.map((e, t) => (0, r.jsx)(g.Z, {
      title: e.title,
      description: e.description,
      highlightColor: e.highlightColor,
      className: a()(p.groupCollapsedRow, v === e.value && p.selected),
      selected: v === e.value,
      action: v === e.value ? (0, r.jsx)(c.Z, {
        className: p.radioItem
      }) : (0, r.jsx)(o.Z, {
        className: p.radioItem
      }),
      onClick: () => {
        e.disabled || e.value === v || (E(true), null == j || j(e), _(e.value), N.current = setTimeout(() => {
          E(false), O(false)
        }, 1e3))
      },
      disabled: e.disabled
    }, "".concat(e.title, "-").concat(t)))
  })
}