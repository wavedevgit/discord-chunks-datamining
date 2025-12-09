/** Chunk was on 44097 **/
/** chunk id: 683881, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
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
  Chunk796483 = require("./796483.jsx"),
  Chunk707804 = require("./707804.js");

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
  })), h = (0, a.e7)([c.default], () => c.default.getCurrentUser()), y = (0, o.zPA)(), v = i.useMemo(() => {
    if (null == h || null == m) return null;
    let {
      id: e,
      itemType: t,
      itemPreviewProps: n
    } = m;
    if ("WIDGET" === t && (null == n ? true : n.widget) != null) return (0, r.jsx)("div", {
      className: g.widgetPreview,
      children: (0, r.jsx)(d.Z, {
        widget: n.widget,
        user: h,
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
        userId: null == h ? true : h.id,
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
        user: h,
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
          profileOwner: h,
          wishlistId: null,
          isOwner: false,
          showOverlayButton: false,
          showIcons: false,
          isDragging: true
        })
      })
    }
    return null
  }, [m, h]), O = i.useRef(null), j = i.useCallback(() => {
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
      null == O.current && j()
    }, [p, j]), true !== p || null == b || null == v) return null;
  null == O.current && j();
  let {
    x: x,
    y: _
  } = null != (t = O.current) ? t : {
    x: 0,
    y: 0
  }, P = b.x - x - 60 * !!y, I = b.y - _;
  return (0, r.jsx)("div", {
    className: g.container,
    style: {
      transform: "translate3d(".concat(P, "px, ").concat(I, "px, 0)")
    },
    children: v
  })
}