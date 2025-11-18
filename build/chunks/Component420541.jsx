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
  Chunk468676 = require("./468676.js");
let d = () => {
    let e = (0, Chunk885006.Z)(),
      t = Chunk473749.useMemo(() => ({
        w: module.width,
        h: module.height
      }), [module]),
      r = (0, Chunk516604.Z)(exports);
    return (0, Chunk317568.Z)(), (0, Chunk54381.jsx)("div", {
      className: Chunk468676.canvasWrapper,
      id: "simple-confetti-canvas",
      children: (0, Chunk54381.jsx)(Chunk597846.z, {
        playing: require.playing,
        size: exports,
        useClockOptions: {
          minInterval: require.tickRate,
          droppedFramesCallbackThreshold: 10,
          droppedFramesResetTime: 2e3,
          droppedFramesCallback: require.improvePerformance
        },
        drawCallback: (e, t) => {
          r.update(t), r.draw(e)
        }
      })
    })
  },
  f = () => (0, Chunk111810.kf)("ConfettiCanvasComponent") ? (0, Chunk54381.jsx)(d, {}) : null