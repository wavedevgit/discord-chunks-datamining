/** Chunk was on 92504 **/
/** chunk id: 726941, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
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
  Chunk71470 = require("./71470.js");
let f = function(e) {
  var t;
  let {
    tabId: n,
    onSelectApplication: f,
    onScroll: g
  } = e, b = r.useRef(null), x = r.useCallback(() => {
    var e;
    null == (e = b.current) || e.scrollTo({
      to: 0
    })
  }, []), v = (0, i.e7)([u.Z], () => u.Z.getCategories()), C = r.useMemo(() => v.find(e => e.id === n), [v, n]), j = r.useMemo(() => null != C ? (0, d.v)(C) : "", [C]);
  return (0, a.jsxs)(c.Z, {
    onScroll: g,
    ref: b,
    children: [(0, a.jsx)(s.Z, {
      title: null != (t = null == C ? true : C.name) ? t : "",
      description: j,
      children: (0, a.jsx)(l.Z, {})
    }), (0, a.jsx)(o.Z, {
      children: null == C ? (0, a.jsx)("div", {
        className: h.errorContainer,
        children: (0, a.jsx)(p.Z, {
          className: h.error
        })
      }) : (0, a.jsx)(m.Z, {
        categoryId: C.id,
        onSelectApplication: f,
        resetScroll: x
      })
    })]
  })
}