/** Chunk was on 69844 **/
/** chunk id: 726941, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk322665 = require("./322665.jsx"),
  Chunk17845 = require("./17845.jsx"),
  Chunk374939 = require("./374939.jsx"),
  Chunk283293 = require("./283293.jsx"),
  Chunk493646 = require("./493646.js"),
  Chunk678694 = require("./678694.js"),
  Chunk292191 = require("./292191.jsx"),
  Chunk683544 = require("./683544.jsx"),
  Chunk547070 = require("./547070.js");
let g = function(e) {
  var t;
  let {
    tabId: n,
    onSelectApplication: g,
    onScroll: _
  } = e, f = a.useRef(null), b = a.useCallback(() => {
    var e;
    null == (e = f.current) || e.scrollTo({
      to: 0
    })
  }, []), x = (0, i.e7)([u.Z], () => u.Z.getCategories()), v = a.useMemo(() => x.find(e => e.id === n), [x, n]), C = a.useMemo(() => null != v ? (0, d.v)(v) : "", [v]);
  return (0, r.jsxs)(c.Z, {
    onScroll: _,
    ref: f,
    children: [(0, r.jsx)(s.Z, {
      title: null != (t = null == v ? true : v.name) ? t : "",
      description: C,
      children: (0, r.jsx)(l.Z, {})
    }), (0, r.jsx)(o.Z, {
      children: null == v ? (0, r.jsx)("div", {
        className: h.errorContainer,
        children: (0, r.jsx)(p.Z, {
          className: h.error
        })
      }) : (0, r.jsx)(m.Z, {
        categoryId: v.id,
        onSelectApplication: g,
        resetScroll: b
      })
    })]
  })
}