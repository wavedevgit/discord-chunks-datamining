/** Chunk was on 1272 **/
/** chunk id: 551913, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk907862 = require("./907862.js"),
  Chunk703656 = require("./703656.js"),
  Chunk706454 = require("./706454.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk11269 = require("./11269.js");

function p(e) {
  let {
    onNavigateToQuestHome: t,
    onRender: n,
    onRequestClose: p,
    targetElementRef: f
  } = e, h = (0, l.e7)([o.default], () => o.default.locale), g = i.useCallback(() => {
    t(), (0, s.uL)(c.Z5c.QUEST_HOME_V2)
  }, [t]);
  return i.useEffect(() => {
    n()
  }, [n]), (0, r.jsx)(a.J2, {
    actions: [{
      text: u.intl.string(u.t.facYnD),
      variant: "primary",
      onClick: g
    }],
    align: "top",
    body: u.intl.string(u.t.o4NGXc),
    caretConfig: {
      align: "start"
    },
    gradientColor: "purple",
    graphic: {
      type: "image",
      src: d.Z
    },
    onRequestClose: p,
    position: "right",
    size: "lg",
    targetElementRef: f,
    title: "en-US" === h || "en-GB" === h ? u.intl.string(u.t.EDDchq) : u.intl.string(u.t["2/2YdK"])
  })
}