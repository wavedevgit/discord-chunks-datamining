/** Chunk was on 59569 **/
/** chunk id: 128988, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk688807 = require("./688807.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk287809 = require("./287809.js"),
  Chunk788593 = require("./788593.jsx"),
  Chunk742710 = require("./742710.jsx"),
  Chunk463259 = require("./463259.jsx"),
  Chunk18983 = require("./18983.jsx"),
  Chunk330966 = require("./330966.js");

function g(e) {
  var t;
  let {
    scrollerRef: n
  } = e, {
    isDragging: g,
    item: m,
    sourceClientOffset: b
  } = (0, i.V)(e => ({
    isDragging: e.isDragging(),
    item: e.getItem(),
    sourceClientOffset: e.getSourceClientOffset()
  })), y = (0, a.bG)([s.default], () => s.default.getCurrentUser()), O = (0, o.VUy)(), j = l.useMemo(() => null == y || null == m ? null : function(e, t) {
    let {
      id: n,
      itemType: l,
      itemPreviewProps: i
    } = e;
    if ("WIDGET" === l && (null == i ? true : i.widget) != null) return (0, r.jsx)("div", {
      className: p.dt,
      children: (0, r.jsx)(d.u, {
        widget: i.widget,
        user: t,
        disableInteraction: true
      })
    });
    if ("GAME_COVER" === l && (null == i ? true : i.gameName) != null) {
      let {
        imageSrc: e,
        gameName: l
      } = i;
      return (0, r.jsx)(c.A, {
        className: p.XJ,
        imageSrc: e,
        gameName: l,
        applicationId: n,
        userId: null == t ? true : t.id,
        disableInteraction: true
      })
    }
    if ("GAME_DETAILS_CARD" === l && (null == i ? true : i.game) != null && (null == i ? true : i.widgetType) != null) {
      let {
        game: e,
        widgetType: n
      } = i;
      return (0, r.jsx)(u.A, {
        className: p.xB,
        user: t,
        widgetType: n,
        game: e,
        disableInteraction: true
      })
    }
    if ("WISHLIST_ITEM" === l && (null == i ? true : i.item) != null) {
      let {
        item: e
      } = i;
      return (0, r.jsx)("div", {
        className: p.Xm,
        children: (0, r.jsx)(f.A, {
          item: e,
          profileOwner: t,
          wishlistId: null,
          isOwner: false,
          showOverlayButton: false,
          showIcons: false,
          isDragging: true
        })
      })
    }
    return null
  }(m, y), [m, y]), h = l.useRef(null), x = l.useCallback(() => {
    if (null == n.current) return;
    let e = n.current.getBoundingClientRect();
    h.current = {
      x: e.left,
      y: e.top
    }
  }, [n]);
  if (l.useEffect(() => {
      if (!g) {
        h.current = null;
        return
      }
      null == h.current && x()
    }, [g, x]), true !== g || null == b || null == j) return null;
  null == h.current && x();
  let {
    x: v,
    y: _
  } = null != (t = h.current) ? t : {
    x: 0,
    y: 0
  }, I = b.x - v - 60 * !!O, w = b.y - _;
  return (0, r.jsx)("div", {
    className: p.kL,
    style: {
      transform: "translate3d(".concat(I, "px, ").concat(w, "px, 0)")
    },
    children: j
  })
}