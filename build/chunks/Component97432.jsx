/** Chunk was on 28636 **/
/** chunk id: 97432, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk292455 = require("./292455.jsx"),
  Chunk701508 = require("./701508.jsx"),
  Chunk979590 = require("./979590.jsx"),
  Chunk783531 = require("./783531.jsx"),
  Chunk620140 = require("./620140.js"),
  Chunk38181 = require("./38181.js"),
  Chunk111737 = require("./111737.jsx"),
  Chunk573 = require("./573.jsx"),
  Chunk401186 = require("./401186.js");
let g = function(e) {
  var t;
  let {
    tabId: n,
    onSelectApplication: g,
    onScroll: _
  } = e, b = l.useRef(null), f = l.useCallback(() => {
    var e;
    null == (e = b.current) || e.scrollTo({
      to: 0
    })
  }, []), x = (0, i.bG)([u.A], () => u.A.getCategories()), v = l.useMemo(() => x.find(e => e.id === n), [x, n]), j = l.useMemo(() => null != v ? (0, d.C)(v) : "", [v]);
  return (0, r.jsxs)(c.A, {
    onScroll: _,
    ref: b,
    children: [(0, r.jsx)(s.A, {
      title: null != (t = null == v ? true : v.name) ? t : "",
      description: j,
      children: (0, r.jsx)(a.A, {})
    }), (0, r.jsx)(o.A, {
      children: null == v ? (0, r.jsx)("div", {
        className: m.U,
        children: (0, r.jsx)(p.A, {
          className: m.z
        })
      }) : (0, r.jsx)(h.A, {
        categoryId: v.id,
        onSelectApplication: g,
        resetScroll: f
      })
    })]
  })
}