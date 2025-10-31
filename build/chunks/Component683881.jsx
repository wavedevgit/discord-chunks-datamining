/** Chunk was on 47793 **/
/** chunk id: 683881, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk79116 = require("./79116.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk817053 = require("./817053.jsx"),
  Chunk623132 = require("./623132.jsx"),
  Chunk778414 = require("./778414.jsx"),
  Chunk707804 = require("./707804.js");

function f(e) {
  var t;
  let {
    scrollerRef: n
  } = e, {
    isDragging: f,
    item: g,
    sourceClientOffset: p
  } = (0, i.f)(e => ({
    isDragging: e.isDragging(),
    item: e.getItem(),
    sourceClientOffset: e.getSourceClientOffset()
  })), m = (0, a.e7)([o.default], () => o.default.getCurrentUser()), b = (0, l.zPA)();
  if (true !== f || null == p || null == g) return null;
  let y = null == n || null == (t = n.current) ? true : t.getBoundingClientRect();
  if (null == y || null == m) return null;
  let h = function(e, t) {
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
    if ("GAME_COVER" === i && (null == a ? true : a.imageSrc) != null && (null == a ? true : a.gameName) != null) {
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
  }(g, m);
  if (null == h) return null;
  let v = p.x - y.left - 60 * !!b,
    O = p.y - y.top;
  return (0, r.jsx)("div", {
    className: d.container,
    style: {
      transform: "translate(".concat(v, "px, ").concat(O, "px)")
    },
    children: h
  })
}