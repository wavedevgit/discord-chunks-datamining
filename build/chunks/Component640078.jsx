/** Chunk was on 83789 **/
/** chunk id: 640078, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js"),
  Chunk323946 = require("./323946.js"),
  Chunk442837 = require("./442837.js"),
  Chunk594174 = require("./594174.js"),
  Chunk778414 = require("./778414.jsx"),
  Chunk836717 = require("./836717.js");
let s = function(e) {
  var t;
  let {
    scrollerRef: r
  } = e, {
    isDragging: s,
    item: u,
    sourceClientOffset: d
  } = (0, i.f)(e => ({
    isDragging: e.isDragging(),
    item: e.getItem(),
    sourceClientOffset: e.getSourceClientOffset()
  })), f = (0, l.e7)([a.default], () => a.default.getCurrentUser());
  if (true !== s || null == d || null == u.widget) return null;
  let g = null == r || null == (t = r.current) ? true : t.getBoundingClientRect();
  if (null == g || null == f) return null;
  let p = d.x - g.left,
    b = d.y - g.top;
  return (0, n.jsx)("div", {
    className: c.container,
    style: {
      transform: "translate(".concat(p, "px, ").concat(b, "px)")
    },
    children: (0, n.jsx)(o.Z, {
      widget: u.widget,
      user: f,
      isGameFetching: () => false,
      disableInteraction: true
    })
  })
}