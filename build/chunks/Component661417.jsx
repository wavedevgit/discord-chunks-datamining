/** Chunk was on 23628 **/
/** chunk id: 661417, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk216456 = require("./216456.js"),
  Chunk906822 = require("./906822.jsx"),
  Chunk341915 = require("./341915.js"),
  Chunk651892 = require("./651892.js"),
  Chunk814793 = require("./814793.js"),
  Chunk717415 = require("./717415.jsx"),
  Chunk985018 = require("./985018.jsx");

function p(e) {
  let {
    floatRight: t
  } = e, {
    quest: n,
    sourceQuestContent: p
  } = l.useContext(f.VideoQuestModalContext), v = (0, a.go)(), E = (0, d.E0)(n.config), g = l.useCallback(() => {
    E && ((0, u.Xm)(n.id, {
      content: c.uF.VIDEO_MODAL,
      ctaContent: s.Cy.COPY_QUEST_URL,
      impressionId: v,
      sourceQuestContent: p
    }), (0, i.showToast)((0, i.createToast)(m.intl.string(m.t["+5kSoW"]), i.ToastType.SUCCESS)))
  }, [v, E, n.id, p]);
  return E ? (0, r.jsx)("div", {
    style: {
      marginLeft: t ? "auto" : true
    },
    children: (0, r.jsx)(o.m_, {
      text: m.intl.string(m.t.WmfZHZ),
      children: (0, r.jsx)(i.K0, {
        variant: "overlay-secondary",
        icon: i.qYV,
        "aria-label": m.intl.string(m.t.RDE0Sc),
        onClick: g
      })
    })
  }) : null
}