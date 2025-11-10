/** Chunk was on 32249 **/
/** chunk id: 985559, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk617136 = require("./617136.js"),
  Chunk915750 = require("./915750.jsx"),
  Chunk509212 = require("./509212.js"),
  Chunk497505 = require("./497505.js"),
  Chunk937797 = require("./937797.js"),
  Chunk536687 = require("./536687.jsx"),
  Chunk604162 = require("./604162.js"),
  Chunk46140 = require("./46140.js"),
  Chunk388032 = require("./388032.jsx");

function g(e) {
  let {
    floatRight: t
  } = e, {
    quest: n,
    sourceQuestContent: g,
    isPortrait: E
  } = o.useContext(m.VideoQuestModalContext), O = (0, s.aM)(), {
    enabled: b,
    variant: h
  } = d.EO.useConfig({
    location: f.dr.VIDEO_MODAL
  }), S = h === d.m_.OVERLAY_SHARE_ON_VIDEO, [C, y] = (0, p.G6)(v.intl.string(v.t.RDE0Sc), v.intl.string(v.t["+5kSoW"]), 1700), [_, x] = o.useState(false), j = o.useRef(null), D = (0, c.vB)(n.config), T = o.useCallback(() => {
    D && ((0, c.f2)(n.id, {
      content: u.jn.VIDEO_MODAL,
      ctaContent: a.jZ.COPY_QUEST_URL,
      impressionId: O,
      sourceQuestContent: g
    }), (b || E) && (0, i.showToast)((0, i.createToast)(v.intl.string(v.t["+5kSoW"]), i.ToastType.SUCCESS)), y(), x(true), null != j.current && clearTimeout(j.current), j.current = setTimeout(() => {
      x(false)
    }, 1700))
  }, [O, D, n.id, g, y, b, E]);
  return (o.useEffect(() => () => {
    null != j.current && clearTimeout(j.current)
  }, []), D) ? b || E ? (0, r.jsx)("div", {
    style: {
      marginLeft: t ? "auto" : true
    },
    children: _ ? (0, r.jsx)(i.hU, {
      variant: "active",
      icon: i.owK,
      onClick: T,
      "aria-label": v.intl.string(v.t.RDE0Sc)
    }) : (0, r.jsx)(l.u, {
      text: S || !b ? true : v.intl.string(v.t.WqhZss),
      children: (0, r.jsx)(i.hU, {
        variant: S ? "overlay-secondary" : "secondary",
        icon: b ? i.aAc : i.TIy,
        "aria-label": v.intl.string(v.t.RDE0Sc),
        onClick: T
      })
    })
  }) : (0, r.jsx)(i.Button, {
    variant: "secondary",
    text: C,
    onClick: T
  }) : null
}