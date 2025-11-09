/** Chunk was on 98920 **/
/** chunk id: 22989, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk990547 = require("./990547.js"),
  Chunk352065 = require("./352065.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk362693 = require("./362693.jsx"),
  Chunk674908 = require("./674908.jsx"),
  Chunk115559 = require("./115559.jsx"),
  Chunk121937 = require("./121937.js");

function m(e) {
  let {
    clip: t,
    channelId: n,
    transitionState: m,
    onClose: h
  } = e, {
    analyticsLocations: p
  } = (0, s.ZP)(r.Z.CLIPS_EDITOR);
  return (0, l.jsx)(s.Gt, {
    value: p,
    children: (0, l.jsx)(i.A, {
      onClose: h,
      transitionState: m,
      trackingProps: {
        impression: {
          impressionName: a.ImpressionNames.CLIP_EDITOR_VIEWED
        }
      },
      children: (0, l.jsx)("div", {
        className: d.modalContainer,
        children: (0, l.jsxs)(c.u, {
          clip: t,
          children: [(0, l.jsx)(o.Z, {
            clip: t,
            transitionState: m
          }), (0, l.jsx)(u.Z, {
            channelId: n,
            clip: t,
            onClose: h
          })]
        })
      })
    })
  })
}