/** Chunk was on 41734 **/
/** chunk id: 792459, original params: e,t,a (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => k
}), require("./388685.js"), require("./35282.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js");
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
  Chunk968843 = require("./968843.js"),
  Chunk110560 = require("./110560.jsx"),
  Chunk324805 = require("./324805.js"),
  Chunk981631 = require("./981631.js"),
  Chunk186901 = require("./186901.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk227633 = require("./227633.js"),
  Chunk74830 = require("./74830.js"),
  Chunk770354 = require("./770354.js");
Chunk442837.ZP.initialize();
let N = Chunk873546.tq || Chunk873546.Em;

function k(e) {
  let {
    match: t
  } = e, a = (0, c.e7)([o.Z], () => o.Z.getState("quest-preview")), i = t.params.questId, k = function(e) {
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
    if (!N) {
      if (null == a) g.Z.openNativeAppModal("quest-preview", b.Etm.DEEP_LINK, {
        type: T.jE.QUEST_PREVIEW_TOOL,
        params: {
          questId: i
        }
      });
      else if (a === b.kEZ.OPEN_FAIL) {
        let e = new URLSearchParams;
        e.set(h.tR.TAB, h.e5.PREVIEW_TOOL), e.set(h.tR.QUEST_ID, i), (0, m.dL)({
          pathname: b.Z5c.QUEST_HOME_V2,
          search: "?".concat(e.toString())
        })
      }
    }
  }, [a, i]);
  let f = n.useCallback(() => (0, u.openAppWithQuestPreview)(i), [i]);
  if (N) return (0, s.jsxs)("div", {
    className: _.page,
    children: [(0, s.jsx)("img", {
      className: _.bgImg,
      src: v.ZP,
      alt: ""
    }), (0, s.jsx)("div", {
      className: _.logoContainer,
      children: (0, s.jsx)("img", {
        src: E,
        alt: ""
      })
    }), null != k && (0, s.jsx)("div", {
      className: _.card,
      children: "ok" === k.status ? (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)("div", {
          className: _.gameTile,
          children: (0, s.jsx)("img", {
            src: "".concat(p.HO).concat(i, "/dark/").concat(k.value.assets.gameTile),
            alt: "",
            className: _.gameTileImg
          })
        }), (0, s.jsx)(l.Heading, {
          variant: "heading-lg/semibold",
          color: "text-default",
          className: _.headingText,
          children: k.value.messages.questName
        }), (0, s.jsx)(l.Text, {
          variant: "text-md/normal",
          className: _.bodyText,
          children: j.intl.string(j.t.bWuKqh)
        }), (0, s.jsx)(l.Button, {
          variant: "primary",
          text: j.intl.string(j.t.UQvCf7),
          fullWidth: true,
          onClick: f
        })]
      }) : (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(l.Heading, {
          variant: "heading-lg/semibold",
          color: "text-default",
          className: _.headingText,
          children: j.intl.string(j.t.k4z4er)
        }), (0, s.jsx)(l.Text, {
          variant: "text-md/normal",
          className: _.bodyText,
          children: j.intl.string(j.t.gtZK09)
        })]
      })
    })]
  });
  let I = null == a || a === b.kEZ.OPENING || a === b.kEZ.OPEN_FAIL;
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(r.Z, {
      className: _.backgroundArtwork,
      preserveAspectRatio: "xMinYMin slice"
    }), (0, s.jsx)("div", {
      className: _.container,
      children: (0, s.jsx)(d.ZP, {
        children: I ? (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(d.Dx, {
            children: j.intl.string(j.t["Z+hCVU"])
          }), (0, s.jsx)(d.Hh, {})]
        }) : (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(d.Dx, {
            className: _.appOpenedTitle,
            children: j.intl.string(j.t.csrAMJ)
          }), (0, s.jsx)(d.DK, {
            children: j.intl.string(j.t.ghBJz9)
          })]
        })
      })
    })]
  })
}