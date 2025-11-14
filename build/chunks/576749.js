/** Chunk was on 91053 **/
/** chunk id: 576749, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk481060 = require("./481060.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk334877 = require("./334877.js"),
  Chunk981631 = require("./981631.js");
let s = "guild-event-modal",
  o = () => {
    let e = (0, Chunk728285.bp)() === Chunk981631.IlC.POPOUT ? Chunk481060.u1M : Chunk481060.z1l;
    return {
      modalKey: s,
      contextKey: module,
      onCloseRequest: () => {
        Chunk334877.l.getState().canCloseModal && (0, Chunk481060.Mr3)(s, module)
      }
    }
  }