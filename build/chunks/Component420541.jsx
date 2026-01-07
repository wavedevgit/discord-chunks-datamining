/** Chunk was on 13474 **/
/** chunk id: 420541, original params: e,t,r (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk597846 = require("./597846.jsx"),
  Chunk885006 = require("./885006.js"),
  Chunk111810 = require("./111810.js"),
  Chunk317568 = require("./317568.js"),
  Chunk516604 = require("./516604.js"),
  Chunk261906 = require("./261906.js");
let d = () => {
    let e = (0, l.Z)(),
      t = a.useMemo(() => ({
        w: e.width,
        h: e.height
      }), [e]),
      r = (0, s.Z)(t);
    return (0, c.Z)(), (0, n.jsx)("div", {
      className: o.canvasWrapper,
      id: "simple-confetti-canvas",
      children: (0, n.jsx)(i.z, {
        playing: r.playing,
        size: t,
        useClockOptions: {
          minInterval: r.tickRate,
          droppedFramesCallbackThreshold: 10,
          droppedFramesResetTime: 2e3,
          droppedFramesCallback: r.improvePerformance
        },
        drawCallback: (e, t) => {
          r.update(t), r.draw(e)
        }
      })
    })
  },
  f = () => (0, u.kf)("ConfettiCanvasComponent") ? (0, n.jsx)(d, {}) : null