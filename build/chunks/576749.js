/** Chunk was on 64099 **/
/** chunk id: 576749, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => r
});
var Chunk481060 = require("./481060.js"),
  Chunk40851 = require("./40851.jsx"),
  Chunk334877 = require("./334877.js"),
  Chunk981631 = require("./981631.js");
let _ = "guild-event-modal",
  r = () => {
    let t = (0, Chunk40851.bp)() === Chunk981631.IlC.POPOUT ? Chunk481060.u1M : Chunk481060.z1l;
    return {
      modalKey: _,
      contextKey: module,
      onCloseRequest: () => {
        Chunk334877.l.getState().canCloseModal && (0, Chunk481060.Mr3)(_, module)
      }
    }
  }