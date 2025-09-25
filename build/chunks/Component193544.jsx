/** Chunk was on 64523 **/
/** chunk id: 193544, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk186523 = require("./186523.jsx"),
  Chunk553826 = require("./553826.jsx"),
  Chunk2150 = require("./2150.js"),
  Chunk992249 = require("./992249.jsx"),
  Chunk717251 = require("./717251.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk201720 = require("./201720.js");

function f(e) {
  var t, n, l;
  let {
    changeTitle: f,
    value: h,
    options: x,
    className: b,
    onChange: j
  } = e, [v, _] = i.useState(h), [O, y] = i.useState(false), [C, N] = i.useState(false), E = i.useRef(null);
  i.useEffect(() => {
    _(h)
  }, [h]), i.useEffect(() => () => {
    clearTimeout(E.current)
  }, []);
  let I = x.find(e => e.value === v);
  return (0, r.jsx)(u.Z, {
    title: O ? f : null != (t = null == I ? true : I.title) ? t : f,
    description: O ? "(".concat(null != (n = null == I ? true : I.title) ? n : g.intl.string(g.t.PoWNfX), ")") : null != (l = null == I ? true : I.description) ? l : "",
    highlightColor: O ? d.q.NONE : null == I ? true : I.highlightColor,
    action: (0, r.jsx)(a.zx, {
      look: a.zx.Looks.LINK,
      size: a.zx.Sizes.MIN,
      color: a.zx.Colors.LINK,
      children: g.intl.string(g.t.GEgsAw)
    }),
    loading: C,
    className: b,
    children: x.map((e, t) => (0, r.jsx)(m.Z, {
      title: e.title,
      description: e.description,
      highlightColor: e.highlightColor,
      className: s()(p.groupCollapsedRow, v === e.value && p.selected),
      selected: v === e.value,
      action: v === e.value ? (0, r.jsx)(c.Z, {
        className: p.radioItem
      }) : (0, r.jsx)(o.Z, {
        className: p.radioItem
      }),
      onClick: () => {
        e.disabled || e.value === v || (N(true), null == j || j(e), _(e.value), E.current = setTimeout(() => {
          N(false), y(false)
        }, 1e3))
      },
      disabled: e.disabled
    }, "".concat(e.title, "-").concat(t)))
  })
}