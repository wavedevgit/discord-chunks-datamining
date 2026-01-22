/** Chunk was on 78723 **/
/** chunk id: 199630, original params: t,e,s (module,exports,require) **/
require.d(exports, {
  default: () => A
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

function A(t) {
  let {
    upsellType: e,
    onClose: s,
    transitionState: A
  } = t, [C, E] = (0, l.kn)([r.M.Q2_2025_MARKETING_MOMENT_FOLLOW_UP_MODAL]);
  return (0, c.Ay)(o.A.REVERSE_TRIAL_UPSELL_MODAL), n.useEffect(() => () => {
    E(d.i.USER_DISMISS)
  }, [E]), (0, a.jsx)(_.A, {
    artURL: f,
    artContainerClassName: S.JS,
    artClassName: S.Qw,
    enableArtBoxShadow: false,
    type: e,
    title: u.intl.string(u.t.aupMtf),
    body: u.intl.string(u.t.AXmOUb),
    bodyClassName: S.uI,
    glowUp: u.intl.string(u.t.AXmOUb),
    onSubscribeClick: () => {
      E(d.i.TAKE_ACTION)
    },
    secondaryCTA: u.intl.string(u.t.SXYIpB),
    secondaryCTAClassName: S.vh,
    footerClassName: S.qr,
    headerClassName: S.wx,
    onSecondaryClick: function() {
      E(d.i.TAKE_ACTION), s(), (0, i.pX)(b.BVt.APPLICATION_STORE)
    },
    subscribeButtonText: u.intl.string(u.t.J61px0),
    subscribeButtonClassname: S.xF,
    useSubscribeButtonGradient: true,
    hidePremiumOfferUpsell: true,
    showEnhancedUpsell: true,
    hideBackButton: true,
    analyticsLocation: {
      section: b.JJy.REVERSE_TRIAL_UPSELL_MODAL,
      object: b.ZSU.BUTTON_CTA
    },
    transitionState: A,
    onClose: () => (E(d.i.USER_DISMISS), s())
  })
}