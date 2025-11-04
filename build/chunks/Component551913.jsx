/** Chunk was on 1272 **/
/** chunk id: 551913, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk907862 = require("./907862.js"),
  Chunk703656 = require("./703656.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk11269 = require("./11269.js");

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
    title: s.intl.string(s.t["2/2YdK"])
  })
}