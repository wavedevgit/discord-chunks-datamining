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
  Chunk862474 = require("./862474.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk417788 = require("./417788.js"),
  Chunk949571 = require("./949571.js"),
  Chunk464633 = require("./464633.js"),
  Chunk270586 = require("./270586.js");

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
  } = (0, Chunk442837.e7)([Chunk5888.Z], () => Chunk5888.Z.getCheckpointData()), I = Chunk473749.useContext(Chunk324060.Q), T = (0, Chunk481060.dQu)(I.primaryColor).hex(), {
    monthName: C
  } = (0, Chunk26118.CE)(require, Chunk388032.intl.currentLocale), A = null != exports;
  return (0, Chunk54381.jsxs)(Chunk198358.Z, {
    className: Chunk949571.container,
    children: [(0, Chunk54381.jsx)(Chunk275189.Z, {
      className: Chunk949571.video,
      slide: Chunk612776.yD.MESSAGES,
      videoEntrySrc: Chunk464633.Z,
      videoLoopSrc: Chunk270586.Z
    }), (0, Chunk54381.jsxs)("div", {
      children: [(0, Chunk54381.jsxs)("div", {
        className: Chunk417788.title,
        children: [(0, Chunk54381.jsx)(Chunk793030.kBi, {
          size: "refresh_sm",
          color: T,
          colorClass: Chunk417788.iconColor,
          className: Chunk417788.titleIcon
        }), (0, Chunk54381.jsx)(Chunk391876.Z, {
          variant: "eyebrow",
          className: Chunk417788.eyebrow,
          children: Chunk388032.intl.format(Chunk862474.default.nPTMHj, {
            numMessages: module
          })
        })]
      }), (0, Chunk54381.jsx)(Chunk947189.Z, {
        end: module
      }), (0, Chunk54381.jsx)(Chunk391876.Z, {
        variant: "heading-xxl/medium",
        className: Chunk949571.subtitle,
        children: A ? Chunk388032.intl.format(Chunk862474.default.ixvOza, {
          percent: 100 - exports,
          percentHook: (e, t) => (0, r.jsx)(f.Z, {
            children: e
          }, t)
        }) : Chunk388032.intl.format(Chunk862474.default["Zd+Ej+"], {
          month: C,
          monthHook: (e, t) => (0, r.jsx)(f.Z, {
            children: e
          }, t)
        })
      }), (0, Chunk54381.jsx)(Chunk909397.o, {
        slide: Chunk612776.yD.MESSAGES
      })]
    })]
  })
}