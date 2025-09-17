/** Chunk was on 78728 **/
/** chunk id: 576749, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk481060 = require("./481060.js"),
  Chunk40851 = require("./40851.jsx"),
  Chunk334877 = require("./334877.js"),
  Chunk981631 = require("./981631.js");
let c = "guild-event-modal",
  o = () => {
    let e = (0, Chunk40851.bp)() === Chunk981631.IlC.POPOUT ? Chunk481060.u1M : Chunk481060.z1l;
    return {
      modalKey: c,
      contextKey: module,
      onCloseRequest: () => {
        Chunk334877.l.getState().canCloseModal && (0, Chunk481060.Mr3)(c, module)
      }
    }
  }