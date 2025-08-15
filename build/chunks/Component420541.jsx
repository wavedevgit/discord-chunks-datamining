/** Chunk was on 13474 **/
/** chunk id: 420541, original params: e,t,r (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk597846 = require("./597846.jsx"),
  Chunk885006 = require("./885006.js"),
  Chunk111810 = require("./111810.js"),
  Chunk317568 = require("./317568.js"),
  Chunk516604 = require("./516604.js"),
  Chunk313677 = require("./313677.js");
let d = () => {
    let e = (0, Chunk885006.Z)(),
      t = Chunk647438.useMemo(() => ({
        w: module.width,
        h: module.height
      }), [module]),
      r = (0, Chunk516604.Z)(exports);
    return (0, Chunk317568.Z)(), (0, Chunk951288.jsx)("div", {
      className: Chunk313677.canvasWrapper,
      id: "simple-confetti-canvas",
      children: (0, Chunk951288.jsx)(Chunk597846.z, {
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
  f = () => (0, Chunk111810.kf)("ConfettiCanvasComponent") ? (0, Chunk951288.jsx)(d, {}) : null