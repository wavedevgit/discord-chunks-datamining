/** Chunk was on web.js **/
/** chunk id: 741549, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk782568 = require("./782568.js"),
  Chunk63063 = require("./63063.js"),
  Chunk324060 = require("./324060.js"),
  Chunk5888 = require("./5888.js"),
  Chunk275189 = require("./275189.jsx"),
  Chunk489658 = require("./489658.jsx"),
  Chunk909397 = require("./909397.jsx"),
  Chunk198358 = require("./198358.jsx"),
  Chunk391876 = require("./391876.jsx"),
  Chunk947189 = require("./947189.jsx"),
  Chunk612776 = require("./612776.js"),
  Chunk981631 = require("./981631.js"),
  Chunk638398 = require("./638398.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk554445 = require("./554445.js"),
  Chunk469095 = require("./469095.js"),
  Chunk1222 = require("./1222.js"),
  Chunk976999 = require("./976999.js");

function N() {
  let e = (0, Chunk473749.useContext)(Chunk324060.Q),
    t = (0, Chunk481060.dQu)(module.primaryColor).hex(),
    {
      quests: {
        numOrbs: n,
        numCompleted: a
      } = {
        numOrbs: 0,
        numCompleted: 0
      }
    } = (0, Chunk442837.e7)([Chunk5888.Z], () => Chunk5888.Z.getCheckpointData()),
    N = 0 === Chunk120356,
    P = require > 0 || 0 === Chunk120356,
    R = () => {
      (0, Chunk782568.Z)(Chunk63063.Z.getArticleURL(Chunk981631.BhN.QUESTS_LEARN_MORE))
    };
  return (0, Chunk54381.jsxs)(Chunk198358.Z, {
    className: Chunk469095.container,
    children: [(0, Chunk54381.jsx)(Chunk275189.Z, {
      className: Chunk469095.video,
      slide: Chunk612776.yD.QUESTS,
      videoEntrySrc: Chunk1222.Z,
      videoLoopSrc: Chunk976999.Z
    }), (0, Chunk54381.jsxs)("div", {
      children: [(0, Chunk54381.jsxs)("div", {
        className: o()(Chunk554445.title, {
          [Chunk469095.emptyState]: N
        }),
        children: [(0, Chunk54381.jsx)(Chunk793030.qDn, {
          size: "refresh_sm",
          color: exports,
          colorClass: Chunk554445.iconColor,
          className: Chunk554445.titleIcon
        }), (0, Chunk54381.jsx)(Chunk391876.Z, {
          variant: "eyebrow",
          className: Chunk554445.eyebrow,
          children: N ? Chunk388032.intl.string(Chunk638398.default.QkdNzt) : Chunk388032.intl.string(Chunk638398.default.qsFkSO)
        })]
      }), !N && (0, Chunk54381.jsx)(Chunk947189.Z, {
        end: Chunk120356
      }), P && (0, Chunk54381.jsx)(Chunk391876.Z, {
        variant: "heading-xxl/medium",
        className: Chunk469095.subtitle,
        children: 0 === Chunk120356 ? Chunk388032.intl.format(Chunk638398.default.UYTBoT, {
          learnMoreHook: (e, t) => (0, r.jsx)(s.P3F, {
            onClick: R,
            className: T.learnMore,
            children: (0, r.jsx)(E.Z, {
              variant: "heading-xxl/medium",
              className: T.link,
              children: e
            })
          }, t)
        }) : Chunk388032.intl.format(Chunk638398.default["gd+Olh"], {
          numOrbs: require,
          orbsHook: (e, t) => (0, r.jsxs)(m.Z, {
            children: [(0, r.jsx)(s.aQr, {
              className: T.orbsIcon,
              color: c.TVs.colors.BLACK
            }), e]
          }, t)
        })
      }), (0, Chunk54381.jsx)(Chunk909397.o, {
        slide: Chunk612776.yD.QUESTS
      })]
    })]
  })
}