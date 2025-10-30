/** Chunk was on 41734 **/
/** chunk id: 792459, original params: e,t,a (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => f
}), require("./388685.js"), require("./35282.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js");
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
  Chunk272008 = require("./272008.js"),
  Chunk113434 = require("./113434.js"),
  Chunk110560 = require("./110560.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk981631 = require("./981631.js"),
  Chunk186901 = require("./186901.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk596009 = require("./596009.js"),
  Chunk74830 = require("./74830.js"),
  Chunk13299 = require("./13299.js");
Chunk442837.ZP.initialize();
let k = Chunk873546.tq || Chunk873546.Em;

function f(e) {
  let {
    match: t
  } = e, a = (0, l.e7)([o.Z], () => o.Z.getState("quest-preview")), i = t.params.questId, f = function(e) {
    let [t, a] = n.useState(null);
    return n.useEffect(() => {
      (0, x.gU)(e).then(e => a({
        status: "ok",
        value: e
      })).catch(() => a({
        status: "error"
      }))
    }, [a, e]), t
  }(i);
  n.useEffect(() => {
    if (!k) {
      if (null == a) g.Z.openNativeAppModal("quest-preview", _.Etm.DEEP_LINK, {
        type: T.jE.QUEST_PREVIEW_TOOL,
        params: {
          questId: i
        }
      });
      else if (a === _.kEZ.OPEN_FAIL) {
        let e = new URLSearchParams;
        e.set(h.tR.TAB, h.e5.PREVIEW_TOOL), e.set(h.tR.QUEST_ID, i), (0, m.dL)({
          pathname: _.Z5c.QUEST_HOME_V2,
          search: "?".concat(e.toString())
        })
      }
    }
  }, [a, i]);
  let b = n.useCallback(() => (0, u.openAppWithQuestPreview)(i), [i]);
  if (k) return (0, s.jsxs)("div", {
    className: E.page,
    children: [(0, s.jsx)("img", {
      className: E.bgImg,
      src: N.ZP,
      alt: ""
    }), (0, s.jsx)("div", {
      className: E.logoContainer,
      children: (0, s.jsx)("img", {
        src: v,
        alt: ""
      })
    }), null != f && (0, s.jsx)("div", {
      className: E.card,
      children: "ok" === f.status ? (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)("div", {
          className: E.gameTile,
          children: (0, s.jsx)("img", {
            src: "".concat(p.HO).concat(i, "/dark/").concat(f.value.assets.gameTile),
            alt: "",
            className: E.gameTileImg
          })
        }), (0, s.jsx)(r.Heading, {
          variant: "heading-lg/semibold",
          color: "text-default",
          className: E.headingText,
          children: f.value.messages.questName
        }), (0, s.jsx)(r.Text, {
          variant: "text-md/normal",
          className: E.bodyText,
          children: j.intl.string(j.t.bWuKqh)
        }), (0, s.jsx)(r.Button, {
          variant: "primary",
          text: j.intl.string(j.t.UQvCf7),
          fullWidth: true,
          onClick: b
        })]
      }) : (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(r.Heading, {
          variant: "heading-lg/semibold",
          color: "text-default",
          className: E.headingText,
          children: j.intl.string(j.t.k4z4er)
        }), (0, s.jsx)(r.Text, {
          variant: "text-md/normal",
          className: E.bodyText,
          children: j.intl.string(j.t.gtZK09)
        })]
      })
    })]
  });
  let I = null == a || a === _.kEZ.OPENING || a === _.kEZ.OPEN_FAIL;
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(c.Z, {
      className: E.backgroundArtwork,
      preserveAspectRatio: "xMinYMin slice"
    }), (0, s.jsx)("div", {
      className: E.container,
      children: (0, s.jsx)(d.ZP, {
        children: I ? (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(d.Dx, {
            children: j.intl.string(j.t["Z+hCVU"])
          }), (0, s.jsx)(d.Hh, {})]
        }) : (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(d.Dx, {
            className: E.appOpenedTitle,
            children: j.intl.string(j.t.csrAMJ)
          }), (0, s.jsx)(d.DK, {
            children: j.intl.string(j.t.ghBJz9)
          })]
        })
      })
    })]
  })
}