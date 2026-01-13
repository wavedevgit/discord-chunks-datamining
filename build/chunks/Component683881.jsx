/** Chunk was on 90882 **/
/** chunk id: 683881, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk505805 = require("./505805.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk817053 = require("./817053.jsx"),
  Chunk623132 = require("./623132.jsx"),
  Chunk778414 = require("./778414.jsx"),
  Chunk796483 = require("./796483.jsx"),
  Chunk814855 = require("./814855.js");

function p(e) {
  var t;
  let {
    scrollerRef: n
  } = e, {
    isDragging: p,
    item: m,
    sourceClientOffset: b
  } = (0, l.f)(e => ({
    isDragging: e.isDragging(),
    item: e.getItem(),
    sourceClientOffset: e.getSourceClientOffset()
  })), y = (0, a.e7)([c.default], () => c.default.getCurrentUser()), h = (0, o.zPA)(), j = i.useMemo(() => {
    if (null == y || null == m) return null;
    let {
      id: e,
      itemType: t,
      itemPreviewProps: n
    } = m;
    if ("WIDGET" === t && (null == n ? true : n.widget) != null) return (0, r.jsx)("div", {
      className: g.widgetPreview,
      children: (0, r.jsx)(d.Z, {
        widget: n.widget,
        user: y,
        disableInteraction: true
      })
    });
    if ("GAME_COVER" === t && (null == n ? true : n.gameName) != null) {
      let {
        imageSrc: t,
        gameName: i
      } = n;
      return (0, r.jsx)(s.Z, {
        className: g.gamePreview,
        imageSrc: t,
        gameName: i,
        applicationId: e,
        userId: null == y ? true : y.id,
        disableInteraction: true
      })
    }
    if ("GAME_DETAILS_CARD" === t && (null == n ? true : n.game) != null && (null == n ? true : n.widgetType) != null) {
      let {
        game: e,
        widgetType: t
      } = n;
      return (0, r.jsx)(u.Z, {
        className: g.gameDetailsCardPreview,
        user: y,
        widgetType: t,
        game: e,
        disableInteraction: true
      })
    }
    if ("WISHLIST_ITEM" === t && (null == n ? true : n.item) != null) {
      let {
        item: e
      } = n;
      return (0, r.jsx)("div", {
        className: g.wishlistItemPreview,
        children: (0, r.jsx)(f.Z, {
          item: e,
          profileOwner: y,
          wishlistId: null,
          isOwner: false,
          showOverlayButton: false,
          showIcons: false,
          isDragging: true
        })
      })
    }
    return null
  }, [m, y]), O = i.useRef(null), x = i.useCallback(() => {
    if (null == n.current) return;
    let e = n.current.getBoundingClientRect();
    O.current = {
      x: e.left,
      y: e.top
    }
  }, [n]);
  if (i.useEffect(() => {
      if (!p) {
        O.current = null;
        return
      }
      null == O.current && x()
    }, [p, x]), true !== p || null == b || null == j) return null;
  null == O.current && x();
  let {
    x: v,
    y: P
  } = null != (t = O.current) ? t : {
    x: 0,
    y: 0
  }, I = b.x - v - 60 * !!h, w = b.y - P;
  return (0, r.jsx)("div", {
    className: g.container,
    style: {
      transform: "translate3d(".concat(I, "px, ").concat(w, "px, 0)")
    },
    children: j
  })
}