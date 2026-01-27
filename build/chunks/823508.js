/** Chunk was on 59461 **/
/** chunk id: 823508, original params: e,n,t (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk397927 = require("./397927.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk70456 = require("./70456.js"),
  Chunk652215 = require("./652215.js");
let a = "guild-event-modal",
  o = () => {
    let e = (0, l.Us)() === u.BRT.POPOUT ? i.KX8 : i.SYi;
    return {
      modalKey: a,
      contextKey: e,
      onCloseRequest: () => {
        r.N.getState().canCloseModal && (0, i.OoC)(a, e)
      }
    }
  }