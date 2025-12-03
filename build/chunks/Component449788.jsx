/** Chunk was on 75909 **/
/** chunk id: 449788, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk617136 = require("./617136.js"),
  Chunk915750 = require("./915750.jsx"),
  Chunk49436 = require("./49436.js"),
  Chunk937797 = require("./937797.js"),
  Chunk304696 = require("./304696.js"),
  Chunk283689 = require("./283689.js"),
  Chunk215113 = require("./215113.jsx"),
  Chunk939389 = require("./939389.js"),
  Chunk324805 = require("./324805.js"),
  Chunk388032 = require("./388032.jsx");

function g(e) {
  let {
    floatRight: t
  } = e, {
    quest: n,
    sourceQuestContent: g,
    isPortrait: O
  } = o.useContext(f.VideoQuestModalContext), h = (0, s.aM)(), {
    enabled: b,
    variant: C
  } = u.EO.useConfig({
    location: v.dr.VIDEO_MODAL
  }), S = C === u.m_.OVERLAY_SHARE_ON_VIDEO, [_, y] = (0, p.G6)(E.intl.string(E.t.RDE0Sc), E.intl.string(E.t["+5kSoW"]), 1700), [x, j] = o.useState(false), P = o.useRef(null), D = (0, m.VB)(n.config), R = o.useCallback(() => {
    D && ((0, d.f2)(n.id, {
      content: c.jn.VIDEO_MODAL,
      ctaContent: a.jZ.COPY_QUEST_URL,
      impressionId: h,
      sourceQuestContent: g
    }), (b || O) && (0, i.showToast)((0, i.createToast)(E.intl.string(E.t["+5kSoW"]), i.ToastType.SUCCESS)), y(), j(true), null != P.current && clearTimeout(P.current), P.current = setTimeout(() => {
      j(false)
    }, 1700))
  }, [h, D, n.id, g, y, b, O]);
  return (o.useEffect(() => () => {
    null != P.current && clearTimeout(P.current)
  }, []), D) ? b || O ? (0, r.jsx)("div", {
    style: {
      marginLeft: t ? "auto" : true
    },
    children: x && !b ? (0, r.jsx)(i.hU, {
      variant: "active",
      icon: i.owK,
      onClick: R,
      "aria-label": E.intl.string(E.t.RDE0Sc)
    }) : (0, r.jsx)(l.u, {
      text: b ? E.intl.string(E.t.WmfZHZ) : true,
      children: (0, r.jsx)(i.hU, {
        variant: S ? "overlay-secondary" : "secondary",
        icon: b ? i.xPt : i.TIy,
        "aria-label": E.intl.string(E.t.RDE0Sc),
        onClick: R
      })
    })
  }) : (0, r.jsx)(i.Button, {
    variant: "secondary",
    text: _,
    onClick: R
  }) : null
}