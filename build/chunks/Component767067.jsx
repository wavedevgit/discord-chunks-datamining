/** Chunk was on 75909 **/
/** chunk id: 767067, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk925477 = require("./925477.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk210887 = require("./210887.js"),
  Chunk304696 = require("./304696.js"),
  Chunk209668 = require("./209668.js");
let u = function(e) {
  let {
    hasVideoAsset: t,
    playerState: n,
    pauseReason: u
  } = e, d = (0, i.e7)([a.Z], () => a.Z.getState().theme), m = (0, s.UH)({
    hasVideoAsset: t,
    playerState: n,
    pauseReason: u
  });
  return null == m ? null : (0, r.jsxs)(r.Fragment, {
    children: [!t && (0, r.jsx)("div", {
      className: c.endScreenOverlay
    }), (0, r.jsx)("div", {
      className: c.videoStatusMessage,
      style: {
        background: (0, o.wj)(d) ? "rgba(0, 0, 0, 0.65)" : "rgba(255, 255, 255, 0.65)"
      },
      children: (0, r.jsx)(l.xvT, {
        variant: "text-sm/normal",
        color: "text-default",
        children: m
      })
    })]
  })
}