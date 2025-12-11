/** Chunk was on 9536 **/
/** chunk id: 532804, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./388685.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk186523 = require("./186523.jsx"),
  Chunk553826 = require("./553826.jsx"),
  Chunk137510 = require("./137510.js"),
  Chunk220980 = require("./220980.jsx"),
  Chunk28997 = require("./28997.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk166702 = require("./166702.js");

function p(e) {
  var t, n, l;
  let {
    changeTitle: p,
    value: b,
    options: h,
    className: x,
    onChange: j
  } = e, [v, O] = i.useState(b), [C, y] = i.useState(false), [N, E] = i.useState(false), I = i.useRef(null);
  i.useEffect(() => {
    O(b)
  }, [b]), i.useEffect(() => () => {
    clearTimeout(I.current)
  }, []);
  let S = h.find(e => e.value === v);
  return (0, r.jsx)(u.Z, {
    title: C ? p : null != (t = null == S ? true : S.title) ? t : p,
    description: C ? "(".concat(null != (n = null == S ? true : S.title) ? n : m.intl.string(m.t.PoWNfe), ")") : null != (l = null == S ? true : S.description) ? l : "",
    highlightColor: C ? d.q.NONE : null == S ? true : S.highlightColor,
    action: (0, r.jsx)(s.Avr, {
      text: m.intl.string(m.t.GEgsA4),
      textVariant: "text-sm/medium"
    }),
    loading: N,
    className: x,
    children: h.map((e, t) => (0, r.jsx)(g.Z, {
      title: e.title,
      description: e.description,
      highlightColor: e.highlightColor,
      className: a()(f.groupCollapsedRow, v === e.value && f.selected),
      selected: v === e.value,
      action: v === e.value ? (0, r.jsx)(c.Z, {
        className: f.radioItem
      }) : (0, r.jsx)(o.Z, {
        className: f.radioItem
      }),
      onClick: () => {
        e.disabled || e.value === v || (E(true), null == j || j(e), O(e.value), I.current = setTimeout(() => {
          E(false), y(false)
        }, 1e3))
      },
      disabled: e.disabled
    }, "".concat(e.title, "-").concat(t)))
  })
}