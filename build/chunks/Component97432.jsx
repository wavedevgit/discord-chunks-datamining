/** Chunk was on 28636 **/
/** chunk id: 97432, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
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
let b = function(e) {
  var t;
  let {
    tabId: n,
    onSelectApplication: b,
    onScroll: f
  } = e, g = a.useRef(null), x = a.useCallback(() => {
    var e;
    null == (e = g.current) || e.scrollTo({
      to: 0
    })
  }, []), v = (0, r.bG)([u.A], () => u.A.getCategories()), j = a.useMemo(() => v.find(e => e.id === n), [v, n]), A = a.useMemo(() => null != j ? (0, d.C)(j) : "", [j]);
  return (0, l.jsxs)(o.A, {
    onScroll: f,
    ref: g,
    children: [(0, l.jsx)(s.A, {
      title: null != (t = null == j ? true : j.name) ? t : "",
      description: A,
      children: (0, l.jsx)(i.A, {})
    }), (0, l.jsx)(c.A, {
      children: null == j ? (0, l.jsx)("div", {
        className: m.U,
        children: (0, l.jsx)(p.A, {
          className: m.z
        })
      }) : (0, l.jsx)(h.A, {
        categoryId: j.id,
        onSelectApplication: b,
        resetScroll: x
      })
    })]
  })
}