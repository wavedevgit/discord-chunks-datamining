/** Chunk was on 63933 **/
/** chunk id: 576749, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk481060 = require("./481060.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk334877 = require("./334877.js"),
  Chunk981631 = require("./981631.js");
let o = "guild-event-modal",
  a = () => {
    let e = (0, Chunk728285.bp)() === Chunk981631.IlC.POPOUT ? Chunk481060.u1M : Chunk481060.z1l;
    return {
      modalKey: o,
      contextKey: module,
      onCloseRequest: () => {
        Chunk334877.l.getState().canCloseModal && (0, Chunk481060.Mr3)(o, module)
      }
    }
  }