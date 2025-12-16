/** Chunk was on 1272 **/
/** chunk id: 61319, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk907862 = require("./907862.js"),
  Chunk703656 = require("./703656.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk332652 = require("./332652.js");

function u(e) {
  let {
    onNavigateToQuestHome: t,
    onRender: n,
    onRequestClose: u,
    targetElementRef: d
  } = e, p = i.useCallback(() => {
    t(), (0, a.uL)(o.Z5c.QUEST_HOME_V2)
  }, [t]);
  return i.useEffect(() => {
    n()
  }, [n]), (0, r.jsx)(l.J2, {
    actions: [{
      text: s.intl.string(s.t.facYnD),
      variant: "primary",
      onClick: p
    }],
    align: "top",
    body: s.intl.string(s.t.o4NGXc),
    caretConfig: {
      align: "start"
    },
    gradientColor: "purple",
    graphic: {
      type: "image",
      src: c.Z
    },
    onRequestClose: u,
    position: "right",
    size: "lg",
    targetElementRef: d,
    title: s.intl.string(s.t.EDDchq)
  })
}