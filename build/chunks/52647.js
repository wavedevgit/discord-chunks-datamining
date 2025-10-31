/** Chunk was on 39297 **/
/** chunk id: 52647, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk647438 = require("./647438.js"),
  Chunk704215 = require("./704215.js"),
  Chunk570140 = require("./570140.js"),
  Chunk972118 = require("./972118.js"),
  Chunk113434 = require("./113434.js"),
  Chunk46140 = require("./46140.js");
let c = () => {
  let e = (0, Chunk972118.Z)(Chunk704215.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL),
    t = (0, Chunk972118.Z)(Chunk704215.z.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK),
    n = (0, Chunk972118.Z)(Chunk704215.z.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK),
    c = Chunk647438.useCallback(() => {
      module.isDismissed && module.handleToggleDismissState(), exports.isDismissed && exports.handleToggleDismissState(), require.isDismissed && require.handleToggleDismissState(), Chunk570140.Z.dispatch({
        type: "VIRTUAL_CURRENCY_ONBOARDING_MODAL_RESET"
      })
    }, [exports, require, module]),
    {
      handleResetStatusClick: d
    } = (0, Chunk113434.kJ)(Chunk46140.V6);
  return {
    resetOnboardingExperience: c,
    resetQuestStatus: d
  }
}