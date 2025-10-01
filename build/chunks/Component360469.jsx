/** Chunk was on 80448 **/
/** chunk id: 360469, original params: e,i,t (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk951288 = require("./951288.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk5888 = require("./5888.js"),
  Chunk198358 = require("./198358.jsx"),
  Chunk509950 = require("./509950.js"),
  Chunk388032 = require("./388032.jsx");

function o() {
  let {
    messages: {
      numMessagesSent: e,
      numMessagesSentPercentile: i
    }
  } = (0, Chunk442837.e7)([Chunk5888.Z], () => Chunk5888.Z.getCheckpointData());
  return (0, Chunk951288.jsxs)(Chunk198358.Z, {
    children: [(0, Chunk951288.jsx)(Chunk793030.xvT, {
      variant: "display-lg",
      color: "text-primary",
      children: module.toLocaleString()
    }), (0, Chunk951288.jsx)(Chunk793030.xvT, {
      variant: "display-sm",
      color: "text-primary",
      children: Chunk388032.intl.string(Chunk509950.default.nPTMHh)
    }), (0, Chunk951288.jsx)(Chunk793030.xvT, {
      variant: "display-sm",
      color: "text-primary",
      children: Chunk388032.intl.format(Chunk509950.default.ixvOzc, {
        percent: exports
      })
    })]
  })
}