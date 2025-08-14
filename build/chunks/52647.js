/** Chunk was on 7384 **/
/** chunk id: 52647, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js");
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk570140 = require("./570140.js"),
  Chunk972118 = require("./972118.js"),
  Chunk113434 = require("./113434.js"),
  Chunk581883 = require("./581883.js"),
  Chunk46140 = require("./46140.js");
let u = () => {
  var e;
  let t = null != (e = (0, Chunk442837.e7)([Chunk581883.Z], () => {
      var e;
      return null == (e = Chunk581883.Z.settings.userContent) ? true : module.dismissedContents
    })) ? module : new Uint8Array,
    n = (0, Chunk972118.Z)(Chunk704215.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL, exports),
    u = (0, Chunk972118.Z)(Chunk704215.z.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK, exports),
    m = (0, Chunk972118.Z)(Chunk704215.z.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK, exports),
    p = Chunk73800.useCallback(() => {
      require.isDismissed && require.handleToggleDismissState(), u.isDismissed && u.handleToggleDismissState(), m.isDismissed && m.handleToggleDismissState(), Chunk570140.Z.dispatch({
        type: "VIRTUAL_CURRENCY_ONBOARDING_MODAL_RESET"
      })
    }, [u, m, require]),
    {
      handleResetStatusClick: g
    } = (0, Chunk113434.kJ)(Chunk46140.V6);
  return {
    resetOnboardingAnnouncementModal: p,
    resetQuestStatus: g
  }
}