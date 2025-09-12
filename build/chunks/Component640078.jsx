/** Chunk was on 30355 **/
/** chunk id: 640078, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk323946 = require("./323946.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk778414 = require("./778414.jsx"),
  Chunk836717 = require("./836717.js");
let u = function(e) {
  var t;
  let {
    scrollerRef: n
  } = e, {
    isDragging: u,
    item: d,
    sourceClientOffset: f
  } = (0, l.f)(e => ({
    isDragging: e.isDragging(),
    item: e.getItem(),
    sourceClientOffset: e.getSourceClientOffset()
  })), m = (0, i.e7)([s.default], () => s.default.getCurrentUser()), g = (0, a.zPA)();
  if (true !== u || null == f || null == d.widget) return null;
  let p = null == n || null == (t = n.current) ? true : t.getBoundingClientRect();
  if (null == p || null == m) return null;
  let b = f.x - p.left - 60 * !!g,
    j = f.y - p.top;
  return (0, r.jsx)("div", {
    className: c.container,
    style: {
      transform: "translate(".concat(b, "px, ").concat(j, "px)")
    },
    children: (0, r.jsx)(o.Z, {
      widget: d.widget,
      user: m,
      disableInteraction: true
    })
  })
}