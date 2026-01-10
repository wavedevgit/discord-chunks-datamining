/** Chunk was on 75909 **/
/** chunk id: 449788, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk617136 = require("./617136.js"),
  Chunk915750 = require("./915750.jsx"),
  Chunk49436 = require("./49436.js"),
  Chunk304696 = require("./304696.js"),
  Chunk283689 = require("./283689.js"),
  Chunk215113 = require("./215113.jsx"),
  Chunk388032 = require("./388032.jsx");

function p(e) {
  let {
    floatRight: t
  } = e, {
    quest: n,
    sourceQuestContent: p
  } = o.useContext(m.VideoQuestModalContext), v = (0, s.aM)(), E = (0, d.VB)(n.config), g = o.useCallback(() => {
    E && ((0, u.f2)(n.id, {
      content: c.jn.VIDEO_MODAL,
      ctaContent: a.jZ.COPY_QUEST_URL,
      impressionId: v,
      sourceQuestContent: p
    }), (0, i.showToast)((0, i.createToast)(f.intl.string(f.t["+5kSoW"]), i.ToastType.SUCCESS)))
  }, [v, E, n.id, p]);
  return E ? (0, r.jsx)("div", {
    style: {
      marginLeft: t ? "auto" : true
    },
    children: (0, r.jsx)(l.u, {
      text: f.intl.string(f.t.WmfZHZ),
      children: (0, r.jsx)(i.hU, {
        variant: "overlay-secondary",
        icon: i.xPt,
        "aria-label": f.intl.string(f.t.RDE0Sc),
        onClick: g
      })
    })
  }) : null
}