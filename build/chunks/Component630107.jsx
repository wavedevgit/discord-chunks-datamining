/** Chunk was on 10125 **/
/** chunk id: 630107, original params: a,t,l (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => v
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
  Chunk617136 = require("./617136.js"),
  Chunk272008 = require("./272008.js"),
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
let b = Chunk873546.tq || Chunk873546.Em;

function v(a) {
  let {
    match: t
  } = a, l = (0, i.e7)([n.Z], () => n.Z.getState("quests")), c = t.params.questId, v = function(a) {
    let [t, l] = e.useState(null);
    return e.useEffect(() => {
      (0, p.gU)(a).then(a => l({
        status: "ok",
        value: a
      })).catch(() => l({
        status: "error"
      }))
    }, [l, a]), t
  }(c);
  e.useEffect(() => {
    b || (null == l ? ((0, h.dA)({
      questId: c,
      event: z.rMx.QUEST_SHARE_LINK_DEEP_LINKED_INTO_DESKTOP_CLIENT,
      properties: {},
      sourceQuestContent: j.jn.QUEST_HOME_DESKTOP
    }), o.Z.openNativeAppModal("quests", z.Etm.DEEP_LINK, {
      type: u.jE.QUEST_HOME,
      params: {
        questId: c
      }
    })) : l === z.kEZ.OPEN_FAIL && (0, x.dL)({
      pathname: z.Z5c.QUEST_HOME,
      hash: c
    }))
  }, [l, c]);
  let O = e.useCallback(() => (0, M.openAppWithQuest)(c), [c]);
  if (b) return (0, s.jsxs)("div", {
    className: L.page,
    children: [(0, s.jsx)("img", {
      className: L.bgImg,
      src: g.ZP,
      alt: ""
    }), (0, s.jsx)("div", {
      className: L.logoContainer,
      children: (0, s.jsx)("img", {
        src: y,
        alt: ""
      })
    }), null != v && (0, s.jsxs)("div", {
      className: L.card,
      children: ["ok" === v.status && (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)("div", {
          className: L.gameTile,
          children: (0, s.jsx)("img", {
            src: "".concat(k.HO).concat(c, "/dark/").concat(v.value.assets.gameTile),
            alt: "",
            className: L.gameTileImg
          })
        }), (0, s.jsx)(r.X6q, {
          variant: "heading-lg/semibold",
          color: "text-default",
          className: L.headingText,
          children: v.value.messages.questName
        })]
      }), (0, s.jsx)(r.Text, {
        variant: "text-md/normal",
        className: L.bodyText,
        children: m.intl.string(m.t.NweJIy)
      }), (0, s.jsx)(r.zxk, {
        variant: "primary",
        text: m.intl.string(m.t.UQvCf3),
        fullWidth: true,
        onClick: O
      })]
    })]
  });
  let W = null == l || l === z.kEZ.OPENING || l === z.kEZ.OPEN_FAIL;
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(f.Z, {
      className: L.backgroundArtwork,
      preserveAspectRatio: "xMinYMin slice"
    }), (0, s.jsx)("div", {
      className: L.container,
      children: (0, s.jsx)(d.ZP, {
        children: W ? (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(d.Dx, {
            children: m.intl.string(m.t["Z+hCVV"])
          }), (0, s.jsx)(d.Hh, {})]
        }) : (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(d.Dx, {
            className: L.appOpenedTitle,
            children: m.intl.string(m.t.csrAMD)
          }), (0, s.jsx)(d.DK, {
            children: m.intl.string(m.t.ghBJz8)
          })]
        })
      })
    })]
  })
}