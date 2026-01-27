/** Chunk was on web.js **/
/** chunk id: 324861, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk64700 = require("./64700.js"),
  Chunk554146 = require("./554146.js"),
  Chunk73153 = require("./73153.js"),
  Chunk20439 = require("./20439.js"),
  Chunk890687 = require("./890687.js"),
  Chunk654487 = require("./654487.js");
let c = () => {
  let e = (0, o.A)(i.M.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL),
    t = (0, o.A)(i.M.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK),
    n = (0, o.A)(i.M.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK),
    c = r.useCallback(() => {
      e.isDismissed && e.handleToggleDismissState(), t.isDismissed && t.handleToggleDismissState(), n.isDismissed && n.handleToggleDismissState(), a.h.dispatch({
        type: "VIRTUAL_CURRENCY_ONBOARDING_MODAL_RESET"
      })
    }, [t, n, e]),
    {
      handleResetStatusClick: u
    } = (0, s.j$)(l.Fw);
  return {
    resetOnboardingExperience: c,
    resetQuestStatus: u
  }
}