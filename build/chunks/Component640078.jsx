/** Chunk was on 30355 **/
/** chunk id: 640078, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js"),
  Chunk323946 = require("./323946.js"),
  Chunk442837 = require("./442837.js"),
  Chunk594174 = require("./594174.js"),
  Chunk778414 = require("./778414.jsx"),
  Chunk836717 = require("./836717.js");
let c = function(e) {
  var t;
  let {
    scrollerRef: r
  } = e, {
    isDragging: c,
    item: u,
    sourceClientOffset: d
  } = (0, l.f)(e => ({
    isDragging: e.isDragging(),
    item: e.getItem(),
    sourceClientOffset: e.getSourceClientOffset()
  })), f = (0, i.e7)([a.default], () => a.default.getCurrentUser());
  if (true !== c || null == d || null == u.widget) return null;
  let g = null == r || null == (t = r.current) ? true : t.getBoundingClientRect();
  if (null == g || null == f) return null;
  let m = d.x - g.left,
    p = d.y - g.top;
  return (0, n.jsx)("div", {
    className: o.container,
    style: {
      transform: "translate(".concat(m, "px, ").concat(p, "px)")
    },
    children: (0, n.jsx)(s.Z, {
      widget: u.widget,
      user: f,
      disableInteraction: true
    })
  })
}