/** Chunk was on 78723 **/
/** chunk id: 199630, original params: e,t,s (module,exports,require) **/
require.d(exports, {
  default: () => b
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk877227 = require("./877227.js"),
  Chunk554146 = require("./554146.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk379848 = require("./379848.jsx"),
  Chunk244975 = require("./244975.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk123568 = require("./123568.js"),
  Chunk888283 = require("./888283.js");

function b(e) {
  let {
    upsellType: t,
    onClose: s,
    transitionState: b
  } = e, [E, T] = (0, c.kn)([r.M.Q2_2025_MARKETING_MOMENT_FOLLOW_UP_MODAL]);
  return (0, _.Ay)(o.A.REVERSE_TRIAL_UPSELL_MODAL), n.useEffect(() => () => {
    T(A.i.USER_DISMISS)
  }, [T]), (0, a.jsx)(l.A, {
    artURL: d,
    artContainerClassName: C.JS,
    artClassName: C.Qw,
    enableArtBoxShadow: false,
    type: t,
    title: S.intl.string(S.t.aupMtf),
    body: S.intl.string(S.t.AXmOUb),
    bodyClassName: C.uI,
    glowUp: S.intl.string(S.t.AXmOUb),
    onSubscribeClick: () => {
      T(A.i.TAKE_ACTION)
    },
    secondaryCTA: S.intl.string(S.t.SXYIpB),
    secondaryCTAClassName: C.vh,
    footerClassName: C.qr,
    headerClassName: C.wx,
    onSecondaryClick: function() {
      T(A.i.TAKE_ACTION), s(), (0, i.pX)(u.BVt.APPLICATION_STORE)
    },
    subscribeButtonText: S.intl.string(S.t.J61px0),
    subscribeButtonClassname: C.xF,
    useSubscribeButtonGradient: true,
    hidePremiumOfferUpsell: true,
    showEnhancedUpsell: true,
    hideBackButton: true,
    analyticsLocation: {
      section: u.JJy.REVERSE_TRIAL_UPSELL_MODAL,
      object: u.ZSU.BUTTON_CTA
    },
    transitionState: b,
    onClose: () => (T(A.i.USER_DISMISS), s())
  })
}