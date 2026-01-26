/** Chunk was on 81579 **/
/** chunk id: 823508, original params: e,n,t (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk397927 = require("./397927.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk70456 = require("./70456.js"),
  Chunk652215 = require("./652215.js");
let s = "guild-event-modal",
  u = () => {
    let e = (0, l.Us)() === a.BRT.POPOUT ? i.KX8 : i.SYi;
    return {
      modalKey: s,
      contextKey: e,
      onCloseRequest: () => {
        r.N.getState().canCloseModal && (0, i.OoC)(s, e)
      }
    }
  }