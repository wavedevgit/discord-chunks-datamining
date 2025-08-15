/** Chunk was on 6049 **/
/** chunk id: 193544, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk186523 = require("./186523.jsx"),
  Chunk553826 = require("./553826.jsx"),
  Chunk2150 = require("./2150.js"),
  Chunk992249 = require("./992249.jsx"),
  Chunk717251 = require("./717251.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk201720 = require("./201720.js");

function h(e) {
  var t, n, l;
  let {
    changeTitle: h,
    value: f,
    options: b,
    className: x,
    onChange: j
  } = e, [v, _] = i.useState(f), [O, y] = i.useState(false), [C, N] = i.useState(false), I = i.useRef(null);
  i.useEffect(() => {
    _(f)
  }, [f]), i.useEffect(() => () => {
    clearTimeout(I.current)
  }, []);
  let E = b.find(e => e.value === v);
  return (0, r.jsx)(u.Z, {
    title: O ? h : null != (t = null == E ? true : E.title) ? t : h,
    description: O ? "(".concat(null != (n = null == E ? true : E.title) ? n : g.intl.string(g.t.PoWNfX), ")") : null != (l = null == E ? true : E.description) ? l : "",
    highlightColor: O ? d.q.NONE : null == E ? true : E.highlightColor,
    action: (0, r.jsx)(s.zx, {
      look: s.zx.Looks.LINK,
      size: s.zx.Sizes.MIN,
      color: s.zx.Colors.LINK,
      children: g.intl.string(g.t.GEgsAw)
    }),
    loading: C,
    className: x,
    children: b.map((e, t) => (0, r.jsx)(m.Z, {
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
        e.disabled || e.value === v || (N(true), null == j || j(e), _(e.value), I.current = setTimeout(() => {
          N(false), y(false)
        }, 1e3))
      },
      disabled: e.disabled
    }, "".concat(e.title, "-").concat(t)))
  })
}