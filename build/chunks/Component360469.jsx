/** Chunk was on 80448 **/
/** chunk id: 360469, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk5888 = require("./5888.js"),
  Chunk198358 = require("./198358.jsx"),
  Chunk140939 = require("./140939.js"),
  Chunk388032 = require("./388032.jsx");

function u() {
  let {
    messages: {
      numMessagesSent: e,
      numMessagesSentPercentile: t
    } = {
      numMessagesSent: 0,
      numMessagesSentPercentile: 0
    }
  } = (0, Chunk442837.e7)([Chunk5888.Z], () => Chunk5888.Z.getCheckpointData());
  return (0, Chunk54381.jsxs)(Chunk198358.Z, {
    children: [(0, Chunk54381.jsx)(Chunk793030.xvT, {
      variant: "display-sm",
      color: "text-strong",
      children: Chunk388032.intl.format(Chunk140939.default.nPTMHj, {
        numMessages: module
      })
    }), null != exports ? (0, Chunk54381.jsx)(Chunk793030.xvT, {
      variant: "display-sm",
      color: "text-strong",
      children: Chunk388032.intl.format(Chunk140939.default.ixvOza, {
        percent: 100 - exports,
        percentHook: (e, t) => (0, i.jsx)(s.xvT, {
          variant: "display-sm",
          color: "text-strong",
          children: e
        }, t)
      })
    }) : null]
  })
}