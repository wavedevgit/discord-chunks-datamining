/** Chunk was on 10125 **/
/** chunk id: 630107, original params: e,t,a (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => I
}), require("./388685.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk49436 = require("./49436.js"),
  Chunk110560 = require("./110560.jsx"),
  Chunk324805 = require("./324805.js"),
  Chunk981631 = require("./981631.js"),
  Chunk186901 = require("./186901.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk227633 = require("./227633.js"),
  Chunk74830 = require("./74830.js"),
  Chunk770354 = require("./770354.js");
Chunk442837.ZP.initialize();
let v = Chunk873546.tq || Chunk873546.Em;

function I(e) {
  let {
    match: t
  } = e, a = (0, i.e7)([o.Z], () => o.Z.getState("quests")), c = t.params.questId, I = function(e) {
    let [t, a] = n.useState(null);
    return n.useEffect(() => {
      (0, u.gU)(e).then(e => a({
        status: "ok",
        value: e
      })).catch(() => a({
        status: "error"
      }))
    }, [a, e]), t
  }(c);
  n.useEffect(() => {
    v || (null == a ? ((0, x.dA)({
      questId: c,
      event: _.rMx.QUEST_SHARE_LINK_DEEP_LINKED_INTO_DESKTOP_CLIENT,
      properties: {},
      sourceQuestContent: p.jn.QUEST_HOME_DESKTOP
    }), g.Z.openNativeAppModal("quests", _.Etm.DEEP_LINK, {
      type: T.jE.QUEST_HOME,
      params: {
        questId: c
      }
    })) : a === _.kEZ.OPEN_FAIL && (0, m.dL)({
      pathname: _.Z5c.QUEST_HOME,
      hash: c
    }))
  }, [a, c]);
  let f = n.useCallback(() => (0, h.openAppWithQuest)(c), [c]);
  if (v) return (0, s.jsxs)("div", {
    className: j.page,
    children: [(0, s.jsx)("img", {
      className: j.bgImg,
      src: k.ZP,
      alt: ""
    }), (0, s.jsx)("div", {
      className: j.logoContainer,
      children: (0, s.jsx)("img", {
        src: N,
        alt: ""
      })
    }), null != I && (0, s.jsxs)("div", {
      className: j.card,
      children: ["ok" === I.status && (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)("div", {
          className: j.gameTile,
          children: (0, s.jsx)("img", {
            src: "".concat(E.HO).concat(c, "/dark/").concat(I.value.assets.gameTile),
            alt: "",
            className: j.gameTileImg
          })
        }), (0, s.jsx)(l.Heading, {
          variant: "heading-lg/semibold",
          color: "text-default",
          className: j.headingText,
          children: I.value.messages.questName
        })]
      }), (0, s.jsx)(l.Text, {
        variant: "text-md/normal",
        className: j.bodyText,
        children: b.intl.string(b.t.NweJI8)
      }), (0, s.jsx)(l.Button, {
        variant: "primary",
        text: b.intl.string(b.t.UQvCf7),
        fullWidth: true,
        onClick: f
      })]
    })]
  });
  let O = null == a || a === _.kEZ.OPENING || a === _.kEZ.OPEN_FAIL;
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(r.Z, {
      className: j.backgroundArtwork,
      preserveAspectRatio: "xMinYMin slice"
    }), (0, s.jsx)("div", {
      className: j.container,
      children: (0, s.jsx)(d.ZP, {
        children: O ? (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(d.Dx, {
            children: b.intl.string(b.t["Z+hCVU"])
          }), (0, s.jsx)(d.Hh, {})]
        }) : (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(d.Dx, {
            className: j.appOpenedTitle,
            children: b.intl.string(b.t.csrAMJ)
          }), (0, s.jsx)(d.DK, {
            children: b.intl.string(b.t.ghBJz9)
          })]
        })
      })
    })]
  })
}