/** Chunk was on web.js **/
/** chunk id: 360469, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk324060 = require("./324060.js"),
  Chunk5888 = require("./5888.js"),
  Chunk26118 = require("./26118.js"),
  Chunk275189 = require("./275189.jsx"),
  Chunk489658 = require("./489658.jsx"),
  Chunk909397 = require("./909397.jsx"),
  Chunk198358 = require("./198358.jsx"),
  Chunk391876 = require("./391876.jsx"),
  Chunk947189 = require("./947189.jsx"),
  Chunk612776 = require("./612776.js"),
  Chunk638398 = require("./638398.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk554445 = require("./554445.js"),
  Chunk784054 = require("./784054.js"),
  Chunk946515 = require("./946515.js"),
  Chunk908574 = require("./908574.js");

function I() {
  let {
    messages: {
      numMessagesSent: e,
      numMessagesSentPercentile: t,
      topMonth: {
        month: n
      }
    } = {
      numMessagesSent: 0,
      numMessagesSentPercentile: 0,
      topMonth: {
        month: 0
      }
    }
  } = (0, o.e7)([c.Z], () => c.Z.getCheckpointData()), I = i.useContext(l.Q), T = (0, s.dQu)(I.primaryColor).hex(), {
    monthName: C
  } = (0, u.CE)(n, b.intl.currentLocale), A = null != t;
  return (0, r.jsxs)(_.Z, {
    className: O.container,
    children: [(0, r.jsx)(d.Z, {
      className: O.video,
      slide: g.yD.MESSAGES,
      videoEntrySrc: v.Z,
      videoLoopSrc: S.Z
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsxs)("div", {
        className: y.title,
        children: [(0, r.jsx)(a.kBi, {
          size: "refresh_sm",
          color: T,
          colorClass: y.iconColor,
          className: y.titleIcon
        }), (0, r.jsx)(h.Z, {
          variant: "eyebrow",
          className: y.eyebrow,
          children: b.intl.format(E.default.nPTMHj, {
            numMessages: e
          })
        })]
      }), (0, r.jsx)(m.Z, {
        end: e
      }), (0, r.jsx)(h.Z, {
        variant: "heading-xxl/medium",
        className: O.subtitle,
        children: A ? b.intl.format(E.default.ixvOza, {
          percent: 100 - t,
          percentHook: (e, t) => (0, r.jsx)(f.Z, {
            children: e
          }, t)
        }) : b.intl.format(E.default["Zd+Ej+"], {
          month: C,
          monthHook: (e, t) => (0, r.jsx)(f.Z, {
            children: e
          }, t)
        })
      }), (0, r.jsx)(p.o, {
        slide: g.yD.MESSAGES
      })]
    })]
  })
}