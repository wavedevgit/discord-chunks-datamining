/** Chunk was on 1272 **/
/** chunk id: 551913, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk907862 = require("./907862.js"),
  Chunk703656 = require("./703656.js"),
  Chunk937797 = require("./937797.js"),
  Chunk46140 = require("./46140.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk11269 = require("./11269.js");

function p(e) {
  let {
    onNavigateToQuestHome: t,
    onRender: n,
    onRequestClose: p,
    targetElementRef: f
  } = e, {
    enabled: h,
    variant: m
  } = s.GE.useConfig({
    location: o.dr.QUEST_HOME_DESKTOP
  }), g = i.useCallback(() => {
    t(), (0, a.uL)(c.Z5c.QUEST_HOME_V2)
  }, [t]);
  if (i.useEffect(() => {
      h && n()
    }, [h, n]), h) return (0, r.jsx)(l.J2, {
    actions: [{
      text: function(e) {
        switch (e) {
          case s.yE.DISCOVER:
            return u.intl.string(u.t.BeeKh0);
          case s.yE.ACTION:
            return u.intl.string(u.t["8Dp3R0"]);
          case s.yE.EARN:
            return u.intl.string(u.t.facYnD);
          case s.yE.REWARD:
            return u.intl.string(u.t.gL45vM)
        }
      }(m),
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
    title: function(e) {
      switch (e) {
        case s.yE.DISCOVER:
          return u.intl.string(u.t["2qdOVq"]);
        case s.yE.ACTION:
          return u.intl.string(u.t.E3Rw0y);
        case s.yE.EARN:
          return u.intl.string(u.t["2/2YdK"]);
        case s.yE.REWARD:
          return u.intl.string(u.t.mOH7r6)
      }
    }(m)
  })
}