/** Chunk was on 51816 **/
/** chunk id: 415788, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  default: () => _
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk948789 = require("./948789.js"),
  Chunk704215 = require("./704215.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk243778 = require("./243778.jsx"),
  Chunk790527 = require("./790527.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk817992 = require("./817992.js"),
  Chunk309389 = require("./309389.js");

function _(e) {
  let {
    upsellType: t,
    onClose: a,
    transitionState: _
  } = e, [L, T] = (0, u.US)([o.z.Q2_2025_MARKETING_MOMENT_FOLLOW_UP_MODAL]);
  return (0, c.ZP)(i.Z.REVERSE_TRIAL_UPSELL_MODAL), n.useEffect(() => () => {
    T(l.L.USER_DISMISS)
  }, [T]), (0, s.jsx)(d.Z, {
    artURL: S,
    artContainerClassName: A.artContainer,
    artClassName: A.art,
    enableArtBoxShadow: false,
    type: t,
    title: C.intl.string(C.t.aupMtf),
    body: C.intl.string(C.t.AXmOUb),
    bodyClassName: A.subHeader,
    glowUp: C.intl.string(C.t.AXmOUb),
    onSubscribeClick: () => {
      T(l.L.TAKE_ACTION)
    },
    secondaryCTA: C.intl.string(C.t.SXYIpB),
    secondaryCTAClassName: A.secondaryCTA,
    footerClassName: A.footer,
    headerClassName: A.header,
    onSecondaryClick: function() {
      T(l.L.TAKE_ACTION), a(), (0, r.uL)(b.Z5c.APPLICATION_STORE)
    },
    subscribeButtonText: C.intl.string(C.t.J61px0),
    subscribeButtonClassname: A.subscribeButton,
    useSubscribeButtonGradient: true,
    hidePremiumOfferUpsell: true,
    showEnhancedUpsell: true,
    hideBackButton: true,
    analyticsLocation: {
      section: b.jXE.REVERSE_TRIAL_UPSELL_MODAL,
      object: b.qAy.BUTTON_CTA
    },
    transitionState: _,
    onClose: () => (T(l.L.USER_DISMISS), a())
  })
}