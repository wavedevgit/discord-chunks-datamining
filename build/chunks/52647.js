/** Chunk was on web.js **/
/** chunk id: 52647, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk570140 = require("./570140.js"),
  Chunk972118 = require("./972118.js"),
  Chunk113434 = require("./113434.js"),
  Chunk581883 = require("./581883.js"),
  Chunk46140 = require("./46140.js");
let d = () => {
  var e;
  let t = null != (e = (0, Chunk442837.e7)([Chunk581883.Z], () => {
      var e;
      return null == (e = Chunk581883.Z.settings.userContent) ? true : module.dismissedContents
    })) ? module : new Uint8Array,
    n = (0, Chunk972118.Z)(Chunk704215.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL, exports),
    d = (0, Chunk972118.Z)(Chunk704215.z.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK, exports),
    f = (0, Chunk972118.Z)(Chunk704215.z.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK, exports),
    _ = Chunk647438.useCallback(() => {
      require.isDismissed && require.handleToggleDismissState(), d.isDismissed && d.handleToggleDismissState(), f.isDismissed && f.handleToggleDismissState(), Chunk570140.Z.dispatch({
        type: "VIRTUAL_CURRENCY_ONBOARDING_MODAL_RESET"
      })
    }, [d, f, require]),
    {
      handleResetStatusClick: p
    } = (0, Chunk113434.kJ)(Chunk46140.V6);
  return {
    resetOnboardingExperience: _,
    resetQuestStatus: p
  }
}