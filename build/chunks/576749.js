/** Chunk was on 81985 **/
/** chunk id: 576749, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk481060 = require("./481060.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk334877 = require("./334877.js"),
  Chunk981631 = require("./981631.js");
let o = "guild-event-modal",
  s = () => {
    let e = (0, i.bp)() === a.IlC.POPOUT ? r.u1M : r.z1l;
    return {
      modalKey: o,
      contextKey: e,
      onCloseRequest: () => {
        l.l.getState().canCloseModal && (0, r.Mr3)(o, e)
      }
    }
  }