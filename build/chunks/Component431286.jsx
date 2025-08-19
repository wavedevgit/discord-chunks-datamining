/** Chunk was on 49882 **/
/** chunk id: 431286, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  t: () => S
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk636977 = require("./636977.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk952265 = require("./952265.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk266454 = require("./266454.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk110560 = require("./110560.jsx"),
  Chunk819640 = require("./819640.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk507808 = require("./507808.js"),
  Chunk822857 = require("./822857.js"),
  Chunk479766 = require("./479766.js"),
  Chunk275388 = require("./275388.jsx"),
  Chunk331663 = require("./331663.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk46140 = require("./46140.js");
let x = "orb-announcement-modal-key";

function S() {
  let {
    enabled: e
  } = (0, Chunk822857.hl)({
    location: "virtual_currency_announcement_modal"
  }), t = (0, Chunk442837.e7)([Chunk479766.Z], () => Chunk479766.Z.onboardingModalOpenedPrior), {
    user: S
  } = (0, Chunk442837.cj)([Chunk594174.default], () => ({
    user: Chunk594174.default.getCurrentUser()
  })), I = (0, Chunk442837.e7)([Chunk819640.Z], () => Chunk819640.Z.hasLayers()), P = (0, Chunk275388.GE)(x), N = (0, Chunk74538.EO)(S) || I || P, [w, Z] = (0, Chunk243778.US)(module && !N ? [Chunk704215.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL] : [], ...Chunk331663.b.useSelectedDismissibleContent);
  Chunk647438.useEffect(() => {
    w !== Chunk704215.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL || exports || (Chunk570140.Z.dispatch({
      type: "VIRTUAL_CURRENCY_ONBOARDING_MODAL_OPEN"
    }), (0, Chunk952265.ZD)(async () => {
      let {
        WrappedAnnouncementModal: e
      } = await require.e("86653").then(require.bind(require, 993318));
      return function(t) {
        let {
          onClose: n,
          transitionState: i
        } = t, o = async () => {
          await n(), Z(C.L.USER_DISMISS)
        };
        return (0, r.jsx)(e, {
          transitionState: i,
          onClose: o,
          ctaOnClick: () => {
            Z(C.L.TAKE_ACTION), (0, d.Q3)(a.z.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK, {
              dismissAction: C.L.INDIRECT_ACTION,
              groupName: C.R.VIRTUAL_CURRENCY_ONBOARDING
            }), (0, d.Q3)(a.z.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK, {
              dismissAction: C.L.INDIRECT_ACTION,
              groupName: C.R.VIRTUAL_CURRENCY_ONBOARDING
            }), (0, b.Y)({
              pageType: j.ZY5.ORBS_ANNOUNCEMENT_MODAL,
              sectionType: j.jXE.ORBS_ANNOUNCEMENT_MODAL,
              ctaObject: j.qAy.CTA_TO_ORB_INTRO_QUEST
            }), (0, f.navigateToQuestHome)({
              questId: E.V6,
              fromContent: l.j.ORBS_ANNOUNCEMENT_MODAL
            }), n()
          }
        })
      }
    }, {
      modalKey: x,
      onCloseRequest: () => {
        Z(Chunk921944.L.USER_DISMISS), (0, Chunk481060.Mr3)(x)
      }
    }))
  }, [w, module, exports, Z, I])
}