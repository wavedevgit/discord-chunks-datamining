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
  let e = (0, i.useContext)(f.Q),
    t = (0, c.dQu)(e.primaryColor).hex(),
    {
      quests: {
        numOrbs: n,
        numCompleted: a
      } = {
        numOrbs: 0,
        numCompleted: 0
      }
    } = (0, l.e7)([p.Z], () => p.Z.getCheckpointData()),
    N = 0 === a,
    P = n > 0 || 0 === a,
    w = () => {
      (0, u.Z)(d.Z.getArticleURL(O.BhN.QUESTS_LEARN_MORE))
    };
  return (0, r.jsxs)(g.Z, {
    className: T.container,
    children: [(0, r.jsx)(_.Z, {
      className: T.video,
      slide: y.yD.QUESTS,
      videoEntrySrc: C.Z,
      videoLoopSrc: A.Z
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsxs)("div", {
        className: o()(I.title, {
          [T.emptyState]: N
        }),
        children: [(0, r.jsx)(s.qDn, {
          size: "refresh_sm",
          color: t,
          colorClass: I.iconColor,
          className: I.titleIcon
        }), (0, r.jsx)(E.Z, {
          variant: "eyebrow",
          className: I.eyebrow,
          children: N ? S.intl.string(v.default.QkdNzt) : S.intl.string(v.default.qsFkSO)
        })]
      }), !N && (0, r.jsx)(b.Z, {
        end: a
      }), P && (0, r.jsx)(E.Z, {
        variant: "heading-xxl/medium",
        className: T.subtitle,
        children: 0 === a ? S.intl.format(v.default.UYTBoT, {
          learnMoreHook: (e, t) => (0, r.jsx)(s.P3F, {
            onClick: w,
            className: T.learnMore,
            children: (0, r.jsx)(E.Z, {
              variant: "heading-xxl/medium",
              className: T.link,
              children: e
            })
          }, t)
        }) : S.intl.format(v.default["gd+Olh"], {
          numOrbs: n,
          orbsHook: (e, t) => (0, r.jsxs)(h.Z, {
            children: [(0, r.jsx)(s.aQr, {
              className: T.orbsIcon,
              color: c.TVs.colors.BLACK
            }), e]
          }, t)
        })
      }), (0, r.jsx)(m.o, {
        slide: y.yD.QUESTS
      })]
    })]
  })
}