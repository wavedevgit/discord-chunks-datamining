/** Chunk was on 47841 **/
/** chunk id: 111771, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => m
}), require("./896048.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk44234 = require("./44234.jsx"),
  Chunk282054 = require("./282054.jsx"),
  Chunk620216 = require("./620216.js"),
  Chunk694433 = require("./694433.jsx"),
  Chunk441442 = require("./441442.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk604175 = require("./604175.js");

function m(e) {
  var t, n, l;
  let {
    changeTitle: m,
    value: p,
    options: x,
    className: h,
    onChange: j
  } = e, [O, y] = i.useState(p), [v, A] = i.useState(false), [E, N] = i.useState(false), _ = i.useRef(null);
  i.useEffect(() => {
    y(p)
  }, [p]), i.useEffect(() => () => {
    clearTimeout(_.current)
  }, []);
  let S = x.find(e => e.value === O);
  return (0, r.jsx)(u.A, {
    title: v ? m : null != (t = null == S ? true : S.title) ? t : m,
    description: v ? "(".concat(null != (n = null == S ? true : S.title) ? n : g.intl.string(g.t.PoWNfe), ")") : null != (l = null == S ? true : S.description) ? l : "",
    highlightColor: v ? d.t.NONE : null == S ? true : S.highlightColor,
    action: (0, r.jsx)(a.QWc, {
      text: g.intl.string(g.t.GEgsA4),
      textVariant: "text-sm/medium"
    }),
    loading: E,
    className: h,
    children: x.map((e, t) => (0, r.jsx)(f.A, {
      title: e.title,
      description: e.description,
      highlightColor: e.highlightColor,
      className: s()(b.bi, O === e.value && b.wH),
      selected: O === e.value,
      action: O === e.value ? (0, r.jsx)(o.A, {
        className: b.VB
      }) : (0, r.jsx)(c.A, {
        className: b.VB
      }),
      onClick: () => {
        e.disabled || e.value === O || (N(true), null == j || j(e), y(e.value), _.current = setTimeout(() => {
          N(false), A(false)
        }, 1e3))
      },
      disabled: e.disabled
    }, "".concat(e.title, "-").concat(t)))
  })
}