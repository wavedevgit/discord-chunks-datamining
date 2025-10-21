/** Chunk was on 51816 **/
/** chunk id: 415788, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  default: () => S
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk948789 = require("./948789.js"),
  Chunk704215 = require("./704215.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk243778 = require("./243778.jsx"),
  Chunk790527 = require("./790527.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk254228 = require("./254228.js"),
  Chunk309389 = require("./309389.js");

function S(e) {
  let {
    upsellType: t,
    onClose: a,
    transitionState: S
  } = e, [L, T] = (0, u.US)([o.z.Q2_2025_MARKETING_MOMENT_FOLLOW_UP_MODAL]);
  return (0, c.ZP)(i.Z.REVERSE_TRIAL_UPSELL_MODAL), n.useEffect(() => () => {
    T(b.L.USER_DISMISS)
  }, [T]), (0, s.jsx)(_.Z, {
    artURL: A,
    artContainerClassName: C.artContainer,
    artClassName: C.art,
    enableArtBoxShadow: false,
    type: t,
    title: l.intl.string(l.t.aupMtf),
    body: l.intl.string(l.t.AXmOUb),
    bodyClassName: C.subHeader,
    glowUp: l.intl.string(l.t.AXmOUb),
    onSubscribeClick: () => {
      T(b.L.TAKE_ACTION)
    },
    secondaryCTA: l.intl.string(l.t.SXYIpB),
    secondaryCTAClassName: C.secondaryCTA,
    footerClassName: C.footer,
    headerClassName: C.header,
    onSecondaryClick: function() {
      T(b.L.TAKE_ACTION), a(), (0, r.uL)(d.Z5c.APPLICATION_STORE)
    },
    subscribeButtonText: l.intl.string(l.t.J61px0),
    subscribeButtonClassname: C.subscribeButton,
    useSubscribeButtonGradient: true,
    hidePremiumOfferUpsell: true,
    showEnhancedUpsell: true,
    hideBackButton: true,
    analyticsLocation: {
      section: d.jXE.REVERSE_TRIAL_UPSELL_MODAL,
      object: d.qAy.BUTTON_CTA
    },
    transitionState: S,
    onClose: () => (T(b.L.USER_DISMISS), a())
  })
}