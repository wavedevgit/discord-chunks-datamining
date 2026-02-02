/** Chunk was on 23628 **/
/** chunk id: 661417, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk341915 = require("./341915.js"),
  Chunk590202 = require("./590202.js"),
  Chunk971649 = require("./971649.js"),
  Chunk651892 = require("./651892.js"),
  Chunk814793 = require("./814793.js"),
  Chunk717415 = require("./717415.jsx"),
  Chunk985018 = require("./985018.jsx");

function m(e) {
  let {
    floatRight: t
  } = e, {
    quest: n,
    sourceQuestContent: m
  } = l.useContext(p.VideoQuestModalContext), v = (0, c.go)(), b = (0, d.E0)(n.config), E = l.useCallback(() => {
    b && ((0, u.Xm)(n.id, {
      content: s.uF.VIDEO_MODAL,
      ctaContent: a.Cy.COPY_QUEST_URL,
      impressionId: v,
      sourceQuestContent: m
    }), (0, i.showToast)((0, i.createToast)(f.intl.string(f.t["+5kSoW"]), i.ToastType.SUCCESS)))
  }, [v, b, n.id, m]);
  return b ? (0, r.jsx)("div", {
    style: {
      marginLeft: t ? "auto" : true
    },
    children: (0, r.jsx)(o.m_, {
      text: f.intl.string(f.t.WmfZHZ),
      children: (0, r.jsx)(i.K0, {
        variant: "overlay-secondary",
        icon: i.qYV,
        "aria-label": f.intl.string(f.t.RDE0Sc),
        onClick: E
      })
    })
  }) : null
}