/** Chunk was on 44097 **/
/** chunk id: 683881, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk85707 = require("./85707.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk817053 = require("./817053.jsx"),
  Chunk623132 = require("./623132.jsx"),
  Chunk778414 = require("./778414.jsx"),
  Chunk707804 = require("./707804.js");

function g(e) {
  var t;
  let {
    scrollerRef: n
  } = e, {
    isDragging: g,
    item: p,
    sourceClientOffset: m
  } = (0, a.f)(e => ({
    isDragging: e.isDragging(),
    item: e.getItem(),
    sourceClientOffset: e.getSourceClientOffset()
  })), b = (0, l.e7)([c.default], () => c.default.getCurrentUser()), h = (0, o.zPA)(), y = i.useMemo(() => {
    if (null == b || null == p) return null;
    let {
      id: e,
      itemType: t,
      itemPreviewProps: n
    } = p;
    if ("WIDGET" === t && (null == n ? true : n.widget) != null) return (0, r.jsx)("div", {
      className: f.widgetPreview,
      children: (0, r.jsx)(d.Z, {
        widget: n.widget,
        user: b,
        disableInteraction: true
      })
    });
    if ("GAME_COVER" === t && (null == n ? true : n.gameName) != null) {
      let {
        imageSrc: t,
        gameName: i
      } = n;
      return (0, r.jsx)(s.Z, {
        className: f.gamePreview,
        imageSrc: t,
        gameName: i,
        applicationId: e,
        userId: null == b ? true : b.id,
        disableInteraction: true
      })
    }
    if ("GAME_DETAILS_CARD" === t && (null == n ? true : n.game) != null && (null == n ? true : n.widgetType) != null) {
      let {
        game: e,
        widgetType: t
      } = n;
      return (0, r.jsx)(u.Z, {
        className: f.gameDetailsCardPreview,
        user: b,
        widgetType: t,
        game: e,
        disableInteraction: true
      })
    }
    return null
  }, [p, b]), v = i.useRef(null), O = i.useCallback(() => {
    if (null == n.current) return;
    let e = n.current.getBoundingClientRect();
    v.current = {
      x: e.left,
      y: e.top
    }
  }, [n]);
  if (i.useEffect(() => {
      if (!g) {
        v.current = null;
        return
      }
      null == v.current && O()
    }, [g, O]), true !== g || null == m || null == y) return null;
  null == v.current && O();
  let {
    x: j,
    y: x
  } = null != (t = v.current) ? t : {
    x: 0,
    y: 0
  }, _ = m.x - j - 60 * !!h, P = m.y - x;
  return (0, r.jsx)("div", {
    className: f.container,
    style: {
      transform: "translate3d(".concat(_, "px, ").concat(P, "px, 0)")
    },
    children: y
  })
}