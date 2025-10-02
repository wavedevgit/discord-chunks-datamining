/** Chunk was on 80448 **/
/** chunk id: 360469, original params: t,i,r (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk951288 = require("./951288.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk5888 = require("./5888.js"),
  Chunk198358 = require("./198358.jsx"),
  Chunk484718 = require("./484718.js"),
  Chunk388032 = require("./388032.jsx");

function o() {
  let {
    messages: {
      numMessagesSent: t,
      numMessagesSentPercentile: i
    }
  } = (0, Chunk442837.e7)([Chunk5888.Z], () => Chunk5888.Z.getCheckpointData());
  return (0, Chunk951288.jsxs)(Chunk198358.Z, {
    children: [(0, Chunk951288.jsx)(Chunk793030.xvT, {
      variant: "display-sm",
      color: "text-primary",
      children: Chunk388032.intl.format(Chunk484718.default.nPTMHh, {
        numMessages: module,
        messagesHook: (t, i) => (0, e.jsx)(n.xvT, {
          variant: "display-lg",
          color: "text-primary",
          children: t
        }, i)
      })
    }), (0, Chunk951288.jsx)(Chunk793030.xvT, {
      variant: "display-sm",
      color: "text-primary",
      children: Chunk388032.intl.format(Chunk484718.default.ixvOzc, {
        percent: exports
      })
    })]
  })
}