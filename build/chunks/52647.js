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
  let e = (0, o.Z)(i.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL),
    t = (0, o.Z)(i.z.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK),
    n = (0, o.Z)(i.z.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK),
    c = r.useCallback(() => {
      e.isDismissed && e.handleToggleDismissState(), t.isDismissed && t.handleToggleDismissState(), n.isDismissed && n.handleToggleDismissState(), a.Z.dispatch({
        type: "VIRTUAL_CURRENCY_ONBOARDING_MODAL_RESET"
      })
    }, [t, n, e]),
    {
      handleResetStatusClick: u
    } = (0, s.kJ)(l.V6);
  return {
    resetOnboardingExperience: c,
    resetQuestStatus: u
  }
}