/** Chunk was on 71020 **/
/** chunk id: 823508, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk397927 = require("./397927.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk70456 = require("./70456.js"),
  Chunk652215 = require("./652215.js");
let o = "guild-event-modal",
  s = () => {
    let e = (0, r.Us)() === a.BRT.POPOUT ? i.KX8 : i.SYi;
    return {
      modalKey: o,
      contextKey: e,
      onCloseRequest: () => {
        l.N.getState().canCloseModal && (0, i.OoC)(o, e)
      }
    }
  }