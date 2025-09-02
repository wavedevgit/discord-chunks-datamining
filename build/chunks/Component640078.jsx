/** Chunk was on 8188 **/
/** chunk id: 640078, original params: e,t,n (module,exports,require) **/
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
    scrollerRef: n
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
  let g = null == n || null == (t = n.current) ? true : t.getBoundingClientRect();
  if (null == g || null == f) return null;
  let b = d.x - g.left,
    p = d.y - g.top;
  return (0, r.jsx)("div", {
    className: c.container,
    style: {
      transform: "translate(".concat(b, "px, ").concat(p, "px)")
    },
    children: (0, r.jsx)(o.Z, {
      widget: u.widget,
      user: f,
      isGameFetching: () => false,
      disableInteraction: true
    })
  })
}