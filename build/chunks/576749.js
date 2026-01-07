/** Chunk was on 88039 **/
/** chunk id: 576749, original params: e,n,t (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk481060 = require("./481060.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk334877 = require("./334877.js"),
  Chunk981631 = require("./981631.js");
let r = "guild-event-modal",
  o = () => {
    let e = (0, c.bp)() === a.IlC.POPOUT ? i.u1M : i.z1l;
    return {
      modalKey: r,
      contextKey: e,
      onCloseRequest: () => {
        l.l.getState().canCloseModal && (0, i.Mr3)(r, e)
      }
    }
  }