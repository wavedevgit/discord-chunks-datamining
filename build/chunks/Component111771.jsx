/** Chunk was on 47841 **/
/** chunk id: 111771, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => f
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

function f(e) {
  var t, n, l;
  let {
    changeTitle: f,
    value: b,
    options: h,
    className: x,
    onChange: j
  } = e, [_, O] = i.useState(b), [v, y] = i.useState(false), [A, E] = i.useState(false), N = i.useRef(null);
  i.useEffect(() => {
    O(b)
  }, [b]), i.useEffect(() => () => {
    clearTimeout(N.current)
  }, []);
  let S = h.find(e => e.value === _);
  return (0, r.jsx)(u.A, {
    title: v ? f : null != (t = null == S ? true : S.title) ? t : f,
    description: v ? "(".concat(null != (n = null == S ? true : S.title) ? n : m.intl.string(m.t.PoWNfe), ")") : null != (l = null == S ? true : S.description) ? l : "",
    highlightColor: v ? d.t.NONE : null == S ? true : S.highlightColor,
    action: (0, r.jsx)(a.QWc, {
      text: m.intl.string(m.t.GEgsA4),
      textVariant: "text-sm/medium"
    }),
    loading: A,
    className: x,
    children: h.map((e, t) => (0, r.jsx)(g.A, {
      title: e.title,
      description: e.description,
      highlightColor: e.highlightColor,
      className: s()(p.bi, _ === e.value && p.wH),
      selected: _ === e.value,
      action: _ === e.value ? (0, r.jsx)(c.A, {
        className: p.VB
      }) : (0, r.jsx)(o.A, {
        className: p.VB
      }),
      onClick: () => {
        e.disabled || e.value === _ || (E(true), null == j || j(e), O(e.value), N.current = setTimeout(() => {
          E(false), y(false)
        }, 1e3))
      },
      disabled: e.disabled
    }, "".concat(e.title, "-").concat(t)))
  })
}