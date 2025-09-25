/** Chunk was on 49902 **/
/** chunk id: 640078, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk79116 = require("./79116.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk778414 = require("./778414.jsx"),
  Chunk925277 = require("./925277.js");
let u = function(e) {
  var t;
  let {
    scrollerRef: n
  } = e, {
    isDragging: u,
    item: d,
    sourceClientOffset: f
  } = (0, i.f)(e => ({
    isDragging: e.isDragging(),
    item: e.getItem(),
    sourceClientOffset: e.getSourceClientOffset()
  })), g = (0, l.e7)([o.default], () => o.default.getCurrentUser()), h = (0, a.zPA)();
  if (true !== u || null == f || null == d.widget) return null;
  let p = null == n || null == (t = n.current) ? true : t.getBoundingClientRect();
  if (null == p || null == g) return null;
  let m = f.x - p.left - 60 * !!h,
    v = f.y - p.top;
  return (0, r.jsx)("div", {
    className: c.container,
    style: {
      transform: "translate(".concat(m, "px, ").concat(v, "px)")
    },
    children: (0, r.jsx)(s.Z, {
      widget: d.widget,
      user: g,
      disableInteraction: true
    })
  })
}