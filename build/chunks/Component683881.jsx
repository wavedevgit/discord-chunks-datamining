/** Chunk was on 15582 **/
/** chunk id: 683881, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk79116 = require("./79116.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk817053 = require("./817053.jsx"),
  Chunk623132 = require("./623132.jsx"),
  Chunk778414 = require("./778414.jsx"),
  Chunk599026 = require("./599026.js");

function g(e) {
  var t;
  let {
    scrollerRef: n
  } = e, {
    isDragging: g,
    item: f,
    sourceClientOffset: p
  } = (0, i.f)(e => ({
    isDragging: e.isDragging(),
    item: e.getItem(),
    sourceClientOffset: e.getSourceClientOffset()
  })), m = (0, a.e7)([o.default], () => o.default.getCurrentUser()), b = (0, l.zPA)();
  if (true !== g || null == p || null == f) return null;
  let h = null == n || null == (t = n.current) ? true : t.getBoundingClientRect();
  if (null == h || null == m) return null;
  let y = function(e, t) {
    let {
      id: n,
      itemType: i,
      itemPreviewProps: a
    } = e;
    if ("WIDGET" === i && (null == a ? true : a.widget) != null) return (0, r.jsx)("div", {
      className: d.widgetPreview,
      children: (0, r.jsx)(u.Z, {
        widget: a.widget,
        user: t,
        disableInteraction: true
      })
    });
    if ("GAME_COVER" === i && (null == a ? true : a.gameName) != null) {
      let {
        imageSrc: e,
        gameName: i
      } = a;
      return (0, r.jsx)(c.Z, {
        className: d.gamePreview,
        imageSrc: e,
        gameName: i,
        applicationId: n,
        userId: null == t ? true : t.id,
        disableInteraction: true
      })
    }
    if ("GAME_DETAILS_CARD" === i && (null == a ? true : a.game) != null && (null == a ? true : a.widgetType) != null) {
      let {
        game: e,
        widgetType: n
      } = a;
      return (0, r.jsx)(s.Z, {
        className: d.gameDetailsCardPreview,
        user: t,
        widgetType: n,
        game: e,
        disableInteraction: true
      })
    }
    return null
  }(f, m);
  if (null == y) return null;
  let v = p.x - h.left - 60 * !!b,
    O = p.y - h.top;
  return (0, r.jsx)("div", {
    className: d.container,
    style: {
      transform: "translate(".concat(v, "px, ").concat(O, "px)")
    },
    children: y
  })
}