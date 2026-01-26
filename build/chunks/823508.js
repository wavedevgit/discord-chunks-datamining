/** Chunk was on 97887 **/
/** chunk id: 823508, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk397927 = require("./397927.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk70456 = require("./70456.js"),
  Chunk652215 = require("./652215.js");
let a = "guild-event-modal",
  o = () => {
    let e = (0, l.Us)() === s.BRT.POPOUT ? r.KX8 : r.SYi;
    return {
      modalKey: a,
      contextKey: e,
      onCloseRequest: () => {
        i.N.getState().canCloseModal && (0, r.OoC)(a, e)
      }
    }
  }