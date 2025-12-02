/** Chunk was on web.js **/
/** chunk id: 52647, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk473749 = require("./473749.js"),
  Chunk704215 = require("./704215.js"),
  Chunk570140 = require("./570140.js"),
  Chunk972118 = require("./972118.js"),
  Chunk968843 = require("./968843.js"),
  Chunk324805 = require("./324805.js");
let c = () => {
  let e = (0, Chunk972118.Z)(Chunk704215.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL),
    t = (0, Chunk972118.Z)(Chunk704215.z.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK),
    n = (0, Chunk972118.Z)(Chunk704215.z.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK),
    c = Chunk473749.useCallback(() => {
      module.isDismissed && module.handleToggleDismissState(), exports.isDismissed && exports.handleToggleDismissState(), require.isDismissed && require.handleToggleDismissState(), Chunk570140.Z.dispatch({
        type: "VIRTUAL_CURRENCY_ONBOARDING_MODAL_RESET"
      })
    }, [exports, require, module]),
    {
      handleResetStatusClick: u
    } = (0, Chunk968843.kJ)(Chunk324805.V6);
  return {
    resetOnboardingExperience: c,
    resetQuestStatus: u
  }
}