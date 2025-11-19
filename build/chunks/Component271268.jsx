/** Chunk was on 80448 **/
/** chunk id: 271268, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk5888 = require("./5888.js"),
  Chunk198358 = require("./198358.jsx"),
  Chunk892694 = require("./892694.js"),
  Chunk388032 = require("./388032.jsx");

function o() {
  let {
    voice: {
      totalVoiceMinutes: t,
      totalVoiceMinutesPercentile: e
    }
  } = (0, Chunk442837.e7)([Chunk5888.Z], () => Chunk5888.Z.getCheckpointData());
  return (0, Chunk54381.jsxs)(Chunk198358.Z, {
    children: [module >= 1e3 ? (0, Chunk54381.jsx)(Chunk793030.xvT, {
      variant: "display-sm",
      color: "text-primary",
      children: Chunk388032.intl.format(Chunk892694.default.Xu0QsX, {
        numHours: Math.floor(module / 60)
      })
    }) : (0, Chunk54381.jsx)(Chunk793030.xvT, {
      variant: "display-sm",
      color: "text-primary",
      children: Chunk388032.intl.format(Chunk892694.default.UZbUtl, {
        numMinutes: Math.floor(module)
      })
    }), (0, Chunk54381.jsx)(Chunk793030.xvT, {
      variant: "display-sm",
      color: "text-primary",
      children: Chunk388032.intl.format(Chunk892694.default["36PZwu"], {
        percent: 100 - exports,
        percentHook: (t, e) => (0, r.jsx)(n.xvT, {
          variant: "display-sm",
          color: "text-primary",
          children: t
        }, e)
      })
    })]
  })
}