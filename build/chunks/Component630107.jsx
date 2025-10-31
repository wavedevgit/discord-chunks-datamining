/** Chunk was on 10125 **/
/** chunk id: 630107, original params: e,t,a (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => b
}), require("./388685.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk830064 = require("./830064.jsx"),
  Chunk388905 = require("./388905.jsx"),
  Chunk625128 = require("./625128.js"),
  Chunk362762 = require("./362762.js"),
  Chunk703656 = require("./703656.js"),
  Chunk22095 = require("./22095.js"),
  Chunk617136 = require("./617136.js"),
  Chunk497505 = require("./497505.js"),
  Chunk110560 = require("./110560.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk981631 = require("./981631.js"),
  Chunk186901 = require("./186901.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk781984 = require("./781984.js"),
  Chunk74830 = require("./74830.js"),
  Chunk13299 = require("./13299.js");
Chunk442837.ZP.initialize();
let I = Chunk873546.tq || Chunk873546.Em;

function b(e) {
  let {
    match: t
  } = e, a = (0, l.e7)([o.Z], () => o.Z.getState("quests")), i = t.params.questId, b = function(e) {
    let [t, a] = n.useState(null);
    return n.useEffect(() => {
      (0, u.gU)(e).then(e => a({
        status: "ok",
        value: e
      })).catch(() => a({
        status: "error"
      }))
    }, [a, e]), t
  }(i);
  n.useEffect(() => {
    I || (null == a ? ((0, _.dA)({
      questId: i,
      event: E.rMx.QUEST_SHARE_LINK_DEEP_LINKED_INTO_DESKTOP_CLIENT,
      properties: {},
      sourceQuestContent: x.jn.QUEST_HOME_DESKTOP
    }), g.Z.openNativeAppModal("quests", E.Etm.DEEP_LINK, {
      type: T.jE.QUEST_HOME,
      params: {
        questId: i
      }
    })) : a === E.kEZ.OPEN_FAIL && (0, m.dL)({
      pathname: E.Z5c.QUEST_HOME,
      hash: i
    }))
  }, [a, i]);
  let f = n.useCallback(() => (0, p.openAppWithQuest)(i), [i]);
  if (I) return (0, s.jsxs)("div", {
    className: N.page,
    children: [(0, s.jsx)("img", {
      className: N.bgImg,
      src: v.ZP,
      alt: ""
    }), (0, s.jsx)("div", {
      className: N.logoContainer,
      children: (0, s.jsx)("img", {
        src: k,
        alt: ""
      })
    }), null != b && (0, s.jsxs)("div", {
      className: N.card,
      children: ["ok" === b.status && (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)("div", {
          className: N.gameTile,
          children: (0, s.jsx)("img", {
            src: "".concat(h.HO).concat(i, "/dark/").concat(b.value.assets.gameTile),
            alt: "",
            className: N.gameTileImg
          })
        }), (0, s.jsx)(r.Heading, {
          variant: "heading-lg/semibold",
          color: "text-default",
          className: N.headingText,
          children: b.value.messages.questName
        })]
      }), (0, s.jsx)(r.Text, {
        variant: "text-md/normal",
        className: N.bodyText,
        children: j.intl.string(j.t.NweJI8)
      }), (0, s.jsx)(r.Button, {
        variant: "primary",
        text: j.intl.string(j.t.UQvCf7),
        fullWidth: true,
        onClick: f
      })]
    })]
  });
  let O = null == a || a === E.kEZ.OPENING || a === E.kEZ.OPEN_FAIL;
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(c.Z, {
      className: N.backgroundArtwork,
      preserveAspectRatio: "xMinYMin slice"
    }), (0, s.jsx)("div", {
      className: N.container,
      children: (0, s.jsx)(d.ZP, {
        children: O ? (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(d.Dx, {
            children: j.intl.string(j.t["Z+hCVU"])
          }), (0, s.jsx)(d.Hh, {})]
        }) : (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(d.Dx, {
            className: N.appOpenedTitle,
            children: j.intl.string(j.t.csrAMJ)
          }), (0, s.jsx)(d.DK, {
            children: j.intl.string(j.t.ghBJz9)
          })]
        })
      })
    })]
  })
}