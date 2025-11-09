/** Chunk was on 80448 **/
/** chunk id: 271268, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk951288 = require("./951288.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk5888 = require("./5888.js"),
  Chunk198358 = require("./198358.jsx"),
  Chunk552788 = require("./552788.js"),
  Chunk388032 = require("./388032.jsx");

function o() {
  let {
    voice: {
      totalVoiceMinutes: t,
      totalVoiceMinutesPercentile: e
    }
  } = (0, Chunk442837.e7)([Chunk5888.Z], () => Chunk5888.Z.getCheckpointData());
  return (0, Chunk951288.jsxs)(Chunk198358.Z, {
    children: [module >= 1e3 ? (0, Chunk951288.jsx)(Chunk793030.xvT, {
      variant: "display-sm",
      color: "text-primary",
      children: Chunk388032.intl.format(Chunk552788.default.Xu0QsX, {
        numHours: Math.floor(module / 60)
      })
    }) : (0, Chunk951288.jsx)(Chunk793030.xvT, {
      variant: "display-sm",
      color: "text-primary",
      children: Chunk388032.intl.format(Chunk552788.default.UZbUtl, {
        numMinutes: Math.floor(module)
      })
    }), (0, Chunk951288.jsx)(Chunk793030.xvT, {
      variant: "display-sm",
      color: "text-primary",
      children: Chunk388032.intl.format(Chunk552788.default["36PZwu"], {
        percent: 100 - exports
      })
    })]
  })
}