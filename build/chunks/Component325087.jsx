/** Chunk was on 21738 **/
/** chunk id: 325087, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk342494 = require("./342494.js"),
  Chunk976860 = require("./976860.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk78701 = require("./78701.js");

function u(e) {
  let {
    onNavigateToQuestHome: t,
    onRender: n,
    onRequestClose: u,
    targetElementRef: d
  } = e, p = i.useCallback(() => {
    t(), (0, a.pX)(s.BVt.QUEST_HOME_V2)
  }, [t]);
  return i.useEffect(() => {
    n()
  }, [n]), (0, r.jsx)(l.AM, {
    actions: [{
      text: o.intl.string(o.t.facYnD),
      variant: "primary",
      onClick: p
    }],
    align: "top",
    body: o.intl.string(o.t.o4NGXc),
    caretConfig: {
      align: "start"
    },
    gradientColor: "purple",
    graphic: {
      type: "image",
      src: c.A
    },
    onRequestClose: u,
    position: "right",
    size: "lg",
    targetElementRef: d,
    title: o.intl.string(o.t.EDDchq)
  })
}