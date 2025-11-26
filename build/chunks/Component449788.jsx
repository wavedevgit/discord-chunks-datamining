/** Chunk was on 75909 **/
/** chunk id: 449788, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk617136 = require("./617136.js"),
  Chunk915750 = require("./915750.jsx"),
  Chunk49436 = require("./49436.js"),
  Chunk509212 = require("./509212.js"),
  Chunk937797 = require("./937797.js"),
  Chunk215113 = require("./215113.jsx"),
  Chunk939389 = require("./939389.js"),
  Chunk324805 = require("./324805.js"),
  Chunk388032 = require("./388032.jsx");

function E(e) {
  let {
    floatRight: t
  } = e, {
    quest: n,
    sourceQuestContent: E,
    isPortrait: g
  } = o.useContext(m.VideoQuestModalContext), O = (0, s.aM)(), {
    enabled: h,
    variant: b
  } = d.EO.useConfig({
    location: p.dr.VIDEO_MODAL
  }), S = b === d.m_.OVERLAY_SHARE_ON_VIDEO, [C, y] = (0, f.G6)(v.intl.string(v.t.RDE0Sc), v.intl.string(v.t["+5kSoW"]), 1700), [_, x] = o.useState(false), j = o.useRef(null), D = (0, u.vB)(n.config), P = o.useCallback(() => {
    D && ((0, u.f2)(n.id, {
      content: c.jn.VIDEO_MODAL,
      ctaContent: a.jZ.COPY_QUEST_URL,
      impressionId: O,
      sourceQuestContent: E
    }), (h || g) && (0, i.showToast)((0, i.createToast)(v.intl.string(v.t["+5kSoW"]), i.ToastType.SUCCESS)), y(), x(true), null != j.current && clearTimeout(j.current), j.current = setTimeout(() => {
      x(false)
    }, 1700))
  }, [O, D, n.id, E, y, h, g]);
  return (o.useEffect(() => () => {
    null != j.current && clearTimeout(j.current)
  }, []), D) ? h || g ? (0, r.jsx)("div", {
    style: {
      marginLeft: t ? "auto" : true
    },
    children: _ ? (0, r.jsx)(i.hU, {
      variant: "active",
      icon: i.owK,
      onClick: P,
      "aria-label": v.intl.string(v.t.RDE0Sc)
    }) : (0, r.jsx)(l.u, {
      text: S || !h ? true : v.intl.string(v.t.WqhZss),
      children: (0, r.jsx)(i.hU, {
        variant: S ? "overlay-secondary" : "secondary",
        icon: h ? i.aAc : i.TIy,
        "aria-label": v.intl.string(v.t.RDE0Sc),
        onClick: P
      })
    })
  }) : (0, r.jsx)(i.Button, {
    variant: "secondary",
    text: C,
    onClick: P
  }) : null
}