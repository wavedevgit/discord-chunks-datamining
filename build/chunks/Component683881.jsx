/** Chunk was on 56848 **/
/** chunk id: 683881, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk79116 = require("./79116.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk817053 = require("./817053.jsx"),
  Chunk778414 = require("./778414.jsx"),
  Chunk707804 = require("./707804.js");

function d(e) {
  var t;
  let {
    scrollerRef: n
  } = e, {
    isDragging: d,
    item: f,
    sourceClientOffset: g
  } = (0, i.f)(e => ({
    isDragging: e.isDragging(),
    item: e.getItem(),
    sourceClientOffset: e.getSourceClientOffset()
  })), p = (0, l.e7)([s.default], () => s.default.getCurrentUser()), m = (0, a.zPA)();
  if (true !== d || null == g || null == f) return null;
  let h = null == n || null == (t = n.current) ? true : t.getBoundingClientRect();
  if (null == h || null == p) return null;
  let v = (null == f ? true : f.type) === "WIDGET" && null != f.widget ? (0, r.jsx)("div", {
    className: u.widgetPreview,
    children: (0, r.jsx)(c.Z, {
      widget: f.widget,
      user: p,
      disableInteraction: true
    })
  }) : (null == f ? true : f.itemType) === "GAME_COVER" && null != f.id ? (0, r.jsx)(o.Z, {
    className: u.gamePreview,
    imageSrc: f.imageSrc,
    gameName: f.gameName,
    applicationId: f.id,
    userId: null == p ? true : p.id,
    disableInteraction: true
  }) : null;
  if (null == v) return null;
  let y = g.x - h.left - 60 * !!m,
    j = g.y - h.top;
  return (0, r.jsx)("div", {
    className: u.container,
    style: {
      transform: "translate(".concat(y, "px, ").concat(j, "px)")
    },
    children: v
  })
}